import{u as s,P as n}from"./PageHeader.480c2d6c.js";import{C as l}from"./CardDeck.5e0130c7.js";import{f as p,u as c,l as d,o as u,c as m,b as t,w as o,d as e,t as h}from"./entry.bd896906.js";import"./Pill.3dea0334.js";const i="These are projects which I have worked on (or at least partially) in my job or in my free time.",A=p({__name:"portfolio",setup(g){c({title:"Portfolio"}),s({description:i});const a=[{title:"TRENZ Docs",description:"A way to host Azure DevOps wikis (or any Markdown-based wiki, really) publicly. Includes authentication support.",links:[{title:"API Source",href:"https://github.com/trenz-gmbh/trenz-docs-api",target:"_blank"},{title:"Frontend Source",href:"https://github.com/trenz-gmbh/trenz-docs",target:"_blank"},{title:"Example",href:"https://docs.ela.easylogic.de",target:"_blank"}],pills:["Vue","TS",".NET","C#"]},{title:"SVB",description:"Your specialist online shop for technical boat equipment, sailing accessories and water sports equipment.",links:[{title:"Visit",href:"https://svb24.com/",target:"_blank"}],pills:["PHP","Symfony"]},{title:"sendmeback Account",description:"Customer backend for managing purchased sendmeback products. Features an ASP.NET backend with JWT authentication.",pills:["TS","Vue"]},{title:"sendmeback App",description:"App for viewing registered products and pairing a smartphone with a product. Enable localization and sending notifications to the smartphone.",pills:["Dart","Flutter","Android","iOS"]},{title:"Age of Aincrad (website)",description:"A website for a game (currently in development). Features include login via Discord, Strapi as a backend and a Vuetify frontend.",links:[{title:"Visit",href:"https://age-of-aincrad.com/",target:"_blank"}],pills:["TS","Vue"]},{title:"TRENZ Pilot Plug Manager App",description:"Mobile application to interact with a TRENZ Pilot Plug. Features cross-platform TCP socket communication. Analytics using Microsoft App Center.",links:[{title:"Play Store",href:"https://play.google.com/store/apps/details?id=de.trenz.PilotPlugRemote",target:"_blank"},{title:"App Store",href:"https://apps.apple.com/us/app/pilot-plug-manager/id1437240460",target:"_blank"}],pills:["C#",".NET","Xamarin","Android","iOS"]},{title:"TRENZ Pilot Plug Manager",description:"Desktop application to interact with a TRENZ Pilot Plug. Features serial port and socket communication. Analytics using Microsoft App Center.",links:[{title:"Visit",href:"https://manager.trenz-pilotplug.com/",target:"_blank"}],pills:["C#",".NET","WPF"]}];return(f,k)=>{const r=d("router-link");return u(),m("main",null,[t(n,{title:"Portfolio"},{default:o(()=>[e(h(i)+" For most of the projects, I cannot share the source code. Instead, I can show which tech stack was used and link to the result. Also take a look at "),t(r,{to:"/projects"},{default:o(()=>[e("my personal open source projects")]),_:1}),e(" . ")]),_:1}),t(l,{cards:a})])}}});export{A as default};
