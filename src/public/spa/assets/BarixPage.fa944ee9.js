import{v as Q,r as B,o as C,y as $,z,A as e,B as n,j as o,R as m,G as l,aO as V,D as p,C as h,K as u,aR as f,aT as w}from"./index.bbdda96c.js";import{Q as _}from"./QTooltip.55b1dfd9.js";import{Q as q}from"./QBadge.2982b99f.js";import{Q as N,b as y}from"./QTd.d0f0d16c.js";import{Q as P}from"./QPage.208da520.js";import{c as T,_ as O,a as S}from"./columns.2132afe3.js";import{_ as D}from"./DialogConfirm.685e7826.js";import{u as I,f as c,b as j}from"./useBarix.6a8b914b.js";import{u as A}from"./useNotify.ede93a06.js";import"./QMenu.fc3ad9a8.js";import"./QSelect.313109e8.js";import"./QLinearProgress.a3b11807.js";import"./useRules.b7aedcb1.js";const E={class:"borderd"},G={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},R={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},K=n("div",{class:"font-main"},"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30",-1),M=["href"],sa={__name:"BarixPage",setup(U){const r=Q(),{fnNotiError:i}=A(),{fnBarixInfo:b}=I(),d=B(""),x=()=>{r.dialog({component:O,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00",type:"barix"}}).onOk(async t=>{try{r.loading.show(),await f.post("/devices/barix",{...t}),w("barix:get",t.ipaddress)}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})},v=t=>{r.dialog({component:S,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815",type:"barix",device:t}}).onOk(async s=>{try{r.loading.show(),await f.put("/devices/barix",{...s}),w("barix:get",s.ipaddress)}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})},k=t=>{r.dialog({component:D,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${t.name} ${t.ipaddress}`}}).onOk(async()=>{try{r.loading.show(),await f.delete("/devices/barix",{data:{...t}})}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC0AD\uC81C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})};return C(async()=>{try{r.loading.show(),await c()}catch{i("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130 \uC624\uB958","\uC11C\uBC84\uB85C \uBD80\uD130 \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{r.loading.hide()}}),(t,s)=>($(),z(P,{class:"page"},{default:e(()=>[n("div",E,[n("div",G,[n("div",R,[o(m,{name:"img:barix.svg",color:"primary",size:"20px"}),K,o(m,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:x},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC7A5\uCE58\uCD94\uAC00")]),_:1})]),_:1})]),o(V,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=a=>d.value=a),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:e(()=>[o(m,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),o(N,{columns:p(T),rows:p(j),filter:d.value},{"body-cell-name":e(a=>[o(y,{props:a},{default:e(()=>[n("div",null,[o(q,{rounded:"",color:a.row.status?"primary":"red-10"},null,8,["color"]),l(" "+h(a.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":e(a=>[o(y,{props:a},{default:e(()=>[n("a",{href:`http://${a.value}`,target:"_blank"},h(a.value),9,M)]),_:2},1032,["props"])]),"body-cell-actions":e(a=>[o(y,{props:a},{default:e(()=>[n("div",null,[o(u,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:g=>p(b)(a.row)},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),o(u,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:g=>v(a.row)},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),o(u,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:g=>k(a.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{sa as default};
