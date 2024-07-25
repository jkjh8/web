import{r as f,aU as t,v as h}from"./index.97053f43.js";import{h as u,m as i,l as m}from"./locale.0682628a.js";import{u as y}from"./useNotify.145f9922.js";import{_ as l}from"./DialogConfirm.26b7b5bb.js";u.locale("ko");const F=f("list"),p=f([]),d=async e=>{const o=await t.get(`/broadcast/schedule?options=${JSON.stringify(e)}`);p.value=o.data.schedules},x=e=>{const o=i.findIndex(n=>n.value===e);return o!==-1?i[o].label:""},C=e=>(e.sort((o,n)=>o-n),e.map(o=>m.daysShort[o])),N=async e=>{const{devices:o}=e,n=o.map(c=>({deviceId:c.deviceId,ipaddress:c.ipaddress,amx:c.amx,Zones:c.value.map(s=>{if(typeof s=="number")return s;if(typeof s=="object")return s.Zone})}));return await t.post("/broadcast/schedule",{...e,devices:n})},D=async e=>await t.get("/broadcast/schedule/sync",{params:{idx:e}});u.locale("ko");const I=()=>{const e=h(),{fnNotiInfo:o,fnNotiWarn:n,fnNotiError:c}=y();return{fnDeleteSchedule:a=>{e.dialog({component:l,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC120\uD0DD\uD55C \uBC29\uC1A1 \uC608\uC57D\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.",caption:`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.`}}).onOk(async()=>{try{e.loading.show(),await t.delete("/broadcast/schedule",{data:{schedule:a}}),await d()}catch(r){console.error(r)}finally{e.loading.hide()}})},fnSyncFileSchedule:async a=>{try{e.loading.show({message:"\uD30C\uC77C \uB3D9\uAE30\uD654 \uC911..."}),await t.get("/broadcast/schedule/sync",{params:{idx:a}})}catch(r){console.error(r)}finally{e.loading.hide()}},fnCleanScheduleFile:async()=>{try{e.loading.show(),await t.get("/broadcast/schedule/clean")}catch(a){console.error(a)}finally{e.loading.hide()}},fnActiveSchedule:async a=>{e.dialog({component:l,componentProps:{icon:"check_circle",iconColor:a.active?"warning":"primary",title:`${a.active?"\uBE44\uD65C\uC131\uD654":"\uD65C\uC131\uD654"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,caption:`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC744 ${a.active?"\uBE44\uD65C\uC131\uD654":"\uD65C\uC131\uD654"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{e.loading.show(),await t.put("/broadcast/schedule/active",{...a,active:!a.active}),await d(),a.active?n(`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC774 \uBE44\uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`):o(`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC774 \uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(r){c(r)}finally{e.loading.hide()}})}}};export{x as a,p as b,C as c,N as d,D as e,d as f,F as s,I as u};