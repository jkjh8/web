import{a3 as ee,a4 as te,a6 as ae,a7 as oe,r as O,c as f,a9 as ne,aa as ie,ab as le,ac as se,ad as re,D as k,Z as C,_ as E,Y as x,ai as ue,x as H,al as ce,g as de,ak as fe,ap as ve}from"./index.55b3bbb2.js";import{u as he,v as A,a as ge,p as D,b as me,d as ye,r as q,s as Te,c as M,e as pe}from"./QMenu.8a5978a6.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...oe],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,a.lang.rtl)),Q=f(()=>D(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:_,removeTick:B}=ne(),{registerTimeout:d}=ie(),{transitionProps:N,transitionStyle:R}=le(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=me(e,P),{anchorEl:o,canShow:V,anchorEvents:r}=ye({showing:c,configureAnchorEl:J}),{show:Y,hide:g}=se({showing:c,canShow:V,handleShow:$,handleHide:z,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:G});const{showPortal:p,hidePortal:b,renderPortal:Z}=re(h,s,X,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(m,n=>{(n===!0?pe:q)(t)}),C(()=>{q(t)})}function $(t){p(),_(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function z(t){B(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),E(r,"tooltipTemp")}function u(){Te({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{Y(t)},e.delay)}function G(t){a.platform.is.mobile===!0&&(E(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function J(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(T.value,t)}}function K(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,R.value],role:"tooltip"},fe(j.default)):null}function X(){return H(ce,N.value,K)}return C(S),Object.assign(h.proxy,{updatePosition:u}),Z}});export{Pe as Q};