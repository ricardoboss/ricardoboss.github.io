(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(t,e,n){"use strict";n.r(e);var r={name:"Timeline",props:["milestones"],methods:{timespan:function(t){return t.hasOwnProperty("to")?t.from===t.to?t.from:'<span class="d-none d-md-inline"><span class="text-nowrap">'.concat(t.from,'</span> - </span><span class="text-nowrap">').concat(t.to,"</span>"):"since ".concat(t.from)}}},o=n(7),l={components:{Timeline:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"timeline"},t._l(t.milestones,(function(e,i){return n("li",{key:i,staticClass:"timeline-item",class:0===i?"current":""},[n("div",{staticClass:"timeline-timespan",domProps:{innerHTML:t._s(t.timespan(e))}}),t._v(" "),t._m(0,!0),t._v(" "),n("div",{staticClass:"timeline-content"},[e.hasOwnProperty("title")?n("h5",{staticClass:"timeline-title"},[t._v(t._s(e.title))]):t._e(),t._v(" "),e.hasOwnProperty("description")?n("p",{staticClass:"timeline-description"},[t._v("\n          "+t._s(e.description)+"\n        ")]):t._e()])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-line"},[e("div",{staticClass:"timeline-dot"})])}],!1,null,"4040ad82",null).exports},layout:"default",data:function(){return{workTimeline:[{title:"TRENZ GmbH",description:"Junior Software Developer",from:"July 2020"},{description:"Apprenticeship",from:"August 2018",to:"July 2020"},{description:"Temporary help (software developer)",from:"May 2018",to:"August 2018"},{description:"Trainee",from:"April 2018",to:"April 2018"},{title:"Busse Computertechnik",description:"Trainee",from:"February 2018",to:"February 2018"}],educationTimeline:[{title:"Schulzentrum SII Utbremen (professional school)",description:"Apprenticeship",from:"August 2018",to:"July 2020"},{title:"University of Bremen",description:"BoS in Computer Science (dropout)",from:"August 2017",to:"February 2018"},{title:"Max-Planck Gymnasium (High School)",description:"Abitur",from:"August 2009",to:"July 2017"}]}}},c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"display-3"},[t._v("Résumé")]),t._v(" "),n("h2",[t._v("Work")]),t._v(" "),n("Timeline",{attrs:{milestones:t.workTimeline}}),t._v(" "),n("h2",[t._v("Education")]),t._v(" "),n("Timeline",{attrs:{milestones:t.educationTimeline}}),t._v(" "),n("h2",[t._v("Certifications")]),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1 mr-3"},[e("div",{staticClass:"row"},[e("strong",{staticClass:"col-md-4"},[this._v("Microsoft Certified Developer")]),this._v(" "),e("p",{staticClass:"col-md-8"},[this._v('\n          On January 8, 2019 I completed the requirements to be recognized as a Microsoft Certified Professional by\n          passing the exam #483: "Programming in C#".\n        ')])])]),this._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("figure",{staticClass:"figure",staticStyle:{"max-width":"12rem"}},[e("img",{staticClass:"img-fluid",attrs:{alt:"Programming in C# - Exam Passed Badge",src:"/img/programming-in-cs-badge.min.png"}}),this._v(" "),e("figcaption",{staticClass:"figure-caption text-center"},[this._v('"Programming in C#" - Exam Passed Badge')])])])])}],!1,null,null,null);e.default=c.exports}}]);