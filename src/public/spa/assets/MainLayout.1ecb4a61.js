import{u as B,v as G,x as O,y as o,z as i,A as t,B as n,C as M,D as a,E as F,j as e,Q as j,G as T,H as l,I as u,J as C,K as $,L as w,M as N,_ as E,N as L,O as H,o as V,p as g,P as J,R as K,S as d,f as W,U as X,F as Y,V as D,W as x,X as _,Y as f,Z as b,r as S,$ as Z,a0 as ee,a1 as te,a2 as ae,a3 as se,m as ne,a4 as oe,a5 as A,a6 as le}from"./index.aa4027d4.js";import{Q as re}from"./QTooltip.d37762ba.js";import{Q as ie,a as ue,b as de,c as ce}from"./QLayout.95bb05df.js";import{Q as P}from"./QBanner.0e19cde6.js";import{C as _e,h as z}from"./ClosePopup.13160bee.js";import{Q as fe}from"./QCircularProgress.4ce9a4c8.js";import{u as pe}from"./usePlayer.67fb1105.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";const me={style:{"font-size":"0.9rem","font-family":"NanumSquare","font-weight":"700"}},ve={class:"column items-center justify-center q-gutter-y-sm q-my-sm",style:{width:"200px"}},ye={class:"row justify-center q-gutter-x-sm"},we={key:0,class:"row justify-center text-caption"},ge={class:"row justify-center"},ke={class:"row justify-center"},xe={class:"row no-wrap justify-center"},be={__name:"nameCard",setup(Q){const r=B(),p=G(),{fnUserInfo:s}=O(),c=async()=>{p.dialog({component:E,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{L.disconnect(),u.value=null,localStorage.removeItem("token"),r.push("/login")}catch(m){console.error(m)}})},q=async()=>{try{p.loading.show();const m=await H.get("/files/manual",{responseType:"blob"}),y=window.URL.createObjectURL(new Blob([m.data])),k=document.createElement("a");k.href=y,k.setAttribute("download","\uD55C\uC218\uC6D0_\uC5C5\uBB34\uBC29\uC1A1_\uBA54\uB274\uC5BC.pdf"),k.click(),k.remove()}catch(m){console.error(m)}finally{p.loading.hide()}};return(m,y)=>(o(),i(w,{unelevated:"",round:"",size:"12px",color:"primary"},{default:t(()=>[n("div",me,M(a(F)()),1),e(j,{style:{"border-radius":"8px",padding:"10px 10px"},offset:[10,20]},{default:t(()=>[n("div",ve,[n("div",ye,[e(T,{color:"primary",textColor:"white",size:"64px"},{default:t(()=>[l(M(a(F)()),1)]),_:1})]),n("div",null,M(a(u).email),1),a(u).isAdmin?(o(),C("div",we," \uAD00\uB9AC\uC790 ")):$("",!0),n("div",ge,[e(w,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"blue-grey-7",label:"\uC0AC\uC6A9\uC790 \uC815\uBCF4",onClick:y[0]||(y[0]=k=>a(s)(a(u)))})]),n("div",ke,[e(w,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"green-7",label:"\uBA54\uB274\uC5BC",onClick:q})]),e(N,{class:"q-my-sm"}),n("div",xe,[e(w,{style:{width:"120px"},rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:c})])])]),_:1})]),_:1}))}};const he={class:"q-pa-lg",style:{position:"relative"}},$e={class:"row no-wrap justify-start items-center q-gutter-x-md"},Ce={class:"text-bold",style:{"font-size":"1rem"}},Qe={__name:"AudioPlayer",setup(Q){const{fnInitAudioPlayer:r,audioPlayer:p,modal:s,previewFile:c,playStatus:q,playTime:m,fnFF:y,fnFR:k}=pe();return V(()=>{r()}),(I,v)=>(o(),C(Y,null,[n("audio",{ref_key:"audioPlayer",ref:p},null,512),e(X,{modelValue:a(s),"onUpdate:modelValue":v[3]||(v[3]=h=>W(s)?s.value=h:null),seamless:"",position:"bottom"},{default:t(()=>[n("div",he,[g(e(w,{style:{position:"absolute",top:"20px",right:"15px","z-index":"2"},round:"",size:"xs",icon:"close",color:"red-10",onClick:v[0]||(v[0]=h=>a(p).pause())},null,512),[[_e]]),e(J,{class:"player"},{default:t(()=>[e(K,{class:"row no-wrap justify-between"},{default:t(()=>{var h;return[n("div",$e,[e(fe,{"show-value":"",value:(h=a(m))!=null?h:100,size:"30px",thickness:.2,color:"primary","center-color":"white","track-color":"transparent"},{default:t(()=>[e(d,{name:"play_arrow",color:"primary",size:"sm"})]),_:1},8,["value"]),n("div",Ce,M(a(c).name),1)]),n("div",null,[e(w,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:a(k)},null,8,["onClick"]),a(q)?(o(),i(w,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:v[1]||(v[1]=U=>a(p).pause())})):(o(),i(w,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:v[2]||(v[2]=U=>a(p).play())})),e(w,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:a(y)},null,8,["onClick"])])]}),_:1})]),_:1})])]),_:1},8,["modelValue"])],64))}};var qe=R(Qe,[["__scopeId","data-v-5c1bdf58"]]);const ze={class:"btn row no-wrap items-center"},Be=n("div",null,"\uBC29\uC1A1",-1),Ie={__name:"BroadcastMenu",setup(Q){const r=B();return(p,s)=>(o(),C("div",null,[n("div",ze,[Be,e(d,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(D,null,{default:t(()=>[g((o(),i(x,{clickable:"",onClick:s[0]||(s[0]=c=>a(r).push("/broadcast/livepage"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"mic",color:"primary"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l("\uC2E4\uC2DC\uAC04 \uBC29\uC1A1")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uBC14\uB85C \uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]]),g((o(),i(x,{clickable:"",onClick:s[1]||(s[1]=c=>a(r).push("/broadcast/schedulepage"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"schedule",color:"green-10"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l("\uC608\uC57D \uBC29\uC1A1")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uBC29\uC1A1\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]]),g((o(),i(x,{clickable:"",onClick:s[2]||(s[2]=c=>a(r).push("/broadcast/files"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"folder_open",color:"yellow-9"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l("\uD30C\uC77C \uAD00\uB9AC")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uBC29\uC1A1\uC5D0 \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]])]),_:1})]),_:1})])]))}},Ae={class:"btn row no-wrap items-center"},Me=n("div",null,"\uC7A5\uCE58\uAD00\uB9AC",-1),je={__name:"DeviceMenu",setup(Q){const r=B();return(p,s)=>(o(),C("div",null,[n("div",Ae,[Me,e(d,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(D,null,{default:t(()=>[g((o(),i(x,{clickable:"",onClick:s[0]||(s[0]=c=>a(r).push("/devices/qsys"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"img:qsys.svg",size:"sm"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l("\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]]),g((o(),i(x,{clickable:"",onClick:s[1]||(s[1]=c=>a(r).push("/devices/barix"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"img:barix.svg",size:"xs"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l(" \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 ")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uB514\uBC14\uC774\uC2A4 \uB4F1\uB85D & \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]])]),_:1})]),_:1})])]))}},Se={class:"btn row no-wrap items-center"},Pe=n("div",null,"\uAD00\uB9AC\uC790",-1),Le={__name:"AdminMenu",setup(Q){const r=B();return(p,s)=>(o(),C("div",null,[n("div",Se,[Pe,e(d,{name:"keyboard_arrow_down"}),e(j,{style:{width:"280px","border-radius":"10px",border:"1px solid #fff"},offset:[100,20]},{default:t(()=>[e(D,null,{default:t(()=>[g((o(),i(x,{clickable:"",onClick:s[0]||(s[0]=c=>a(r).push("/admin/users"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"group",color:"primary"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l("\uC0AC\uC6A9\uC790 \uAD00\uB9AC")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uC0AC\uC6A9\uC790 \uAD8C\uD55C\uC744 \uC218\uC815\uD569\uB2C8\uB2E4")]),_:1})]),_:1})]),_:1})),[[b]]),g((o(),i(x,{clickable:"",onClick:s[1]||(s[1]=c=>a(r).push("/admin/serversetup"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"dns",color:"lime-8"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l(" \uC11C\uBC84 \uC124\uC815 ")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uC11C\uBC84 \uC0C1\uC138 \uC124\uC815")]),_:1})]),_:1})]),_:1})),[[b]]),g((o(),i(x,{clickable:"",onClick:s[2]||(s[2]=c=>a(r).push("/admin/systemlog"))},{default:t(()=>[e(_,{avatar:""},{default:t(()=>[e(d,{name:"list_alt",color:"green-9"})]),_:1}),e(_,null,{default:t(()=>[e(f,{class:"menu-font"},{default:t(()=>[l(" \uC2DC\uC2A4\uD15C \uB85C\uADF8 ")]),_:1}),e(f,{caption:""},{default:t(()=>[l("\uC2DC\uC2A4\uD15C \uB85C\uADF8 \uD655\uC778")]),_:1})]),_:1})]),_:1})),[[b]])]),_:1})]),_:1})])]))}};const De={class:"row no-wrap items-center q-gutter-x-lg"},Fe={__name:"MenuBar",setup(Q){const r=B();return(p,s)=>(o(),C("div",De,[n("div",{class:"btn cursor-pointer",onClick:s[0]||(s[0]=c=>a(r).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),a(u)?(o(),i(Ie,{key:0})):$("",!0),n("div",{class:"btn cursor-pointer",onClick:s[1]||(s[1]=c=>a(r).push("/broadcast/eventlog"))}," \uBC29\uC1A1\uAE30\uB85D "),a(u)&&a(u).isAdmin?(o(),i(je,{key:1})):$("",!0),a(u)&&a(u).isAdmin?(o(),i(Le,{key:2})):$("",!0)]))}};var Ne=R(Fe,[["__scopeId","data-v-046e0f0e"]]);const Ve={class:"full-height row no-wrap justify-between items-center"},Re=n("div",{class:"logo_text"},"\uC5C5\uBB34\uBC29\uC1A1",-1),Ue={class:"row justify-end",style:{width:"100px"}},Ge={key:1},Oe={class:"bg-white text-black q-px-lg q-pb-md"},Te={class:"row justify-end items-center q-gutter-x-sm q-px-sm"},Ee=n("div",null,"\uD55C\uAD6D\uC218\uB825\uC6D0\uC790\uB825 \uC5C5\uBB34\uBC29\uC1A1",-1),tt={__name:"MainLayout",setup(Q){const r=B();let p=null;const s=S(!1),c=S(!1),q=S(!1),m=()=>{p=setInterval(async()=>{await y()},1e3*60*5)},y=async()=>{await le(),s.value=z().diff(z(A.scheduler.main),"minutes")>5,c.value=z().diff(z(A.scheduler.backup),"minutes")>5,q.value=z().diff(z(A.barix),"minutes")>5};return V(async()=>{Z(),u.value&&(await y(),m(),L.connected||L.connect()),ee.value.length===0&&await te(),ae.value.length===0&&await se()}),ne(()=>{clearInterval(p)}),(k,I)=>{const v=oe("router-view");return o(),i(ce,{view:"lHh Lpr lFf"},{default:t(()=>[e(ie,{class:"header"},{default:t(()=>[n("div",Ve,[n("div",{class:"row no-wrap items-center q-gutter-x-md cursor-pointer",onClick:I[0]||(I[0]=h=>a(r).push("/"))},[e(d,{name:"img:logoMain.svg",size:"3rem"}),Re]),e(Ne),n("div",Ue,[a(u)&&a(u).email?(o(),i(be,{key:0})):(o(),C("div",Ge,[e(d,{class:"cursor-pointer",name:"account_circle",size:"sm",color:"primary",onClick:I[1]||(I[1]=h=>a(r).push("/auth/signin"))},{default:t(()=>[e(re,null,{default:t(()=>[l("LOGIN")]),_:1})]),_:1})]))])])]),_:1}),e(ue,null,{default:t(()=>[n("div",Oe,[e(N),n("div",Te,[e(d,{name:"img:logoMain.svg",size:"1.5rem"}),Ee])])]),_:1}),e(de,null,{default:t(()=>[a(u)&&a(u).isAdmin&&!a(A).qsysConnected?(o(),i(P,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>[e(d,{name:"warning",size:"sm"}),l(" \uC5C5\uBB34 \uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC811\uC18D\uC774 \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. ")]),_:1})):$("",!0),a(u)&&a(u).isAdmin&&q.value?(o(),i(P,{key:1,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>[e(d,{name:"warning",size:"sm"}),l(" \uB124\uD2B8\uC6CC\uD06C \uC804\uC1A1\uC7A5\uCE58 \uC0C1\uD0DC\uAC00 \uAC31\uC2E0 \uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. ")]),_:1})):$("",!0),a(u)&&a(u).isAdmin&&(s.value||c.value)?(o(),i(P,{key:2,"inline-actions":"",class:"text-white bg-orange"},{default:t(()=>[e(d,{name:"warning",size:"sm"}),l(" \uC2A4\uCF00\uC904\uB7EC\uAC00 \uBAA8\uB450 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694. ")]),_:1})):$("",!0),e(v),e(qe)]),_:1})]),_:1})}}};export{tt as default};