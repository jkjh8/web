import{bn as $,bo as W,bp as X,bq as Y,c as Z,o as ee,a0 as se,y as d,z as te,A as m,B as e,j as s,R as o,C as c,D as t,br as oe,a7 as r,L as l,bs as w,M as g,J as _,K as p,f as k,H as S,b9 as ne,ba as ae}from"./index.68a60793.js";import{Q as q}from"./QTooltip.bf01a14b.js";import{Q as ie}from"./QPage.908f2efb.js";import{_ as le}from"./plugin-vue_export-helper.21dcd24c.js";const n=f=>(ne("data-v-6c6c865e"),f=f(),ae(),f),ce={class:"borderd setup"},re={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},de={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},ue=n(()=>e("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uAD00\uB9AC",-1)),me={class:"q-py-sm q-px-md q-gutter-y-lg"},_e={class:"row no-wrap justify-between items-center"},pe={class:"q-gutter-x-sm row no-wrap items-center"},fe=n(()=>e("span",{class:"font-name"},"\uC784\uC2DC\uD30C\uC77C\uC0AD\uC81C",-1)),ve={class:"font-sans self-end",style:{"font-size":"0.7rem"}},we={class:"row no-wrap justify-between items-center"},ye={class:"q-gutter-x-sm"},he=n(()=>e("span",{class:"font-name"},"\uB124\uD2B8\uC6CC\uD06C\uC624\uB514\uC624 \uC218\uC2E0\uC7A5\uCE58 \uAC31\uC2E0 \uC2DC\uAC04",-1)),ge={class:"q-gutter-x-xs font-sans"},ke={class:"row no-wrap justify-between items-center"},Se={class:"q-gutter-x-sm"},be=n(()=>e("span",{class:"font-name"},"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04",-1)),xe={class:"q-gutter-x-xs font-sans"},ze={class:"row no-wrap justify-between items-center"},Ce={class:"q-gutter-x-sm"},qe=n(()=>e("span",{class:"font-name"},"\uC544\uC774\uD53C \uBCF4\uC548",-1)),Ve={class:"row no-wrap justify-between items-center"},je={class:"q-gutter-x-sm"},Be=n(()=>e("span",{class:"font-name"},"TTS \uC120\uD0DD",-1)),Ie={class:"q-gutter-x-xs"},Te={class:"font-uppercase"},Ne={key:0,class:"row no-wrap justify-between items-center"},Ae={class:"q-gutter-x-sm"},Qe=n(()=>e("span",{class:"font-name"},"SAPI TTS \uAE30\uBCF8\uC74C\uC131",-1)),Ue={class:"q-gutter-x-xs"},De={class:"row no-wrap justify-between items-center"},Fe={class:"q-gutter-x-sm"},Me=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC ",-1)),Pe={class:"row no-wrap justify-between items-center"},Re={class:"q-gutter-x-sm row items-center"},Ge=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791",-1)),Oe={class:"row no-wrap justify-between items-center"},Ee={class:"q-gutter-x-sm row items-center"},He=n(()=>e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9\uC804\uD658",-1)),Je={class:"row no-wrap justify-between items-center"},Ke={class:"q-gutter-x-sm row items-center"},Le=n(()=>e("span",{class:"font-name"},"\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC",-1)),$e={class:"row no-wrap justify-between items-center"},We={class:"q-gutter-x-sm row items-center"},Xe=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5ID",-1)),Ye={key:1,class:"row no-wrap justify-between items-center"},Ze={class:"q-gutter-x-sm"},es=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C",-1)),ss={key:2,class:"row no-wrap justify-between items-center"},ts={class:"q-gutter-x-sm row no-wrap items-center"},os={class:"font-name"},ns={key:3,class:"row no-wrap justify-between items-center"},as={class:"q-gutter-x-sm row no-wrap items-center"},is=n(()=>e("span",{class:"font-name"},"\uBC31\uC5C5 \uD30C\uC77C \uD65C\uC131\uD654 ",-1)),ls={key:4,class:"row no-wrap justify-between items-center"},cs={class:"q-gutter-x-sm row no-wrap items-center"},rs=n(()=>e("span",{class:"font-name"},"\uC9C0\uAE08 \uD30C\uC77C \uB3D9\uAE30\uD654",-1)),ds={__name:"ServerSetupPage",setup(f){const{fnDeleteTempFiles:V,fnSetBarixInterval:j,fnSetRelayOnTime:B,fnSetBlockIp:I,fnSetTtsMode:T,fnSetSapiDefaultVoice:N,fnCleanScheduleFiles:A,fnSetSchedulerMode:Q,fnSetSchedulerAuto:U,fnSetServerMode:D,fnSetBackupId:F,fnSetBackupAddress:M,fnSetBackupActive:P,fnSyncBackupNow:R}=$(),{fnGetVoices:G,voices:b,fnGetDefaultVoice:O}=W(),{fnSyncBackup:us,fnSyncBackupFileNow:E,fnUpdateBackupActivate:ms,fnBackupFile:H}=X(),{ttsMode:x,voice:z,schedulerActive:J,schedulerAuto:y,mode:u,backupAddress:K,backupActive:v,backupFile:h}=Y(r),L=Z(()=>z.value?b.value[b.value.findIndex(C=>C.id===z.value)].name:"");return ee(async()=>{await G(),await O(),await se()}),(C,a)=>(d(),te(ie,{class:"page"},{default:m(()=>[e("div",ce,[e("div",re,[e("div",de,[s(o,{name:"storage",color:"primary",size:"md"}),ue])]),e("div",me,[e("div",_e,[e("div",pe,[s(o,{name:"info",size:"sm",color:"red-10"}),fe,e("span",ve,"\uCD1D\uC6A9\uB7C9: "+c(t(oe).humanStorageSize(t(r).tempFolderSize)),1)]),s(l,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(V)},null,8,["onClick"])]),e("div",we,[e("div",ye,[s(o,{name:"timelapse",size:"sm",color:"green-10"}),he]),e("div",ge,[e("span",null,c(t(r).interval)+"\uCD08",1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(j)},null,8,["onClick"])])]),e("div",ke,[e("div",Se,[s(o,{name:"toggle_on",size:"sm",color:"green-10"}),be]),e("div",xe,[e("span",null,c(t(r).relayOnTime)+"\uCD08",1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(B)},null,8,["onClick"])])]),e("div",ze,[e("div",Ce,[s(o,{name:"security",size:"sm",color:"green-10"}),qe]),s(w,{modelValue:t(r).blockIp,"onUpdate:modelValue":[a[0]||(a[0]=i=>t(r).blockIp=i),t(I)],color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),s(g,{color:"grey-4"}),e("div",Ve,[e("div",je,[s(o,{name:"mic",size:"sm",color:"green-8"}),Be]),e("div",Ie,[e("span",Te,c(t(x)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(T)},null,8,["onClick"])])]),t(x)==="sapi"?(d(),_("div",Ne,[e("div",Ae,[s(o,{name:"mic",size:"sm",color:"green-8"}),Qe]),e("div",Ue,[e("span",null,c(L.value),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(N)},null,8,["onClick"])])])):p("",!0),s(g,{color:"grey-3"}),e("div",De,[e("div",Fe,[s(o,{name:"info",size:"sm",color:"red-10"}),Me]),s(l,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:t(A)},null,8,["onClick"])]),e("div",Pe,[e("div",Re,[s(o,{name:"access_time",size:"sm",color:"green-9"}),Ge]),e("div",null,[e("span",null,c(t(J).toUpperCase()),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(Q)},null,8,["onClick"])])]),e("div",Oe,[e("div",Ee,[s(o,{name:"av_timer",size:"sm",color:"green-10"}),He]),e("div",null,[s(w,{modelValue:t(y),"onUpdate:modelValue":[a[1]||(a[1]=i=>k(y)?y.value=i:null),t(U)],color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])]),s(g,{color:"grey-3"}),e("div",Je,[e("div",Ke,[s(o,{name:"dns",size:"sm",color:"blue-grey-8"}),Le]),e("div",null,[e("span",null,c(t(u)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(D)},null,8,["onClick"])])]),e("div",$e,[e("div",We,[s(o,{name:"perm_identity",size:"sm",color:"blue-grey-8"}),Xe]),e("div",null,[e("span",null,c(t(r).backupId),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(F)},null,8,["onClick"])])]),t(u)==="Normal"?(d(),_("div",Ye,[e("div",Ze,[s(o,{name:"devices",size:"sm",color:"cyan-8"}),es]),e("div",null,[e("span",null,c(t(K)),1),s(l,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t(M)},null,8,["onClick"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",ss,[e("div",ts,[s(o,{name:"backup",size:"sm",color:"green-10"}),e("span",os,[S("\uBC31\uC5C5 \uD65C\uC131\uD654 "),s(o,{class:"cursor-pointer",name:"refresh",size:"16px",color:"green-10",onClick:t(R)},{default:m(()=>[s(q,null,{default:m(()=>[S("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589")]),_:1})]),_:1},8,["onClick"])])]),e("div",null,[s(w,{dense:"",modelValue:t(v),"onUpdate:modelValue":[a[2]||(a[2]=i=>k(v)?v.value=i:null),a[3]||(a[3]=i=>t(P)(t(v)))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",ns,[e("div",as,[s(o,{name:"backup",size:"sm",color:"green-10"}),is]),e("div",null,[s(w,{dense:"",modelValue:t(h),"onUpdate:modelValue":[a[4]||(a[4]=i=>k(h)?h.value=i:null),a[5]||(a[5]=i=>t(H)(i))]},null,8,["modelValue"])])])):p("",!0),t(u)==="Normal"?(d(),_("div",ls,[e("div",cs,[s(o,{name:"backup",size:"sm",color:"lime-10"}),rs]),e("div",null,[s(o,{class:"cursor-pointer",name:"run_circle",color:"primary",size:"md",onClick:t(E)},{default:m(()=>[s(q,null,{default:m(()=>[S("\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC9C0\uAE08 \uD30C\uC77C\uC744 \uC804\uC1A1\uD569\uB2C8\uB2E4")]),_:1})]),_:1},8,["onClick"])])])):p("",!0)])])]),_:1}))}};var ws=le(ds,[["__scopeId","data-v-6c6c865e"]]);export{ws as default};
