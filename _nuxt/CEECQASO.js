import{P as C}from"./CAvzdsp4.js";import{e as k,o as r,c as i,F as m,h as f,n as T,a as o,i as n,g as h,w as b,d as w,t as a,j as P,_ as S,u as B,b as u}from"./BCCo3w1j.js";import{u as g,P as D}from"./RTtsQ7xj.js";const V={class:"timeline"},H={class:"line"},N={key:0,class:"dot-highlight"},x={class:"content"},z={class:"timespan"},E={key:1,class:"description"},F={key:2,class:"badges"},L=k({__name:"Timeline",props:{items:{},noCurrent:{type:Boolean}},setup(y){function s(e){return typeof e.to>"u"?`since ${e.from}`:e.from===e.to?e.from:`${e.from} - ${e.to}`}function c(e){return e}function v(e){return e}return(e,p)=>(r(),i("ol",V,[(r(!0),i(m,null,f(e.items,(t,l)=>(r(),i("li",{key:l,class:T(["item",{current:l===0&&!e.noCurrent,minor:t.minor}])},[o("div",H,[l===0&&!e.noCurrent?(r(),i("div",N)):n("",!0),p[0]||(p[0]=o("div",{class:"dot"},null,-1))]),o("div",x,[typeof t.title<"u"?(r(),h(P(typeof t.link<"u"?"a":"span"),{key:0,href:t.link,target:t.hasOwnProperty("link")?"_blank":void 0,class:"title"},{default:b(()=>[w(a(t.title),1)]),_:2},1032,["href","target"])):n("",!0),o("span",z,a(s(t)),1),typeof t.description<"u"?(r(),i("p",E,a(t.description),1)):n("",!0),typeof t.pills<"u"&&t.pills.length>0?(r(),i("div",F,[(r(!0),i(m,null,f(t.pills,d=>(r(),h(C,{key:d,pill:d},null,8,["pill"]))),128))])):n("",!0)])],2))),128))]))}}),_=S(L,[["__scopeId","data-v-f6ce3b7b"]]),M="My curriculum vitae. This is my work and education history",A=k({__name:"curriculum-vitae",setup(y){B({title:"Curriculum Vitae"}),g({description:M});const s=[{title:"TRENZ GmbH",description:"Full-Stack Developer",from:"2022-05",pills:["Vue","TS","Flutter","Dart","C#",".NET","Android","iOS","C++","MSSQL"],link:"https://trenz.de/"},{title:"SVB-Spezialversand für Yacht- und Bootszubehör GmbH",description:"Backend Developer",from:"2021-10",to:"2022-04",pills:["PHP","Symfony","MySQL","Bash","Docker"],link:"https://svb.de/"},{title:"sendmeback GmbH",description:"Full-Stack Developer",from:"2021-06",to:"2021-10",pills:["Vue","JS","Flutter","Dart","Android","iOS","C#",".NET","PostgreSQL"]},{title:"TRENZ GmbH",description:"Junior Software Developer",from:"2020-07",to:"2021-05",pills:["C#",".NET","WPF","Xamarin","Android","iOS","C++","MSSQL","Powershell","Bash"],link:"https://trenz.de/"},{description:"Apprenticeship",from:"2018-08",to:"2020-07",pills:["PHP","MySQL","Java"],minor:!0},{description:"Temporary help (software developer)",from:"2018-05",to:"2018-08",minor:!0},{description:"Trainee",from:"2018-04",to:"2018-04",minor:!0},{title:"Busse Computertechnik",description:"Trainee",from:"2018-03",to:"2018-03"}],c=[{title:"Schulzentrum SII Utbremen (Professional School)",description:"Apprenticeship",from:"2018-08",to:"2020-07",link:"https://www.szut.de/",pills:["Java","SQLite"]},{title:"University of Bremen",description:"BoS in Computer Science (not finished)",from:"2017-07",to:"2018-02",link:"https://www.uni-bremen.de/",pills:["Java"]},{title:"Max-Planck Gymnasium (High School)",description:"Abitur",from:"2009-08",to:"2017-07",link:"https://maxe-online.de/",pills:["Delphi","Java"]}];return(v,e)=>(r(),i("section",null,[u(D,{title:"Curriculum Vitae"}),e[0]||(e[0]=o("h2",null,"Work",-1)),u(_,{items:s}),e[1]||(e[1]=o("h2",null,"Education",-1)),u(_,{"no-current":"",items:c})]))}}),I=S(A,[["__scopeId","data-v-6806316c"]]);export{I as default};
