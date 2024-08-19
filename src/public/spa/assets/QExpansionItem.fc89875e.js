import{b9 as X,a3 as Y,ba as C,at as z,ah as F,ax as J,ai as Z,r as L,bb as p,aE as ee,c as o,w as x,bc as te,m as ne,h as n,g as ae,M as _,W as ie,p as oe,bd as le,ab as ue,Y as k,X as S,S as y,aM as ce}from"./index.cfc91872.js";import{Q as de}from"./QSlideTransition.b324ac5e.js";const u=X({}),re=Object.keys(C);var ve=Y({name:"QExpansionItem",props:{...C,...z,...F,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...J,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:d}}=ae(),b=Z(e,d),a=L(e.modelValue!==null?e.modelValue:e.defaultOpened),f=L(null),h=p(),{show:A,hide:I,toggle:m}=ee({showing:a});let l,c;const Q=o(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),B=o(()=>{if(e.contentInsetLevel===void 0)return null;const t=d.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),r=o(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),O=o(()=>{const t={};return re.forEach(i=>{t[i]=e[i]}),t}),E=o(()=>r.value===!0||e.expandIconToggle!==!0),P=o(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),j=o(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),H=o(()=>({expanded:a.value===!0,detailsId:h.value,toggle:m,show:A,hide:I})),T=o(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":h.value,"aria-label":t}});x(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&w()});function N(t){r.value!==!0&&m(t),v("click",t)}function M(t){t.keyCode===13&&q(t,!0)}function q(t,i){i!==!0&&f.value!==null&&f.value.focus(),m(t),ce(t)}function R(){v("afterShow")}function D(){v("afterHide")}function w(){l===void 0&&(l=te()),a.value===!0&&(u[e.group]=l);const t=x(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),i=x(()=>u[e.group],(s,W)=>{W===l&&s!==void 0&&s!==l&&I()});c=()=>{t(),i(),u[e.group]===l&&delete u[e.group],c=void 0}}function $(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},i=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:P.value})];return j.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:q,onKeyup:M}),i.unshift(n("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(S,t,()=>i)}function G(){let t;return g.header!==void 0?t=[].concat(g.header(H.value)):(t=[n(S,()=>[n(k,{lines:e.labelLines},()=>e.label||""),e.caption?n(k,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(S,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"]($()),t}function K(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:b.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return E.value===!0&&(t.clickable=!0,t.onClick=N,Object.assign(t,r.value===!0?O.value:T.value)),n(ie,t,G)}function U(){return oe(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:h.value},ue(g.default)),[[le,a.value]])}function V(){const t=[K(),n(de,{duration:e.duration,onShow:R,onHide:D},U)];return e.expandSeparator===!0&&t.push(n(_,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:b.value}),n(_,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:b.value})),t}return e.group!==void 0&&w(),ne(()=>{c!==void 0&&c()}),()=>n("div",{class:Q.value},[n("div",{class:"q-expansion-item__container relative-position"},V())])}});export{ve as Q};
