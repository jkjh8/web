import{ay as v,k as C,y,z as g,A as i,j as d,N as q,O as V,B as n,P as b,C as z,D as s,aS as o,J as U,az as w,K as x,R as Q,aU as $,o as B}from"./index.97053f43.js";import{Q as H}from"./QForm.a027b776.js";import{r as c,e as R}from"./useRules.bd7fec77.js";function k(r=16){const f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let t="";for(let m=0;m<r;m++)t+=f[parseInt(Math.random()*f.length)];return t}const P={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},S={class:"q-px-sm q-gutter-y-xs"},j={__name:"addDevice",props:["title","type"],emits:[...v.emits],setup(r,{emit:f}){const t=r,{dialogRef:m,onDialogCancel:I,onDialogHide:D,onDialogOK:_}=v(),a=C({name:"",deviceId:k(12),ipaddress:"",amx:""}),u=async p=>{try{return(await $.get(`/devices/${t.type}/exists`,{params:{value:p}})).data.result?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return(p,e)=>(y(),g(Q,{ref_key:"dialogRef",ref:m,onHide:s(D)},{default:i(()=>[d(q,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:i(()=>[d(V,null,{default:i(()=>[n("div",P,[d(b,{name:"add_circle",color:"primary",size:"sm"}),n("div",null,z(r.title),1)])]),_:1}),d(H,{onSubmit:e[5]||(e[5]=l=>s(_)(a))},{default:i(()=>[d(V,null,{default:i(()=>[n("div",S,[d(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.name=l),filled:"",dense:"",label:"\uC774\uB984",rules:[s(c)],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.deviceId,"onUpdate:modelValue":e[2]||(e[2]=l=>a.deviceId=l),filled:"",dense:"",label:"Device ID",rules:[s(c),l=>u({deviceId:l})],"lazy-rules":""},{append:i(()=>[d(b,{class:"cursor-pointer",name:"refresh",color:"primary",onClick:e[1]||(e[1]=l=>a.deviceId=s(k)(12))})]),_:1},8,["modelValue","rules"]),d(o,{modelValue:a.ipaddress,"onUpdate:modelValue":e[3]||(e[3]=l=>a.ipaddress=l),filled:"",dense:"",label:"IP Address",rules:[s(c),s(R),l=>u({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"]),r.type==="qsys"?(y(),g(o,{key:0,modelValue:a.amx,"onUpdate:modelValue":e[4]||(e[4]=l=>a.amx=l),filled:"",dense:"",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",rules:[l=>u({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"])):U("",!0)])]),_:1}),d(w,{align:"right"},{default:i(()=>[d(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(I)},null,8,["onClick"]),d(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},A={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},N=n("div",{class:"text-caption"},"DeviceID\uB294 \uC218\uC815\uC544 \uC548\uB429\uB2C8\uB2E4.",-1),K={class:"q-px-sm q-gutter-y-xs"},F={__name:"editDevice",props:["title","type","device"],emits:[...v.emits],setup(r,{emit:f}){const t=r,{dialogRef:m,onDialogCancel:I,onDialogHide:D,onDialogOK:_}=v(),a=C({_id:"",deviceId:"",name:"",deviceId:k(12),ipaddress:"",amx:""}),u=async p=>{try{const e=await $.get(`/devices/${t.type}/exists`,{params:{value:p}});return e.data&&e.data.result&&e.data.result._id!==t.device._id?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return B(()=>{a._id=t.device._id,a.deviceId=t.device.deviceId,a.name=t.device.name,a.ipaddress=t.device.ipaddress,a.deviceId=t.device.deviceId,a.amx=t.device.amx}),(p,e)=>(y(),g(Q,{ref_key:"dialogRef",ref:m,onHide:s(D)},{default:i(()=>[d(q,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:i(()=>[d(V,null,{default:i(()=>[n("div",A,[d(b,{name:"edit",color:"primary",size:"sm"}),n("div",null,[n("div",null,z(r.title),1),N])])]),_:1}),d(H,{onSubmit:e[4]||(e[4]=l=>s(_)(a))},{default:i(()=>[d(V,null,{default:i(()=>[n("div",K,[d(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.name=l),filled:"",dense:"",label:"\uC774\uB984",rules:[s(c)],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.deviceId,"onUpdate:modelValue":e[1]||(e[1]=l=>a.deviceId=l),disable:"",filled:"",dense:"",label:"Device ID",rules:[s(c),l=>u({deviceId:l})],"lazy-rules":""},null,8,["modelValue","rules"]),d(o,{modelValue:a.ipaddress,"onUpdate:modelValue":e[2]||(e[2]=l=>a.ipaddress=l),filled:"",dense:"",label:"IP Address",rules:[s(c),s(R),l=>u({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"]),r.type==="qsys"?(y(),g(o,{key:0,modelValue:a.amx,"onUpdate:modelValue":e[3]||(e[3]=l=>a.amx=l),filled:"",dense:"",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",rules:[l=>u({ipaddress:l})],"lazy-rules":""},null,8,["modelValue","rules"])):U("",!0)])]),_:1}),d(w,{align:"right"},{default:i(()=>[d(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(I)},null,8,["onClick"]),d(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}};export{j as _,F as a};