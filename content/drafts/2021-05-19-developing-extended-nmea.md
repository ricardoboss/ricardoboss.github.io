---
title: Developing extended-nmea
createdAt: 2021-05-19T15:00:00+02:00
description: >-
    These are some insights into the development of a node package called extended-nmea, which decodes a stream of text
    from a protocol called NMEA0183 into objects. Written in TypeScript.
---

## extended-nmea

So what is this library [`extended-nmea`][1]? In short, it is a TypeScript library containing a Decoder, and a class for
every "sentence" in the NMEA0183 protocol. Each "sentence" is some data in a specific format, which is sent by GPS
trackers, temperature sensors and many other things, but mainly sensors.

## NMEA0183

[NMEA][2], short for "National Marine Electronics Association", is an association from the USA which "is committed to
enhancing the technology and safety of marine electronics through installer training and interface standards".
One of these standards is NMEA0183. If you want to purchase the latest version of their standard definition, you can
buy one on their site. If you aren't working with it professionally, I would not recommend buying it, since there are
enough reverse-engineered documentations online available (I even added two to the extended-nmea repository to ease
development).

### The Protocol

The protocol itself is pretty simple. I will skip the physical part of the protocol, which involves connecting wires in
a specific way and go directly to the textual representation.

The basic concept to grasp is what a "sentence" is. A sentence always begins with the `$` character and always ends with
`<CR><LF>` (a windows-style line ending). They are always made up of printable ASCII characters and should not be more
than 80 characters in length.

Next, we define three different sentence types:

- Talker Sentence: always the same format, sent by a sensor containing data and status information
- Query Sentence: always the same format, sent by a receiver to request specific data from a talker
- Proprietary Sentence: data format and contents defined by third-party

#### Talker Sentences

A talker sentence always begins with "$" followed by the talker ID and then the sentence ID. The talker ID is always two
characters and the sentence ID always three characters in length. Following this "header" is a list of fields, separated
by commas. The number of fields varies by sentence ID. Some sentences need more than 80 characters, so they dedicate the
first two fields to a "page" and "total pages" type of information (can be seen in GSV for example).
After this list, a "*" character followed by a checksum is appended. The newline ends the sentence.

```
$AABBB,CCC,123,...*XX<CR><LF>
```

In this example, `AA` is the talker ID, `BBB` is the sentence ID, `CCC,123,...` are the data fields and `XX` is the
checksum.

The checksum is a simple XOR-checksum for every character between "$" and "*", excluding both. This is a code snippet
from the library, which implements this checksum calculation in Typescript ([permalink][4]):

```typescript
function xorChecksum(data: string): Uppercase<string> {
  if (typeof data !== 'string')
    throw new TypeError(`Cannot use arguments of type '${typeof data}' as input.`);

  let sum = 0;
  for (let i = 0; i < data.length; i++)
    sum ^= data.charCodeAt(i);

  const hex = sum.toString(16);

  // crude hack to pad with zeros
  return ('00' + hex).slice(-2).toUpperCase();
}
```

The resulting checksum will always consist of two hexadecimal uppercase characters.

What I wrote earlier about the talker and sentence ID lengths is not always true. Not every device out there in the
world strictly adheres to the protocol and may use more or less than three characters for the sentence ID (at least in
my experience). Therefore, the limit of 80 characters is also not as strict as the protocol indicates.

#### Query Sentences

A query sentence allows devices to request certain sentences (data) from other devices. It has a similar structure to
talker sentences:

```
$RRLLQ,BBB<CR><LF>
```

`RR` is the requester ID, `LL` is the device being queried and `BBB` is the mnemonic of the sentence being requested.
The fifth letter in a query sentence is always `Q`. `BBB` corresponds to the sentence ID in the talker sentence above.
As you can see, this sentence does not contain a checksum.

#### Proprietary Sentences

The proprietary sentences are a means to allow third-party developers to create their own sentence IDs or even data
formats, as long as they fit in the general format for NMEA0183.

```
$PMMM...<CR><LF>
```

Proprietary sentences always start with "$P", followed by a three character manufacturer ID `MMM`. Everything between this
header and the newline can be formatted however the manufacturer wants.

## Why tho

The motivation behind this project arose when I wanted to create a web application, which parsed and then visualized
data provided in the NMEA0183 standard. After looking into some existing libraries, I forked [jamesp/node-nmea][3] and
started tinkering with the code and even opened a [pull request][6], which got accepted. In my fork, I originally just
wanted to clean up the code and maybe change some interfaces.

When I began my original project, I wanted to harness the power of type safety from TypeScript. Since [node-nmea][3] was
not type safe, it didn't play well with the rest of the code. That's why I created this version, which is a
completely new implementation with the same idea, just with TypeScript support.

The library supports registering proprietary and talker sentences not already included, so you can start developing ASAP
with your use-case.

In the end, I created [ricardoboss/vessel-state][5], which uses this library to update a Vuex store's state,
representing a vessel with the latest information available.

## Starting Development

I began by creating class definitions for NMEA sentences in general and the three different sub-types (talker, query,
proprietary). Then, I created the `Decoder` class, which would later possess the functionality to match a string to a
registered sentence type and return a decoded version of it. I also wanted to keep the ability to add other sentences
later on. The original library ([`node-nmea`][3]) used a map with string keys, where the sentence ID is the key, and the
value is an object with a decoder function. I thought this was a good idea, so I re-used this idea. The `Decoder` class
keeps a map for every sentence type to quickly filter it. [This method][7] of the decoder class checks which sentence type
a string given to it has and passes it to a more-detailed decoder method:

```typescript
class Decoder {
  public static decode(data: string): INmeaSentence {
    if (typeof data !== 'string')
    	throw new Error(`Unable to decode sentence: invalid data type: ${typeof data}. Only strings are supported.`);

    // check proprietary sentences first to prevent false positives
    if (data.length > 1 && data[1] === 'P') {
      return this.decodeProprietary(data);
    }

    if (data.length > 5 && data[5] === 'Q') {
      return this.decodeQuery(data);
    }

    return this.decodeTalker(data);
  }
}
```

Each method has it's own way of parsing the given sentence. A query sentence for example will just invoke the 
`QuerySentence` constructor and all interpretation of the data is done in the getters. Proprietary and talker sentences
on the other hand need to be dynamic and receive a little more evaluation.

To instatiate a proprietary sentence, we first need to check if it has been registered in the decoder. The
`ProprietaryCodecs` array contains the constructors registered by the user and are keyed by their identifier
(manufacturer id + sentence id). If the user expects a certain type, they can pass it as a generic parameter and enjoy
full type safety:

```typescript
class Decoder {
  public static decodeProprietary<T extends IProprietarySentence>(data: string): T {
		const manufacturerId = data.substr(2, data.indexOf(',') - 2);
		if (!Decoder.ProprietaryCodecs.has(manufacturerId))
			throw new Error(`Unable to decode sentence: unknown manufacturer id for proprietary sentence: ${manufacturerId}`);

		const sentenceConstructor = Decoder.ProprietaryCodecs.get(manufacturerId);
		return new sentenceConstructor(data, manufacturerId) as T;
	}
}
```



[1]: https://npmjs.com/package/extended-nmea
[2]: https://www.nmea.org/
[3]: https://github.com/jamesp/node-nmea
[4]: https://github.com/ricardoboss/extended-nmea/blob/eed9a9e3a24068c17b486aa0a7b1d9837bfae367/src/helpers.ts#L10
[5]: https://github.com/ricardoboss/vessel-state
[6]: https://github.com/jamesp/node-nmea/pull/24
[7]: https://github.com/ricardoboss/extended-nmea/blob/eed9a9e3a24068c17b486aa0a7b1d9837bfae367/src/decoder.ts#L43
