import{ay as u,r as C,o as h,y as k,z as w,A as t,j as n,N as Q,O as g,B as l,P as x,C as f,aS as I,az as q,K as y,D as m,R as B,v as D,aU as _}from"./index.97053f43.js";import{_ as N}from"./DialogConfirm.26b7b5bb.js";const $={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},V={class:"text-caption"},O={class:"q-px-sm q-gutter-y-xs"},P={__name:"editSingleName",props:["title","caption","name"],emits:[...u.emits],setup(e,{emit:v}){const c=e,{dialogRef:a,onDialogCancel:o,onDialogHide:r,onDialogOK:d}=u(),s=C("");return h(()=>{c.name&&(s.value=c.name)}),(S,i)=>(k(),w(B,{ref_key:"dialogRef",ref:a,onHide:m(r)},{default:t(()=>[n(Q,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:t(()=>[n(g,null,{default:t(()=>[l("div",$,[n(x,{name:"add_circle",color:"primary",size:"sm"}),l("div",null,f(e.title),1)]),l("div",V,f(e.caption),1)]),_:1}),n(g,null,{default:t(()=>[l("div",O,[n(I,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value=p),filled:"",dense:"",label:"\uC774\uB984"},null,8,["modelValue"])])]),_:1}),n(q,{align:"right"},{default:t(()=>[n(y,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:m(o)},null,8,["onClick"]),n(y,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:i[1]||(i[1]=p=>m(d)(s.value))})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},H=()=>{const e=D();return{fnBroadcastCancel:a=>{e.dialog({component:N,componentProps:{title:"\uBC29\uC1A1 \uCDE8\uC18C",icon:"cancel",iconColor:"red-10",caption:`${a.name} \uC9C0\uC5ED \uBC29\uC1A1\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{e.loading.show(),await _.get("/devices/qsys/cancel",{params:{device:{name:a.name,deviceId:a.deviceId,ipaddress:a.ipaddress,pageId:a.pageId}}}),e.loading.hide()}catch(o){console.error(o)}})},fnEditZoneName:(a,o)=>{e.dialog({component:P,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${a.name} \uC9C0\uC5ED\uC758 ${o.name} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:o.name}}).onOk(async r=>{try{e.loading.show(),await _.put("/devices/qsys/modifiedzonename",{deviceId:a.deviceId,zone:o.Zone,name:r})}catch(d){console.error(d),e.notify({type:"negative",icon:"warning",message:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",capion:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.",position:"top"})}finally{e.loading.hide()}})}}};export{P as _,H as u};