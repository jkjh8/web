import{aB as v,k as C,u as b,v as k,x as d,j as l,K as q,L as g,y as n,R as x,z as w,A as i,aM as u,aC as Q,I as y,M as z,J as $,o as R,aG as B}from"./index.01937250.js";import{Q as U,r as c,a as H}from"./useRules.734a1e91.js";function D(o=16){const m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let t="";for(let r=0;r<o;r++)t+=m[parseInt(Math.random()*m.length)];return t}const M={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},N={class:"q-px-sm q-gutter-y-xs"},O={__name:"addDevice",props:["title","type"],emits:[...v.emits],setup(o,{emit:m}){const t=o,{dialogRef:r,onDialogCancel:_,onDialogHide:I,onDialogOK:V}=v(),s=C({name:"",deviceId:D(12),ipaddress:""}),p=async f=>{try{return(await $.get(`/devices/${t.type}/exists`,{params:{value:f}})).data.result?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return(f,e)=>(b(),k(z,{ref_key:"dialogRef",ref:r,onHide:i(I)},{default:d(()=>[l(q,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:d(()=>[l(g,null,{default:d(()=>[n("div",M,[l(x,{name:"add_circle",color:"primary",size:"sm"}),n("div",null,w(o.title),1)])]),_:1}),l(U,{onSubmit:e[4]||(e[4]=a=>i(V)(s))},{default:d(()=>[l(g,null,{default:d(()=>[n("div",N,[l(u,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a),filled:"",dense:"",label:"\uC774\uB984",rules:[i(c)],"lazy-rules":""},null,8,["modelValue","rules"]),l(u,{modelValue:s.deviceId,"onUpdate:modelValue":e[2]||(e[2]=a=>s.deviceId=a),filled:"",dense:"",label:"Device ID",rules:[i(c),a=>p({deviceId:a})],"lazy-rules":""},{append:d(()=>[l(x,{class:"cursor-pointer",name:"refresh",color:"primary",onClick:e[1]||(e[1]=a=>s.deviceId=i(D)(12))})]),_:1},8,["modelValue","rules"]),l(u,{modelValue:s.ipaddress,"onUpdate:modelValue":e[3]||(e[3]=a=>s.ipaddress=a),filled:"",dense:"",label:"IP Address",rules:[i(c),i(H),a=>p({ipaddress:a})],"lazy-rules":""},null,8,["modelValue","rules"])])]),_:1}),l(Q,{align:"right"},{default:d(()=>[l(y,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:i(_)},null,8,["onClick"]),l(y,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},A={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},E=n("div",{class:"text-caption"},"DeviceID\uB294 \uC218\uC815\uC544 \uC548\uB429\uB2C8\uB2E4.",-1),P={class:"q-px-sm q-gutter-y-xs"},j={__name:"editDevice",props:["title","type","device"],emits:[...v.emits],setup(o,{emit:m}){const t=o,{dialogRef:r,onDialogCancel:_,onDialogHide:I,onDialogOK:V}=v(),s=C({_id:"",deviceId:"",name:"",deviceId:D(12),ipaddress:""}),p=async f=>{try{const e=await $.get(`/devices/${t.type}/exists`,{params:{value:f}});return e.data&&e.data.result&&e.data.result._id!==t.device._id?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return R(()=>{s._id=t.device._id,s.deviceId=t.device.deviceId,s.name=t.device.name,s.ipaddress=t.device.ipaddress,s.deviceId=t.device.deviceId}),(f,e)=>(b(),k(z,{ref_key:"dialogRef",ref:r,onHide:i(I)},{default:d(()=>[l(q,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:d(()=>[l(g,null,{default:d(()=>[n("div",A,[l(x,{name:"edit",color:"primary",size:"sm"}),n("div",null,[n("div",null,w(o.title),1),E])])]),_:1}),l(U,{onSubmit:e[3]||(e[3]=a=>i(V)(s))},{default:d(()=>[l(g,null,{default:d(()=>[n("div",P,[l(u,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a),filled:"",dense:"",label:"\uC774\uB984",rules:[i(c)],"lazy-rules":""},null,8,["modelValue","rules"]),l(u,{modelValue:s.deviceId,"onUpdate:modelValue":e[1]||(e[1]=a=>s.deviceId=a),disable:"",filled:"",dense:"",label:"Device ID",rules:[i(c),a=>p({deviceId:a})],"lazy-rules":""},null,8,["modelValue","rules"]),l(u,{modelValue:s.ipaddress,"onUpdate:modelValue":e[2]||(e[2]=a=>s.ipaddress=a),filled:"",dense:"",label:"IP Address",rules:[i(c),i(H),a=>p({ipaddress:a})],"lazy-rules":""},null,8,["modelValue","rules"])])]),_:1}),l(Q,{align:"right"},{default:d(()=>[l(y,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:i(_)},null,8,["onClick"]),l(y,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},F=()=>{const o=B();return{fnNotiError:t=>{var r;o.notify({color:"negative",textColor:"white",icon:"error",message:t.message,caption:(r=t.caption)!=null?r:"",position:"top"})}}};export{O as _,j as a,F as u};
