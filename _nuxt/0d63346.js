(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{173:function(e,t){const n={render:function(){var e=this;e.$createElement;return e._self._c,e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[e._v("A while ago, I discovered this fun little browser game called "),n("a",{attrs:{href:"https://orbity.io/"}},[e._v("Orbity")]),e._v(".\nIn this game, you control a small rocket, and your goal is to explore the universe and earn achievements.\nPretty simple stuff.")]),e._v(" "),n("p",[e._v("Now as a programmer, I was interested in how something like this could be programmed.\nThey seem to have implemented some kind of custom Javascript engine for this game.\nAnyway, the point is: I wanted to create my own copy of this game to explore the challenges the devs over at 2Dio Studio have solved.")]),e._v(" "),n("h2",[e._v("Humble Beginnings")]),e._v(" "),n("p",[e._v("To start things off, I created a new Vue.js project.")]),e._v(" "),n("p",[n("em",[e._v("Wait, isn't Vue.js absolutely overkill for this small project?")])]),e._v(" "),n("p",[e._v("Yes, dear reader, using Vue.js (at least in this instance) may be a bit overkill.\nBut I got to simple reasons why I used it anyway:")]),e._v(" "),n("ol",[n("li",[e._v("I found a library which lets me control a canvas using the sweet reactive properties")]),e._v(" "),n("li",[e._v("I am lazy and didn't want to start from scratch")])]),e._v(" "),n("p",[e._v("The library I wanted to use is called "),n("a",{attrs:{href:"https://konvajs.org/"}},[e._v("Konva")]),e._v(".\nIt provides a high-level API for creating animated canvases while using object-oriented programming.\nKonva itself has a "),n("a",{attrs:{href:"https://konvajs.org/docs/vue/index.html"}},[e._v("vue plugin")]),e._v(" (also one for React, if you're into that kind of stuff).")]),e._v(" "),n("h2",[e._v("Building a rocket")]),e._v(" "),n("p",[e._v('After project initialization, I began creating a basic "Game" component, which just holds the canvas:')]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v('<template>\n    <v-stage id="main_stage" ref="main_stage" :config="configKonva">\n      <v-layer>\n        <v-circle :config="planetConfig"></v-circle>\n      </v-layer>\n      <v-layer>\n        <v-arrow :config="rocketConfig"></v-arrow>\n      </v-layer>\n    </v-stage>\n</template>\n')])]),e._v(" "),n("p",[e._v('As you can see, I also included two layers:\nthe first layer contains a circle, which is used to represent a planet.\nThe second layer is used for the rocket which will be controlled by the player.\nAdditionally, the "v-stage" element (which is the root element for Konvas canvas wrapper) has its own config, and a handler for the "resize" event attached.\nMore on that later.')]),e._v(" "),n("p",[e._v("To display some simple shapes, I used the "),n("code",{pre:!0},[e._v("config")]),e._v(" attribute of Konvas elements:")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v("<script>\nconst degToRad = Math.PI / 180;\nconst bigG = 6.6742;\n\nconst planetRadius = 75;\nconst planetMass = 10;\nconst rocketRadius = 5;\nconst rocketMass = 0.1;\nconst launchSpeed = 6;\n\nexport default {\n  computed: {\n    configKonva() {\n      return {\n        width: window.innerWidth,\n        height: window.innerHeight,\n      };\n    },\n    \n    planetConfig() {\n      return {\n        x: this.configKonva.width / 2,\n        y: this.configKonva.height / 2,\n        fill: 'blue',\n        radius: planetRadius,\n      };\n    },\n    \n    rocketConfig() {\n      return {\n        points: [0, 0],\n        x: this.rocketPosition.x,\n        y: this.rocketPosition.y,\n        fill: 'green',\n        rotation: this.rocketPosition.phi,\n        pointerWidth: 4 * rocketRadius / 5,\n        pointerLength: rocketRadius,\n      }\n    },\n  }\n}\n<\/script>\n")])]),e._v(" "),n("p",[e._v("Breaking everything down:")]),e._v(" "),n("ul",[n("li",[e._v("the "),n("code",{pre:!0},[e._v("const")]),e._v(" definitions at the top of the script will also be referenced in later code snippets")]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("configKonva")]),e._v(" just tells the canvas which width and height it should have.\nIn this case, it should fill the whole window.")]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("planetConfig")]),e._v(" tells our circle where it should appear (in the middle of the canvas) and some other stylistic things.")]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("rocketConfig")]),e._v(" draws an arrow head at the rockets position and rotation.")])]),e._v(" "),n("p",[e._v('So far so good.\nNext, I introduced a "game tick", which is invoked every 20ms (could also be less often):')]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v("<script>\nexport default {\n  destroyed() {\n    clearInterval(this.gameTickInterval);\n  },\n  \n  mounted() {\n    this.gameTickInterval = setInterval(() => this.gameTick(), 20)\n  },\n  \n  data()\n  {\n    return {\n      gameTickInterval: -1,\n    }\n  },\n\n  methods: {\n    gameTick() {\n      // executed once every 10ms\n    }\n  }\n}\n<\/script>\n")])]),e._v(" "),n("p",[e._v("The whole game logic will happen in this "),n("code",{pre:!0},[e._v("gameTick")]),e._v(" method.\nThe first thing I wanted to replicate was the rocket sitting on the planets surface, waiting to get launched into space.\nTo achieve this, I added a variable to my components data called "),n("code",{pre:!0},[e._v("rocketLanded")]),e._v(" with a default value of "),n("code",{pre:!0},[e._v("true")]),e._v(":")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v("\n<script>\nexport default {\n  data()\n  {\n    return {\n      rocketLanded: true,\n    }\n  },\n}\n<\/script>\n")])]),e._v(" "),n("p",[e._v("Then, in the "),n("code",{pre:!0},[e._v("gameTick")]),e._v(", I can check if the rocket is landed on the planet and update the rockets position according to the planets rotation:")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v("<script>\nexport default {\n  methods: {\n    gameTick() {\n      this.planetRotation = (this.planetRotation + 0.1) % 360;\n\n      if (this.rocketLanded) {\n        this.rocketPosition.x = this.planetConfig.x + Math.cos(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);\n        this.rocketPosition.y = this.planetConfig.y + Math.sin(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);\n        this.rocketPosition.phi = this.planetRotation;\n      } else {\n        this.rocketPosition.x += this.rocketVelocity.x;\n        this.rocketPosition.y += this.rocketVelocity.y;\n\n        this.rocketPosition.phi += this.rocketVelocity.phi;\n      }\n    }\n  }\n}\n<\/script>\n")])]),e._v(" "),n("p",[e._v("At first, the planet is rotated 0.1° every game tick. Easy.")]),e._v(" "),n("p",[e._v("The position calculation when the rocket is landed might look a bit intimidating at first, but don't worry.\nI shall explain what kind of witchcraft is going on here.\nLet's look at the formula in detail:")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("this.rocketPosition.x = this.planetConfig.x + Math.cos(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);\n^                       ^                     ^                            ^             ^\n1                       5                     3                            2             4\n")])]),e._v(" "),n("ol",[n("li",[e._v("We want to set the x position of the rocket.")]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("this.planetRotation")]),e._v(" is saved in degrees, so in this step, we convert them to radians.")]),e._v(" "),n("li",[n("code",{pre:!0},[e._v("Math.cos")]),e._v(" gives us the coordinate on the x-axis for the given angle (value between -1 and 1).")]),e._v(" "),n("li",[e._v("Since we want the position on the surface of the planet, we need to add the radii of the planet and rocket to the position offset.")]),e._v(" "),n("li",[e._v("Lastly, we add the planets x coordinate")])]),e._v(" "),n("p",[e._v("Almost the same formula works for the y coordinate: just swap out every "),n("code",{pre:!0},[e._v("x")]),e._v(" with "),n("code",{pre:!0},[e._v("y")]),e._v(" and the "),n("code",{pre:!0},[e._v("Math.cos")]),e._v(" with "),n("code",{pre:!0},[e._v("Math.sin")]),e._v(", since you want the offset on the y-axis instead of the x-axis.")]),e._v(" "),n("p",[e._v("A quick test confirms that the rocket now sits on the planet and rotates with it.")]),e._v(" "),n("h2",[e._v("Liftoff!")]),e._v(" "),n("p",[e._v("The next step was to implement some kind of user input, so the rocket can lift off the surface and be controllable.")]),e._v(" "),n("p",[e._v("To achieve this, I attached event handlers for "),n("code",{pre:!0},[e._v("window.onkeydown")]),e._v(" and "),n("code",{pre:!0},[e._v("window.onkeyup")]),e._v(":")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v('<script>\nexport default {\n  created() {\n    window.addEventListener("resize", this.resizeCanvas);\n    window.addEventListener("keydown", this.keydown);\n    window.addEventListener("keyup", this.keyup);\n  },\n  \n  destroyed() {\n    window.removeEventListener("resize", this.resizeCanvas);\n    window.removeEventListener("keydown", this.keydown);\n    window.removeEventListener("keyup", this.keyup);\n    \n    clearInterval(this.gameTickInterval);\n  },\n  \n  methods: {\n    keydown(e) {\n      switch (e.keyCode) {\n        case 87: // w\n          if (this.rocketLanded) {\n            this.rocketLanded = false;\n            this.rocketVelocity.x = this.planetToRocket.x * launchSpeed;\n            this.rocketVelocity.y = this.planetToRocket.y * launchSpeed;\n            this.rocketPosition.phi = this.planetRotation + 90;\n          } else {\n            this.boost = true;\n          }\n          break;\n        case 65: // a\n          if (!this.rocketLanded)\n            this.rotate = -1;\n          break;\n        case 68: // d\n          if (!this.rocketLanded)\n            this.rotate = 1;\n          break;\n        case 83: // s\n          if (!this.rocketLanded)\n            this.rotate = 0;\n          break;\n      }\n    },\n    \n    keyup(e) {\n      switch (e.keyCode) {\n        case 87: // w\n          this.boost = false;\n          break;\n        case 65: // a\n        case 68: // d\n        case 83: // s\n          if (!this.rocketLanded)\n            this.rotate = null;\n          break;\n      }\n    }\n  },\n}\n<\/script>\n')])]),e._v(" "),n("p",[e._v("For the liftoff, I am using a variable called "),n("code",{pre:!0},[e._v("this.planetToRocket")]),e._v(".\nThis variable contains a vector which originates at the center of the planet and points to the center of the rocket.\nThis is useful for distance calculation and determining the normal vector of the planet at the location of the rocket "),n("em",[e._v("on the planet")]),e._v(' (basically answering "which way is up?").')]),e._v(" "),n("p",[e._v("The variable "),n("code",{pre:!0},[e._v("this.rocketLanded")]),e._v(' indicates that a liftoff is required in order to leave the planet.\n"Liftoff" in this case means giving the rocket a velocity in the direction of the normal vector ('),n("code",{pre:!0},[e._v("this.planetToRocket")]),e._v(") with some initial velocity.")]),e._v(" "),n("h2",[e._v("Future")]),e._v(" "),n("p",[e._v("Initially, I wanted to write a lot more about the details on how the gravity works and energy loss what controls I implemented for the rocket (like tracking the trajectory/reverse).\nBut in the end I was too distracted playing the game and I just wanted to finish this blog entry.\nMaybe I'll extend this post in the future.")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("And now: go play it yourself and make sure to send me a screenshot of your flight-path ("),n("a",{attrs:{href:"https://twitter.com/_ricardoboss"}},[e._v("@_ricardoboss")]),e._v("):")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://rocket-science.ricardoboss.de/"}},[e._v("rocket-science.ricardoboss.de")])])])}]};e.exports={attributes:{title:"It's rocket science",timestamp:"2020-12-23T08:00:00.000Z",summary:"It's simply rocket science, can't be that hard, _right_?"},meta:{resourcePath:"/home/runner/work/ricardoboss.github.io/ricardoboss.github.io/content/2020-12-23-its-rocket-science.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);