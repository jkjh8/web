import{bn as L,bo as $,bp as W,bq as X,c as Y,o as Z,_ as ee,y as d,z as se,A as m,B as e,j as s,R as o,C as c,D as t,br as te,a5 as r,L as l,bs as w,M as h,J as _,K as p,H as k,f as C,b9 as oe,ba as ne}from"./index.b65d3c41.js";import{Q as q}from"./QTooltip.ec5e5ce7.js";import{Q as ae}from"./QPage.652bc915.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";const n=f=>(oe("data-v-871b5c2e"),f=f(),ne(),f),le={class:"borderd setup"},ce={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},re={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},de=n(()=>e("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uAD00\uB9AC",-1)),ue={class:"q-py-sm q-px-md q-gutter-y-lg"},me={class:"row no-wrap justify-between items-center"},_e={class:"q-gutter-x-sm row no-wrap items-center"},pe=n(()=>e("span",{class:"font-name"},"\uC784\uC2DC\uD30C\uC77C\uC0AD\uC81C",-1)),fe={class:"font-sans self-end",style:{"font-size":"0.7rem"}},ve={class:"row no-wrap justify-between items-center"},we={class:"q-gutter-x-sm"},ye=n(()=>e("span",{class:"font-name"},"\uB124\uD2B8\uC6CC\uD06C\uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uAC31\uC2E0 \uC2DC\uAC04",-1)),ge={class:"q-gutter-x-xs font-sans"},he={class:"row no-wrap justify-between items-center"},ke={class:"q-gutter-x-sm"},be=n(()=>e("span",{class:"font-name"},"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04",-1)),Se={class:"q-gutter-x-xs font-sans"},xe={class:"row no-wrap justify-between items-center"},ze={class:"q-gutter-x-sm"},Ce=n(()=>e("span",{class:"font-name"},"\uC544\uC774\uD53C \uBCF4\uC548",-1)),qe={class:"row no-wrap justify-between items-center"},Ve={class:"q-gutter-x-sm"},je=n(()=>e("span",{class:"font-name"},"TTS \uC120\uD0DD",-1)),Be={class:"q-gutter-x-xs"},Ie={class:"font-uppercase"},Te={key:0,class:"row no-wrap justify-between items-center"},Ne={class:"q-gutter-x-sm"},Ae=n(()=>e("span",{class:"font-name"},"SAPI TTS \uAE30\uBCF8\uC74C\uC131",-1)),Qe={class:"q-gutter-x-xs"},Ue={class:"row no-wrap justify-between items-center"},De={class:"q-gutter-x-sm"},Fe=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC ",-1)),Me={class:"row no-wrap justify-between items-center"},Pe={class:"q-gutter-x-sm row items-center"},Re=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791",-1)),Ge={class:"row no-wrap justify-between items-center"},Oe={class:"q-gutter-x-sm row items-center"},Ee=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9\uC804\uD658",-1)),He={class:"row no-wrap justify-between items-center"},Je={class:"q-gutter-x-sm row items-center"},Ke=n(()=>e("span",{class:"font-name"},"\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC",-1)),Le={class:"row no-wrap justify-between items-center"},$e={class:"q-gutter-x-sm row items-center"},We=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5ID",-1)),Xe={key:1,class:"row no-wrap justify-between items-center"},Ye={class:"q-gutter-x-sm"},Ze=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C",-1)),es={key:2,class:"row no-wrap justify-between items-center"},ss={class:"q-gutter-x-sm row no-wrap items-center"},ts={class:"font-name"},os={key:3,class:"row no-wrap justify-between items-center"},ns={class:"q-gutter-x-sm row no-wrap items-center"},as=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5 \uD30C\uC77C \uD65C\uC131\uD654 ",-1)),is={key:4,class:"row no-wrap justify-between items-center"},ls={class:"q-gutter-x-sm row no-wrap items-center"},cs=n(()=>e("span",{class:"font-name"},"\uC9C0\uAE08 \uD30C\uC77C \uB3D9\uAE30\uD654",-1)),rs={__name:"ServerSetupPage",setup(f){const{fnDeleteTempFiles:V,fnSetBarixInterval:j,fnSetRelayOnTime:B,fnSetBlockIp:I,fnSetTtsMode:T,fnSetSapiDefaultVoice:N,fnCleanScheduleFiles:A,fnSetSchedulerMode:Q,fnSetSchedulerAuto:U,fnSetServerMode:D,fnSetBackupId:F,fnSetBackupAddress:M,fnSetBackupActive:P,fnSyncBackupNow:R}=L(),{fnGetVoices:G,voices:b,fnGetDefaultVoice:O}=$(),{fnSyncBackup:ds,fnSyncBackupFileNow:E,fnUpdateBackupActivate:us,fnBackupFile:H}=W(),{ttsMode:S,voice:x,scheduler:y,mode:u,backupAddress:J,backupActive:v,backupFile:g}=X(r),K=Y(()=>x.value?b.value[b.value.findIndex(z=>z.id===x.value)].name:"");return Z(async()=>{await G(),await O(),await ee()}),(z,a)=>(d(),se(ae,{class:"page"},{default:m(()=>[e("div",le,[e("div",ce,[e("div",re,[s(o,{name:"storage",color:"primary",size:"md"}),de])]),e("div",ue,[e("div",me,[e("div",_e,[s(o,{name:"info",size:"sm",color:"red-10"}),pe,e("span",fe,"\uCD1D\uC6A9\uB7C9: "+c(t(te).humanStorageSize(t(r).tempFolderSize)),1)]),s(l,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(V)},null,8,["onClick"])]),e("div",ve,[e("div",we,[s(o,{name:"timelapse",size:"sm",color:"green-10"}),ye]),e("div",ge,[e("span",null,c(t(r).interval)+"\uCD08",1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(j)},null,8,["onClick"])])]),e("div",he,[e("div",ke,[s(o,{name:"toggle_on",size:"sm",color:"green-10"}),be]),e("div",Se,[e("span",null,c(t(r).relayOnTime)+"\uCD08",1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(B)},null,8,["onClick"])])]),e("div",xe,[e("div",ze,[s(o,{name:"security",size:"sm",color:"green-10"}),Ce]),s(w,{modelValue:t(r).blockIp,"onUpdate:modelValue":[a[0]||(a[0]=i=>t(r).blockIp=i),t(I)],color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),s(h,{color:"grey-4"}),e("div",qe,[e("div",Ve,[s(o,{name:"mic",size:"sm",color:"green-8"}),je]),e("div",Be,[e("span",Ie,c(t(S)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(T)},null,8,["onClick"])])]),t(S)==="sapi"?(d(),_("div",Te,[e("div",Ne,[s(o,{name:"mic",size:"sm",color:"green-8"}),Ae]),e("div",Qe,[e("span",null,c(K.value),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(N)},null,8,["onClick"])])])):p("",!0),s(h,{color:"grey-3"}),e("div",Ue,[e("div",De,[s(o,{name:"info",size:"sm",color:"red-10"}),Fe]),s(l,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(A)},null,8,["onClick"])]),e("div",Me,[e("div",Pe,[s(o,{name:"access_time",size:"sm",color:"green-9"}),Re]),e("div",null,[e("span",null,c(t(y).active.toUpperCase()),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(Q)},null,8,["onClick"])])]),e("div",Ge,[e("div",Oe,[s(o,{name:"av_timer",size:"sm",color:"green-10"}),Ee]),e("div",null,[s(w,{modelValue:t(y).auto,"onUpdate:modelValue":[a[1]||(a[1]=i=>t(y).auto=i),t(U)],color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])]),s(h,{color:"grey-3"}),e("div",He,[e("div",Je,[s(o,{name:"dns",size:"sm",color:"blue-grey-8"}),Ke]),e("div",null,[e("span",null,c(t(u)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(D)},null,8,["onClick"])])]),e("div",Le,[e("div",$e,[s(o,{name:"perm_identity",size:"sm",color:"blue-grey-8"}),We]),e("div",null,[e("span",null,c(t(r).backupId),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(F)},null,8,["onClick"])])]),t(u)==="Normal"?(d(),_("div",Xe,[e("div",Ye,[s(o,{name:"devices",size:"sm",color:"cyan-8"}),Ze]),e("div",null,[e("span",null,c(t(J)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(M)},null,8,["onClick"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",es,[e("div",ss,[s(o,{name:"backup",size:"sm",color:"green-10"}),e("span",ts,[k("\uBC31\uC5C5 \uD65C\uC131\uD654 "),s(o,{class:"cursor-pointer",name:"refresh",size:"16px",color:"green-10",onClick:t(R)},{default:m(()=>[s(q,null,{default:m(()=>[k("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589")]),_:1})]),_:1},8,["onClick"])])]),e("div",null,[s(w,{dense:"",modelValue:t(v),"onUpdate:modelValue":[a[2]||(a[2]=i=>C(v)?v.value=i:null),a[3]||(a[3]=i=>t(P)(t(v)))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",os,[e("div",ns,[s(o,{name:"backup",size:"sm",color:"green-10"}),as]),e("div",null,[s(w,{dense:"",modelValue:t(g),"onUpdate:modelValue":[a[4]||(a[4]=i=>C(g)?g.value=i:null),a[5]||(a[5]=i=>t(H)(i))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",is,[e("div",ls,[s(o,{name:"backup",size:"sm",color:"lime-10"}),cs]),e("div",null,[s(o,{class:"cursor-pointer",name:"run_circle",color:"primary",size:"md",onClick:t(E)},{default:m(()=>[s(q,null,{default:m(()=>[k("\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC9C0\uAE08 \uD30C\uC77C\uC744 \uC804\uC1A1\uD569\uB2C8\uB2E4")]),_:1})]),_:1},8,["onClick"])])])):p("",!0)])])]),_:1}))}};var vs=ie(rs,[["__scopeId","data-v-871b5c2e"]]);export{vs as default};
