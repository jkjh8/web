import{r as z,_ as k,o as P,$ as q,m as R,a0 as D,n as _,h as g,g as H,a1 as F,i as U,a2 as $,a3 as N,c as f,w as S,a4 as K,a5 as A,a6 as G,a7 as J,a8 as X,a9 as Y,aa as Z,ab as E,k as C,a as ee,ac as te}from"./index.34791908.js";function ne(){const e=z(!k.value);return e.value===!1&&P(()=>{e.value=!0}),{isHydrated:e}}const I=typeof ResizeObserver!="undefined",M=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:p}){let i=null,t,o={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:r,offsetHeight:l}=t;(r!==o.width||l!==o.height)&&(o={width:r,height:l},p("resize",o))}}const{proxy:v}=H();if(v.trigger=s,I===!0){let r;const l=h=>{t=v.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):h!==!0&&_(()=>{l(!0)})};return P(()=>{l()}),R(()=>{i!==null&&clearTimeout(i),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),D}else{let h=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,F.passive),l=void 0)},m=function(){h(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,F.passive),u())};const{isHydrated:r}=ne();let l;return P(()=>{_(()=>{t=v.$el,t&&m()})}),R(h),()=>{if(r.value===!0)return g("object",{class:"q--avoid-card-border",style:M.style,tabindex:-1,type:"text/html",data:M.url,"aria-hidden":"true",onLoad:m})}}}}),ae=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:i}){const{proxy:{$q:t}}=H(),o=U(N,$);if(o===$)return console.error("QHeader needs to be child of QLayout"),$;const s=z(parseInt(e.heightHint,10)),u=z(!0),v=f(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?s.value:0;const n=s.value-o.scroll.value.position;return n>0?n:0}),l=f(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),h=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),m=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const n=o.rows.value.top,b={};return n[0]==="l"&&o.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function c(n,b){o.update("header",n,b)}function y(n,b){n.value!==b&&(n.value=b)}function Q({height:n}){y(s,n),c("size",n)}function O(n){h.value===!0&&y(u,!0),i("focusin",n)}S(()=>e.modelValue,n=>{c("space",n),y(u,!0),o.animate()}),S(r,n=>{c("offset",n)}),S(()=>e.reveal,n=>{n===!1&&y(u,e.modelValue)}),S(u,n=>{o.animate(),i("reveal",n)}),S(o.scroll,n=>{e.reveal===!0&&y(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),R(()=>{o.instances.header===L&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=K(p.default,[]);return e.elevated===!0&&n.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(g(B,{debounce:0,onResize:Q})),g("header",{class:m.value,style:w.value,onFocusin:O},n)}}}),re=q({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:i}}=H(),t=U(N,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;A(J,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:o.value},G(p.default))}});const{passive:j}=F,oe=["both","horizontal","vertical"];var ie=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>oe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;S(()=>e.scrollTarget,()=>{r(),v()});function u(){t!==null&&t();const m=Math.max(0,Y(o)),w=Z(o),c={top:m-i.position.top,left:w-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:m,left:w},i.directionChanged=i.direction!==y,i.delta=c,i.directionChanged===!0&&(i.direction=y,i.inflectionPoint=i.position),p("scroll",{...i})}function v(){o=X(s,e.scrollTarget),o.addEventListener("scroll",l,j),l(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",l,j),o=void 0)}function l(m){if(m===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[w,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(w),t=null}}}const{proxy:h}=H();return S(()=>h.$q.lang.rtl,u),P(()=>{s=h.$el.parentNode,v()}),R(()=>{t!==null&&t(),r()}),Object.assign(h,{trigger:l,getPosition:()=>i}),D}}),se=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:i}){const{proxy:{$q:t}}=H(),o=z(null),s=z(t.screen.height),u=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),l=z(k.value===!0?0:E()),h=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};v.value=d,e.onScroll!==void 0&&i("scroll",d)}}function Q(a){const{height:d,width:x}=a;let T=!1;s.value!==d&&(T=!0,s.value=d,e.onScrollHeight!==void 0&&i("scrollHeight",d),L()),u.value!==x&&(T=!0,u.value=x),T===!0&&e.onResize!==void 0&&i("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,L())}function L(){if(e.container===!0){const a=s.value>r.value?E():0;l.value!==a&&(l.value=a)}}let n=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:r,scrollbarWidth:l,totalWidth:f(()=>u.value+l.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:v,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,d,x){b[a][d]=x}};if(A(N,b),E()>0){let x=function(){a=null,d.classList.remove("hide-scrollbar")},T=function(){if(a===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},V=function(W){a!==null&&W==="remove"&&(clearTimeout(a),x()),window[`${W}EventListener`]("resize",T)},a=null;const d=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ee(()=>{V("remove")})}return()=>{const a=te(p.default,[g(ie,{onScroll:y}),g(B,{onResize:Q})]),d=g("div",{class:h.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:o},[g(B,{onResize:O}),g("div",{class:"absolute-full",style:w.value},[g("div",{class:"scroll",style:c.value},[d])])]):d}}});export{ae as Q,re as a,se as b};
