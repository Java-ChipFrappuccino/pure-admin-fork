var ne=Object.defineProperty;var K=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var P=(e,r,t)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,O=(e,r)=>{for(var t in r||(r={}))ue.call(r,t)&&P(e,t,r[t]);if(K)for(var t of K(r))re.call(r,t)&&P(e,t,r[t]);return e};var G=(e,r,t)=>new Promise((B,d)=>{var h=i=>{try{o(t.next(i))}catch(f){d(f)}},m=i=>{try{o(t.throw(i))}catch(f){d(f)}},o=i=>i.done?B(i.value):Promise.resolve(i.value).then(h,m);o((t=t.apply(e,r)).next())});import{S as ie}from"./sortable.esm-VSgMS8pS.js";import{d as oe,a as s,ao as D,ad as v,p as $,i as l,a3 as ce,F as M,B as k,A as p,e as u,h as S,u as H,aa as V,g7 as se,f_ as de,aF as fe,aP as ve,y as me,Z as xe,V as he}from"./index-BHcVNAp5.js";import{u as be}from"./epTheme-DSJIt9jU.js";import{E as ge,R as Ce,C as ye,D as ke,S as pe}from"./collapse-CawxCbEL.js";function we(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!fe(e)}const Te={title:{type:String,default:"列表"},vxeTableRef:{type:Object},columns:{type:Array,default:()=>[]},tree:{type:Boolean,default:!1},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},Ee=oe({name:"VxeTableBar",props:Te,emits:["refresh","fullscreen"],setup(e,{emit:r,slots:t,attrs:B}){const d=s("small"),h=s(!1),m=s(!0),o=s(!1),i=s(!1),f=xe(),b=s(e.isExpandAll);let x=D(v(e==null?void 0:e.columns),"title");const g=s(D(v(e==null?void 0:e.columns),"title")),c=s(v(e==null?void 0:e.columns)),A=$(()=>a=>({background:a===d.value?be().epThemeColor:"",color:a===d.value?"#fff":"var(--el-text-color-primary)"})),C=$(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),L=$(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function U(){h.value=!0,r("refresh"),ve(500).then(()=>h.value=!1)}function Z(){b.value=!b.value,b.value?e.vxeTableRef.setAllTreeExpand(!0):e.vxeTableRef.clearTreeExpand(),e.vxeTableRef.refreshColumn()}function q(){o.value=!o.value,r("fullscreen",o.value)}function F(){const a=v(c.value).filter(n=>g.value.includes(n.title));e.vxeTableRef.reloadColumn(a)}function J(a){g.value=a?x:[],i.value=!1,F()}function Q(a){g.value=a;const n=a.length;m.value=n===x.length,i.value=n>0&&n<x.length}function W(){return G(this,null,function*(){m.value=!0,i.value=!1,c.value=v(e==null?void 0:e.columns),x=[],x=yield D(v(e==null?void 0:e.columns),"title"),g.value=D(v(e==null?void 0:e.columns),"title"),e.vxeTableRef.refreshColumn()})}function j(a){d.value=a,e.vxeTableRef.refreshColumn()}const X={dropdown:()=>l(u("el-dropdown-menu"),{class:"translation"},{default:()=>[l(u("el-dropdown-item"),{style:A.value("medium"),onClick:()=>j("medium")},{default:()=>[S("宽松")]}),l(u("el-dropdown-item"),{style:A.value("small"),onClick:()=>j("small")},{default:()=>[S("默认")]}),l(u("el-dropdown-item"),{style:A.value("mini"),onClick:()=>j("mini")},{default:()=>[S("紧凑")]})]})},Y=a=>{a.preventDefault(),me(()=>{var T;const n=((T=f==null?void 0:f.proxy)==null?void 0:T.$refs[`VxeGroupRef${H(e.tableKey)}`]).$el.firstElementChild;ie.create(n,{animation:300,handle:".drag-btn",onEnd:({newIndex:y,oldIndex:E,item:te})=>{const _=te,z=_.parentNode,I=c.value[E],N=c.value[y];if(I!=null&&I.fixed||N!=null&&N.fixed){const R=z.children[E];y>E?z.insertBefore(_,R):z.insertBefore(_,R&&R.nextElementSibling);return}const ae=c.value.splice(E,1)[0];c.value.splice(y,0,ae),F()}})})},ee=a=>!!c.value.filter(n=>V(n.title)===V(a))[0].fixed,w=a=>({content:a,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),le={reference:()=>k(l(pe,{class:["w-[16px]",C.value]},null),[[p("tippy"),w("列设置")]])};return()=>{let a;return l(M,null,[l("div",ce(B,{class:["w-[99/100]","px-2","pb-2","bg-bg_color",o.value?["!w-full","!h-full","z-[2002]","fixed","inset-0"]:"mt-2"]}),[l("div",{class:"flex justify-between w-full h-[60px] p-4"},[t!=null&&t.title?t.title():l("p",{class:"font-bold truncate"},[e.title]),l("div",{class:"flex items-center justify-around"},[t!=null&&t.buttons?l("div",{class:"flex mr-4"},[t.buttons()]):null,e.tree?l(M,null,[k(l(ge,{class:["w-[16px]",C.value],style:{transform:b.value?"none":"rotate(-90deg)"},onClick:()=>Z()},null),[[p("tippy"),w(b.value?"折叠":"展开")]]),l(u("el-divider"),{direction:"vertical"},null)]):null,k(l(Ce,{class:["w-[16px]",C.value,h.value?"animate-spin":""],onClick:()=>U()},null),[[p("tippy"),w("刷新")]]),l(u("el-divider"),{direction:"vertical"},null),k(l(u("el-dropdown"),{trigger:"click"},O({default:()=>[l(ye,{class:["w-[16px]",C.value]},null)]},X)),[[p("tippy"),w("密度")]]),l(u("el-divider"),{direction:"vertical"},null),l(u("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},O({default:()=>[l("div",{class:[L.value]},[l(u("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:m.value,"onUpdate:modelValue":n=>m.value=n,indeterminate:i.value,onChange:n=>J(n)},null),l(u("el-button"),{type:"primary",link:!0,onClick:()=>W()},{default:()=>[S("重置")]})]),l("div",{class:"pt-[6px] pl-[11px]"},[l(u("el-scrollbar"),{"max-height":"36vh"},{default:()=>[l(u("el-checkbox-group"),{ref:`VxeGroupRef${H(e.tableKey)}`,modelValue:g.value,onChange:n=>Q(n)},{default:()=>[l(u("el-space"),{direction:"vertical",alignment:"flex-start",size:0},we(a=x.map((n,T)=>l("div",{class:"flex items-center"},[l(ke,{class:["drag-btn w-[16px] mr-2",ee(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:y=>Y(y)},null),l(u("el-checkbox"),{key:T,label:n,value:n,onChange:F},{default:()=>[l("span",{title:V(n),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[V(n)])]})])))?a:{default:()=>[a]})]})]})])]},le)),l(u("el-divider"),{direction:"vertical"},null),k(l(u("iconifyIconOffline"),{class:["w-[16px]",C.value],icon:o.value?se:de,onClick:()=>q()},null),[[p("tippy"),o.value?"退出全屏":"全屏"]])])]),t.default({size:d.value,dynamicColumns:c.value})])])}}}),Ae=he(Ee);export{Ae as V};
