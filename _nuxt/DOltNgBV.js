import{u as x,P as A}from"./C3Nln_xA.js";import{_ as v}from"./CLfJSxFy.js";import I from"./S-wFX72N.js";import{_ as L}from"./De-GrnSR.js";import{f as N}from"./Dnd51l0P.js";import{r as b,e as h,f as w,o as g,g as S,w as _,a as y,t as l,d as $,_ as B,c as D,b as d,u as E}from"./BvKdCBBv.js";import"./DZPeA23r.js";import"./Bn0TyMoD.js";import"./B5Amxqwo.js";const k=(r,e,n,...o)=>r[e]?b({...r,[e]:()=>N(r[e](),n==null?void 0:n.unwrap)},e,n,...o):b(r,e,n,...o),C={class:"title"},F={class:"date"},J={class:"description"},T=h({__name:"BlogEntryListItem",props:{entry:{}},setup(r){const e=r,n=w(()=>{const t=new Date,s=new Date(e.entry.createdAt),i=t.getTime()-s.getTime(),u=Math.floor(i/1e3),a=Math.floor(u/60),c=Math.floor(a/60),m=Math.floor(c/24),f=Math.floor(m/30),p=Math.floor(f/12);return p>0?`${p} year${p===1?"":"s"}`:f>0?`${f} month${f===1?"":"s"}`:m>0?`${m} day${m===1?"":"s"}`:c>0?`${c} hour${c===1?"":"s"}`:a>0?`${a} minute${a===1?"":"s"}`:`${u} second${u===1?"":"s"}`}),o=w(()=>new Date(e.entry.createdAt).toLocaleDateString());return(t,s)=>{const i=L;return g(),S(i,{to:t.entry._path,class:"blog-entry-list-item"},{default:_(()=>[y("h2",C,l(t.entry.title),1),y("div",F,l(n.value)+" ago on "+l(o.value),1),y("p",J,[k(t.$slots,"default",{},()=>[$(l(t.entry.description),1)],!0)])]),_:3},8,["to"])}}}),V=B(T,[["__scopeId","data-v-407b1484"]]),H={id:"blog-entry-list"},P=h({__name:"BlogEntryList",setup(r){const e={sort:[{createdAt:-1}],only:["title","description","createdAt","_path","_id"]};function n(t){return new Date(t.createdAt).getFullYear().toFixed(0)}function o(t){switch(new Date(t.createdAt).getMonth()){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}return(t,s)=>{const i=v,u=I;return g(),D("div",H,[d(u,{path:"/blog",query:e},{default:_(({list:a})=>[d(i,{data:a,"main-selector":n,"sub-selector":o},{item:_(c=>[d(V,{entry:c,class:"blog-entry-list-item"},null,8,["entry"])]),empty:_(()=>s[0]||(s[0]=[$(" No blog entries found. ")])),_:2},1032,["data"])]),_:1})])}}}),Y=B(P,[["__scopeId","data-v-c3b116f5"]]),M="I occasionally write about things I find interesting or projects I want to document.",W=h({__name:"index",setup(r){return E({title:"Blog"}),x({description:M}),(e,n)=>(g(),D("main",null,[d(A,{title:"Blog"},{default:_(()=>[$(l(M)+" Don't expect regular updates. ")]),_:1}),d(Y)]))}});export{W as default};