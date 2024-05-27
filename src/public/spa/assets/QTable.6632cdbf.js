import{a4 as $,c as g,h as o,am as A,g as N,au as ft,Q as Ve,a6 as me,a9 as Se,r as Q,w as V,ak as gt,a0 as Be,b as Me,o as De,b0 as bt,a$ as mt,m as je,az as St,bl as yt,bm as Oe,bn as be,bg as Fe,bo as ht,n as Ee,bp as wt,bd as ge,bq as H,I as ee,N as _t}from"./index.186a5e78.js";import{u as qt,e as Pt,f as Ae,Q as Ct}from"./QSelect.eefc60fe.js";import{Q as kt}from"./QLinearProgress.2dc8b4cd.js";var ll=$({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=N(),c=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:c.value},A(l.default));const r=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(f===void 0)return;const{row:u}=e.props;return o("td",{class:c.value+f.__tdClass(u),style:f.__tdStyle(u)},A(l.default))}}}),Rt=$({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const c=N(),{proxy:{$q:r}}=c,f=u=>{n("click",u)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},A(l.default));let u,s;const d=c.vnode.key;if(d){if(u=e.props.colsMap[d],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const a=u.align==="right"?"unshift":"push";s=ft(l.default,[]),s[a](o(Ve,{class:u.__iconClass,name:r.iconSet.table.arrowUp}))}else s=A(l.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:a=>{u.sortable===!0&&e.props.sort(u),f(a)}};return o("th",S,s)}}}),Tt=$({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=N(),c=Se(e,n.proxy.$q),r=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:r.value},A(l.default))}});const xt=["horizontal","vertical","cell","none"];var Bt=$({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>xt.includes(e)}},setup(e,{slots:l}){const n=N(),c=Se(e,n.proxy.$q),r=g(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:r.value},[o("table",{class:"q-table"},A(l.default))])}});function Qe(e,l){return o("div",e,[o("table",{class:"q-table"},l)])}const Ot={list:Tt,table:Bt},Ft=["list","table","__qtable"];var pt=$({name:"QVirtualScroll",props:{...qt,type:{type:String,default:"list",validator:e=>Ft.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let c;const r=Q(null),f=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:d,onVirtualScrollEvt:S}=Pt({virtualScrollLength:f,getVirtualScrollTarget:C,getVirtualScrollEl:q}),a=g(()=>{if(f.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),m=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(f,()=>{s()}),V(()=>e.scrollTarget,()=>{h(),w()});function q(){return r.value.$el||r.value}function C(){return c}function w(){c=gt(q(),e.scrollTarget),c.addEventListener("scroll",S,Be.passive)}function h(){c!==void 0&&(c.removeEventListener("scroll",S,Be.passive),c=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),St(l.after,O)}return Me(()=>{s()}),De(()=>{w()}),bt(()=>{w()}),mt(()=>{h()}),je(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:r,class:"q-table__middle "+m.value},B()):o(Ot[e.type],{...n,ref:r,class:[n.class,m.value],..._.value},B)}}});let z=0;const Lt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Vt=["update:fullscreen","fullscreen"];function Mt(){const e=N(),{props:l,emit:n,proxy:c}=e;let r,f,u;const s=Q(!1);yt(e)===!0&&V(()=>c.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),V(()=>l.fullscreen,m=>{s.value!==m&&d()}),V(s,m=>{n("update:fullscreen",m),n("fullscreen",m)});function d(){s.value===!0?a():S()}function S(){s.value!==!0&&(s.value=!0,u=c.$el.parentNode,u.replaceChild(f,c.$el),document.body.appendChild(c.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:a},Oe.add(r))}function a(){s.value===!0&&(r!==void 0&&(Oe.remove(r),r=void 0),u.replaceChild(c.$el,f),s.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Me(()=>{f=document.createElement("span")}),De(()=>{l.fullscreen===!0&&S()}),je(a),Object.assign(c,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:a}),{inFullscreen:s,toggleFullscreen:d}}function Dt(e,l){return new Date(e)-new Date(l)}const jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Et(e,l,n,c){const r=g(()=>{const{sortBy:s}=l.value;return s&&n.value.find(d=>d.name===s)||null}),f=g(()=>e.sortMethod!==void 0?e.sortMethod:(s,d,S)=>{const a=n.value.find(q=>q.name===d);if(a===void 0||a.field===void 0)return s;const m=S===!0?-1:1,_=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return s.sort((q,C)=>{let w=_(q),h=_(C);return a.rawSort!==void 0?a.rawSort(w,h,q,C)*m:w==null?-1*m:h==null?1*m:a.sort!==void 0?a.sort(w,h,q,C)*m:be(w)===!0&&be(h)===!0?(w-h)*m:Fe(w)===!0&&Fe(h)===!0?Dt(w,h)*m:typeof w=="boolean"&&typeof h=="boolean"?(w-h)*m:([w,h]=[w,h].map(B=>(B+"").toLocaleString().toLowerCase()),w<h?-1*m:w===h?0:m)})});function u(s){let d=e.columnSortOrder;if(ht(s)===!0)s.sortOrder&&(d=s.sortOrder),s=s.name;else{const m=n.value.find(_=>_.name===s);m!==void 0&&m.sortOrder&&(d=m.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==s?(S=s,a=d==="da"):e.binaryStateSort===!0?a=!a:a===!0?d==="ad"?S=null:a=!1:d==="ad"?a=!0:S=null,c({sortBy:S,descending:a,page:1})}return{columnToSort:r,computedSortMethod:f,sort:u}}const At={filter:[String,Object],filterMethod:Function};function Qt(e,l){const n=g(()=>e.filterMethod!==void 0?e.filterMethod:(c,r,f,u)=>{const s=r?r.toLowerCase():"";return c.filter(d=>f.some(S=>{const a=u(S,d)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(s)!==-1}))});return V(()=>e.filter,()=>{Ee(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function $t(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function pe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Nt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ht(e,l){const{props:n,emit:c}=e,r=Q(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=g(()=>{const a=n["onUpdate:pagination"]!==void 0?{...r.value,...n.pagination}:r.value;return pe(a)}),u=g(()=>f.value.rowsNumber!==void 0);function s(a){d({pagination:a,filter:n.filter})}function d(a={}){Ee(()=>{c("request",{pagination:a.pagination||f.value,filter:a.filter||n.filter,getCellValue:l})})}function S(a,m){const _=pe({...f.value,...a});if($t(f.value,_)===!0){u.value===!0&&m===!0&&s(_);return}if(u.value===!0){s(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?c("update:pagination",_):r.value=_}return{innerPagination:r,computedPagination:f,isServerSide:u,requestServerInteraction:d,setPagination:S}}function zt(e,l,n,c,r,f){const{props:u,emit:s,proxy:{$q:d}}=e,S=g(()=>c.value===!0?n.value.rowsNumber||0:f.value),a=g(()=>{const{page:R,rowsPerPage:T}=n.value;return(R-1)*T}),m=g(()=>{const{page:R,rowsPerPage:T}=n.value;return R*T}),_=g(()=>n.value.page===1),q=g(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),C=g(()=>m.value===0?!0:n.value.page>=q.value),w=g(()=>(u.rowsPerPageOptions.includes(l.value.rowsPerPage)?u.rowsPerPageOptions:[l.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(T=>({label:T===0?d.lang.table.allRows:""+T,value:T})));V(q,(R,T)=>{if(R===T)return;const U=n.value.page;R&&!U?r({page:1}):R<U&&r({page:R})});function h(){r({page:1})}function B(){const{page:R}=n.value;R>1&&r({page:R-1})}function O(){const{page:R,rowsPerPage:T}=n.value;m.value>0&&R*T<S.value&&r({page:R+1})}function F(){r({page:q.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:_,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:w,computedRowsNumber:S,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Ut={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},It=["update:selected","selection"];function Wt(e,l,n,c){const r=g(()=>{const C={};return e.selected.map(c.value).forEach(w=>{C[w]=!0}),C}),f=g(()=>e.selection!=="none"),u=g(()=>e.selection==="single"),s=g(()=>e.selection==="multiple"),d=g(()=>n.value.length!==0&&n.value.every(C=>r.value[c.value(C)]===!0)),S=g(()=>d.value!==!0&&n.value.some(C=>r.value[c.value(C)]===!0)),a=g(()=>e.selected.length);function m(C){return r.value[C]===!0}function _(){l("update:selected",[])}function q(C,w,h,B){l("selection",{rows:w,added:h,keys:C,evt:B});const O=u.value===!0?h===!0?w:[]:h===!0?e.selected.concat(w):e.selected.filter(F=>C.includes(c.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:u,multipleSelection:s,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:m,clearSelection:_,updateSelection:q}}function Le(e){return Array.isArray(e)?e.slice():[]}const Kt={expanded:Array},Gt=["update:expanded"];function Jt(e,l){const n=Q(Le(e.expanded));V(()=>e.expanded,u=>{n.value=Le(u)});function c(u){return n.value.includes(u)}function r(u){e.expanded!==void 0?l("update:expanded",u):n.value=u}function f(u,s){const d=n.value.slice(),S=d.indexOf(u);s===!0?S===-1&&(d.push(u),r(d)):S!==-1&&(d.splice(S,1),r(d))}return{isRowExpanded:c,setExpanded:r,updateExpanded:f}}const Xt={visibleColumns:Array};function Yt(e,l,n){const c=g(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(s[d])?"right":"left",sortable:!0})):[]}),r=g(()=>{const{sortBy:s,descending:d}=l.value;return(e.visibleColumns!==void 0?c.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):c.value).map(a=>{const m=a.align||"right",_=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:_+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===s?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>_+" "+a.classes:q=>_+" "+a.classes(q):()=>_}})}),f=g(()=>{const s={};return r.value.forEach(d=>{s[d.name]=d}),s}),u=g(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(n.value===!0?1:0));return{colList:c,computedCols:r,computedColsMap:f,computedColspan:u}}const te="q-table__bottom row items-center",$e={};Ae.forEach(e=>{$e[e]={}});var al=$({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...$e,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Lt,...Xt,...At,...Nt,...Kt,...Ut,...jt},emits:["request","virtualScroll",...Vt,...Gt,...It],setup(e,{slots:l,emit:n}){const c=N(),{proxy:{$q:r}}=c,f=Se(e,r),{inFullscreen:u,toggleFullscreen:s}=Mt(),d=g(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=Q(null),a=Q(null),m=g(()=>e.grid!==!0&&e.virtualScroll===!0),_=g(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),C=g(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:w,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Ht(c,j),{computedFilterMethod:R}=Qt(e,F),{isRowExpanded:T,setExpanded:U,updateExpanded:Ne}=Jt(e,n),le=g(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:v}=h.value;return e.filter&&(t=R.value(t,e.filter,p.value,j)),We.value!==null&&(t=Ke.value(e.rows===t?t.slice():t,i,v)),t}),ye=g(()=>le.value.length),M=g(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=h.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:D,singleSelection:He,multipleSelection:he,allRowsSelected:ze,someRowsSelected:we,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:Ue,updateSelection:I}=Wt(e,n,M,d),{colList:Ie,computedCols:p,computedColsMap:_e,computedColspan:qe}=Yt(e,h,D),{columnToSort:We,computedSortMethod:Ke,sort:oe}=Et(e,h,Ie,F),{firstRowIndex:W,lastRowIndex:K,isFirstPage:re,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Ge,computedRowsNumber:J,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de}=zt(c,w,h,B,F,ye),Je=g(()=>M.value.length===0),Xe=g(()=>{const t={};return Ae.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ye(){m.value===!0&&a.value.reset()}function Ze(){if(e.grid===!0)return dt();const t=e.hideHeader!==!0?Te:null;if(m.value===!0){const v=l["top-row"],b=l["bottom-row"],y={default:k=>Ce(k.item,l.body,k.index)};if(v!==void 0){const k=o("tbody",v({cols:p.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>o("tbody",b({cols:p.value}))),o(pt,{ref:a,class:e.tableClass,style:e.tableStyle,...Xe.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:tt},y)}const i=[lt()];return t!==null&&i.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function et(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const v=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const b=S.value.querySelector(".q-table__middle.scroll"),y=v.offsetTop-e.virtualScrollStickySizeStart,k=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,n("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:k})}}function tt(t){n("virtualScroll",t)}function Pe(){return[o(kt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,i,v){const b=d.value(t),y=ne(b);if(i!==void 0)return i(ke({key:b,row:t,pageIndex:v,__trClass:y?"selected":""}));const k=l["body-cell"],P=p.value.map(x=>{const Y=l[`body-cell-${x.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(at({key:b,row:t,pageIndex:v,col:x})):o("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},j(x,t))});if(D.value===!0){const x=l["body-selection"],Y=x!==void 0?x(nt({key:b,row:t,pageIndex:v})):[o(ge,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,vt)=>{I([b],[t],Z,vt)}})];P.unshift(o("td",{class:"q-table--col-auto-width"},Y))}const L={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=x=>{n("RowClick",x,t,v)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=x=>{n("RowDblclick",x,t,v)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=x=>{n("RowContextmenu",x,t,v)}),o("tr",L,P)}function lt(){const t=l.body,i=l["top-row"],v=l["bottom-row"];let b=M.value.map((y,k)=>Ce(y,t,k));return i!==void 0&&(b=i({cols:p.value}).concat(b)),v!==void 0&&(b=b.concat(v({cols:p.value}))),o("tbody",b)}function ke(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>j(i,t.row))),t}function at(t){return ve(t),H(t,"value",()=>j(t.col,t.row)),t}function nt(t){return ve(t),t}function ve(t){Object.assign(t,{cols:p.value,colsMap:_e.value,sort:oe,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),D.value===!0&&H(t,"selected",()=>ne(t.key),(i,v)=>{I([t.key],[t.row],i,v)}),H(t,"expand",()=>T(t.key),i=>{Ne(t.key,i)})}function j(t,i){const v=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(v,i):v}const E=g(()=>({pagination:h.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:ie.value,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,inFullscreen:u.value,toggleFullscreen:s}));function ot(){const t=l.top,i=l["top-left"],v=l["top-right"],b=l["top-selection"],y=D.value===!0&&b!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:k},[t(E.value)]);let P;if(y===!0?P=b(E.value).slice():(P=[],i!==void 0?P.push(o("div",{class:"q-table__control"},[i(E.value)])):e.title&&P.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(P.push(o("div",{class:"q-table__separator col"})),P.push(o("div",{class:"q-table__control"},[v(E.value)]))),P.length!==0)return o("div",{class:k},P)}const Re=g(()=>we.value===!0?null:ze.value);function Te(){const t=rt();return e.loading===!0&&l.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:qe.value},Pe())])),o("thead",t)}function rt(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const v=p.value.map(b=>{const y=l[`header-cell-${b.name}`],k=y!==void 0?y:i,P=fe({col:b});return k!==void 0?k(P):o(Rt,{key:b.name,props:P},()=>b.label)});if(He.value===!0&&e.grid!==!0)v.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const b=l["header-selection"],y=b!==void 0?b(fe({})):[o(ge,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":xe})];v.unshift(o("th",{class:"q-table--col-auto-width"},y))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function fe(t){return Object.assign(t,{cols:p.value,sort:oe,colsMap:_e.value,color:e.color,dark:f.value,dense:e.dense}),he.value===!0&&H(t,"selected",()=>Re.value,xe),t}function xe(t){we.value===!0&&(t=!1),I(M.value.map(d.value),M.value,t)}const X=g(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function it(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,b=l["no-data"],y=b!==void 0?[b({message:v,icon:r.iconSet.table.warning,filter:e.filter})]:[o(Ve,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),v];return o("div",{class:te+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return o("div",{class:te},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&ae.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:te+" justify-end"},st(i));if(i.length!==0)return o("div",{class:te},i)}function ut(t){F({page:1,rowsPerPage:t.value})}function st(t){let i;const{rowsPerPage:v}=h.value,b=e.paginationLabel||r.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),k===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(Ct,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:Ge.value,displayValue:v===0?r.lang.table.allRows:v,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),y!==void 0)i=y(E.value);else if(i=[o("span",v!==0?{class:"q-table__bottom-item"}:{},[v?b(W.value+1,Math.min(K.value,J.value),J.value):b(1,ye.value,J.value)])],v!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&i.push(o(ee,{key:"pgFirst",...P,icon:X.value[0],disable:re.value,onClick:ue})),i.push(o(ee,{key:"pgPrev",...P,icon:X.value[1],disable:re.value,onClick:se}),o(ee,{key:"pgNext",...P,icon:X.value[2],disable:ie.value,onClick:ce})),G.value>2&&i.push(o(ee,{key:"pgLast",...P,icon:X.value[3],disable:ie.value,onClick:de}))}return t.push(o("div",{class:"q-table__control"},i)),t}function ct(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Te()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return o("div",{class:"q-table__middle"},t)}function dt(){const t=l.item!==void 0?l.item:i=>{const v=i.cols.map(y=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[y.label]),o("div",{class:"q-table__grid-item-value"},[y.value])]));if(D.value===!0){const y=l["body-selection"],k=y!==void 0?y(i):[o(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{I([i.key],[i.row],P,L)}})];v.unshift(o("div",{class:"q-table__grid-item-row"},k),o(_t,{dark:f.value}))}const b={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{n("RowClick",y,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{n("RowDblclick",y,i.row,i.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[o("div",b,v)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((i,v)=>t(ke({key:d.value(i),row:i,pageIndex:v}))))}return Object.assign(c.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:Ue,isRowExpanded:T,setExpanded:U,sort:oe,resetVirtualScroll:Ye,scrollTo:et,getCellValue:j}),wt(c.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>M.value,computedRowsNumber:()=>J.value}),()=>{const t=[ot()],i={ref:S,class:C.value};return e.grid===!0?t.push(ct()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(Ze(),it()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),o("div",i,t)}}});export{ll as Q,al as a,Rt as b,Tt as c};
