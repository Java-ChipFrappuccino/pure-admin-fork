var g=(i,u,n)=>new Promise((l,o)=>{var p=t=>{try{a(n.next(t))}catch(s){o(s)}},m=t=>{try{a(n.throw(t))}catch(s){o(s)}},a=t=>t.done?l(t.value):Promise.resolve(t.value).then(p,m);a((n=n.apply(i,u)).next())});import{r as v,a as h,gD as k,m as x,i as f,h as b,B as A,A as F,e as S,aX as L,J as d,ao as M,af as P,bo as Y}from"./index-6IIBtBRm.js";import{_ as Z}from"./detail.vue_vue_type_script_setup_true_lang-xgywLRD3.js";import{b as I,c as N}from"./system-BtbWnPYl.js";import"./vue-json-pretty-Cohi_J0l.js";const V={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-5h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355Z"/>'};function j(i){const u=v({module:"",requestTime:""}),n=h([]),l=h(!0),o=h(0),{copied:p,update:m}=k(),a=v({total:0,pageSize:10,currentPage:1,background:!0}),t=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"ID",prop:"id",minWidth:90},{label:"所属模块",prop:"module",minWidth:100},{headerRenderer:()=>f("span",{class:"flex-c"},[b("请求接口"),A(f(S("iconifyIconOffline"),{icon:V,class:"ml-1 cursor-help"},null),[[F("tippy"),{content:"双击下面请求接口进行拷贝"}]])]),prop:"url",minWidth:140},{label:"请求方法",prop:"method",minWidth:140},{label:"IP 地址",prop:"ip",minWidth:100},{label:"地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"请求耗时",prop:"takesTime",minWidth:100,cellRenderer:({row:e,props:c})=>f(S("el-tag"),{size:c.size,type:e.takesTime<1e3?"success":"warning",effect:"plain"},{default:()=>[e.takesTime,b(" ms")]})},{label:"请求时间",prop:"requestTime",minWidth:180,formatter:({requestTime:e})=>L(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",slot:"operation"}];function s(e){}function y(e){}function D(e){o.value=e.length,i.value.setAdaptive()}function C(){o.value=0,i.value.getTableRef().clearSelection()}function T({url:e},{property:c}){c==="url"&&(m(e),p.value?d(`${e} 已拷贝`,{type:"success"}):d("拷贝失败",{type:"warning"}))}function W(){const e=i.value.getTableRef().getSelectionRows();d(`已删除序号为 ${M(e,"id")} 的数据`,{type:"success"}),i.value.getTableRef().clearSelection(),r()}function w(){d("已删除所有日志数据",{type:"success"}),r()}function R(e){I({id:e.id}).then(c=>{P({title:"系统日志详情",fullscreen:!0,hideFooter:!0,contentRenderer:()=>Z,props:{data:[c]}})})}function r(){return g(this,null,function*(){l.value=!0;const{data:e}=yield N(Y(u));n.value=e.list,a.total=e.total,a.pageSize=e.pageSize,a.currentPage=e.currentPage,setTimeout(()=>{l.value=!1},500)})}const z=e=>{e&&(e.resetFields(),r())};return x(()=>{r()}),{form:u,loading:l,columns:t,dataList:n,pagination:a,selectedNum:o,onSearch:r,onDetail:R,clearAll:w,resetForm:z,onbatchDel:W,handleSizeChange:s,onSelectionCancel:C,handleCellDblclick:T,handleCurrentChange:y,handleSelectionChange:D}}export{j as useRole};