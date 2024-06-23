import{u as R,v as G,x as O,c as M,h as B,y as P,g as U,z as Q,A as H,B as E,C as s,D as i,E as t,G as l,H as z,I as a,J as j,j as e,Q as T,K as r,L as m,M as $,N as h,O as k,P as J,R as K,o as N,p as v,S as W,U as X,V as _,f as Y,W as Z,F as ee,X as I,Y as b,Z as d,_ as c,$ as g,a0 as te,b as ae,a1 as ne,a2 as se,a3 as S}from"./index.2e86d1d2.js";import{Q as oe,a as le,b as re}from"./QLayout.d2b10fcc.js";import{Q as A}from"./QMenu.8ff9c640.js";import{_ as ie}from"./DialogConfirm.a9a5a992.js";import{Q as ue,u as de}from"./usePlayer.5c07afb4.js";import{C as ce}from"./ClosePopup.2d860a08.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";var D=R({name:"QBanner",props:{...G,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(p,{slots:o}){const{proxy:{$q:f}}=U(),n=O(p,f),u=M(()=>"q-banner row items-center"+(p.dense===!0?" q-banner--dense":"")+(n.value===!0?" q-banner--dark q-dark":"")+(p.rounded===!0?" rounded-borders":"")),y=M(()=>`q-banner__actions row items-center justify-end col-${p.inlineActions===!0?"auto":"all"}`);return()=>{const x=[B("div",{class:"q-banner__avatar col-auto row items-center self-start"},P(o.avatar)),B("div",{class:"q-banner__content col text-body2"},P(o.default))],C=P(o.action);return C!==void 0&&x.push(B("div",{class:y.value},C)),B("div",{class:u.value+(p.inlineActions===!1&&C!==void 0?" q-banner--top-padding":""),role:"alert"},x)}}});const _e={style:{"font-size":"0.9rem","font-family":"NanumSquare","font-weight":"700"}},fe={class:"column items-center justify-center q-gutter-y-sm q-my-sm",style:{width:"200px"}},pe={class:"row justify-center q-gutter-x-sm"},me={key:0,class:"row justify-center text-caption"},ve={class:"row justify-center"},ye={class:"row no-wrap justify-center"},we={__name:"nameCard",setup(p){const o=Q(),f=H(),{fnUserInfo:n}=E(),u=async()=>{f.dialog({component:ie,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{K.disconnect(),m.value=null,localStorage.removeItem("token"),o.push("/login")}catch(y){console.error(y)}})};return(y,x)=>(s(),i(k,{unelevated:"",round:"",size:"12px",color:"primary"},{default:t(()=>[l("div",_e,z(a(j)()),1),e(A,{style:{"border-radius":"8px",padding:"10px 10px"},offset:[10,20]},{default:t(()=>[l("div",fe,[l("div",pe,[e(T,{color:"primary",textColor:"white",size:"64px"},{default:t(()=>[r(z(a(j)()),1)]),_:1})]),l("div",null,z(a(m).email),1),a(m).isAdmin?(s(),$("div",me," \uAD00\uB9AC\uC790 ")):h("",!0),l("div",ve,[e(k,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"blue-grey-7",label:"\uC0AC\uC6A9\uC790 \uC815\uBCF4",onClick:x[0]||(x[0]=C=>a(n)(a(m)))})]),e(J,{class:"q-my-sm"}),l("div",ye,[e(k,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:u})])])]),_:1})]),_:1}))}};const ke={class:"q-pa-lg",style:{position:"relative"}},be={class:"row no-wrap justify-start items-center q-gutter-x-md"},ge={class:"text-bold",style:{"font-size":"1rem"}},xe={__name:"AudioPlayer",setup(p){const{fnInitAudioPlayer:o,audioPlayer:f,modal:n,previewFile:u,playStatus:y,playTime:x,fnFF:C,fnFR:F}=de();return N(()=>{o()}),(Ve,w)=>(s(),$(ee,null,[l("audio",{ref_key:"audioPlayer",ref:f},null,512),e(Z,{modelValue:a(n),"onUpdate:modelValue":w[3]||(w[3]=q=>Y(n)?n.value=q:null),seamless:"",position:"bottom"},{default:t(()=>[l("div",ke,[v(e(k,{style:{position:"absolute",top:"20px",right:"15px","z-index":"2"},round:"",size:"xs",icon:"close",color:"red-10",onClick:w[0]||(w[0]=q=>a(f).pause())},null,512),[[ce]]),e(W,{class:"player"},{default:t(()=>[e(X,{class:"row no-wrap justify-between"},{default:t(()=>{var q;return[l("div",be,[e(ue,{"show-value":"",value:(q=a(x))!=null?q:100,size:"30px",thickness:.2,color:"primary","center-color":"white","track-color":"transparent"},{default:t(()=>[e(_,{name:"play_arrow",color:"primary",size:"sm"})]),_:1},8,["value"]),l("div",ge,z(a(u).name),1)]),l("div",null,[e(k,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:a(F)},null,8,["onClick"]),a(y)?(s(),i(k,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:w[1]||(w[1]=L=>a(f).pause())})):(s(),i(k,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:w[2]||(w[2]=L=>a(f).play())})),e(k,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:a(C)},null,8,["onClick"])])]}),_:1})]),_:1})])]),_:1},8,["modelValue"])],64))}};var $e=V(xe,[["__scopeId","data-v-5c1bdf58"]]);const Ce={class:"btn row no-wrap items-center"},he=l("div",null,"\uBC29\uC1A1",-1),Qe={__name:"BroadcastMenu",setup(p){const o=Q();return(f,n)=>(s(),$("div",null,[l("div",Ce,[he,e(_,{name:"keyboard_arrow_down"}),e(A,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(I,null,{default:t(()=>[v((s(),i(b,{clickable:"",onClick:n[0]||(n[0]=u=>a(o).push("/broadcast/livepage"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"mic",color:"primary"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r("\uC2E4\uC2DC\uAC04 \uBC29\uC1A1")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uBC14\uB85C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((s(),i(b,{clickable:"",onClick:n[1]||(n[1]=u=>a(o).push("/broadcast/schedulepage"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"schedule",color:"green-10"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r("\uC608\uC57D \uBC29\uC1A1")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((s(),i(b,{clickable:"",onClick:n[2]||(n[2]=u=>a(o).push("/broadcast/files"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"folder_open",color:"yellow-9"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r("\uD30C\uC77C \uAD00\uB9AC")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uBC29\uC1A1\uC5D0 \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}},qe={class:"btn row no-wrap items-center"},Be=l("div",null,"\uC7A5\uCE58\uAD00\uB9AC",-1),ze={__name:"DeviceMenu",setup(p){const o=Q();return(f,n)=>(s(),$("div",null,[l("div",qe,[Be,e(_,{name:"keyboard_arrow_down"}),e(A,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(I,null,{default:t(()=>[v((s(),i(b,{clickable:"",onClick:n[0]||(n[0]=u=>a(o).push("/devices/qsys"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"img:qsys.svg",size:"sm"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r("\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((s(),i(b,{clickable:"",onClick:n[1]||(n[1]=u=>a(o).push("/devices/barix"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"img:barix.svg",size:"xs"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r(" \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 ")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}},Ae={class:"btn row no-wrap items-center"},Pe=l("div",null,"\uAD00\uB9AC\uC790",-1),Se={__name:"AdminMenu",setup(p){const o=Q();return(f,n)=>(s(),$("div",null,[l("div",Ae,[Pe,e(_,{name:"keyboard_arrow_down"}),e(A,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(I,null,{default:t(()=>[v((s(),i(b,{clickable:"",onClick:n[0]||(n[0]=u=>a(o).push("/admin/users"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"group",color:"primary"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD00\uB9AC")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uC0AC\uC6A9\uC790 \uAD8C\uD55C\uC744 \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[g]]),v((s(),i(b,{clickable:"",onClick:n[1]||(n[1]=u=>a(o).push("/admin/serversetup"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"dns",color:"lime-8"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r(" \uC11C\uBC84 \uC124\uC815 ")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uC11C\uBC84 \uC0C1\uC138 \uC124\uC815")]),_:1})]),_:1})]),_:1})),[[g]]),v((s(),i(b,{clickable:"",onClick:n[2]||(n[2]=u=>a(o).push("/admin/systemlog"))},{default:t(()=>[e(d,{avatar:""},{default:t(()=>[e(_,{name:"list_alt",color:"green-9"})]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"menu-font"},{default:t(()=>[r(" \uC2DC\uC2A4\uD15C \uB85C\uADF8 ")]),_:1}),e(c,{caption:""},{default:t(()=>[r("\uC2DC\uC2A4\uD15C \uB85C\uADF8 \uD655\uC778")]),_:1})]),_:1})]),_:1})),[[g]])]),_:1})]),_:1})])]))}};const Ie={class:"row no-wrap items-center q-gutter-x-lg"},Me={__name:"MenuBar",setup(p){const o=Q();return(f,n)=>(s(),$("div",Ie,[l("div",{class:"btn cursor-pointer",onClick:n[0]||(n[0]=u=>a(o).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),a(m)?(s(),i(Qe,{key:0})):h("",!0),l("div",{class:"btn cursor-pointer",onClick:n[1]||(n[1]=u=>a(o).push("/broadcast/eventlog"))}," \uBC29\uC1A1\uAE30\uB85D "),a(m)&&a(m).isAdmin?(s(),i(ze,{key:1})):h("",!0),a(m)&&a(m).isAdmin?(s(),i(Se,{key:2})):h("",!0)]))}};var je=V(Me,[["__scopeId","data-v-046e0f0e"]]);const De={class:"full-height row no-wrap justify-between items-center"},Ne=l("div",{class:"logo_text"},"\uC5C5\uBB34\uBC29\uC1A1",-1),Ee={__name:"MainLayout",setup(p){const o=Q();return N(()=>{te()}),ae(async()=>{await ne()}),(f,n)=>{const u=se("router-view");return s(),i(re,{view:"lHh Lpr lFf"},{default:t(()=>[e(oe,{class:"header"},{default:t(()=>[l("div",De,[l("div",{class:"row no-wrap items-center q-gutter-x-md cursor-pointer",onClick:n[0]||(n[0]=y=>a(o).push("/"))},[e(_,{name:"img:logoMain.svg",size:"3rem"}),Ne]),e(je),l("div",null,[a(m)&&a(m).email?(s(),i(we,{key:0})):(s(),$("div",{key:1,class:"login-btn",onClick:n[1]||(n[1]=y=>a(o).push("/auth/signin"))},[e(_,{name:"account_circle"}),r(" LOGIN ")]))])])]),_:1}),e(le,null,{default:t(()=>[a(S).bridge.connected?h("",!0):(s(),i(D,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>[e(_,{name:"warning",size:"sm"}),r(" \uC5C5\uBB34 \uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC811\uC18D\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. ")]),_:1})),!a(S).scheduler.main.connected&&!a(S).scheduler.backup.connected?(s(),i(D,{key:1,"inline-actions":"",class:"text-white bg-orange"},{default:t(()=>[e(_,{name:"warning",size:"sm"}),r(" \uC2A4\uCF00\uC904\uB7EC\uAC00 \uBAA8\uB450 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694. ")]),_:1})):h("",!0),e(u),e($e)]),_:1})]),_:1})}}};export{Ee as default};
