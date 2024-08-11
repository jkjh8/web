import{u as C,v as F,x as V,y as n,z as i,A as t,B as o,C as M,D as a,E as S,j as e,Q as j,G as R,H as r,I as p,J as x,K as z,L as m,M as A,_ as D,N as U,O,o as I,p as v,P as G,R as E,S as c,f as H,U as T,F as J,V as P,W as k,X as u,Y as d,Z as g,$ as K,b as W,a0 as X,a1 as Y,a2 as B}from"./index.de675580.js";import{Q as Z,a as ee,b as te,c as ae}from"./QLayout.1a4feffb.js";import{Q as se}from"./QBanner.e495133e.js";import{Q as oe}from"./QCircularProgress.5820c3d3.js";import{C as ne}from"./ClosePopup.9e4e419a.js";import{u as le}from"./usePlayer.d5644a33.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";const re={style:{"font-size":"0.9rem","font-family":"NanumSquare","font-weight":"700"}},ie={class:"column items-center justify-center q-gutter-y-sm q-my-sm",style:{width:"200px"}},ue={class:"row justify-center q-gutter-x-sm"},de={key:0,class:"row justify-center text-caption"},ce={class:"row justify-center"},_e={class:"row justify-center"},fe={class:"row no-wrap justify-center"},pe={__name:"nameCard",setup($){const l=C(),f=F(),{fnUserInfo:s}=V(),_=async()=>{f.dialog({component:D,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{U.disconnect(),p.value=null,localStorage.removeItem("token"),l.push("/login")}catch(y){console.error(y)}})},Q=async()=>{try{f.loading.show();const y=await O.get("/files/manual",{responseType:"blob"}),h=window.URL.createObjectURL(new Blob([y.data])),b=document.createElement("a");b.href=h,b.setAttribute("download","\uD55C\uC218\uC6D0_\uC5C5\uBB34\uBC29\uC1A1_\uBA54\uB274\uC5BC.pdf"),b.click(),b.remove()}catch(y){console.error(y)}finally{f.loading.hide()}};return(y,h)=>(n(),i(m,{unelevated:"",round:"",size:"12px",color:"primary"},{default:t(()=>[o("div",re,M(a(S)()),1),e(j,{style:{"border-radius":"8px",padding:"10px 10px"},offset:[10,20]},{default:t(()=>[o("div",ie,[o("div",ue,[e(R,{color:"primary",textColor:"white",size:"64px"},{default:t(()=>[r(M(a(S)()),1)]),_:1})]),o("div",null,M(a(p).email),1),a(p).isAdmin?(n(),x("div",de," \uAD00\uB9AC\uC790 ")):z("",!0),o("div",ce,[e(m,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"blue-grey-7",label:"\uC0AC\uC6A9\uC790 \uC815\uBCF4",onClick:h[0]||(h[0]=b=>a(s)(a(p)))})]),o("div",_e,[e(m,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"green-7",label:"\uBA54\uB274\uC5BC",onClick:Q})]),e(A,{class:"q-my-sm"}),o("div",fe,[e(m,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:_})])])]),_:1})]),_:1}))}};const me={class:"q-pa-lg",style:{position:"relative"}},ve={class:"row no-wrap justify-start items-center q-gutter-x-md"},ye={class:"text-bold",style:{"font-size":"1rem"}},we={__name:"AudioPlayer",setup($){const{fnInitAudioPlayer:l,audioPlayer:f,modal:s,previewFile:_,playStatus:Q,playTime:y,fnFF:h,fnFR:b}=le();return I(()=>{l()}),(Ne,w)=>(n(),x(J,null,[o("audio",{ref_key:"audioPlayer",ref:f},null,512),e(T,{modelValue:a(s),"onUpdate:modelValue":w[3]||(w[3]=q=>H(s)?s.value=q:null),seamless:"",position:"bottom"},{default:t(()=>[o("div",me,[v(e(m,{style:{position:"absolute",top:"20px",right:"15px","z-index":"2"},round:"",size:"xs",icon:"close",color:"red-10",onClick:w[0]||(w[0]=q=>a(f).pause())},null,512),[[ne]]),e(G,{class:"player"},{default:t(()=>[e(E,{class:"row no-wrap justify-between"},{default:t(()=>{var q;return[o("div",ve,[e(oe,{"show-value":"",value:(q=a(y))!=null?q:100,size:"30px",thickness:.2,color:"primary","center-color":"white","track-color":"transparent"},{default:t(()=>[e(c,{name:"play_arrow",color:"primary",size:"sm"})]),_:1},8,["value"]),o("div",ye,M(a(_).name),1)]),o("div",null,[e(m,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:a(b)},null,8,["onClick"]),a(Q)?(n(),i(m,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:w[1]||(w[1]=N=>a(f).pause())})):(n(),i(m,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:w[2]||(w[2]=N=>a(f).play())})),e(m,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:a(h)},null,8,["onClick"])])]}),_:1})]),_:1})])]),_:1},8,["modelValue"])],64))}};var ke=L(we,[["__scopeId","data-v-5c1bdf58"]]);const ge={class:"btn row no-wrap items-center"},be=o("div",null,"\uBC29\uC1A1",-1),xe={__name:"BroadcastMenu",setup($){const l=C();return(f,s)=>(n(),x("div",null,[o("div",ge,[be,e(c,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(P,null,{default:t(()=>[v((n(),i(k,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/broadcast/livepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"mic",color:"primary"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC2E4\uC2DC\uAC04 \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC14\uB85C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((n(),i(k,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/broadcast/schedulepage"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"schedule",color:"green-10"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC608\uC57D \uBC29\uC1A1")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((n(),i(k,{clickable:"",onClick:s[2]||(s[2]=_=>a(l).push("/broadcast/files"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"folder_open",color:"yellow-9"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uD30C\uC77C \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC5D0 \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}},$e={class:"btn row no-wrap items-center"},he=o("div",null,"\uC7A5\uCE58\uAD00\uB9AC",-1),Ce={__name:"DeviceMenu",setup($){const l=C();return(f,s)=>(n(),x("div",null,[o("div",$e,[he,e(c,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(P,null,{default:t(()=>[v((n(),i(k,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/devices/qsys"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"img:qsys.svg",size:"sm"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((n(),i(k,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/devices/barix"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"img:barix.svg",size:"xs"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}},Qe={class:"btn row no-wrap items-center"},qe=o("div",null,"\uAD00\uB9AC\uC790",-1),ze={__name:"AdminMenu",setup($){const l=C();return(f,s)=>(n(),x("div",null,[o("div",Qe,[qe,e(c,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(P,null,{default:t(()=>[v((n(),i(k,{clickable:"",onClick:s[0]||(s[0]=_=>a(l).push("/admin/users"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"group",color:"primary"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD00\uB9AC")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD8C\uD55C\uC744 \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((n(),i(k,{clickable:"",onClick:s[1]||(s[1]=_=>a(l).push("/admin/serversetup"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"dns",color:"lime-8"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC11C\uBC84 \uC124\uC815 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC11C\uBC84 \uC0C1\uC138 \uC124\uC815")]),_:1})]),_:1})]),_:1})),[[g]]),v((n(),i(k,{clickable:"",onClick:s[2]||(s[2]=_=>a(l).push("/admin/systemlog"))},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(c,{name:"list_alt",color:"green-9"})]),_:1}),e(u,null,{default:t(()=>[e(d,{class:"menu-font"},{default:t(()=>[r(" \uC2DC\uC2A4\uD15C \uB85C\uADF8 ")]),_:1}),e(d,{caption:""},{default:t(()=>[r("\uC2DC\uC2A4\uD15C \uB85C\uADF8 \uD655\uC778")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}};const Be={class:"row no-wrap items-center q-gutter-x-lg"},Me={__name:"MenuBar",setup($){const l=C();return(f,s)=>(n(),x("div",Be,[o("div",{class:"btn cursor-pointer",onClick:s[0]||(s[0]=_=>a(l).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),a(p)?(n(),i(xe,{key:0})):z("",!0),o("div",{class:"btn cursor-pointer",onClick:s[1]||(s[1]=_=>a(l).push("/broadcast/eventlog"))}," \uBC29\uC1A1\uAE30\uB85D "),a(p)&&a(p).isAdmin?(n(),i(Ce,{key:1})):z("",!0),a(p)&&a(p).isAdmin?(n(),i(ze,{key:2})):z("",!0)]))}};var je=L(Me,[["__scopeId","data-v-046e0f0e"]]);const Pe={class:"full-height row no-wrap justify-between items-center"},Se=o("div",{class:"logo_text"},"\uC5C5\uBB34\uBC29\uC1A1",-1),Ae={class:"bg-white text-black q-px-lg q-pb-md"},Ie={class:"row justify-end items-center q-gutter-x-sm q-px-sm"},Le=o("div",null,"\uD55C\uAD6D\uC218\uB825\uC6D0\uC790\uB825 \uC5C5\uBB34\uBC29\uC1A1",-1),Ee={__name:"MainLayout",setup($){const l=C();return I(()=>{K()}),W(async()=>{await X()}),(f,s)=>{const _=Y("router-view");return n(),i(ae,{view:"lHh Lpr lFf"},{default:t(()=>[e(Z,{class:"header"},{default:t(()=>[o("div",Pe,[o("div",{class:"row no-wrap items-center q-gutter-x-md cursor-pointer",onClick:s[0]||(s[0]=Q=>a(l).push("/"))},[e(c,{name:"img:logoMain.svg",size:"3rem"}),Se]),e(je),o("div",null,[a(p)&&a(p).email?(n(),i(pe,{key:0})):(n(),x("div",{key:1,class:"login-btn",onClick:s[1]||(s[1]=Q=>a(l).push("/auth/signin"))},[e(c,{name:"account_circle"}),r(" LOGIN ")]))])])]),_:1}),e(ee,null,{default:t(()=>[o("div",Ae,[e(A),o("div",Ie,[e(c,{name:"img:logoMain.svg",size:"1.5rem"}),Le])])]),_:1}),e(te,null,{default:t(()=>[a(B).mode==="Normal"&&!a(B).scheduler.main.connected||a(B).mode==="Backup"&&!a(B).scheduler.backup.connected?(n(),i(se,{key:0,"inline-actions":"",class:"text-white bg-orange"},{default:t(()=>[e(c,{name:"warning",size:"sm"}),r(" \uC2A4\uCF00\uC904\uB7EC\uAC00 \uBAA8\uB450 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694. ")]),_:1})):z("",!0),e(_),e(ke)]),_:1})]),_:1})}}};export{Ee as default};
