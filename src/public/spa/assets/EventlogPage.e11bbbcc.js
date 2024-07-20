import{v as C,r as d,c as N,o as B,y as Q,z as V,A as t,B as s,j as a,P as _,K as x,G as n,aS as A,I as P,C as l,J as T,D as z,b6 as S,aU as U}from"./index.97053f43.js";import{Q as w}from"./QTooltip.03395df0.js";import{Q as Y,a as m}from"./QTable.dbb994a4.js";import{Q as E}from"./QTr.e4ba344e.js";import{Q as G}from"./QPage.d7f5a605.js";import{h as v}from"./locale.0682628a.js";import{c as I,_ as M}from"./useLogs.053b88c8.js";import{u as O}from"./useNotify.145f9922.js";import"./position-engine.b870acb5.js";import"./QSelect.2330ee49.js";import"./QMenu.e1f0b677.js";import"./QPopupProxy.98c5ec87.js";import"./ClosePopup.1e8a56f2.js";const $={class:"borderd"},J={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},L={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},R=s("div",{class:"font-main"},"\uC774\uBCA4\uD2B8 \uB85C\uADF8",-1),F={class:"row no-wrap items-center q-gutter-x-sm"},K={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},j={class:"q-gutter-x-sm row no-wrap items-center"},H=s("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),W=s("span",null,"~",-1),X={style:{"font-size":"0.8rem"}},pe={__name:"EventlogPage",setup(Z){const{fnNotiError:y}=O(),g=C(),p=d(""),i=d(""),c=d(""),h=d([]),u=d({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),b=N(()=>i.value||c.value),k=async o=>{try{g.loading.show();const r={...o,level:4,start:i.value,end:c.value},{data:e}=await U.get(`/logs?options=${JSON.stringify(r)}`);h.value=e.current,u.value=e.pagination}catch(r){console.error(r)}finally{g.loading.hide()}},f=async()=>{await k({pagination:u.value,filter:p.value})},q=async()=>{i.value="",c.value="",await f()},D=()=>{g.dialog({component:M,componentProps:{start:i.value,end:c.value}}).onOk(async o=>{if(v(new Date(o.start)).isAfter(v())){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(v(new Date(o.start)).isAfter(v(new Date(o.end)))){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}i.value=o.start,c.value=o.end,u.value.page=1,await f()})};return B(async()=>{await f()}),(o,r)=>(Q(),V(G,{class:"page"},{default:t(()=>[s("div",$,[s("div",J,[s("div",L,[a(_,{name:"list_alt",color:"primary",size:"md"}),R,a(x,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:f},{default:t(()=>[a(w,null,{default:t(()=>[n("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),s("div",F,[a(A,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:t(()=>[a(_,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(x,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:D},{default:t(()=>[a(w,null,{default:t(()=>[n("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),b.value?(Q(),P("div",K,[s("div",j,[a(_,{name:"calendar_month",color:"primary",size:"sm"}),H,s("span",null,l(i.value),1),W,s("span",null,l(c.value),1),a(_,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:q},{default:t(()=>[a(w,null,{default:t(()=>[n("\uD574\uC81C")]),_:1})]),_:1})])])):T("",!0),a(Y,{flat:"",columns:z(I),rows:h.value,filter:p.value,"row-key":"_id","wrap-cells":"",pagination:u.value,"onUpdate:pagination":r[1]||(r[1]=e=>u.value=e),onRequest:k},{body:t(e=>[a(E,{props:e},{default:t(()=>[a(m,{key:"createdAt",props:e},{default:t(()=>[s("div",X,l(z(S).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),a(m,{key:"level",props:e},{default:t(()=>[n(l(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(m,{key:"source",props:e},{default:t(()=>[n(l(e.row.source),1)]),_:2},1032,["props"]),a(m,{key:"zones",props:e},{default:t(()=>[n(l(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(m,{class:"message",key:"message",props:e},{default:t(()=>[n(l(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","pagination"])])]),_:1}))}};export{pe as default};
