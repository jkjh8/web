import{r as o,A as c,aU as t}from"./index.2e86d1d2.js";import{u as n}from"./useNotify.8c96ffc8.js";const u=o("Normal"),i=o(""),l=o(!1),g=()=>{const s=c(),{fnNotiInfo:r,fnNotiError:e}=n();return{fnGetBackupSettings:async()=>{try{s.loading.show();const{data:a}=await t.get("/setup/servermode");u.value=a.mode,i.value=a.backupAddress,l.value=a.backupActive}catch(a){e("\uBC31\uC5C5 \uC124\uC815\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"),console.error(a.message)}finally{s.loading.hide()}},fnUserBackup:async()=>{try{s.loading.show();const{data:a}=await t.get("/users/backup");a.result?r("\uC0AC\uC6A9\uC790 \uBC31\uC5C5\uC744 \uC644\uB8CC \uD558\uC600\uC2B5\uB2C8\uB2E4"):e("\uC0AC\uC6A9\uC790 \uBC31\uC5C5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694")}catch(a){e("\uC0AC\uC6A9\uC790 \uBC31\uC5C5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"),console.error(a.message)}finally{s.loading.hide()}}}};export{i as a,u as b,l as c,g as u};
