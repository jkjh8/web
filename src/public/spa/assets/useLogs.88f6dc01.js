import{a7 as T,r as b,c as U,bK as L,n as I,b_ as K,h as g,Q as A,g as H,L as m,aT as C,o as z,y as F,z as G,A as r,j as o,P as W,R as O,B as p,S as _,aY as R,D as w,p as x,aU as Y,aZ as $,U as X}from"./index.40f7776e.js";import{Q,a as k,l as B}from"./locale.98dd9511.js";import{C as j}from"./ClosePopup.2218fa8d.js";function V(e,t=new WeakMap){if(Object(e)!==e)return e;if(t.has(e))return t.get(e);const l=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const u=e.valueOf();if(Object(u)!==u){const d=new e.constructor(u);return t.set(e,d),d}}return t.set(e,l),e instanceof Set?e.forEach(u=>{l.add(V(u,t))}):e instanceof Map&&e.forEach((u,d)=>{l.set(d,V(u,t))}),Object.assign(l,...Object.keys(e).map(u=>({[u]:V(e[u],t)})))}var ue=T({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:l}){const{proxy:u}=H(),{$q:d}=u,c=b(null),i=b(""),n=b("");let f=!1;const h=U(()=>L({initialValue:i.value,validate:e.validate,set:a,cancel:s,updatePosition:E},"value",()=>n.value,v=>{n.value=v}));function a(){e.validate(n.value)!==!1&&(y()===!0&&(l("save",n.value,i.value),l("update:modelValue",n.value)),S())}function s(){y()===!0&&l("cancel",n.value,i.value),S()}function E(){I(()=>{c.value.updatePosition()})}function y(){return K(n.value,i.value)===!1}function S(){f=!0,c.value.hide()}function D(){f=!1,i.value=V(e.modelValue),n.value=V(e.modelValue),l("beforeShow")}function q(){l("show")}function M(){f===!1&&y()===!0&&(e.autoSave===!0&&e.validate(n.value)===!0?(l("save",n.value,i.value),l("update:modelValue",n.value)):l("cancel",n.value,i.value)),l("beforeHide")}function P(){l("hide")}function N(){const v=t.default!==void 0?[].concat(t.default(h.value)):[];return e.title&&v.unshift(g("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&v.push(g("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[g(m,{flat:!0,color:e.color,label:e.labelCancel||d.lang.label.cancel,onClick:s}),g(m,{flat:!0,color:e.color,label:e.labelSet||d.lang.label.set,onClick:a})])),v}return Object.assign(u,{set:a,cancel:s,show(v){c.value!==null&&c.value.show(v)},hide(v){c.value!==null&&c.value.hide(v)},updatePosition:E}),()=>{if(e.disable!==!0)return g(A,{ref:c,class:"q-popup-edit",cover:e.cover,onBeforeShow:D,onShow:q,onBeforeHide:M,onHide:P,onEscapeKey:s},N)}}});const Z={class:"row no-wrap items-center q-gutter-x-md"},J=p("div",null,[p("div",{class:"font-main"},"\uAC80\uC0C9\uC635\uC158"),p("div",{class:"caption"},"\uB0A0\uC9DC \uBC0F \uAE30\uAC04 \uD544\uD130 \uC801\uC6A9")],-1),ee={class:"q-px-md"},le={class:"row items-center justify-end"},te={class:"row items-center justify-end"},se={__name:"logOptions",props:["start","end","mode","logLevel"],emits:[...C.emits],setup(e,{emit:t}){const{dialogRef:l,onDialogOK:u,onDialogCancel:d}=C(),c=e,i=b(""),n=b(""),f=b([]);return z(()=>{i.value=c.start,n.value=c.end,f.value=c.logLevel}),(h,a)=>(F(),G(X,{ref_key:"dialogRef",ref:l,persistent:""},{default:r(()=>[o(W,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:r(()=>[o(O,null,{default:r(()=>[p("div",Z,[o(_,{name:"search",color:"primary",size:"sm"}),J])]),_:1}),o(O,null,{default:r(()=>[p("div",ee,[o(R,{dense:"",filled:"",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=s=>i.value=s),mask:"date",rules:["date"],label:"\uAC80\uC0C9 \uC2DC\uC791"},{append:r(()=>[o(_,{name:"event",class:"cursor-pointer"},{default:r(()=>[o(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[o(k,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),locale:w(B)},{default:r(()=>[p("div",le,[x(o(m,{label:"Close",color:"primary",flat:""},null,512),[[j]])])]),_:1},8,["modelValue","locale"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(R,{dense:"",filled:"",modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=s=>n.value=s),mask:"date",rules:["date"],label:"\uAC80\uC0C9 \uC885\uB8CC"},{append:r(()=>[o(_,{name:"event",class:"cursor-pointer"},{default:r(()=>[o(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[o(k,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=s=>n.value=s),locale:w(B)},{default:r(()=>[p("div",te,[x(o(m,{label:"Close",color:"primary",flat:""},null,512),[[j]])])]),_:1},8,["modelValue","locale"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(Y,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=s=>f.value=s),options:e.mode==="event"?[{label:"EVENT",value:4},{label:"EVENT ERROR",value:5}]:[{label:"ERROR",value:0},{label:"WARN",value:1},{label:"INFO",value:2},{label:"DEBUG",value:3},{label:"EVENT",value:4},{label:"EVENT ERROR",value:5}],multiple:"",filled:"",dense:f.value.length===0,label:"LOG \uB4F1\uAE09",clearable:"","use-chips":""},null,8,["modelValue","options","dense"])])]),_:1}),o($,{align:"right"},{default:r(()=>[o(m,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:w(d)},null,8,["onClick"]),o(m,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:a[5]||(a[5]=s=>w(u)({start:i.value,end:n.value,logLevel:f.value}))})]),_:1})]),_:1})]),_:1},512))}},ie=e=>{let t="";return e.length>100?t=e.substring(0,100)+"...":t=e,t.includes(":")&&t.indexOf(":")<20?[t.substring(0,t.indexOf(":")+1),t.substring(t.indexOf(":")+1)]:t.split(" ")},re=(e,t)=>{let l=[];return t===0&&l.push("text-bold"),e.includes("\uBC29\uC1A1")&&l.push("text-blue"),e.includes("Q-SYS")&&l.push("text-orange-10"),e.includes("BARIX")&&l.push("text-green-10"),e.includes("SERVER")&&l.push("text-grey"),e.includes("SOCKET.IO")&&l.push("text-grey"),l.length?l.join(" "):""};export{ue as Q,se as _,re as a,ie as f};
