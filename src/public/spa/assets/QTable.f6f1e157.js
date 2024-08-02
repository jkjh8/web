import{a1 as N,c,h as r,a8 as p,g as Q,a6 as bt,P as Me,af as me,ag as Se,r as A,w as V,aa as mt,a3 as Be,b as De,o as je,bh as St,bg as yt,m as Ee,S as ht,ae as Ae,aA as _t,aB as wt,bF as qt,bG as Oe,bH as be,bI as Fe,bJ as Pt,n as Ne,bK as Ct,aT as ge,bL as H,K as ee,L as kt}from"./index.15dfea7e.js";import{u as Rt,a as xt,c as Qe,Q as Tt}from"./QSelect.fadc99c9.js";var rl=N({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=Q(),d=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:d.value},p(l.default));const o=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:u}=e.props;return r("td",{class:d.value+f.__tdClass(u),style:f.__tdStyle(u)},p(l.default))}}}),Bt=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const d=Q(),{proxy:{$q:o}}=d,f=u=>{n("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},p(l.default));let u,s;const v=d.vnode.key;if(v){if(u=e.props.colsMap[v],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const a=u.align==="right"?"unshift":"push";s=bt(l.default,[]),s[a](r(Me,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else s=p(l.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:a=>{u.sortable===!0&&e.props.sort(u),f(a)}};return r("th",S,s)}}});const Ot=["horizontal","vertical","cell","none"];var Ft=N({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:l}){const n=Q(),d=Se(e,n.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},p(l.default))])}});function He(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const $t={list:ht,table:Ft},Lt=["list","table","__qtable"];var Vt=N({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>Lt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let d;const o=A(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:v,onVirtualScrollEvt:S}=xt({virtualScrollLength:f,getVirtualScrollTarget:P,getVirtualScrollEl:q}),a=c(()=>{if(f.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),b=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(f,()=>{s()}),V(()=>e.scrollTarget,()=>{y(),_()});function q(){return o.value.$el||o.value}function P(){return d}function _(){d=mt(q(),e.scrollTarget),d.addEventListener("scroll",S,Be.passive)}function y(){d!==void 0&&(d.removeEventListener("scroll",S,Be.passive),d=void 0)}function B(){let O=v(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ae(l.after,O)}return De(()=>{s()}),je(()=>{_()}),St(()=>{_()}),yt(()=>{y()}),Ee(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+b.value},B()):r($t[e.type],{...n,ref:o,class:[n.class,b.value],...w.value},B)}}});const Mt={xs:2,sm:4,md:6,lg:10,xl:14};function $e(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Dt=N({name:"QLinearProgress",props:{...me,..._t,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=Q(),d=Se(e,n.$q),o=wt(e,Mt),f=c(()=>e.indeterminate===!0||e.query===!0),u=c(()=>e.reverse!==e.query),s=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>$e(e.buffer!==void 0?e.buffer:1,u.value,n.$q)),a=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>$e(f.value===!0?1:e.value,u.value,n.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),P=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const y=[r("div",{class:b.value,style:S.value}),r("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&y.push(r("div",{class:_.value,style:P.value})),r("div",{class:v.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(l.default,y))}}});let z=0;const jt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Et=["update:fullscreen","fullscreen"];function At(){const e=Q(),{props:l,emit:n,proxy:d}=e;let o,f,u;const s=A(!1);qt(e)===!0&&V(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),V(()=>l.fullscreen,b=>{s.value!==b&&v()}),V(s,b=>{n("update:fullscreen",b),n("fullscreen",b)});function v(){s.value===!0?a():S()}function S(){s.value!==!0&&(s.value=!0,u=d.$el.parentNode,u.replaceChild(f,d.$el),document.body.appendChild(d.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Oe.add(o))}function a(){s.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),u.replaceChild(d.$el,f),s.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),je(()=>{l.fullscreen===!0&&S()}),Ee(a),Object.assign(d,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:a}),{inFullscreen:s,toggleFullscreen:v}}function Nt(e,l){return new Date(e)-new Date(l)}const Qt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,l,n,d){const o=c(()=>{const{sortBy:s}=l.value;return s&&n.value.find(v=>v.name===s)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(s,v,S)=>{const a=n.value.find(q=>q.name===v);if(a===void 0||a.field===void 0)return s;const b=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return s.sort((q,P)=>{let _=w(q),y=w(P);return a.rawSort!==void 0?a.rawSort(_,y,q,P)*b:_==null?-1*b:y==null?1*b:a.sort!==void 0?a.sort(_,y,q,P)*b:be(_)===!0&&be(y)===!0?(_-y)*b:Fe(_)===!0&&Fe(y)===!0?Nt(_,y)*b:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*b:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*b:_===y?0:b)})});function u(s){let v=e.columnSortOrder;if(Pt(s)===!0)s.sortOrder&&(v=s.sortOrder),s=s.name;else{const b=n.value.find(w=>w.name===s);b!==void 0&&b.sortOrder&&(v=b.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==s?(S=s,a=v==="da"):e.binaryStateSort===!0?a=!a:a===!0?v==="ad"?S=null:a=!1:v==="ad"?a=!0:S=null,d({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:f,sort:u}}const zt={filter:[String,Object],filterMethod:Function};function pt(e,l){const n=c(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,u)=>{const s=o?o.toLowerCase():"";return d.filter(v=>f.some(S=>{const a=u(S,v)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(s)!==-1}))});return V(()=>e.filter,()=>{Ne(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Ut(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const It={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Kt(e,l){const{props:n,emit:d}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=c(()=>{const a=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Le(a)}),u=c(()=>f.value.rowsNumber!==void 0);function s(a){v({pagination:a,filter:n.filter})}function v(a={}){Ne(()=>{d("request",{pagination:a.pagination||f.value,filter:a.filter||n.filter,getCellValue:l})})}function S(a,b){const w=Le({...f.value,...a});if(Ut(f.value,w)===!0){u.value===!0&&b===!0&&s(w);return}if(u.value===!0){s(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:u,requestServerInteraction:v,setPagination:S}}function Wt(e,l,n,d,o,f){const{props:u,emit:s,proxy:{$q:v}}=e,S=c(()=>d.value===!0?n.value.rowsNumber||0:f.value),a=c(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),b=c(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),w=c(()=>n.value.page===1),q=c(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),P=c(()=>b.value===0?!0:n.value.page>=q.value),_=c(()=>(u.rowsPerPageOptions.includes(l.value.rowsPerPage)?u.rowsPerPageOptions:[l.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?v.lang.table.allRows:""+x,value:x})));V(q,(R,x)=>{if(R===x)return;const U=n.value.page;R&&!U?o({page:1}):R<U&&o({page:R})});function y(){o({page:1})}function B(){const{page:R}=n.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;b.value>0&&R*x<S.value&&o({page:R+1})}function F(){o({page:q.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:b,isFirstPage:w,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Gt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Jt=["update:selected","selection"];function Xt(e,l,n,d){const o=c(()=>{const P={};return e.selected.map(d.value).forEach(_=>{P[_]=!0}),P}),f=c(()=>e.selection!=="none"),u=c(()=>e.selection==="single"),s=c(()=>e.selection==="multiple"),v=c(()=>n.value.length!==0&&n.value.every(P=>o.value[d.value(P)]===!0)),S=c(()=>v.value!==!0&&n.value.some(P=>o.value[d.value(P)]===!0)),a=c(()=>e.selected.length);function b(P){return o.value[P]===!0}function w(){l("update:selected",[])}function q(P,_,y,B){l("selection",{rows:_,added:y,keys:P,evt:B});const O=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>P.includes(d.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:u,multipleSelection:s,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:b,clearSelection:w,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const Yt={expanded:Array},Zt=["update:expanded"];function el(e,l){const n=A(Ve(e.expanded));V(()=>e.expanded,u=>{n.value=Ve(u)});function d(u){return n.value.includes(u)}function o(u){e.expanded!==void 0?l("update:expanded",u):n.value=u}function f(u,s){const v=n.value.slice(),S=v.indexOf(u);s===!0?S===-1&&(v.push(u),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const tl={visibleColumns:Array};function ll(e,l,n){const d=c(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(v=>({name:v,label:v.toUpperCase(),field:v,align:be(s[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:s,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):d.value).map(a=>{const b=a.align||"right",w=`text-${b}`;return{...a,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===s?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=c(()=>{const s={};return o.value.forEach(v=>{s[v.name]=v}),s}),u=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:u}}const te="q-table__bottom row items-center",ze={};Qe.forEach(e=>{ze[e]={}});var ol=N({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...jt,...tl,...zt,...It,...Yt,...Gt,...Qt},emits:["request","virtualScroll",...Et,...Zt,...Jt],setup(e,{slots:l,emit:n}){const d=Q(),{proxy:{$q:o}}=d,f=Se(e,o),{inFullscreen:u,toggleFullscreen:s}=At(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),a=A(null),b=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),P=c(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{b.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Kt(d,j),{computedFilterMethod:R}=pt(e,F),{isRowExpanded:x,setExpanded:U,updateExpanded:pe}=el(e,n),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=y.value;return e.filter&&(t=R.value(t,e.filter,$.value,j)),Ge.value!==null&&(t=Je.value(e.rows===t?t.slice():t,i,g)),t}),ye=c(()=>le.value.length),M=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(K.value===0&&e.rows!==t?t.length>W.value&&(t=t.slice(0,W.value)):t=t.slice(K.value,W.value)),t}),{hasSelectionMode:D,singleSelection:Ue,multipleSelection:he,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:Ke,updateSelection:I}=Xt(e,n,M,v),{colList:We,computedCols:$,computedColsMap:we,computedColspan:qe}=ll(e,y,D),{columnToSort:Ge,computedSortMethod:Je,sort:re}=Ht(e,y,We,F),{firstRowIndex:K,lastRowIndex:W,isFirstPage:oe,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Xe,computedRowsNumber:J,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de}=Wt(d,_,y,B,F,ye),Ye=c(()=>M.value.length===0),Ze=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){b.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?xe:null;if(b.value===!0){const g=l["top-row"],m=l["bottom-row"],h={default:k=>Ce(k.item,l.body,k.index)};if(g!==void 0){const k=r("tbody",g({cols:$.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>r("tbody",m({cols:$.value}))),r(Vt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:at},h)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=g.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){n("virtualScroll",t)}function Pe(){return[r(Dt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,i,g){const m=v.value(t),h=ne(m);if(i!==void 0)return i(ke({key:m,row:t,pageIndex:g,__trClass:h?"selected":""}));const k=l["body-cell"],C=$.value.map(T=>{const Y=l[`body-cell-${T.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(rt({key:m,row:t,pageIndex:g,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if(D.value===!0){const T=l["body-selection"],Y=T!==void 0?T(ot({key:m,row:t,pageIndex:g})):[r(ge,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([m],[t],Z,gt)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},Y))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,g)}),r("tr",L,C)}function nt(){const t=l.body,i=l["top-row"],g=l["bottom-row"];let m=M.value.map((h,k)=>Ce(h,t,k));return i!==void 0&&(m=i({cols:$.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:$.value}))),r("tbody",m)}function ke(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>j(i,t.row))),t}function rt(t){return ve(t),H(t,"value",()=>j(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:we.value,sort:re,rowIndex:K.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),D.value===!0&&H(t,"selected",()=>ne(t.key),(i,g)=>{I([t.key],[t.row],i,g)}),H(t,"expand",()=>x(t.key),i=>{pe(t.key,i)})}function j(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const E=c(()=>({pagination:y.value,pagesNumber:G.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,inFullscreen:u.value,toggleFullscreen:s}));function it(){const t=l.top,i=l["top-left"],g=l["top-right"],m=l["top-selection"],h=D.value===!0&&m!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(E.value)]);let C;if(h===!0?C=m(E.value).slice():(C=[],i!==void 0?C.push(r("div",{class:"q-table__control"},[i(E.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[g(E.value)]))),C.length!==0)return r("div",{class:k},C)}const Re=c(()=>_e.value===!0?null:Ie.value);function xe(){const t=ut();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:qe.value},Pe())])),r("thead",t)}function ut(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=$.value.map(m=>{const h=l[`header-cell-${m.name}`],k=h!==void 0?h:i,C=fe({col:m});return k!==void 0?k(C):r(Bt,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const m=l["header-selection"],h=m!==void 0?m(fe({})):[r(ge,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Te})];g.unshift(r("th",{class:"q-table--col-auto-width"},h))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:$.value,sort:re,colsMap:we.value,color:e.color,dark:f.value,dense:e.dense}),he.value===!0&&H(t,"selected",()=>Re.value,Te),t}function Te(t){_e.value===!0&&(t=!1),I(M.value.map(v.value),M.value,t)}const X=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=l["no-data"],h=m!==void 0?[m({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Me,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:te+" q-table__bottom--nodata"},h)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},dt(i));if(i.length!==0)return r("div",{class:te},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:g}=y.value,m=e.paginationLabel||o.lang.table.pagination,h=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Xe.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),h!==void 0)i=h(E.value);else if(i=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(K.value+1,Math.min(W.value,J.value),J.value):m(1,ye.value,J.value)])],g!==0&&G.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),G.value>2&&i.push(r(ee,{key:"pgFirst",...C,icon:X.value[0],disable:oe.value,onClick:ue})),i.push(r(ee,{key:"pgPrev",...C,icon:X.value[1],disable:oe.value,onClick:se}),r(ee,{key:"pgNext",...C,icon:X.value[2],disable:ie.value,onClick:ce})),G.value>2&&i.push(r(ee,{key:"pgLast",...C,icon:X.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const g=i.cols.map(h=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[h.label]),r("div",{class:"q-table__grid-item-value"},[h.value])]));if(D.value===!0){const h=l["body-selection"],k=h!==void 0?h(i):[r(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{I([i.key],[i.row],C,L)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},k),r(kt,{dark:f.value}))}const m={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{n("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{n("RowDblclick",h,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",m,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((i,g)=>t(ke({key:v.value(i),row:i,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:Ke,isRowExpanded:x,setExpanded:U,sort:re,resetVirtualScroll:et,scrollTo:lt,getCellValue:j}),Ct(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>M.value,computedRowsNumber:()=>J.value}),()=>{const t=[it()],i={ref:S,class:P.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),st()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",i,t)}}});export{ol as Q,rl as a,Bt as b};
