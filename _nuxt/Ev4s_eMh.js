import{f as c,o as a,c as r,t as o,m as h,j as i,a as g,F as n,i as l,h as d,_ as u,w as _,d as k}from"./D7sEdBt6.js";import{P as f}from"./BpLG2S_H.js";const y=["href","rel","target"],C=c({__name:"CardLink",props:{link:{}},setup(m){return(e,p)=>(a(),r("a",{href:e.link.href,rel:e.link.rel,target:e.link.target},o(e.link.title),9,y))}}),v={class:"card"},H=["alt","src"],M={class:"title"},$=["innerHTML"],B={key:1,class:"links"},L={key:2,class:"pills"},w=c({__name:"Card",props:{card:{},imageMaxHeight:{}},setup(m){return(e,p)=>(a(),r("div",v,[e.card.image?(a(),r("img",{key:0,class:"image",alt:e.card.title,src:e.card.image,style:h(`--image-max-height: ${e.card.imageMaxHeight??e.imageMaxHeight??"auto"}; --image-padding: ${e.card.imagePadding??"1em"};`)},null,12,H)):i("",!0),g("div",M,o(e.card.title),1),g("div",{class:"description",innerHTML:e.card.description},null,8,$),e.card.links?(a(),r("div",B,[(a(!0),r(n,null,l(e.card.links,(s,t)=>(a(),d(C,{key:t,link:s},null,8,["link"]))),128))])):i("",!0),e.card.pills?(a(),r("div",L,[(a(!0),r(n,null,l(e.card.pills,(s,t)=>(a(),d(f,{key:t,pill:s},null,8,["pill"]))),128))])):i("",!0)]))}}),D=u(w,[["__scopeId","data-v-1b4da098"]]),N=c({__name:"CardDeck",props:{cards:{},imageMaxHeight:{},cardWidth:{}},setup(m){return(e,p)=>(a(),r("div",{class:"card-deck",style:h(`--card-width: ${e.cardWidth??"20rem"}`)},[(a(!0),r(n,null,l(e.cards,(s,t)=>(a(),d(D,{key:t,card:s,"image-max-height":e.imageMaxHeight},{default:_(()=>[k(o(s.title),1)]),_:2},1032,["card","image-max-height"]))),128))],4))}}),V=u(N,[["__scopeId","data-v-69662a15"]]);export{V as C};
