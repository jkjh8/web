import{aE as Ze,aN as ve,a2 as et,c1 as tt,aK as be,c2 as Se,aJ as Ke,bo as ge,as as Ae,aL as ze,ax as me,a1 as we,af as Re,ag as Oe,r as D,c as E,w as _e,n as Xe,h as y,a8 as Ee,c3 as lt,ae as at,g as xe,l as rt,bq as it,bX as qe,P as Be,aT as nt,p as ot,ba as ut,bL as Le,i as st,a4 as Ne,c4 as Ye,bu as dt,c5 as je,a7 as ct,m as ft,f as vt,bK as ht,K as ee,c6 as pt,bJ as gt,ay as mt,v as He,y as te,z as le,A as V,j as J,D as Te,bs as _t,B as pe,G as se,J as de,C as Me,L as yt,R as bt,k as Ft,aX as ae}from"./index.15dfea7e.js";import{e as kt}from"./position-engine.b1da28a3.js";import{Q as qt}from"./QSlideTransition.64a9b58c.js";import{_ as $e}from"./DialogInput.4bc95bb2.js";import{Q as ce}from"./QTooltip.67e545dc.js";import{Q as wt}from"./usePlayer.210fad50.js";import{_ as xt}from"./DialogConfirm.88475932.js";const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(Pe);Pe.all=!0;function Qe(e){const n={};for(const o of Ct)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Pe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const St=["INPUT","TEXTAREA"];function Ie(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&St.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Ue(e,n,o){const s=Ae(e);let t,i=s.left-n.event.x,g=s.top-n.event.y,p=Math.abs(i),d=Math.abs(g);const h=n.direction;h.horizontal===!0&&h.vertical!==!0?t=i<0?"left":"right":h.horizontal!==!0&&h.vertical===!0?t=g<0?"up":"down":h.up===!0&&g<0?(t="up",p>d&&(h.left===!0&&i<0?t="left":h.right===!0&&i>0&&(t="right"))):h.down===!0&&g>0?(t="down",p>d&&(h.left===!0&&i<0?t="left":h.right===!0&&i>0&&(t="right"))):h.left===!0&&i<0?(t="left",p<d&&(h.up===!0&&g<0?t="up":h.down===!0&&g>0&&(t="down"))):h.right===!0&&i>0&&(t="right",p<d&&(h.up===!0&&g<0?t="up":h.down===!0&&g>0&&(t="down")));let x=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,x=!0,t==="left"||t==="right"?(s.left-=i,p=0,i=0):(s.top-=g,d=0,g=0)}return{synthetic:x,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:s,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:p,y:d},offset:{x:i,y:g},delta:{x:s.left-n.event.lastX,y:s.top-n.event.lastY}}}}let zt=0;var Et=Ze({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&ve.has.touch!==!0)return;function s(i,g){o.mouse===!0&&g===!0?me(i):(o.stop===!0&&ge(i),o.prevent===!0&&Ke(i))}const t={uid:"qvtp_"+zt++,handler:n,modifiers:o,direction:Qe(o),noop:et,mouseStart(i){Ie(i,t)&&tt(i)&&(be(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ie(i,t)){const g=i.target;be(t,"temp",[[g,"touchmove","move","notPassiveCapture"],[g,"touchcancel","end","passiveCapture"],[g,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,g){if(ve.is.firefox===!0&&Se(e,!0),t.lastEvt=i,g===!0||o.stop===!0){if(t.direction.all!==!0&&(g!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const h=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ke(h),i.cancelBubble===!0&&ge(h),Object.assign(h,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:h}}ge(i)}const{left:p,top:d}=Ae(i);t.event={x:p,y:d,time:Date.now(),mouse:g===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:p,lastY:d}},move(i){if(t.event===void 0)return;const g=Ae(i),p=g.left-t.event.x,d=g.top-t.event.y;if(p===0&&d===0)return;t.lastEvt=i;const h=t.event.mouse===!0,x=()=>{s(i,h);let A;o.preserveCursor!==!0&&o.preservecursor!==!0&&(A=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),h===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),kt(),t.styleCleanup=a=>{if(t.styleCleanup=void 0,A!==void 0&&(document.documentElement.style.cursor=A),document.body.classList.remove("non-selectable"),h===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};a!==void 0?setTimeout(()=>{C(),a()},50):C()}else a!==void 0&&a()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(i,t.event.mouse);const{payload:A,synthetic:a}=Ue(i,t,!1);A!==void 0&&(t.handler(A)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&x(),t.event.lastX=A.position.left,t.event.lastY=A.position.top,t.event.lastDir=a===!0?void 0:A.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||h===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){x(),t.event.detected=!0,t.move(i);return}const L=Math.abs(p),R=Math.abs(d);L!==R&&(t.direction.horizontal===!0&&L>R||t.direction.vertical===!0&&L<R||t.direction.up===!0&&L<R&&d<0||t.direction.down===!0&&L<R&&d>0||t.direction.left===!0&&L>R&&p<0||t.direction.right===!0&&L>R&&p>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,g){if(t.event!==void 0){if(ze(t,"temp"),ve.is.firefox===!0&&Se(e,!1),g===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ue(i===void 0?t.lastEvt:i,t).payload);const{payload:p}=Ue(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(p)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const i=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";be(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}ve.has.touch===!0&&be(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Qe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ze(n,"main"),ze(n,"temp"),ve.is.firefox===!0&&Se(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}}),al=we({name:"QSplitter",props:{...Re,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:n,emit:o}){const{proxy:{$q:s}}=xe(),t=Oe(e,s),i=D(null),g={before:D(null),after:D(null)},p=E(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(t.value===!0?" q-splitter--dark":"")),d=E(()=>e.horizontal===!0?"height":"width"),h=E(()=>e.reverse!==!0?"before":"after"),x=E(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function L(U){return(e.unit==="%"?U:Math.round(U))+e.unit}const R=E(()=>({[h.value]:{[d.value]:L(e.modelValue)}}));let A,a,C,M,m;function c(U){if(U.isFirst===!0){const S=i.value.getBoundingClientRect()[d.value];A=e.horizontal===!0?"up":"left",a=e.unit==="%"?100:S,C=Math.min(a,x.value[1],Math.max(x.value[0],e.modelValue)),M=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:s.lang.rtl===!0?-1:1)*(e.unit==="%"?S===0?0:100/S:1),i.value.classList.add("q-splitter--active");return}if(U.isFinal===!0){m!==e.modelValue&&o("update:modelValue",m),i.value.classList.remove("q-splitter--active");return}const F=C+M*(U.direction===A?-1:1)*U.distance[e.horizontal===!0?"y":"x"];m=Math.min(a,x.value[1],Math.max(x.value[0],F)),g[h.value].value.style[d.value]=L(m),e.emitImmediately===!0&&e.modelValue!==m&&o("update:modelValue",m)}const K=E(()=>[[Et,c,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function X(U,F){U<F[0]?o("update:modelValue",F[0]):U>F[1]&&o("update:modelValue",F[1])}return _e(()=>e.modelValue,U=>{X(U,x.value)}),_e(()=>e.limits,()=>{Xe(()=>{X(e.modelValue,x.value)})}),()=>{const U=[y("div",{ref:g.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:R.value.before},Ee(n.before)),y("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[lt("div",{class:"q-splitter__separator-area absolute-full"},Ee(n.separator),"sep",e.disable!==!0,()=>K.value)]),y("div",{ref:g.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:R.value.after},Ee(n.after))];return y("div",{class:p.value,ref:i},at(n.default,U))}}});const Tt=["none","strict","leaf","leaf-filtered"];var rl=we({name:"QTree",props:{...Re,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>Tt.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:n,emit:o}){const{proxy:s}=xe(),{$q:t}=s,i=Oe(e,t),g=D({}),p=D(e.ticked||[]),d=D(e.expanded||[]);let h={};rt(()=>{h={}});const x=E(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(i.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),L=E(()=>e.selected!==void 0),R=E(()=>e.icon||t.iconSet.tree.icon),A=E(()=>e.controlColor||e.color),a=E(()=>e.textColor!==void 0?` text-${e.textColor}`:""),C=E(()=>{const r=e.selectedColor||e.color;return r?` text-${r}`:""}),M=E(()=>e.filterMethod!==void 0?e.filterMethod:(r,f)=>{const l=f.toLowerCase();return r[e.labelKey]&&r[e.labelKey].toLowerCase().indexOf(l)!==-1}),m=E(()=>{const r={},f=(l,b)=>{const v=l.tickStrategy||(b?b.tickStrategy:e.tickStrategy),z=l[e.nodeKey],T=l[e.childrenKey]&&Array.isArray(l[e.childrenKey])&&l[e.childrenKey].length!==0,u=l.disabled!==!0&&L.value===!0&&l.selectable!==!1,_=l.disabled!==!0&&l.expandable!==!1,N=v!=="none",I=v==="strict",j=v==="leaf-filtered",oe=v==="leaf"||v==="leaf-filtered";let Ce=l.disabled!==!0&&l.tickable!==!1;oe===!0&&Ce===!0&&b&&b.tickable!==!0&&(Ce=!1);let ue=l.lazy;ue===!0&&g.value[z]!==void 0&&Array.isArray(l[e.childrenKey])===!0&&(ue=g.value[z]);const w={key:z,parent:b,isParent:T,lazy:ue,disabled:l.disabled,link:l.disabled!==!0&&(u===!0||_===!0&&(T===!0||ue===!0)),children:[],matchesFilter:e.filter?M.value(l,e.filter):!0,selected:z===e.selected&&u===!0,selectable:u,expanded:T===!0?d.value.includes(z):!1,expandable:_,noTick:l.noTick===!0||I!==!0&&ue&&ue!=="loaded",tickable:Ce,tickStrategy:v,hasTicking:N,strictTicking:I,leafFilteredTicking:j,leafTicking:oe,ticked:I===!0?p.value.includes(z):T===!0?!1:p.value.includes(z)};if(r[z]=w,T===!0&&(w.children=l[e.childrenKey].map(P=>f(P,w)),e.filter&&(w.matchesFilter!==!0?w.matchesFilter=w.children.some(P=>P.matchesFilter):w.noTick!==!0&&w.disabled!==!0&&w.tickable===!0&&j===!0&&w.children.every(P=>P.matchesFilter!==!0||P.noTick===!0||P.tickable!==!0)===!0&&(w.tickable=!1)),w.matchesFilter===!0&&(w.noTick!==!0&&I!==!0&&w.children.every(P=>P.noTick)===!0&&(w.noTick=!0),oe))){if(w.ticked=!1,w.indeterminate=w.children.some(P=>P.indeterminate===!0),w.tickable=w.tickable===!0&&w.children.some(P=>P.tickable),w.indeterminate!==!0){const P=w.children.reduce((De,We)=>We.ticked===!0?De+1:De,0);P===w.children.length?w.ticked=!0:P>0&&(w.indeterminate=!0)}w.indeterminate===!0&&(w.indeterminateNextState=w.children.every(P=>P.tickable!==!0||P.ticked!==!0))}return w};return e.nodes.forEach(l=>f(l,null)),r});_e(()=>e.ticked,r=>{p.value=r}),_e(()=>e.expanded,r=>{d.value=r});function c(r){const f=[].reduce,l=(b,v)=>{if(b||!v)return b;if(Array.isArray(v)===!0)return f.call(Object(v),l,b);if(v[e.nodeKey]===r)return v;if(v[e.childrenKey])return l(null,v[e.childrenKey])};return l(null,e.nodes)}function K(){return p.value.map(r=>c(r))}function X(){return d.value.map(r=>c(r))}function U(r){return r&&m.value[r]?m.value[r].expanded:!1}function F(){e.expanded!==void 0?o("update:expanded",[]):d.value=[]}function S(){const r=[],f=l=>{l[e.childrenKey]&&l[e.childrenKey].length!==0&&l.expandable!==!1&&l.disabled!==!0&&(r.push(l[e.nodeKey]),l[e.childrenKey].forEach(f))};e.nodes.forEach(f),e.expanded!==void 0?o("update:expanded",r):d.value=r}function $(r,f,l=c(r),b=m.value[r]){if(b.lazy&&b.lazy!=="loaded"){if(b.lazy==="loading")return;g.value[r]="loading",Array.isArray(l[e.childrenKey])!==!0&&(l[e.childrenKey]=[]),o("lazyLoad",{node:l,key:r,done:v=>{g.value[r]="loaded",l[e.childrenKey]=Array.isArray(v)===!0?v:[],Xe(()=>{const z=m.value[r];z&&z.isParent===!0&&q(r,!0)})},fail:()=>{delete g.value[r],l[e.childrenKey].length===0&&delete l[e.childrenKey]}})}else b.isParent===!0&&b.expandable===!0&&q(r,f)}function q(r,f){let l=d.value;const b=e.expanded!==void 0;if(b===!0&&(l=l.slice()),f){if(e.accordion&&m.value[r]){const v=[];m.value[r].parent?m.value[r].parent.children.forEach(z=>{z.key!==r&&z.expandable===!0&&v.push(z.key)}):e.nodes.forEach(z=>{const T=z[e.nodeKey];T!==r&&v.push(T)}),v.length!==0&&(l=l.filter(z=>v.includes(z)===!1))}l=l.concat([r]).filter((v,z,T)=>T.indexOf(v)===z)}else l=l.filter(v=>v!==r);b===!0?o("update:expanded",l):d.value=l}function B(r){return r&&m.value[r]?m.value[r].ticked:!1}function Q(r,f){let l=p.value;const b=e.ticked!==void 0;b===!0&&(l=l.slice()),f?l=l.concat(r).filter((v,z,T)=>T.indexOf(v)===z):l=l.filter(v=>r.includes(v)===!1),b===!0&&o("update:ticked",l)}function k(r,f,l){const b={tree:s,node:r,key:l,color:e.color,dark:i.value};return Le(b,"expanded",()=>f.expanded,v=>{v!==f.expanded&&$(l,v)}),Le(b,"ticked",()=>f.ticked,v=>{v!==f.ticked&&Q([l],v)}),b}function H(r){return(e.filter?r.filter(f=>m.value[f[e.nodeKey]].matchesFilter):r).map(f=>re(f))}function W(r){if(r.icon!==void 0)return y(Be,{class:"q-tree__icon q-mr-sm",name:r.icon,color:r.iconColor});const f=r.img||r.avatar;if(f)return y("img",{class:`q-tree__${r.img?"img":"avatar"} q-mr-sm`,src:f})}function Z(){o("afterShow")}function Y(){o("afterHide")}function re(r){const f=r[e.nodeKey],l=m.value[f],b=r.header&&n[`header-${r.header}`]||n["default-header"],v=l.isParent===!0?H(r[e.childrenKey]):[],z=v.length!==0||l.lazy&&l.lazy!=="loaded";let T=r.body&&n[`body-${r.body}`]||n["default-body"];const u=b!==void 0||T!==void 0?k(r,l,f):null;return T!==void 0&&(T=y("div",{class:"q-tree__node-body relative-position"},[y("div",{class:a.value},[T(u)])])),y("div",{key:f,class:`q-tree__node relative-position q-tree__node--${z===!0?"parent":"child"}`},[y("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(l.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(l.selected===!0?" q-tree__node--selected":"")+(l.disabled===!0?" q-tree__node--disabled":""),tabindex:l.link===!0?0:-1,ariaExpanded:v.length>0?l.expanded:null,role:"treeitem",onClick:_=>{ie(r,l,_)},onKeypress(_){it(_)!==!0&&(_.keyCode===13?ie(r,l,_,!0):_.keyCode===32&&ne(r,l,_,!0))}},[y("div",{class:"q-focus-helper",tabindex:-1,ref:_=>{h[l.key]=_}}),l.lazy==="loading"?y(qe,{class:"q-tree__spinner",color:A.value}):z===!0?y(Be,{class:"q-tree__arrow"+(l.expanded===!0?" q-tree__arrow--rotate":""),name:R.value,onClick(_){ne(r,l,_)}}):null,l.hasTicking===!0&&l.noTick!==!0?y(nt,{class:"q-tree__tickbox",modelValue:l.indeterminate===!0?null:l.ticked,color:A.value,dark:i.value,dense:!0,keepColor:!0,disable:l.tickable!==!0,onKeydown:me,"onUpdate:modelValue":_=>{ye(l,_)}}):null,y("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(l.selected===!0?C.value:a.value)},[b?b(u):[W(r),y("div",r[e.labelKey])]])]),z===!0?e.noTransition===!0?l.expanded===!0?y("div",{class:"q-tree__node-collapsible"+a.value,key:`${f}__q`},[T,y("div",{class:"q-tree__children"+(l.disabled===!0?" q-tree__node--disabled":""),role:"group"},v)]):null:y(qt,{duration:e.duration,onShow:Z,onHide:Y},()=>ot(y("div",{class:"q-tree__node-collapsible"+a.value,key:`${f}__q`},[T,y("div",{class:"q-tree__children"+(l.disabled===!0?" q-tree__node--disabled":""),role:"group"},v)]),[[ut,l.expanded]])):T])}function he(r){const f=h[r];f&&f.focus()}function ie(r,f,l,b){b!==!0&&f.selectable!==!1&&he(f.key),L.value&&f.selectable?e.noSelectionUnset===!1?o("update:selected",f.key!==e.selected?f.key:null):f.key!==e.selected&&o("update:selected",f.key===void 0?null:f.key):ne(r,f,l,b),typeof r.handler=="function"&&r.handler(r)}function ne(r,f,l,b){l!==void 0&&me(l),b!==!0&&f.selectable!==!1&&he(f.key),$(f.key,!f.expanded,r,f)}function ye(r,f){if(r.indeterminate===!0&&(f=r.indeterminateNextState),r.strictTicking)Q([r.key],f);else if(r.leafTicking){const l=[],b=v=>{v.isParent?(f!==!0&&v.noTick!==!0&&v.tickable===!0&&l.push(v.key),v.leafTicking===!0&&v.children.forEach(b)):v.noTick!==!0&&v.tickable===!0&&(v.leafFilteredTicking!==!0||v.matchesFilter===!0)&&l.push(v.key)};b(r),Q(l,f)}}return e.defaultExpandAll===!0&&S(),Object.assign(s,{getNodeByKey:c,getTickedNodes:K,getExpandedNodes:X,isExpanded:U,collapseAll:F,expandAll:S,setExpanded:$,isTicked:B,setTicked:Q}),()=>{const r=H(e.nodes);return y("div",{class:x.value,role:"tree"},r.length===0?e.filter?e.noResultsLabel||t.lang.tree.noResults:e.noNodesLabel||t.lang.tree.noNodes:r)}}}),Ut=we({name:"QUploaderAddTrigger",setup(){const e=st(Ye,Ne);return e===Ne&&console.error("QUploaderAddTrigger needs to be child of QUploader"),e}});function fe(e,n,o,s){const t=[];return e.forEach(i=>{s(i)===!0?t.push(i):n.push({failedPropValidation:o,file:i})}),t}function Fe(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),me(e)}const At={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Bt=["rejected"];function Lt({editable:e,dnd:n,getFileInput:o,addFilesToQueue:s}){const{props:t,emit:i,proxy:g}=xe(),p=D(null),d=E(()=>t.accept!==void 0?t.accept.split(",").map(c=>(c=c.trim(),c==="*"?"*/":(c.endsWith("/*")&&(c=c.slice(0,c.length-1)),c.toUpperCase()))):null),h=E(()=>parseInt(t.maxFiles,10)),x=E(()=>parseInt(t.maxTotalSize,10));function L(c){if(e.value)if(c!==Object(c)&&(c={target:null}),c.target!==null&&c.target.matches('input[type="file"]')===!0)c.clientX===0&&c.clientY===0&&ge(c);else{const K=o();K&&K!==c.target&&K.click(c)}}function R(c){e.value&&c&&s(null,c)}function A(c,K,X,U){let F=Array.from(K||c.target.files);const S=[],$=()=>{S.length!==0&&i("rejected",S)};if(t.accept!==void 0&&d.value.indexOf("*/")===-1&&(F=fe(F,S,"accept",q=>d.value.some(B=>q.type.toUpperCase().startsWith(B)||q.name.toUpperCase().endsWith(B))),F.length===0))return $();if(t.maxFileSize!==void 0){const q=parseInt(t.maxFileSize,10);if(F=fe(F,S,"max-file-size",B=>B.size<=q),F.length===0)return $()}if(t.multiple!==!0&&F.length!==0&&(F=[F[0]]),F.forEach(q=>{q.__key=q.webkitRelativePath+q.lastModified+q.name+q.size}),U===!0){const q=X.map(B=>B.__key);F=fe(F,S,"duplicate",B=>q.includes(B.__key)===!1)}if(F.length===0)return $();if(t.maxTotalSize!==void 0){let q=U===!0?X.reduce((B,Q)=>B+Q.size,0):0;if(F=fe(F,S,"max-total-size",B=>(q+=B.size,q<=x.value)),F.length===0)return $()}if(typeof t.filter=="function"){const q=t.filter(F);F=fe(F,S,"filter",B=>q.includes(B))}if(t.maxFiles!==void 0){let q=U===!0?X.length:0;if(F=fe(F,S,"max-files",()=>(q++,q<=h.value)),F.length===0)return $()}if($(),F.length!==0)return F}function a(c){Fe(c),n.value!==!0&&(n.value=!0)}function C(c){me(c),(c.relatedTarget!==null||ve.is.safari!==!0?c.relatedTarget!==p.value:document.elementsFromPoint(c.clientX,c.clientY).includes(p.value)===!1)===!0&&(n.value=!1)}function M(c){Fe(c);const K=c.dataTransfer.files;K.length!==0&&s(null,K),n.value=!1}function m(c){if(n.value===!0)return y("div",{ref:p,class:`q-${c}__dnd absolute-full`,onDragenter:Fe,onDragover:Fe,onDragleave:C,onDrop:M})}return Object.assign(g,{pickFiles:L,addFiles:R}),{pickFiles:L,addFiles:R,onDragover:a,onDragleave:C,processFiles:A,getDndNode:m,maxFilesNumber:h,maxTotalSizeNumber:x}}function Ve(e){return(e*100).toFixed(2)+"%"}const Rt={...Re,...At,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},Je=[...Bt,"start","finish","added","removed"];function Ot(e,n){const o=xe(),{props:s,slots:t,emit:i,proxy:g}=o,{$q:p}=g,d=Oe(s,p);function h(u,_,N){if(u.__status=_,_==="idle"){u.__uploaded=0,u.__progress=0,u.__sizeLabel=je(u.size),u.__progressLabel="0.00%";return}if(_==="failed"){g.$forceUpdate();return}u.__uploaded=_==="uploaded"?u.size:N,u.__progress=_==="uploaded"?1:Math.min(.9999,u.__uploaded/u.size),u.__progressLabel=Ve(u.__progress),g.$forceUpdate()}const x=E(()=>s.disable!==!0&&s.readonly!==!0),L=D(!1),R=D(null),A=D(null),a={files:D([]),queuedFiles:D([]),uploadedFiles:D([]),uploadedSize:D(0),updateFileStatus:h,isAlive:()=>dt(o)===!1},{pickFiles:C,addFiles:M,onDragover:m,onDragleave:c,processFiles:K,getDndNode:X,maxFilesNumber:U,maxTotalSizeNumber:F}=Lt({editable:x,dnd:L,getFileInput:ye,addFilesToQueue:r});Object.assign(a,e({props:s,slots:t,emit:i,helpers:a,exposeApi:u=>{Object.assign(a,u)}})),a.isBusy===void 0&&(a.isBusy=D(!1));const S=D(0),$=E(()=>S.value===0?0:a.uploadedSize.value/S.value),q=E(()=>Ve($.value)),B=E(()=>je(S.value)),Q=E(()=>x.value===!0&&a.isUploading.value!==!0&&(s.multiple===!0||a.queuedFiles.value.length===0)&&(s.maxFiles===void 0||a.files.value.length<U.value)&&(s.maxTotalSize===void 0||S.value<F.value)),k=E(()=>x.value===!0&&a.isBusy.value!==!0&&a.isUploading.value!==!0&&a.queuedFiles.value.length!==0);ct(Ye,b);const H=E(()=>"q-uploader column no-wrap"+(d.value===!0?" q-uploader--dark q-dark":"")+(s.bordered===!0?" q-uploader--bordered":"")+(s.square===!0?" q-uploader--square no-border-radius":"")+(s.flat===!0?" q-uploader--flat no-shadow":"")+(s.disable===!0?" disabled q-uploader--disable":"")+(L.value===!0?" q-uploader--dnd":"")),W=E(()=>"q-uploader__header"+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:""));_e(a.isUploading,(u,_)=>{_===!1&&u===!0?i("start"):_===!0&&u===!1&&i("finish")});function Z(){s.disable===!1&&(a.abort(),a.uploadedSize.value=0,S.value=0,ne(),a.files.value=[],a.queuedFiles.value=[],a.uploadedFiles.value=[])}function Y(){s.disable===!1&&he(["uploaded"],()=>{a.uploadedFiles.value=[]})}function re(){he(["idle","failed"],({size:u})=>{S.value-=u,a.queuedFiles.value=[]})}function he(u,_){if(s.disable===!0)return;const N={files:[],size:0},I=a.files.value.filter(j=>u.indexOf(j.__status)===-1?!0:(N.size+=j.size,N.files.push(j),j.__img!==void 0&&window.URL.revokeObjectURL(j.__img.src),!1));N.files.length!==0&&(a.files.value=I,_(N),i("removed",N.files))}function ie(u){s.disable||(u.__status==="uploaded"?a.uploadedFiles.value=a.uploadedFiles.value.filter(_=>_.__key!==u.__key):u.__status==="uploading"?u.__abort():S.value-=u.size,a.files.value=a.files.value.filter(_=>_.__key!==u.__key?!0:(_.__img!==void 0&&window.URL.revokeObjectURL(_.__img.src),!1)),a.queuedFiles.value=a.queuedFiles.value.filter(_=>_.__key!==u.__key),i("removed",[u]))}function ne(){a.files.value.forEach(u=>{u.__img!==void 0&&window.URL.revokeObjectURL(u.__img.src)})}function ye(){return A.value||R.value.getElementsByClassName("q-uploader__input")[0]}function r(u,_){const N=K(u,_,a.files.value,!0),I=ye();I!=null&&(I.value=""),N!==void 0&&(N.forEach(j=>{if(a.updateFileStatus(j,"idle"),S.value+=j.size,s.noThumbnails!==!0&&j.type.toUpperCase().startsWith("IMAGE")){const oe=new Image;oe.src=window.URL.createObjectURL(j),j.__img=oe}}),a.files.value=a.files.value.concat(N),a.queuedFiles.value=a.queuedFiles.value.concat(N),i("added",N),s.autoUpload===!0&&a.upload())}function f(){k.value===!0&&a.upload()}function l(u,_,N){if(u===!0){const I={type:"a",key:_,icon:p.iconSet.uploader[_],flat:!0,dense:!0};let j;return _==="add"?(I.onClick=C,j=b):I.onClick=N,y(ee,I,j)}}function b(){return y("input",{ref:A,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:s.accept,multiple:s.multiple===!0?"multiple":void 0,capture:s.capture,onMousedown:ge,onClick:C,onChange:r})}function v(){return t.header!==void 0?t.header(T):[y("div",{class:"q-uploader__header-content column"},[y("div",{class:"flex flex-center no-wrap q-gutter-xs"},[l(a.queuedFiles.value.length!==0,"removeQueue",re),l(a.uploadedFiles.value.length!==0,"removeUploaded",Y),a.isUploading.value===!0?y(qe,{class:"q-uploader__spinner"}):null,y("div",{class:"col column justify-center"},[s.label!==void 0?y("div",{class:"q-uploader__title"},[s.label]):null,y("div",{class:"q-uploader__subtitle"},[B.value+" / "+q.value])]),l(Q.value,"add"),l(s.hideUploadBtn===!1&&k.value===!0,"upload",a.upload),l(a.isUploading.value,"clear",a.abort)])])]}function z(){return t.list!==void 0?t.list(T):a.files.value.map(u=>y("div",{key:u.__key,class:"q-uploader__file relative-position"+(s.noThumbnails!==!0&&u.__img!==void 0?" q-uploader__file--img":"")+(u.__status==="failed"?" q-uploader__file--failed":u.__status==="uploaded"?" q-uploader__file--uploaded":""),style:s.noThumbnails!==!0&&u.__img!==void 0?{backgroundImage:'url("'+u.__img.src+'")'}:null},[y("div",{class:"q-uploader__file-header row flex-center no-wrap"},[u.__status==="failed"?y(Be,{class:"q-uploader__file-status",name:p.iconSet.type.negative,color:"negative"}):null,y("div",{class:"q-uploader__file-header-content col"},[y("div",{class:"q-uploader__title"},[u.name]),y("div",{class:"q-uploader__subtitle row items-center no-wrap"},[u.__sizeLabel+" / "+u.__progressLabel])]),u.__status==="uploading"?y(wt,{value:u.__progress,min:0,max:1,indeterminate:u.__progress===0}):y(ee,{round:!0,dense:!0,flat:!0,icon:p.iconSet.uploader[u.__status==="uploaded"?"done":"clear"],onClick:()=>{ie(u)}})])]))}ft(()=>{a.isUploading.value===!0&&a.abort(),a.files.value.length!==0&&ne()});const T={};for(const u in a)vt(a[u])===!0?Le(T,u,()=>a[u].value):T[u]=a[u];return Object.assign(T,{upload:f,reset:Z,removeUploadedFiles:Y,removeQueuedFiles:re,removeFile:ie,pickFiles:C,addFiles:M}),ht(T,{canAddFiles:()=>Q.value,canUpload:()=>k.value,uploadSizeLabel:()=>B.value,uploadProgressLabel:()=>q.value}),n({...a,upload:f,reset:Z,removeUploadedFiles:Y,removeQueuedFiles:re,removeFile:ie,pickFiles:C,addFiles:M,canAddFiles:Q,canUpload:k,uploadSizeLabel:B,uploadProgressLabel:q}),()=>{const u=[y("div",{class:W.value},v()),y("div",{class:"q-uploader__list scroll"},z()),X("uploader")];a.isBusy.value===!0&&u.push(y("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[y(qe)]));const _={ref:R,class:H.value};return Q.value===!0&&Object.assign(_,{onDragover:m,onDragleave:c}),y("div",_,u)}}const Pt=pt(Je);var Dt=({name:e,props:n,emits:o,injectPlugin:s})=>we({name:e,props:{...Rt,...n},emits:gt(o)===!0?{...Pt,...o}:[...Je,...o],setup(t,{expose:i}){return Ot(s,i)}});function G(e){return typeof e=="function"?e:()=>e}const Kt={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Nt=["factoryFailed","uploaded","failed","uploading"];function jt({props:e,emit:n,helpers:o}){const s=D([]),t=D([]),i=D(0),g=E(()=>({url:G(e.url),method:G(e.method),headers:G(e.headers),formFields:G(e.formFields),fieldName:G(e.fieldName),withCredentials:G(e.withCredentials),sendRaw:G(e.sendRaw),batch:G(e.batch)})),p=E(()=>i.value>0),d=E(()=>t.value.length!==0);let h;function x(){s.value.forEach(a=>{a.abort()}),t.value.length!==0&&(h=!0)}function L(){const a=o.queuedFiles.value.slice(0);o.queuedFiles.value=[],g.value.batch(a)?R(a):a.forEach(C=>{R([C])})}function R(a){if(i.value++,typeof e.factory!="function"){A(a,{});return}const C=e.factory(a);if(!C)n("factoryFailed",new Error("QUploader: factory() does not return properly"),a),i.value--;else if(typeof C.catch=="function"&&typeof C.then=="function"){t.value.push(C);const M=m=>{o.isAlive()===!0&&(t.value=t.value.filter(c=>c!==C),t.value.length===0&&(h=!1),o.queuedFiles.value=o.queuedFiles.value.concat(a),a.forEach(c=>{o.updateFileStatus(c,"failed")}),n("factoryFailed",m,a),i.value--)};C.then(m=>{h===!0?M(new Error("Aborted")):o.isAlive()===!0&&(t.value=t.value.filter(c=>c!==C),A(a,m))}).catch(M)}else A(a,C||{})}function A(a,C){const M=new FormData,m=new XMLHttpRequest,c=(k,H)=>C[k]!==void 0?G(C[k])(H):g.value[k](H),K=c("url",a);if(!K){console.error("q-uploader: invalid or no URL specified"),i.value--;return}const X=c("formFields",a);X!==void 0&&X.forEach(k=>{M.append(k.name,k.value)});let U=0,F=0,S=0,$=0,q;m.upload.addEventListener("progress",k=>{if(q===!0)return;const H=Math.min($,k.loaded);o.uploadedSize.value+=H-S,S=H;let W=S-F;for(let Z=U;W>0&&Z<a.length;Z++){const Y=a[Z];if(W>Y.size)W-=Y.size,U++,F+=Y.size,o.updateFileStatus(Y,"uploading",Y.size);else{o.updateFileStatus(Y,"uploading",W);return}}},!1),m.onreadystatechange=()=>{m.readyState<4||(m.status&&m.status<400?(o.uploadedFiles.value=o.uploadedFiles.value.concat(a),a.forEach(k=>{o.updateFileStatus(k,"uploaded")}),n("uploaded",{files:a,xhr:m})):(q=!0,o.uploadedSize.value-=S,o.queuedFiles.value=o.queuedFiles.value.concat(a),a.forEach(k=>{o.updateFileStatus(k,"failed")}),n("failed",{files:a,xhr:m})),i.value--,s.value=s.value.filter(k=>k!==m))},m.open(c("method",a),K),c("withCredentials",a)===!0&&(m.withCredentials=!0);const B=c("headers",a);B!==void 0&&B.forEach(k=>{m.setRequestHeader(k.name,k.value)});const Q=c("sendRaw",a);a.forEach(k=>{o.updateFileStatus(k,"uploading",0),Q!==!0&&M.append(c("fieldName",k),k,k.name),k.xhr=m,k.__abort=()=>{m.abort()},$+=k.size}),n("uploading",{files:a,xhr:m}),s.value.push(m),Q===!0?m.send(new Blob(a)):m.send(M)}return{isUploading:p,isBusy:d,abort:x,upload:L}}var Mt={name:"QUploader",props:Kt,emits:Nt,injectPlugin:jt},$t=Dt(Mt);const Qt={class:"row no-wrap items-center q-pa-sm q-gutter-x-xs bg-white text-black"},It={class:"col q-px-sm"},Vt=pe("div",{class:"q-uploader__title"},"\uD30C\uC77C \uC5C5\uB85C\uB4DC",-1),Xt={class:"q-uploader__subtitle"},Yt={__name:"dialogUpload",props:{folder:String},setup(e){const{dialogRef:n,onDialogCancel:o,onDialogOK:s}=mt(),t=He();function i(g){t.notify({type:"negative",message:`${g.length} file(s) did not pass validation constraints`})}return(g,p)=>(te(),le(bt,{ref_key:"dialogRef",ref:n,persistent:""},{default:V(()=>[J($t,{style:{"min-width":"350px","border-radius":"0.6rem"},label:"\uD30C\uC77C \uC5C5\uB85C\uB4DC",multiple:"",bordered:"","with-credentials":"",url:"/api/files",accept:"audio/*",headers:[{name:"folder",value:encodeURIComponent(e.folder)},{name:"Authorization",value:`Bearer ${Te(_t).getItem("token")}`}],onRejected:i,onFinish:Te(s)},{header:V(d=>[pe("div",Qt,[d.queuedFiles.length>0?(te(),le(ee,{key:0,round:"",flat:"",icon:"clear_all",color:"secondary",onClick:d.removeQueuedFiles},{default:V(()=>[J(ce,null,{default:V(()=>[se("Clear All")]),_:1})]),_:2},1032,["onClick"])):de("",!0),d.uploadedFiles.length>0?(te(),le(ee,{key:1,round:"",flat:"",color:"primary",icon:"done_all"},{default:V(()=>[J(ce,null,{default:V(()=>[se("Remove Uploaded Files")]),_:1})]),_:1})):de("",!0),d.isUploading?(te(),le(qe,{key:2,class:"q-uploader__spinner",color:"primary"})):de("",!0),pe("div",It,[Vt,pe("div",Xt,Me(d.uploadSizeLabel)+" / "+Me(d.uploadProgressLabel),1)]),d.canAddFiles?(te(),le(ee,{key:3,round:"",flat:"",type:"a",icon:"add_box",color:"primary",onClick:d.pickFiles},{default:V(()=>[J(Ut),J(ce,null,{default:V(()=>[se("\uD30C\uC77C\uC120\uD0DD")]),_:1})]),_:2},1032,["onClick"])):de("",!0),d.canUpload?(te(),le(ee,{key:4,round:"",dense:"",flat:"",icon:"cloud_upload",color:"primary",onClick:d.upload},{default:V(()=>[J(ce,null,{default:V(()=>[se("\uC5C5\uB85C\uB4DC")]),_:1})]),_:2},1032,["onClick"])):de("",!0),d.isUploading?(te(),le(ee,{key:5,round:"",flat:"",icon:"clear",color:"negative",onClick:d.abort},{default:V(()=>[J(ce,null,{default:V(()=>[se("\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):de("",!0),J(ee,{round:"",flat:"",icon:"cancel",color:"negative",onClick:Te(s)},{default:V(()=>[J(ce,null,{default:V(()=>[se("Close")]),_:1})]),_:1},8,["onClick"])]),pe("div",null,[J(yt,{color:"grey-5"})])]),_:1},8,["headers","onFinish"])]),_:1},512))}},O=Ft({files:[],folders:[],selectedFile:"",selectedFiles:[],selectedFolder:"",globalFolder:"",userFolder:""}),Ht=async()=>{try{const e=await ae.get("/files/dir");O.folders=e.data.folders,O.globalFolder=e.data.globalFolder,O.userFolder=e.data.userFolder,O.selectedFolder||(O.selectedFolder=e.data.globalFolder)}catch(e){console.error(e)}},Ge=async e=>{try{O.selectedFiles=[];const{data:n}=await ae.get("/files",{params:{folder:e}});if(e===O.globalFolder||e===O.userFolder)O.files=[...n.files.filter(o=>o.type==="folder"),...n.files.filter(o=>o.type!=="folder")];else{const o=e.split("\\");o.pop(),O.files=[{name:"..",fullpath:o.join("\\"),type:"folder"},...n.files.filter(s=>s.type==="folder"),...n.files.filter(s=>s.type!=="folder")]}}catch(n){console.error(n)}},il=async e=>{O.selectedFolder=e,await Ge(e),O.selectedFiles=[]},ke=async()=>{await Ht(),await Ge(O.selectedFolder),O.selectedFiles=[]},nl=()=>{const e=He();return{fnMakeFolder:p=>{e.dialog({component:$e,componentProps:{icon:"create_new_folder",title:"\uD3F4\uB354 \uC0DD\uC131",caption:"\uC0DD\uC131\uD560 \uD3F4\uB354 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.",label:"\uD3F4\uB354"}}).onOk(async d=>{try{console.log(p),e.loading.show(),await ae.post("/files/newfolder",{folder:p,name:d}),await ke(),e.loading.hide()}catch(h){e.loading.hide(),console.error(h)}})},fnUploadFile:p=>{e.dialog({component:Yt,componentProps:{folder:p}}).onOk(async()=>{try{e.loading.show(),await ke(),e.loading.hide()}catch(d){e.loading.hide(),console.error(d)}})},fnDeleteFiles:()=>{!O.selectedFiles||e.dialog({component:xt,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC120\uD0DD\uD55C \uD30C\uC77C \uD639\uC740 \uD3F4\uB354\uB97C \uC0AD\uC81C \uD569\uB2C8\uB2E4.",caption:`\uCD1D ${O.selectedFiles.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.`}}).onOk(async()=>{try{e.loading.show(),await ae.delete("/files",{data:{files:O.selectedFiles}}),await ke(),e.loading.hide()}catch(p){console.error(p),e.loading.hide()}})},fnRenameFile:p=>{e.dialog({component:$e,componentProps:{icon:"edit",iconColor:"primary",title:"\uD30C\uC77C(\uD3F4\uB354)\uC774\uB984 \uBCC0\uACBD",inputValue:p.name}}).onOk(async d=>{try{e.loading.show(),await ae.put("/files/rename",{oldFile:p,newName:d}),await ke(),e.loading.hide()}catch(h){console.error(h),e.loading.hide()}})},fnDownloadFiles:async()=>{try{if(O.selectedFiles&&O.selectedFiles.length){e.loading.show();const p=await ae.get("/files/downloads",{params:{files:JSON.stringify(O.selectedFiles)},responseType:"blob"});e.loading.hide();const d=window.URL.createObjectURL(new Blob([p.data])),h=document.createElement("a");h.href=d,h.setAttribute("download","download.zip"),document.body.appendChild(h),h.click(),h.remove()}}catch(p){e.loading.hide(),console.error(p)}},fnDownloadFile:async p=>{try{e.loading.show();const d=await ae.get("/files/download",{params:{file:JSON.stringify(p)},responseType:"blob"});e.loading.hide();const h=window.URL.createObjectURL(new Blob([d.data])),x=document.createElement("a");x.href=h,x.setAttribute("download",p.base),document.body.appendChild(x),x.click(),x.remove()}catch(d){e.loading.hide(),console.error(d)}}}};export{rl as Q,Et as T,al as a,ke as b,il as c,O as f,nl as u};
