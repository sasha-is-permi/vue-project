(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-project/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"206d":function(t,e,r){"use strict";r("4413")},4413:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}})],1),r("router-view")],1)},i=[],o=(r("5c0b"),r("2877")),s={},l=Object(o["a"])(s,a,i,!1,null,null,null),u=l.exports,c=r("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"form-header"},[t._v(" Введите ваши данные для авторизации: ")]),r("form",{attrs:{name:"form",action:"#",method:"post",enctype:"multipart/form-data"}},[r("fieldset",[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"form-line"},[r("label",{attrs:{for:"login"}},[t._v("Ваше имя:")]),r("input",{attrs:{id:"login",type:"text",name:"login"}})]),r("div",{staticClass:"form-line"},[r("label",{attrs:{for:"email"}},[t._v("Ваш email:")]),r("input",{attrs:{id:"email",type:"email",name:"email"}})]),r("div",{staticClass:"form-line"},[r("label",{attrs:{for:"password"}},[t._v("Ваш пароль:")]),r("input",{attrs:{id:"password",type:"password",name:"password"}})]),r("div",{staticClass:"form-file"},[r("label",{attrs:{id:"file1-label",for:"file"}},[t._v("Файл:")]),r("input",{attrs:{id:"file1",type:"file",name:"file"}})])])]),r("div",{staticClass:"reset-submit"},[r("input",{attrs:{id:"reset1",type:"reset",value:"Сбросить"}}),r("input",{attrs:{id:"submit1",type:"submit",name:"submit",value:"Отправить"}})])])])}],d={},m=d,v=(r("206d"),Object(o["a"])(m,f,p,!1,null,null,null)),b=v.exports;n["a"].use(c["a"]);var y=[{path:"/",name:"Login",component:b}],h=new c["a"]({routes:y}),w=h,_=r("2f62");n["a"].use(_["a"]);var g=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:w,store:g,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.83b7ecd5.js.map