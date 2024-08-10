import{aO as D,v as N,r as d,c as V,o as B,y as k,z as S,A as t,B as s,j as a,S as g,L as z,H as n,aV as L,J as T,C as l,K as O,b3 as P,D as M,bA as Y,O as U}from"./index.adce3174.js";import{Q as w}from"./QTooltip.b2000013.js";import{Q as $,a as m}from"./QTable.dd0d0918.js";import{Q as E}from"./QTr.179f45ca.js";import{Q as G}from"./QPage.87e14d5f.js";import{h as _}from"./locale.bc72f71b.js";import{_ as I}from"./logOptions.cb1009dd.js";import"./ClosePopup.b2ebe43d.js";const J={class:"borderd"},R={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},F={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},H=s("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1),K={class:"row no-wrap items-center q-gutter-x-sm"},Z={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},j={class:"q-gutter-x-sm row no-wrap items-center"},W=s("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),X=s("span",null,"~",-1),ee={style:{"font-size":"0.8rem"}},ue={__name:"SystemLogPage",setup(ae){const{fnNotiError:y}=D(),Q=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],v=N(),f=d(""),i=d(""),c=d(""),b=d([]),u=d({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),x=V(()=>i.value||c.value),C=o=>{switch(o){case"error":return"bg-red text-white";case"warn":return"bg-yellow-1";case"debug":return"bg-blue-1";case"event":return"bg-green-1";case"info":return""}},h=async o=>{try{v.loading.show();const r={...o,level:0,start:i.value,end:c.value},{data:e}=await U.get(`/logs?options=${JSON.stringify(r)}`);b.value=e.current,u.value=e.pagination}catch(r){console.error(r)}finally{v.loading.hide()}},p=async()=>{await h({pagination:u.value,filter:f.value})},q=async()=>{i.value="",c.value="",await p()},A=()=>{v.dialog({component:I,componentProps:{start:i.value,end:c.value}}).onOk(async o=>{if(_(new Date(o.start)).isAfter(_())){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(_(new Date(o.start)).isAfter(_(new Date(o.end)))){y("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}i.value=o.start,c.value=o.end,u.value.page=1,await p()})};return B(async()=>{await p()}),(o,r)=>(k(),S(G,{class:"page"},{default:t(()=>[s("div",J,[s("div",R,[s("div",F,[a(g,{name:"list_alt",color:"primary",size:"md"}),H,a(z,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:p},{default:t(()=>[a(w,null,{default:t(()=>[n("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),s("div",K,[a(L,{modelValue:f.value,"onUpdate:modelValue":r[0]||(r[0]=e=>f.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:t(()=>[a(g,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(z,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:A},{default:t(()=>[a(w,null,{default:t(()=>[n("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),x.value?(k(),T("div",Z,[s("div",j,[a(g,{name:"calendar_month",color:"primary",size:"sm"}),W,s("span",null,l(i.value),1),X,s("span",null,l(c.value),1),a(g,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:q},{default:t(()=>[a(w,null,{default:t(()=>[n("\uD574\uC81C")]),_:1})]),_:1})])])):O("",!0),a($,{flat:"",columns:Q,rows:b.value,filter:f.value,"row-key":"_id","wrap-cells":"",pagination:u.value,"onUpdate:pagination":r[1]||(r[1]=e=>u.value=e),onRequest:h},{body:t(e=>[a(E,{props:e,class:P(C(e.row.level))},{default:t(()=>[a(m,{key:"createdAt",props:e},{default:t(()=>[s("div",ee,l(M(Y).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),a(m,{key:"level",props:e},{default:t(()=>[n(l(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(m,{key:"source",props:e},{default:t(()=>[n(l(e.row.source),1)]),_:2},1032,["props"]),a(m,{key:"zones",props:e},{default:t(()=>[n(l(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(m,{class:"message",key:"message",props:e},{default:t(()=>[n(l(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination"])])]),_:1}))}};export{ue as default};
