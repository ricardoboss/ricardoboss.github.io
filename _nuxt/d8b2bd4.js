(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(t,e,r){"use strict";r(76),r(106);var o={name:"ProjectBoard",props:["projects","col_settings","image_height","image_padding"],methods:{getBackgroundClass:function(t){return"bg-lang-"+t.replace("#","s").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")}}},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row",class:t.col_settings},t._l(t.projects,(function(e,i){return r("div",{key:i,staticClass:"col"},[r("div",{staticClass:"card h-100 shadow"},[e.hasOwnProperty("image")?r("img",{staticClass:"card-img-top",class:"p-"+(void 0!==t.image_padding?t.image_padding:3),attrs:{height:void 0!==t.image_height&&t.image_height,src:e.image,alt:e.title}}):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),e.hasOwnProperty("links")&&e.links.length>0?r("div",{staticClass:"list-group list-group-flush"},t._l(e.links,(function(link){return r("a",{key:link.title,staticClass:"list-group-item list-group-item-action",attrs:{href:link.href,target:"_blank"}},[t._v("\n          "+t._s(link.title)+"\n        ")])})),0):t._e(),t._v(" "),e.hasOwnProperty("languages")?r("div",{staticClass:"card-body flex-grow-0 text-right py-2"},t._l(e.languages,(function(e){return r("span",{key:e,staticClass:"badge rounded-pill ml-1",class:t.getBackgroundClass(e)},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e()])])})),0)}),[],!1,null,"7dc355cc",null);e.a=component.exports},170:function(t,e,r){"use strict";r.r(e);var o={name:"contact",components:{ProjectBoard:r(165).a},data:function(){return{contactInformation:[{image:"/vector/discord.svg",title:"Discord",description:"mizzle#0001"},{image:"/vector/github.svg",title:"GitHub",description:"ricardoboss",links:[{title:"GitHub Profile",href:"https://github.com/ricardoboss"}]},{image:"/vector/linkedin.svg",title:"LinkedIn",description:"Ricardo Boss",links:[{title:"LinkedIn Profile",href:"https://www.linkedin.com/in/ricardo-boss/"}]},{image:"/vector/twitter.svg",title:"Twitter",description:"@_ricardoboss",links:[{title:"Twitter Profile",href:"https://twitter.com/_ricardoboss"}]},{image:"/vector/mail.svg",title:"Mail",description:"contact@ricardoboss.de",links:[{title:"Send me an e-mail",href:"mailto:contact@ricardoboss.de"}]}]}}},n=r(8),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("ProjectBoard",{attrs:{projects:this.contactInformation,image_height:"128",col_settings:"row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-3"}})],1)}),[],!1,null,"62d4e4bf",null);e.default=component.exports}}]);