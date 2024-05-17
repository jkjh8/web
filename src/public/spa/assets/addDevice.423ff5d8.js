import{k as Q,z as k,A as x,B as t,D as s,O as b,j as l,R as g,C as u,Q as y,J as q,aJ as m,aF as w,I as v,P as z,U as B}from"./index.e0d07856.js";import{Q as U,r as c,e as P}from"./useRules.b8ec1735.js";import{u as I}from"./use-dialog-plugin-component.120c15cd.js";function D(o=16){const d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let n="";for(let i=0;i<o;i++)n+=d[parseInt(Math.random()*d.length)];return n}const R={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},A={class:"q-px-sm q-gutter-y-xs"},J={__name:"addDevice",props:["title","type"],emits:[...I.emits],setup(o,{emit:d}){const n=o,{dialogRef:i,onDialogCancel:V,onDialogHide:_,onDialogOK:C}=I(),r=Q({name:"",deviceId:D(12),ipaddress:""}),p=async f=>{try{return(await B.get(`/devices/${n.type}/exists`,{params:{value:f}})).data.result?"\uC774\uBBF8 \uC0AC\uC6A9\uC911 \uC785\uB2C8\uB2E4.":!0}catch{return"\uC11C\uBC84 \uC624\uB958, \uC7A0\uC2DC\uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."}};return(f,e)=>(k(),x(b,{ref_key:"dialogRef",ref:i,onHide:s(_)},{default:t(()=>[l(z,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:t(()=>[l(g,null,{default:t(()=>[u("div",R,[l(y,{name:"add_circle",color:"primary",size:"sm"}),u("div",null,q(o.title),1)])]),_:1}),l(U,{onSubmit:e[4]||(e[4]=a=>s(C)(r))},{default:t(()=>[l(g,null,{default:t(()=>[u("div",A,[l(m,{modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=a=>r.name=a),filled:"",dense:"",label:"\uC774\uB984",rules:[s(c)],"lazy-rules":""},null,8,["modelValue","rules"]),l(m,{modelValue:r.deviceId,"onUpdate:modelValue":e[2]||(e[2]=a=>r.deviceId=a),filled:"",dense:"",label:"Device ID",rules:[s(c),a=>p({deviceId:a})],"lazy-rules":""},{append:t(()=>[l(y,{class:"cursor-pointer",name:"refresh",color:"primary",onClick:e[1]||(e[1]=a=>r.deviceId=s(D)(12))})]),_:1},8,["modelValue","rules"]),l(m,{modelValue:r.ipaddress,"onUpdate:modelValue":e[3]||(e[3]=a=>r.ipaddress=a),filled:"",dense:"",label:"IP Address",rules:[s(c),s(P),a=>p({ipaddress:a})],"lazy-rules":""},null,8,["modelValue","rules"])])]),_:1}),l(w,{align:"right"},{default:t(()=>[l(v,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(V)},null,8,["onClick"]),l(v,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}};export{J as _};
