import{b0 as z,a1 as F,b1 as C,a3 as J,aN as X,a7 as Y,aO as Z,r as L,b2 as p,ae as ee,c as i,w as x,b3 as te,p as ne,h as n,g as ae,I as _,U as oe,q as ie,b4 as le,an as ue,W as k,V as I,N as y,ao as ce}from"./index.93de1c34.js";import{Q as de}from"./QSlideTransition.f0bcd4de.js";const u=z({}),re=Object.keys(C);var ve=F({name:"QExpansionItem",props:{...C,...J,...X,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Y,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:d}}=ae(),b=Z(e,d),a=L(e.modelValue!==null?e.modelValue:e.defaultOpened),f=L(null),h=p(),{show:A,hide:S,toggle:m}=ee({showing:a});let l,c;const O=i(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),Q=i(()=>{if(e.contentInsetLevel===void 0)return null;const t=d.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),r=i(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),B=i(()=>{const t={};return re.forEach(o=>{t[o]=e[o]}),t}),N=i(()=>r.value===!0||e.expandIconToggle!==!0),P=i(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),j=i(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),E=i(()=>({expanded:a.value===!0,detailsId:h.value,toggle:m,show:A,hide:S})),T=i(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":h.value,"aria-label":t}});x(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&w()});function H(t){r.value!==!0&&m(t),v("click",t)}function R(t){t.keyCode===13&&q(t,!0)}function q(t,o){o!==!0&&f.value!==null&&f.value.focus(),m(t),ce(t)}function D(){v("afterShow")}function $(){v("afterHide")}function w(){l===void 0&&(l=te()),a.value===!0&&(u[e.group]=l);const t=x(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),o=x(()=>u[e.group],(s,W)=>{W===l&&s!==void 0&&s!==l&&S()});c=()=>{t(),o(),u[e.group]===l&&delete u[e.group],c=void 0}}function G(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},o=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:P.value})];return j.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:q,onKeyup:R}),o.unshift(n("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(I,t,()=>o)}function K(){let t;return g.header!==void 0?t=[].concat(g.header(E.value)):(t=[n(I,()=>[n(k,{lines:e.labelLines},()=>e.label||""),e.caption?n(k,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(I,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](G()),t}function M(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:b.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return N.value===!0&&(t.clickable=!0,t.onClick=H,Object.assign(t,r.value===!0?B.value:T.value)),n(oe,t,K)}function U(){return ie(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:Q.value,id:h.value},ue(g.default)),[[le,a.value]])}function V(){const t=[M(),n(de,{duration:e.duration,onShow:D,onHide:$},U)];return e.expandSeparator===!0&&t.push(n(_,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:b.value}),n(_,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:b.value})),t}return e.group!==void 0&&w(),ne(()=>{c!==void 0&&c()}),()=>n("div",{class:O.value},[n("div",{class:"q-expansion-item__container relative-position"},V())])}});export{ve as Q};
