import{aM as V,k as z,y as p,z as f,A as r,j as d,P as U,R as g,B as n,S as k,C as q,D as t,aS as o,be as u,cj as _,K as x,aU as w,L as b,U as Q,O as P,o as R}from"./index.5fc2b29f.js";import{Q as $}from"./QForm.f76a7d0f.js";function C(i=16){const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let s="";for(let c=0;c<i;c++)s+=v[parseInt(Math.random()*v.length)];return s}const S={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},B={class:"q-px-sm q-gutter-y-xs"},j={__name:"addDevice",props:["title","type"],emits:[...V.emits],setup(i,{emit:v}){const s=i,{dialogRef:c,onDialogCancel:I,onDialogOK:D}=V(),a=z({name:"",deviceId:C(12),ipaddress:"",port:3030,amx:""}),m=async y=>{try{return(await P.get(`/devices/${s.type}/exists`,{params:{value:y}})).data.result?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return(y,e)=>(p(),f(Q,{ref_key:"dialogRef",ref:c},{default:r(()=>[d(U,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:r(()=>[d(g,null,{default:r(()=>[n("div",S,[d(k,{name:"add_circle",color:"primary",size:"sm"}),n("div",null,q(i.title),1)])]),_:1}),d($,{onSubmit:e[6]||(e[6]=l=>t(D)(a))},{default:r(()=>[d(g,null,{default:r(()=>[n("div",B,[d(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.name=l),filled:"",dense:"",label:"\uC774\uB984",rules:[t(u)],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.deviceId,"onUpdate:modelValue":e[2]||(e[2]=l=>a.deviceId=l),filled:"",dense:"",label:"Device ID",rules:[t(u),l=>m({deviceId:l})],"lazy-rules":""},{append:r(()=>[d(k,{class:"cursor-pointer",name:"refresh",color:"primary",onClick:e[1]||(e[1]=l=>a.deviceId=t(C)(12))})]),_:1},8,["modelValue","rules"]),d(o,{modelValue:a.ipaddress,"onUpdate:modelValue":e[3]||(e[3]=l=>a.ipaddress=l),filled:"",dense:"",label:"IP Address",rules:[t(u),t(_),l=>m({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"]),i.type==="barix"?(p(),f(o,{key:0,modelValue:a.port,"onUpdate:modelValue":e[4]||(e[4]=l=>a.port=l),filled:"",dense:"",label:"Port",type:"number",rules:[t(u)],"lazy-rules":""},null,8,["modelValue","rules"])):x("",!0),i.type==="qsys"?(p(),f(o,{key:1,modelValue:a.amx,"onUpdate:modelValue":e[5]||(e[5]=l=>a.amx=l),filled:"",dense:"",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",rules:[l=>m({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"])):x("",!0)])]),_:1}),d(w,{align:"right"},{default:r(()=>[d(b,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:t(I)},null,8,["onClick"]),d(b,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},512))}},A={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},M=n("div",{class:"text-caption"},"DeviceID\uB294 \uC218\uC815\uC544 \uC548\uB429\uB2C8\uB2E4.",-1),K={class:"q-px-sm q-gutter-y-xs"},E={__name:"editDevice",props:["title","type","device"],emits:[...V.emits],setup(i,{emit:v}){const s=i,{dialogRef:c,onDialogCancel:I,onDialogOK:D}=V(),a=z({_id:"",deviceId:"",name:"",deviceId:C(12),ipaddress:"",port:0,amx:""}),m=async y=>{try{const e=await P.get(`/devices/${s.type}/exists`,{params:{value:y}});return e.data&&e.data.result&&e.data.result._id!==s.device._id?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return R(()=>{a._id=s.device._id,a.deviceId=s.device.deviceId,a.name=s.device.name,a.ipaddress=s.device.ipaddress,a.deviceId=s.device.deviceId,a.amx=s.device.amx,a.port=s.device.port}),(y,e)=>(p(),f(Q,{ref_key:"dialogRef",ref:c},{default:r(()=>[d(U,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:r(()=>[d(g,null,{default:r(()=>[n("div",A,[d(k,{name:"edit",color:"primary",size:"sm"}),n("div",null,[n("div",null,q(i.title),1),M])])]),_:1}),d($,{onSubmit:e[5]||(e[5]=l=>t(D)(a))},{default:r(()=>[d(g,null,{default:r(()=>[n("div",K,[d(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.name=l),filled:"",dense:"",label:"\uC774\uB984",rules:[t(u)],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.deviceId,"onUpdate:modelValue":e[1]||(e[1]=l=>a.deviceId=l),disable:"",filled:"",dense:"",label:"Device ID",rules:[t(u),l=>m({deviceId:l})],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.ipaddress,"onUpdate:modelValue":e[2]||(e[2]=l=>a.ipaddress=l),filled:"",dense:"",label:"IP Address",rules:[t(u),t(_),l=>m({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"]),i.type==="barix"?(p(),f(o,{key:0,modelValue:a.port,"onUpdate:modelValue":e[3]||(e[3]=l=>a.port=l),filled:"",dense:"",label:"Port",type:"number",rules:[t(u)],"lazy-rules":""},null,8,["modelValue","rules"])):x("",!0),i.type==="qsys"?(p(),f(o,{key:1,modelValue:a.amx,"onUpdate:modelValue":e[4]||(e[4]=l=>a.amx=l),filled:"",dense:"",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",rules:[l=>m({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"])):x("",!0)])]),_:1}),d(w,{align:"right"},{default:r(()=>[d(b,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:t(I)},null,8,["onClick"]),d(b,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},512))}};export{j as _,E as a};
