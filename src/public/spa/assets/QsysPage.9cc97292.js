import{o as P,d as z,w as l,f as e,s as M,h as I,j as y,l as i,t as u,P as a,e as c,n as H,p as Q,Q as N,az as B,aL as D,a as V,r as O,z as R}from"./index.55b3bbb2.js";import{Q as k}from"./QTooltip.299970c8.js";import{Q as U}from"./QBadge.b4a60c83.js";import{c as T,Q as E,a as q}from"./QTable.67afda2b.js";import{Q as F}from"./QPage.014eb5d5.js";import{u as L}from"./use-quasar.b13b0874.js";import{f as C,q as S}from"./useQsys.7bb2f421.js";import{u as x,_ as j}from"./dialogConfirm.93f2a88e.js";import{Q as _,b as g,a as o}from"./QSelect.f25c5934.js";import{d as A}from"./date.d41674e9.js";import{Q as K,r as $,d as G}from"./useRules.e120aeec.js";import"./QMenu.8a5978a6.js";import"./QLinearProgress.fc14e763.js";import"./format.cbf00d5d.js";const Z=i("div",{class:"dialog-name"},"Q-SYS INFO",-1),J={class:"caption font-sans"},W={class:"q-px-md"},X={__name:"infoQsys",props:["device"],emits:[...x.emits],setup(s,{emit:v}){const{dialogRef:t,onDialogHide:f,onDialogOK:h,onDialogCancel:b}=x();return(w,n)=>(P(),z(N,{ref_key:"dialogRef",ref:t,onHide:c(f)},{default:l(()=>[e(M,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:l(()=>[e(I,{class:"row no-wrap q-gutter-sm items-center"},{default:l(()=>[e(y,{style:{"margin-top":"10px"},name:"img:qsys.svg",size:"1.5rem"}),i("div",null,[Z,i("div",J,u(s.device.deviceId),1)])]),_:1}),e(I,null,{default:l(()=>[i("div",W,[e(T,{dense:""},{default:l(()=>[e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.name),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("IP Address")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.ipaddress),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uC6B0\uC120\uC21C\uC704")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.idx),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uC5F0\uACB0 \uC0C1\uD0DC")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.connected),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uCF54\uC5B4 \uD50C\uB7AB\uD3FC")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.EngineStatus.Platform),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uCF54\uC5B4 \uC0C1\uD0DC")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.EngineStatus.State),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("PA \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(s.device.ZoneStatusConfigure),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(c(A).formatDate(s.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:l(()=>[e(g,null,{default:l(()=>[e(o,null,{default:l(()=>[a("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(o,{caption:""},{default:l(()=>[a(u(c(A).formatDate(s.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(H,{align:"right"},{default:l(()=>[e(Q,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:c(h)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};function Y(s=16){const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let t="";for(let f=0;f<s;f++)t+=v[parseInt(Math.random()*v.length)];return t}const ee={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},le={class:"q-px-sm q-gutter-y-xs"},ae={__name:"addDevice",props:["title","type"],emits:[...x.emits],setup(s,{emit:v}){const t=s,{dialogRef:f,onDialogCancel:h,onDialogHide:b,onDialogOK:w}=x(),n=B({name:"",deviceId:Y(12),ipaddress:""}),p=async d=>{try{return(await V.get(`/devices/${t.type}/exists`,{params:{value:d}})).data.result?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return(d,r)=>(P(),z(N,{ref_key:"dialogRef",ref:f,onHide:c(b)},{default:l(()=>[e(M,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:l(()=>[e(I,null,{default:l(()=>[i("div",ee,[e(y,{name:"add_circle",color:"primary",size:"sm"}),i("div",null,u(s.title),1)])]),_:1}),e(K,{onSubmit:r[4]||(r[4]=m=>c(w)(n))},{default:l(()=>[e(I,null,{default:l(()=>[i("div",le,[e(D,{modelValue:n.name,"onUpdate:modelValue":r[0]||(r[0]=m=>n.name=m),filled:"",dense:"",label:"\uC774\uB984",rules:[c($)],"lazy-rules":""},null,8,["modelValue","rules"]),e(D,{modelValue:n.deviceId,"onUpdate:modelValue":r[2]||(r[2]=m=>n.deviceId=m),filled:"",dense:"",label:"Device ID",rules:[c($),m=>p({deviceId:m})],"lazy-rules":""},{append:l(()=>[e(y,{class:"cursor-pointer",name:"refresh",color:"primary",onClick:r[1]||(r[1]=m=>n.deviceId=c(Y)(12))})]),_:1},8,["modelValue","rules"]),e(D,{modelValue:n.ipaddress,"onUpdate:modelValue":r[3]||(r[3]=m=>n.ipaddress=m),filled:"",dense:"",lable:"IP Address",rules:[c($),c(G),m=>p({ipaddress:m})],"lazy-rules":""},null,8,["modelValue","rules"])])]),_:1}),e(H,{align:"right"},{default:l(()=>[e(Q,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:c(h)},null,8,["onClick"]),e(Q,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},te={class:"borderd"},ne={class:"q-px-lg row no-wrap justify-between items-center bg-grey-2"},oe={class:"row no-wrap items-center q-gutter-x-sm"},se=i("div",{class:"font-main",style:{"font-size":"16px","font-weight":"bold"}},"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58",-1),de=["href"],we={__name:"QsysPage",setup(s){const v=[{name:"name",label:"Name",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"actions",label:"FN",align:"center"}],t=L(),f=O(""),h=()=>{t.dialog({component:ae,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uCD94\uAC00",type:"qsys"}}).onOk(async n=>{try{t.loading.show(),await V.post("/devices/qsys",{...n}),await C(),t.loading.hide()}catch(p){console.error(p),t.loading.hide()}})},b=n=>{t.dialog({component:X,componentProps:{device:n}})},w=n=>{t.dialog({component:j,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${n.name} ${n.ipaddress}`}}).onOk(async()=>{try{t.loading.show(),await V.delete("/devices/qsys",{data:{...n}}),await C(),t.loading.hide()}catch(p){t.loading.hide(),console.error(p)}})};return R(async()=>{t.loading.show(),await C(),console.log(S.value),t.loading.hide()}),(n,p)=>(P(),z(F,{padding:""},{default:l(()=>[i("div",te,[i("div",ne,[i("div",oe,[e(y,{name:"img:qsys.svg",color:"primary",size:"20px"}),se,i("div",null,[e(y,{class:"cursor-pointer",name:"add_circle",size:"xs",color:"primary",onClick:h},{default:l(()=>[e(k,null,{default:l(()=>[a("\uC7A5\uCE58 \uCD94\uAC00")]),_:1})]),_:1})])]),e(D,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=d=>f.value=d),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:l(()=>[e(y,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(E,{columns:v,rows:c(S),filter:f.value},{"body-cell-name":l(d=>[e(q,{props:d},{default:l(()=>[i("div",null,[e(U,{rounded:"",color:d.row.connected?"primary":"red-10"},null,8,["color"]),a(" "+u(d.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":l(d=>[e(q,{props:d},{default:l(()=>[i("a",{href:`http://${d.value}`,target:"_blank"},u(d.value),9,de)]),_:2},1032,["props"])]),"body-cell-actions":l(d=>[e(q,{props:d},{default:l(()=>[i("div",null,[e(Q,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:r=>b(d.row)},{default:l(()=>[e(k,null,{default:l(()=>[a("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e(Q,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:r=>w(d.row)},{default:l(()=>[e(k,null,{default:l(()=>[a("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1}))}};export{we as default};