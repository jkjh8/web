import{aQ as N,v as V,r as d,c as B,o as A,y as k,z as P,A as t,B as s,j as a,R as _,K as Q,G as n,aV as S,I as T,C as l,J as L,D as x,b0 as Y,bE as E,N as G}from"./index.ef6cc54e.js";import{Q as v}from"./QTooltip.2b01887b.js";import{Q as I,a as m}from"./QTable.18858d55.js";import{Q as M}from"./QTr.fe5a3b85.js";import{Q as O}from"./QPage.8a30b0ac.js";import{h as g}from"./locale.0682628a.js";import{c as R,_ as U}from"./useLogs.7f5e01c2.js";import"./position-engine.f054ac5e.js";import"./QSelect.ab11255d.js";import"./QMenu.31f50568.js";import"./QPopupProxy.b04c4b3b.js";import"./ClosePopup.038da6ad.js";const $={class:"borderd"},J={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},F={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},K=s("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1),j={class:"row no-wrap items-center q-gutter-x-sm"},H={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},W={class:"q-gutter-x-sm row no-wrap items-center"},X=s("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),Z=s("span",null,"~",-1),ee={style:{"font-size":"0.8rem"}},fe={__name:"SystemLogPage",setup(ae){const{fnNotiError:y}=N(),w=V(),p=d(""),i=d(""),c=d(""),h=d([]),u=d({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),z=B(()=>i.value||c.value),C=o=>{switch(o){case"error":return"bg-red text-white";case"warn":return"bg-yellow-1";case"debug":return"bg-blue-1";case"event":return"bg-green-1";case"info":return""}},b=async o=>{try{w.loading.show();const r={...o,level:0,start:i.value,end:c.value},{data:e}=await G.get(`/logs?options=${JSON.stringify(r)}`);h.value=e.current,u.value=e.pagination}catch(r){console.error(r)}finally{w.loading.hide()}},f=async()=>{await b({pagination:u.value,filter:p.value})},q=async()=>{i.value="",c.value="",await f()},D=()=>{w.dialog({component:U,componentProps:{start:i.value,end:c.value}}).onOk(async o=>{if(g(new Date(o.start)).isAfter(g())){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(g(new Date(o.start)).isAfter(g(new Date(o.end)))){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}i.value=o.start,c.value=o.end,u.value.page=1,await f()})};return A(async()=>{await f()}),(o,r)=>(k(),P(O,{class:"page"},{default:t(()=>[s("div",$,[s("div",J,[s("div",F,[a(_,{name:"list_alt",color:"primary",size:"md"}),K,a(Q,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:f},{default:t(()=>[a(v,null,{default:t(()=>[n("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),s("div",j,[a(S,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:t(()=>[a(_,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(Q,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:D},{default:t(()=>[a(v,null,{default:t(()=>[n("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),z.value?(k(),T("div",H,[s("div",W,[a(_,{name:"calendar_month",color:"primary",size:"sm"}),X,s("span",null,l(i.value),1),Z,s("span",null,l(c.value),1),a(_,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:q},{default:t(()=>[a(v,null,{default:t(()=>[n("\uD574\uC81C")]),_:1})]),_:1})])])):L("",!0),a(I,{flat:"",columns:x(R),rows:h.value,filter:p.value,"row-key":"_id","wrap-cells":"",pagination:u.value,"onUpdate:pagination":r[1]||(r[1]=e=>u.value=e),onRequest:b},{body:t(e=>[a(M,{props:e,class:Y(C(e.row.level))},{default:t(()=>[a(m,{key:"createdAt",props:e},{default:t(()=>[s("div",ee,l(x(E).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),a(m,{key:"level",props:e},{default:t(()=>[n(l(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(m,{key:"source",props:e},{default:t(()=>[n(l(e.row.source),1)]),_:2},1032,["props"]),a(m,{key:"zones",props:e},{default:t(()=>[n(l(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(m,{class:"message",key:"message",props:e},{default:t(()=>[n(l(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["columns","rows","filter","pagination"])])]),_:1}))}};export{fe as default};
