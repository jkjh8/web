import{r as a}from"./index.cfc91872.js";const t=a(!1),o=a(null),e=a(null),c=a(0),u=a(0),r=a(100),l=a(!1),P=()=>{const s=()=>{const n=o.value.path;e.value.src=`/media/${n}`,l.value=!1},v=()=>{r.value=u.value/c.value*100};return{modal:t,audioPlayer:e,previewFile:o,playTime:r,playStatus:l,fnInitAudioPlayer:()=>{e.value.ondurationchange=()=>{c.value=e.value.duration},e.value.ontimeupdate=()=>{u.value=e.value.currentTime,v()},e.value.onplaying=()=>{l.value=!0},e.value.onpause=()=>{l.value=!1},e.value.onended=()=>{r.value=100,l.value=!1},e.value.onplay=()=>{l.value=!0}},fnSetSource:s,fnUpdateTime:v,fnPlayStart:n=>{o.value=n,t.value=!0,s()},fnFF:()=>{e.value.currentTime=u.value+5},fnFR:()=>{e.value.currentTime=u.value-5},fnPlayerStopClose:()=>{e.value.pause(),t.value=!1}}};export{P as u};
