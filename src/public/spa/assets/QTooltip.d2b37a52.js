import{u as ee,ao as te,ap as ae,aq as oe,r as O,c as f,ar as ne,as as ie,at as le,au as se,av as re,w as E,m as k,al as C,ak as x,ac as ue,h as H,q as ce,g as de,y as fe,aE as ve}from"./index.2e86d1d2.js";import{u as he,v as q,a as ge,p as A,b as me,c as ye,r as D,s as Te,d as M,e as pe}from"./QMenu.8ff9c640.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...oe],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>A(e.anchor,a.lang.rtl)),Q=f(()=>A(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:_}=le(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=me(e,P),{anchorEl:o,canShow:V,anchorEvents:r}=ye({showing:c,configureAnchorEl:X}),{show:$,hide:g}=se({showing:c,canShow:V,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:z}=re(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?pe:D)(t)}),k(()=>{D(t)})}function F(t){p(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=E(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function G(t){N(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),C(r,"tooltipTemp")}function u(){Te({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(C(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},fe(j.default)):null}function Z(){return H(ce,R.value,Y)}return k(S),Object.assign(h.proxy,{updatePosition:u}),z}});export{Pe as Q};
