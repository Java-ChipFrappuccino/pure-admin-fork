var m=(p,r,t)=>new Promise((o,s)=>{var i=e=>{try{n(t.next(e))}catch(l){s(l)}},a=e=>{try{n(t.throw(e))}catch(l){s(l)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,a);n((t=t.apply(p,r)).next())});import{d as c,a as u,r as d,m as g,e as b,f,k as v,g as y,i as _,v as h,u as w,X as x,aX as S,gC as W}from"./index-BHcVNAp5.js";const C=c({name:"SecurityLog",__name:"SecurityLog",setup(p){const r=u(!0),t=u([]),o=d({total:0,pageSize:10,currentPage:1,background:!0,layout:"prev, pager, next"}),s=[{label:"详情",prop:"summary",minWidth:140},{label:"IP 地址",prop:"ip",minWidth:100},{label:"地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"时间",prop:"operatingTime",minWidth:180,formatter:({operatingTime:a})=>S(a).format("YYYY-MM-DD HH:mm:ss")}];function i(){return m(this,null,function*(){r.value=!0;const{data:a}=yield W();t.value=a.list,o.total=a.total,o.pageSize=a.pageSize,o.currentPage=a.currentPage,setTimeout(()=>{r.value=!1},200)})}return g(()=>{i()}),(a,n)=>{const e=b("pure-table");return f(),v("div",{class:h(["min-w-[180px]",w(x)()?"max-w-[100%]":"max-w-[70%]"])},[n[0]||(n[0]=y("h3",{class:"my-8"},"安全日志",-1)),_(e,{"row-key":"id","table-layout":"auto",loading:r.value,data:t.value,columns:s,pagination:o},null,8,["loading","data","pagination"])],2)}}});export{C as _};
