import{useDept as P}from"./hook-DDRwH6ug.js";import{d as U,P as z}from"./refresh-B-2Qrozm.js";import{u as i}from"./hooks-Dqy3JVgj.js";import{d as A}from"./delete-Ce0TSdK5.js";import{d as E}from"./edit-pen-Ci7W0xNM.js";import{d as y}from"./add-circle-line-DOJqVT3s.js";import{d as L,a as C,e as a,f as O,k as h,i as t,w as l,u as e,h as s,_ as j}from"./index-6IIBtBRm.js";import"./form.vue_vue_type_script_setup_true_lang-cXsD2BK_.js";import"./index-CNBxwBrQ.js";import"./hooks-CuV7lgn-.js";import"./system-BtbWnPYl.js";import"./sortable.esm-VSgMS8pS.js";import"./epTheme-DTwrWYn8.js";import"./collapse-D3yCMSR6.js";const q={class:"main"},G=L({name:"SystemDept",__name:"index",setup(H){const c=C(),d=C(),{form:m,loading:_,columns:x,dataList:R,onSearch:b,resetForm:$,openDialog:f,handleDelete:V,handleSelectionChange:w}=P();function S(){d.value.setAdaptive()}return(J,o)=>{var g;const B=a("el-input"),u=a("el-form-item"),v=a("el-option"),D=a("el-select"),r=a("el-button"),T=a("el-form"),I=a("el-popconfirm"),F=a("pure-table");return O(),h("div",q,[t(T,{ref_key:"formRef",ref:c,inline:!0,model:e(m),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:l(()=>[t(u,{label:"部门名称：",prop:"name"},{default:l(()=>[t(B,{modelValue:e(m).name,"onUpdate:modelValue":o[0]||(o[0]=n=>e(m).name=n),placeholder:"请输入部门名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),t(u,{label:"状态：",prop:"status"},{default:l(()=>[t(D,{modelValue:e(m).status,"onUpdate:modelValue":o[1]||(o[1]=n=>e(m).status=n),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[t(v,{label:"启用",value:1}),t(v,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:l(()=>[t(r,{type:"primary",icon:e(i)("ri:search-line"),loading:e(_),onClick:e(b)},{default:l(()=>o[4]||(o[4]=[s(" 搜索 ")])),_:1},8,["icon","loading","onClick"]),t(r,{icon:e(i)(e(U)),onClick:o[2]||(o[2]=n=>e($)(c.value))},{default:l(()=>o[5]||(o[5]=[s(" 重置 ")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),t(e(z),{title:"部门管理（仅演示，操作后不生效）",columns:e(x),tableRef:(g=d.value)==null?void 0:g.getTableRef(),onRefresh:e(b),onFullscreen:S},{buttons:l(()=>[t(r,{type:"primary",icon:e(i)(e(y)),onClick:o[3]||(o[3]=n=>e(f)())},{default:l(()=>o[6]||(o[6]=[s(" 新增部门 ")])),_:1},8,["icon"])]),default:l(({size:n,dynamicColumns:N})=>[t(F,{ref_key:"tableRef",ref:d,adaptive:"",adaptiveConfig:{offsetBottom:45},"align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:e(_),size:n,data:e(R),columns:N,"header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(w)},{operation:l(({row:p})=>[t(r,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(i)(e(E)),onClick:k=>e(f)("修改",p)},{default:l(()=>o[7]||(o[7]=[s(" 修改 ")])),_:2},1032,["size","icon","onClick"]),t(r,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(i)(e(y)),onClick:k=>e(f)("新增",{parentId:p.id})},{default:l(()=>o[8]||(o[8]=[s(" 新增 ")])),_:2},1032,["size","icon","onClick"]),t(I,{title:`是否确认删除部门名称为${p.name}的这条数据`,onConfirm:k=>e(V)(p)},{reference:l(()=>[t(r,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(i)(e(A))},{default:l(()=>o[9]||(o[9]=[s(" 删除 ")])),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","onSelectionChange"])]),_:1},8,["columns","tableRef","onRefresh"])])}}}),ie=j(G,[["__scopeId","data-v-a781441c"]]);export{ie as default};