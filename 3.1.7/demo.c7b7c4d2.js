import{c as l}from"./mobile.4f9c1c24.js";import{_ as r}from"./index.25a44c2e.js";import{m as a,r as c,e as d,j as e,k as s,g as n,o as i}from"./vendor.36d75c4a.js";const{createDemo:_}=l("price"),p=_({setup(){const u=a(0);return setInterval(()=>{u.value=Math.random()*1e7},1e3),{price:u}}}),m={class:"demo"},F=n("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),f=n("h2",null,"\u6709\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u65E0\u5343\u4F4D\u5206\u9694",-1),h=n("h2",null,"\u5E26\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u6709\u5343\u4F4D\u5206\u9694\uFF0C\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D",-1),C=n("h2",null,"\u5F02\u6B65\u968F\u673A\u53D8\u66F4",-1);function B(u,E,D,v,b,j){const t=c("nut-price"),o=c("nut-cell");return i(),d("div",m,[F,e(o,null,{default:s(()=>[e(t,{price:0,"need-symbol":!1,thousands:!0})]),_:1}),f,e(o,null,{default:s(()=>[e(t,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])]),_:1}),h,e(o,null,{default:s(()=>[e(t,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])]),_:1}),C,e(o,null,{default:s(()=>[e(t,{price:u.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])]),_:1})])}var $=r(p,[["render",B]]);export{$ as default};