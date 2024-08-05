import{b6 as X,a2 as z,b7 as C,ai as F,ag as J,ak as Y,ah as Z,r as q,b8 as p,ao as ee,c as i,w as x,b9 as te,m as ne,h as n,g as ae,L as w,V as oe,p as ie,ba as le,a9 as ue,X as _,W as S,R as y,ay as ce}from"./index.5b495e55.js";import{Q as de}from"./QSlideTransition.633617a2.js";const u=X({}),re=Object.keys(C);var ve=z({name:"QExpansionItem",props:{...C,...F,...J,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Y,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:d}}=ae(),b=Z(e,d),a=q(e.modelValue!==null?e.modelValue:e.defaultOpened),f=q(null),h=p(),{show:A,hide:I,toggle:m}=ee({showing:a});let l,c;const Q=i(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),B=i(()=>{if(e.contentInsetLevel===void 0)return null;const t=d.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),r=i(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),O=i(()=>{const t={};return re.forEach(o=>{t[o]=e[o]}),t}),P=i(()=>r.value===!0||e.expandIconToggle!==!0),j=i(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),E=i(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),H=i(()=>({expanded:a.value===!0,detailsId:h.value,toggle:m,show:A,hide:I})),T=i(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":h.value,"aria-label":t}});x(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&k()});function N(t){r.value!==!0&&m(t),v("click",t)}function R(t){t.keyCode===13&&L(t,!0)}function L(t,o){o!==!0&&f.value!==null&&f.value.focus(),m(t),ce(t)}function D(){v("afterShow")}function $(){v("afterHide")}function k(){l===void 0&&(l=te()),a.value===!0&&(u[e.group]=l);const t=x(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),o=x(()=>u[e.group],(s,W)=>{W===l&&s!==void 0&&s!==l&&I()});c=()=>{t(),o(),u[e.group]===l&&delete u[e.group],c=void 0}}function G(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},o=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:j.value})];return E.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:L,onKeyup:R}),o.unshift(n("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(S,t,()=>o)}function K(){let t;return g.header!==void 0?t=[].concat(g.header(H.value)):(t=[n(S,()=>[n(_,{lines:e.labelLines},()=>e.label||""),e.caption?n(_,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(S,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](G()),t}function M(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:b.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return P.value===!0&&(t.clickable=!0,t.onClick=N,Object.assign(t,r.value===!0?O.value:T.value)),n(oe,t,K)}function V(){return ie(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:h.value},ue(g.default)),[[le,a.value]])}function U(){const t=[M(),n(de,{duration:e.duration,onShow:D,onHide:$},V)];return e.expandSeparator===!0&&t.push(n(w,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:b.value}),n(w,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:b.value})),t}return e.group!==void 0&&k(),ne(()=>{c!==void 0&&c()}),()=>n("div",{class:Q.value},[n("div",{class:"q-expansion-item__container relative-position"},U())])}});export{ve as Q};
