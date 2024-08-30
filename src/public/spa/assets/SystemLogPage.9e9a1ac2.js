import{aS as O,v as $,r as _,c as Y,o as K,y as c,z as R,A as s,B as t,j as a,S as v,L as C,H as g,aY as S,J as f,C as d,K as x,F as L,b4 as A,bO as E,b5 as D,D as k,M as F,aU as G,bP as I,p as J,O as H}from"./index.6e21b7c1.js";import{Q}from"./QTooltip.678fbb16.js";import{Q as Z,a as y}from"./QTable.e5fe6238.js";import{Q as j}from"./locale.9967a88e.js";import{Q as W}from"./QTr.58df1756.js";import{Q as X}from"./QPagination.77407c56.js";import{f as ee,a as ae,Q as se,_ as te}from"./useLogs.1a83e966.js";import{Q as oe}from"./QPage.1b069372.js";import{h as w,C as le}from"./ClosePopup.dc2daaa1.js";const ne={class:"borderd"},re={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},ie={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},ue=t("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1),de={class:"row no-wrap items-center q-gutter-x-sm"},ce={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},me={class:"q-gutter-x-sm row no-wrap items-center"},pe={key:0,class:"q-gutter-x-xs row items-center"},ve=t("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),ge=t("span",null,"~",-1),fe={key:1,class:"q-gutter-x-xs row items-center"},_e=t("span",{class:"text-bold"},"\uB85C\uADF8 \uB808\uBCA8",-1),ye={style:{"font-size":"0.8rem"}},we={class:"q-pa-md"},be={class:"row justify-center q-py-md",style:{position:"relative"}},he={class:"row items-center q-px-md",style:{position:"absolute",right:"0",top:"1px","font-size":"0.8rem"}},xe=t("span",null,"\uD398\uC774\uC9C0\uB2F9 \uD45C\uC2DC",-1),De={__name:"SystemLogPage",setup(ke){const{fnNotiError:V}=O(),N=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],h=$(),b=_(""),m=_(""),r=_([]),p=_(""),z=_([]),l=_({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),U=Y(()=>m.value||p.value||r.value.length),B=n=>{switch(n){case"error":return"bg-red-10 text-white";case"warn":return"bg-yellow-3";case"debug":return"bg-indigo-1";case"event":return"bg-teal-2";case"event error":return"bg-red-2";case"info":return""}},P=async n=>{try{h.loading.show();const o={...n,level:r.value.map(u=>u.value),start:m.value,end:p.value},{data:e}=await H.get(`/logs?options=${JSON.stringify(o)}`);z.value=e.current,l.value=e.pagination}catch(o){console.error(o)}finally{h.loading.hide()}},i=async()=>{await P({pagination:l.value,filter:b.value})},T=async()=>{m.value="",p.value="",r.value=[],await i()},M=()=>{h.dialog({component:te,componentProps:{start:m.value,end:p.value,logLevel:r.value,mode:"system"}}).onOk(async n=>{if(w(new Date(n.start)).isAfter(w())){V("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(w(new Date(n.start)).isAfter(w(new Date(n.end)))){V("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}m.value=n.start,p.value=n.end,r.value=n.logLevel,l.value.page=1,await i()})};return K(async()=>{await i()}),(n,o)=>(c(),R(oe,{class:"page"},{default:s(()=>[t("div",ne,[t("div",re,[t("div",ie,[a(v,{name:"list_alt",color:"primary",size:"md"}),ue,a(C,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:i},{default:s(()=>[a(Q,null,{default:s(()=>[g("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),t("div",de,[a(S,{modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=e=>b.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:s(()=>[a(v,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(C,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:M},{default:s(()=>[a(Q,null,{default:s(()=>[g("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),U.value?(c(),f("div",ce,[t("div",me,[m.value||p.value?(c(),f("div",pe,[a(v,{name:"calendar_month",color:"primary",size:"sm"}),ve,t("span",null,d(m.value),1),ge,t("span",null,d(p.value),1)])):x("",!0),r.value.length?(c(),f("div",fe,[a(v,{name:"label",color:"primary",size:"sm"}),_e,(c(!0),f(L,null,A(r.value,e=>(c(),f("span",{key:e},[a(E,{dense:"",color:"primary","text-color":"white",removable:"",onRemove:u=>(r.value.splice(r.value.indexOf(e),1),i())},{default:s(()=>[g(d(e.label),1)]),_:2},1032,["onRemove"])]))),128))])):x("",!0),a(v,{class:"cursor-pointer q-ml-md",name:"cancel",color:"red-10",size:"xs",onClick:T},{default:s(()=>[a(Q,null,{default:s(()=>[g("\uD574\uC81C")]),_:1})]),_:1})])])):x("",!0),a(Z,{flat:"",columns:N,rows:z.value,filter:b.value,"row-key":"_id","wrap-cells":"","hide-pagination":"",pagination:l.value,"onUpdate:pagination":o[1]||(o[1]=e=>l.value=e),onRequest:P},{body:s(e=>[a(W,{props:e,class:D(B(e.row.level))},{default:s(()=>[a(y,{key:"createdAt",props:e},{default:s(()=>[t("div",ye,d(k(w)(e.row.createdAt).format("YYYY-MM-DD hh:mm:ss A")),1)]),_:2},1032,["props"]),a(y,{key:"level",props:e},{default:s(()=>[g(d(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(y,{key:"source",props:e},{default:s(()=>[g(d(e.row.source),1)]),_:2},1032,["props"]),a(y,{key:"zones",props:e},{default:s(()=>[g(d(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(y,{class:"message",key:"message",props:e},{default:s(()=>[(c(!0),f(L,null,A(k(ee)(e.row.message),(u,q)=>(c(),f("span",{key:q,class:D(["q-ml-xs",k(ae)(u,q)])},d(u),3))),128)),a(j,null,{default:s(()=>[t("div",we,d(e.row.message),1)]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination"]),a(F),t("div",be,[a(X,{modelValue:l.value.page,"onUpdate:modelValue":[o[2]||(o[2]=e=>l.value.page=e),i],max:l.value.rowsNumber/l.value.rowsPerPage,"max-pages":8,size:"12px",flat:"","active-design":"outline","direction-links":"","boundary-links":""},null,8,["modelValue","max"]),t("div",he,[xe,a(G,{style:{"font-size":"0.8rem"},borderless:"","item-aligned":"",dense:"","hide-bottom-space":"","map-options":"",modelValue:l.value.rowsPerPage,"onUpdate:modelValue":[o[3]||(o[3]=e=>l.value.rowsPerPage=e),i],options:[5,10,15,20,25,30,40,50]},null,8,["modelValue"]),a(v,{name:"settings",size:"xs",color:"primary"},{default:s(()=>[a(se,{modelValue:l.value.page,"onUpdate:modelValue":o[4]||(o[4]=e=>l.value.page=e),"max-width":"160px"},{default:s(e=>[a(S,{modelValue:e.value,"onUpdate:modelValue":u=>e.value=u,dense:"",autofocus:"","auto-save":"",type:"number",label:"\uD398\uC774\uC9C0 \uBC14\uB85C\uAC00\uAE30",onKeyup:I(u=>(e.set(),i()),["enter"])},{append:s(()=>[J(a(v,{class:"cursor-pointer",name:"send",color:"primary",size:"xs",onClick:u=>(e.set(),i())},null,8,["onClick"]),[[le]])]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])]),_:1})])])])]),_:1}))}};export{De as default};
