import{u as z,v as B,o as M,x as N,y as R,z as n,A as y,B as d,j as s,C as t,D as e,Q as u,E as c,G as l,p,H as k,I as v,J as w,K as h,L as F,M as j,N as A,O as D,f as H,P as O,R as E,S as G,U as K,V as T,W as U}from"./index.e0d07856.js";import{Q as x}from"./QMenu.34174ba2.js";import{Q as J,a as W,b as X}from"./QLayout.439adc4a.js";import{Q as Y}from"./QLinearProgress.eaa4ee31.js";import{Q as Z}from"./QSpace.50ccd669.js";import{C as m}from"./ClosePopup.28f68ecc.js";import{_ as oo}from"./dialogConfirm.97d9846a.js";import{u as eo}from"./usePlayer.2a62ca33.js";import{_ as to}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dialog-plugin-component.120c15cd.js";const i=_=>(T("data-v-56b3119c"),_=_(),U(),_),so={class:"full-height row no-wrap justify-between items-center"},no=i(()=>t("div",{class:"logo_text"},"\uD55C\uAD6D\uC218\uB825\uC6D0\uC790\uB825 \uC5C5\uBB34\uBC29\uC1A1",-1)),ro={class:"row no-wrap items-center q-gutter-x-sm"},io={key:0,class:"btn cursor-pointer"},ao=i(()=>t("span",null,"\uBC29\uC1A1",-1)),lo=i(()=>t("span",{class:"q-ml-xs down-icon"},"\u25BC",-1)),uo=i(()=>t("div",null,"\uB77C\uC774\uBE0C \uBC29\uC1A1",-1)),po=i(()=>t("div",null,"\uC608\uC57D \uBC29\uC1A1",-1)),mo=i(()=>t("div",null,"\uBC29\uC1A1 \uC124\uC815",-1)),co=i(()=>t("div",null,"\uD30C\uC77C \uAD00\uB9AC",-1)),vo=i(()=>t("div",null,"\uC774\uBCA4\uD2B8 \uB85C\uADF8",-1)),_o={key:1,class:"btn cursor-pointer"},fo=i(()=>t("span",null,"\uC7A5\uCE58\uAD00\uB9AC",-1)),yo=i(()=>t("span",{class:"q-ml-xs down-icon"},"\u25BC",-1)),wo=i(()=>t("div",null,"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58",-1)),xo=i(()=>t("div",null,"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30",-1)),go={key:2,class:"btn cursor-pointer"},ko=i(()=>t("span",null,"\uAD00\uB9AC\uC790",-1)),qo=i(()=>t("span",{class:"q-ml-xs down-icon"},"\u25BC",-1)),ho=i(()=>t("div",null,"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1)),Co=i(()=>t("div",null,"\uC11C\uBC84 \uC124\uC815",-1)),bo=i(()=>t("div",null,"\uC2DC\uC2A4\uD15C \uB85C\uADF8",-1)),Qo={style:{"font-size":"0.9rem","padding-top":"2px","font-family":"RotoSansKR","font-weight":"bold"}},$o={class:"q-pt-md q-gutter-y-sm"},So={class:"row justify-center q-gutter-x-sm"},Po={class:"q-mt-lg q-px-lg"},Lo={class:"row no-wrap justify-center"},Vo={__name:"MainLayout",setup(_){const{fnInitAudioPlayer:C,audioPlayer:f,modal:g,previewFile:b,playStatus:Q,playTime:$,fnFF:S,fnFR:P}=eo(),a=z(),L=B(),V=async()=>{L.dialog({component:oo,componentProps:{icon:"warning",iconColor:"yellow-8",title:"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{G.disconnect(),await K.get("/auth/signout"),c.value=null,a.push("/")}catch(q){console.error(q)}})};return M(()=>{C(),N()}),(q,o)=>{const I=R("router-view");return n(),y(J,{view:"lHh Lpr lFf"},{default:d(()=>[s(W,{class:"header","height-hint":"3rem"},{default:d(()=>[t("div",so,[t("div",{class:"row no-wrap items-center q-gutter-x-sm cursor-pointer",onClick:o[0]||(o[0]=r=>e(a).push("/"))},[s(u,{name:"home",size:"1.5rem",color:"primary"}),no]),t("div",ro,[t("div",{class:"btn cursor-pointer",onClick:o[1]||(o[1]=r=>e(a).push("/status"))},"\uBC29\uC1A1\uC0C1\uD0DC"),e(c)?(n(),l("div",io,[ao,lo,s(x,{style:{width:"130px"},offset:[20,10]},{default:d(()=>[p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[2]||(o[2]=r=>e(a).push("/broadcast/livepage"))},[s(u,{name:"mic",color:"primary"}),uo])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[3]||(o[3]=r=>e(a).push("/broadcast/schedulepage"))},[s(u,{name:"schedule",color:"primary"}),po])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[4]||(o[4]=r=>e(a).push("/broadcast/zonesetup"))},[s(u,{name:"edit",color:"primary"}),mo])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[5]||(o[5]=r=>e(a).push("/broadcast/files"))},[s(u,{name:"folder_open",color:"primary"}),co])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[6]||(o[6]=r=>e(a).push("/broadcast/eventlog"))},[s(u,{name:"list_alt",color:"primary"}),vo])),[[m]])]),_:1})])):k("",!0),e(c)?(n(),l("div",_o,[fo,yo,s(x,{style:{width:"150px"},offset:[20,10]},{default:d(()=>[p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[7]||(o[7]=r=>e(a).push("/devices/qsys"))},[s(u,{name:"img:qsys.svg",color:"primary"}),wo])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[8]||(o[8]=r=>e(a).push("/devices/barix"))},[s(u,{name:"img:barix.svg",color:"primary"}),xo])),[[m]])]),_:1})])):k("",!0),e(c)&&e(c).isAdmin?(n(),l("div",go,[ko,qo,s(x,{style:{width:"130px"},offset:[20,10]},{default:d(()=>[p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[9]||(o[9]=r=>e(a).push("/admin/users"))},[s(u,{name:"group",color:"primary"}),ho])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[10]||(o[10]=r=>e(a).push("/admin/serversetup"))},[s(u,{name:"dns",color:"primary"}),Co])),[[m]]),p((n(),l("div",{class:"row no-wrap items-center q-px-md q-gutter-x-md btn",onClick:o[11]||(o[11]=r=>e(a).push("/admin/systemlog"))},[s(u,{name:"list_alt",color:"primary"}),bo])),[[m]])]),_:1})])):k("",!0),t("div",null,[e(c)&&e(c).email?(n(),y(v,{key:0,unelevated:"",round:"",size:"xs",color:"primary"},{default:d(()=>[t("div",Qo,w(e(h)()),1),s(x,{style:{"border-radius":"8px",padding:"10px 20px"},offset:[10,20]},{default:d(()=>[t("div",$o,[t("div",So,[s(F,{color:"primary",textColor:"white",size:"64px"},{default:d(()=>[j(w(e(h)()),1)]),_:1})]),t("div",Po,w(e(c).email),1),s(A,{class:"q-my-md"}),t("div",Lo,[s(v,{rounded:"",unelevated:"","no-caps":"",color:"red-10",label:"\uB85C\uADF8\uC544\uC6C3",onClick:V})])])]),_:1})]),_:1})):(n(),l("div",{key:1,class:"btn-login",onClick:o[12]||(o[12]=r=>e(a).push("/auth/signin"))},"Login"))])])])]),_:1}),s(X,null,{default:d(()=>[s(I),t("audio",{ref_key:"audioPlayer",ref:f},null,512),s(D,{modelValue:e(g),"onUpdate:modelValue":o[16]||(o[16]=r=>H(g)?g.value=r:null),seamless:"",position:"bottom"},{default:d(()=>[s(O,{style:{width:"400px"}},{default:d(()=>[s(Y,{value:e($),color:"primary"},null,8,["value"]),s(E,{class:"row no-wrap items-center"},{default:d(()=>[t("div",null,[t("div",null,w(e(b).name),1)]),s(Z),s(v,{flat:"",round:"",icon:"fast_rewind",color:"grey",onClick:e(P)},null,8,["onClick"]),e(Q)?(n(),y(v,{key:0,flat:"",round:"",icon:"pause",color:"yellow-8",onClick:o[13]||(o[13]=r=>e(f).pause())})):(n(),y(v,{key:1,flat:"",round:"",icon:"play_arrow",color:"primary",onClick:o[14]||(o[14]=r=>e(f).play())})),s(v,{flat:"",round:"",icon:"fast_forward",color:"grey",onClick:e(S)},null,8,["onClick"]),p(s(v,{flat:"",round:"",icon:"close",onClick:o[15]||(o[15]=r=>e(f).pause())},null,512),[[m]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};var Ho=to(Vo,[["__scopeId","data-v-56b3119c"]]);export{Ho as default};