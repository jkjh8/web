import{a7 as ee,a8 as te,a9 as ae,aa as oe,ab as O,ac as ne,ad as ie,r as k,c as f,ae as C,af as le,ag as se,ah as re,ai as ue,aj as ce,ak as de,al as fe,w as E,m as x,am as H,an as q,ao as he,ap as A,aq as j,ar as ve,h as D,q as ge,g as me,as as ye,at as Te,au as pe}from"./index.9636d079.js";var Se=ee({name:"QTooltip",inheritAttrs:!1,props:{...te,...ae,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:O},self:{type:String,default:"top middle",validator:O},offset:{type:Array,default:()=>[14,14],validator:ne},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ie],setup(e,{slots:M,emit:y,attrs:h}){let i,l;const v=me(),{proxy:{$q:a}}=v,s=k(null),c=k(!1),L=f(()=>C(e.anchor,a.lang.rtl)),Q=f(()=>C(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=le(),{registerTimeout:d}=se(),{transitionProps:R,transitionStyle:_}=re(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=ue(e,P),{anchorEl:o,canShow:V,anchorEvents:r}=ce({showing:c,configureAnchorEl:X}),{show:$,hide:g}=de({showing:c,canShow:V,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:z}=fe(v,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&pe(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?ye:H)(t)}),x(()=>{H(t)})}function F(t){p(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=E(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function G(t){N(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),q(r,"tooltipTemp")}function u(){he({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){A(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);j(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(q(r,"tooltipTemp"),A(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];j(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ve(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(T.value,t)}}function Y(){return c.value===!0?D("div",{...h,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,_.value],role:"tooltip"},Te(M.default)):null}function Z(){return D(ge,R.value,Y)}return x(S),Object.assign(v.proxy,{updatePosition:u}),z}});export{Se as Q};
