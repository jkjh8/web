import{r as S,y as r,z as f,A as o,B as c,j as l,D as t,aT as g,H as s,K as m,J as y,S as V,C as F,L as i,bu as T,v as U,c as q,I as A,o as N,M as B}from"./index.cfc91872.js";import{Q as u}from"./QTooltip.73a6d0f8.js";import{Q as M}from"./QPage.e693b2fa.js";import{Q as P,a as D}from"./QTree.d44673df.js";import{Q as E,b as w,a as k}from"./QTable.0a7a5262.js";import{Q as z}from"./QTr.8404a340.js";import{u as x,f as d,b as Q,a as I}from"./useFiles.68fd2bb2.js";import{u as j}from"./usePlayer.14a6bb84.js";import"./QSlideTransition.b324ac5e.js";import"./QCircularProgress.a6abdac2.js";const R={class:"q-pa-sm"},Z={key:0},H=["onClick"],J={key:2},K={key:0},L={__name:"fileViewer",props:["selection","mode"],setup(b){const{fnPlayStart:h}=j(),{fnRenameFile:v,fnDownloadFile:C}=x(),p=S(25);return(_,n)=>(r(),f(D,{modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=e=>p.value=e)},{before:o(()=>[c("div",R,[l(P,{nodes:t(d).folders,selected:t(d).selectedFolder,"onUpdate:selected":[n[0]||(n[0]=e=>t(d).selectedFolder=e),t(Q)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])])]),after:o(()=>[l(E,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0},{name:"actions",label:"ACTIONS"}],rows:t(d).files,flat:"","row-key":"name",selection:b.selection,selected:t(d).selectedFiles,"onUpdate:selected":n[1]||(n[1]=e=>t(d).selectedFiles=e),pagination:{rowsPerPage:0},"hide-bottom":""},{header:o(e=>[l(z,{props:e},{default:o(()=>[l(w,{style:{width:"2rem"}},{default:o(()=>[l(g,{size:"sm",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(w,{key:"name",props:e},{default:o(()=>[s(" NAME ")]),_:2},1032,["props"]),l(w,{key:"size",props:e,style:{width:"2.5rem"}},{default:o(()=>[s(" SIZE ")]),_:2},1032,["props"]),l(w,{key:"actions",props:e,style:{width:"3.5rem"}},{default:o(()=>[s(" Actions ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:o(e=>[l(z,{props:e},{default:o(()=>[l(k,{style:{width:"2rem"}},{default:o(()=>[e.row.name!==".."?(r(),f(g,{key:0,size:"sm",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])):m("",!0)]),_:2},1024),l(k,{key:"name",props:e},{default:o(()=>[e.row.type==="folder"?(r(),y("span",Z,[l(V,{name:"folder_open",color:"primary",size:"20px"})])):m("",!0),e.row.type==="folder"?(r(),y("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:a=>t(Q)(e.row.fullpath)},F(e.row.name),9,H)):(r(),y("span",J,[s(F(e.row.name)+" ",1),b.mode!=="dialog"?(r(),f(i,{key:0,flat:"",round:"",size:"sm",color:"primary",icon:"play_arrow",onClick:a=>t(h)(e.row)},null,8,["onClick"])):m("",!0)]))]),_:2},1032,["props"]),l(k,{key:"size",props:e,style:{width:"2.5rem"}},{default:o(()=>[s(F(e.row.type!=="folder"?t(T).humanStorageSize(e.row.size):""),1)]),_:2},1032,["props"]),l(k,{key:"actions",props:e,style:{width:"3.5rem"}},{default:o(()=>[e.row.name!==".."?(r(),y("div",K,[e.row.type!=="folder"?(r(),f(i,{key:0,round:"",flat:"",icon:"download",color:"primary",size:"sm",onClick:a=>t(C)(e.row)},{default:o(()=>[l(u,null,{default:o(()=>[s("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:2},1032,["onClick"])):m("",!0),l(i,{round:"",flat:"",icon:"edit",color:"primary",size:"sm",onClick:a=>t(v)(e.row)},{default:o(()=>[l(u,null,{default:o(()=>[s("\uC774\uB984\uBC14\uAFB8\uAE30")]),_:1})]),_:2},1032,["onClick"])])):m("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selection","selected"])]),_:1},8,["modelValue"]))}},O={class:"borderd"},G={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},W={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},X=c("div",{class:"font-main"},"\uD30C\uC77C \uAD00\uB9AC",-1),Y={class:"row no-wrap"},ce={__name:"FilesPage",setup(b){const{fnMakeFolder:h,fnUploadFile:v,fnDeleteFiles:C,fnDownloadFiles:p}=x(),_=U(),n=q(()=>{var e;return((e=d.selectedFolder)==null?void 0:e.includes("/global"))&&!A.value.isAdmin});return N(async()=>{try{_.loading.show(),await I(),_.loading.hide()}catch(e){_.loading.hide(),console.error(e)}}),(e,a)=>(r(),f(M,{class:"page"},{default:o(()=>[c("div",O,[c("div",G,[c("div",W,[l(V,{name:"folder_open",color:"primary",size:"md"}),X]),c("div",Y,[l(i,{disable:n.value,round:"",flat:"",icon:"create_new_folder",color:"primary",size:"12px",onClick:a[0]||(a[0]=$=>t(h)(t(d).selectedFolder))},{default:o(()=>[l(u,null,{default:o(()=>[s("\uC0C8\uD3F4\uB354")]),_:1})]),_:1},8,["disable"]),l(i,{disable:n.value,round:"",flat:"",icon:"upload",color:"primary",size:"12px",onClick:a[1]||(a[1]=$=>t(v)(t(d).selectedFolder))},{default:o(()=>[l(u,null,{default:o(()=>[s("\uD30C\uC77C\uC5C5\uB85C\uB4DC")]),_:1})]),_:1},8,["disable"]),l(i,{round:"",flat:"",icon:"download",color:"primary",size:"12px",onClick:t(p)},{default:o(()=>[l(u,null,{default:o(()=>[s("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:1},8,["onClick"]),l(B,{vertical:"",spaced:"",inset:""}),l(i,{disable:n.value,round:"",flat:"",icon:"delete",color:"red",size:"12px",onClick:t(C)},{default:o(()=>[l(u,null,{default:o(()=>[s("\uC0AD\uC81C")]),_:1})]),_:1},8,["disable","onClick"])])]),l(L,{selection:"multiple",mode:"page"})])]),_:1}))}};export{ce as default};
