import{Q as V,a as E}from"./QScrollObserver.d889a16b.js";import{a1 as R,i as O,ap as x,aq as F,r as b,c as i,w as y,p as W,ar as K,h as d,g as P,as as I,at as N,au as U,an as j,av as M,aw as _,l as Q,a as k}from"./index.0736cdf9.js";var G=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:$,emit:g}){const{proxy:{$q:o}}=P(),t=O(F,x);if(t===x)return console.error("QHeader needs to be child of QLayout"),x;const r=b(parseInt(e.heightHint,10)),u=b(!0),z=i(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||o.platform.is.ios&&t.isContainer.value===!0),m=i(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return u.value===!0?r.value:0;const l=r.value-t.scroll.value.position;return l>0?l:0}),c=i(()=>e.modelValue!==!0||z.value===!0&&u.value!==!0),p=i(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),C=i(()=>"q-header q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=i(()=>{const l=t.rows.value.top,h={};return l[0]==="l"&&t.left.space===!0&&(h[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(h[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function f(l,h){t.update("header",l,h)}function q(l,h){l.value!==h&&(l.value=h)}function v({height:l}){q(r,l),f("size",l)}function w(l){p.value===!0&&q(u,!0),g("focusin",l)}y(()=>e.modelValue,l=>{f("space",l),q(u,!0),t.animate()}),y(m,l=>{f("offset",l)}),y(()=>e.reveal,l=>{l===!1&&q(u,e.modelValue)}),y(u,l=>{t.animate(),g("reveal",l)}),y(t.scroll,l=>{e.reveal===!0&&q(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const S={};return t.instances.header=S,e.modelValue===!0&&f("size",r.value),f("space",e.modelValue),f("offset",m.value),W(()=>{t.instances.header===S&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const l=K($.default,[]);return e.elevated===!0&&l.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(d(V,{debounce:0,onResize:v})),d("header",{class:C.value,style:L.value,onFocusin:w},l)}}}),J=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:$,emit:g}){const{proxy:{$q:o}}=P(),t=O(F,x);if(t===x)return console.error("QFooter needs to be child of QLayout"),x;const r=b(parseInt(e.heightHint,10)),u=b(!0),z=b(I.value===!0||t.isContainer.value===!0?0:window.innerHeight),m=i(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||o.platform.is.ios&&t.isContainer.value===!0),c=i(()=>t.isContainer.value===!0?t.containerHeight.value:z.value),p=i(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?r.value:0;const a=t.scroll.value.position+c.value+r.value-t.height.value;return a>0?a:0}),C=i(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),L=i(()=>e.modelValue===!0&&C.value===!0&&e.reveal===!0),f=i(()=>"q-footer q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(m.value!==!0?" hidden":""):"")),q=i(()=>{const a=t.rows.value.bottom,s={};return a[0]==="l"&&t.left.space===!0&&(s[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(s[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),s});function v(a,s){t.update("footer",a,s)}function w(a,s){a.value!==s&&(a.value=s)}function S({height:a}){w(r,a),v("size",a)}function l(){if(e.reveal!==!0)return;const{direction:a,position:s,inflectionPoint:H}=t.scroll.value;w(u,a==="up"||s-H<100||t.height.value-c.value-s-r.value<300)}function h(a){L.value===!0&&w(u,!0),g("focusin",a)}y(()=>e.modelValue,a=>{v("space",a),w(u,!0),t.animate()}),y(p,a=>{v("offset",a)}),y(()=>e.reveal,a=>{a===!1&&w(u,e.modelValue)}),y(u,a=>{t.animate(),g("reveal",a)}),y([r,t.scroll,t.height],l),y(()=>o.screen.height,a=>{t.isContainer.value!==!0&&w(z,a)});const n={};return t.instances.footer=n,e.modelValue===!0&&v("size",r.value),v("space",e.modelValue),v("offset",p.value),W(()=>{t.instances.footer===n&&(t.instances.footer=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const a=N($.default,[d(V,{debounce:0,onResize:S})]);return e.elevated===!0&&a.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d("footer",{class:f.value,style:q.value,onFocusin:h},a)}}}),X=R({name:"QPageContainer",setup(e,{slots:$}){const{proxy:{$q:g}}=P(),o=O(F,x);if(o===x)return console.error("QPageContainer needs to be child of QLayout"),x;U(M,!0);const t=i(()=>{const r={};return o.header.space===!0&&(r.paddingTop=`${o.header.size}px`),o.right.space===!0&&(r[`padding${g.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(r.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(r[`padding${g.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),r});return()=>d("div",{class:"q-page-container",style:t.value},j($.default))}}),Y=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:$,emit:g}){const{proxy:{$q:o}}=P(),t=b(null),r=b(o.screen.height),u=b(e.container===!0?0:o.screen.width),z=b({position:0,direction:"down",inflectionPoint:0}),m=b(0),c=b(I.value===!0?0:_()),p=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=i(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),L=i(()=>c.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),f=i(()=>c.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function q(n){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};z.value=a,e.onScroll!==void 0&&g("scroll",a)}}function v(n){const{height:a,width:s}=n;let H=!1;r.value!==a&&(H=!0,r.value=a,e.onScrollHeight!==void 0&&g("scrollHeight",a),S()),u.value!==s&&(H=!0,u.value=s),H===!0&&e.onResize!==void 0&&g("resize",n)}function w({height:n}){m.value!==n&&(m.value=n,S())}function S(){if(e.container===!0){const n=r.value>m.value?_():0;c.value!==n&&(c.value=n)}}let l=null;const h={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:t,height:r,containerHeight:m,scrollbarWidth:c,totalWidth:i(()=>u.value+c.value),rows:i(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:z,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,a,s){h[n][a]=s}};if(U(F,h),_()>0){let s=function(){n=null,a.classList.remove("hide-scrollbar")},H=function(){if(n===null){if(a.scrollHeight>o.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(s,300)},B=function(T){n!==null&&T==="remove"&&(clearTimeout(n),s()),window[`${T}EventListener`]("resize",H)},n=null;const a=document.body;y(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),k(()=>{B("remove")})}return()=>{const n=N($.default,[d(E,{onScroll:q}),d(V,{onResize:v})]),a=d("div",{class:p.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},n);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:t},[d(V,{onResize:w}),d("div",{class:"absolute-full",style:L.value},[d("div",{class:"scroll",style:f.value},[a])])]):a}}});export{G as Q,J as a,X as b,Y as c};
