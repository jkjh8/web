import{aF as o,C as x,D as p,E as a,j as e,S as D,U as r,W as _,G as s,H as n,X as y,Y as u,Z as i,_ as t,K as l,I as c,b4 as m,aG as I,O as Q,V as B,r as b,aS as k,A as C}from"./index.306154ca.js";import{u as Y}from"./useNotify.a7b62442.js";const A=s("div",{class:"dialog-name"},"BARIX INFO",-1),N={class:"caption font-sans"},w={class:"q-px-md"},M=["href"],S={__name:"infoBarix",props:["device"],emits:[...o.emits],setup(d,{emit:v}){const{dialogRef:f,onDialogHide:g,onDialogOK:h,onDialogCancel:H}=o();return(V,G)=>(x(),p(B,{ref_key:"dialogRef",ref:f,onHide:c(g)},{default:a(()=>[e(D,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(r,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>[e(_,{style:{"margin-top":"10px"},name:"img:barix.svg",size:"1.5rem"}),s("div",null,[A,s("div",N,n(d.device.deviceId),1)])]),_:1}),e(r,null,{default:a(()=>[s("div",w,[e(y,{dense:""},{default:a(()=>[e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.name),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("IP Address")]),_:1}),e(t,{caption:""},{default:a(()=>[s("a",{href:`http://${d.device.ipaddress}`,target:"_blank"},[l(n(d.device.ipaddress)+" ",1),e(_,{class:"cursor-pointer",name:"launch",color:"primary"})],8,M)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("Net Mask")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.netmask),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uAC8C\uC774\uB4DC\uC6E8\uC774")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.gateway),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC6B0\uC120\uC21C\uC704")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.idx),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uCC44\uB110")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.channels),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uBBF8\uB514\uC5B4 \uD3EC\uBA67")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.mediaformat),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC2A4\uD2B8\uB9BC \uC8FC\uC18C")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.streamurl),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB3D9\uC791\uC2DC\uAC04")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.uptime),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC74C\uB7C9")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.volume),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB9B4\uB808\uC774 \uB3D9\uC791")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(d.device.relay1),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(c(m).formatDate(d.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(t,{caption:""},{default:a(()=>[l(n(c(m).formatDate(d.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(I,{align:"right"},{default:a(()=>[e(Q,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:c(h)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}},q=b([]),R=async()=>{try{const d=await k.get("/devices/barix");d.data&&d.data.devices&&(q.value=d.data.devices)}catch(d){console.error(d)}},F=()=>{const d=C();return Y(),{fnBarixInfo:f=>{d.dialog({component:S,componentProps:{device:f}})}}};export{q as b,R as f,F as u};