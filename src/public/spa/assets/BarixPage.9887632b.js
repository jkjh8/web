import{A as Q,r as C,o as $,C as B,D as P,E as e,G as i,j as o,W as m,K as l,aP as V,I as p,H as h,O as u,aS as f,aU as w}from"./index.306154ca.js";import{Q as _}from"./QTooltip.243cc7ea.js";import{Q as q}from"./QBadge.c6fcd654.js";import{Q as z,b as y}from"./QTd.eaab301b.js";import{Q as N}from"./QPage.3602875d.js";import{c as S,_ as I,a as O}from"./columns.2d670d67.js";import{_ as T}from"./DialogConfirm.496ecc61.js";import{u as D,f as c,b as E}from"./useBarix.3cecfd9a.js";import{u as j}from"./useNotify.a7b62442.js";import"./QMenu.9e468c3d.js";import"./QSelect.0739299d.js";import"./QLinearProgress.65cebb13.js";import"./QForm.ca754488.js";import"./useRules.f4b4b4b1.js";const A={class:"borderd"},G={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},U={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},H=i("div",{class:"font-main"},"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30",-1),K=["href"],ia={__name:"BarixPage",setup(M){const r=Q(),{fnNotiError:n}=j(),{fnBarixInfo:b}=D(),d=C(""),x=()=>{r.dialog({component:I,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00",type:"barix"}}).onOk(async t=>{try{r.loading.show(),await f.post("/devices/barix",{...t}),w("barix:get",t.ipaddress)}catch{n("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})},v=t=>{r.dialog({component:O,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815",type:"barix",device:t}}).onOk(async s=>{try{r.loading.show(),await f.put("/devices/barix",{...s}),w("barix:get",s.ipaddress)}catch{n("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})},k=t=>{r.dialog({component:T,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${t.name} ${t.ipaddress}`}}).onOk(async()=>{try{r.loading.show(),await f.delete("/devices/barix",{data:{...t}})}catch{n("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC0AD\uC81C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await c(),r.loading.hide()}})};return $(async()=>{try{r.loading.show(),await c()}catch{n("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130 \uC624\uB958","\uC11C\uBC84\uB85C \uBD80\uD130 \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{r.loading.hide()}}),(t,s)=>(B(),P(N,{class:"page"},{default:e(()=>[i("div",A,[i("div",G,[i("div",U,[o(m,{name:"img:barix.svg",color:"primary",size:"20px"}),H,o(m,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:x},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC7A5\uCE58\uCD94\uAC00")]),_:1})]),_:1})]),o(V,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=a=>d.value=a),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:e(()=>[o(m,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),o(z,{columns:p(S),rows:p(E),filter:d.value},{"body-cell-name":e(a=>[o(y,{props:a},{default:e(()=>[i("div",null,[o(q,{rounded:"",color:a.row.status?"primary":"red-10"},null,8,["color"]),l(" "+h(a.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":e(a=>[o(y,{props:a},{default:e(()=>[i("a",{href:`http://${a.value}`,target:"_blank"},h(a.value),9,K)]),_:2},1032,["props"])]),"body-cell-actions":e(a=>[o(y,{props:a},{default:e(()=>[i("div",null,[o(u,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:g=>p(b)(a.row)},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),o(u,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:g=>v(a.row)},{default:e(()=>[o(_,null,{default:e(()=>[l("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),o(u,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:g=>k(a.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{ia as default};
