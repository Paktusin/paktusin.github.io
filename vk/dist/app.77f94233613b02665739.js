!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ru=function(){return"ru"===navigator.language},t.formatDate=function(e){return moment.locale(navigator.language),moment(e).format("DD MMM YYYY в HH:mm")},t.copyToClipboard=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},function(e,t,o){"use strict";var n=o(0);o(2);var r=h(o(3)),a=h(o(5)),s=h(o(6)),l=h(o(7)),i=h(o(8)),c=o(9),u=h(c),m=h(o(10)),d=h(o(11)),g=h(o(12)),p=h(o(13)),f=h(o(14));function h(e){return e&&e.__esModule?e:{default:e}}localStorage.setItem("path","/vk"),angular.module("app",["ui.router",r.default.name,m.default.name,"pascalprecht.translate"]).config(["$stateProvider","$urlRouterProvider","$translateProvider",function(e,t,o){o.translations("en",g.default).translations("ru",p.default).preferredLanguage((0,n.ru)()?"ru":"en").useSanitizeValueStrategy(null),e.state("app",{url:"/",templateUrl:d.default}).state("app.about",{url:"about",templateUrl:a.default,controller:"aboutCtrl"}).state("app.education",{url:"education",templateUrl:s.default,controller:["$scope",function(e){e.certs=c.certs,e.ru=n.ru}]}).state("app.projects",{url:"projects",templateUrl:l.default,controller:["$scope",function(e){e.projects=f.default}]}).state("app.skills",{url:"skills",templateUrl:i.default,controller:["$scope",function(e){e.skills=u.default}]}),t.otherwise("/about")}]).controller("aboutCtrl",["$interval","$scope",function(e,t){t.years=["years","months","weeks","days","hours","minutes","seconds"],t.like="true"===localStorage.getItem("like"),t.toggleLike=function(){t.like=!t.like,localStorage.setItem("like",t.like)},t.postTime=(0,n.formatDate)("2015-09-01 15:30"),t.randomGif="gifs/"+(Math.floor(8*Math.random())+1)+".gif",t.skills=u.default.all(),t.comment=function(){document.getElementById("comment").focus()},t.copyLink=function(){(0,n.copyToClipboard)(location.href),alert((0,n.ru)()?"ссылка скопирована в буфер обмена":"url was copied to clipboard")};var o=function(e){var o=[],n=moment(),r=moment(e);return t.years.forEach(function(e,a){var s=n.diff(r,e);r.subtract(-s,e),o.push(s+" "+t.getLabel(s,a))}),o.join(", ")};t.getLabel=function(e,o){if(!(0,n.ru)())return t.years[o];switch(o){case 0:return 1===e?"год":0<e&&e<5?"года":"лет";case 1:return 1===e?"месяц":0<e&&e<5?"месяца":"месяцев";case 2:return 1===e?"неделя":0<e&&e<5?"недели":"недель";case 3:return 1===e?"день":0<e&&e<5?"деня":"дней";case 4:return 1===e?"час":0<e&&e<5?"часа":"часов";case 5:return 1===e?"минута":0<e&&e<5?"минуты":"минут";case 6:return 1===e?"секунда":0<e&&e<5?"секунды":"секунд"}},t.dev_time="Calculating...",t.it_time="Calculating...",e(function(){t.dev_time=o("2015-09-01"),t.it_time=o("2012-01-01")},1e3)}]),angular.bootstrap(document,["app"])},function(e,t,o){},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(4));var r=angular.module("mainNav",[]).component("mainNav",{controller:function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},templateUrl:n.default,bindings:{side:"<"}});t.default=r},function(e,t){e.exports="dist/068ea903832a95530eea113a72ba140f.html"},function(e,t){e.exports="dist/230b9dd3b7fbb97fb102312d74e10705.html"},function(e,t){e.exports="dist/6f6d925732d685be8f1345e4127aef7b.html"},function(e,t){e.exports="dist/35b3202535e692e5131316ba6634eafa.html"},function(e,t){e.exports="dist/92eb98270676293cdbf67e11438f7e04.html"},function(e,t,o){"use strict";o.r(t),o.d(t,"certs",function(){return n});const n=[{name:"JavaScript",title:"geekbrains",url:"https://geekbrains.ru/certificates/459861.en",img:"https://i.imgur.com/xLyri03.png"},{name:"JavaScript",title:"tests4geeks",url:"https://tests4geeks.com/certificate?cr=pg8h1p8",img:"https://imgur.com/sikfg7g.jpg"},{name:"React",title:"skillvalue",url:"https://skillvalue.com/en/certificate/pMO560o3r3IWl1f2gVbhRt9VZH5zGZfIXwfbNalgSjR82a2qP158v5Z3UuId",img:"https://imgur.com/SLI5oat.jpg"},{name:"JavaScript",title:"skillvalue",url:"https://skillvalue.com/en/certificate/9WJud1Fgvu2sA2EDEWUwCVNzvarD6Yqtadm2JvqhmWilgpH8VJUNMhbkSxgU",img:"https://imgur.com/Ff8qoJM.jpg"},{name:"Angular",title:"skillvalue",url:"https://skillvalue.com/en/certificate/3cnKsBctcyw9nWdeqLMc65OwNTMwIXDKo4w7A1CaCnS387ZJnoAIiWUcwcqh",img:"https://imgur.com/DtHkBKT.jpg"},{name:"Bootstrap",title:"skillvalue",url:"https://skillvalue.com/en/certificate/JGSGjnx6Co3gSrfax9DZBMuvCuf2t7IpLtj8UHnYj8ON9lq4u3Im5ShjYk3h",img:"https://imgur.com/TOtpaRx.jpg"}],r={frontend:[{name:"React",logo:"https://cdn.worldvectorlogo.com/logos/react-1.svg",cert:n[3],color:"#222222",text:"Thinking in react",more:"https://reactjs.org/"},{name:"JavaScript",logo:"https://cdn.worldvectorlogo.com/logos/javascript.svg",cert:n[3],color:"#f7df1e",textColor:"black",text:"You must enable javascript in your browser to view this label",more:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"TypeScript",logo:"https://cdn.worldvectorlogo.com/logos/typescript.svg",color:"#007acc",text:"JavaScript that scales",more:"https://www.typescriptlang.org/"},{name:"Webpack",logo:"https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",color:"#2b3a42",text:"Bundle your whatever",more:"https://webpack.js.org/"},{name:"Angular",text:"Superheroic JavaScript MVW Framework",more:"https://angular.io/",logo:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",cert:n[4],color:"#2a7bd0"},{name:"JQuery",logo:"https://cdn.worldvectorlogo.com/logos/jquery-1.svg",color:"#78cff5",textColor:"black",more:"https://jquery.com/",text:"Write less, do more"},{name:"Bootstrap",logo:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",text:"Dev fast, same look",cert:n[5],color:"#563d7c",more:"https://getbootstrap.com/"},{name:"Material-UI",logo:"https://cdn.worldvectorlogo.com/logos/material-ui.svg",color:"#1976d2",text:"React components for faster and easier web development. Build your own design system, or start with Material Design.",more:"https://material-ui.com/"}],backend:[{name:"Node JS",logo:"https://nodejs.org/static/images/logo.svg",color:"#333333"},{name:"Express JS",logo:"https://cdn.worldvectorlogo.com/logos/express-109.svg",color:"#eeeeee"}],database:[{name:"MySQL",logo:"https://cdn.worldvectorlogo.com/logos/mysql.svg",color:"#fff"},{name:"PostgreSQL",logo:"https://cdn.worldvectorlogo.com/logos/postgresql.svg",color:"#336791"},{name:"MSSQL",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"}],server:[{name:"Ubuntu server",logo:"https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg"},{name:"Windows server",logo:"https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",color:"#222222"}],vcs:[{name:"Git",logo:"https://cdn.worldvectorlogo.com/logos/git.svg",color:"#f1f1e9"}],all:function(){return this.groups().reduce((e,t)=>e.concat(this[t]),[])},groups:function(){return Object.keys(this).filter(e=>"function"!=typeof this[e])}};t.default=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0);var r=angular.module("commentsCmp",[]).component("commentsCmp",{template:'<div class="comments pr-4" ng-if="comments.length >0" ng-class="coef>0 || comments.length==1?\'mb-3\':\'\'">\n    <div class="media" ng-repeat="comment in getComments()" >\n    <img src="https://vk.com/images/deactivated_100.png?ava=1"\nclass="img-fluid rounded-circle mr-3" width="34" height="34"/>\n    <div class="media-body">\n    <div class="font-weight-bold text-primary">{{\'You\'|translate}}</div>\n<div>{{comment.text}}</div>\n<span class="text-black-50">{{date(comment)}}</span>\n<hr ng-if="coef > 0" />\n</div>\n</div>\n</div>\n<button ng-click="more()" ng-if="getComments().length < comments.length" class="btn btn-link font-weight-bold">{{\'Show more comments\'|translate}}</button>\n<div class="form-inline">\n    <div class="form-group flex-grow-1 m-0">\n    <input id="comment" ng-keypress="keyPress($event)" class="form-control w-100" placeholder="{{\'Write comment\'|translate}}..." ng-model="comment"/>\n    </div>\n    <button class="btn btn-link send-btn" ng-disabled="comment.length==0" ng-click="sendComment()">\n    <i class="fa fa-lg fa-paper-plane"></i>\n</button>\n    </div>',controller:["$scope",function(e){e.username=!!localStorage.getItem("username"),e.coef=0,e.date=function(e){return(0,n.formatDate)(e.date)},e.keyPress=function(t){13===t.keyCode&&e.sendComment()},e.comment="",e.comments=localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):[],e.more=function(){e.coef++},e.getComments=function(){return e.comments.slice(0,10*e.coef+1)},e.sendComment=function(){e.comment.length>0&&(e.comments=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(e.comments.map(function(e){return delete e.$$hashKey,e}).sort(function(e,t){return moment(e.date)===moment(t.date)?0:moment(e.date)>moment(t.date)?-1:1})),[{text:e.comment,date:moment().toDate()}]),localStorage.setItem("comments",JSON.stringify(e.comments))),e.comment=""}}]});t.default=r},function(e,t){e.exports="dist/677c73634f59fce23bc5f457a4301ba1.html"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"lets coding!":"let's coding!",google_access:"To continue, Google will share your name, email address, password with paktusin.github.io"}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"Web developer":"Веб разработчик","Mikhail Davlichin":"Михаил Давличин","lets coding!":"Раз два и впродакшн",City:"Город",Specialization:"Специальность",Education:"Образование",Moscow:"Москва","Bachelor's degree":"Специалист","Information Systems and Technologies":"Информационные системы и технологии","Development experience":"Опыт разрабоки","All IT experience":"Опыт в ИТ",You:"Вы","Sign in":"Вход","Sign in with Google":"Войдите в аккаунт Google","to continue to":"переход в приложение","Email or phone":"Телефон или адрес эл. почты","Forgot email":"Забыли адрес эл. почты",google_access:'Продолжая, вы разрешаете Google предоставить приложению "paktusin.github.io" доступ к вашему имени, адресу электронной почты и фото профиля',Next:"Далее",Help:"Справка",Privacy:"Конфиденциальность",Terms:"Условия","Developer info":"Информация о разработчике",Email:"Эл. почта","Signing in will redirect you to:":"Если вы выполните вход, то вернетесь в","Got it":"Продолжить","About me":"Обо мне",Projects:"Проекты",Skills:"Навыки",SignIn:"Вход",Certificates:"Сертификаты",skills:"навыков","Demo projects for training":"Демо проекты для тренировки","External projects":"Проекты на заказ","Show more comments":"Показать следующие комментарии","Write comment":"Написать комментарий",SignOut:"Выход",Welcome:"Добро пожаловать!","Enter your password":"Введите пароль","Forgot password":"Забыли пароль"}},function(e,t,o){"use strict";o.r(t);t.default=[{url:"https://zapiskihomyaka.ru/",title:"Hamster notes",descr:"Cross Stitch fun site",logo:"https://zapiskihomyaka.ru/build/images/logo.png"},{url:"https://svod-int.ru/",logo:"https://i.imgur.com/YnTWz3o.png",title:"Svod International internal web apps",descr:"The first was developed for the document turnover of equipment at the enterprise. Generation in .docx\n reports and goods receipt documents, write-offs, diagnostic cards, maintenance schedule. The program\n worked with a large base of the nomenclature. The second application is the accounting of working hours. Calculation of wages, holidays.\n Generating the time sheet."},{url:"https://sochisirius.ru/raspisaniie",logo:"https://i.imgur.com/HjZPPOn.png",title:'Center for gifted education "SIRIUS" internal web apps',descr:"Scheduler Application. Application for create meetings and booking rooms. Planning trips for\n children. Generate reports for bus drivers that show where groups of children go. Synchronize users\n and booking with Exchange Server. Notifies teachers and users about classes."},{url:"https://presidentgrants.ru",title:"President grants",descr:"Web Site for registration of children for grants of the president"},{url:"https://www.kaspersky.ru/small-to-medium-business-security/pro/unified-monitoring-and-analysis-platform",logo:"https://www.kaspersky.ru/content/ru-ru/images/smb/icons/unified-management-and-analysis-platform_black_icon.png",title:"Kaspersky Unified Monitoring and Analysis Platform",descr:"Security information and event management. Frontend for web console"}]}]);