import{u as L,v as N,x as s,y as c,z as t,A as n,B as Q,C as o,D as P,j as e,Q as V,E as r,G as p,H as g,I as h,J as y,K as z,L as F,M as j,o as S,N as D,O as R,p as m,f as O,P as U,F as G,R as $,S as _,U as M,V as k,W as u,X as d,Y as w,Z as H,_ as E}from"./index.568a708f.js";import{Q as T,a as J,b as K}from"./QLayout.70182697.js";import{Q as q}from"./QMenu.9f8c2a36.js";import{_ as W}from"./DialogConfirm.923d0832.js";import{Q as X}from"./QLinearProgress.3dc43b88.js";import{Q as Y}from"./QSpace.3f8de521.js";import{C as Z}from"./ClosePopup.462d86aa.js";import{u as ee}from"./usePlayer.f6e19d70.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";const ae={style:{"font-size":"0.9rem","font-family":"NanumSquare","font-weight":"700"}},oe={class:"q-py-md q-gutter-y-sm"},se={class:"row justify-center q-gutter-x-sm"},ne={class:"q-mt-lg q-px-lg"},le={key:0,class:"row justify-center text-caption"},re={class:"row justify-center"},ie={class:"row no-wrap justify-center"},ue={__name:"nameCard",setup(x){const l=L(),{fnUserInfo:f}=N(),a=async()=>{l.dialog({component:W,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{F.disconnect(),await j.get("/auth/signout"),p.value=null,$r.push("/")}catch(i){console.error(i)}})};return(i,b)=>(s(),c(y,{unelevated:"",round:"",size:"12px",color:"primary"},{default:t(()=>[n("div",ae,Q(o(P)()),1),e(q,{style:{"border-radius":"8px",padding:"10px 20px"},offset:[10,20]},{default:t(()=>[n("div",oe,[n("div",se,[e(V,{color:"primary",textColor:"white",size:"64px"},{default:t(()=>[r(Q(o(P)()),1)]),_:1})]),n("div",ne,Q(o(p).email),1),o(p).isAdmin?(s(),g("div",le," \uAD00\uB9AC\uC790 ")):h("",!0),n("div",re,[e(y,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"blue-grey-7",label:"\uC0AC\uC6A9\uC790 \uC815\uBCF4",onClick:b[0]||(b[0]=B=>o(f)(o(p)))})]),e(z,{class:"q-my-md"}),n("div",ie,[e(y,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:a})])])]),_:1})]),_:1}))}},de={__name:"AudioPlayer",setup(x){const{fnInitAudioPlayer:l,audioPlayer:f,modal:a,previewFile:i,playStatus:b,playTime:B,fnFF:I,fnFR:A}=ee();return S(()=>{l()}),(Qe,v)=>(s(),g(G,null,[n("audio",{ref_key:"audioPlayer",ref:f},null,512),e(U,{modelValue:o(a),"onUpdate:modelValue":v[3]||(v[3]=C=>O(a)?a.value=C:null),seamless:"",position:"bottom"},{default:t(()=>[e(D,{style:{width:"400px"}},{default:t(()=>[e(X,{value:o(B),"animation-speed":0,color:"primary"},null,8,["value"]),e(R,{class:"row no-wrap items-center"},{default:t(()=>[n("div",null,[n("div",null,Q(o(i).name),1)]),e(Y),e(y,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:o(A)},null,8,["onClick"]),o(b)?(s(),c(y,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:v[0]||(v[0]=C=>o(f).pause())})):(s(),c(y,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:v[1]||(v[1]=C=>o(f).play())})),e(y,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:o(I)},null,8,["onClick"]),m(e(y,{flat:"",round:"",icon:"close",onClick:v[2]||(v[2]=C=>o(f).pause())},null,512),[[Z]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},ce={class:"btn row no-wrap items-center"},_e=n("div",null,"\uBC29\uC1A1",-1),fe={__name:"BroadcastMenu",setup(x){const l=$();return(f,a)=>(s(),g("div",null,[n("div",ce,[_e,e(_,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((s(),c(k,{clickable:"",onClick:a[0]||(a[0]=i=>o(l).push("/broadcast/livepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"mic",color:"blue-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC2E4\uC2DC\uAC04 \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC14\uB85C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]]),m((s(),c(k,{clickable:"",onClick:a[1]||(a[1]=i=>o(l).push("/broadcast/schedulepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"schedule",color:"green-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC608\uC57D \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]]),m((s(),c(k,{clickable:"",onClick:a[2]||(a[2]=i=>o(l).push("/broadcast/files"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"folder_open",color:"yellow-8"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uD30C\uC77C \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC5D0 \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]])]),_:1})]),_:1})])]))}},pe={class:"btn row no-wrap items-center"},me=n("div",null,"\uC7A5\uCE58\uAD00\uB9AC",-1),ve={__name:"DeviceMenu",setup(x){const l=$();return(f,a)=>(s(),g("div",null,[n("div",pe,[me,e(_,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((s(),c(k,{clickable:"",onClick:a[0]||(a[0]=i=>o(l).push("/devices/qsys"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"img:qsys.svg",size:"sm"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]]),m((s(),c(k,{clickable:"",onClick:a[1]||(a[1]=i=>o(l).push("/devices/barix"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"img:barix.svg",size:"xs"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]])]),_:1})]),_:1})])]))}},ye={class:"btn row no-wrap items-center"},ke=n("div",null,"\uAD00\uB9AC\uC790",-1),we={__name:"AdminMenu",setup(x){const l=$();return(f,a)=>(s(),g("div",null,[n("div",ye,[ke,e(_,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((s(),c(k,{clickable:"",onClick:a[0]||(a[0]=i=>o(l).push("/admin/users"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"group",color:"purple-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD8C\uD55C\uC744 \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[w]]),m((s(),c(k,{clickable:"",onClick:a[1]||(a[1]=i=>o(l).push("/admin/serversetup"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"dns",color:"blue-grey"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC11C\uBC84 \uC124\uC815 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC11C\uBC84 \uC0C1\uC138 \uC124\uC815")]),_:1})]),_:1})]),_:1})),[[w]]),m((s(),c(k,{clickable:"",onClick:a[2]||(a[2]=i=>o(l).push("/admin/systemlog"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(_,{name:"list_alt",color:"pink-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC2DC\uC2A4\uD15C \uB85C\uADF8 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC2DC\uC2A4\uD15C \uB85C\uADF8 \uD655\uC778")]),_:1})]),_:1})]),_:1})),[[w]])]),_:1})]),_:1})])]))}};const ge={class:"row no-wrap items-center q-gutter-x-lg"},xe={__name:"MenuBar",setup(x){const l=$();return(f,a)=>(s(),g("div",ge,[n("div",{class:"btn cursor-pointer",onClick:a[0]||(a[0]=i=>o(l).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),o(p)?(s(),c(fe,{key:0})):h("",!0),n("div",{class:"btn cursor-pointer",onClick:a[1]||(a[1]=i=>o(l).push("/broadcast/eventlog"))}," \uBC29\uC1A1\uAE30\uB85D "),o(p)&&o(p).isAdmin?(s(),c(ve,{key:1})):h("",!0),o(p)&&o(p).isAdmin?(s(),c(we,{key:2})):h("",!0)]))}};var be=te(xe,[["__scopeId","data-v-df8730fe"]]);const $e={class:"full-height row no-wrap justify-between items-center"},Ce=n("div",{class:"logo_text"},"\uC5C5\uBB34\uBC29\uC1A1",-1),Ne={__name:"MainLayout",setup(x){const l=$();return S(()=>{H()}),(f,a)=>{const i=E("router-view");return s(),c(K,{view:"lHh Lpr lFf"},{default:t(()=>[e(T,{class:"header"},{default:t(()=>[n("div",$e,[n("div",{class:"row no-wrap items-center q-gutter-x-md cursor-pointer",onClick:a[0]||(a[0]=b=>o(l).push("/"))},[e(_,{name:"img:logoMain.svg",size:"3rem"}),Ce]),e(be),n("div",null,[o(p)&&o(p).email?(s(),c(ue,{key:0})):(s(),g("div",{key:1,class:"login-btn",onClick:a[1]||(a[1]=b=>o(l).push("/auth/signin"))},[e(_,{name:"account_circle"}),r(" LOGIN ")]))])])]),_:1}),e(J,null,{default:t(()=>[e(i),e(de)]),_:1})]),_:1})}}};export{Ne as default};
