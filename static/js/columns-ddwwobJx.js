import{i as e,e as r,h as i,aF as a}from"./index-BHcVNAp5.js";var p={pkg:{name:"vue-pure-admin",version:"5.9.0",engines:{node:"^18.18.0 || ^20.9.0 || >=22.0.0",pnpm:">=9"},dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.1.6","@infectoone/vue-ganttastic":"^2.3.2","@logicflow/core":"^1.2.28","@logicflow/extension":"^1.2.28","@pureadmin/descriptions":"^1.2.1","@pureadmin/table":"^3.2.1","@pureadmin/utils":"^2.5.0","@vue-flow/background":"^1.3.2","@vue-flow/core":"^1.41.6","@vueuse/core":"^12.0.0","@vueuse/motion":"^2.2.6","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1",axios:"^1.7.9","china-area-data":"^5.0.1",cropperjs:"^1.6.2",dayjs:"^1.11.13",echarts:"^5.5.1","el-table-infinite-scroll":"^3.0.6","element-plus":"^2.9.0","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","mint-filter":"^4.0.3",mitt:"^3.0.1",mqtt:"4.3.7",nprogress:"^0.2.0","path-browserify":"^1.0.1",pinia:"^2.3.0","pinyin-pro":"^3.26.0","plus-pro-components":"^0.1.18",qrcode:"^1.5.4",qs:"^6.13.1","responsive-storage":"^2.2.0",sortablejs:"^1.15.6",swiper:"^11.1.15",typeit:"^8.8.7","v-contextmenu":"^3.2.0","v3-infinite-loading":"^1.3.2","version-rocket":"^1.7.4",vue:"^3.5.13","vue-i18n":"^10.0.5","vue-json-pretty":"^2.4.0","vue-pdf-embed":"^2.1.1","vue-router":"^4.5.0","vue-tippy":"^6.5.0","vue-types":"^5.1.3","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.6.4","vue3-danmaku":"^1.6.1","vue3-puzzle-vcode":"^1.1.7",vuedraggable:"^4.1.0","vxe-table":"4.6.25","wavesurfer.js":"^7.8.10",xgplayer:"^3.0.20",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^19.6.0","@commitlint/config-conventional":"^19.6.0","@commitlint/types":"^19.5.0","@eslint/js":"^9.16.0","@faker-js/faker":"^9.3.0","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.2.0","@intlify/unplugin-vue-i18n":"^6.0.1","@types/dagre":"^0.7.52","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^20.17.9","@types/nprogress":"^0.2.3","@types/path-browserify":"^1.0.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.17","@types/sortablejs":"^1.15.8","@typescript-eslint/eslint-plugin":"^8.18.0","@typescript-eslint/parser":"^8.18.0","@vitejs/plugin-vue":"^5.2.1","@vitejs/plugin-vue-jsx":"^4.1.1",autoprefixer:"^10.4.20",boxen:"^8.0.1","code-inspector-plugin":"^0.18.2",cssnano:"^7.0.6",dagre:"^0.8.5",eslint:"^9.16.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.2.1","eslint-plugin-vue":"^9.32.0","gradient-string":"^3.0.0",husky:"^9.1.7","lint-staged":"^15.2.10",postcss:"^8.4.49","postcss-html":"^1.7.0","postcss-import":"^16.1.0","postcss-scss":"^4.0.9",prettier:"^3.4.2",rimraf:"^6.0.1","rollup-plugin-visualizer":"^5.12.0",sass:"^1.82.0",stylelint:"^16.11.0","stylelint-config-recess-order":"^5.1.1","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^13.1.0","stylelint-prettier":"^5.0.2",svgo:"^3.3.2",tailwindcss:"^3.4.16",typescript:"5.6.3",vite:"^6.0.3","vite-plugin-cdn-import":"^1.0.1","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.1.4","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.4.3","vue-tsc":"^2.1.10"}},lastBuildTime:"2024-12-19 09:39:19"};function o(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!a(t)}function d(){const{pkg:t,lastBuildTime:n}=p,{version:s,engines:l}=t;return{columns:[{label:"当前版本",minWidth:100,cellRenderer:()=>e(r("el-tag"),{size:"large",class:"!text-base"},o(s)?s:{default:()=>[s]})},{label:"最后编译时间",minWidth:120,cellRenderer:()=>e(r("el-tag"),{size:"large",class:"!text-base"},o(n)?n:{default:()=>[n]})},{label:"推荐 node 版本",minWidth:140,cellRenderer:()=>e(r("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.node]})},{label:"推荐 pnpm 版本",minWidth:140,cellRenderer:()=>e(r("el-tag"),{size:"large",class:"!text-base"},{default:()=>[l.pnpm]})},{label:"完整版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("完整版代码链接")])])},{label:"精简版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/pure-admin-thin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("精简版代码链接")])])},{label:"文档地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.cn/",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("文档链接")])])},{label:"预览地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.github.io/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("预览链接")])])}]}}export{d as useColumns};
