import{aH as N,u as T,aI as I,c as n,aJ as A,h as s,aK as M,g as Q,r as l}from"./index.7d6e6e9a.js";const R={...N,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},h=50,b=2*h,w=b*Math.PI,D=Math.round(w*1e3)/1e3;var G=T({name:"QCircularProgress",props:{...R,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:u}){const{proxy:{$q:m}}=Q(),y=I(e),S=n(()=>{const t=(m.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(m.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}}),k=n(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=n(()=>b/(1-e.thickness/2)),F=n(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),i=n(()=>A(e.value,e.min,e.max)),B=n(()=>e.max-e.min),v=n(()=>e.thickness/2*a.value),_=n(()=>{const t=(e.max-i.value)/B.value,o=e.rounded===!0&&i.value<e.max&&t<.25?v.value/2*(1-t/.25):0;return w*t+o});function x({thickness:t,offset:o,color:C,cls:q,rounded:z}){return s("circle",{class:"q-circular-progress__"+q+(C!==void 0?` text-${C}`:""),style:k.value,fill:"transparent",stroke:"currentColor","stroke-width":t,"stroke-dasharray":D,"stroke-dashoffset":o,"stroke-linecap":z,cx:a.value,cy:a.value,r:h})}return()=>{const t=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&t.push(s("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:h-v.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&t.push(x({cls:"track",thickness:v.value,offset:0,color:e.trackColor})),t.push(x({cls:"circle",thickness:v.value,offset:_.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const o=[s("svg",{class:"q-circular-progress__svg",style:S.value,viewBox:F.value,"aria-hidden":"true"},t)];return e.showValue===!0&&o.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},u.default!==void 0?u.default():[s("div",i.value)])),s("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:y.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:i.value},M(u.internal,o))}}});const $=l(!1),f=l(null),r=l(null),P=l(0),d=l(0),g=l(100),c=l(!1),H=()=>{const e=()=>{const a=f.value.path;r.value.src=`/media/${a}`,c.value=!1},u=()=>{g.value=d.value/P.value*100};return{modal:$,audioPlayer:r,previewFile:f,playTime:g,playStatus:c,fnInitAudioPlayer:()=>{r.value.ondurationchange=()=>{P.value=r.value.duration},r.value.ontimeupdate=()=>{d.value=r.value.currentTime,u()},r.value.onplaying=()=>{c.value=!0},r.value.onpause=()=>{c.value=!1},r.value.onended=()=>{g.value=100,c.value=!1},r.value.onplay=()=>{c.value=!0}},fnSetSource:e,fnUpdateTime:u,fnPlayStart:a=>{f.value=a,$.value=!0,e()},fnFF:()=>{r.value.currentTime=d.value+5},fnFR:()=>{r.value.currentTime=d.value-5}}};export{G as Q,H as u};