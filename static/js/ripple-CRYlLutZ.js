import{d as w,b as r,w as n,e as i,A as y,f as t,g as p,i as a,h as s,B as o,k as m}from"./index-6IIBtBRm.js";const g={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},x={class:"inline-block shadow-md rounded-md p-8 text-lg select-none"},k={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},_={class:"my-5 text-center shadow-md rounded-md p-4 text-lg select-none"},C=w({name:"Ripple",__name:"ripple",setup(c){return(B,e)=>{const f=i("el-link"),u=i("el-alert"),d=i("el-button"),b=i("el-space"),v=i("el-card"),l=y("ripple");return t(),r(v,{shadow:"never"},{header:n(()=>[e[1]||(e[1]=p("p",{class:"font-medium"},"波纹(Ripple)",-1)),a(f,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/ripple.vue",target:"_blank"},{default:n(()=>e[0]||(e[0]=[s(" 代码位置 src/views/able/ripple.vue ")])),_:1})]),default:n(()=>[e[13]||(e[13]=p("div",{class:"mb-5"},"组件中的波纹",-1)),a(u,{title:"v-ripple在某些组件中使用波纹特效会异常，这是因为v-ripple指令只能作用于当前元素，某些组件有多层元素嵌套，且目标元素没在顶层，所以会导致特效异常",type:"warning",closable:!1}),a(b,{wrap:"",class:"my-5"},{default:n(()=>[o((t(),r(d,null,{default:n(()=>e[2]||(e[2]=[s("Default")])),_:1})),[[l]]),o((t(),r(d,{type:"primary"},{default:n(()=>e[3]||(e[3]=[s("Primary")])),_:1})),[[l]]),o((t(),r(d,{type:"success"},{default:n(()=>e[4]||(e[4]=[s("Success")])),_:1})),[[l]]),o((t(),r(d,{type:"info"},{default:n(()=>e[5]||(e[5]=[s("Info")])),_:1})),[[l]]),o((t(),r(d,{type:"warning"},{default:n(()=>e[6]||(e[6]=[s("Warning")])),_:1})),[[l]]),o((t(),r(d,{type:"danger"},{default:n(()=>e[7]||(e[7]=[s("Danger")])),_:1})),[[l]])]),_:1}),o((t(),r(v,{class:"mb-5 w-[510px] select-none",shadow:"hover"},{default:n(()=>e[8]||(e[8]=[s(" 卡片 ")])),_:1})),[[l]]),e[14]||(e[14]=p("div",{class:"mb-5"}," 只要在组件或HTML元素上使用v-ripple指令，就可以启用基本的ripple功能 ",-1)),o((t(),m("div",g,e[9]||(e[9]=[s(" HTML元素 ")]))),[[l]]),o((t(),m("span",x,e[10]||(e[10]=[s(" 行内元素需要添加display: block或display: inline-block才能生效 ")]))),[[l]]),e[15]||(e[15]=p("div",{class:"my-5"}," 当使用v-ripple.center时，将始终从目标的中心处产生波纹 ",-1)),o((t(),m("div",k,e[11]||(e[11]=[s(" 始终从中心触发波纹 ")]))),[[l,void 0,void 0,{center:!0}]]),e[16]||(e[16]=p("div",{class:"mb-5"},` 使用v-ripple="{ class: '' }"添加类来自定义波纹颜色，支持tailwindcss `,-1)),a(u,{title:"自定义样式生效为文字颜色，例如：color: 'red';",type:"warning",closable:!1}),o((t(),m("div",_,e[12]||(e[12]=[s(" 自定义波纹颜色 ")]))),[[l,{class:"text-red-500"}]])]),_:1})}}});export{C as default};