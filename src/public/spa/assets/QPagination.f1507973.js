import{a1 as _,aN as z,bi as A,aO as H,c as l,r as K,aH as U,w as W,bj as w,bk as G,aM as J,h as m,aT as R,g as X,H as Y}from"./index.6285131f.js";function S(e,h){return[!0,!1].includes(e)?e:h}var p=_({name:"QPagination",props:{...z,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||A.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:h}){const{proxy:k}=X(),{$q:s}=k,D=H(e,s),u=l(()=>parseInt(e.min,10)),n=l(()=>parseInt(e.max,10)),B=l(()=>parseInt(e.maxPages,10)),C=l(()=>d.value+" / "+n.value),M=l(()=>S(e.boundaryLinks,e.input)),c=l(()=>S(e.boundaryNumbers,!e.input)),T=l(()=>S(e.directionLinks,e.input)),x=l(()=>S(e.ellipses,!e.input)),f=K(null),d=l({get:()=>e.modelValue,set:t=>{if(t=parseInt(t,10),e.disable||isNaN(t))return;const a=U(t,u.value,n.value);e.modelValue!==a&&h("update:modelValue",a)}});W(()=>`${u.value}|${n.value}`,()=>{d.value=e.modelValue});const $=l(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),P=l(()=>e.gutter in w?`${w[e.gutter]}px`:e.gutter||null),q=l(()=>P.value!==null?`--q-pagination-gutter-parent:-${P.value};--q-pagination-gutter-child:${P.value}`:null),y=l(()=>{const t=[e.iconFirst||s.iconSet.pagination.first,e.iconPrev||s.iconSet.pagination.prev,e.iconNext||s.iconSet.pagination.next,e.iconLast||s.iconSet.pagination.last];return s.lang.rtl===!0?t.reverse():t}),E=l(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),V=l(()=>G(e,"flat")),L=l(()=>({[V.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),O=l(()=>{const t={[V.value]:!1};return e.activeDesign!==""&&(t[e.activeDesign]=!0),t}),j=l(()=>({...O.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),v=l(()=>{let t=Math.max(B.value,1+(x.value?2:0)+(c.value?2:0));const a={pgFrom:u.value,pgTo:n.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(n.value).length)}em`}};return B.value&&t<n.value-u.value+1&&(t=1+Math.floor(t/2)*2,a.pgFrom=Math.max(u.value,Math.min(n.value-t+1,e.modelValue-Math.floor(t/2))),a.pgTo=Math.min(n.value,a.pgFrom+t-1),c.value&&(a.boundaryStart=!0,a.pgFrom++),x.value&&a.pgFrom>u.value+(c.value?1:0)&&(a.ellipsesStart=!0,a.pgFrom++),c.value&&(a.boundaryEnd=!0,a.pgTo--),x.value&&a.pgTo<n.value-(c.value?1:0)&&(a.ellipsesEnd=!0,a.pgTo--)),a});function F(t){d.value=t}function I(t){d.value=d.value+t}const Q=l(()=>{function t(){d.value=f.value,f.value=null}return{"onUpdate:modelValue":a=>{f.value=a},onKeyup:a=>{J(a,13)===!0&&t()},onBlur:t}});function o(t,a,g){const r={"aria-label":a,"aria-current":"false",...L.value,...t};return g===!0&&Object.assign(r,{"aria-current":"true",...j.value}),a!==void 0&&(e.toFn!==void 0?r.to=e.toFn(a):r.onClick=()=>{F(a)}),m(Y,r)}return Object.assign(k,{set:F,setByOffset:I}),()=>{const t=[],a=[];let g;if(M.value===!0&&(t.push(o({key:"bls",disable:e.disable||e.modelValue<=u.value,icon:y.value[0]},u.value)),a.unshift(o({key:"ble",disable:e.disable||e.modelValue>=n.value,icon:y.value[3]},n.value))),T.value===!0&&(t.push(o({key:"bdp",disable:e.disable||e.modelValue<=u.value,icon:y.value[1]},e.modelValue-1)),a.unshift(o({key:"bdn",disable:e.disable||e.modelValue>=n.value,icon:y.value[2]},e.modelValue+1))),e.input!==!0){g=[];const{pgFrom:r,pgTo:N,marginalStyle:b}=v.value;if(v.value.boundaryStart===!0){const i=u.value===e.modelValue;t.push(o({key:"bns",style:b,disable:e.disable,label:u.value},u.value,i))}if(v.value.boundaryEnd===!0){const i=n.value===e.modelValue;a.unshift(o({key:"bne",style:b,disable:e.disable,label:n.value},n.value,i))}v.value.ellipsesStart===!0&&t.push(o({key:"bes",style:b,disable:e.disable,label:"\u2026",ripple:!1},r-1)),v.value.ellipsesEnd===!0&&a.unshift(o({key:"bee",style:b,disable:e.disable,label:"\u2026",ripple:!1},N+1));for(let i=r;i<=N;i++)g.push(o({key:`bpg${i}`,style:b,disable:e.disable,label:i},i,i===e.modelValue))}return m("div",{class:$.value,...E.value},[m("div",{class:"q-pagination__content row no-wrap items-center",style:q.value},[...t,e.input===!0?m(R,{class:"inline",style:{width:`${C.value.length/1.5}em`},type:"number",dense:!0,value:f.value,disable:e.disable,dark:D.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:C.value,min:u.value,max:n.value,...Q.value}):m("div",{class:"q-pagination__middle row justify-center"},g),...a])])}}});export{p as Q};
