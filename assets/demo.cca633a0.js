import{c as e}from"./mobile.46a22cc4.js";import{z as s,A as l,r as o,o as n,c as a,f as r,F as t,h as d,t as c,y as i}from"./vendor.ab54178f.js";import"./index.65da50cd.js";const{createDemo:u}=e("pullrefresh");var f=u({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})});const h=i();s("data-v-02779db4");const p={class:"demo full"},v=r("h2",null,"纵向",-1),m={class:"vertical"},R={class:"content",id:"pull"},w={class:"main"},_=r("h2",null,"横向",-1),D={class:"horizontal"},b={class:"contentH",id:"pullH"},H={class:"mainH"};l();const j=h(((e,s,l,i,u,f)=>{const j=o("nut-pullrefresh"),y=o("nut-cell");return n(),a("div",p,[v,r(y,null,{default:h((()=>[r("div",m,[r(j,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:h((()=>[r("div",R,[r("div",w,[(n(),a(t,null,d([1,2,3,4,5,6,7,8,9],(e=>r("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),_,r(y,null,{default:h((()=>[r("div",D,[r(j,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:h((()=>[r("div",b,[r("div",H,[(n(),a(t,null,d([1,2,3,4,5,6,7,8,9],(e=>r("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])}));f.render=j,f.__scopeId="data-v-02779db4";export default f;