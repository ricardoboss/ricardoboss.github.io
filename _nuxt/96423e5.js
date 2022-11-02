(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(t,e,n){"use strict";n(25),n(140),n(42);var o={name:"LangBadge",props:{language:{type:String,required:!0}},computed:{backgroundClass:function(){return"bg-lang-"+this.language.replace("#","s").replace("++","pp").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"badge rounded-pill ms-1",class:t.backgroundClass},[t._v("\n  "+t._s(t.language)+"\n")])}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,n){"use strict";var o={name:"ProjectBoard",components:{LangBadge:n(199).a},props:["projects","col_settings","image_height","image_padding"]},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",class:t.col_settings},t._l(t.projects,(function(e,i){return n("div",{key:i,staticClass:"col"},[n("div",{staticClass:"card h-100 shadow"},[e.hasOwnProperty("image")?n("img",{staticClass:"card-img-top",class:"p-"+(void 0!==t.image_padding?t.image_padding:3),attrs:{height:void 0!==t.image_height&&t.image_height,src:e.image,alt:e.title}}):t._e(),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),e.hasOwnProperty("links")&&e.links.length>0?n("div",{staticClass:"list-group list-group-flush"},t._l(e.links,(function(link){return n("a",{key:link.title,staticClass:"list-group-item list-group-item-action",attrs:{href:link.href,rel:link.rel,target:"_blank"}},[t._v("\n          "+t._s(link.title)+"\n        ")])})),0):t._e(),t._v(" "),e.hasOwnProperty("languages")?n("div",{staticClass:"card-body flex-grow-0 text-right py-2"},t._l(e.languages,(function(t){return n("lang-badge",{key:t,attrs:{language:t}})})),1):t._e()])])})),0)}),[],!1,null,null,null);e.a=component.exports},222:function(t,e,n){"use strict";n.r(e);var o={components:{ProjectBoard:n(200).a},layout:"default",computed:{projects:function(){return[{title:"SVB",description:"Your specialist online shop for technical boat equipment, sailing accessories and water sports equipment.",links:[{title:"Visit",href:"https://svb24.com/"}],languages:["PHP","Symfony"]},{title:"sendmeback Account",description:"Customer backend for managing purchased sendmeback products. Features an ASP.NET backend with JWT authentication.",links:[{title:"Visit",href:"https://account.sendmeback.de/"}],languages:["TS","Vue"]},{title:"sendmeback App",description:"App for viewing registered products and pairing a smartphone with a product. Enable localization and sending notifications to the smartphone.",links:[{title:"Play Store",href:"https://play.google.com/store/apps/details?id=de.sendmeback.smb"},{title:"App Store",href:"https://apps.apple.com/de/app/sendmeback/id1381318877"}],languages:["Dart","Flutter","Android","iOS"]},{title:"Age of Aincrad (website)",description:"A website for a game (currently in development). Features include login via Discord, Strapi as a backend and a Vuetify frontend.",links:[{title:"Visit",href:"https://age-of-aincrad.com/"}],languages:["TS","Vue"]},{title:"TRENZ Pilot Plug Manager App",description:"Mobile application to interact with a TRENZ Pilot Plug. Features cross-platform TCP socket communication. Analytics using Microsoft App Center.",links:[{title:"Play Store",href:"https://play.google.com/store/apps/details?id=de.trenz.PilotPlugRemote"},{title:"App Store",href:"https://apps.apple.com/us/app/pilot-plug-manager/id1437240460"}],languages:["C#",".NET","Xamarin","Android","iOS"]},{title:"TRENZ Pilot Plug Manager",description:"Desktop application to interact with a TRENZ Pilot Plug. Features serial port and socket communication. Analytics using Microsoft App Center.",links:[{title:"Visit",href:"https://manager.trenz-pilotplug.com/"}],languages:["C#",".NET","WPF"]}]}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"display-3"},[t._v("Portfolio")]),t._v(" "),n("span",{staticClass:"lead"},[t._v("\n    These are projects which I have worked on (or at least partially) in my job or in my free time. For most of the projects, I cannot share\n    the source code. Instead, I can show which tech stack was used and link to the result.\n    Also take a look at "),n("router-link",{attrs:{to:"/projects"}},[t._v("my open source projects")]),t._v(".\n  ")],1),t._v(" "),n("hr",{staticClass:"my-4"}),t._v(" "),n("ProjectBoard",{attrs:{projects:t.projects,col_settings:"row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);