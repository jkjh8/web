import{a7 as N,h as r,ap as te,ax as ft,Q as De,g as H,a9 as me,ac as Se,c as f,r as A,w as D,an as gt,a3 as Be,b as Me,o as pe,b0 as bt,a$ as mt,m as Ee,aC as St,bl as yt,bm as Oe,bn as be,bg as Fe,bo as ht,n as je,bp as wt,bd as ge,bq as $,M as Z,S as _t}from"./index.0b79a79b.js";import{u as qt,e as Pt,f as Ae,Q as Ct}from"./QSelect.a4a4b107.js";import{Q as kt}from"./QLinearProgress.3d79d0c0.js";var Rt=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:n}){const d=H(),{proxy:{$q:i}}=d,b=u=>{n("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},te(a.default));let u,s;const c=d.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const l=u.align==="right"?"unshift":"push";s=ft(a.default,[]),s[l](r(De,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else s=te(a.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:l=>{u.sortable===!0&&e.props.sort(u),b(l)}};return r("th",S,s)}}}),xt=N({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=H(),d=Se(e,n.proxy.$q),i=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:i.value},te(a.default))}});const Tt=["horizontal","vertical","cell","none"];var Bt=N({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Tt.includes(e)}},setup(e,{slots:a}){const n=H(),d=Se(e,n.proxy.$q),i=f(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:i.value},[r("table",{class:"q-table"},te(a.default))])}});function $e(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Ot={list:xt,table:Bt},Ft=["list","table","__qtable"];var Lt=N({name:"QVirtualScroll",props:{...qt,type:{type:String,default:"list",validator:e=>Ft.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:n}){let d;const i=A(null),b=f(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:c,onVirtualScrollEvt:S}=Pt({virtualScrollLength:b,getVirtualScrollTarget:C,getVirtualScrollEl:q}),l=f(()=>{if(b.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),m=f(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=f(()=>e.scrollTarget!==void 0?{}:{tabindex:0});D(b,()=>{s()}),D(()=>e.scrollTarget,()=>{h(),w()});function q(){return i.value.$el||i.value}function C(){return d}function w(){d=gt(q(),e.scrollTarget),d.addEventListener("scroll",S,Be.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",S,Be.passive),d=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),St(a.after,O)}return Me(()=>{s()}),pe(()=>{w()}),bt(()=>{w()}),mt(()=>{h()}),Ee(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?$e({ref:i,class:"q-table__middle "+m.value},B()):r(Ot[e.type],{...n,ref:i,class:[n.class,m.value],..._.value},B)}}});let Q=0;const Vt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Dt=["update:fullscreen","fullscreen"];function Mt(){const e=H(),{props:a,emit:n,proxy:d}=e;let i,b,u;const s=A(!1);yt(e)===!0&&D(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),D(()=>a.fullscreen,m=>{s.value!==m&&c()}),D(s,m=>{n("update:fullscreen",m),n("fullscreen",m)});function c(){s.value===!0?l():S()}function S(){s.value!==!0&&(s.value=!0,u=d.$el.parentNode,u.replaceChild(b,d.$el),document.body.appendChild(d.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:l},Oe.add(i))}function l(){s.value===!0&&(i!==void 0&&(Oe.remove(i),i=void 0),u.replaceChild(d.$el,b),s.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Me(()=>{b=document.createElement("span")}),pe(()=>{a.fullscreen===!0&&S()}),Ee(l),Object.assign(d,{toggleFullscreen:c,setFullscreen:S,exitFullscreen:l}),{inFullscreen:s,toggleFullscreen:c}}function pt(e,a){return new Date(e)-new Date(a)}const Et={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function jt(e,a,n,d){const i=f(()=>{const{sortBy:s}=a.value;return s&&n.value.find(c=>c.name===s)||null}),b=f(()=>e.sortMethod!==void 0?e.sortMethod:(s,c,S)=>{const l=n.value.find(q=>q.name===c);if(l===void 0||l.field===void 0)return s;const m=S===!0?-1:1,_=typeof l.field=="function"?q=>l.field(q):q=>q[l.field];return s.sort((q,C)=>{let w=_(q),h=_(C);return l.rawSort!==void 0?l.rawSort(w,h,q,C)*m:w==null?-1*m:h==null?1*m:l.sort!==void 0?l.sort(w,h,q,C)*m:be(w)===!0&&be(h)===!0?(w-h)*m:Fe(w)===!0&&Fe(h)===!0?pt(w,h)*m:typeof w=="boolean"&&typeof h=="boolean"?(w-h)*m:([w,h]=[w,h].map(B=>(B+"").toLocaleString().toLowerCase()),w<h?-1*m:w===h?0:m)})});function u(s){let c=e.columnSortOrder;if(ht(s)===!0)s.sortOrder&&(c=s.sortOrder),s=s.name;else{const m=n.value.find(_=>_.name===s);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==s?(S=s,l=c==="da"):e.binaryStateSort===!0?l=!l:l===!0?c==="ad"?S=null:l=!1:c==="ad"?l=!0:S=null,d({sortBy:S,descending:l,page:1})}return{columnToSort:i,computedSortMethod:b,sort:u}}const At={filter:[String,Object],filterMethod:Function};function $t(e,a){const n=f(()=>e.filterMethod!==void 0?e.filterMethod:(d,i,b,u)=>{const s=i?i.toLowerCase():"";return d.filter(c=>b.some(S=>{const l=u(S,c)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(s)!==-1}))});return D(()=>e.filter,()=>{je(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Qt(e,a){for(const n in a)if(a[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Nt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ht(e,a){const{props:n,emit:d}=e,i=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),b=f(()=>{const l=n["onUpdate:pagination"]!==void 0?{...i.value,...n.pagination}:i.value;return Le(l)}),u=f(()=>b.value.rowsNumber!==void 0);function s(l){c({pagination:l,filter:n.filter})}function c(l={}){je(()=>{d("request",{pagination:l.pagination||b.value,filter:l.filter||n.filter,getCellValue:a})})}function S(l,m){const _=Le({...b.value,...l});if(Qt(b.value,_)===!0){u.value===!0&&m===!0&&s(_);return}if(u.value===!0){s(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?d("update:pagination",_):i.value=_}return{innerPagination:i,computedPagination:b,isServerSide:u,requestServerInteraction:c,setPagination:S}}function zt(e,a,n,d,i,b){const{props:u,emit:s,proxy:{$q:c}}=e,S=f(()=>d.value===!0?n.value.rowsNumber||0:b.value),l=f(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),m=f(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),_=f(()=>n.value.page===1),q=f(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),C=f(()=>m.value===0?!0:n.value.page>=q.value),w=f(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));D(q,(R,x)=>{if(R===x)return;const z=n.value.page;R&&!z?i({page:1}):R<z&&i({page:R})});function h(){i({page:1})}function B(){const{page:R}=n.value;R>1&&i({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;m.value>0&&R*x<S.value&&i({page:R+1})}function F(){i({page:q.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...n.value}),{firstRowIndex:l,lastRowIndex:m,isFirstPage:_,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:w,computedRowsNumber:S,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Ut={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},It=["update:selected","selection"];function Kt(e,a,n,d){const i=f(()=>{const C={};return e.selected.map(d.value).forEach(w=>{C[w]=!0}),C}),b=f(()=>e.selection!=="none"),u=f(()=>e.selection==="single"),s=f(()=>e.selection==="multiple"),c=f(()=>n.value.length!==0&&n.value.every(C=>i.value[d.value(C)]===!0)),S=f(()=>c.value!==!0&&n.value.some(C=>i.value[d.value(C)]===!0)),l=f(()=>e.selected.length);function m(C){return i.value[C]===!0}function _(){a("update:selected",[])}function q(C,w,h,B){a("selection",{rows:w,added:h,keys:C,evt:B});const O=u.value===!0?h===!0?w:[]:h===!0?e.selected.concat(w):e.selected.filter(F=>C.includes(d.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:b,singleSelection:u,multipleSelection:s,allRowsSelected:c,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:m,clearSelection:_,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const Wt={expanded:Array},Gt=["update:expanded"];function Jt(e,a){const n=A(Ve(e.expanded));D(()=>e.expanded,u=>{n.value=Ve(u)});function d(u){return n.value.includes(u)}function i(u){e.expanded!==void 0?a("update:expanded",u):n.value=u}function b(u,s){const c=n.value.slice(),S=c.indexOf(u);s===!0?S===-1&&(c.push(u),i(c)):S!==-1&&(c.splice(S,1),i(c))}return{isRowExpanded:d,setExpanded:i,updateExpanded:b}}const Xt={visibleColumns:Array};function Yt(e,a,n){const d=f(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(c=>({name:c,label:c.toUpperCase(),field:c,align:be(s[c])?"right":"left",sortable:!0})):[]}),i=f(()=>{const{sortBy:s,descending:c}=a.value;return(e.visibleColumns!==void 0?d.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):d.value).map(l=>{const m=l.align||"right",_=`text-${m}`;return{...l,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:_+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===s?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>_+" "+l.classes:q=>_+" "+l.classes(q):()=>_}})}),b=f(()=>{const s={};return i.value.forEach(c=>{s[c.name]=c}),s}),u=f(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(n.value===!0?1:0));return{colList:d,computedCols:i,computedColsMap:b,computedColspan:u}}const ee="q-table__bottom row items-center",Qe={};Ae.forEach(e=>{Qe[e]={}});var ll=N({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Qe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Vt,...Xt,...At,...Nt,...Wt,...Ut,...Et},emits:["request","virtualScroll",...Dt,...Gt,...It],setup(e,{slots:a,emit:n}){const d=H(),{proxy:{$q:i}}=d,b=Se(e,i),{inFullscreen:u,toggleFullscreen:s}=Mt(),c=f(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),l=A(null),m=f(()=>e.grid!==!0&&e.virtualScroll===!0),_=f(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=f(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),C=f(()=>q.value+(e.loading===!0?" q-table--loading":""));D(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:w,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Ht(d,E),{computedFilterMethod:R}=$t(e,F),{isRowExpanded:x,setExpanded:z,updateExpanded:Ne}=Jt(e,n),le=f(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:v}=h.value;return e.filter&&(t=R.value(t,e.filter,L.value,E)),Ke.value!==null&&(t=We.value(e.rows===t?t.slice():t,o,v)),t}),ye=f(()=>le.value.length),M=f(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:o}=h.value;return o!==0&&(I.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(I.value,K.value)),t}),{hasSelectionMode:p,singleSelection:He,multipleSelection:he,allRowsSelected:ze,someRowsSelected:we,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:Ue,updateSelection:U}=Kt(e,n,M,c),{colList:Ie,computedCols:L,computedColsMap:_e,computedColspan:qe}=Yt(e,h,p),{columnToSort:Ke,computedSortMethod:We,sort:oe}=jt(e,h,Ie,F),{firstRowIndex:I,lastRowIndex:K,isFirstPage:re,isLastPage:ie,pagesNumber:W,computedRowsPerPageOptions:Ge,computedRowsNumber:G,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de}=zt(d,w,h,B,F,ye),Je=f(()=>M.value.length===0),Xe=f(()=>{const t={};return Ae.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ye(){m.value===!0&&l.value.reset()}function Ze(){if(e.grid===!0)return dt();const t=e.hideHeader!==!0?xe:null;if(m.value===!0){const v=a["top-row"],g=a["bottom-row"],y={default:k=>Ce(k.item,a.body,k.index)};if(v!==void 0){const k=r("tbody",v({cols:L.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return g!==void 0&&(y.after=()=>r("tbody",g({cols:L.value}))),r(Lt,{ref:l,class:e.tableClass,style:e.tableStyle,...Xe.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:tt},y)}const o=[lt()];return t!==null&&o.unshift(t()),$e({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function et(t,o){if(l.value!==null){l.value.scrollTo(t,o);return}t=parseInt(t,10);const v=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const g=S.value.querySelector(".q-table__middle.scroll"),y=v.offsetTop-e.virtualScrollStickySizeStart,k=y<g.scrollTop?"decrease":"increase";g.scrollTop=y,n("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:k})}}function tt(t){n("virtualScroll",t)}function Pe(){return[r(kt,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,o,v){const g=c.value(t),y=ne(g);if(o!==void 0)return o(ke({key:g,row:t,pageIndex:v,__trClass:y?"selected":""}));const k=a["body-cell"],P=L.value.map(T=>{const X=a[`body-cell-${T.name}`],Y=X!==void 0?X:k;return Y!==void 0?Y(at({key:g,row:t,pageIndex:v,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(p.value===!0){const T=a["body-selection"],X=T!==void 0?T(nt({key:g,row:t,pageIndex:v})):[r(ge,{modelValue:y,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(Y,vt)=>{U([g],[t],Y,vt)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},X))}const V={key:g,class:{selected:y}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=T=>{n("RowClick",T,t,v)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=T=>{n("RowDblclick",T,t,v)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=T=>{n("RowContextmenu",T,t,v)}),r("tr",V,P)}function lt(){const t=a.body,o=a["top-row"],v=a["bottom-row"];let g=M.value.map((y,k)=>Ce(y,t,k));return o!==void 0&&(g=o({cols:L.value}).concat(g)),v!==void 0&&(g=g.concat(v({cols:L.value}))),r("tbody",g)}function ke(t){return ve(t),t.cols=t.cols.map(o=>$({...o},"value",()=>E(o,t.row))),t}function at(t){return ve(t),$(t,"value",()=>E(t.col,t.row)),t}function nt(t){return ve(t),t}function ve(t){Object.assign(t,{cols:L.value,colsMap:_e.value,sort:oe,rowIndex:I.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),p.value===!0&&$(t,"selected",()=>ne(t.key),(o,v)=>{U([t.key],[t.row],o,v)}),$(t,"expand",()=>x(t.key),o=>{Ne(t.key,o)})}function E(t,o){const v=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(v,o):v}const j=f(()=>({pagination:h.value,pagesNumber:W.value,isFirstPage:re.value,isLastPage:ie.value,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,inFullscreen:u.value,toggleFullscreen:s}));function ot(){const t=a.top,o=a["top-left"],v=a["top-right"],g=a["top-selection"],y=p.value===!0&&g!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(j.value)]);let P;if(y===!0?P=g(j.value).slice():(P=[],o!==void 0?P.push(r("div",{class:"q-table__control"},[o(j.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[v(j.value)]))),P.length!==0)return r("div",{class:k},P)}const Re=f(()=>we.value===!0?null:ze.value);function xe(){const t=rt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:qe.value},Pe())])),r("thead",t)}function rt(){const t=a.header,o=a["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const v=L.value.map(g=>{const y=a[`header-cell-${g.name}`],k=y!==void 0?y:o,P=fe({col:g});return k!==void 0?k(P):r(Rt,{key:g.name,props:P},()=>g.label)});if(He.value===!0&&e.grid!==!0)v.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const g=a["header-selection"],y=g!==void 0?g(fe({})):[r(ge,{color:e.color,modelValue:Re.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Te})];v.unshift(r("th",{class:"q-table--col-auto-width"},y))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function fe(t){return Object.assign(t,{cols:L.value,sort:oe,colsMap:_e.value,color:e.color,dark:b.value,dense:e.dense}),he.value===!0&&$(t,"selected",()=>Re.value,Te),t}function Te(t){we.value===!0&&(t=!1),U(M.value.map(c.value),M.value,t)}const J=f(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function it(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,g=a["no-data"],y=g!==void 0?[g({message:v,icon:i.iconSet.table.warning,filter:e.filter})]:[r(De,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),v];return r("div",{class:ee+" q-table__bottom--nodata"},y)}const t=a.bottom;if(t!==void 0)return r("div",{class:ee},[t(j.value)]);const o=e.hideSelectedBanner!==!0&&p.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ee+" justify-end"},st(o));if(o.length!==0)return r("div",{class:ee},o)}function ut(t){F({page:1,rowsPerPage:t.value})}function st(t){let o;const{rowsPerPage:v}=h.value,g=e.paginationLabel||i.lang.table.pagination,y=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(Ct,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:Ge.value,displayValue:v===0?i.lang.table.allRows:v,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),y!==void 0)o=y(j.value);else if(o=[r("span",v!==0?{class:"q-table__bottom-item"}:{},[v?g(I.value+1,Math.min(K.value,G.value),G.value):g(1,ye.value,G.value)])],v!==0&&W.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),W.value>2&&o.push(r(Z,{key:"pgFirst",...P,icon:J.value[0],disable:re.value,onClick:ue})),o.push(r(Z,{key:"pgPrev",...P,icon:J.value[1],disable:re.value,onClick:se}),r(Z,{key:"pgNext",...P,icon:J.value[2],disable:ie.value,onClick:ce})),W.value>2&&o.push(r(Z,{key:"pgLast",...P,icon:J.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},o)),t}function ct(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&a.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function dt(){const t=a.item!==void 0?a.item:o=>{const v=o.cols.map(y=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[y.label]),r("div",{class:"q-table__grid-item-value"},[y.value])]));if(p.value===!0){const y=a["body-selection"],k=y!==void 0?y(o):[r(ge,{modelValue:o.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(P,V)=>{U([o.key],[o.row],P,V)}})];v.unshift(r("div",{class:"q-table__grid-item-row"},k),r(_t,{dark:b.value}))}const g={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=y=>{n("RowClick",y,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=y=>{n("RowDblclick",y,o.row,o.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[r("div",g,v)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((o,v)=>t(ke({key:c.value(o),row:o,pageIndex:v}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ue,prevPage:se,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:Ue,isRowExpanded:x,setExpanded:z,sort:oe,resetVirtualScroll:Ye,scrollTo:et,getCellValue:E}),wt(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>M.value,computedRowsNumber:()=>G.value}),()=>{const t=[ot()],o={ref:S,class:C.value};return e.grid===!0?t.push(ct()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Ze(),it()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",o,t)}}});export{ll as Q,Rt as a,xt as b};
