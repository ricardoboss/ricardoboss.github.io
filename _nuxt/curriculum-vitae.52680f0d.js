import{P as w}from"./Pill.6cb94163.js";import{f as S,o as i,c as r,F as _,i as m,n as P,a as n,j as s,h as f,w as b,d as g,t as c,k as B,p as k,e as v,_ as y,u as V,b as p}from"./entry.e529fb01.js";import{u as D,P as x}from"./PageHeader.6b6213c4.js";const H=o=>(k("data-v-370ca676"),o=o(),v(),o),N={class:"timeline"},I={class:"line"},z={key:0,class:"dot-highlight"},E=H(()=>n("div",{class:"dot"},null,-1)),F={class:"content"},L={class:"timespan"},M={key:1,class:"description"},$={key:2,class:"badges"},A=S({__name:"Timeline",props:{items:{},noCurrent:{type:Boolean}},setup(o){function a(e){return typeof e.to>"u"?`since ${e.from}`:e.from===e.to?e.from:`${e.from} - ${e.to}`}function u(e){return e}function C(e){return e}return(e,R)=>(i(),r("ol",N,[(i(!0),r(_,null,m(e.items,(t,l)=>(i(),r("li",{key:l,class:P(["item",{current:l===0&&!e.noCurrent,minor:t.minor}])},[n("div",I,[l===0&&!e.noCurrent?(i(),r("div",z)):s("",!0),E]),n("div",F,[typeof t.title<"u"?(i(),f(B(typeof t.link<"u"?"a":"span"),{key:0,href:t.link,target:t.hasOwnProperty("link")?"_blank":void 0,class:"title"},{default:b(()=>[g(c(t.title),1)]),_:2},1032,["href","target"])):s("",!0),n("span",L,c(a(t)),1),typeof t.description<"u"?(i(),r("p",M,c(t.description),1)):s("",!0),typeof t.pills<"u"&&t.pills.length>0?(i(),r("div",$,[(i(!0),r(_,null,m(t.pills,d=>(i(),f(w,{key:d,pill:d},null,8,["pill"]))),128))])):s("",!0)])],2))),128))]))}});const h=y(A,[["__scopeId","data-v-370ca676"]]),T=o=>(k("data-v-6806316c"),o=o(),v(),o),J=T(()=>n("h2",null,"Work",-1)),Q=T(()=>n("h2",null,"Education",-1)),G="My curriculum vitae. This is my work and education history",O=S({__name:"curriculum-vitae",setup(o){V({title:"Curriculum Vitae"}),D({description:G});const a=[{title:"TRENZ GmbH",description:"Full-Stack Developer",from:"2022-05",pills:["Vue","TS","Flutter","Dart","C#",".NET","Android","iOS","C++","MSSQL"],link:"https://trenz.de/"},{title:"SVB-Spezialversand für Yacht- und Bootszubehör GmbH",description:"Backend Developer",from:"2021-10",to:"2022-04",pills:["PHP","Symfony","MySQL","Bash","Docker"],link:"https://svb.de/"},{title:"sendmeback GmbH",description:"Full-Stack Developer",from:"2021-06",to:"2021-10",pills:["Vue","JS","Flutter","Dart","Android","iOS","C#",".NET","PostgreSQL"]},{title:"TRENZ GmbH",description:"Junior Software Developer",from:"2020-07",to:"2021-05",pills:["C#",".NET","WPF","Xamarin","Android","iOS","C++","MSSQL","Powershell","Bash"],link:"https://trenz.de/"},{description:"Apprenticeship",from:"2018-08",to:"2020-07",pills:["PHP","MySQL","Java"],minor:!0},{description:"Temporary help (software developer)",from:"2018-05",to:"2018-08",minor:!0},{description:"Trainee",from:"2018-04",to:"2018-04",minor:!0},{title:"Busse Computertechnik",description:"Trainee",from:"2018-03",to:"2018-03"}],u=[{title:"Schulzentrum SII Utbremen (Professional School)",description:"Apprenticeship",from:"2018-08",to:"2020-07",link:"https://www.szut.de/",pills:["Java","SQLite"]},{title:"University of Bremen",description:"BoS in Computer Science (not finished)",from:"2017-07",to:"2018-02",link:"https://www.uni-bremen.de/",pills:["Java"]},{title:"Max-Planck Gymnasium (High School)",description:"Abitur",from:"2009-08",to:"2017-07",link:"https://maxe-online.de/",pills:["Delphi","Java"]}];return(C,e)=>(i(),r("section",null,[p(x,{title:"Curriculum Vitae"}),J,p(h,{items:a}),Q,p(h,{"no-current":"",items:u})]))}});const j=y(O,[["__scopeId","data-v-6806316c"]]);export{j as default};