import{v as C,aO as B,ch as I,r as z,o as P,b7 as l,y as V,z as N,A as o,B as s,j as e,S as p,H as i,aV as q,D as _,aY as D,C as b,L as d,O as y,a$ as h,_ as O,ci as S}from"./index.80d8777d.js";import{Q as f}from"./QTooltip.42b6753b.js";import{Q as T}from"./QBadge.7ae12450.js";import{Q as A,a as g}from"./QTable.c6e750e4.js";import{Q as j}from"./QPage.c141d28c.js";import{_ as E,a as R}from"./editDevice.80265e1b.js";import"./QForm.62ad5efc.js";const G=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"port",label:"Port",align:"center",field:"port",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],H={class:"borderd"},L={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},M={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},U=s("div",{class:"font-main"},"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30",-1),Y=["href"],oe={__name:"BarixPage",setup(F){const t=C(),{fnNotiInfo:w,fnNotiError:c}=B(),{fnBarixInfo:x}=I(),m=z(""),v=()=>{t.dialog({component:E,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00",type:"barix"}}).onOk(async r=>{try{t.loading.show(),await y.post("/devices/barix",{...r}),h("barix:get",r.ipaddress)}catch{c("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uCD94\uAC00 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await l(),t.loading.hide()}})},k=r=>{t.dialog({component:R,componentProps:{title:"\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815",type:"barix",device:r}}).onOk(async n=>{try{t.loading.show(),await y.put("/devices/barix",{...n}),h("barix:get",n.ipaddress)}catch{c("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC218\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await l(),t.loading.hide()}})},Q=r=>{t.dialog({component:O,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${r.name} ${r.ipaddress}`}}).onOk(async()=>{try{t.loading.show(),await y.delete("/devices/barix",{data:{...r}})}catch{c("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC0AD\uC81C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694")}finally{await l(),t.loading.hide()}})},$=async r=>{w(`${r.name}\uC758 \uC815\uBCF4\uB97C \uAC31\uC2E0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),await S(r),setTimeout(async()=>{await l()},1e3)};return P(async()=>{try{t.loading.show(),await l()}catch{c("\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130 \uC624\uB958","\uC11C\uBC84\uB85C \uBD80\uD130 \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.")}finally{t.loading.hide()}}),(r,n)=>(V(),N(j,{class:"page"},{default:o(()=>[s("div",H,[s("div",L,[s("div",M,[e(p,{name:"img:barix.svg",color:"primary",size:"20px"}),U,e(p,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:v},{default:o(()=>[e(f,null,{default:o(()=>[i("\uC7A5\uCE58\uCD94\uAC00")]),_:1})]),_:1})]),e(q,{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=a=>m.value=a),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:o(()=>[e(p,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(A,{columns:_(G),rows:_(D),filter:m.value},{"body-cell-name":o(a=>[e(g,{props:a},{default:o(()=>[s("div",null,[e(T,{rounded:"",color:a.row.status?"primary":"red-10"},null,8,["color"]),i(" "+b(a.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":o(a=>[e(g,{props:a},{default:o(()=>[s("a",{href:`http://${a.value}`,target:"_blank"},b(a.value),9,Y)]),_:2},1032,["props"])]),"body-cell-actions":o(a=>[e(g,{props:a},{default:o(()=>[s("div",null,[e(d,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:u=>_(x)(a.row)},{default:o(()=>[e(f,null,{default:o(()=>[i("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e(d,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:u=>k(a.row)},{default:o(()=>[e(f,null,{default:o(()=>[i("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(d,{round:"",flat:"",color:"primary",icon:"refresh",size:"sm",onClick:u=>$(a.row)},{default:o(()=>[e(f,null,{default:o(()=>[i("\uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"]),e(d,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:u=>Q(a.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{oe as default};
