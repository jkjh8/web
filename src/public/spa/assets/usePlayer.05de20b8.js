import{aB as N,a2 as T,aC as A,c as l,aD as I,h as s,aE as D,g as M,r as n}from"./index.ef6cc54e.js";const Q={...N,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},S=50,w=2*S,B=w*Math.PI,R=Math.round(B*1e3)/1e3;var E=T({name:"QCircularProgress",props:{...Q,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:u}){const{proxy:{$q:m}}=M(),k=A(e),C=l(()=>{const a=(m.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(m.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-a}deg)`:`rotate3d(0, 0, 1, ${a-90}deg)`}}),x=l(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),r=l(()=>w/(1-e.thickness/2)),i=l(()=>`${r.value/2} ${r.value/2} ${r.value} ${r.value}`),v=l(()=>I(e.value,e.min,e.max)),F=l(()=>e.max-e.min),d=l(()=>e.thickness/2*r.value),_=l(()=>{const a=(e.max-v.value)/F.value,o=e.rounded===!0&&v.value<e.max&&a<.25?d.value/2*(1-a/.25):0;return B*a+o});function P({thickness:a,offset:o,color:$,cls:q,rounded:z}){return s("circle",{class:"q-circular-progress__"+q+($!==void 0?` text-${$}`:""),style:x.value,fill:"transparent",stroke:"currentColor","stroke-width":a,"stroke-dasharray":R,"stroke-dashoffset":o,"stroke-linecap":z,cx:r.value,cy:r.value,r:S})}return()=>{const a=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&a.push(s("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:S-d.value/2,cx:r.value,cy:r.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&a.push(P({cls:"track",thickness:d.value,offset:0,color:e.trackColor})),a.push(P({cls:"circle",thickness:d.value,offset:_.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const o=[s("svg",{class:"q-circular-progress__svg",style:C.value,viewBox:i.value,"aria-hidden":"true"},a)];return e.showValue===!0&&o.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},u.default!==void 0?u.default():[s("div",v.value)])),s("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:k.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:v.value},D(u.internal,o))}}});const g=n(!1),y=n(null),t=n(null),b=n(0),f=n(0),h=n(100),c=n(!1),G=()=>{const e=()=>{const i=y.value.path;t.value.src=`/media/${i}`,c.value=!1},u=()=>{h.value=f.value/b.value*100};return{modal:g,audioPlayer:t,previewFile:y,playTime:h,playStatus:c,fnInitAudioPlayer:()=>{t.value.ondurationchange=()=>{b.value=t.value.duration},t.value.ontimeupdate=()=>{f.value=t.value.currentTime,u()},t.value.onplaying=()=>{c.value=!0},t.value.onpause=()=>{c.value=!1},t.value.onended=()=>{h.value=100,c.value=!1},t.value.onplay=()=>{c.value=!0}},fnSetSource:e,fnUpdateTime:u,fnPlayStart:i=>{y.value=i,g.value=!0,e()},fnFF:()=>{t.value.currentTime=f.value+5},fnFR:()=>{t.value.currentTime=f.value-5},fnPlayerStopClose:()=>{t.value.pause(),g.value=!1}}};export{E as Q,G as u};
