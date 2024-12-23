import{d as w,e as r,A as g,f as d,k,g as a,t as x,u as p,gE as B,i as n,w as t,h as s,gF as f,b as o,j as v,B as _}from"./index-BHcVNAp5.js";const A={class:"mb-2"},V=w({name:"PermissionButtonRouter",__name:"index",setup(c){return(C,e)=>{const y=r("el-link"),i=r("el-button"),l=r("Auth"),m=r("el-space"),u=r("el-card"),b=g("auth");return d(),k("div",null,[a("p",A,"当前拥有的code列表："+x(p(B)()),1),n(u,{shadow:"never",class:"mb-2"},{header:t(()=>[e[1]||(e[1]=a("div",{class:"card-header"},"组件方式判断权限",-1)),n(y,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/index.vue",target:"_blank"},{default:t(()=>e[0]||(e[0]=[s(" 代码位置 src/views/permission/button/index.vue ")])),_:1})]),default:t(()=>[n(m,{wrap:""},{default:t(()=>[n(l,{value:"permission:btn:add"},{default:t(()=>[n(i,{plain:"",type:"warning"},{default:t(()=>e[2]||(e[2]=[s(" 拥有code：'permission:btn:add' 权限可见 ")])),_:1})]),_:1}),n(l,{value:["permission:btn:edit"]},{default:t(()=>[n(i,{plain:"",type:"primary"},{default:t(()=>e[3]||(e[3]=[s(" 拥有code：['permission:btn:edit'] 权限可见 ")])),_:1})]),_:1}),n(l,{value:["permission:btn:add","permission:btn:edit","permission:btn:delete"]},{default:t(()=>[n(i,{plain:"",type:"danger"},{default:t(()=>e[4]||(e[4]=[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")])),_:1})]),_:1})]),_:1})]),_:1}),n(u,{shadow:"never",class:"mb-2"},{header:t(()=>e[5]||(e[5]=[a("div",{class:"card-header"},"函数方式判断权限",-1)])),default:t(()=>[n(m,{wrap:""},{default:t(()=>[p(f)("permission:btn:add")?(d(),o(i,{key:0,plain:"",type:"warning"},{default:t(()=>e[6]||(e[6]=[s(" 拥有code：'permission:btn:add' 权限可见 ")])),_:1})):v("",!0),p(f)(["permission:btn:edit"])?(d(),o(i,{key:1,plain:"",type:"primary"},{default:t(()=>e[7]||(e[7]=[s(" 拥有code：['permission:btn:edit'] 权限可见 ")])),_:1})):v("",!0),p(f)(["permission:btn:add","permission:btn:edit","permission:btn:delete"])?(d(),o(i,{key:2,plain:"",type:"danger"},{default:t(()=>e[8]||(e[8]=[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")])),_:1})):v("",!0)]),_:1})]),_:1}),n(u,{shadow:"never"},{header:t(()=>e[9]||(e[9]=[a("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1)])),default:t(()=>[n(m,{wrap:""},{default:t(()=>[_((d(),o(i,{plain:"",type:"warning"},{default:t(()=>e[10]||(e[10]=[s(" 拥有code：'permission:btn:add' 权限可见 ")])),_:1})),[[b,"permission:btn:add"]]),_((d(),o(i,{plain:"",type:"primary"},{default:t(()=>e[11]||(e[11]=[s(" 拥有code：['permission:btn:edit'] 权限可见 ")])),_:1})),[[b,["permission:btn:edit"]]]),_((d(),o(i,{plain:"",type:"danger"},{default:t(()=>e[12]||(e[12]=[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")])),_:1})),[[b,["permission:btn:add","permission:btn:edit","permission:btn:delete"]]])]),_:1})]),_:1})])}}});export{V as default};
