import{d as F,a6 as I,a7 as N,p as y,gL as L,a9 as S,a as U,f$ as E,e as p,f as g,b as j,w as l,g as i,i as n,h as s,k as B,F as x,l as $,u as a,t as b,aa as w,gM as q}from"./index-BHcVNAp5.js";import{u as H}from"./hooks-vU65Tqa2.js";const P={class:"flex flex-wrap items-center"},_={class:"flex flex-wrap items-center"},K=F({name:"Tabs",__name:"index",setup(z){const{toDetail:v,router:o}=H(),D=I(N().wholeMenus,!0),k=y(()=>L(S(D),0,{disabled:!0})),f=U([]),C=y(()=>{var r;return(r=E())==null?void 0:r.multiTags});function T(){f.value.length!==0&&f.value.forEach(r=>{var d;const e=(d=q(k.value,r).redirect)!=null?d:q(k.value,r).path;E().handleTags("splice",e),e==="/tabs/index"&&o.push({path:C.value[C.value.length-1].path})})}return(r,e)=>{const d=p("el-link"),u=p("el-button"),m=p("el-divider"),V=p("el-tree-select"),A=p("el-card");return g(),j(A,{shadow:"never"},{header:l(()=>[e[9]||(e[9]=i("div",{class:"font-medium"},"标签页复用，超出限制自动关闭",-1)),n(d,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/tabs",target:"_blank"},{default:l(()=>e[8]||(e[8]=[s(" 代码位置 src/views/tabs ")])),_:1})]),default:l(()=>[i("div",P,[e[11]||(e[11]=i("p",null,"query传参模式：",-1)),(g(),B(x,null,$(6,t=>n(u,{key:t,class:"m-2",onClick:M=>a(v)({id:t},"query")},{default:l(()=>[s(" 打开"+b(t)+"详情页 ",1)]),_:2},1032,["onClick"])),64)),n(u,{onClick:e[0]||(e[0]=t=>a(v)({id:666,name:"小明",age:18,job:"工程师"},"query"))},{default:l(()=>e[10]||(e[10]=[s(" 多个参数 ")])),_:1})]),n(m),i("div",_,[e[12]||(e[12]=i("p",null,"params传参模式：",-1)),(g(),B(x,null,$(6,t=>n(u,{key:t,class:"m-2",onClick:M=>a(v)({id:t},"params")},{default:l(()=>[s(" 打开"+b(t)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(m),n(V,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=t=>f.value=t),class:"!w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:t=>a(w)(t.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:k.value},{default:l(({data:t})=>[i("span",null,b(a(w)(t.meta.title)),1)]),_:1},8,["modelValue","props","data"]),n(u,{class:"m-2",onClick:T},{default:l(()=>e[13]||(e[13]=[s("关闭标签")])),_:1}),n(m),n(u,{onClick:e[2]||(e[2]=t=>a(o).push({name:"Menu1-2-2"}))},{default:l(()=>e[14]||(e[14]=[s(" 跳转页内菜单（传name对象，优先推荐） ")])),_:1}),n(u,{onClick:e[3]||(e[3]=t=>a(o).push("/nested/menu1/menu1-2/menu1-2-2"))},{default:l(()=>e[15]||(e[15]=[s(" 跳转页内菜单（直接传要跳转的路径） ")])),_:1}),n(u,{onClick:e[4]||(e[4]=t=>a(o).push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:l(()=>e[16]||(e[16]=[s(" 跳转页内菜单（传path对象） ")])),_:1}),n(m),n(u,{onClick:e[5]||(e[5]=t=>a(o).push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:l(()=>e[17]||(e[17]=[s(" 携参跳转页内菜单（传name对象，优先推荐） ")])),_:1}),n(u,{onClick:e[6]||(e[6]=t=>a(o).push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:l(()=>e[18]||(e[18]=[s(" 携参跳转页内菜单（传path对象） ")])),_:1}),n(d,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:l(()=>e[19]||(e[19]=[s(" 点击查看更多跳转方式 ")])),_:1}),n(m),n(u,{onClick:e[7]||(e[7]=t=>a(o).push({name:"Empty"}))},{default:l(()=>e[20]||(e[20]=[s(" 跳转无Layout的空白页面 ")])),_:1})]),_:1})}}});export{K as default};
