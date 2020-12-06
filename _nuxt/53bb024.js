(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,12,13,14,15],{160:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("h2",[e._v("Planning")]),e._v(" "),o("p",[e._v("It was at the beginning of the year 2020 when I decided to give my website a fresh new look and a few more features.\nSince then, I gathered ideas for the new design from multiple websites selling templates (e.g. "),o("a",{attrs:{href:"https://themeforst.net/"}},[e._v("themeforest.net")]),e._v(").\nI looked at the best-sellers and took inspiration from the demos they provided.")]),e._v(" "),o("p",[e._v("I found some interesting themes, but they were either too minimalistic or too playful.\nSo, once again, I decided to create my own website from scratch.")]),e._v(" "),o("p",[e._v("First of all, I needed to decide on the environment, in which my website will be hosted.\nFor previous versions of my website I hosted my own v-server with some version of Ubuntu and Caddy as my web server.\nThis is obviously pretty overkill for a single website, but it wasn't the only thing I hosted on it.\nAnyway, I wanted to move away from self-hosting to a more managed solution, where I only needed to care about the content.\nAdditionally, I considered starting a blog on my website.")]),e._v(" "),o("p",[e._v("To summarize what I wanted:")]),e._v(" "),o("ul",[o("li",[e._v("little to no server management")]),e._v(" "),o("li",[e._v("more focus on content")]),e._v(" "),o("li",[e._v("control over style/theme")]),e._v(" "),o("li",[e._v("custom controls/components (like an interactive timeline)")]),e._v(" "),o("li",[e._v("a way to write blog posts in markdown")])]),e._v(" "),o("h2",[e._v("Technologies")]),e._v(" "),o("p",[e._v("The easiest and most accessible solution to the server management problem I found was "),o("a",{attrs:{href:"https://pages.github.com/"}},[e._v("GitHub Pages")]),e._v(".\nIt provides a static site generator ("),o("a",{attrs:{href:"https://jekyllrb.com/"}},[e._v("jekyll")]),e._v(") with pre-made themes, a way to host the source code of the site and 24/7 availability.")]),e._v(" "),o("p",[e._v("I didn't really look into alternatives, because it seemed to be the perfect fit for what I needed.\nThere are already a lot of GitHub-powered homepages out there which also have a blog built-in.")]),e._v(" "),o("p",[e._v("From other personal projects, I already knew how to use "),o("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and thought it would be a good framework for reusable components.\nUsing Vue.js means I couldn't use jekyll.\nI am not the first person to want static site generation and use Vue.js and that's why some clever people created "),o("a",{attrs:{href:"https://nuxtjs.org/"}},[e._v("Nuxt.js")]),e._v(".")]),e._v(" "),o("p",[e._v("Nuxt.js allowed me to generate a static website while keeping the benefits of the Vue.js framework.")]),e._v(" "),o("h3",[e._v("Blog")]),e._v(" "),o("p",[e._v("Next up was the blog.\nSince I wanted to focus more on content rather than managing the system handling the content, I wanted to be able to write posts as easily as possible.\nThe markup I wanted to use is markdown (because it's the best markup for long texts or documentation, fight me).")]),e._v(" "),o("p",[e._v("I found a great tutorial on how to achieve this on "),o("a",{attrs:{href:"https://twitter.com/kregenrek"}},[e._v("Kevin Regenreks")]),e._v(" blog: "),o("a",{attrs:{href:"https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/"}},[e._v("Create a frontmatter Markdown powered Blog with Nuxt.JS")])]),e._v(" "),o("h2",[e._v("Coding")]),e._v(" "),o("p",[e._v('I created the project and started to work on the layout and the design.\nI wasn\'t sure where to go with the design, and the templates I looked at earlier only helped a little.\nEventually, I settled on a 3-parted design, where I would have a sidebar on the left covering the full height, a navbar at the top, and the content in the "lower right", covering the most space.')]),e._v(" "),o("p",[e._v('As for vue components, I wrote some simple one like a timeline (for my résumé), or a project board (grid) for my "projects" page.')]),e._v(" "),o("p",[e._v("The rest was pretty straight forward with the Nuxt.js documentation at hand.")]),e._v(" "),o("h2",[e._v("GitHub Pages")]),e._v(" "),o("p",[e._v("The deployment with GitHub Pages turned out to be harder than I anticipated.\nThis was because GitHub doesn't actually allow you to use a branch other than the default 'master' branch as the source for your site.\nThe solution was to create a branch for the sources of my site and leave the master as-is.\nThen, in a GitHub actions workflow, I used the action "),o("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages"}},[e._v("peaceiris/actions-gh-pages")]),e._v(" to make a commit with the generated files and push it to the master.\nBoom! Ricardo 1, GitHub 0.\nGitHub happily deploys my master branch while I can commit changes to my 'source' branch and the whole site gets generated automatically via GitHub actions.")]),e._v(" "),o("h2",[e._v("Conclusion")]),e._v(" "),o("p",[e._v("In the end I had a website which I was quite happy with.\nThe process of adding new content to/editing the website became much easier than before.\nNuxt.js seemed to be the right way while GitHub Pages was a small challenge, which I was happy to overcome.")]),e._v(" "),o("p",[e._v("Thanks for reading my first blog post! I hope there will come many after this one. Have a nice day!")])])}]};e.exports={attributes:{title:"New Website!",timestamp:"2020-07-01T00:15:00.000Z",summary:"I finally developed a new personal website. In this post, I documented the road to my new website using Nuxt.js and GitHub Pages."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-07-01-new-website.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},161:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[e._v("A software developer doesn't need a high-end rig.\nTo develop software, something less powerful than a normal office computer is required.")]),e._v(" "),o("h2",[e._v("What software do software developers use?")]),e._v(" "),o("p",[e._v("In general, most software developers use some kind of "),o("em",[e._v("text editor")]),e._v(" and/or "),o("abbr",{attrs:{title:"Integrated Development Environment"}},[o("em",[e._v("IDE")])]),e._v(" to write code.\nIf it's a normal text editor, then a "),o("em",[e._v("terminal/shell")]),e._v(" is often required too.\nThis is because most software needs to be compiled, i.e. translated to machine-readable instructions, by a "),o("em",[e._v("compiler")]),e._v(".")]),e._v(" "),o("p",[e._v("It also comes down to which "),o("em",[e._v("operating system")]),e._v(" the developer is using.\nMacOS obviously only runs on Apple hardware, which makes this post irrelevant (unless you are into that hackintosh-stuff).\nWindows is great if the developer also requires a lot of office-related software or is bound to it because of some office policy.\nUnix-based operating systems are more suitable for the advanced software developers, or those who are looking for more privacy.")]),e._v(" "),o("p",[e._v("The software mentioned above doesn't need the strongest hardware to run.\nMore powerful hardware may lead to faster compile times or faster incremental builds for debugging, which in turn saves the developer time while developing the software.")]),e._v(" "),o("p",[e._v("And last, but not least, the hardware should be able to run on the development machine for debugging.\nThis can also happen in a virtual machine, but this introduces performance impacts and may require even more powerful hardware and disk space.")]),e._v(" "),o("p",[e._v("Speaking of disk space: how much disk space does a software developer need in 2020?\nShort answer: less than you'd think. Most code is just text in a file, so not very much.\nThe most space is taken up by third-party dependencies, git histories, frameworks, software runtimes, the OS, and optionally the IDE.\nAll of this plus a few projects can easily fit on a 128 GB drive with a lot of free space left.")]),e._v(" "),o("h2",[e._v("The Requirements")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("SSD: 256 GB (1+ TB HDD for backups)")]),e._v(" "),o("p",[e._v("At the end of the last section, I already said a software developer needs about 128 GB of disk space.\nFor good measure, I would probably bump this value up to at least 256 GB for the main drive.\nUsing a second drive with one or more Terabytes of space for backups is probably a good idea.")])]),e._v(" "),o("li",[o("p",[e._v("CPU: (at least) Intel Core i5 5th Generation or AMD Ryzen 5 1600")]),e._v(" "),o("p",[e._v("The CPU in a software developers PC doesn't need to be crazy efficient or overclockable.\nIt needs to be able to run the OS with no problems and support the target architecture for the software being developed on it (depends on the type of project).\nMultithreading is supported by most compilers and in general preferable.")])]),e._v(" "),o("li",[o("p",[e._v("RAM: 16+ GB @ 2400+ MHz")]),e._v(" "),o("p",[e._v("For a developer, the RAM should be able to be used effectively by the CPU.\nIf the mainboard supports dual- or quad-channel memory, you should fill all the slots and distribute the overall size accordingly (meaning configurations of 2x8 GB or 4x4 GB).")])]),e._v(" "),o("li",[o("p",[e._v("GPU: Integrated+")]),e._v(" "),o("p",[e._v("Unless you are developing the next AAA game, you won't need the latest GPU.\nIntegrated graphics from the CPU are probably enough for most software developers.")])]),e._v(" "),o("li",[o("p",[e._v("about noise: most developers I know listen to music while coding.\nBut I also know that there are developers out there who prefer silence, which also seems to apply to Linus Torvalds according to the video linked below.\nIn this case, an adequate cooling solution for the components with an acceptable noise level should be chosen.\nPersonally, I don't care how loud my PC is because it doesn't bother me.")])])]),e._v(" "),o("h2",[e._v("Linus builds Linus' new PC")]),e._v(" "),o("p",[e._v("This is the video, which inspired me to write this post:")]),e._v(" "),o("div",{staticClass:"embed-responsive embed-responsive-21by9"},[o("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube-nocookie.com/embed/Kua9cY8q_EI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]};e.exports={attributes:{title:"About Developer-Focused PC Builds",timestamp:"2020-07-05T08:00:00.000Z",summary:"I recently saw a video on LinusTechTips where he rebuilt Linus Torvalds PC. He said they didn't do developer-focused PC building guides, because they don't know the requirements. I wanted to write something about what hardware is needed by software developers."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-07-05-developer-focused-pc-builds.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},162:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[e._v("Hi there! As one can obviously see, I haven't created any posts in the last two months.\nAnd to be honest, the first two posts where only there to test my new website.")]),e._v(" "),o("p",[e._v("With this small update, I want to give the reader a bit of insight on what topics I find interesting and what could be a topic for fully fledged blog post in the future.")]),e._v(" "),o("blockquote",[o("p",[e._v("These are topics which I will most likely be writing about in the future. No guarantees.")])]),e._v(" "),o("ul",[o("li",[e._v("Laravel (PHP Framework)")]),e._v(" "),o("li",[e._v("Minecraft Server Plugins (Java)")]),e._v(" "),o("li",[e._v("CI/CD (GitLab and Github)")]),e._v(" "),o("li",[e._v("Raspberry PI as a .NET Core runtime target")]),e._v(" "),o("li",[e._v("Games (probs Rocket League and/or Factorio)")])]),e._v(" "),o("p",[e._v("That's it for now. If you want me to write something about a certain topic, hit me up on Twitter ("),o("a",{attrs:{href:"https://twitter.com/_ricardoboss"}},[e._v("@_ricardoboss")]),e._v(").")])])}]};e.exports={attributes:{title:"No new content for a long time",timestamp:"2020-09-27T16:00:00.000Z",summary:"I haven't taken advantage of my new blog system yet. These are some topics I find interesting and will maybe write something about in the future."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-09-27-long-time-no-content.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},163:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[o("a",{attrs:{href:"https://age-of-aincrad.com/"}},[e._v("Age of Aincrad")]),e._v(" is an MMOARPG currently in development.\nIt is a community project, consisting of people who were inspired to create a game like Sword Art Online (which comes from the anime with that same name).")]),e._v(" "),o("blockquote",[o("p",[e._v('In the fictional game, you play as a character and do quests, and the normal RPG stuff; there are a ton of resources about it online. Just search for it.\nThe game is played via a device called "Nerve Gear" in the anime and the whole plot builds upon an intentional flaw in the design of this fictional device. But I won\'t spoil anything :)')])]),e._v(" "),o("p",[e._v("But this article is not about the game, it is about what I have to do with Age of Aincrad: their new website.")]),e._v(" "),o("h1",[e._v("The Beginning")]),e._v(" "),o("p",[e._v('It all started after I finished watching all available seasons of SAO (three at the time, "Alicization" was not out yet) and then looked for games like SAO.\nI found this project called "Age of Aincrad" and thought to myself: "Hey, that is the name of that flying castle thingy! Maybe it\'s related to SAO!".')]),e._v(" "),o("p",[e._v("As it turns out: yes, yes it is related to SAO. The whole game idea was inspired by SAO.\nAt the time, this was huge for me. My favourite anime coming to real life. I was excited.")]),e._v(" "),o("p",[e._v("I quickly realized it was still in early development and nothing playable was available. BUT, their website offered a form to send in your application.\nSince I wanted this game to be as good as can be, and I am sufficient in programming to help out, I decided to send in my details and wait for a response.\nThis was in 2018.")]),e._v(" "),o("h1",[e._v("First Contact")]),e._v(" "),o("p",[e._v("In January of 2020, the community manager of the AoA asked me on Discord if I was still interested in joining the team.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/content-assets/2020-10-19-aoa-discord-message.png",alt:"Leo asking if I was still interested"}})]),e._v(" "),o("p",[e._v("Of course I was still interested and started chatting about what I could do.\nOn their discord server ("),o("a",{attrs:{href:"https://discord.age-of-aincrad.com/"}},[e._v("join now!")]),e._v(') I was given the "Staff" rank and was greeted by the other team members and the community as a new web developer.')]),e._v(" "),o("h1",[e._v("A Big Task")]),e._v(" "),o("p",[e._v("The website was going to get an update and eventually, I got involed in working on it.\nAnother web developer from the team, "),o("a",{attrs:{href:"https://github.com/XenoWarrior"}},[e._v("XenoWarrior")]),e._v(", had already started working on a Vue.js site, following the mockup by Zenro45 (a member of the art team).\nI thought it looked great!")]),e._v(" "),o("p",[e._v("XenoWarrior had to work on the game and so I took the lead in the website development, at least temporarily.\nFrom what he already built, I started working on the required features so we can get closer to publishing it.")]),e._v(" "),o("p",[e._v("The required features where:")]),e._v(" "),o("ul",[o("li",[e._v("a contact form")]),e._v(" "),o("li",[e._v("an application form")]),e._v(" "),o("li",[e._v("FAQs")]),e._v(" "),o("li",[e._v("news articles")]),e._v(" "),o("li",[e._v("a gallery")]),e._v(" "),o("li",[e._v("user system (login/registration)")]),e._v(" "),o("li",[e._v("automatic deployment (CI/CD)")]),e._v(" "),o("li",[e._v("forum account linking")])]),e._v(" "),o("p",[e._v("Additionally, we had to import data from the old website.\nWith a bit of Trello-magic to organize the ToDos, we got to work.")]),e._v(" "),o("h1",[e._v("Early Development")]),e._v(" "),o("p",[e._v('Since a frontend for the new website already exists, we needed a backend to manage all the data (like applications and inquiries).\nAdding a backend after the frontend is quite unusual, so this was a learning experience for me.\nI started looking into what we could use as a "headless" Content Management System (CMS); headless meaning it\'s got no frontend included, like a wordpress instance would.\nWe needed something to give us a management or administration interface while providing an API to the outside world for our frontend to access it.')]),e._v(" "),o("p",[e._v("After comparing different options for headless CMSes, we settled on "),o("a",{attrs:{href:"https://strapi.io"}},[e._v("Strapi")]),e._v(".\nThe other options offered similar functionalities, but Strapi had a fancier admin interface with a nice WYSIWYG editor.\nThe competitors where: Strapi, "),o("a",{attrs:{href:"https://directus.io/"}},[e._v("Directus")]),e._v(" and "),o("a",{attrs:{href:"https://getcockpit.com/"}},[e._v("Cockpit")]),e._v(".")]),e._v(" "),o("p",[e._v("After Strapi was set up, I was able to start working on importing the old data and connecting certain features of the frontend to the backend (like loading news articles or the gallery).")]),e._v(" "),o("h1",[e._v("Current State")]),e._v(" "),o("p",[e._v("Today, October 19th, 2020, the website is almost ready from my point of view.\nIt still lacks a few features, but we "),o("em",[e._v("could")]),e._v(" publish it in the near future and add features via updates later on.\nAll members I showed the new website to were just as satisfied as I am with it.")]),e._v(" "),o("p",[e._v("I will definitely post another update here on my blog when it launches.")]),e._v(" "),o("p",[e._v("Until then, stay safe out there and thanks for reading!")])])}]};e.exports={attributes:{title:"Currently working on age-of-aincrad.com",timestamp:"2020-10-19T10:00:00.000Z",summary:"I am currently working on the new homepage for age-of-aincrad.com (an MMOARPG inspired by Sword Art Online). This is the current state."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-10-19-working-on-age-of-aincrad-com.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},164:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("p",[e._v("As the year progresses further, so do I with the new homepage for age-of-aincrad.com.\nIn my last post, I explained how I came to working on the new website and what the (then) current state was.")]),e._v(" "),o("p",[e._v("In this post, I want to let you know what issues I encountered since then and how I solved them.")]),e._v(" "),o("h2",[e._v("Task Management")]),e._v(" "),o("p",[e._v("Internally at Team Cardinal (the developers of the Age of Aincrad game), we use Trello and Discord to communicate and organize tasks.\nThis is also the way Leo (community lead) and Blacky/Katy (the project leads) tell us web developers what they want for the website.")]),e._v(" "),o("p",[e._v('Now since I\'ve been working on the new website, we have been using GitHub.\nAs you may know, GitHub has its own issue/task management, including "projects" and milestones and so on.\nPersonally, I really like to use those systems because it allows you to create intuitive workflows and automate things as much as possible (which in turn minimizes need for manual labor).')]),e._v(" "),o("p",[e._v('A problem which could arise when using both systems is that they can become out of sync, meaning the issue on GitHub is closed while a card on Trello remains in "ToDo" (or vice versa).\nTo mitigate this, we decided to separate the different systems based on who is interested in the information provided by each system.')]),e._v(" "),o("p",[e._v("So if the project leads want a new feature or adjust the design, they can open a new Trello card.\nWe will then open a new (more technically detailed) GitHub issue with a link to this Trello card and work on the issue while discussing everything technical in the GitHub issue.\nThe Trello card must then be moved according to the state of the issue.")]),e._v(" "),o("h2",[e._v("Automatic Deployment")]),e._v(" "),o("p",[e._v("Part of the things I wanted for the new website is an automatic deployment system, so we don't have to manually build or move files around.")]),e._v(" "),o("p",[e._v("I set up a workflow with GitHub actions, which simply executes "),o("code",{pre:!0},[e._v("npm run build")]),e._v(" after a push event.\nThis way, we can automatically check if the current codebase is even able to be built.\nAfterwards, all available tests are executed using "),o("code",{pre:!0},[e._v("npm run test")]),e._v(".")]),e._v(" "),o("p",[e._v("Now we need a way to deploy the latest version.\nTo achieve this, I installed "),o("a",{attrs:{href:"https://github.com/olipo186/Git-Auto-Deploy"}},[e._v("olipo186/Git-Auto-Deploy")]),e._v(" on the deployment server.\nHere is the description in the current README.md:")]),e._v(" "),o("blockquote",[o("p",[e._v("Git-Auto-Deploy consists of a small HTTP server that listens for Webhook requests sent from GitHub, GitLab or Bitbucket servers. This application allows you to continuously and automatically deploy your projects each time you push new commits to your repository.")])]),e._v(" "),o("p",[e._v("So it seems to be perfect for the use-case.\nThe setup was pretty simple:")]),e._v(" "),o("ul",[o("li",[e._v("create a new subdomain which will be called by GitHub with the webhook events")]),e._v(" "),o("li",[e._v("create a reverse proxy to forward the requests to the Git-Auto-Deploy service")]),e._v(" "),o("li",[e._v("create a deployment script which builds and deploys the website on the server")]),e._v(" "),o("li",[e._v("configure the Git-Auto-Deploy service to only deploy on certain events")])]),e._v(" "),o("p",[e._v("The deployment script was a challenge because I am not very familiar with bash scripting.\nIn the end I managed to create a pretty stable script which checks the environments "),o("code",{pre:!0},[e._v("npm")]),e._v(" and "),o("code",{pre:!0},[e._v("node")]),e._v(" versions and uses symlinking for a zero-downtime deployment.\nI ran into a problem where the script wouldn't be executable, because it was missing the "),o("code",{pre:!0},[e._v("x")]),e._v(" permission.")]),e._v(" "),o("p",[e._v("This could be fixed by changing my git config to respect file modes:")]),e._v(" "),o("pre",[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ git config --global core.filemode true\n")])]),e._v(" "),o("p",[e._v("Then, I needed to add the "),o("code",{pre:!0},[e._v("x")]),e._v(" flag and commit the script:")]),e._v(" "),o("pre",[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v('$ chmod +x ./bin/deploy.sh\n$ git commit -am "Add +x flag to deploy script"\n')])]),e._v(" "),o("p",[e._v("Afterwards the service happily ran my script with no problems.")]),e._v(" "),o("p",[e._v("Next I had to decide on which events would trigger a deployment.\nI went for the "),o("code",{pre:!0},[e._v("check_suite")]),e._v(" event, which is triggered every time a workflow starts or completes.\nAdditional filters for branches and the "),o("code",{pre:!0},[e._v("success")]),e._v(" state of the "),o("code",{pre:!0},[e._v("check_suite")]),e._v(" where added, and the configuration was complete.")]),e._v(" "),o("h2",[e._v("Conclusion and further development")]),e._v(" "),o("p",[e._v("The next steps in the development of the website will prepare it for it's initial release (hopefully late January).\nThis means filling everything with content, fixing open issues, adding required features, testing everything and so on.\nThere is still a lot to do, but I think we can make it until early next year.")]),e._v(" "),o("p",[e._v("Again, I will post a new update here once we have made significant progress.\nThanks for reading!")])])}]};e.exports={attributes:{title:"Progress update for age-of-aincrad.com",timestamp:"2020-12-06T16:00:00.000Z",summary:"This is a progress update on my work for the new homepage for age-of-aincrad.com."},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-12-06-progress-update-for-age-of-aincrad-com.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}},166:function(e,t,o){var map={"./2020-07-01-new-website.md":160,"./2020-07-05-developer-focused-pc-builds.md":161,"./2020-09-27-long-time-no-content.md":162,"./2020-10-19-working-on-age-of-aincrad-com.md":163,"./2020-12-06-progress-update-for-age-of-aincrad-com.md":164};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=166},171:function(e,t,o){"use strict";o.r(t);o(107),o(25),o(13),o(24);var n=o(3),r={layout:"default",asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=o(166),n=new Date,r=t.keys().map((function(e){var p=t(e);return{attributes:p.attributes,meta:p.meta}})).filter((function(e){return new Date(e.attributes.timestamp)<n})),e.abrupt("return",{posts:r});case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},data:function(){return{posts:[]}},methods:{getPermalink:function(e){var t=e.meta.resourcePath.split("\\").pop().split("/").pop().split(".").shift();return"/blog/".concat(t)}},computed:{sortedPosts:function(){return this.posts.slice().sort((function(p){return p.attributes.timestamp})).reverse()}}},l=o(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h1",{staticClass:"display-3"},[e._v("Blog")]),e._v(" "),o("div",{staticClass:"list-group list-group-flush rounded ml-3"},[e._l(e.sortedPosts,(function(t){return o("nuxt-link",{key:t.attributes.title,staticClass:"list-group-item list-group-item-action row align-items-center",attrs:{to:e.getPermalink(t)}},[o("p",{staticClass:"text-nowrap small text-muted col-12 col-md-4"},[e._v("\n        "+e._s(e.$moment(t.attributes.timestamp).fromNow())+" on "+e._s(e.$moment(t.attributes.timestamp).format("L"))+"\n      ")]),e._v(" "),o("div",{staticClass:"col-12 col-md-8"},[o("h5",[e._v(e._s(t.attributes.title))]),e._v(" "),o("p",[e._v(e._s(t.attributes.summary))])])])})),e._v(" "),0===e.posts.length?o("div",{staticClass:"list-group-item"},[e._v("\n      No posts were found.\n    ")]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports}}]);