import{u as C,v as F,x as L,y as o,z as i,A as t,B as n,C as B,D as a,E as S,j as e,Q as D,G as r,H as p,I as g,J as $,K as y,L as R,M as G,o as A,p as m,N as O,O as U,P as c,f as H,R as E,F as T,S as M,U as w,V as u,W as d,X as k,Y as J,b as K,Z as W,_ as X,$ as Q}from"./index.97053f43.js";import{Q as Y,a as Z,b as ee}from"./QLayout.002a32a7.js";import{Q as I}from"./QBanner.58fc8b8c.js";import{Q as q}from"./QMenu.e1f0b677.js";import{_ as te}from"./DialogConfirm.26b7b5bb.js";import{Q as ae,u as se}from"./usePlayer.27fe1b6d.js";import{C as oe}from"./ClosePopup.1e8a56f2.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./position-engine.b870acb5.js";const ne={style:{"font-size":"0.9rem","font-family":"NanumSquare","font-weight":"700"}},le={class:"column items-center justify-center q-gutter-y-sm q-my-sm",style:{width:"200px"}},re={class:"row justify-center q-gutter-x-sm"},ie={key:0,class:"row justify-center text-caption"},ue={class:"row justify-center"},de={class:"row no-wrap justify-center"},ce={__name:"nameCard",setup(x){const l=C(),f=F(),{fnUserInfo:s}=L(),_=async()=>{f.dialog({component:te,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{G.disconnect(),p.value=null,localStorage.removeItem("token"),l.push("/login")}catch(b){console.error(b)}})};return(b,z)=>(o(),i(y,{unelevated:"",round:"",size:"12px",color:"primary"},{default:t(()=>[n("div",ne,B(a(S)()),1),e(q,{style:{"border-radius":"8px",padding:"10px 10px"},offset:[10,20]},{default:t(()=>[n("div",le,[n("div",re,[e(D,{color:"primary",textColor:"white",size:"64px"},{default:t(()=>[r(B(a(S)()),1)]),_:1})]),n("div",null,B(a(p).email),1),a(p).isAdmin?(o(),g("div",ie," \uAD00\uB9AC\uC790 ")):$("",!0),n("div",ue,[e(y,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"blue-grey-7",label:"\uC0AC\uC6A9\uC790 \uC815\uBCF4",onClick:z[0]||(z[0]=P=>a(s)(a(p)))})]),e(R,{class:"q-my-sm"}),n("div",de,[e(y,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:_})])])]),_:1})]),_:1}))}};const _e={class:"q-pa-lg",style:{position:"relative"}},fe={class:"row no-wrap justify-start items-center q-gutter-x-md"},pe={class:"text-bold",style:{"font-size":"1rem"}},me={__name:"AudioPlayer",setup(x){const{fnInitAudioPlayer:l,audioPlayer:f,modal:s,previewFile:_,playStatus:b,playTime:z,fnFF:P,fnFR:N}=se();return A(()=>{l()}),(Pe,v)=>(o(),g(T,null,[n("audio",{ref_key:"audioPlayer",ref:f},null,512),e(E,{modelValue:a(s),"onUpdate:modelValue":v[3]||(v[3]=h=>H(s)?s.value=h:null),seamless:"",position:"bottom"},{default:t(()=>[n("div",_e,[m(e(y,{style:{position:"absolute",top:"20px",right:"15px","z-index":"2"},round:"",size:"xs",icon:"close",color:"red-10",onClick:v[0]||(v[0]=h=>a(f).pause())},null,512),[[oe]]),e(O,{class:"player"},{default:t(()=>[e(U,{class:"row no-wrap justify-between"},{default:t(()=>{var h;return[n("div",fe,[e(ae,{"show-value":"",value:(h=a(z))!=null?h:100,size:"30px",thickness:.2,color:"primary","center-color":"white","track-color":"transparent"},{default:t(()=>[e(c,{name:"play_arrow",color:"primary",size:"sm"})]),_:1},8,["value"]),n("div",pe,B(a(_).name),1)]),n("div",null,[e(y,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:a(N)},null,8,["onClick"]),a(b)?(o(),i(y,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:v[1]||(v[1]=V=>a(f).pause())})):(o(),i(y,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:v[2]||(v[2]=V=>a(f).play())})),e(y,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:a(P)},null,8,["onClick"])])]}),_:1})]),_:1})])]),_:1},8,["modelValue"])],64))}};var ve=j(me,[["__scopeId","data-v-552d1174"]]);const ye={class:"btn row no-wrap items-center"},we=n("div",null,"\uBC29\uC1A1",-1),ke={__name:"BroadcastMenu",setup(x){const l=C();return(f,s)=>(o(),g("div",null,[n("div",ye,[we,e(c,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((o(),i(w,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/broadcast/livepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"mic",color:"primary"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC2E4\uC2DC\uAC04 \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC14\uB85C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]]),m((o(),i(w,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/broadcast/schedulepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"schedule",color:"green-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC608\uC57D \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]]),m((o(),i(w,{clickable:"",onClick:s[2]||(s[2]=_=>a(l).push("/broadcast/files"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"folder_open",color:"yellow-9"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uD30C\uC77C \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC5D0 \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]])]),_:1})]),_:1})])]))}},ge={class:"btn row no-wrap items-center"},xe=n("div",null,"\uC7A5\uCE58\uAD00\uB9AC",-1),be={__name:"DeviceMenu",setup(x){const l=C();return(f,s)=>(o(),g("div",null,[n("div",ge,[xe,e(c,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((o(),i(w,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/devices/qsys"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"img:qsys.svg",size:"sm"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]]),m((o(),i(w,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/devices/barix"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"img:barix.svg",size:"xs"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]])]),_:1})]),_:1})])]))}},$e={class:"btn row no-wrap items-center"},Ce=n("div",null,"\uAD00\uB9AC\uC790",-1),he={__name:"AdminMenu",setup(x){const l=C();return(f,s)=>(o(),g("div",null,[n("div",$e,[Ce,e(c,{name:"keyboard_arrow_down"}),e(q,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(M,null,{default:t(()=>[m((o(),i(w,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/admin/users"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"group",color:"primary"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD8C\uD55C\uC744 \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[k]]),m((o(),i(w,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/admin/serversetup"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"dns",color:"lime-8"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC11C\uBC84 \uC124\uC815 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC11C\uBC84 \uC0C1\uC138 \uC124\uC815")]),_:1})]),_:1})]),_:1})),[[k]]),m((o(),i(w,{clickable:"",onClick:s[2]||(s[2]=_=>a(l).push("/admin/systemlog"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"list_alt",color:"green-9"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC2DC\uC2A4\uD15C \uB85C\uADF8 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC2DC\uC2A4\uD15C \uB85C\uADF8 \uD655\uC778")]),_:1})]),_:1})]),_:1})),[[k]])]),_:1})]),_:1})])]))}};const Qe={class:"row no-wrap items-center q-gutter-x-lg"},ze={__name:"MenuBar",setup(x){const l=C();return(f,s)=>(o(),g("div",Qe,[n("div",{class:"btn cursor-pointer",onClick:s[0]||(s[0]=_=>a(l).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),a(p)?(o(),i(ke,{key:0})):$("",!0),n("div",{class:"btn cursor-pointer",onClick:s[1]||(s[1]=_=>a(l).push("/broadcast/eventlog"))}," \uBC29\uC1A1\uAE30\uB85D "),a(p)&&a(p).isAdmin?(o(),i(be,{key:1})):$("",!0),a(p)&&a(p).isAdmin?(o(),i(he,{key:2})):$("",!0)]))}};var Be=j(ze,[["__scopeId","data-v-046e0f0e"]]);const qe={class:"full-height row no-wrap justify-between items-center"},Me=n("div",{class:"logo_text"},"\uC5C5\uBB34\uBC29\uC1A1",-1),Re={__name:"MainLayout",setup(x){const l=C();return A(()=>{J()}),K(async()=>{await W()}),(f,s)=>{const _=X("router-view");return o(),i(ee,{view:"lHh Lpr lFf"},{default:t(()=>[e(Y,{class:"header"},{default:t(()=>[n("div",qe,[n("div",{class:"row no-wrap items-center q-gutter-x-md cursor-pointer",onClick:s[0]||(s[0]=b=>a(l).push("/"))},[e(c,{name:"img:logoMain.svg",size:"3rem"}),Me]),e(Be),n("div",null,[a(p)&&a(p).email?(o(),i(ce,{key:0})):(o(),g("div",{key:1,class:"login-btn",onClick:s[1]||(s[1]=b=>a(l).push("/auth/signin"))},[e(c,{name:"account_circle"}),r(" LOGIN ")]))])])]),_:1}),e(Z,null,{default:t(()=>[a(Q).bridge.connected?$("",!0):(o(),i(I,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>[e(c,{name:"warning",size:"sm"}),r(" \uC5C5\uBB34 \uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC811\uC18D\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. ")]),_:1})),a(Q).mode==="Normal"&&!a(Q).scheduler.main.connected||a(Q).mode==="Backup"&&!a(Q).scheduler.backup.connected?(o(),i(I,{key:1,"inline-actions":"",class:"text-white bg-orange"},{default:t(()=>[e(c,{name:"warning",size:"sm"}),r(" \uC2A4\uCF00\uC904\uB7EC\uAC00 \uBAA8\uB450 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694. ")]),_:1})):$("",!0),e(_),e(ve)]),_:1})]),_:1})}}};export{Re as default};
