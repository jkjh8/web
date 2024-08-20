import{aN as B,v as L,r as f,c as T,o as M,y as _,z as O,A as s,B as o,j as a,S as m,L as C,H as p,aU as P,J as b,C as i,K as $,b3 as q,D as h,F as K,b2 as Y,M as E,aQ as F,bO as G,p as I,O as J}from"./index.be9b7a3d.js";import{Q as x}from"./QTooltip.35ee2dbc.js";import{Q as R,a as g}from"./QTable.f9944f43.js";import{Q as j}from"./QTr.f336a2e9.js";import{Q as H}from"./QPagination.169c5ca7.js";import{f as Z,a as W,Q as X,_ as ee}from"./useLogs.a1775d25.js";import{Q as ae}from"./QPage.79a2d5f9.js";import{h as v,C as se}from"./ClosePopup.0585638d.js";import"./locale.5d77f944.js";const te={class:"borderd"},oe={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},le={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},ne=o("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1),re={class:"row no-wrap items-center q-gutter-x-sm"},ie={key:0,class:"q-pa-sm bg-blue-grey-1 row justify-center items-center"},ue={class:"q-gutter-x-sm row no-wrap items-center"},de=o("span",{class:"text-bold"},"\uB0A0\uC9DC",-1),ce=o("span",null,"~",-1),me={style:{"font-size":"0.8rem"}},pe={class:"row justify-center q-py-md",style:{position:"relative"}},fe={class:"row items-center q-px-md",style:{position:"absolute",right:"0",top:"1px","font-size":"0.8rem"}},ge=o("span",null,"\uD398\uC774\uC9C0\uB2F9 \uD45C\uC2DC",-1),ze={__name:"SystemLogPage",setup(ve){const{fnNotiError:k}=B(),N=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],y=L(),w=f(""),u=f(""),d=f(""),Q=f([]),l=f({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),S=T(()=>u.value||d.value),A=n=>{switch(n){case"error":return"bg-red-10 text-white";case"warn":return"bg-yellow-3";case"debug":return"bg-indigo-1";case"event":return"bg-teal-2";case"info":return""}},V=async n=>{try{y.loading.show();const t={...n,level:0,start:u.value,end:d.value},{data:e}=await J.get(`/logs?options=${JSON.stringify(t)}`);Q.value=e.current,l.value=e.pagination}catch(t){console.error(t)}finally{y.loading.hide()}},r=async()=>{await V({pagination:l.value,filter:w.value})},D=async()=>{u.value="",d.value="",await r()},U=()=>{y.dialog({component:ee,componentProps:{start:u.value,end:d.value}}).onOk(async n=>{if(v(new Date(n.start)).isAfter(v())){k("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC624\uB298\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}if(v(new Date(n.start)).isAfter(v(new Date(n.end)))){k("\uC2DC\uC791 \uC2DC\uAC04\uC774 \uC885\uB8CC \uC2DC\uAC04\uBCF4\uB2E4 \uB2A6\uC2B5\uB2C8\uB2E4.");return}u.value=n.start,d.value=n.end,l.value.page=1,await r()})};return M(async()=>{await r()}),(n,t)=>(_(),O(ae,{class:"page"},{default:s(()=>[o("div",te,[o("div",oe,[o("div",le,[a(m,{name:"list_alt",color:"primary",size:"md"}),ne,a(C,{flat:"",dense:"",round:"",icon:"refresh",color:"primary",onClick:r},{default:s(()=>[a(x,null,{default:s(()=>[p("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})]),o("div",re,[a(P,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:s(()=>[a(m,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"]),a(C,{flat:"",round:"",icon:"settings",size:"sm",color:"primary",onClick:U},{default:s(()=>[a(x,null,{default:s(()=>[p("\uAC80\uC0C9\uC635\uC158")]),_:1})]),_:1})])]),S.value?(_(),b("div",ie,[o("div",ue,[a(m,{name:"calendar_month",color:"primary",size:"sm"}),de,o("span",null,i(u.value),1),ce,o("span",null,i(d.value),1),a(m,{class:"cursor-pointer",name:"cancel",color:"red-10",size:"xs",onClick:D},{default:s(()=>[a(x,null,{default:s(()=>[p("\uD574\uC81C")]),_:1})]),_:1})])])):$("",!0),a(R,{flat:"",columns:N,rows:Q.value,filter:w.value,"row-key":"_id","wrap-cells":"","hide-pagination":"",pagination:l.value,"onUpdate:pagination":t[1]||(t[1]=e=>l.value=e),onRequest:V},{body:s(e=>[a(j,{props:e,class:q(A(e.row.level))},{default:s(()=>[a(g,{key:"createdAt",props:e},{default:s(()=>[o("div",me,i(h(v)(e.row.createdAt).format("YYYY-MM-DD hh:mm:ss A")),1)]),_:2},1032,["props"]),a(g,{key:"level",props:e},{default:s(()=>[p(i(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),a(g,{key:"source",props:e},{default:s(()=>[p(i(e.row.source),1)]),_:2},1032,["props"]),a(g,{key:"zones",props:e},{default:s(()=>[p(i(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),a(g,{class:"message",key:"message",props:e},{default:s(()=>[(_(!0),b(K,null,Y(h(Z)(e.row.message),(c,z)=>(_(),b("span",{key:z,class:q(["q-ml-xs",h(W)(c,z)])},i(c),3))),128))]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination"]),a(E),o("div",pe,[a(H,{modelValue:l.value.page,"onUpdate:modelValue":[t[2]||(t[2]=e=>l.value.page=e),r],max:l.value.rowsNumber/l.value.rowsPerPage,"max-pages":8,size:"12px",flat:"","active-design":"outline","direction-links":"","boundary-links":""},null,8,["modelValue","max"]),o("div",fe,[ge,a(F,{style:{"font-size":"0.8rem"},borderless:"","item-aligned":"",dense:"","hide-bottom-space":"","map-options":"",modelValue:l.value.rowsPerPage,"onUpdate:modelValue":[t[3]||(t[3]=e=>l.value.rowsPerPage=e),r],options:[5,10,15,20,25,30,40,50]},null,8,["modelValue"]),a(m,{name:"settings",size:"xs",color:"primary"},{default:s(()=>[a(X,{modelValue:l.value.page,"onUpdate:modelValue":t[4]||(t[4]=e=>l.value.page=e),"max-width":"160px"},{default:s(e=>[a(P,{modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,dense:"",autofocus:"","auto-save":"",type:"number",label:"\uD398\uC774\uC9C0 \uBC14\uB85C\uAC00\uAE30",onKeyup:G(c=>(e.set(),r()),["enter"])},{append:s(()=>[I(a(m,{class:"cursor-pointer",name:"send",color:"primary",size:"xs",onClick:c=>(e.set(),r())},null,8,["onClick"]),[[se]])]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])]),_:1})])])])]),_:1}))}};export{ze as default};