import{r as n,v as u,aP as f,aX as o}from"./index.9135e184.js";const s=n(null),l=n([]),c=n(""),r=n(150),i=n(""),D=()=>{const a=u(),{fnNotiWarn:d,fnNotiError:e}=f();return{fnMakeTts:async()=>{if(!c.value)return e("\uC120\uD0DD\uB41C \uC74C\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");if(!i.value)return e("\uBCC0\uD658\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");try{a.loading.show();const{data:t}=await o.put("/broadcast/tts",{voice:c.value,rate:r.value,text:i.value});s.value=t.value.file}catch(t){e("TTS \uBCC0\uD658 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",t.message)}finally{a.loading.hide()}},fnDeleteFile:async()=>{if(!!s.value)try{a.loading.show(),await o.delete("/broadcast/tts",{data:{file:s.value}}),s.value=null}catch(t){e("TTS \uD30C\uC77C \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",t.message)}finally{a.loading.hide()}},fnGetDefaultVoice:async()=>{try{const{data:t}=await o.get("/broadcast/tts/voice");t&&(c.value=t.voice)}catch{e("\uAE30\uBCF8 \uC74C\uC131\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}},fnSetDefaultVoice:async t=>{try{a.loading.show(),await o.put("/broadcast/tts/voice",{newVoice:t})}catch{e("\uAE30\uBCF8 \uC74C\uC131\uC744 \uC124\uC815\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{a.loading.hide()}},fnGetVoices:async()=>{try{a.loading.show();const{data:t}=await o.get("/broadcast/tts");l.value=t.value.voices}catch{e("\uC74C\uC131 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{a.loading.hide()}},voices:l,voice:c,ttsRate:r,ttsText:i,currentFile:s}};export{D as u};