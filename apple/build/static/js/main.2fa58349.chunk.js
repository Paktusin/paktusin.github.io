(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={AppBar:"AppBar_AppBar__294ii",content:"AppBar_content__6LONs",links:"AppBar_links__2IBUp",show:"AppBar_show__ZCrDi",stick:"AppBar_stick__3id86"}},function(e,t,a){e.exports={Skills:"Skills_Skills__DkE7R",SkillContainer:"Skills_SkillContainer__3peON",Skill:"Skills_Skill__snVzA",image:"Skills_image__2KX2d"}},,,,function(e,t,a){e.exports={Edu:"Edu_Edu__Xcz-v",content:"Edu_content__3EtmA",bg:"Edu_bg__1DF08"}},function(e,t,a){e.exports={project:"Projects_project__2f4zj",text:"Projects_text__24mlc",image:"Projects_image__2ZF7d"}},,function(e,t,a){e.exports={NavBar:"NavBar_NavBar__8llpK",container:"NavBar_container__-5_nY"}},,function(e,t,a){},,function(e,t,a){e.exports={ThemeButton:"ThemeButton_ThemeButton__3h66K"}},function(e,t,a){e.exports={Link:"Link_Link__1PMcF"}},function(e,t,a){e.exports={Hero:"Hero_Hero__3KRpC"}},function(e,t,a){e.exports={section:"Section_section__Irp5S"}},,,function(e,t,a){e.exports={Me:"Me_Me__3PbMO"}},function(e,t,a){e.exports={Footer:"Footer_Footer__2l84v"}},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/sunset.883dd5c7.jpg"},,function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(12),a(4)),s=a(1),i=a(2),m=a.n(i),u="theme";function d(e){e&&localStorage.setItem(u,e),document.body.setAttribute("class",p())}function p(){return localStorage.getItem(u)||"light"}var g=a(14),f=a.n(g);function h(){var e=r.a.useState(p()),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.createElement("button",{title:"Switch theme",onClick:function(){var e="dark"===a?"light":"dark";d(e),n(e)},className:Object(s.a)(f.a.ThemeButton,"d-none d-md-flex")},a)}var v=a(15),E=a.n(v);function k(e){var t=e.href,a=e.children,n=function(){return window.location.hash===t},o=r.a.useRef(null);function l(){var e=n();o.current.classList.toggle("active",e)}return r.a.useEffect(function(){return l(),window.addEventListener("popstate",l),function(){return window.removeEventListener("popstate",l)}},[]),r.a.createElement("a",{onClick:l,className:E.a.Link,ref:o,href:t},a)}var w=function(){function e(){o(window.scrollY>l.current.offsetHeight/2)}r.a.useEffect(function(){return e(),document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}},[]);var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useRef(null);return r.a.createElement("div",{"data-height":!0,ref:l,className:Object(s.a)(m.a.AppBar,n&&m.a.stick)},r.a.createElement("div",{className:Object(s.a)("container",m.a.content)},r.a.createElement("h3",{className:"d-none d-md-flex"},"Web Developer"),r.a.createElement("div",{className:Object(s.a)(m.a.links,n&&m.a.show)},r.a.createElement(k,{href:"#me"},"About Me"),r.a.createElement(k,{href:"#skills"},"Skills"),r.a.createElement(k,{href:"#certs"},"Certificates"),r.a.createElement(k,{href:"#edu"},"Education"),r.a.createElement(k,{href:"#proj"},"Projects"),r.a.createElement(k,{href:"/vk"},"VK theme")),r.a.createElement(h,null)))},b=a(5),_=a(16),S=a.n(_),j=a(17),y=a.n(j);function x(e){var t=e.children,a=e.className,n=Object(b.a)(e,["children","className"]);return r.a.createElement("section",Object.assign({className:Object(s.a)(y.a.section,a)},n),t)}function N(e){var t=e.children,a=e.className,n=Object(b.a)(e,["children","className"]);return r.a.createElement(x,Object.assign({className:Object(s.a)(S.a.Hero,a)},n),t)}var O=a(9),B=a.n(O),I=a(18),L=a(19);a(31);function A(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(L.a)(B.a.mark(function e(){var t,n,r,o;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=window.scrollY+window.innerHeight,n=Object(I.a)(document.body.querySelectorAll("[data-scroll]")),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=12;break}if(o=r.value,!(window.scrollY<o.offsetTop+o.offsetHeight&&o.offsetTop<t)||o.style.opacity){e.next=10;break}return e.next=9,new Promise(function(e){return setTimeout(e,100)});case 9:a(o);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])}))).apply(this,arguments)}function a(e){e.style.setProperty("opacity",1),e.style.setProperty("transform","translateY(0px)")}return r.a.useEffect(function(){return e(),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),null}var M=a(10),C=a.n(M);function T(){return r.a.createElement("nav",{className:C.a.NavBar},r.a.createElement("div",{className:Object(s.a)("container",C.a.container)},r.a.createElement(k,{href:"#me"},"About Me"),r.a.createElement(k,{href:"#skills"},"Skills"),r.a.createElement(k,{href:"#certs"},"Certificates"),r.a.createElement(k,{href:"#edu"},"Education"),r.a.createElement(k,{href:"#proj"},"Projects"),r.a.createElement(k,{href:"/vk"},"VK theme")))}var P=a(20),J=a.n(P);function q(){return r.a.createElement(N,{className:J.a.Me},r.a.createElement("h1",{"data-scroll":!0},"Frontend Developer"),r.a.createElement("h2",{"data-scroll":!0,className:"headline"},"Stylize page",r.a.createElement("br",null),"Bring HTML to life",r.a.createElement("br",null)),r.a.createElement("h1",{"data-scroll":!0},"enjoy web surfing."),r.a.createElement("p",{"data-scroll":!0},"Since 2012 ",r.a.createElement("a",{href:"#disclaimer"},"*")))}var F=a(21),H=a.n(F),W=a(22),U=a.n(W);function D(e){var t=e.children;return r.a.createElement("div",{className:Object(s.a)("container",U.a.Container)},t)}var z=function(){return r.a.createElement("footer",{className:H.a.Footer},r.a.createElement(D,null,r.a.createElement("p",{id:"disclaimer"},"* IT experience since 01.01.2012, Web development experience since 09.01.2015")))},R=[{name:"JavaScript",title:"geekbrains",url:"https://geekbrains.ru/certificates/459861.en",img:"https://i.imgur.com/xLyri03.png"},{name:"JavaScript",title:"tests4geeks",url:"https://tests4geeks.com/certificate?cr=pg8h1p8",img:"https://imgur.com/sikfg7g.jpg"},{name:"React",title:"skillvalue",url:"https://skillvalue.com/en/certificate/pMO560o3r3IWl1f2gVbhRt9VZH5zGZfIXwfbNalgSjR82a2qP158v5Z3UuId",img:"https://imgur.com/SLI5oat.jpg"},{name:"JavaScript",title:"skillvalue",url:"https://skillvalue.com/en/certificate/9WJud1Fgvu2sA2EDEWUwCVNzvarD6Yqtadm2JvqhmWilgpH8VJUNMhbkSxgU",img:"https://imgur.com/Ff8qoJM.jpg"},{name:"Angular",title:"skillvalue",url:"https://skillvalue.com/en/certificate/3cnKsBctcyw9nWdeqLMc65OwNTMwIXDKo4w7A1CaCnS387ZJnoAIiWUcwcqh",img:"https://imgur.com/DtHkBKT.jpg"},{name:"Bootstrap",title:"skillvalue",url:"https://skillvalue.com/en/certificate/JGSGjnx6Co3gSrfax9DZBMuvCuf2t7IpLtj8UHnYj8ON9lq4u3Im5ShjYk3h",img:"https://imgur.com/TOtpaRx.jpg"}],K={frontend:[{name:"React",logo:"https://cdn.worldvectorlogo.com/logos/react-1.svg",cert:R[3],color:"#222222",text:"Thinking in react",more:"https://reactjs.org/"},{name:"JavaScript",logo:"https://cdn.worldvectorlogo.com/logos/javascript.svg",cert:R[3],color:"#f7df1e",textColor:"black",text:"You must enable javascript in your browser to view this label",more:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"TypeScript",logo:"https://cdn.worldvectorlogo.com/logos/typescript.svg",color:"#007acc",text:"JavaScript that scales",more:"https://www.typescriptlang.org/"},{name:"Webpack",logo:"https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",color:"#2b3a42",text:"Bundle your whatever",more:"https://webpack.js.org/"},{name:"Angular",text:"Superheroic JavaScript MVW Framework",more:"https://angular.io/",logo:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",cert:R[4],color:"#2a7bd0"},{name:"JQuery",logo:"https://cdn.worldvectorlogo.com/logos/jquery-1.svg",color:"#78cff5",textColor:"black",more:"https://jquery.com/",text:"Write less, do more"},{name:"Bootstrap",logo:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",text:"Dev fast, same look",cert:R[5],color:"#563d7c",more:"https://getbootstrap.com/"},{name:"Material-UI",logo:"https://cdn.worldvectorlogo.com/logos/material-ui.svg",color:"#1976d2",text:"React components for faster and easier web development. Build your own design system, or start with Material Design.",more:"https://material-ui.com/"}],backend:[{name:"Node JS",logo:"https://nodejs.org/static/images/logo.svg",color:"#333333"},{name:"Express JS",logo:"https://cdn.worldvectorlogo.com/logos/express-109.svg",color:"#eeeeee"}],database:[{name:"MySQL",logo:"https://cdn.worldvectorlogo.com/logos/mysql.svg",color:"#fff"},{name:"PostgreSQL",logo:"https://cdn.worldvectorlogo.com/logos/postgresql.svg",color:"#336791"},{name:"MSSQL",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"}],server:[{name:"Ubuntu server",logo:"https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg"},{name:"Windows server",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",color:"#222222"}],vcs:[{name:"Git",logo:"https://cdn.worldvectorlogo.com/logos/git.svg",color:"#f1f1e9"}],all:function(){var e=this;return this.groups().reduce(function(t,a){return t.concat(e[a])},[])},groups:function(){var e=this;return Object.keys(this).filter(function(t){return"function"!==typeof e[t]})}},Y=K,V=a(3),Z=a.n(V),G=function(){return r.a.createElement(N,{id:"skills",className:Z.a.Skills},r.a.createElement("h2",{className:"headline"},"Skills"),r.a.createElement(D,null,r.a.createElement("div",{className:"row"},Y.frontend.map(function(e,t){return r.a.createElement("div",{key:t,"data-scroll":!0,className:Object(s.a)("col-12 col-md-6 p-3",Z.a.SkillContainer)},r.a.createElement("div",{className:Z.a.Skill},r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.text),e.more&&r.a.createElement("a",{target:"_blank",href:e.more},"Learn more")),r.a.createElement("div",{className:V.image},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.logo,")")}}))))}))))},Q=a(7),X=a.n(Q),$=a(23),ee=a.n($),te=function(){return r.a.createElement(N,{id:"edu"},r.a.createElement("div",{className:X.a.Edu,"data-scroll":!0},r.a.createElement("div",{className:X.a.bg,style:{backgroundImage:"url(".concat(ee.a,")")}}),r.a.createElement("div",{className:X.a.content},r.a.createElement("h3",null,r.a.createElement("b",null,"Edu"),"cation"),r.a.createElement("h2",null,"Birobidjan State Pedagogical Institute"),r.a.createElement("p",null,"Faculty of Mathematics and Informatics, specialty Information Systems and Technologies , engineer's degree"),r.a.createElement("a",{href:"https://goo.gl/maps/5kQcUt6qFL82",rel:"noopener",target:"_blank"},"Learn more"))))},ae=a(24),ne=[{url:"https://zapiskihomyaka.ru/",title:"Hamster notes",descr:"Cross Stitch fun site",logo:"https://zapiskihomyaka.ru/build/images/logo.png"},{url:"https://svod-int.ru/",logo:"https://i.imgur.com/YnTWz3o.png",title:"Svod International internal web apps",descr:"The first was developed for the document turnover of equipment at the enterprise. Generation in .docx\n reports and goods receipt documents, write-offs, diagnostic cards, maintenance schedule. The program\n worked with a large base of the nomenclature. The second application is the accounting of working hours. Calculation of wages, holidays.\n Generating the time sheet."},{url:"https://sochisirius.ru/raspisaniie",logo:"https://i.imgur.com/HjZPPOn.png",title:'Center for gifted education "SIRIUS" internal web apps',descr:"Scheduler Application. Application for create meetings and booking rooms. Planning trips for\n children. Generate reports for bus drivers that show where groups of children go. Synchronize users\n and booking with Exchange Server. Notifies teachers and users about classes."},{url:"https://presidentgrants.ru",title:"President grants",descr:"Web Site for registration of children for grants of the president"},{url:"https://www.kaspersky.ru/small-to-medium-business-security/pro/unified-monitoring-and-analysis-platform",logo:"https://www.kaspersky.ru/content/ru-ru/images/smb/icons/unified-management-and-analysis-platform_black_icon.png",title:"Kaspersky Unified Monitoring and Analysis Platform",descr:"Security information and event management. Frontend for web console"}],re=a(8),oe=a.n(re),le=function(){var e=r.a.useCallback(function(e,t){var a=[e.logo&&r.a.createElement("div",{className:"col-md-6 col-12 d-none d-md-flex",style:{minHeight:"100%"}},r.a.createElement("div",{className:oe.a.image,style:{backgroundImage:"url(".concat(e.logo,")")}})),r.a.createElement("div",{className:Object(s.a)(Object(ae.a)({},"col-md-6",e.logo),"col-12",oe.a.text)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.descr),e.url&&r.a.createElement("a",{target:"_blank",href:e.url},"Learn more"))];return t%2?a:[a[1],a[0]]},[]);return r.a.createElement(N,{id:"proj"},r.a.createElement("h2",{className:"headline"},"Projects"),r.a.createElement(D,null,ne.map(function(t,a){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{key:a,"data-scroll":!0,className:Object(s.a)("col-12 col-12 p-3")},r.a.createElement("div",{className:Object(s.a)(oe.a.project,"row")},e(t,a))))})))};var ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:"me"}),r.a.createElement(A,null),r.a.createElement(T,null),r.a.createElement(w,null),r.a.createElement("main",null,r.a.createElement(q,null),r.a.createElement(G,null),r.a.createElement(N,{id:"certs"},"There will be certs"),r.a.createElement(te,null),r.a.createElement(le,null)),r.a.createElement(z,null))};localStorage.setItem("path","/apple/build"),d(),l.a.render(r.a.createElement(ce,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.2fa58349.chunk.js.map