import{r as a}from"./index.5f12a1f1.js";const t=a(!1),o=a(null),e=a(null),c=a(0),n=a(0),r=a(100),l=a(!1),P=()=>{const s=()=>{const u=o.value.path;e.value.src=`/media/${encodeURIComponent(u)}`,l.value=!1},v=()=>{r.value=n.value/c.value*100};return{modal:t,audioPlayer:e,previewFile:o,playTime:r,playStatus:l,fnInitAudioPlayer:()=>{e.value.ondurationchange=()=>{c.value=e.value.duration},e.value.ontimeupdate=()=>{n.value=e.value.currentTime,v()},e.value.onplaying=()=>{l.value=!0},e.value.onpause=()=>{l.value=!1},e.value.onended=()=>{r.value=100,l.value=!1},e.value.onplay=()=>{l.value=!0}},fnSetSource:s,fnUpdateTime:v,fnPlayStart:u=>{o.value=u,t.value=!0,s()},fnFF:()=>{e.value.currentTime=n.value+5},fnFR:()=>{e.value.currentTime=n.value-5},fnPlayerStopClose:()=>{e.value.pause(),t.value=!1}}};export{P as u};