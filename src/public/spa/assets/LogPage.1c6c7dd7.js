import{Q as _}from"./QTooltip.678fbb16.js";import{v as S,u as B,r as Q,o as T,y as r,z as v,A as a,j as t,P as $,R as z,B as k,S as C,H as n,C as i,L as D,D as c,J as d,K as y,bA as q,bu as N,O as P}from"./index.6e21b7c1.js";import{Q as j,a as u}from"./QTable.e5fe6238.js";import{Q as V}from"./QTr.58df1756.js";import{Q as Y}from"./QPage.1b069372.js";import{u as A}from"./useFiles.9a1cdeeb.js";import"./QCircularProgress.2018b979.js";const H={class:"row items-center q-gutter-x-sm"},M=k("span",null,"\uD604\uB300 \uD3F4\uB354:",-1),L={key:0},R=["onClick"],E={key:2},G={key:0},w="D:\\Data\\log",ee={__name:"LogPage",setup(I){const{fnDownloadFile:x}=A(),g=S(),F=B(),m=Q([]),f=Q([]),b=async s=>{try{g.loading.show();const{data:o}=await P.get("/files",{params:{folder:s}}),e=o.files.filter(l=>l.type==="folder"),p=o.files.filter(l=>l.type!=="folder");if(m.value=[...e,...p],s!==w){f.value=s.split("\\");const l=f.value;l.pop(),m.value.unshift({name:"..",base:"..",fullpath:l.join("\\"),type:"folder"})}}catch{}finally{g.loading.hide()}},h=s=>{b(s)};return T(()=>{b(w)}),(s,o)=>(r(),v(Y,{padding:""},{default:a(()=>[t($,{flat:"",class:"q-pa-md q-my-md"},{default:a(()=>[t(z,{class:"row justify-between"},{default:a(()=>[k("div",H,[t(C,{class:"cursor-pointer",name:"home",size:"sm",color:"primary",onClick:o[0]||(o[0]=e=>h(w))},{default:a(()=>[t(_,null,{default:a(()=>[n("\uD648")]),_:1})]),_:1}),M,k("span",null,i(f.value.join("/")),1)]),t(D,{icon:"arrow_back",round:"",flat:"",size:"sm",color:"primary",onClick:o[1]||(o[1]=e=>c(F).push("/super"))},{default:a(()=>[t(_,null,{default:a(()=>[n("\uB3CC\uC544\uAC00\uAE30 ")]),_:1})]),_:1})]),_:1}),t(z,null,{default:a(()=>[t(j,{columns:[{name:"name",label:"Name",field:"name",align:"left",sortable:!0},{name:"ctime",label:"Time",field:"ctime",align:"center",sortable:!0},{name:"size",label:"Size",field:"size",align:"center",sortable:!0},{name:"actions",label:"Actions",align:"center"}],rows:m.value,pagination:{rowsPerPage:10}},{body:a(e=>[t(V,{props:e},{default:a(()=>[t(u,{key:"name",props:e},{default:a(()=>[e.row.type==="folder"?(r(),d("span",L,[t(C,{name:"folder_open",color:"primary",size:"20px"})])):y("",!0),e.row.type==="folder"?(r(),d("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:p=>h(e.row.fullpath)},i(e.row.base),9,R)):(r(),d("span",E,i(e.row.base),1))]),_:2},1032,["props"]),t(u,{style:{width:"3rem"}},{default:a(()=>[n(i(c(q).formatDate(e.row.ctime,"YYYY-MM-DD HH:mm:ss")),1)]),_:2},1024),t(u,{key:"size",props:e,style:{width:"3rem"}},{default:a(()=>[n(i(e.row.type!=="folder"?c(N).humanStorageSize(e.row.size):""),1)]),_:2},1032,["props"]),t(u,{key:"actions",props:e,style:{width:"3.5rem"}},{default:a(()=>[e.row.name!==".."?(r(),d("div",G,[e.row.type!=="folder"?(r(),v(D,{key:0,round:"",flat:"",icon:"download",color:"primary",size:"sm",onClick:p=>c(x)(e.row)},{default:a(()=>[t(_,null,{default:a(()=>[n("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:2},1032,["onClick"])):y("",!0)])):y("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows"])]),_:1})]),_:1})]),_:1}))}};export{ee as default};