---
title: About Developer-Focused PC Builds
createdAt: 2020-07-05T10:00:00+02
description: >-
    I recently saw a video on LinusTechTips where he rebuilt Linus Torvalds PC. He said they didn't do developer-focused PC building guides, because they don't know the requirements.
    I wanted to write something about what hardware is needed by software developers.
---

A software developer doesn't need a high-end rig.
To develop software, something less powerful than a normal office computer is required.

## What software do software developers use?

In general, most software developers use some kind of _text editor_ and/or <abbr title="Integrated Development Environment">_IDE_</abbr> to write code.
If it's a normal text editor, then a _terminal/shell_ is often required too.
This is because most software needs to be compiled, i.e. translated to machine-readable instructions, by a _compiler_. 

It also comes down to which _operating system_ the developer is using.
MacOS obviously only runs on Apple hardware, which makes this post irrelevant (unless you are into that hackintosh-stuff).
Windows is great if the developer also requires a lot of office-related software or is bound to it because of some office policy.
Unix-based operating systems are more suitable for the advanced software developers, or those who are looking for more privacy.

The software mentioned above doesn't need the strongest hardware to run.
More powerful hardware may lead to faster compile times or faster incremental builds for debugging, which in turn saves the developer time while developing the software. 

And last, but not least, the hardware should be able to run on the development machine for debugging.
This can also happen in a virtual machine, but this introduces performance impacts and may require even more powerful hardware and disk space.

Speaking of disk space: how much disk space does a software developer need in 2020?
Short answer: less than you'd think. Most code is just text in a file, so not very much.
The most space is taken up by third-party dependencies, git histories, frameworks, software runtimes, the OS, and optionally the IDE.
All of this plus a few projects can easily fit on a 128 GB drive with a lot of free space left.

## The Requirements

- SSD: 256 GB (1+ TB HDD for backups)

  At the end of the last section, I already said a software developer needs about 128 GB of disk space.
  For good measure, I would probably bump this value up to at least 256 GB for the main drive.
  Using a second drive with one or more Terabytes of space for backups is probably a good idea.

- CPU: (at least) Intel Core i5 5th Generation or AMD Ryzen 5 1600

  The CPU in a software developers PC doesn't need to be crazy efficient or overclockable.
  It needs to be able to run the OS with no problems and support the target architecture for the software being developed on it (depends on the type of project).
  Multithreading is supported by most compilers and in general preferable.
  
- RAM: 16+ GB @ 2400+ MHz

  For a developer, the RAM should be able to be used effectively by the CPU.
  If the mainboard supports dual- or quad-channel memory, you should fill all the slots and distribute the overall size accordingly (meaning configurations of 2x8 GB or 4x4 GB).

- GPU: Integrated+
 
  Unless you are developing the next AAA game, you won't need the latest GPU.
  Integrated graphics from the CPU are probably enough for most software developers.

- about noise: most developers I know listen to music while coding.
  But I also know that there are developers out there who prefer silence, which also seems to apply to Linus Torvalds according to the video linked below.
  In this case, an adequate cooling solution for the components with an acceptable noise level should be chosen.
  Personally, I don't care how loud my PC is because it doesn't bother me.

## Linus builds Linus' new PC

This is the video, which inspired me to write this post:

<div class="embed-responsive embed-responsive-21by9">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/Kua9cY8q_EI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
