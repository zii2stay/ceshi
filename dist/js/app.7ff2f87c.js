(function(){"use strict";var e={2533:function(e,t,n){var r=n(6369),i=function(){var e=this,t=e._self._c;return t("div",[t("ul",{staticClass:"nav nav-pills"},[t("li",{attrs:{role:"presentation"}},[t("router-link",{attrs:{"active-class":"active",to:"/home"}},[e._v("Home")])],1),t("li",{attrs:{role:"presentation"}},[t("router-link",{attrs:{"active-class":"active",to:"/profile"}},[e._v("Profile")])],1)]),t("div",[t("router-view")],1)])},o=[],u={name:"App"},a=u,s=n(1001),l=(0,s.Z)(a,i,o,!1,null,null,null),c=l.exports,f=n(2631),v=function(){var e=this,t=e._self._c;return t("div",[t("ul",{staticClass:"nav nav-pills"},[t("li",{attrs:{role:"presentation"}},[t("router-link",{attrs:{"active-class":"active",to:"/home/message"}},[e._v("Message")])],1),t("li",{attrs:{role:"presentation"}},[t("router-link",{attrs:{"active-class":"active",to:"/home/news"}},[e._v("News")])],1)]),t("keep-alive",{attrs:{include:"Message"}},[t("router-view")],1)],1)},p=[],h={name:"Home"},m=h,d=(0,s.Z)(m,v,p,!1,null,null,null),_=d.exports,w=function(){var e=this,t=e._self._c;return t("h2",[e._v("Profile")])},y=[],g={name:"Profile"},b=g,k=(0,s.Z)(b,w,y,!1,null,null,null),x=k.exports,O=function(){var e=this,t=e._self._c;return t("div",[t("ul",e._l(e.news,(function(n){return t("li",{key:n.id},[t("router-link",{attrs:{to:{path:"/home/news/detail",query:{id:n.id,name:n.name}}}},[e._v(e._s(n.id)+"-"+e._s(n.name))]),t("button",{on:{click:function(t){return e.pushShow(n)}}},[e._v("push查看")])],1)})),0),t("hr"),t("router-view")],1)},Z=[],P=(n(7658),{name:"News",data(){return{news:[{id:"001",name:"wzm"},{id:"002",name:"lzy"},{id:"003",name:"hj"}]}},methods:{pushShow(e){this.$router.push({path:"/home/news/detail",query:{id:e.id,name:e.name}})}}}),j=P,q=(0,s.Z)(j,O,Z,!1,null,null,null),C=q.exports,M=function(){var e=this;e._self._c;return e._m(0)},$=[function(){var e=this,t=e._self._c;return t("div",[t("ul",[t("li",[t("a",{attrs:{href:"https://www.baidu.com/"}},[e._v("message001")]),e._v("  "),t("input",{attrs:{type:"text"}})]),t("li",[t("a",{attrs:{href:"/message2"}},[e._v("message002")]),e._v("  "),t("input",{attrs:{type:"text"}})]),t("li",[t("a",{attrs:{href:"/message/3"}},[e._v("message003")]),e._v("  "),t("input",{attrs:{type:"text"}})])])])}],T={name:"Message"},z=T,H=(0,s.Z)(z,M,$,!1,null,null,null),N=H.exports,S=function(){var e=this,t=e._self._c;return t("div",[t("ul",[t("li",[e._v("id："+e._s(e.$route.query.id))]),t("li",[e._v("name；"+e._s(e.$route.query.name))])])])},A=[],D={name:"Detail"},E=D,F=(0,s.Z)(E,S,A,!1,null,null,null),B=F.exports,G=new f.ZP({mode:"history",routes:[{path:"/home",component:_,children:[{path:"news",component:C,children:[{path:"detail",component:B}]},{path:"message",component:N}]},{path:"/profile",component:x}]});r.ZP.config.productionTip=!1,r.ZP.use(f.ZP),new r.ZP({render:e=>e(c),router:G}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<u&&(u=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],s=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var c=s(n)}for(t&&t(r);l<u.length;l++)o=u[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkluyou"]=self["webpackChunkluyou"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2533)}));r=n.O(r)})();
//# sourceMappingURL=app.7ff2f87c.js.map