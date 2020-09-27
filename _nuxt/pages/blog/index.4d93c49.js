(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,12,13],{159:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("h2",[e._v("Planning")]),e._v(" "),o("p",[e._v("It was at the beginning of the year 2020 when I decided to give my website a fresh new look and a few more features.\nSince then, I gathered ideas for the new design from multiple websites selling templates (e.g. "),o("a",{attrs:{href:"https://themeforst.net/"}},[e._v("themeforest.net")]),e._v(").\nI looked at the best-sellers and took inspiration from the demos they provided.")]),e._v(" "),o("p",[e._v("I found some interesting themes, but they were either too minimalistic or too playful.\nSo, once again, I decided to create my own website from scratch.")]),e._v(" "),o("p",[e._v("First of all, I needed to decide on the environment, in which my website will be hosted.\nFor previous versions of my website I hosted my own v-server with some version of Ubuntu and Caddy as my web server.\nThis is obviously pretty overkill for a single website, but it wasn't the only thing I hosted on it.\nAnyway, I wanted to move away from self-hosting to a more managed solution, where I only needed to care about the content.\nAdditionally, I considered starting a blog on my website.")]),e._v(" "),o("p",[e._v("To summarize what I wanted:")]),e._v(" "),o("ul",[o("li",[e._v("little to no server management")]),e._v(" "),o("li",[e._v("more focus on content")]),e._v(" "),o("li",[e._v("control over style/theme")]),e._v(" "),o("li",[e._v("custom controls/components (like an interactive timeline)")]),e._v(" "),o("li",[e._v("a way to write blog posts in markdown")])]),e._v(" "),o("h2",[e._v("Technologies")]),e._v(" "),o("p",[e._v("The easiest and most accessible solution to the server management problem I found was "),o("a",{attrs:{href:"https://pages.github.com/"}},[e._v("GitHub Pages")]),e._v(".\nIt provides a static site generator ("),o("a",{attrs:{href:"https://jekyllrb.com/"}},[e._v("jekyll")]),e._v(") with pre-made themes, a way to host the source code of the site and 24/7 availability.")]),e._v(" "),o("p",[e._v("I didn't really look into alternatives, because it seemed to be the perfect fit for what I needed.\nThere are already a lot of GitHub-powered homepages out there which also have a blog built-in.")]),e._v(" "),o("p",[e._v("From other personal projects, I already knew how to use "),o("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and thought it would be a good framework for reusable components.\nUsing Vue.js means I couldn't use jekyll.\nI am not the first person to want static site generation and use Vue.js and that's why some clever people created "),o("a",{attrs:{href:"https://nuxtjs.org/"}},[e._v("Nuxt.js")]),e._v(".")]),e._v(" "),o("p",[e._v("Nuxt.js allowed me to generate a static website while keeping the benefits of the Vue.js framework.")]),e._v(" "),o("h3",[e._v("Blog")]),e._v(" "),o("p",[e._v("Next up was the blog.\nSince I wanted to focus more on content rather than managing the system handling the content, I wanted to be able to write posts as easily as possible.\nThe markup I wanted to use is markdown (because it's the best markup for long texts or documentation, fight me).")]),e._v(" "),o("p",[e._v("I found a great tutorial on how to achieve this on "),o("a",{attrs:{href:"https://twitter.com/kregenrek"}},[e._v("Kevin Regenreks")]),e._v(" blog: "),o("a",{attrs:{href:"https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/"}},[e._v("Create a frontmatter Markdown powered Blog with Nuxt.JS")])]),e._v(" "),o("h2",[e._v("Coding")]),e._v(" "),o("p",[e._v('I created the project and started to work on the layout and the design.\nI wasn\'t sure where to go with the design, and the templates I looked at earlier only helped a little.\nEventually, I settled on a 3-parted design, where I would have a sidebar on the left covering the full height, a navbar at the top, and the content in the "lower right", covering the most space.')]),e._v(" "),o("p",[e._v('As for vue components, I wrote some simple one like a timeline (for my résumé), or a project board (grid) for my "projects" page.')]),e._v(" "),o("p",[e._v("The rest was pretty straight forward with the Nuxt.js documentation at hand.")]),e._v(" "),o("h2",[e._v("GitHub Pages")]),e._v(" "),o("p",[e._v("The deployment with GitHub Pages turned out to be harder than I anticipated.\nThis was because GitHub doesn't actually allow you to use a branch other than the default 'master' branch as the source for your site.\nThe solution was to create a branch for the sources of my site and leave the master as-is.\nThen, in a GitHub actions workflow, I used the action "),o("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages"}},[e._v("peaceiris/actions-gh-pages")]),e._v(" to make a commit with the generated files and push it to the master.\nBoom! Ricardo 1, GitHub 0.\nGitHub happily deploys my master branch while I can commit changes to my 'source' branch and the whole site gets generated automatically via GitHub actions.")]),e._v(" "),o("h2",[e._v("Conclusion")]),e._v(" "),o("p",[e._v("In the end I had a website which I was quite happy with.\nThe process of adding new content to/editing the website became much easier than before.\nNuxt.js seemed to be the right way while GitHub Pages was a small challenge, which I was happy to overcome.")]),e._v(" "),o("p",[e._v("Thanks for reading my first blog post! I hope there will come many after this one. Have a nice day!")])])}]};e.exports={attributes:{title:"New Website!",timestamp:"2020-07-01T00:15:00.000Z",summary:"I finally developed a new personal website. In this post, I documented the road to my new website using Nuxt.js and GitHub Pages."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-07-01-new-website.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},160:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[e._v("A software developer doesn't need a high-end rig.\nTo develop software, something less powerful than a normal office computer is required.")]),e._v(" "),o("h2",[e._v("What software do software developers use?")]),e._v(" "),o("p",[e._v("In general, most software developers use some kind of "),o("em",[e._v("text editor")]),e._v(" and/or "),o("abbr",{attrs:{title:"Integrated Development Environment"}},[o("em",[e._v("IDE")])]),e._v(" to write code.\nIf it's a normal text editor, then a "),o("em",[e._v("terminal/shell")]),e._v(" is often required too.\nThis is because most software needs to be compiled, i.e. translated to machine-readable instructions, by a "),o("em",[e._v("compiler")]),e._v(".")]),e._v(" "),o("p",[e._v("It also comes down to which "),o("em",[e._v("operating system")]),e._v(" the developer is using.\nMacOS obviously only runs on Apple hardware, which makes this post irrelevant (unless you are into that hackintosh-stuff).\nWindows is great if the developer also requires a lot of office-related software or is bound to it because of some office policy.\nUnix-based operating systems are more suitable for the advanced software developers, or those who are looking for more privacy.")]),e._v(" "),o("p",[e._v("The software mentioned above doesn't need the strongest hardware to run.\nMore powerful hardware may lead to faster compile times or faster incremental builds for debugging, which in turn saves the developer time while developing the software.")]),e._v(" "),o("p",[e._v("And last, but not least, the hardware should be able to run on the development machine for debugging.\nThis can also happen in a virtual machine, but this introduces performance impacts and may require even more powerful hardware and disk space.")]),e._v(" "),o("p",[e._v("Speaking of disk space: how much disk space does a software developer need in 2020?\nShort answer: less than you'd think. Most code is just text in a file, so not very much.\nThe most space is taken up by third-party dependencies, git histories, frameworks, software runtimes, the OS, and optionally the IDE.\nAll of this plus a few projects can easily fit on a 128 GB drive with a lot of free space left.")]),e._v(" "),o("h2",[e._v("The Requirements")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("SSD: 256 GB (1+ TB HDD for backups)")]),e._v(" "),o("p",[e._v("At the end of the last section, I already said a software developer needs about 128 GB of disk space.\nFor good measure, I would probably bump this value up to at least 256 GB for the main drive.\nUsing a second drive with one or more Terabytes of space for backups is probably a good idea.")])]),e._v(" "),o("li",[o("p",[e._v("CPU: (at least) Intel Core i5 5th Generation or AMD Ryzen 5 1600")]),e._v(" "),o("p",[e._v("The CPU in a software developers PC doesn't need to be crazy efficient or overclockable.\nIt needs to be able to run the OS with no problems and support the target architecture for the software being developed on it (depends on the type of project).\nMultithreading is supported by most compilers and in general preferable.")])]),e._v(" "),o("li",[o("p",[e._v("RAM: 16+ GB @ 2400+ MHz")]),e._v(" "),o("p",[e._v("For a developer, the RAM should be able to be used effectively by the CPU.\nIf the mainboard supports dual- or quad-channel memory, you should fill all the slots and distribute the overall size accordingly (meaning configurations of 2x8 GB or 4x4 GB).")])]),e._v(" "),o("li",[o("p",[e._v("GPU: Integrated+")]),e._v(" "),o("p",[e._v("Unless you are developing the next AAA game, you won't need the latest GPU.\nIntegrated graphics from the CPU are probably enough for most software developers.")])]),e._v(" "),o("li",[o("p",[e._v("about noise: most developers I know listen to music while coding.\nBut I also know that there are developers out there who prefer silence, which also seems to apply to Linus Torvalds according to the video linked below.\nIn this case, an adequate cooling solution for the components with an acceptable noise level should be chosen.\nPersonally, I don't care how loud my PC is because it doesn't bother me.")])])]),e._v(" "),o("h2",[e._v("Linus builds Linus' new PC")]),e._v(" "),o("p",[e._v("This is the video, which inspired me to write this post:")]),e._v(" "),o("div",{staticClass:"embed-responsive embed-responsive-21by9"},[o("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube-nocookie.com/embed/Kua9cY8q_EI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]};e.exports={attributes:{title:"About Developer-Focused PC Builds",timestamp:"2020-07-05T08:00:00.000Z",summary:"I recently saw a video on LinusTechTips where he rebuilt Linus Torvalds PC. He said they didn't do developer-focused PC building guides, because they don't know the requirements. I wanted to write something about what hardware is needed by software developers."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-07-05-developer-focused-pc-builds.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},161:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[e._v("Hi there! As one can obviously see, I haven't created any posts in the last two months.\nAnd to be honest, the first two posts where only there to test my new website.")]),e._v(" "),o("p",[e._v("With this small update, I want to give the reader a bit of insight on what topics I find interesting and what could be a topic for fully fledged blog post in the future.")]),e._v(" "),o("blockquote",[o("p",[e._v("These are topics which I will most likely be writing about in the future. No guarantees.")])]),e._v(" "),o("ul",[o("li",[e._v("Laravel (PHP Framework)")]),e._v(" "),o("li",[e._v("Minecraft Server Plugins (Java)")]),e._v(" "),o("li",[e._v("CI/CD (GitLab and Github)")]),e._v(" "),o("li",[e._v("Raspberry PI as a .NET Core runtime target")]),e._v(" "),o("li",[e._v("Games (probs Rocket League and/or Factorio)")])]),e._v(" "),o("p",[e._v("That's it for now. If you want me to write something about a certain topic, hit me up on Twitter ("),o("a",{attrs:{href:"https://twitter.com/_ricardoboss"}},[e._v("@_ricardoboss")]),e._v(").")])])}]};e.exports={attributes:{title:"No new content for a long time",timestamp:"2020-09-27T16:00:00.000Z",summary:"I haven't taken advantage of my new blog system yet. These are some topics I find interesting and will maybe write something about in the future."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-09-27-long-time-no-content.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},163:function(e,t,o){var map={"./2020-07-01-new-website.md":159,"./2020-07-05-developer-focused-pc-builds.md":160,"./2020-09-27-long-time-no-content.md":161};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=163},168:function(e,t,o){"use strict";o.r(t);o(107),o(23),o(13),o(22);var n=o(3),r={layout:"default",asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=o(163),n=new Date,r=t.keys().map((function(e){var p=t(e);return{attributes:p.attributes,meta:p.meta}})).filter((function(e){return new Date(e.attributes.timestamp)<n})),e.abrupt("return",{posts:r});case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},data:function(){return{posts:[]}},methods:{getPermalink:function(e){var t=e.meta.resourcePath.split("\\").pop().split("/").pop().split(".").shift();return"/blog/".concat(t)}},computed:{sortedPosts:function(){return this.posts.slice().sort((function(p){return p.attributes.timestamp})).reverse()}}},l=o(7),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h1",{staticClass:"display-3"},[e._v("Blog")]),e._v(" "),o("div",{staticClass:"list-group list-group-flush rounded ml-3"},[e._l(e.sortedPosts,(function(t){return o("nuxt-link",{key:t.attributes.title,staticClass:"list-group-item list-group-item-action row align-items-center",attrs:{to:e.getPermalink(t)}},[o("p",{staticClass:"text-nowrap small text-muted col-12 col-md-4"},[e._v("\n        "+e._s(e.$moment(t.attributes.timestamp).fromNow())+" on "+e._s(e.$moment(t.attributes.timestamp).format("L"))+"\n      ")]),e._v(" "),o("div",{staticClass:"col-12 col-md-8"},[o("h5",[e._v(e._s(t.attributes.title))]),e._v(" "),o("p",[e._v(e._s(t.attributes.summary))])])])})),e._v(" "),0===e.posts.length?o("div",{staticClass:"list-group-item"},[e._v("\n      No posts were found.\n    ")]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports}}]);