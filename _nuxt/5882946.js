(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(t,e,n){"use strict";n.r(e);var o={name:"Timeline",props:["milestones"],methods:{timespan:function(t){return t.hasOwnProperty("to")?t.from===t.to?this.fromText(t.from):"".concat(this.fromText(t.from)," - ").concat(this.toText(t.to)):"since ".concat(this.fromText(t.from))},fromText:function(t){return this.$moment(t).format("MMMM YYYY")},toText:function(t){return this.$moment(t).format("MMMM YYYY")}}},r=n(9),l={components:{Timeline:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"timeline"},t._l(t.milestones,(function(e,i){return n("li",{key:i,staticClass:"timeline-item",class:0===i?"current":""},[t._m(0,!0),t._v(" "),n("div",{staticClass:"timeline-content"},[e.hasOwnProperty("title")?n("h5",{staticClass:"timeline-title"},[t._v(t._s(e.title))]):t._e(),t._v(" "),e.hasOwnProperty("description")?n("p",{staticClass:"timeline-description"},[t._v("\n          "+t._s(e.description)+"\n        ")]):t._e(),t._v(" "),n("span",{staticClass:"timeline-timespan",domProps:{innerHTML:t._s(t.timespan(e))}})])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-line"},[e("div",{staticClass:"timeline-dot"})])}],!1,null,"5a9956ae",null).exports},layout:"default",data:function(){return{workTimeline:[{title:"SVB-Spezialversand für Yacht- und Bootszubehör GmbH",description:"Software Developer",from:"2021-10"},{title:"sendmeback GmbH",description:"Software Developer",from:"2021-06",to:"2021-10"},{title:"TRENZ GmbH",description:"Junior Software Developer",from:"2020-07",to:"2021-05"},{description:"Apprenticeship",from:"2018-08",to:"2020-07"},{description:"Temporary help (software developer)",from:"2018-05",to:"2018-08"},{description:"Trainee",from:"2018-04",to:"2018-04"},{title:"Busse Computertechnik",description:"Trainee",from:"2018-03",to:"2018-03"}],educationTimeline:[{title:"Schulzentrum SII Utbremen (professional school)",description:"Apprenticeship",from:"2018-08",to:"2020-07"},{title:"University of Bremen",description:"BoS in Computer Science (dropout)",from:"2017-07",to:"2018-02"},{title:"Max-Planck Gymnasium (High School)",description:"Abitur",from:"2009-08",to:"2017-07"}]}}},m=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"display-3"},[t._v("Résumé")]),t._v(" "),n("h2",[t._v("Work")]),t._v(" "),n("Timeline",{attrs:{milestones:t.workTimeline}}),t._v(" "),n("h2",[t._v("Education")]),t._v(" "),n("Timeline",{attrs:{milestones:t.educationTimeline}})],1)}),[],!1,null,null,null);e.default=m.exports}}]);