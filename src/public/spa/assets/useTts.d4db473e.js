import{r as n,u as f,M as o}from"./index.568a708f.js";import{u as d}from"./useNotify.2c7e2d4a.js";const s=n(null),r=n([]),c=n(""),l=n(200),i=n(""),p=()=>{const e=f(),{fnNotiWarn:u,fnNotiError:a}=d();return{fnMakeTts:async()=>{if(!c.value)return a("\uC120\uD0DD\uB41C \uC74C\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");if(!i.value)return a("\uBCC0\uD658\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");try{e.loading.show();const{data:t}=await o.put("/broadcast/tts",{voice:c.value,rate:l.value,text:i.value});s.value=t.value.file}catch(t){a("TTS \uBCC0\uD658 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",t.message)}finally{e.loading.hide()}},fnDeleteFile:async()=>{if(!s.value)return u("\uC0AD\uC81C\uD560 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");try{e.loading.show(),await o.delete("/broadcast/tts",{data:{file:s.value}}),s.value=null}catch(t){a("TTS \uD30C\uC77C \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",t.message)}finally{e.loading.hide()}},fnGetDefaultVoice:async()=>{try{const{data:t}=await o.get("/broadcast/tts/voice");console.log(t),t&&(c.value=t.voice)}catch(t){console.log(t),a("\uAE30\uBCF8 \uC74C\uC131\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}},fnSetDefaultVoice:async t=>{try{e.loading.show(),await o.put("/broadcast/tts/voice",{newVoice:t})}catch{a("\uAE30\uBCF8 \uC74C\uC131\uC744 \uC124\uC815\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{e.loading.hide()}},fnGetVoices:async()=>{try{e.loading.show();const{data:t}=await o.get("/broadcast/tts");r.value=t.value.voices,l.value=t.value.rate}catch(t){console.log(t),a("\uC74C\uC131 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{e.loading.hide()}},voices:r,voice:c,ttsRate:l,ttsText:i,currentFile:s}};export{p as u};