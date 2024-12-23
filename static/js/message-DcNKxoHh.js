import{f as C,k as y,g as d,d as $,b as w,w as t,e as p,i as n,h as l,u as e,J as o,L as i,an as M}from"./index-6IIBtBRm.js";import{u as b}from"./hooks-Dqy3JVgj.js";import{d as T}from"./check-CIQVCvCT.js";const E={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 1024 1024"};function x(v,m){return C(),y("svg",E,m[0]||(m[0]=[d("path",{fill:"#FF5D50",d:"M428.698 107.315c-6.503 72.192-36.352 207.258-160.256 337.408 3.686-48.025-7.117-83.763-19.047-107.673-6.605-13.159-26.06-10.599-28.877 3.84-5.734 29.44-20.582 75.059-57.6 137.779-71.628 121.395-62.566 459.878 340.736 459.878S934.093 585.728 876.8 442.522c-37.376-93.44-93.952-152.525-128.82-182.324-11.417-9.779-29.132-1.945-29.593 13.056-.921 30.464-7.321 73.37-33.075 102.144-.666-52.787-38.144-208.384-202.445-296.857-23.296-12.544-51.763 2.457-54.17 28.774z"},null,-1),d("path",{fill:"#FFDF99",d:"M702.26 678.4c-4.2-45.056-60.673-166.554-212.634-246.426-10.599-5.58-23.092 3.124-21.504 15.002 6.246 46.848 12.953 140.493-24.064 184.73 4.044-40.397-18.125-73.83-36.66-94.31-8.396-9.217-23.552-4.66-25.497 7.68-3.533 22.322-12.851 56.268-36.557 97.945-42.086 74.035-86.989 188.672 124.57 294.656 10.956.563 22.17.87 33.74.87a618 618 0 0 0 32.717-.87C694.631 878.182 709.837 759.706 702.26 678.4"},null,-1)]))}const L={render:x},F=$({name:"Message",__name:"message",setup(v){return(m,s)=>{const a=p("el-link"),r=p("el-button"),f=p("el-space"),g=p("el-divider"),k=p("el-card");return C(),w(k,{shadow:"never"},{header:t(()=>[s[21]||(s[21]=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," 消息提示 ")],-1)),n(a,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/message.vue",target:"_blank"},{default:t(()=>s[20]||(s[20]=[l(" 代码位置 src/views/components/message.vue ")])),_:1})]),default:t(()=>[s[43]||(s[43]=d("h4",{class:"mb-4"},"Element Plus 的消息提示，点击弹出提示信息",-1)),n(f,{wrap:""},{default:t(()=>[n(r,{type:"info",onClick:s[0]||(s[0]=u=>e(o)("Info类型消息",{customClass:"el"}))},{default:t(()=>s[22]||(s[22]=[l(" Info ")])),_:1}),n(r,{type:"success",onClick:s[1]||(s[1]=u=>e(o)("Success类型消息",{customClass:"el",type:"success"}))},{default:t(()=>s[23]||(s[23]=[l(" Success ")])),_:1}),n(r,{type:"warning",onClick:s[2]||(s[2]=u=>e(o)("Warning类型消息",{customClass:"el",type:"warning"}))},{default:t(()=>s[24]||(s[24]=[l(" Warning ")])),_:1}),n(r,{type:"danger",onClick:s[3]||(s[3]=u=>e(o)("Error类型消息",{customClass:"el",type:"error"}))},{default:t(()=>s[25]||(s[25]=[l(" Error ")])),_:1}),n(r,{onClick:s[4]||(s[4]=u=>e(o)("可关闭消息",{customClass:"el",showClose:!0}))},{default:t(()=>s[26]||(s[26]=[l(" 可关闭 ")])),_:1}),n(r,{onClick:s[5]||(s[5]=u=>e(o)("分组消息合并",{customClass:"el",type:"success",grouping:!0}))},{default:t(()=>s[27]||(s[27]=[l(" 分组消息合并 ")])),_:1}),n(r,{onClick:s[6]||(s[6]=u=>e(o)("自定义消息图标",{customClass:"el",icon:e(b)(e(T))}))},{default:t(()=>s[28]||(s[28]=[l(" 自定义图标 ")])),_:1}),n(r,{onClick:s[7]||(s[7]=u=>e(o)("3秒后关闭",{customClass:"el",duration:3e3,onClose:()=>e(o)("消息已关闭",{customClass:"el",type:"success"})}))},{default:t(()=>s[29]||(s[29]=[l(" 自定义延时关闭时间并设置关闭后其他操作 ")])),_:1}),n(r,{onClick:s[8]||(s[8]=u=>e(o)(i("p",null,[i("span",null,"Message can be "),i("i",{style:"color: teal"},"VNode")]),{customClass:"el"}))},{default:t(()=>s[30]||(s[30]=[l(" 自定义内容 ")])),_:1}),n(r,{onClick:s[9]||(s[9]=u=>e(o)("<strong>This is <i>HTML</i> string</strong>",{customClass:"el",dangerouslyUseHTMLString:!0}))},{default:t(()=>s[31]||(s[31]=[l(" HTML 片段作为正文内容 ")])),_:1})]),_:1}),n(g),s[44]||(s[44]=d("h4",{class:"mb-4"}," 类似 Ant Design 风格的消息提示，点击弹出提示信息（基于 ElMessage 样式改版，不会影响 ElMessage 原本样式，使用和打包大小成本极低并适配整体暗色风格） ",-1)),n(f,{wrap:""},{default:t(()=>[n(r,{type:"info",onClick:s[10]||(s[10]=u=>e(o)("Info类型消息"))},{default:t(()=>s[32]||(s[32]=[l("Info")])),_:1}),n(r,{type:"success",onClick:s[11]||(s[11]=u=>e(o)("Success类型消息",{type:"success"}))},{default:t(()=>s[33]||(s[33]=[l(" Success ")])),_:1}),n(r,{type:"warning",onClick:s[12]||(s[12]=u=>e(o)("Warning类型消息",{type:"warning"}))},{default:t(()=>s[34]||(s[34]=[l(" Warning ")])),_:1}),n(r,{type:"danger",onClick:s[13]||(s[13]=u=>e(o)("Error类型消息",{type:"error"}))},{default:t(()=>s[35]||(s[35]=[l(" Error ")])),_:1}),n(r,{onClick:s[14]||(s[14]=u=>e(o)("可关闭消息",{showClose:!0}))},{default:t(()=>s[36]||(s[36]=[l(" 可关闭 ")])),_:1}),n(r,{onClick:s[15]||(s[15]=u=>e(o)("分组消息合并",{type:"success",grouping:!0}))},{default:t(()=>s[37]||(s[37]=[l(" 分组消息合并 ")])),_:1}),n(r,{onClick:s[16]||(s[16]=u=>e(o)("自定义消息图标",{icon:e(L)}))},{default:t(()=>s[38]||(s[38]=[l(" 自定义图标 ")])),_:1}),n(r,{onClick:s[17]||(s[17]=u=>e(o)("3秒后关闭",{duration:3e3,onClose:()=>e(o)("消息已关闭",{type:"success"})}))},{default:t(()=>s[39]||(s[39]=[l(" 自定义延时关闭时间并设置关闭后其他操作 ")])),_:1}),n(r,{onClick:s[18]||(s[18]=u=>e(o)(i("p",null,[i("span",null,"Message can be "),i("i",{style:"color: teal"},"VNode")])))},{default:t(()=>s[40]||(s[40]=[l(" 自定义内容 ")])),_:1}),n(r,{onClick:s[19]||(s[19]=u=>e(o)("<strong>This is <i>HTML</i> string</strong>",{dangerouslyUseHTMLString:!0}))},{default:t(()=>s[41]||(s[41]=[l(" HTML 片段作为正文内容 ")])),_:1})]),_:1}),n(g),n(r,{onClick:e(M)},{default:t(()=>s[42]||(s[42]=[l(" 关闭所有消息提示 ")])),_:1},8,["onClick"])]),_:1})}}});export{F as default};