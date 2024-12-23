var X=Object.defineProperty;var y=(c,t,s)=>t in c?X(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s;var a=(c,t,s)=>y(c,typeof t!="symbol"?t+"":t,s);import{e as _}from"./mitt-E5P-NQ8u.js";import{d as S,a as g,a1 as P,m as L,z as R,b,w as r,e as f,A as U,f as E,g as d,h as i,i as u,j as F,B,_ as H}from"./index-BHcVNAp5.js";class O{constructor(t){a(this,"canvas");a(this,"ctx");a(this,"images");a(this,"container");a(this,"positionX");a(this,"isDragging");a(this,"startX");a(this,"handleClick",t=>{this.drawTick(t)});a(this,"handleMouseDown",t=>{this.startDrag(t.clientX)});a(this,"handleMouseMove",t=>{this.drag(t.clientX)});a(this,"handleMouseUp",()=>{this.endDrag()});a(this,"handleTouchStart",t=>{t.touches.length===1&&(t.preventDefault(),this.startDrag(t.touches[0].clientX))});a(this,"handleTouchMove",t=>{t.touches.length===1&&(t.preventDefault(),this.drag(t.touches[0].clientX))});a(this,"handleTouchEnd",()=>{this.endDrag()});this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.images=[],this.positionX=0,this.isDragging=!1,this.startX=0,this.container=document.getElementById(t),this.container&&(this.container.appendChild(this.canvas),this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight)}addImage(t,s,n,o,v){const p=new Image;p.src=t,this.images.push({img:p,x:s,y:n,width:o,height:v}),this.render()}render(){this.clearRect(),this.images.forEach(t=>{const s=t.x+this.positionX;this.ctx.drawImage(t.img,s,t.y,t.width,t.height)})}clearImages(){this.images=[]}clearRect(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}drawTick(t){this.render();const s=Math.ceil((Math.abs(this.positionX)+t.offsetX)/this.images[0].width)-1,n=t.offsetX,o=t.offsetY;this.ctx.strokeStyle="red",this.ctx.lineWidth=4,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(n-10,o),this.ctx.lineTo(n,o+10),this.ctx.lineTo(n+15,o-10),this.ctx.stroke(),_.emit("imageInfo",this.images[s])}addListener(){this.canvas&&(this.canvas.addEventListener("click",this.handleClick),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd))}startDrag(t){this.canvas.style.cursor="grabbing",this.canvas.style.userSelect="none",this.startX=t,this.isDragging=!0}drag(t){if(!this.isDragging)return;const s=t-this.startX,n=this.images.length*this.images[0].width-this.container.clientWidth;this.positionX=Math.max(Math.min(this.positionX+s,0),-n),this.startX=t,this.render()}endDrag(){this.canvas.style.cursor="grab",this.canvas.style.userSelect="auto",this.isDragging=!1}}const A={BASE_URL:"/vue-pure-admin/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CDN:"false",VITE_COMPRESSION:"none",VITE_HIDE_HOME:"false",VITE_PORT:"8848",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash"},z={class:"card-header"},N={class:"font-medium"},W={class:"flex flex-wrap"},j={id:"canvas-container","element-loading-text":"温馨提示：可左右拖拽图片并单击选取所需的帧图片",class:"w-full h-[200px] overflow-hidden mt-6"},m=200,Y=S({name:"VideoFrame",__name:"index",setup(c){const t=g(""),s=g(),n=g(),o=g(!1),{loadScript:v}=P(),{VITE_PUBLIC_PATH:p}=A,x=l=>`${p}wasm/${l}`,M=x("index.js"),T=x("capture.worker.js"),I=x("capture.worker.wasm");v({src:M}).then(l=>{l[0].message==="加载成功"&&(n.value=cheetahCapture.initCapture({workerPath:T,wasmPath:I}))}),L(()=>{s.value=new O("canvas-container"),_.on("imageInfo",l=>t.value=l.img.src)});function k(l){return t.value="",o.value=!0,s.value.clearImages(),n.value.then(e=>{e.capture({file:l,info:16,onChange:(h,{url:w})=>{s.value.addImage(w,m*h.url.length,0,m,m)},onSuccess:()=>{s.value.addListener(),s.value.drawTick({offsetX:m/2,offsetY:m/2}),o.value=!1},onError:()=>{o.value=!1}})}),!1}return R(()=>{_.off("imageInfo")}),(l,e)=>{const h=f("el-link"),w=f("el-upload"),D=f("el-image"),V=f("el-card"),C=U("loading");return E(),b(V,{shadow:"never"},{header:r(()=>[d("div",z,[d("span",N,[d("p",null,[e[1]||(e[1]=i(" 基于自定义编译 ")),u(h,{href:"https://github.com/FFmpeg/FFmpeg",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>e[0]||(e[0]=[i(" FFmpeg ")])),_:1}),e[2]||(e[2]=i(" 的截帧工具，支持MP4、MOV、AVI、WebM、MKV等主流格式，支持 H.264（AVC）、H.265（HEVC）、MPEG-2、MPEG-4、VP8、VP9、WMV3编码格式 "))]),e[11]||(e[11]=i(" 当然还可以支持更多视频格式，只要FFmpeg支持的，按理都能支持，您也可参考 ")),u(h,{href:"https://github.com/wanwu/cheetah-capture",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>e[3]||(e[3]=[i(" cheetah-capture ")])),_:1}),e[12]||(e[12]=i(" 和 ")),u(h,{href:"https://github.com/jordiwang/web-capture",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>e[4]||(e[4]=[i(" web-capture ")])),_:1}),e[13]||(e[13]=i(" 修改并编译wasm等文件（强烈推荐在Ubuntu系统进行编译） ")),d("p",null,[e[6]||(e[6]=i(" mac系统推荐安装 ")),u(h,{href:"https://github.com/utmapp/UTM",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>e[5]||(e[5]=[i(" UTM ")])),_:1}),e[7]||(e[7]=i(" 虚拟机，windows系统推荐安装VMware虚拟机 "))]),d("p",null,[e[9]||(e[9]=i(" 当然这只是一个视频帧截取工具，如果您想要更多操作可以研究下 ")),u(h,{href:"https://ffmpegwasm.netlify.app/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>e[8]||(e[8]=[i(" ffmpeg.wasm ")])),_:1}),e[10]||(e[10]=i(" ，它是基于 FFmpeg 的纯 WebAssembly / JavaScript 工具，可以在浏览器内进行视频和音频录制、转换和流式传输等，不过通过一些实践，对于时长较长的视频性能还是不太行，不过用于时长较短的短视频还是可以上生产的 "))])]),u(h,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/video-frame",target:"_blank"},{default:r(()=>e[14]||(e[14]=[i(" 代码位置 src/views/able/video-frame ")])),_:1})])]),default:r(()=>[d("div",W,[u(w,{drag:"","show-file-list":!1,accept:".mp4,.mov,.avi,.webm,.mkv","before-upload":k},{default:r(()=>e[15]||(e[15]=[d("div",{class:"el-upload__text"}," 可拖拽上传视频（默认截取16张帧图片，可在代码中自行修改） ",-1)])),_:1}),t.value?(E(),b(D,{key:0,src:t.value,"preview-src-list":Array.of(t.value),class:"w-[180px] h-[180px] ml-2 rounded-[6px]"},null,8,["src","preview-src-list"])):F("",!0)]),B(d("div",j,null,512),[[C,o.value]])]),_:1})}}}),K=H(Y,[["__scopeId","data-v-c9074338"]]);export{K as default};
