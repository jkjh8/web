import{r,a as e}from"./index.55b3bbb2.js";const t=r([]),c=async()=>{try{const a=await e.get("/devices/barix");a.data&&a.data.devices&&(t.value=a.data.devices)}catch(a){console.error(a)}};export{t as b,c as f};