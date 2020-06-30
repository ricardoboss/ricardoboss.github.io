<template>
  <section>
    <h1 class="display-3">About</h1>

    <p class="lead">
      Hi! My name is Ricardo Boss and I am a software developer from germany. On this page, you can find general
      information about me as a person and a bit of my history. If you have any questions, feel free to
      <nuxt-link to="/contact">contact me</nuxt-link>.
    </p>

    <hr>

    <figure class="text-right">
      <blockquote class="blockquote">
        <p>"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Martin Golding
      </figcaption>
    </figure>

    <p>
      ... is one of my favourite quotes. If I had to describe <em>how</em> I write code, this would be an adequate
      description of what I want to achieve. I strive to make my code easy to read but at the same time it should be
      performant and elegant (and of course it should solve the problem it was written for).
    </p>

    <h2>How I got into coding</h2>

    <p>
      My name is Ricardo Boss and I was born on November 11, 1998 in Germany. I guess this makes me a kid from the
      (late) 90s which could explain my early interest in computers, programming and video games. I started using the
      computer as a place where I could do anything: use MS Paint to create pictures, play my favourite games and browse
      the web. My first experience with coding was when I wanted to see what websites are made of. That's when I
      discovered HTML.
    </p>

    <p>
      After I got into making simple websites with HTML and CSS, I started digging into my first programming language:
      Java. Since I played a lot of Minecraft at that time, it was obvious to me what I could use my new skills on. I
      wrote plugins (extensions) for Minecraft servers.
    </p>

    <p>
      So at this point I was aware that there are many more programming languages and I was eager to learn more of them.
      I thought a good developer knows everything about all programming languages. This is obviously not the case, but I
      still had to learn this. So I create project after project, each with different goals and challenges. In then end
      I taught myself PHP, C# and a bit of Javascript. While working with those languages (including Java), I got a feel
      for how different they can be. Their characteristics and imperfections. It turned out that I loved PHP the most
      and many of my projects are written in it.<br>
      Not all my projects are public, but you can find many of them on my
      <a href="https://github.com/ricardoboss" target="_blank">GitHub</a>. For an overview, head to my
      <nuxt-link to="/projects">Projects</nuxt-link>.
    </p>

    <h2>What I do other than coding</h2>

    <p>
      Occasionally, after I come home from work, I would go for a quick 30-minute run and see how far I get. If I am not
      running, I usually play video games. Either with friends or alone if it's a single-player game. Sometimes, I would
      also dive into the virtual worlds with my Oculus Rift S (VR headset) and break my high scores in Beat Saber. I
      don't do much other than programming but I am open for new experiences.
    </p>
  </section>
</template>

<script>
	export default {
    layout: 'default'
	}
</script>
