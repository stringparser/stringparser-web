module.exports=__NEXT_REGISTER_PAGE("/cv",function(){return{page:webpackJsonp([4],{141:function(e,n){(n=e.exports={pdf:"https://github.com/stringparser/cv/raw/master/dist/cv.pdf",login:"stringparser",phone:"+49 176 3013 9466",email:"stringparser@gmail.com",location:"Berlin, Germany"}).languages=[{name:"C++",level:"intermediate"},{name:"Scala",level:"intermediate"},{name:"German",level:"intermediate"},{name:"English",level:"advanced"},{name:"Spanish",level:"native"},{name:"JavaScript",level:"advanced"},{name:"TypeScript",level:"advanced"},{name:"CoffeeScript",level:"advanced"}],n.technologies=["git, zsh","css, html","next.js, jest","sass, less, stylus","MongoDB, Redis, Postgres","bootstrap, playframework","Mac OS X, Ubuntu, Windows","npm, yarn, nodejs, express, koa","gulp, rollupjs, webpack, browserify","React.js, React Native, Apollo, GraphQL"],n.experience=[{title:"Freelance Software Engineer",duration:"Jul 2018 - present",location:"Berlin, Germany",description:""},{link:"https://www.home.ht",title:"Growth Engineer",company:"Home HT GmbH",duration:"Feb 2018 - Jun 2018",location:"Berlin, Germany",description:""},{link:"https://www.zalando.com",title:"Software Engineer",company:"Zalando SE",duration:"Jan 2017 - Feb 2018",location:"Berlin, Germany",description:""},{link:"https://www.fitanalytics.com",title:"Frontend Developer",company:"Fit Analytics GmbH",duration:"Aug 2015 - Dec 2016",location:"Berlin, Germany",description:""},{link:"https://www.ngahr.com",title:"Junior Programmer",company:"NGA HR",duration:"Sep 2013 - Feb 2015",location:"Granada, Spain",description:""}],n.education=[{title:"Licenciado en Física (M.Sc., Physics)",location:"UGR (Granada, Spain)",duration:"09.2005-12.2012",description:"\n      - General Relativity\n      - Quantum Field Theory\n      - Computational Statistics with R\n      - Mid-Latitude Atmospheric Dynamics\n      - Computational Statistical Mechanics\n\n      (Only a subset of Lectures listed)\n    "},{title:"Eramus Program, Biophysics",location:"LMU (Munich, Germany)",duration:"09.2009-09.2010",description:"\n      - Biophysics of Systems\n      - Fortgeschrittendenn Praktikum Biophysik\n    "},{title:"Musical studies, Piano",location:"CPM (Jaén, Spain)",duration:"1996-2004",description:"\n      Generic and specific lectures on music theory,       analysis and composition for piano.\n    "}]},281:function(e,n,t){e.exports=t(282)},282:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t.n(a),l=t(2),r=t(141),c=t.n(r),o=t(28),m=t(18),s=t(45),u=t(89),p=t(30),d=t(58),E=t(29),g=t(91),f=function(e){var n=e.children;return i.a.createElement("a",{href:c.a.pdf},i.a.createElement(g.a,null,n||"Download PDF version"))},y=t(16),h=t(7),v=["\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n    max-width: ".concat(y.a.tablet,";\n    background-color: snow;\n\n    ").concat(Object(h.e)("tablet","\n      flex-direction: row;\n      justify-content: space-between;\n\n      & > *:first-child {\n        flex: 1;\n      }\n\n      & > *:not(:first-child) {\n        flex: 2;\n      }\n\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n    "),"\n\n    h2 {\n      margin-bottom: 2rem;\n    }\n\n    h3 {\n      margin: 0;\n    }\n\n    p {\n      margin-top: 0;\n    }\n  ")],b=Object(l.a)("ul").withConfig({displayName:"cv__UL",componentId:"s15fqcch-0"})(["",""],function(e){return e.isUnstyled&&"\n    padding: unset;\n    list-style-type: none;\n  "});n.default=function(){return i.a.createElement(s.a,null,i.a.createElement(p.a,{variation:"primary",background:"/static/img/laptop-pen-notebook.jpg",nextSectionLink:"#cv"},i.a.createElement(d.a,{color:"rgba(0,0,0,0.6)"}),i.a.createElement(m.a,{mixins:[Object(h.a)("t-center")]},i.a.createElement(E.a,null,"Resume"),i.a.createElement(o.a,null,"Find out what I've been up to."),i.a.createElement(f,null))),i.a.createElement(p.a,{id:"cv",mixins:v},i.a.createElement(m.a,null,i.a.createElement(E.c,null,"Languages")),i.a.createElement(m.a,null,i.a.createElement(b,null,r.languages.map(function(e,n){return i.a.createElement("li",{key:n},e.name,": ",e.level)})))),i.a.createElement(p.a,{mixins:v},i.a.createElement(m.a,null,i.a.createElement(E.c,null,"Technologies")),i.a.createElement(m.a,null,i.a.createElement(b,null,r.technologies.map(function(e,n){return i.a.createElement("li",{key:n},e)})))),i.a.createElement(p.a,{mixins:v},i.a.createElement(m.a,null,i.a.createElement(E.c,null,"Experience")),i.a.createElement(m.a,null,i.a.createElement(b,{isUnstyled:!0},r.experience.map(function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(o.a,null,e.duration," (",e.location,")"),i.a.createElement(E.d,null,e.title),e.link&&i.a.createElement(o.a,null,e.link&&"For ",e.link&&i.a.createElement("a",{href:e.link},e.company)),(e.description||"").trim().split("\n").map(function(e,n){return i.a.createElement(o.a,{key:n},e)}),i.a.createElement("br",null))})))),i.a.createElement(p.a,{mixins:v},i.a.createElement(m.a,null,i.a.createElement(E.c,null,"Education")),i.a.createElement(m.a,null,i.a.createElement(b,{isUnstyled:!0},r.education.map(function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(o.a,null,e.duration," at ",e.location),i.a.createElement(E.d,null,e.title),i.a.createElement("br",null),(e.description||"").trim().split("\n").map(function(e,n){return i.a.createElement(o.a,{key:n},e)}),i.a.createElement("br",null))}),i.a.createElement("li",null,i.a.createElement(u.b,null),i.a.createElement(o.a,null,"UGR: University of Granada ",i.a.createElement("br",null),"LMU: Ludwig-Maximilians-Universität ",i.a.createElement("br",null),"CPM: Conservatorio Profesional de Música"))))))}},89:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l});var a=t(2),i=Object(a.a)("br").withConfig({displayName:"Spacing__BR",componentId:"s12gc0vw-0"})(["height:",";content:'';display:block;"],function(e){var n=e.height;return"".concat(n||.25,"rem")}),l=a.a.hr.withConfig({displayName:"Spacing__HR",componentId:"s12gc0vw-1"})([""])}},[281]).default}});