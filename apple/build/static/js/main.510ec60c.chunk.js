(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,r){e.exports={appBar:"AppBar_appBar__1SFPf",content:"AppBar_content__2ew-z",links:"AppBar_links__16raN",show:"AppBar_show__3Zenf",stick:"AppBar_stick__wQvQR"}},,,,function(e,t,r){e.exports={NavBar:"NavBar_NavBar__Cqnef",container:"NavBar_container__WwQ6n"}},function(e,t,r){e.exports={SkillContainer:"Skills_SkillContainer__22wbT",Skill:"Skills_Skill__RFz8e"}},,function(e,t,r){},,function(e,t,r){e.exports={ThemeButton:"ThemeButton_ThemeButton__1xR2W"}},function(e,t,r){e.exports={Link:"Link_Link__FFgpJ"}},function(e,t,r){e.exports={Hero:"Hero_Hero__1ehKd"}},function(e,t,r){e.exports={section:"Section_section__2mYr1"}},,function(e,t,r){e.exports={Me:"Me_Me__3Dttn"}},function(e,t,r){e.exports={Footer:"Footer_Footer__37hEc"}},function(e,t,r){},function(e,t,r){e.exports=r(27)},,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(10),c=r.n(o),l=(r(9),r(3)),s=r(1),i=r(2),u=r.n(i),m="theme";function p(e){e&&localStorage.setItem(m,e),document.body.setAttribute("class",g())}function g(){return localStorage.getItem(m)||"light"}var f=r(11),d=r.n(f);function v(){var e=a.a.useState(g()),t=Object(l.a)(e,2),r=t[0],n=t[1];return a.a.createElement("button",{title:"Switch theme",onClick:function(){var e="dark"===r?"light":"dark";p(e),n(e)},className:d.a.ThemeButton},r)}var h=r(12),E=r.n(h);function w(e){var t=e.href,r=e.children,n=function(){return window.location.hash===t},o=a.a.useRef(null);function c(){var e=n();o.current.classList.toggle("active",e)}return a.a.useEffect(function(){return c(),window.addEventListener("popstate",c),function(){return window.removeEventListener("popstate",c)}},[]),a.a.createElement("a",{onClick:c,className:E.a.Link,ref:o,href:t},r)}var k=function(){function e(){o(window.scrollY>c.current.offsetHeight/2)}a.a.useEffect(function(){return e(),document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}},[]);var t=a.a.useState(!1),r=Object(l.a)(t,2),n=r[0],o=r[1],c=a.a.useRef(null);return a.a.createElement("div",{"data-height":!0,ref:c,className:Object(s.a)(u.a.appBar,n&&u.a.stick)},a.a.createElement("div",{className:Object(s.a)("container",u.a.content)},a.a.createElement("h3",null,"Web Developer"),a.a.createElement("div",{className:Object(s.a)(u.a.links,n&&u.a.show)},a.a.createElement(w,{href:"#me"},"About Me"),a.a.createElement(w,{href:"#skills"},"Skills"),a.a.createElement(w,{href:"#certs"},"Certificates"),a.a.createElement(w,{href:"#edu"},"Education"),a.a.createElement(w,{href:"#proj"},"Projects")),a.a.createElement(v,null)))},b=r(4),_=r(13),S=r.n(_),j=r(14),N=r.n(j);function x(e){var t=e.children,r=e.className,n=Object(b.a)(e,["children","className"]);return a.a.createElement("section",Object.assign({className:Object(s.a)(N.a.section,r)},n),t)}function y(e){var t=e.children,r=e.className,n=Object(b.a)(e,["children","className"]);return a.a.createElement(x,Object.assign({className:Object(s.a)(S.a.Hero,r)},n),t)}var B=r(5),O=r.n(B),L=r(15);r(26);function M(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(L.a)(O.a.mark(function e(){var t,n,a,o,c,l,s;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=window.scrollY+window.innerHeight,n=!0,a=!1,o=void 0,e.prev=4,c=document.body.querySelectorAll("[data-scroll]")[Symbol.iterator]();case 6:if(n=(l=c.next()).done){e.next=15;break}if(s=l.value,!(window.scrollY<s.offsetTop+s.offsetHeight&&s.offsetTop<t)||s.style.opacity){e.next=12;break}return e.next=11,new Promise(function(e){return setTimeout(e,100)});case 11:r(s);case 12:n=!0,e.next=6;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),a=!0,o=e.t0;case 21:e.prev=21,e.prev=22,n||null==c.return||c.return();case 24:if(e.prev=24,!a){e.next=27;break}throw o;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,null,[[4,17,21,29],[22,,24,28]])}))).apply(this,arguments)}function r(e){e.style.setProperty("opacity",1),e.style.setProperty("transform","translateY(0px)")}return a.a.useEffect(function(){return e(),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),null}var J=r(6),T=r.n(J);function C(){return a.a.createElement("nav",{className:T.a.NavBar},a.a.createElement("div",{className:Object(s.a)("container",T.a.container)},a.a.createElement(w,{href:"/"},"Logo"),a.a.createElement(w,{href:"#me"},"About Me"),a.a.createElement(w,{href:"#skills"},"Skills"),a.a.createElement(w,{href:"#certs"},"Certificates"),a.a.createElement(w,{href:"#edu"},"Education"),a.a.createElement(w,{href:"#proj"},"Projects"),a.a.createElement(w,{href:"/vk"},"VK style")))}var I=r(16),A=r.n(I);function q(){return a.a.createElement(y,{className:A.a.Me},a.a.createElement("h1",{"data-scroll":!0},"React Developer"),a.a.createElement("h2",{"data-scroll":!0,className:"headline"},"More hooks.",a.a.createElement("br",null),"More components.",a.a.createElement("br",null),"More bugs."),a.a.createElement("p",{"data-scroll":!0},"Since 2012 ",a.a.createElement("a",{href:"#disclaimer"},"*")))}var W=r(17),F=r.n(W),H=r(18),R=r.n(H);function D(e){var t=e.children;return a.a.createElement("div",{className:Object(s.a)("container",R.a.Container)},t)}var P=function(){return a.a.createElement("footer",{className:F.a.Footer},a.a.createElement(D,null,a.a.createElement("p",{id:"disclaimer"},"* IT experience since 01.01.2012, Web development experience since 09.01.2015")))},U=[{name:"JavaScript",title:"geekbrains",url:"https://geekbrains.ru/certificates/459861.en",img:"https://i.imgur.com/xLyri03.png"},{name:"JavaScript",title:"tests4geeks",url:"https://tests4geeks.com/certificate?cr=pg8h1p8",img:"https://imgur.com/sikfg7g.jpg"},{name:"React",title:"skillvalue",url:"https://skillvalue.com/en/certificate/pMO560o3r3IWl1f2gVbhRt9VZH5zGZfIXwfbNalgSjR82a2qP158v5Z3UuId",img:"https://imgur.com/SLI5oat.jpg"},{name:"JavaScript",title:"skillvalue",url:"https://skillvalue.com/en/certificate/9WJud1Fgvu2sA2EDEWUwCVNzvarD6Yqtadm2JvqhmWilgpH8VJUNMhbkSxgU",img:"https://imgur.com/Ff8qoJM.jpg"},{name:"Angular",title:"skillvalue",url:"https://skillvalue.com/en/certificate/3cnKsBctcyw9nWdeqLMc65OwNTMwIXDKo4w7A1CaCnS387ZJnoAIiWUcwcqh",img:"https://imgur.com/DtHkBKT.jpg"},{name:"Bootstrap",title:"skillvalue",url:"https://skillvalue.com/en/certificate/JGSGjnx6Co3gSrfax9DZBMuvCuf2t7IpLtj8UHnYj8ON9lq4u3Im5ShjYk3h",img:"https://imgur.com/TOtpaRx.jpg"}],Y={frontend:[{name:"React",logo:"https://cdn.worldvectorlogo.com/logos/react-1.svg",cert:U[3],color:"#222222"},{name:"JavaScript",logo:"https://cdn.worldvectorlogo.com/logos/javascript.svg",cert:U[3],color:"#f7df1e"},{name:"TypeScript",logo:"https://cdn.worldvectorlogo.com/logos/typescript.svg",color:"#007acc"},{name:"Webpack",logo:"https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",color:"#2b3a42"},{name:"Angular",logo:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",cert:U[4],color:"#2a7bd0"},{name:"JQuery",logo:"https://cdn.worldvectorlogo.com/logos/jquery-1.svg",color:"#0769ad"},{name:"Bootstrap",logo:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",cert:U[5],color:"#563d7c"},{name:"Material-UI",logo:"https://material-ui.com/static/images/material-ui-logo.svg",color:"#fff"}],backend:[{name:"Node JS",logo:"https://nodejs.org/static/images/logo.svg",color:"#333333"},{name:"Express JS",logo:"https://cdn.worldvectorlogo.com/logos/express-109.svg",color:"#eeeeee"}],database:[{name:"MySQL",logo:"https://cdn.worldvectorlogo.com/logos/mysql.svg",color:"#fff"},{name:"PostgreSQL",logo:"https://cdn.worldvectorlogo.com/logos/postgresql.svg",color:"#336791"},{name:"MSSQL",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"}],server:[{name:"Ubuntu server",logo:"https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg"},{name:"Windows server",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",color:"#222222"}],vcs:[{name:"Git",logo:"https://cdn.worldvectorlogo.com/logos/git.svg",color:"#f1f1e9"}],all:function(){var e=this;return this.groups().reduce(function(t,r){return t.concat(e[r])},[])},groups:function(){var e=this;return Object.keys(this).filter(function(t){return"function"!==typeof e[t]})}},Q=Y,Z=r(7),K=r.n(Z),V=function(){return a.a.createElement(y,{id:"skills"},a.a.createElement(D,null,a.a.createElement("div",{className:"row"},Q.frontend.map(function(e){return a.a.createElement("div",{className:Object(s.a)("col-12 col-md-6 p-2",K.a.SkillContainer)},a.a.createElement("div",{className:K.a.Skill,style:{backgroundColor:e.color,backgroundImage:"url(".concat(e.logo,")")}}))}))))};var z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{id:"me"}),a.a.createElement(M,null),a.a.createElement(C,null),a.a.createElement(k,null),a.a.createElement("main",null,a.a.createElement(q,null),a.a.createElement(V,null),a.a.createElement(y,{id:"certs"},"There will be certs"),a.a.createElement(y,{id:"edu"},"There will be edu"),a.a.createElement(y,{id:"proj"},"There will be projects")),a.a.createElement(P,null))};localStorage.setItem("path","/apple/build"),p(),c.a.render(a.a.createElement(z,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.510ec60c.chunk.js.map