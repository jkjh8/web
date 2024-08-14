import{bo as K,bp as L,bq as $,br as W,c as X,o as Y,a0 as Z,bs as ee,bt as r,y as d,z as se,A as m,B as e,j as s,S as o,C as l,D as t,bu as te,L as i,M as y,J as _,K as p,bv as h,H as k,f as C,b2 as oe,b3 as ne}from"./index.5fc2b29f.js";import{Q as q}from"./QTooltip.c61ca314.js";import{Q as ae}from"./QPage.a256d1af.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";const n=f=>(oe("data-v-4e76fa90"),f=f(),ne(),f),le={class:"borderd setup"},ce={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},re={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},de=n(()=>e("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uAD00\uB9AC",-1)),ue={class:"q-py-sm q-px-md q-gutter-y-lg"},me={class:"row no-wrap justify-between items-center"},_e={class:"q-gutter-x-sm row no-wrap items-center"},pe=n(()=>e("span",{class:"font-name"},"\uC784\uC2DC\uD30C\uC77C\uC0AD\uC81C",-1)),fe={class:"font-sans self-end",style:{"font-size":"0.7rem"}},ve={class:"row no-wrap justify-between items-center"},we={class:"q-gutter-x-sm"},ge=n(()=>e("span",{class:"font-name"},"\uB124\uD2B8\uC6CC\uD06C\uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uAC31\uC2E0 \uC2DC\uAC04",-1)),ye={class:"q-gutter-x-xs font-sans"},he={class:"row no-wrap justify-between items-center"},ke={class:"q-gutter-x-sm"},Se=n(()=>e("span",{class:"font-name"},"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04",-1)),be={class:"q-gutter-x-xs font-sans"},xe={class:"row no-wrap justify-between items-center"},ze={class:"q-gutter-x-sm"},Ce=n(()=>e("span",{class:"font-name"},"TTS \uC120\uD0DD",-1)),qe={class:"q-gutter-x-xs"},Ve={class:"font-uppercase"},je={key:0,class:"row no-wrap justify-between items-center"},Be={class:"q-gutter-x-sm"},Te=n(()=>e("span",{class:"font-name"},"SAPI TTS \uAE30\uBCF8\uC74C\uC131",-1)),Ie={class:"q-gutter-x-xs"},Ne={class:"row no-wrap justify-between items-center"},Ae={class:"q-gutter-x-sm"},Qe=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC ",-1)),Fe={class:"row no-wrap justify-between items-center"},De={class:"q-gutter-x-sm row items-center"},Me=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791",-1)),Ue={class:"row no-wrap justify-between items-center"},Pe={class:"q-gutter-x-sm row items-center"},Ge=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9\uC804\uD658",-1)),Re={class:"row no-wrap justify-between items-center"},Oe={class:"q-gutter-x-sm row items-center"},Ee=n(()=>e("span",{class:"font-name"},"\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC",-1)),He={class:"row no-wrap justify-between items-center"},Je={class:"q-gutter-x-sm row items-center"},Ke=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5ID",-1)),Le={key:1,class:"row no-wrap justify-between items-center"},$e={class:"q-gutter-x-sm"},We=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C",-1)),Xe={key:2,class:"row no-wrap justify-between items-center"},Ye={class:"q-gutter-x-sm row no-wrap items-center"},Ze={class:"font-name"},es={key:3,class:"row no-wrap justify-between items-center"},ss={class:"q-gutter-x-sm row no-wrap items-center"},ts=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5 \uD30C\uC77C \uD65C\uC131\uD654 ",-1)),os={key:4,class:"row no-wrap justify-between items-center"},ns={class:"q-gutter-x-sm row no-wrap items-center"},as=n(()=>e("span",{class:"font-name"},"\uC9C0\uAE08 \uD30C\uC77C \uB3D9\uAE30\uD654",-1)),is={__name:"ServerSetupPage",setup(f){const{fnDeleteTempFiles:V,fnSetBarixInterval:j,fnSetRelayOnTime:B,fnSetTtsMode:T,fnSetSapiDefaultVoice:I,fnCleanScheduleFiles:N,fnSetSchedulerMode:A,fnSetSchedulerAuto:Q,fnSetServerMode:F,fnSetBackupId:D,fnSetBackupAddress:M,fnSetBackupActive:U,fnSyncBackupNow:P}=K(),{fnGetVoices:G,voices:S,fnGetDefaultVoice:R}=L(),{fnSyncBackup:ls,fnSyncBackupFileNow:O,fnUpdateBackupActivate:cs,fnBackupFile:E}=$(),{ttsMode:b,voice:x,scheduler:w,mode:u,backupAddress:H,backupActive:v,backupFile:g}=W(r),J=X(()=>x.value?S.value[S.value.findIndex(z=>z.id===x.value)].name:"");return Y(async()=>{await G(),await R(),await Z(),await ee(),console.log("gStatus",r)}),(z,a)=>(d(),se(ae,{class:"page"},{default:m(()=>[e("div",le,[e("div",ce,[e("div",re,[s(o,{name:"storage",color:"primary",size:"md"}),de])]),e("div",ue,[e("div",me,[e("div",_e,[s(o,{name:"info",size:"sm",color:"red-10"}),pe,e("span",fe,"\uCD1D\uC6A9\uB7C9: "+l(t(te).humanStorageSize(t(r).tempFolderSize)),1)]),s(i,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(V)},null,8,["onClick"])]),e("div",ve,[e("div",we,[s(o,{name:"timelapse",size:"sm",color:"green-10"}),ge]),e("div",ye,[e("span",null,l(t(r).interval)+"\uCD08",1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(j)},null,8,["onClick"])])]),e("div",he,[e("div",ke,[s(o,{name:"toggle_on",size:"sm",color:"green-10"}),Se]),e("div",be,[e("span",null,l(t(r).relayOnTime)+"\uCD08",1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(B)},null,8,["onClick"])])]),s(y,{color:"grey-4"}),e("div",xe,[e("div",ze,[s(o,{name:"mic",size:"sm",color:"green-8"}),Ce]),e("div",qe,[e("span",Ve,l(t(b)),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(T)},null,8,["onClick"])])]),t(b)==="sapi"?(d(),_("div",je,[e("div",Be,[s(o,{name:"mic",size:"sm",color:"green-8"}),Te]),e("div",Ie,[e("span",null,l(J.value),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(I)},null,8,["onClick"])])])):p("",!0),s(y,{color:"grey-3"}),e("div",Ne,[e("div",Ae,[s(o,{name:"info",size:"sm",color:"red-10"}),Qe]),s(i,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(N)},null,8,["onClick"])]),e("div",Fe,[e("div",De,[s(o,{name:"access_time",size:"sm",color:"green-9"}),Me]),e("div",null,[e("span",null,l(t(w).active.toUpperCase()),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(A)},null,8,["onClick"])])]),e("div",Ue,[e("div",Pe,[s(o,{name:"av_timer",size:"sm",color:"green-10"}),Ge]),e("div",null,[s(h,{modelValue:t(w).auto,"onUpdate:modelValue":[a[0]||(a[0]=c=>t(w).auto=c),t(Q)],color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])]),s(y,{color:"grey-3"}),e("div",Re,[e("div",Oe,[s(o,{name:"dns",size:"sm",color:"blue-grey-8"}),Ee]),e("div",null,[e("span",null,l(t(u)),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(F)},null,8,["onClick"])])]),e("div",He,[e("div",Je,[s(o,{name:"perm_identity",size:"sm",color:"blue-grey-8"}),Ke]),e("div",null,[e("span",null,l(t(r).backupId),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(D)},null,8,["onClick"])])]),t(u)==="Normal"?(d(),_("div",Le,[e("div",$e,[s(o,{name:"devices",size:"sm",color:"cyan-8"}),We]),e("div",null,[e("span",null,l(t(H)),1),s(i,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(M)},null,8,["onClick"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",Xe,[e("div",Ye,[s(o,{name:"backup",size:"sm",color:"green-10"}),e("span",Ze,[k("\uBC31\uC5C5 \uD65C\uC131\uD654 "),s(o,{class:"cursor-pointer",name:"refresh",size:"16px",color:"green-10",onClick:t(P)},{default:m(()=>[s(q,null,{default:m(()=>[k("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589")]),_:1})]),_:1},8,["onClick"])])]),e("div",null,[s(h,{dense:"",modelValue:t(v),"onUpdate:modelValue":[a[1]||(a[1]=c=>C(v)?v.value=c:null),a[2]||(a[2]=c=>t(U)(t(v)))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",es,[e("div",ss,[s(o,{name:"backup",size:"sm",color:"green-10"}),ts]),e("div",null,[s(h,{dense:"",modelValue:t(g),"onUpdate:modelValue":[a[3]||(a[3]=c=>C(g)?g.value=c:null),a[4]||(a[4]=c=>t(E)(c))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",os,[e("div",ns,[s(o,{name:"backup",size:"sm",color:"lime-10"}),as]),e("div",null,[s(o,{class:"cursor-pointer",name:"run_circle",color:"primary",size:"md",onClick:t(O)},{default:m(()=>[s(q,null,{default:m(()=>[k("\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC9C0\uAE08 \uD30C\uC77C\uC744 \uC804\uC1A1\uD569\uB2C8\uB2E4")]),_:1})]),_:1},8,["onClick"])])])):p("",!0)])])]),_:1}))}};var _s=ie(is,[["__scopeId","data-v-4e76fa90"]]);export{_s as default};
