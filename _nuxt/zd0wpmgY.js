import{f as _,o as t,c as o,r as n,F as c,i as m,q as d,t as l,s as i,j as u,a as S,v as h,_ as f}from"./DKaxhBvk.js";const y={class:"sectioned-list"},v={key:0,class:"main-header"},b={key:1,class:"sub-header"},k={class:"item"},g=_({__name:"SectionedList",props:{data:{},mainSelector:{type:Function},subSelector:{type:Function}},setup(F){let a="",r="";return(e,B)=>(t(),o("div",y,[e.data.length===0?n(e.$slots,"empty",{key:0},void 0,!0):(t(!0),o(c,{key:1},m(e.data,(s,p)=>(t(),o(c,{key:p},[d(a)!==e.mainSelector(s)?(t(),o("h2",v,l(i(a)?a.value=e.mainSelector(s):a=e.mainSelector(s)),1)):u("",!0),d(r)!==e.subSelector(s)?(t(),o("h3",b,l(i(r)?r.value=e.subSelector(s):r=e.subSelector(s)),1)):u("",!0),S("div",k,[n(e.$slots,"item",h({ref_for:!0},s),void 0,!0)])],64))),128))]))}}),L=f(g,[["__scopeId","data-v-d71dc1bd"]]);export{L as _};
