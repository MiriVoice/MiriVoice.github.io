import{_}from"./DetailHelmet.vue_vue_type_script_setup_true_lang-CEpfJ0bm.js";import{_ as h}from"./Loading.vue_vue_type_script_setup_true_lang-Bm77rJai.js";import{d as g,i as l,o as x,g as w,c as a,a as u,e as t,t as r,F as f,k as v,h as q,u as y,b as s}from"./app-6WmMbC4U.js";import{a as m}from"./axios-Ce6w_M6R.js";const F={class:"flex-grow flex"},L={key:0,class:"flex-grow flex flex-col items-center px-6"},$={class:"font-jua text-6xl sm:text-4xl"},k={class:"bg-[#A9FFA6] py-2 px-6 w-full"},b={class:"w-full px-14 sm:px-2 mt-4"},T=["innerHTML"],V=g({__name:"FAQ",setup(j){const o=l(!0),i=l(""),c=l([]),p=y(),d=async()=>{c.value=await m.get("/faq/".concat(i.value,".json")).then(e=>{if(typeof e.data=="string"&&e.data.includes("<html"))throw new Error("404");return e.data}).catch(async()=>await m.get("/faq/en.json").then(e=>e.data).catch(e=>{console.error(e),p.push("/error")}))};return x(async()=>{i.value=w(),await d(),o.value=!1}),(e,A)=>(s(),a(f,null,[u(_,{url:"https://mirivoice.github.io/faq",description:"미리보이스는 모두를 위한 무료, 그리고 오픈소스 TTS 엔진입니다.","page-title":e.$t("helmet.faq.title")},null,8,["page-title"]),t("main",F,[u(h,{"is-loading":o.value},null,8,["is-loading"]),o.value?q("",!0):(s(),a("div",L,[t("h1",$,r(e.$t("page.faq.title")),1),(s(!0),a(f,null,v(c.value,n=>(s(),a("div",{class:"mt-4 flex flex-col items-center sm:w-full w-1/2 my-4",key:n.question},[t("h2",k,r(e.$t("page.faq.question_prefix"))+" "+r(n.question),1),t("div",b,[t("p",{innerHTML:n.answer.replace("\n","<br/>")},null,8,T)])]))),128))]))])],64))}});export{V as default};
