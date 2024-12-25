!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,a=Object.create(o.prototype),l=new T(n||[]);return c(a,"_invoke",{value:O(e,r,l)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",g="completed",m={};function w(){}function x(){}function b(){}var _={};f(_,i,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(G([])));L&&L!==o&&a.call(L,i)&&(_=L);var j=b.prototype=w.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(t,r){function n(o,c,l,i){var u=p(t[o],t,c);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,l,i)}),(function(e){n("throw",e,l,i)})):r.resolve(f).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,i)}))}i(u.arg)}var o;c(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function O(e,t,n){var o=v;return function(a,c){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw c;return{value:r,done:!0}}for(n.method=a,n.arg=c;;){var l=n.delegate;if(l){var i=S(l,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,t,n);if("normal"===u.type){if(o=n.done?g:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function S(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var c=a.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function G(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return c.next=c}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=b,c(j,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},E(C.prototype),f(C.prototype,u,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var c=new C(h(e,t,r,o),a);return n.isGeneratorFunction(t)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(j),f(j,s,"Generator"),f(j,i,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],l=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),u=a.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:G(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(e,t,r,n,o,a,c){try{var l=e[a](c),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var c=e.apply(t,n);function l(e){r(c,o,a,l,i,"next",e)}function i(e){r(c,o,a,l,i,"throw",e)}l(void 0)}))}}System.register(["./DynamicGridContainer.vue_vue_type_script_setup_true_lang-legacy-rPGPcewB.js","./DetailHelmet.vue_vue_type_script_setup_true_lang-legacy-CTY_9gqr.js","./Loading.vue_vue_type_script_setup_true_lang-legacy-DpZr1zxy.js","./app-legacy-_fQy-VLP.js","./axios-legacy-hrAKz8CD.js"],(function(e,r){"use strict";var o,a,c,l,i,u,s,f,h,p,v,d,y,g,m,w,x,b,_,k,L,j,E,C,O,S;return{setters:[function(e){o=e._},function(e){a=e._},function(e){c=e._},function(e){l=e.d,i=e.c,u=e.e,s=e.r,f=e.f,h=e.n,p=e.h,v=e.b,d=e.X,y=e.i,g=e.o,m=e.j,w=e.t,x=e.F,b=e.k,_=e.a,k=e.w,L=e.v,j=e.g,E=e.l,C=e.u,O=e.m},function(e){S=e.a}],execute:function(){var r={key:0,class:"fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40"},F=["src"],P=l({__name:"Modal",props:{isOpen:{type:Boolean,required:!0},closeModal:{type:Function,required:!0},width:{type:String,default:"auto"}},setup:function(e){return function(t,n){return e.isOpen?(v(),i("div",r,[u("div",{class:"bg-white p-6 rounded-md w-96 max-h-[90vh] relative sm:min-w-[90vw] sm:pt-8 z-50",style:h({width:e.width})},[s(t.$slots,"default"),u("button",{class:"absolute top-5 right-5 sm:top-3 sm:right-3",onClick:n[0]||(n[0]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)})},[u("img",{alt:"Modal Close",src:f(d)},null,8,F)])],4)])):p("",!0)}}}),T={class:"flex items-center justify-center"},G=["src"],$=["src"],M=["src"],N=l({__name:"AudioPlayerButton",props:{src:String},setup:function(e){var t=e,r=y(!1),n=y(null),o=function(){var e=n.value;e&&(r.value?(e.pause(),e.currentTime=0):(e.currentTime=0,e.play()),r.value=!r.value)},a=function(){r.value=!1};return g((function(){var e=n.value;e&&e.addEventListener("ended",a)})),m((function(){var e=n.value;e&&e.removeEventListener("ended",a)})),function(e,a){return v(),i("div",T,[u("button",{class:"p-0 bg-none border-none outline-none cursor-pointer transition-transform transform hover:scale-110 w-full h-full",onClick:o},[r.value?(v(),i("img",{key:1,src:f("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-stop-circle'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%3e%3c/circle%3e%3crect%20x='9'%20y='9'%20width='6'%20height='6'%3e%3c/rect%3e%3c/svg%3e"),alt:"Stop Icon",class:"w-full h-full"},null,8,$)):(v(),i("img",{key:0,src:f("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-play-circle'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%3e%3c/circle%3e%3cpolygon%20points='10%208%2016%2012%2010%2016%2010%208'%3e%3c/polygon%3e%3c/svg%3e"),alt:"Play Icon",class:"w-full h-full"},null,8,G))]),u("audio",{ref_key:"audioRef",ref:n,src:t.src},null,8,M)])}}}),q={class:"w-[340px] aspect-[34/62] flex flex-col flex-[10]"},B=["src","alt"],D={class:"w-full flex-[1] flex flex-col justify-center items-center mt-2"},I={class:"font-jua text-3xl"},R={class:"flex"},V={class:"px-1"},A={class:"w-full flex-[2] p-4 flex flex-col"},z={class:"flex-1 flex"},Y={class:"h-full flex-[0.4] flex items-center justify-center"},H={class:"font-jua text-xl"},U={class:"h-full flex-[0.6] flex items-center justify-between pr-4"},X={class:"flex-1 flex"},J={class:"h-full flex-[0.4] flex items-center justify-center"},K={class:"font-jua text-xl"},Q={class:"h-full flex-[0.6] flex items-center justify-between pr-4 relative"},W=["value"],Z={class:"absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none"},ee=["src"],te={key:1,class:"w-full flex-[1] rounded-3xl font-jua text-xl bg-[#E4E4E4]"},re=l({__name:"CharacterCard",props:{character:{type:Object,required:!0},currentLanguage:{type:String,required:!0},openModal:{type:Function,required:!0}},setup:function(e){var t=e,r=y("");return g((function(){r.value=t.character.style[0],console.log("currentLanguage: ".concat(t.currentLanguage," / character: ").concat(t.character," "))})),function(t,n){return v(),i("div",q,[u("div",{class:"aspect-square w-full flex-[5]",style:h({backgroundColor:e.character.color})},[u("img",{src:"/characters/".concat(e.character.name.en.toLowerCase(),"/profile.png"),alt:e.character.name.en},null,8,B)],4),u("div",D,[u("h3",I,w(e.character.name[e.currentLanguage]),1),u("ul",R,[(v(!0),i(x,null,b(e.character.tag[e.currentLanguage],(function(e){return v(),i("li",V," #"+w(e),1)})),256))])]),u("div",A,[u("div",z,[u("div",Y,[u("span",H,w(t.$t("page.characters.character_text.sample")),1)]),u("div",U,[_(N,{class:"h-2/3",src:"/characters/".concat(e.character.name.en.toLowerCase(),"/samples/").concat(r.value.toLowerCase(),"/1.wav")},null,8,["src"]),_(N,{class:"h-2/3",src:"/characters/".concat(e.character.name.en.toLowerCase(),"/samples/").concat(r.value.toLowerCase(),"/2.wav")},null,8,["src"]),_(N,{class:"h-2/3",src:"/characters/".concat(e.character.name.en.toLowerCase(),"/samples/").concat(r.value.toLowerCase(),"/3.wav")},null,8,["src"])])]),u("div",X,[u("div",J,[u("span",K,w(t.$t("page.characters.character_text.style")),1)]),u("div",Q,[k(u("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return r.value=e}),class:"appearance-none border border-black text-center rounded-md p-2 pr-10 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"},[(v(!0),i(x,null,b(e.character.style,(function(e){return v(),i("option",{key:e,value:e},w(e),9,W)})),128))],512),[[L,r.value]]),u("span",Z,[u("img",{src:f("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-down'%3e%3cpolyline%20points='6%209%2012%2015%2018%209'%3e%3c/polyline%3e%3c/svg%3e"),alt:"combobox arrow",class:"w-5 h-5"},null,8,ee)])])])]),e.character.isRelease&&!e.character.isDefaultVoicer?(v(),i("button",{key:0,onClick:n[1]||(n[1]=function(t){return e.openModal(e.character)}),class:"w-full flex-[1] rounded-3xl font-jua text-xl",style:h({backgroundColor:e.character.color})},w(t.$t("page.characters.download_btn.download")),5)):(v(),i("button",te,w(e.character.isRelease?t.$t("page.characters.download_btn.defaultvoicer"):t.$t("page.characters.download_btn.not_release")),1))])}}}),ne={class:"flex-grow"},oe={key:0,class:"w-full flex justify-center"},ae={class:"flex flex-col items-center"},ce={class:"font-jua text-center text-3xl"},le={key:0,class:"overflow-y-scroll max-h-[50vh] md:mx-12 bg-[#F8F8F8] p-6 my-6"};e("default",l({__name:"characters",setup:function(e){var r={isDefaultVoicer:!0,isRelease:!1,color:"",name:{ko:"",en:""},tag:{ko:[""],en:[""]},style:[""],downloadLink:""},l=C(),s=y(r),f=y(""),h=y([""]),d=y(!1),m=y(!0),k=y(!0),L=y([r]),F=function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.isDefaultVoicer||k.value){e.next=8;break}return s.value=r,d.value=!0,e.next=5,S.get("/characters/".concat(r.name.en.toLowerCase(),"/readme.txt")).then((function(e){return e.data.split("\n")})).catch((function(e){console.error(e),l.push("/error")}));case 5:n=e.sent,h.value=n,m.value=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){return d.value=!1},G=function(){return window.open(s.value.downloadLink)},$=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/characters/characters.json").then((function(e){return e.data})).catch((function(e){console.error(e),l.push("/error")}));case 2:r=e.sent,L.value=r;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g(n(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.value=j(),e.next=3,$();case 3:k.value=!1;case 4:case"end":return e.stop()}}),e)})))),function(e,t){return v(),i(x,null,[_(a,{url:"https://mirivoice.github.io/characters",description:"미리보이스는 모두를 위한 무료, 그리고 오픈소스 TTS 엔진입니다.","page-title":e.$t("helmet.characters.title")},null,8,["page-title"]),u("main",ne,[_(c,{"is-loading":k.value},null,8,["is-loading"]),k.value?p("",!0):(v(),i("div",oe,[_(o,{"child-width":356},{default:E((function(){return[(v(!0),i(x,null,b(L.value,(function(e){return v(),O(re,{key:e.name.en,character:e,"current-language":f.value,"open-modal":F},null,8,["character","current-language"])})),128))]})),_:1})]))]),_(P,{width:"50vw",isOpen:d.value,closeModal:T},{default:E((function(){return[u("div",ae,[u("h1",ce,w(e.$t("page.characters.modal.teamsofuse",{name:s.value.name[f.value]})),1),_(c,{"is-loading":m.value},null,8,["is-loading"]),m.value?p("",!0):(v(),i("div",le,[(v(!0),i(x,null,b(h.value,(function(e,t){return v(),i("p",{class:"my-2",key:t},w(e),1)})),128))])),u("button",{class:"bg-brand-color py-3 w-80 rounded-3xl font-jua text-2xl",onClick:G},w(e.$t("page.characters.modal.gotodownload")),1)])]})),_:1},8,["isOpen"])],64)}}}))}}}))}();
