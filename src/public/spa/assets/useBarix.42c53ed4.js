import{r,U as e}from"./index.186a5e78.js";const t=r([]),c=async()=>{try{const a=await e.get("/devices/barix");a.data&&a.data.devices&&(t.value=a.data.devices)}catch(a){console.error(a)}};export{t as b,c as f};