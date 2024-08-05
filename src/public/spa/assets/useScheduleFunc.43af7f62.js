import{r as f,aX as t,v as h,aP as y}from"./index.90cb454b.js";import{h as u,m as i,l as m}from"./locale.0682628a.js";import{_ as l}from"./DialogConfirm.19c27437.js";u.locale("ko");const k=f("list"),p=f([]),d=async e=>{const o=await t.get(`/broadcast/schedule?options=${JSON.stringify(e)}`);p.value=o.data.schedules},F=e=>{const o=i.findIndex(n=>n.value===e);return o!==-1?i[o].label:""},x=e=>(e.sort((o,n)=>o-n),e.map(o=>m.daysShort[o])),C=async e=>{const{devices:o}=e,n=o.map(c=>({deviceId:c.deviceId,ipaddress:c.ipaddress,amx:c.amx,Zones:c.value.map(s=>{if(typeof s=="number")return s;if(typeof s=="object")return s.Zone})}));return await t.post("/broadcast/schedule",{...e,devices:n})},N=async e=>await t.get("/broadcast/schedule/sync",{params:{idx:e}});u.locale("ko");const D=()=>{const e=h(),{fnNotiInfo:o,fnNotiWarn:n,fnNotiError:c}=y();return{fnDeleteSchedule:a=>{e.dialog({component:l,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC120\uD0DD\uD55C \uBC29\uC1A1 \uC608\uC57D\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.",caption:`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.`}}).onOk(async()=>{try{e.loading.show(),await t.delete("/broadcast/schedule",{data:{schedule:a}}),await d()}catch(r){console.error(r)}finally{e.loading.hide()}})},fnSyncFileSchedule:async a=>{try{e.loading.show({message:"\uD30C\uC77C \uB3D9\uAE30\uD654 \uC911..."}),await t.get("/broadcast/schedule/sync",{params:{idx:a}})}catch(r){console.error(r)}finally{e.loading.hide()}},fnCleanScheduleFile:async()=>{try{e.loading.show(),await t.get("/broadcast/schedule/clean")}catch(a){console.error(a)}finally{e.loading.hide()}},fnActiveSchedule:async a=>{e.dialog({component:l,componentProps:{icon:"check_circle",iconColor:a.active?"warning":"primary",title:`${a.active?"\uBE44\uD65C\uC131\uD654":"\uD65C\uC131\uD654"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,caption:`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC744 ${a.active?"\uBE44\uD65C\uC131\uD654":"\uD65C\uC131\uD654"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{e.loading.show(),await t.put("/broadcast/schedule/active",{...a,active:!a.active}),await d(),a.active?n(`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC774 \uBE44\uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`):o(`${a.name} \uBC29\uC1A1 \uC608\uC57D\uC774 \uD65C\uC131\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(r){c(r)}finally{e.loading.hide()}})}}};export{F as a,p as b,x as c,C as d,N as e,d as f,k as s,D as u};
