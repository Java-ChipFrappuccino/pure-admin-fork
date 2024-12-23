import{d as f,k,i as t,w as n,e as d,f as v,g as o,h as s,u,W as i,I as C,J as _}from"./index-BHcVNAp5.js";const B=f({name:"Debounce",__name:"debounce",setup(w){const l=()=>_("恭喜你，这是一条成功消息",{type:"success"}),m=i(l,1e3,!0),b=i(l,1e3),c=C(l);return(g,e)=>{const p=d("el-link"),a=d("el-button"),r=d("el-card");return v(),k("div",null,[t(r,{class:"mb-5",shadow:"never"},{header:n(()=>[e[1]||(e[1]=o("p",{class:"font-medium"},"防抖：debounce",-1)),t(p,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/debounce.vue",target:"_blank"},{default:n(()=>e[0]||(e[0]=[s(" 代码位置 src/views/able/debounce.vue ")])),_:1})]),default:n(()=>[e[4]||(e[4]=o("div",{class:"mb-5"}," 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。 ",-1)),t(a,{onClick:u(m)},{default:n(()=>e[2]||(e[2]=[s(" 连续点击我，只会执行第一次点击事件，立即执行 ")])),_:1},8,["onClick"]),t(a,{onClick:u(b)},{default:n(()=>e[3]||(e[3]=[s(" 连续点击我，只会执行最后一次点击事件，延后执行 ")])),_:1},8,["onClick"])]),_:1}),t(r,{shadow:"never"},{header:n(()=>e[5]||(e[5]=[o("div",{class:"font-medium"},"节流：throttle",-1)])),default:n(()=>[e[7]||(e[7]=o("div",{class:"mb-5"}," 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。 ",-1)),t(a,{onClick:u(c)},{default:n(()=>e[6]||(e[6]=[s(" 连续点击我，每一秒只会执行一次点击事件 ")])),_:1},8,["onClick"])]),_:1})])}}});export{B as default};