import{v as N,r as d,c as B,o as V,y as b,z as A,A as t,B as s,j as a,P as _,K as Q,G as n,aS as P,I as S,C as l,J as T,D as x,aY as Y,b6 as L,aU as U}from"./index.97053f43.js";import{Q as v}from"./QTooltip.03395df0.js";import{Q as G,a as m}from"./QTable.dbb994a4.js";import{Q as I}from"./QTr.e4ba344e.js";import{Q as M}from"./QPage.d7f5a605.js";import{h as g}from"./locale.0682628a.js";import{c as O,_ as $}from"./useLogs.053b88c8.js";import{u as E}from"./useNotify.145f9922.js";import"./position-engine.b870acb5.js";import"./QSelect.2330ee49.js";import"./QMenu.e1f0b677.js";import"./QPopupProxy.98c5ec87.js";import"./ClosePopup.1e8a56f2.js";const J={class:"borderd"},R={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},F={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},K=s("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1),j={class:"row no-wrap items-center q-gutter-x-sm"},H={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},W={class:"q-gutter-x-sm row no-wrap items-center"},X=s("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),Z=s("span",null,"~",-1),ee={style:{"font-size":"0.8rem"}},_e={__name:"SystemLogPage",setup(ae){const{fnNotiError:y}=E(),w=N(),p=d(""),i=d(""),c=d(""),h=d([]),u=d({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),z=B(()=>i.value||c.value),C=o=>{switch(o){case"error":return"bg-red text-white";case"warn":return"bg-yellow-1";case"debug":return"bg-blue-1";case"event":return"bg-green-1";case"info":return""}},k=async o=>{try{w.loading.show();const r={...o,level:0,start:i.value,end:c.value},{data:e}=await U.get(`/logs?options=${JSON.stringify(r)}`);h.value=e.current,u.value=e.pagination}catch(r){console.error(r)}finally{w.loading.hide()}},f=async()=>{await k({pagination:u.value,filter:p.value})},q=async()=>{i.value="",c.value="",await f()},D=()=>{w.dialog({component:$,componentProps:{start:i.value,end:c.value}}).onOk(async o=>{if(g(new Date(o.start)).isAfter(g())){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(g(new Date(o.start)).isAfter(g(new Date(o.end)))){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}i.value=o.start,c.value=o.end,u.value.page=1,await f()})};return V(async()=>{await f()}),(o,r)=>(b(),A(M,{class:"page"},{default:t(()=>[s("div",J,[s("div",R,[s("div",F,[a(_,{name:"list_alt",color:"primary",size:"md"}),K,a(Q,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:f},{default:t(()=>[a(v,null,{default:t(()=>[n("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),s("div",j,[a(P,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:t(()=>[a(_,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(Q,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:D},{default:t(()=>[a(v,null,{default:t(()=>[n("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),z.value?(b(),S("div",H,[s("div",W,[a(_,{name:"calendar_month",color:"primary",size:"sm"}),X,s("span",null,l(i.value),1),Z,s("span",null,l(c.value),1),a(_,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:q},{default:t(()=>[a(v,null,{default:t(()=>[n("\uD574\uC81C")]),_:1})]),_:1})])])):T("",!0),a(G,{flat:"",columns:x(O),rows:h.value,filter:p.value,"row-key":"_id","wrap-cells":"",pagination:u.value,"onUpdate:pagination":r[1]||(r[1]=e=>u.value=e),onRequest:k},{body:t(e=>[a(I,{props:e,class:Y(C(e.row.level))},{default:t(()=>[a(m,{key:"createdAt",props:e},{default:t(()=>[s("div",ee,l(x(L).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),a(m,{key:"level",props:e},{default:t(()=>[n(l(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(m,{key:"source",props:e},{default:t(()=>[n(l(e.row.source),1)]),_:2},1032,["props"]),a(m,{key:"zones",props:e},{default:t(()=>[n(l(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(m,{class:"message",key:"message",props:e},{default:t(()=>[n(l(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["columns","rows","filter","pagination"])])]),_:1}))}};export{_e as default};
