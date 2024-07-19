import{A as Q,r as C,o as $,C as B,D as I,E as o,G as n,j as a,V as m,K as i,b7 as V,I as p,H as y,O as u,b9 as f,bb as h}from"./index.817f2c12.js";import{Q as _}from"./QSelect.bd7cb079.js";import{Q as P}from"./QBadge.7cce5dfc.js";import{Q as q,a as b}from"./QTable.e4614604.js";import{Q as z}from"./QPage.433c92d9.js";import{_ as D,a as N}from"./editDevice.812b6272.js";import{_ as O}from"./DialogConfirm.f61a267f.js";import{u as S,f as d,b as T}from"./useBarix.38381ad3.js";import{u as A}from"./useNotify.6ad2b856.js";import"./QMenu.30a7d6a8.js";import"./useRules.4e9d1973.js";const E=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],j={class:"borderd"},G={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},H={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},K=n("div",{class:"font-main"},"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30",-1),M=["href"],re={__name:"BarixPage",setup(U){const r=Q(),{fnNotiError:l}=A(),{fnBarixInfo:w}=S(),c=C(""),x=()=>{r.dialog({component:D,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00",type:"barix"}}).onOk(async t=>{try{r.loading.show(),await f.post("/devices/barix",{...t}),h("barix:get",t.ipaddress)}catch{l("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})},v=t=>{r.dialog({component:N,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815",type:"barix",device:t}}).onOk(async s=>{try{r.loading.show(),await f.put("/devices/barix",{...s}),h("barix:get",s.ipaddress)}catch{l("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})},k=t=>{r.dialog({component:O,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${t.name} ${t.ipaddress}`}}).onOk(async()=>{try{r.loading.show(),await f.delete("/devices/barix",{data:{...t}})}catch{l("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC0AD\uC81C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})};return $(async()=>{try{r.loading.show(),await d()}catch{l("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130 \uC624\uB958","\uC11C\uBC84\uB85C \uBD80\uD130 \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{r.loading.hide()}}),(t,s)=>(B(),I(z,{class:"page"},{default:o(()=>[n("div",j,[n("div",G,[n("div",H,[a(m,{name:"img:barix.svg",color:"primary",size:"20px"}),K,a(m,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:x},{default:o(()=>[a(_,null,{default:o(()=>[i("\uC7A5\uCE58\uCD94\uAC00")]),_:1})]),_:1})]),a(V,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:o(()=>[a(m,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),a(q,{columns:p(E),rows:p(T),filter:c.value},{"body-cell-name":o(e=>[a(b,{props:e},{default:o(()=>[n("div",null,[a(P,{rounded:"",color:e.row.status?"primary":"red-10"},null,8,["color"]),i(" "+y(e.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":o(e=>[a(b,{props:e},{default:o(()=>[n("a",{href:`http://${e.value}`,target:"_blank"},y(e.value),9,M)]),_:2},1032,["props"])]),"body-cell-actions":o(e=>[a(b,{props:e},{default:o(()=>[n("div",null,[a(u,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:g=>p(w)(e.row)},{default:o(()=>[a(_,null,{default:o(()=>[i("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),a(u,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:g=>v(e.row)},{default:o(()=>[a(_,null,{default:o(()=>[i("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),a(u,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:g=>k(e.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{re as default};
