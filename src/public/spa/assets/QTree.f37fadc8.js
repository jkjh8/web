import{aJ as Ke,bH as L,aB as we,bI as ze,ak as P,bJ as Y,bK as oe,bL as H,bM as Z,ah as J,ao as ee,aj as Ae,a1 as ve,aN as he,aO as ye,r as N,c as T,w as j,n as be,h as b,an as G,bN as pe,at as Me,g as me,m as Be,bO as Fe,bE as Ne,N as de,aS as Le,q as Oe,b4 as Ve,bh as se}from"./index.93de1c34.js";import{Q as $e}from"./QSlideTransition.f0bcd4de.js";const te={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},De=Object.keys(te);te.all=!0;function ce(e){const a={};for(const o of De)e[o]===!0&&(a[o]=!0);return Object.keys(a).length===0?te:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Pe=["INPUT","TEXTAREA"];function fe(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Pe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function W(e,a,o){const _=Z(e);let r,l=_.left-a.event.x,s=_.top-a.event.y,y=Math.abs(l),v=Math.abs(s);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?r=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?r=s<0?"up":"down":c.up===!0&&s<0?(r="up",y>v&&(c.left===!0&&l<0?r="left":c.right===!0&&l>0&&(r="right"))):c.down===!0&&s>0?(r="down",y>v&&(c.left===!0&&l<0?r="left":c.right===!0&&l>0&&(r="right"))):c.left===!0&&l<0?(r="left",y<v&&(c.up===!0&&s<0?r="up":c.down===!0&&s>0&&(r="down"))):c.right===!0&&l>0&&(r="right",y<v&&(c.up===!0&&s<0?r="up":c.down===!0&&s>0&&(r="down")));let E=!1;if(r===void 0&&o===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};r=a.event.lastDir,E=!0,r==="left"||r==="right"?(_.left-=l,y=0,l=0):(_.top-=s,v=0,s=0)}return{synthetic:E,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:_,direction:r,isFirst:a.event.isFirst,isFinal:o===!0,duration:Date.now()-a.event.time,distance:{x:y,y:v},offset:{x:l,y:s},delta:{x:_.left-a.event.lastX,y:_.top-a.event.lastY}}}}let je=0;var Qe=Ke({name:"touch-pan",beforeMount(e,{value:a,modifiers:o}){if(o.mouse!==!0&&L.has.touch!==!0)return;function _(l,s){o.mouse===!0&&s===!0?ee(l):(o.stop===!0&&H(l),o.prevent===!0&&oe(l))}const r={uid:"qvtp_"+je++,handler:a,modifiers:o,direction:ce(o),noop:we,mouseStart(l){fe(l,r)&&ze(l)&&(P(r,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),r.start(l,!0))},touchStart(l){if(fe(l,r)){const s=l.target;P(r,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),r.start(l)}},start(l,s){if(L.is.firefox===!0&&Y(e,!0),r.lastEvt=l,s===!0||o.stop===!0){if(r.direction.all!==!0&&(s!==!0||r.modifiers.mouseAllDir!==!0&&r.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&oe(c),l.cancelBubble===!0&&H(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[r.uid]:l.qClonedBy.concat(r.uid)}),r.initialEvent={target:l.target,event:c}}H(l)}const{left:y,top:v}=Z(l);r.event={x:y,y:v,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:y,lastY:v}},move(l){if(r.event===void 0)return;const s=Z(l),y=s.left-r.event.x,v=s.top-r.event.y;if(y===0&&v===0)return;r.lastEvt=l;const c=r.event.mouse===!0,E=()=>{_(l,c);let x;o.preserveCursor!==!0&&o.preservecursor!==!0&&(x=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ae(),r.styleCleanup=S=>{if(r.styleCleanup=void 0,x!==void 0&&(document.documentElement.style.cursor=x),document.body.classList.remove("non-selectable"),c===!0){const A=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{A(),S()},50):A()}else S!==void 0&&S()}};if(r.event.detected===!0){r.event.isFirst!==!0&&_(l,r.event.mouse);const{payload:x,synthetic:S}=W(l,r,!1);x!==void 0&&(r.handler(x)===!1?r.end(l):(r.styleCleanup===void 0&&r.event.isFirst===!0&&E(),r.event.lastX=x.position.left,r.event.lastY=x.position.top,r.event.lastDir=S===!0?void 0:x.direction,r.event.isFirst=!1));return}if(r.direction.all===!0||c===!0&&(r.modifiers.mouseAllDir===!0||r.modifiers.mousealldir===!0)){E(),r.event.detected=!0,r.move(l);return}const K=Math.abs(y),w=Math.abs(v);K!==w&&(r.direction.horizontal===!0&&K>w||r.direction.vertical===!0&&K<w||r.direction.up===!0&&K<w&&v<0||r.direction.down===!0&&K<w&&v>0||r.direction.left===!0&&K>w&&y<0||r.direction.right===!0&&K>w&&y>0?(r.event.detected=!0,r.move(l)):r.end(l,!0))},end(l,s){if(r.event!==void 0){if(J(r,"temp"),L.is.firefox===!0&&Y(e,!1),s===!0)r.styleCleanup!==void 0&&r.styleCleanup(),r.event.detected!==!0&&r.initialEvent!==void 0&&r.initialEvent.target.dispatchEvent(r.initialEvent.event);else if(r.event.detected===!0){r.event.isFirst===!0&&r.handler(W(l===void 0?r.lastEvt:l,r).payload);const{payload:y}=W(l===void 0?r.lastEvt:l,r,!0),v=()=>{r.handler(y)};r.styleCleanup!==void 0?r.styleCleanup(v):v()}r.event=void 0,r.initialEvent=void 0,r.lastEvt=void 0}}};if(e.__qtouchpan=r,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";P(r,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}L.has.touch===!0&&P(r,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const o=e.__qtouchpan;o!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&o.end(),o.handler=a.value),o.direction=ce(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),J(a,"main"),J(a,"temp"),L.is.firefox===!0&&Y(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}}),Ue=ve({name:"QSplitter",props:{...he,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:a,emit:o}){const{proxy:{$q:_}}=me(),r=ye(e,_),l=N(null),s={before:N(null),after:N(null)},y=T(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(r.value===!0?" q-splitter--dark":"")),v=T(()=>e.horizontal===!0?"height":"width"),c=T(()=>e.reverse!==!0?"before":"after"),E=T(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function K(C){return(e.unit==="%"?C:Math.round(C))+e.unit}const w=T(()=>({[c.value]:{[v.value]:K(e.modelValue)}}));let x,S,A,O,k;function p(C){if(C.isFirst===!0){const M=l.value.getBoundingClientRect()[v.value];x=e.horizontal===!0?"up":"left",S=e.unit==="%"?100:M,A=Math.min(S,E.value[1],Math.max(E.value[0],e.modelValue)),O=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:_.lang.rtl===!0?-1:1)*(e.unit==="%"?M===0?0:100/M:1),l.value.classList.add("q-splitter--active");return}if(C.isFinal===!0){k!==e.modelValue&&o("update:modelValue",k),l.value.classList.remove("q-splitter--active");return}const z=A+O*(C.direction===x?-1:1)*C.distance[e.horizontal===!0?"y":"x"];k=Math.min(S,E.value[1],Math.max(E.value[0],z)),s[c.value].value.style[v.value]=K(k),e.emitImmediately===!0&&e.modelValue!==k&&o("update:modelValue",k)}const Q=T(()=>[[Qe,p,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function V(C,z){C<z[0]?o("update:modelValue",z[0]):C>z[1]&&o("update:modelValue",z[1])}return j(()=>e.modelValue,C=>{V(C,E.value)}),j(()=>e.limits,()=>{be(()=>{V(e.modelValue,E.value)})}),()=>{const C=[b("div",{ref:s.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:w.value.before},G(a.before)),b("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[pe("div",{class:"q-splitter__separator-area absolute-full"},G(a.separator),"sep",e.disable!==!0,()=>Q.value)]),b("div",{ref:s.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:w.value.after},G(a.after))];return b("div",{class:y.value,ref:l},Me(a.default,C))}}});const Ie=["none","strict","leaf","leaf-filtered"];var Ye=ve({name:"QTree",props:{...he,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>Ie.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:a,emit:o}){const{proxy:_}=me(),{$q:r}=_,l=ye(e,r),s=N({}),y=N(e.ticked||[]),v=N(e.expanded||[]);let c={};Be(()=>{c={}});const E=T(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(l.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),K=T(()=>e.selected!==void 0),w=T(()=>e.icon||r.iconSet.tree.icon),x=T(()=>e.controlColor||e.color),S=T(()=>e.textColor!==void 0?` text-${e.textColor}`:""),A=T(()=>{const i=e.selectedColor||e.color;return i?` text-${i}`:""}),O=T(()=>e.filterMethod!==void 0?e.filterMethod:(i,n)=>{const t=n.toLowerCase();return i[e.labelKey]&&i[e.labelKey].toLowerCase().indexOf(t)!==-1}),k=T(()=>{const i={},n=(t,d)=>{const u=t.tickStrategy||(d?d.tickStrategy:e.tickStrategy),h=t[e.nodeKey],m=t[e.childrenKey]&&Array.isArray(t[e.childrenKey])&&t[e.childrenKey].length!==0,B=t.disabled!==!0&&K.value===!0&&t.selectable!==!1,q=t.disabled!==!0&&t.expandable!==!1,Ee=u!=="none",D=u==="strict",ne=u==="leaf-filtered",R=u==="leaf"||u==="leaf-filtered";let U=t.disabled!==!0&&t.tickable!==!1;R===!0&&U===!0&&d&&d.tickable!==!0&&(U=!1);let F=t.lazy;F===!0&&s.value[h]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&(F=s.value[h]);const f={key:h,parent:d,isParent:m,lazy:F,disabled:t.disabled,link:t.disabled!==!0&&(B===!0||q===!0&&(m===!0||F===!0)),children:[],matchesFilter:e.filter?O.value(t,e.filter):!0,selected:h===e.selected&&B===!0,selectable:B,expanded:m===!0?v.value.includes(h):!1,expandable:q,noTick:t.noTick===!0||D!==!0&&F&&F!=="loaded",tickable:U,tickStrategy:u,hasTicking:Ee,strictTicking:D,leafFilteredTicking:ne,leafTicking:R,ticked:D===!0?y.value.includes(h):m===!0?!1:y.value.includes(h)};if(i[h]=f,m===!0&&(f.children=t[e.childrenKey].map(g=>n(g,f)),e.filter&&(f.matchesFilter!==!0?f.matchesFilter=f.children.some(g=>g.matchesFilter):f.noTick!==!0&&f.disabled!==!0&&f.tickable===!0&&ne===!0&&f.children.every(g=>g.matchesFilter!==!0||g.noTick===!0||g.tickable!==!0)===!0&&(f.tickable=!1)),f.matchesFilter===!0&&(f.noTick!==!0&&D!==!0&&f.children.every(g=>g.noTick)===!0&&(f.noTick=!0),R))){if(f.ticked=!1,f.indeterminate=f.children.some(g=>g.indeterminate===!0),f.tickable=f.tickable===!0&&f.children.some(g=>g.tickable),f.indeterminate!==!0){const g=f.children.reduce((ue,Te)=>Te.ticked===!0?ue+1:ue,0);g===f.children.length?f.ticked=!0:g>0&&(f.indeterminate=!0)}f.indeterminate===!0&&(f.indeterminateNextState=f.children.every(g=>g.tickable!==!0||g.ticked!==!0))}return f};return e.nodes.forEach(t=>n(t,null)),i});j(()=>e.ticked,i=>{y.value=i}),j(()=>e.expanded,i=>{v.value=i});function p(i){const n=[].reduce,t=(d,u)=>{if(d||!u)return d;if(Array.isArray(u)===!0)return n.call(Object(u),t,d);if(u[e.nodeKey]===i)return u;if(u[e.childrenKey])return t(null,u[e.childrenKey])};return t(null,e.nodes)}function Q(){return y.value.map(i=>p(i))}function V(){return v.value.map(i=>p(i))}function C(i){return i&&k.value[i]?k.value[i].expanded:!1}function z(){e.expanded!==void 0?o("update:expanded",[]):v.value=[]}function M(){const i=[],n=t=>{t[e.childrenKey]&&t[e.childrenKey].length!==0&&t.expandable!==!1&&t.disabled!==!0&&(i.push(t[e.nodeKey]),t[e.childrenKey].forEach(n))};e.nodes.forEach(n),e.expanded!==void 0?o("update:expanded",i):v.value=i}function I(i,n,t=p(i),d=k.value[i]){if(d.lazy&&d.lazy!=="loaded"){if(d.lazy==="loading")return;s.value[i]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),o("lazyLoad",{node:t,key:i,done:u=>{s.value[i]="loaded",t[e.childrenKey]=Array.isArray(u)===!0?u:[],be(()=>{const h=k.value[i];h&&h.isParent===!0&&re(i,!0)})},fail:()=>{delete s.value[i],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else d.isParent===!0&&d.expandable===!0&&re(i,n)}function re(i,n){let t=v.value;const d=e.expanded!==void 0;if(d===!0&&(t=t.slice()),n){if(e.accordion&&k.value[i]){const u=[];k.value[i].parent?k.value[i].parent.children.forEach(h=>{h.key!==i&&h.expandable===!0&&u.push(h.key)}):e.nodes.forEach(h=>{const m=h[e.nodeKey];m!==i&&u.push(m)}),u.length!==0&&(t=t.filter(h=>u.includes(h)===!1))}t=t.concat([i]).filter((u,h,m)=>m.indexOf(u)===h)}else t=t.filter(u=>u!==i);d===!0?o("update:expanded",t):v.value=t}function ge(i){return i&&k.value[i]?k.value[i].ticked:!1}function $(i,n){let t=y.value;const d=e.ticked!==void 0;d===!0&&(t=t.slice()),n?t=t.concat(i).filter((u,h,m)=>m.indexOf(u)===h):t=t.filter(u=>i.includes(u)===!1),d===!0&&o("update:ticked",t)}function ke(i,n,t){const d={tree:_,node:i,key:t,color:e.color,dark:l.value};return se(d,"expanded",()=>n.expanded,u=>{u!==n.expanded&&I(t,u)}),se(d,"ticked",()=>n.ticked,u=>{u!==n.ticked&&$([t],u)}),d}function ie(i){return(e.filter?i.filter(n=>k.value[n[e.nodeKey]].matchesFilter):i).map(n=>xe(n))}function _e(i){if(i.icon!==void 0)return b(de,{class:"q-tree__icon q-mr-sm",name:i.icon,color:i.iconColor});const n=i.img||i.avatar;if(n)return b("img",{class:`q-tree__${i.img?"img":"avatar"} q-mr-sm`,src:n})}function Ce(){o("afterShow")}function qe(){o("afterHide")}function xe(i){const n=i[e.nodeKey],t=k.value[n],d=i.header&&a[`header-${i.header}`]||a["default-header"],u=t.isParent===!0?ie(i[e.childrenKey]):[],h=u.length!==0||t.lazy&&t.lazy!=="loaded";let m=i.body&&a[`body-${i.body}`]||a["default-body"];const B=d!==void 0||m!==void 0?ke(i,t,n):null;return m!==void 0&&(m=b("div",{class:"q-tree__node-body relative-position"},[b("div",{class:S.value},[m(B)])])),b("div",{key:n,class:`q-tree__node relative-position q-tree__node--${h===!0?"parent":"child"}`},[b("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,ariaExpanded:u.length>0?t.expanded:null,role:"treeitem",onClick:q=>{ae(i,t,q)},onKeypress(q){Fe(q)!==!0&&(q.keyCode===13?ae(i,t,q,!0):q.keyCode===32&&X(i,t,q,!0))}},[b("div",{class:"q-focus-helper",tabindex:-1,ref:q=>{c[t.key]=q}}),t.lazy==="loading"?b(Ne,{class:"q-tree__spinner",color:x.value}):h===!0?b(de,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:w.value,onClick(q){X(i,t,q)}}):null,t.hasTicking===!0&&t.noTick!==!0?b(Le,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:x.value,dark:l.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:ee,"onUpdate:modelValue":q=>{Se(t,q)}}):null,b("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?A.value:S.value)},[d?d(B):[_e(i),b("div",i[e.labelKey])]])]),h===!0?e.noTransition===!0?t.expanded===!0?b("div",{class:"q-tree__node-collapsible"+S.value,key:`${n}__q`},[m,b("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":""),role:"group"},u)]):null:b($e,{duration:e.duration,onShow:Ce,onHide:qe},()=>Oe(b("div",{class:"q-tree__node-collapsible"+S.value,key:`${n}__q`},[m,b("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":""),role:"group"},u)]),[[Ve,t.expanded]])):m])}function le(i){const n=c[i];n&&n.focus()}function ae(i,n,t,d){d!==!0&&n.selectable!==!1&&le(n.key),K.value&&n.selectable?e.noSelectionUnset===!1?o("update:selected",n.key!==e.selected?n.key:null):n.key!==e.selected&&o("update:selected",n.key===void 0?null:n.key):X(i,n,t,d),typeof i.handler=="function"&&i.handler(i)}function X(i,n,t,d){t!==void 0&&ee(t),d!==!0&&n.selectable!==!1&&le(n.key),I(n.key,!n.expanded,i,n)}function Se(i,n){if(i.indeterminate===!0&&(n=i.indeterminateNextState),i.strictTicking)$([i.key],n);else if(i.leafTicking){const t=[],d=u=>{u.isParent?(n!==!0&&u.noTick!==!0&&u.tickable===!0&&t.push(u.key),u.leafTicking===!0&&u.children.forEach(d)):u.noTick!==!0&&u.tickable===!0&&(u.leafFilteredTicking!==!0||u.matchesFilter===!0)&&t.push(u.key)};d(i),$(t,n)}}return e.defaultExpandAll===!0&&M(),Object.assign(_,{getNodeByKey:p,getTickedNodes:Q,getExpandedNodes:V,isExpanded:C,collapseAll:z,expandAll:M,setExpanded:I,isTicked:ge,setTicked:$}),()=>{const i=ie(e.nodes);return b("div",{class:E.value,role:"tree"},i.length===0?e.filter?e.noResultsLabel||r.lang.tree.noResults:e.noNodesLabel||r.lang.tree.noNodes:i)}}});export{Ye as Q,Qe as T,Ue as a};
