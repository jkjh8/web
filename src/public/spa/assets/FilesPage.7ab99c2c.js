import{r as $,y as n,z as f,A as l,B as c,j as o,D as t,bm as g,G as a,J as u,I as y,R as v,C as b,K as d,bq as S,v as U,o as q,L as T}from"./index.bbdda96c.js";import{Q as m}from"./QTooltip.55b1dfd9.js";import{Q as N}from"./QPage.208da520.js";import{u as x,a as B,b as i,c as F,Q as P,f as A}from"./useFiles.1e709b8b.js";import{Q as D,a as w,b as k}from"./QTd.d0f0d16c.js";import{Q as V}from"./QTr.62cfe7d0.js";import{u as E}from"./usePlayer.d0366c50.js";import"./QMenu.fc3ad9a8.js";import"./QSlideTransition.e5926b22.js";import"./DialogConfirm.685e7826.js";import"./QSelect.313109e8.js";import"./QLinearProgress.a3b11807.js";const I={class:"q-pa-sm"},M={key:0},R=["onClick"],j={key:2},Z={key:0},G={__name:"fileViewer",props:["selection","mode"],setup(h){const{fnPlayStart:C}=E(),{fnRenameFile:z,fnDownloadFile:Q}=x(),p=$(25);return(_,s)=>(n(),f(P,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=e=>p.value=e)},{before:l(()=>[c("div",I,[o(B,{nodes:t(i).folders,selected:t(i).selectedFolder,"onUpdate:selected":[s[0]||(s[0]=e=>t(i).selectedFolder=e),t(F)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])])]),after:l(()=>[o(D,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0},{name:"actions",label:"ACTIONS"}],rows:t(i).files,flat:"","row-key":"name",selection:h.selection,selected:t(i).selectedFiles,"onUpdate:selected":s[1]||(s[1]=e=>t(i).selectedFiles=e),pagination:{rowsPerPage:0},"hide-bottom":""},{header:l(e=>[o(V,{props:e},{default:l(()=>[o(w,{style:{width:"2rem"}},{default:l(()=>[o(g,{size:"sm",modelValue:e.selected,"onUpdate:modelValue":r=>e.selected=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(w,{key:"name",props:e},{default:l(()=>[a(" NAME ")]),_:2},1032,["props"]),o(w,{key:"size",props:e,style:{width:"2.5rem"}},{default:l(()=>[a(" SIZE ")]),_:2},1032,["props"]),o(w,{key:"actions",props:e,style:{width:"3.5rem"}},{default:l(()=>[a(" Actions ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:l(e=>[o(V,{props:e},{default:l(()=>[o(k,{style:{width:"2rem"}},{default:l(()=>[e.row.name!==".."?(n(),f(g,{key:0,size:"sm",modelValue:e.selected,"onUpdate:modelValue":r=>e.selected=r},null,8,["modelValue","onUpdate:modelValue"])):u("",!0)]),_:2},1024),o(k,{key:"name",props:e},{default:l(()=>[e.row.type==="folder"?(n(),y("span",M,[o(v,{name:"folder_open",color:"primary",size:"20px"})])):u("",!0),e.row.type==="folder"?(n(),y("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:r=>t(F)(e.row.fullpath)},b(e.row.name),9,R)):(n(),y("span",j,[a(b(e.row.name)+" ",1),h.mode!=="dialog"?(n(),f(d,{key:0,flat:"",round:"",size:"sm",color:"primary",icon:"play_arrow",onClick:r=>t(C)(e.row)},null,8,["onClick"])):u("",!0)]))]),_:2},1032,["props"]),o(k,{key:"size",props:e,style:{width:"2.5rem"}},{default:l(()=>[a(b(e.row.type!=="folder"?t(S).humanStorageSize(e.row.size):""),1)]),_:2},1032,["props"]),o(k,{key:"actions",props:e,style:{width:"3.5rem"}},{default:l(()=>[e.row.name!==".."?(n(),y("div",Z,[e.row.type!=="folder"?(n(),f(d,{key:0,round:"",flat:"",icon:"download",color:"primary",size:"sm",onClick:r=>t(Q)(e.row)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:2},1032,["onClick"])):u("",!0),o(d,{round:"",flat:"",icon:"edit",color:"primary",size:"sm",onClick:r=>t(z)(e.row)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uC774\uB984\uBC14\uAFB8\uAE30")]),_:1})]),_:2},1032,["onClick"])])):u("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selection","selected"])]),_:1},8,["modelValue"]))}},J={class:"borderd"},K={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},L={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},O=c("div",{class:"font-main"},"\uD30C\uC77C \uAD00\uB9AC",-1),H={class:"row no-wrap"},ie={__name:"FilesPage",setup(h){const{fnMakeFolder:C,fnUploadFile:z,fnDeleteFiles:Q,fnDownloadFiles:p}=x(),_=U();return q(async()=>{try{_.loading.show(),await A(),_.loading.hide()}catch(s){_.loading.hide(),console.error(s)}}),(s,e)=>(n(),f(N,{class:"page"},{default:l(()=>[c("div",J,[c("div",K,[c("div",L,[o(v,{name:"folder_open",color:"primary",size:"md"}),O]),c("div",H,[o(d,{round:"",flat:"",icon:"create_new_folder",color:"primary",size:"12px",onClick:t(C)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uC0C8\uD3F4\uB354")]),_:1})]),_:1},8,["onClick"]),o(d,{round:"",flat:"",icon:"upload",color:"primary",size:"12px",onClick:t(z)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uD30C\uC77C\uC5C5\uB85C\uB4DC")]),_:1})]),_:1},8,["onClick"]),o(d,{round:"",flat:"",icon:"download",color:"primary",size:"12px",onClick:t(p)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:1},8,["onClick"]),o(T,{vertical:"",spaced:"",inset:""}),o(d,{round:"",flat:"",icon:"delete",color:"red",size:"12px",onClick:t(Q)},{default:l(()=>[o(m,null,{default:l(()=>[a("\uC0AD\uC81C")]),_:1})]),_:1},8,["onClick"])])]),o(G,{selection:"multiple",mode:"page"})])]),_:1}))}};export{ie as default};
