import{v as Q,r as B,o as C,y as $,z as I,A as o,B as n,j as a,P as m,G as l,aS as P,D as p,C as b,K as u,aU as f,aW as h}from"./index.17e721b0.js";import{Q as _}from"./QTooltip.88a93751.js";import{Q as z}from"./QBadge.c6602fc1.js";import{Q as V,a as g}from"./QTable.32483141.js";import{Q as q}from"./QPage.442f4971.js";import{_ as D,a as N}from"./editDevice.de442ba4.js";import{_ as S}from"./DialogConfirm.35f64ac2.js";import{u as T,f as d,b as A}from"./useBarix.3690d1cf.js";import{u as O}from"./useNotify.f37af5e0.js";import"./position-engine.1e516b6f.js";import"./QSelect.2196a31a.js";import"./QMenu.cc4df5b2.js";import"./QForm.3a30f02e.js";import"./useRules.779a940e.js";const j=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],E={class:"borderd"},G={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},U={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},K=n("div",{class:"font-main"},"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30",-1),M=["href"],ne={__name:"BarixPage",setup(W){const r=Q(),{fnNotiError:i}=O(),{fnBarixInfo:w}=T(),c=B(""),v=()=>{r.dialog({component:D,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00",type:"barix"}}).onOk(async t=>{try{r.loading.show(),await f.post("/devices/barix",{...t}),h("barix:get",t.ipaddress)}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})},x=t=>{r.dialog({component:N,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815",type:"barix",device:t}}).onOk(async s=>{try{r.loading.show(),await f.put("/devices/barix",{...s}),h("barix:get",s.ipaddress)}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})},k=t=>{r.dialog({component:S,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${t.name} ${t.ipaddress}`}}).onOk(async()=>{try{r.loading.show(),await f.delete("/devices/barix",{data:{...t}})}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC0AD\uC81C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await d(),r.loading.hide()}})};return C(async()=>{try{r.loading.show(),await d()}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130 \uC624\uB958","\uC11C\uBC84\uB85C \uBD80\uD130 \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{r.loading.hide()}}),(t,s)=>($(),I(q,{class:"page"},{default:o(()=>[n("div",E,[n("div",G,[n("div",U,[a(m,{name:"img:barix.svg",color:"primary",size:"20px"}),K,a(m,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:v},{default:o(()=>[a(_,null,{default:o(()=>[l("\uC7A5\uCE58\uCD94\uAC00")]),_:1})]),_:1})]),a(P,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:o(()=>[a(m,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),a(V,{columns:p(j),rows:p(A),filter:c.value},{"body-cell-name":o(e=>[a(g,{props:e},{default:o(()=>[n("div",null,[a(z,{rounded:"",color:e.row.status?"primary":"red-10"},null,8,["color"]),l(" "+b(e.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":o(e=>[a(g,{props:e},{default:o(()=>[n("a",{href:`http://${e.value}`,target:"_blank"},b(e.value),9,M)]),_:2},1032,["props"])]),"body-cell-actions":o(e=>[a(g,{props:e},{default:o(()=>[n("div",null,[a(u,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:y=>p(w)(e.row)},{default:o(()=>[a(_,null,{default:o(()=>[l("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),a(u,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:y=>x(e.row)},{default:o(()=>[a(_,null,{default:o(()=>[l("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),a(u,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:y=>k(e.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{ne as default};