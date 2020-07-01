---
title: New Website!
timestamp: 2020-07-01T02:15:00+02
summary: >-
    I finally developed a new personal website.
    In this post, I documented the road to my new website using Nuxt.js and GitHub Pages.
---

## Preface

I finally developed a new personal website.
This article documents the development process.

## Planning

It was at the beginning of the year 2020 when I decided to give my website a fresh new look and a few more features.
Since then, I gathered ideas for the new design from multiple websites selling templates (e.g. [themeforest.net](https://themeforst.net/)).
I looked at the best-sellers and took inspiration from the demos they provided.

I found some interesting themes, but they were either too minimalistic or too playful.
So, once again, I decided to create my own website from scratch.

First of all, I needed to decide on the environment, in which my website will be hosted.
For previous versions of my website I hosted my own v-server with some version of Ubuntu and Caddy as my web server.
This is obviously pretty overkill for a single website, but it wasn't the only thing I hosted on it.
Anyway, I wanted to move away from self-hosting to a more managed solution, where I only needed to care about the content.
Additionally, I considered starting a blog on my website.

To summarize what I wanted:

- little to no server management
- more focus on content
- control over style/theme
- custom controls/components (like an interactive timeline)
- a way to write blog posts in markdown

## Technologies

The easiest and most accessible solution to the server management problem I found was [GitHub Pages](https://pages.github.com/).
It provides a static site generator ([jekyll](https://jekyllrb.com/)) with pre-made themes, a way to host the source code of the site and 24/7 availability.

I didn't really look into alternatives, because it seemed to be the perfect fit for what I needed.
There are already a lot of GitHub-powered homepages out there which also have a blog built-in.

From other personal projects, I already knew how to use [Vue.js](https://vuejs.org/) and thought it would be a good framework for reusable components.
Using Vue.js means I couldn't use jekyll.
I am not the first person to want static site generation and use Vue.js and that's why some clever people created [Nuxt.js](https://nuxtjs.org/).

Nuxt.js allowed me to generate a static website while keeping the benefits of the Vue.js framework.

### Blog

Next up was the blog.
Since I wanted to focus more on content rather than managing the system handling the content, I wanted to be able to write posts as easily as possible.
The markup I wanted to use is markdown (because it's the best markup for long texts or documentation, fight me).

I found a great tutorial on how to achieve this on [Kevin Regenreks](https://twitter.com/kregenrek) blog: [Create a frontmatter Markdown powered Blog with Nuxt.JS](https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/)

## Coding

I created the project and started to work on the layout and the design.
I wasn't sure where to go with the design, and the templates I looked at earlier only helped a little.
Eventually, I settled on a 3-parted design, where I would have a sidebar on the left covering the full height, a navbar at the top, and the content in the "lower right", covering the most space.
 
As for vue components, I wrote some simple one like a timeline (for my résumé), or a project board (grid) for my "projects" page.
 
The rest was pretty straight forward with the Nuxt.js documentation at hand.

## GitHub Pages

The deployment with GitHub Pages turned out to be harder than I anticipated.
This was because GitHub doesn't actually allow you to use a branch other than the default 'master' branch as the source for your site.
The solution was to create a branch for the sources of my site and leave the master as-is.
Then, in a GitHub actions workflow, I used the action [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) to make a commit with the generated files and push it to the master.
Boom! Ricardo 1, GitHub 0.
GitHub happily deploys my master branch while I can commit changes to my 'source' branch and the whole site gets generated automatically via GitHub actions.

## Conclusion

In the end I had a website which I was quite happy with.
The process of adding new content to/editing the website became much easier than before.
Nuxt.js seemed to be the right way while GitHub Pages was a small challenge, which I was happy to overcome.

Thanks for reading my first blog post! I hope there will come many after this one. Have a nice day!
