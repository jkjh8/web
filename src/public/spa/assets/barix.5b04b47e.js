import{ax as v,x as D,y as I,z as a,k as e,L as b,M as x,N as g,A as f,B as d,S as Q,U as u,V as s,W as t,D as l,J as o,ay as h,az as k,H as A,O as C,aA as Y,i as w,u as M,r as N}from"./index.e93617ea.js";const S=f("div",{class:"dialog-name"},"BARIX INFO",-1),R={class:"caption"},q={class:"q-px-md"},G=["href"],P={__name:"infoBarix",props:["device"],emits:[...v.emits],setup(n,{emit:_}){const{dialogRef:c,onDialogOK:m,onDialogCancel:p}=v();return(B,y)=>(D(),I(C,{ref_key:"dialogRef",ref:c},{default:a(()=>[e(b,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(x,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>[e(g,{style:{"margin-top":"10px"},name:"img:barix.svg",size:"1.5rem"}),f("div",null,[S,f("div",R,d(n.device.deviceId),1)])]),_:1}),e(x,null,{default:a(()=>[f("div",q,[e(Q,{dense:""},{default:a(()=>[e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.name),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("IP Address")]),_:1}),e(t,{caption:""},{default:a(()=>[f("a",{href:`http://${n.device.ipaddress}`,target:"_blank"},[l(d(n.device.ipaddress)+" ",1),e(g,{class:"cursor-pointer",name:"launch",color:"primary"})],8,G)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("Net Mask")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.netmask),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uAC8C\uC774\uD2B8\uC6E8\uC774")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.gateway),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("Port")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.port),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC6B0\uC120\uC21C\uC704")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.idx),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uCC44\uB110")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.channels),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uBBF8\uB514\uC5B4 \uD3EC\uBA67")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.mediaformat),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC2A4\uD2B8\uB9BC \uC8FC\uC18C")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.streamurl),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB3D9\uC791\uC2DC\uAC04")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.uptime),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC74C\uB7C9")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.volume),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB9B4\uB808\uC774 \uB3D9\uC791")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(n.device.relay1),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(o(h).formatDate(n.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(u,{dense:""},{default:a(()=>[e(s,null,{default:a(()=>[e(t,null,{default:a(()=>[l("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(t,{caption:""},{default:a(()=>[l(d(o(h).formatDate(n.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(k,{align:"right"},{default:a(()=>[e(A,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:o(m)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}},L=Y("barix",()=>{const n=w("api"),_=M(),c=N([]);return{barix:c,fnUpdateBarixes:i=>{c.value=i},fnGetBarix:async()=>{try{const{data:i}=await n.get("/devices/barix");i&&i.devices&&(c.value=i.devices)}catch(i){console.error(i)}},fnRefreshBarix:async i=>{try{await n.put("/devices/barix/refresh",{device:i})}catch(r){console.error(r)}},fnBarixInfo:i=>{_.dialog({component:P,componentProps:{device:i}})},fnGetBarixByIp:async i=>{try{const{data:r}=await n.get(i?`/devices/barix/ip?ip=${i}`:"/devices/barix");return r.devices}catch(r){return console.error(r),null}}}});export{L as u};
