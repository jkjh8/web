import{a2 as je,b1 as Qe,b2 as ft,b3 as vt,b4 as mt,a4 as Bt,aD as Rt,a7 as Et,aE as Lt,c as f,b5 as Ht,g as Ue,h,R as Be,b6 as Tt,b7 as Dt,an as ne,ap as Pt,r as E,w as me,n as G,b8 as Nt,b as $t,b9 as Kt,ba as jt,m as St,bb as Qt,bc as Ut,bd as rt,be as xe,l as Wt,bf as Xt,X as $e,bg as Yt,bh as ve,bi as ct,W as Gt,bj as Jt,M as Zt,aK as el,aL as tl,aH as ll,ax as ul}from"./index.01937250.js";import{Q as nl}from"./QMenu.850075a6.js";var il=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:ft,setup(){return vt(mt({requiredForAttr:!1,tagProp:!0}))}});const ol={xs:8,sm:10,md:14,lg:20,xl:24};var al=je({name:"QChip",props:{...Bt,...Rt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:a}){const{proxy:{$q:y}}=Ue(),M=Et(e,y),o=Lt(e,ol),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||y.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||y.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||y.lang.label.remove};return{chip:d,remove:D}});function C(d){d.keyCode===13&&x(d)}function x(d){e.disable||(a("update:selected",!e.selected),a("click",d))}function A(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function T(){const d=[];z.value===!0&&d.push(h("div",{class:"q-focus-helper"})),F.value===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Tt(r.default,D))),e.iconRight&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:A,onKeyup:A})),d}return()=>{if(e.modelValue===!1)return;const d={class:c.value,style:o.value};return z.value===!0&&Object.assign(d,w.value.chip,{onClick:x,onKeyup:C}),Ht("div",d,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Dt,e.ripple]])}}});let Re=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Re=e.scrollLeft>=0,e.remove()}const K=1e3,rl=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,cl=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];gt.call(a,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const y=a[r];y&&y.dataset&&(y.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function Ke(e,r,a,y,M,o,F,b){const g=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,o===!0&&(c.scrollStart=(Re===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),a!==null)for(let w=a.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(y!==null)for(let w=y.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=g.getBoundingClientRect(),C=r.getBoundingClientRect();M===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,a,y){r==="end"&&(r=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(y===!0&&(r=(Re===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):a===!0?(y===!0&&(r=(Re===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function ke(e,r,a,y){if(a>=y)return 0;const M=r.length,o=Math.floor(a/K),F=Math.floor((y-1)/K)+1;let b=e.slice(o,F).reduce(Se,0);return a%K!==0&&(b-=r.slice(o*K,a).reduce(Se,0)),y%K!==0&&y!==M&&(b-=r.slice(y,F*K).reduce(Se,0)),b}const ht={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},gl=Object.keys(ht),sl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...ht};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:a,virtualScrollItemSizeComputed:y}){const M=Ue(),{props:o,emit:F,proxy:b}=M,{$q:g}=b;let z,c,w,C=[],x;const A=E(0),T=E(0),d=E({}),D=E(null),W=E(null),H=E(null),O=E({from:0,to:0}),pe=f(()=>o.tableColspan!==void 0?o.tableColspan:100);y===void 0&&(y=f(()=>o.virtualScrollItemSize));const _=f(()=>y.value+";"+o.virtualScrollHorizontal),X=f(()=>_.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(_,J);function J(){ie(c,!0)}function ge(l){ie(l===void 0?c:l)}function Z(l,i){const v=r();if(v==null||v.nodeType===8)return;const q=Ke(v,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(v,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,rl.indexOf(i)!==-1?i:c!==-1&&l>c?"end":"start")}function qe(){const l=r();if(l==null||l.nodeType===8)return;const i=Ke(l,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),v=e.value-1,q=i.scrollMaxSize-i.offsetStart-i.offsetEnd-T.value;if(z===i.scrollStart)return;if(i.scrollMaxSize<=0){P(l,i,0,0);return}w!==i.scrollViewSize&&j(i.scrollViewSize),he(O.value.from);const B=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(x[v],i.scrollViewSize/2));if(B>0&&Math.ceil(i.scrollStart)>=B){P(l,i,v,i.scrollMaxSize-i.offsetEnd-C.reduce(Se,0));return}let V=0,S=i.scrollStart-i.offsetStart,R=S;if(S<=q&&S+i.scrollViewSize>=A.value)S-=A.value,V=O.value.from,R=S;else for(let m=0;S>=C[m]&&V<v;m++)S-=C[m],V+=K;for(;S>0&&V<v;)S-=x[V],S>-i.scrollViewSize?(V++,R=S):R=x[V]+S;P(l,i,V,R)}function P(l,i,v,q,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,S=V===!0?B.replace("-force",""):B,R=S!==void 0?S:"start";let m=Math.max(0,v-d.value[R]),N=m+d.value.total;N>e.value&&(N=e.value,m=Math.max(0,N-d.value.total)),z=i.scrollStart;const Y=m!==O.value.from||N!==O.value.to;if(Y===!1&&S===void 0){be(v);return}const{activeElement:ze}=document,Q=H.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ae),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ae)})),cl(Q,v-m);const Ie=S!==void 0?x.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=N>=O.value.from&&m<=O.value.to?O.value.to:N;O.value={from:m,to:ee},A.value=ke(C,x,0,m),T.value=ke(C,x,N,e.value),requestAnimationFrame(()=>{O.value.to!==N&&z===i.scrollStart&&(O.value={from:O.value.from,to:N},T.value=ke(C,x,N,e.value))})}requestAnimationFrame(()=>{if(z!==i.scrollStart)return;Y===!0&&he(m);const ee=x.slice(m,v).reduce(Se,0),te=ee+i.offsetStart+A.value,Me=te+x[v];let we=te+q;if(S!==void 0){const Le=ee-Ie,Ve=i.scrollStart+Le;we=V!==!0&&Ve<te&&Me<Ve+i.scrollViewSize?Ve:S==="end"?Me-i.scrollViewSize:te-(S==="start"?0:Math.round((i.scrollViewSize-x[v])/2))}z=we,st(l,we,o.virtualScrollHorizontal,g.lang.rtl),be(v)})}function he(l){const i=H.value;if(i){const v=gt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),q=v.length,B=o.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let V=l,S,R;for(let m=0;m<q;){for(S=B(v[m]),m++;m<q&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;R=S-x[V],R!==0&&(x[V]+=R,C[Math.floor(V/K)]+=R),V++}}}function Ae(){H.value!==null&&H.value!==void 0&&H.value.focus()}function ie(l,i){const v=1*y.value;(i===!0||Array.isArray(x)===!1)&&(x=[]);const q=x.length;x.length=e.value;for(let V=e.value-1;V>=q;V--)x[V]=v;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let S=0;const R=Math.min((V+1)*K,e.value);for(let m=V*K;m<R;m++)S+=x[m];C.push(S)}c=-1,z=void 0,A.value=ke(C,x,0,O.value.from),T.value=ke(C,x,O.value.to,e.value),l>=0?(he(O.value.from),G(()=>{Z(l)})):oe()}function j(l){if(l===void 0&&typeof window!="undefined"){const S=r();S!=null&&S.nodeType!==8&&(l=Ke(S,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const i=parseFloat(o.virtualScrollSliceRatioBefore)||0,v=parseFloat(o.virtualScrollSliceRatioAfter)||0,q=1+i+v,B=l===void 0||l<=0?1:Math.ceil(l/y.value),V=Math.max(1,B,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/q));d.value={total:Math.ceil(V*q),start:Math.ceil(V*i),center:Math.ceil(V*(.5+i)),end:Math.ceil(V*(1+i)),view:B}}function Ee(l,i){const v=o.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+v]:y.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[h("tr",[h("td",{style:{[v]:`${A.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[v]:`${A.value}px`,...q}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},i.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[h("tr",[h("td",{style:{[v]:`${T.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${T.value}px`,...q}})]}function be(l){c!==l&&(o.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<c?"decrease":"increase",ref:b}),c=l)}j();const oe=Nt(qe,g.platform.is.ios===!0?120:35);$t(()=>{j()});let ye=!1;return Kt(()=>{ye=!0}),jt(()=>{if(ye!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,o.virtualScrollHorizontal,g.lang.rtl):Z(c)}),St(()=>{oe.cancel()}),Object.assign(b,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:oe,localResetVirtualScroll:ie,padVirtualScroll:Ee,scrollTo:Z,reset:J,refresh:ge}}const dt=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);var hl=je({name:"QSelect",inheritAttrs:!1,props:{...sl,...Qt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:dt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ft,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:a}){const{proxy:y}=Ue(),{$q:M}=y,o=E(!1),F=E(!1),b=E(-1),g=E(""),z=E(!1),c=E(!1);let w=null,C=null,x,A,T,d=null,D,W,H,O;const pe=E(null),_=E(null),X=E(null),J=E(null),ge=E(null),Z=Ut(e),qe=Yt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:ie,localResetVirtualScroll:j,padVirtualScroll:Ee,onVirtualScrollEvt:be,scrollTo:oe,setVirtualScrollSize:ye}=dl({virtualScrollLength:P,getVirtualScrollTarget:Vt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=mt(),i=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&x!==void 0?x:[],s=n.map(p=>wt(p,u));return e.modelValue===null&&t===!0?s.filter(p=>p!==null):s}return n}),v=f(()=>{const t={};return vl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(i.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=f(()=>P.value===0),m=f(()=>i.value.map(t=>$.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>i.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:yt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:n}=Ae.value;return e.options.slice(t,n).map((u,s)=>{const p=ae.value(u)===!0,k=De(u)===!0,L=t+s,I={clickable:!0,active:k,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":k===!0?"true":"false",id:`${l.targetUid.value}_${L}`,onClick:()=>{le(u)}};return p!==!0&&(b.value===L&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&re(L)})),{index:L,opt:u,html:Y.value(u),label:$.value(u),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Le=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Te(e.optionValue,"value")),$=f(()=>Te(e.optionLabel,"label")),ae=f(()=>Te(e.optionDisable,"disable")),Oe=f(()=>i.value.map(t=>U.value(t))),bt=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(n){A===!0&&ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(i,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&o.value!==!0||B.value!==!0)&&(T!==!0&&fe(),(F.value===!0||o.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(o,Pe),me(P,Ft);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t!==-1&&t<i.value.length)if(e.multiple===!0){const n=e.modelValue.slice();a("remove",{index:t,value:n.splice(t,1)[0]}),a("update:modelValue",n)}else a("update:modelValue",null)}function yt(t){He(t),l.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce($.value(t),!0,!0),a("update:modelValue",u);return}if(i.value.length===0){a("add",{index:0,value:u}),a("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();a("add",{index:s.length,value:u}),s.push(u),a("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?$.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(i.value.length===0||xe(U.value(i.value[0]),u)!==!0)&&a("update:modelValue",e.emitValue===!0?u:t);return}if((A!==!0||z.value===!0)&&l.focus(),Ye(),i.value.length===0){const k=e.emitValue===!0?u:t;a("add",{index:0,value:k}),a("update:modelValue",e.multiple===!0?[k]:k);return}const s=e.modelValue.slice(),p=Oe.value.findIndex(k=>xe(k,u));if(p!==-1)a("remove",{index:p,value:s.splice(p,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const k=e.emitValue===!0?u:t;a("add",{index:s.length,value:k}),s.push(k)}a("update:modelValue",s)}function re(t){if(M.platform.is.desktop!==!0)return;const n=t!==-1&&t<P.value?t:-1;b.value!==n&&(b.value=n)}function _e(t=1,n){if(o.value===!0){let u=b.value;do u=ct(u+t,-1,P.value-1);while(u!==-1&&u!==b.value&&ae.value(e.options[u])===!0);b.value!==u&&(re(u),oe(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(u>=0?$.value(e.options[u]):D,!0))}}function wt(t,n){const u=s=>xe(U.value(s),t);return e.options.find(u)||n.find(u)||t}function Te(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function De(t){const n=U.value(t);return Oe.value.find(u=>xe(u,n))!==void 0}function Ye(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===m.value)&&_.value.select()}function Ge(t){Gt(t,27)===!0&&o.value===!0&&(ve(t),ue(),fe()),a("keyup",t)}function Je(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=k=>{const L=e.options.find(I=>k.value(I).toLocaleLowerCase()===u);return L===void 0?!1:(i.value.indexOf(L)===-1?le(L):ue(),!0)},p=k=>{s(U)!==!0&&(s($)===!0||k===!0||ce(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ze(t){a("keypress",t)}function et(t){if(a("keydown",t),Jt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(b.value!==-1||n===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&o.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),b.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ie.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*ie.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),_e(t.keyCode===38?-1:1,e.multiple));const s=P.value;if((H===void 0||O<Date.now())&&(H=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length!==0)){o.value!==!0&&de(t);const p=t.key.toLocaleLowerCase(),k=H.length===1&&H[0]===p;O=Date.now()+1500,k===!1&&(ne(t),H+=p);const L=new RegExp("^"+H.split("").map(Ne=>fl.indexOf(Ne)!==-1?"\\"+Ne:Ne).join(".*"),"i");let I=b.value;if(k===!0||I<0||L.test($.value(e.options[I]))!==!0)do I=ct(I+1,-1,s-1);while(I!==b.value&&(ae.value(e.options[I])===!0||L.test($.value(e.options[I]))!==!0));b.value!==I&&G(()=>{re(I),oe(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<s){le(e.options[b.value]);return}if(n===!0){const p=(k,L)=>{if(L){if(dt(L)!==!0)return}else L=e.newValueMode;if(Ce("",e.multiple!==!0,!0),k==null)return;(L==="toggle"?le:Xe)(k,L==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?a("newValue",g.value,p):p(g.value),e.multiple!==!0)return}o.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return A===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Vt(){return tt()}function Ct(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,n)=>h(al,{key:"option-"+n,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[h("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function lt(){if(R.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:g.value}):void 0;const t=r.option!==void 0?r.option:u=>h(ll,{key:u.index,...u.itemProps},()=>h(el,()=>h(tl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Ee("div",Me.value.map(t));return r["before-options"]!==void 0&&(n=r["before-options"]().concat(n)),ul(r["after-options"],n)}function xt(t,n){const u=n===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?_:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...bt.value};return t!==!0&&A===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),h("input",s)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),T=!0,D=g.value,l.focused.value!==!0&&(A!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):C=setTimeout(()=>{C=null,a("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){T=u!==!0,e.useInput===!0&&(Fe(t,!0),(n===!0||u!==!0)&&(D=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&T!==!0&&t===$.value(i.value[0])&&(t="");const s=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);d!==null&&clearTimeout(d),d=s,a("filter",t,(p,k)=>{(n===!0||l.focused.value===!0)&&d===s&&(clearTimeout(d),typeof p=="function"&&p(),c.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?o.value===!0&&ue():o.value===!0?Pe(!0):o.value=!0),typeof k=="function"&&G(()=>{k(y)}),typeof u=="function"&&G(()=>{u(y)})}))},()=>{l.focused.value===!0&&d===s&&(clearTimeout(d),l.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function kt(){return h(nl,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:be,onBeforeShow:it,onBeforeHide:pt,onShow:qt},lt)}function pt(t){ot(t),se()}function qt(){ye()}function At(t){ve(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){ve(t),G(()=>{z.value=!1})}function It(){const t=[h(il,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:At,onBlur:zt},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(h("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:$e,onScrollPassive:be},lt())),h(Zt,{ref:J,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:it,onBeforeHide:Mt,onHide:Ot,onShow:_t},()=>h("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){ot(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ot(t){ue(),l.focused.value===!1&&a("blur",t),fe()}function _t(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),ye()}function se(){F.value!==!0&&(b.value=-1,o.value===!0&&(o.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),F.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(R.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&$.value(i.value[0])||"",!0,!0)}function Pe(t){let n=-1;if(t===!0){if(i.value.length!==0){const u=U.value(i.value[0]);n=e.options.findIndex(s=>xe(U.value(s),u))}j(n)}re(n)}function Ft(t,n){o.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{o.value===!0&&l.innerLoading.value===!1&&(t>n?j():Pe(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function it(t){t!==void 0&&ve(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ot(t){t!==void 0&&ve(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function at(){A=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),W=M.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Wt(at),Xt(nt),at(),St(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(y,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:_e,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:De,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:_,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||R.value!==!0||r["no-option"]!==void 0))return A===!0?It():kt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if($e(t),A!==!0&&o.value===!0){se(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const n=Ct(),u=t===!0||F.value!==!0||A!==!0;if(e.useInput===!0)n.push(xt(t,u));else if(l.editable.value===!0){const p=u===!0?Ie.value:void 0;n.push(h("input",{ref:u===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(k=>h("option",{value:k,selected:!0}));n.push(h("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[h(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:we.value})]:null}),vt(l)}});export{hl as Q,al as a,dl as b,gl as c,sl as u};
