import{d as l,e as s,f as m,k as c,i as n}from"./index-BHcVNAp5.js";const p=l({__name:"tree",setup(h){const t=(i,r,a)=>{setTimeout(()=>{a([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},d=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],o=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}],e=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return(i,r)=>{const a=s("pure-table");return m(),c("div",null,[n(a,{data:d,columns:e,"row-key":"id",border:"","default-expand-all":"",class:"mb-6"}),n(a,{data:o,columns:e,"row-key":"id",border:"",lazy:"",load:t,"tree-props":{hasChildren:"hasChildren",children:"children",checkStrictly:!1}})])}}});export{p as _};
