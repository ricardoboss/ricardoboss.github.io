---
title: Currently working on age-of-aincrad.com
createdAt: 2020-10-19T12:00:00+02
description: >-
    I am currently working on the new homepage for age-of-aincrad.com (an MMOARPG inspired by Sword Art Online). This is the current state.
---

[Age of Aincrad](https://age-of-aincrad.com/) is an MMOARPG currently in development.
It is a community project, consisting of people who were inspired to create a game like Sword Art Online (which comes from the anime with that same name).

> In the fictional game, you play as a character and do quests, and the normal RPG stuff; there are a ton of resources about it online. Just search for it.
> The game is played via a device called "Nerve Gear" in the anime and the whole plot builds upon an intentional flaw in the design of this fictional device. But I won't spoil anything :)

But this article is not about the game, it is about what I have to do with Age of Aincrad: their new website.

# The Beginning

It all started after I finished watching all available seasons of SAO (three at the time, "Alicization" was not out yet) and then looked for games like SAO.
I found this project called "Age of Aincrad" and thought to myself: "Hey, that is the name of that flying castle thingy! Maybe it's related to SAO!".

As it turns out: yes, yes it is related to SAO. The whole game idea was inspired by SAO.
At the time, this was huge for me. My favourite anime coming to real life. I was excited.

I quickly realized it was still in early development and nothing playable was available. BUT, their website offered a form to send in your application.
Since I wanted this game to be as good as can be, and I am sufficient in programming to help out, I decided to send in my details and wait for a response.
This was in 2018.

# First Contact

In January of 2020, the community manager of the AoA asked me on Discord if I was still interested in joining the team.

![Leo asking if I was still interested](/content-assets/2020-10-19-aoa-discord-message.png)

Of course I was still interested and started chatting about what I could do.
On their discord server ([join now!](https://discord.age-of-aincrad.com/)) I was given the "Staff" rank and was greeted by the other team members and the community as a new web developer.

# A Big Task

The website was going to get an update and eventually, I got involed in working on it.
Another web developer from the team, [XenoWarrior](https://github.com/XenoWarrior), had already started working on a Vue.js site, following the mockup by Zenro45 (a member of the art team).
I thought it looked great!

XenoWarrior had to work on the game and so I took the lead in the website development, at least temporarily.
From what he already built, I started working on the required features so we can get closer to publishing it.

The required features where:

- a contact form
- an application form
- FAQs
- news articles
- a gallery
- user system (login/registration)
- automatic deployment (CI/CD)
- forum account linking

Additionally, we had to import data from the old website.
With a bit of Trello-magic to organize the ToDos, we got to work.

# Early Development

Since a frontend for the new website already exists, we needed a backend to manage all the data (like applications and inquiries).
Adding a backend after the frontend is quite unusual, so this was a learning experience for me.
I started looking into what we could use as a "headless" Content Management System (CMS); headless meaning it's got no frontend included, like a wordpress instance would.
We needed something to give us a management or administration interface while providing an API to the outside world for our frontend to access it.

After comparing different options for headless CMSes, we settled on [Strapi](https://strapi.io).
The other options offered similar functionalities, but Strapi had a fancier admin interface with a nice WYSIWYG editor.
The competitors where: Strapi, [Directus](https://directus.io/) and [Cockpit](https://getcockpit.com/).

After Strapi was set up, I was able to start working on importing the old data and connecting certain features of the frontend to the backend (like loading news articles or the gallery).

# Current State

Today, October 19th, 2020, the website is almost ready from my point of view.
It still lacks a few features, but we _could_ publish it in the near future and add features via updates later on.
All members I showed the new website to were just as satisfied as I am with it.

I will definitely post another update here on my blog when it launches.

Until then, stay safe out there and thanks for reading!
