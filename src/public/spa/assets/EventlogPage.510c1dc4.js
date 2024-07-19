import{A as N,r as d,c as C,o as V,C as Q,D as A,E as t,G as s,j as a,V as _,O as x,K as n,aS as B,M as P,H as l,N as T,I as b,b6 as E,aU as M}from"./index.7f82ef12.js";import{Q as w}from"./QTooltip.65407910.js";import{Q as O,a as m}from"./QTable.c9fa95b5.js";import{Q as S}from"./QTr.2b1ed518.js";import{Q as U}from"./QPage.8aa1073f.js";import{h as g}from"./locale.0682628a.js";import{c as Y,_ as G}from"./useLogs.67f01466.js";import{u as I}from"./useNotify.28e4b240.js";import"./position-engine.9158a117.js";import"./QSelect.0930110b.js";import"./QMenu.c6a52b6e.js";import"./QPopupProxy.8e37ec17.js";import"./ClosePopup.152a1e5b.js";const $={class:"borderd"},L={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},R={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},F=s("div",{class:"font-main"},"\uC774\uBCA4\uD2B8 \uB85C\uADF8",-1),H={class:"row no-wrap items-center q-gutter-x-sm"},J={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},K={class:"q-gutter-x-sm row no-wrap items-center"},j=s("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),W=s("span",null,"~",-1),X={style:{"font-size":"0.8rem"}},pe={__name:"EventlogPage",setup(Z){const{fnNotiError:y}=I(),v=N(),p=d(""),i=d(""),c=d(""),h=d([]),u=d({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),q=C(()=>i.value||c.value),k=async o=>{try{v.loading.show();const r={...o,level:4,start:i.value,end:c.value},{data:e}=await M.get(`/logs?options=${JSON.stringify(r)}`);h.value=e.current,u.value=e.pagination}catch(r){console.error(r)}finally{v.loading.hide()}},f=async()=>{await k({pagination:u.value,filter:p.value})},z=async()=>{i.value="",c.value="",await f()},D=()=>{v.dialog({component:G,componentProps:{start:i.value,end:c.value}}).onOk(async o=>{if(g(new Date(o.start)).isAfter(g())){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(g(new Date(o.start)).isAfter(g(new Date(o.end)))){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}i.value=o.start,c.value=o.end,u.value.page=1,await f()})};return V(async()=>{await f()}),(o,r)=>(Q(),A(U,{class:"page"},{default:t(()=>[s("div",$,[s("div",L,[s("div",R,[a(_,{name:"list_alt",color:"primary",size:"md"}),F,a(x,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:f},{default:t(()=>[a(w,null,{default:t(()=>[n("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),s("div",H,[a(B,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:t(()=>[a(_,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(x,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:D},{default:t(()=>[a(w,null,{default:t(()=>[n("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),q.value?(Q(),P("div",J,[s("div",K,[a(_,{name:"calendar_month",color:"primary",size:"sm"}),j,s("span",null,l(i.value),1),W,s("span",null,l(c.value),1),a(_,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:z},{default:t(()=>[a(w,null,{default:t(()=>[n("\uD574\uC81C")]),_:1})]),_:1})])])):T("",!0),a(O,{flat:"",columns:b(Y),rows:h.value,filter:p.value,"row-key":"_id","wrap-cells":"",pagination:u.value,"onUpdate:pagination":r[1]||(r[1]=e=>u.value=e),onRequest:k},{body:t(e=>[a(S,{props:e},{default:t(()=>[a(m,{key:"createdAt",props:e},{default:t(()=>[s("div",X,l(b(E).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),a(m,{key:"level",props:e},{default:t(()=>[n(l(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(m,{key:"source",props:e},{default:t(()=>[n(l(e.row.source),1)]),_:2},1032,["props"]),a(m,{key:"zones",props:e},{default:t(()=>[n(l(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(m,{class:"message",key:"message",props:e},{default:t(()=>[n(l(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","pagination"])])]),_:1}))}};export{pe as default};
