import{i as B,a as A,_ as N}from"./_plugin-vue_export-helper-BGOXmsV2.js";import{d as F,r as U,N as G,f as o,k as g,g as b,u as m,b as $,U as L,Q as u,a3 as f,aq as M,j as p,F as S,h as y,t as j,q as Q,v as T,l as H,ar as I,w as d,as as h,a as E,n as J,e as z,A as K,i as k,B as O}from"./index-BHcVNAp5.js";const R={class:"plus-check-card__avatar-wrapper"},W={class:"plus-check-card__right-content"},X={key:0,class:"plus-check-card__title"},Y={class:"plus-check-card__title-left"},Z={key:1,class:"plus-check-card__description"};var _=F({name:"PlusCheckCard",__name:"index",props:{modelValue:{type:Boolean,default:!1},size:{default:"default"},avatar:{type:[String,Function],default:void 0},avatarProps:{default:()=>({})},title:{type:[String,Function],default:void 0},description:{type:[String,Function],default:void 0},disabled:{type:Boolean,default:!1},extra:{type:Function,default:void 0}},emits:["update:modelValue","change","extra"],setup(w,{emit:v}){const n={large:"plus-check-card--large",default:"plus-check-card--default",small:"plus-check-card--small"},r=w,l=v,c=U({checked:!1});G(()=>{c.checked=r.modelValue});const C=()=>r.size?n[r.size]:"plus-check-card--default",t=()=>{r.disabled||(c.checked=!c.checked,l("update:modelValue",c.checked),l("change",c.checked))},a=()=>{r.disabled||l("extra")};return(e,s)=>(o(),g("div",{class:T(["plus-check-card",[C(),c.checked?"plus-check-card--checked":"",e.disabled?"plus-check-card--disabled":""]]),onClick:t},[b("div",R,[m(B)(e.avatar)?(o(),$(L(e.avatar),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.avatar?u(e.$slots,"avatar",{key:1,avatar:e.avatar,title:e.title,description:e.description}):m(A)(e.avatar)?(o(),$(m(M),f({key:2,src:e.avatar},e.avatarProps),null,16,["src"])):p("v-if",!0)]),b("div",W,[e.title||e.$slots.title?(o(),g("div",X,[b("div",Y,[m(B)(e.title)?(o(),$(L(e.title),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.title?u(e.$slots,"title",{key:1,title:e.title,avatar:e.avatar,description:e.description}):(o(),g(S,{key:2},[y(j(e.title),1)],64))]),b("div",{class:"plus-check-card__title-right",onClick:Q(a,["stop"])},[m(B)(e.extra)?(o(),$(L(e.extra),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.extra?u(e.$slots,"extra",{key:1,title:e.title,avatar:e.avatar,description:e.description}):p("v-if",!0)])])):p("v-if",!0),e.description||e.$slots.description?(o(),g("div",Z,[m(B)(e.description)?(o(),$(L(e.description),{key:0,title:e.title,avatar:e.avatar,description:e.description},null,8,["title","avatar","description"])):e.$slots.description?u(e.$slots,"description",{key:1,title:e.title,description:e.description,avatar:e.avatar}):(o(),g(S,{key:2},[y(j(e.description),1)],64))])):p("v-if",!0)])],2))}}),x=N(_,[["__file","index.vue"]]);const ee=x,ae={class:"plus-check-card-group"};var te=F({name:"PlusCheckCardGroup",__name:"index",props:{modelValue:{default:()=>[]},options:{default:()=>[]},size:{default:void 0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},emits:["update:modelValue","change","extra"],setup(w,{emit:v}){const n=w,r=v,l=U({checkList:[],checked:""});G(()=>{n.multiple?l.checkList=n.modelValue:l.checked=n.modelValue});const c=a=>n.multiple?l.checkList.includes(a):l.checked===a,C=(a,e)=>{if(n.multiple)a?l.checkList.push(e):l.checkList=l.checkList.filter(s=>s!==e),r("update:modelValue",l.checkList),r("change",l.checkList);else{const s=a?e:"";r("update:modelValue",s),r("change",s)}},t=a=>{n.disabled||r("extra",a)};return(a,e)=>(o(),g("div",ae,[(o(!0),g(S,null,H(a.options,(s,P)=>(o(),$(m(ee),f({key:s.value||P,size:a.size,disabled:a.disabled},s,{"model-value":c(s.value),onChange:i=>C(i,s.value),onExtra:i=>t(s)}),I({_:2},[a.$slots["avatar-"+s.value]||a.$slots.avatar?{name:"avatar",fn:d(i=>[a.$slots["avatar-"+s.value]?u(a.$slots,"avatar-"+s.value,h(f({key:0},i))):p("v-if",!0),a.$slots.avatar?u(a.$slots,"avatar",h(f({key:1},i))):p("v-if",!0)]),key:"0"}:void 0,a.$slots["title-"+s.value]||a.$slots.title?{name:"title",fn:d(i=>[a.$slots["title-"+s.value]?u(a.$slots,"title-"+s.value,h(f({key:0},i))):p("v-if",!0),a.$slots.title?u(a.$slots,"title",h(f({key:1},i))):p("v-if",!0)]),key:"1"}:void 0,a.$slots["description-"+s.value]||a.$slots.description?{name:"description",fn:d(i=>[a.$slots["description-"+s.value]?u(a.$slots,"description-"+s.value,h(f({key:0},i))):p("v-if",!0),a.$slots.description?u(a.$slots,"description",h(f({key:1},i))):p("v-if",!0)]),key:"2"}:void 0,a.$slots["extra-"+s.value]||a.$slots.extra?{name:"extra",fn:d(i=>[a.$slots["extra-"+s.value]?u(a.$slots,"extra-"+s.value,h(f({key:0},i))):p("v-if",!0),a.$slots.extra?u(a.$slots,"extra",h(f({key:1},i))):p("v-if",!0)]),key:"3"}:void 0]),1040,["size","disabled","model-value","onChange","onExtra"]))),128))]))}}),se=N(te,[["__file","index.vue"]]);const D=se,le={class:"card-header"},re=F({name:"CheckCard",__name:"check-card",setup(w){const v=E("default"),n=E(),r=E("0"),l=E([]),c=[{title:"标题一",value:"0",description:"坚持梦想，成就不凡的自己",avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{title:"标题二",value:"1",description:"每一次努力，都是成长的契机",avatar:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"}];return J(v,C=>C==="disabled"?n.value="default":n.value=v.value),(C,t)=>{const a=z("el-link"),e=z("el-radio"),s=z("el-radio-group"),P=z("el-space"),i=z("el-card"),q=K("tippy");return o(),$(i,{shadow:"never"},{header:d(()=>[b("div",le,[k(P,{wrap:"",size:40},{default:d(()=>[O((o(),$(a,{href:"https://plus-pro-components.com/components/check-card-group.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:d(()=>t[3]||(t[3]=[y(" 多选卡片组 ")])),_:1})),[[q,{content:"点击查看详细文档"}]]),k(s,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=V=>v.value=V)},{default:d(()=>[k(e,{value:"large"},{default:d(()=>t[4]||(t[4]=[y("大尺寸")])),_:1}),k(e,{value:"default"},{default:d(()=>t[5]||(t[5]=[y("默认尺寸")])),_:1}),k(e,{value:"small"},{default:d(()=>t[6]||(t[6]=[y("小尺寸")])),_:1}),k(e,{value:"disabled"},{default:d(()=>t[7]||(t[7]=[y("禁用")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),k(a,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/check-card.vue",target:"_blank"},{default:d(()=>t[8]||(t[8]=[y(" 代码位置 src/views/components/check-card.vue ")])),_:1})]),default:d(()=>[t[9]||(t[9]=b("p",{class:"mb-2 mt-4"},"单选",-1)),k(m(D),{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=V=>r.value=V),options:c,size:n.value,disabled:v.value==="disabled"},null,8,["modelValue","size","disabled"]),t[10]||(t[10]=b("p",{class:"mb-2 mt-4"},"多选",-1)),k(m(D),{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=V=>l.value=V),options:c,size:n.value,disabled:v.value==="disabled",multiple:""},null,8,["modelValue","size","disabled"])]),_:1})}}});export{re as default};
