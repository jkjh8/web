import{aP as N,v as V,r as q,o as x,y as g,I as w,B as e,j as o,P as m,C as $,D as p,bw as Y,K as v,aX as f,ay as b,z as B,A as c,N as F,O as S,az as U,R as E,J as j,G as Z,f as H,bx as L,F as X,c as ae,$ as z,b1 as se,b2 as ie,Z as K,L as J}from"./index.90cb454b.js";import{Q as le}from"./QPage.b0b29609.js";import{_ as A}from"./DialogConfirm.19c27437.js";import{u as re}from"./useScheduleFunc.43af7f62.js";import{_ as R}from"./DialogInput.8abf0a0d.js";import{Q as ce}from"./QTooltip.c87a9d41.js";import{Q as G}from"./QSelect.79c53454.js";import{u as de,b as D,a as ee,c as oe,d as I,e as Q}from"./useBackup.da668f63.js";import{u as te}from"./useTts.87a0f8d2.js";import{_ as ue}from"./plugin-vue_export-helper.21dcd24c.js";import"./locale.0682628a.js";import"./position-engine.0acdf255.js";import"./QMenu.2379dfed.js";const pe={class:"row no-wrap justify-between items-center"},me={class:"q-gutter-x-sm row no-wrap items-center"},_e=e("span",{class:"font-name"},"\uC784\uC2DC\uD30C\uC77C\uC0AD\uC81C",-1),fe={class:"font-sans self-end",style:{"font-size":"0.7rem"}},ve={__name:"tempFolder",setup(_){const{fnNotiInfo:r,fnNotiWarn:d,fnNotiError:i}=N(),a=V(),t=q(0),s=async()=>{const n=await f.get("/files/temp/size");t.value=n.data.size},u=()=>{a.dialog({component:A,componentProps:{icon:"warning",iconColor:"yellow-10",title:"\uC784\uC2DC\uD30C\uC77C \uD3F4\uB354 \uBE44\uC6B0\uAE30",caption:`\uC784\uC2DC\uD30C\uC77C \uD3F4\uB354 \uBE44\uC6B0\uAE30 \uCD1D\uC6A9\uB7C9 ${Y.humanStorageSize(t.value)}`}}).onOk(async()=>{try{a.loading.show(),await f.delete("/files/temp"),await s(),r("\uC784\uC2DC\uD30C\uC77C \uD3F4\uB354 \uBE44\uC6B0\uAE30 \uC644\uB8CC")}catch{i("\uC784\uC2DC\uD30C\uC77C \uD3F4\uB354 \uBE44\uC6B0\uAE30 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{a.loading.hide()}})};return x(()=>{s()}),(n,l)=>(g(),w("div",pe,[e("div",me,[o(m,{name:"info",size:"sm",color:"red-10"}),_e,e("span",fe,"\uCD1D\uC6A9\uB7C9: "+$(p(Y).humanStorageSize(t.value)),1)]),o(v,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:u})]))}},ge={class:"row no-wrap justify-between items-center"},ye={class:"q-gutter-x-sm"},he=e("span",{class:"font-name"},"\uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC ",-1),we={__name:"cleanScheduleFile",setup(_){const{fnCleanScheduleFile:r}=re(),d=V(),i=()=>{d.dialog({component:A,componentProps:{icon:"warning",iconColor:"yellow-10",title:"\uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC",caption:"Q-SYS \uB0B4\uBD80 \uC2A4\uCF00\uC904 \uD30C\uC77C \uC815\uB9AC \uD569\uB2C8\uB2E4."}}).onOk(async()=>{await r()})};return(a,t)=>(g(),w("div",ge,[e("div",ye,[o(m,{name:"info",size:"sm",color:"red-10"}),he]),o(v,{flat:"",round:"",icon:"delete_outline",color:"red-10",size:"md",onClick:i})]))}},ke={class:"row no-wrap justify-between items-center"},xe={class:"q-gutter-x-sm"},$e=e("span",{class:"font-name"},"Barix Pulling Interval",-1),be={class:"q-gutter-x-xs font-sans"},Se={__name:"barixInterval",setup(_){const{fnNotiInfo:r,fnNotiWarn:d,fnNotiError:i}=N(),a=V(),t=q(5),s=async()=>{const n=await f.get("/setup/barix/interval");n.data&&n.data.value&&(t.value=n.data.value)},u=async()=>{a.dialog({component:R,componentProps:{icon:"timer",iconColor:"primary",title:"Barix Interval \uC2DC\uAC04 \uC124\uC815",caption:"Barix Pulling Interval \uC2DC\uAC04\uC744 \uC785\uB825\uD558\uC138\uC694.",inputValue:t.value,inputType:"number"}}).onOk(async n=>{if(n<=0)return d("\uC798\uBABB\uB41C \uAC12\uC785\uB2C8\uB2E4.","0 \uC774\uC0C1\uC758 \uAC12\uC73C\uB85C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.");try{a.loading.show(),await f.put("/setup/barix/interval",{newInterval:n}),await s(),r("Barix Interval \uC2DC\uAC04 \uC124\uC815 \uC644\uB8CC")}catch{i("Barix Interval \uC2DC\uAC04 \uC124\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{a.loading.hide()}})};return x(async()=>{await s()}),(n,l)=>(g(),w("div",ke,[e("div",xe,[o(m,{name:"timelapse",size:"sm",color:"green-10"}),$e]),e("div",be,[e("span",null,$(t.value)+"\uCD08",1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:u})])]))}},qe={class:"row no-wrap justify-between items-center"},Ce={class:"q-gutter-x-sm"},Ie=e("span",{class:"font-name"},"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04",-1),ze={class:"q-gutter-x-xs font-sans"},Ve={__name:"relayOnTime",setup(_){const{fnNotiInfo:r,fnNotiWarn:d,fnNotiError:i}=N(),a=V(),t=q(5),s=async()=>{const n=await f.get("/setup/relayontime");n.data&&n.data.value&&(t.value=n.data.value)},u=()=>{a.dialog({component:R,componentProps:{icon:"timer",iconColor:"primary",title:"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04 \uC124\uC815",caption:"\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04\uC744 \uC785\uB825\uD558\uC138\uC694.",inputValue:t.value,inputType:"number"}}).onOk(async n=>{if(n<=0)return d("\uC798\uBABB\uB41C \uAC12\uC785\uB2C8\uB2E4.","0 \uC774\uC0C1\uC758 \uAC12\uC73C\uB85C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.");if(n>60)return d("\uC798\uBABB\uB41C \uAC12\uC785\uB2C8\uB2E4.","60 \uC774\uD558\uC758 \uAC12\uC73C\uB85C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.");try{a.loading.show(),await f.put("/setup/relayontime",{newTime:n}),await s(),r("\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04 \uC124\uC815 \uC644\uB8CC")}catch{i("\uBC29\uC1A1 \uAE30\uB3D9 \uC2DC\uAC04 \uC124\uC815 \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{a.loading.hide()}})};return x(()=>{s()}),(n,l)=>(g(),w("div",qe,[e("div",Ce,[o(m,{name:"toggle_on",size:"sm",color:"green-10"}),Ie]),e("div",ze,[e("span",null,$(t.value)+"\uCD08",1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:u})])]))}},Te={class:"row no-wrap items-center q-gutter-x-md"},Ne=e("div",null,[e("div",{class:"font-main"},"\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC \uC218\uC815"),e("div",{class:"caption"}," \uBA54\uC778\uC11C\uBC84 \uBAA8\uB4DC \uD639\uC740 \uBC31\uC5C5\uC11C\uBC84 \uBAA8\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694 ")],-1),De={class:"q-px-md"},Be={__name:"DialogServerMode",props:["mode"],emits:[...b.emits],setup(_,{emit:r}){const{dialogRef:d,onDialogOK:i,onDialogCancel:a}=b(),t=_,s=q("");return x(()=>{s.value=t.mode}),(u,n)=>(g(),B(E,{ref_key:"dialogRef",ref:d},{default:c(()=>[o(F,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:c(()=>[o(S,null,{default:c(()=>[e("div",Te,[o(m,{name:"dns",color:"primary",size:"sm"}),Ne])]),_:1}),o(S,null,{default:c(()=>[e("div",De,[o(G,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),filled:"",options:["Normal","Backup"]},null,8,["modelValue"])])]),_:1}),o(U,{align:"right"},{default:c(()=>[o(v,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:p(a)},null,8,["onClick"]),o(v,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:n[1]||(n[1]=l=>p(i)(s.value))})]),_:1})]),_:1})]),_:1},512))}},Oe={class:"row no-wrap justify-between items-center"},Pe={class:"q-gutter-x-sm row items-center"},Me=e("span",{class:"font-name"},"\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC",-1),Qe={class:"row no-wrap justify-between items-center"},je={class:"q-gutter-x-sm row items-center"},Ae=e("span",{class:"font-name"},"\uBC31\uC5C5ID",-1),Re={key:0,class:"row no-wrap justify-between items-center"},Fe={class:"q-gutter-x-sm"},Ue=e("span",{class:"font-name"},"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C",-1),Ee={key:1,class:"row no-wrap justify-between items-center"},Ge={class:"q-gutter-x-sm row no-wrap items-center"},We={class:"font-name"},Ke={key:2,class:"row no-wrap justify-between items-center"},Je={class:"q-gutter-x-sm row no-wrap items-center"},Le=e("span",{class:"font-name"},"\uBC31\uC5C5 \uD30C\uC77C \uD65C\uC131\uD654 ",-1),Xe={__name:"serverMode",setup(_){const{fnNotiInfo:r,fnNotiWarn:d,fnNotiError:i}=N(),{fnGetBackupSettings:a}=de(),t=V(),s=()=>{t.dialog({component:Be,componentProps:{mode:D.value}}).onOk(async y=>{try{t.loading.show(),await f.put("/setup/servermode",{mode:y}),await a(),r("\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC \uBCC0\uACBD \uC644\uB8CC")}catch{i("\uC11C\uBC84 \uB3D9\uC791\uBAA8\uB4DC \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{t.loading.hide()}})},u=()=>{t.dialog({component:R,componentProps:{title:"\uBC31\uC5C5ID \uBCC0\uACBD",caption:"\uBC31\uC5C5ID\uB97C \uC785\uB825\uD558\uC138\uC694.",label:"\uBC31\uC5C5ID",icon:"perm_identity",inputValue:ee.value,inputType:"text"}}).onOk(async y=>{try{t.loading.show(),await f.put("/setup/backupid",{backupId:y}),await a(),r("\uBC31\uC5C5ID \uC8FC\uC18C \uBCC0\uACBD \uC644\uB8CC")}catch{i("\uBC31\uC5C5ID \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{t.loading.hide()}})},n=()=>{t.dialog({component:R,componentProps:{title:"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C \uBCC0\uACBD",caption:"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.",label:"\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C",icon:"dns",inputValue:oe.value,inputType:"text"}}).onOk(async y=>{try{t.loading.show(),await f.put("/setup/backupaddress",{backupAddress:y}),await a(),r("\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C \uBCC0\uACBD \uC644\uB8CC")}catch{i("\uBC31\uC5C5\uC11C\uBC84 \uC8FC\uC18C \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{t.loading.hide()}})},l=async()=>{try{t.loading.show({message:"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694. \uBC31\uC5C5 \uD65C\uC131\uD654 \uC0C1\uD0DC\uB97C \uBCC0\uACBD \uC911\uC785\uB2C8\uB2E4."}),await f.put("/setup/backupactive",{active:I.value})}catch{i("\uBC31\uC5C5 \uD65C\uC131\uD654 \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."),I.value=!I.value}finally{t.loading.hide()}if(!I.value)return d("\uBC31\uC5C5 \uD65C\uC131\uD654 \uBCC0\uACBD \uC644\uB8CC","\uBC31\uC5C5\uC774 \uC911\uC9C0 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");t.dialog({component:A,componentProps:{title:"\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589",caption:"\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC790\uB8CC\uB97C \uC804\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{await O(),await P(),await M(),await h(),r("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC644\uB8CC","\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC790\uB8CC\uB97C \uC804\uC1A1\uD558\uC600\uC2B5\uB2C8\uB2E4.")})},k=async()=>{t.dialog({component:A,componentProps:{title:"\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589",caption:"\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC790\uB8CC\uB97C \uC804\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{await O(),await P(),await M(),await h(),r("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC644\uB8CC","\uBC31\uC5C5 \uC11C\uBC84\uB85C \uC790\uB8CC\uB97C \uC804\uC1A1\uD558\uC600\uC2B5\uB2C8\uB2E4.")})};async function O(){t.loading.show({message:"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694. \uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C \uAC31\uC2E0 \uC911\uC785\uB2C8\uB2E4."});try{await f.get("/backup/user")}catch{return i("\uBC31\uC5C5\uB3D9\uAE30\uD654 \uC624\uB958","\uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C \uAC31\uC2E0\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}finally{t.loading.hide()}}async function P(){t.loading.show({message:"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694. \uC804\uAD00\uBC29\uC1A1\uC8FC\uC7A5\uCE58\uB97C \uAC31\uC2E0 \uC911\uC785\uB2C8\uB2E4."});try{await f.get("/backup/qsys")}catch{return i("\uBC31\uC5C5\uB3D9\uAE30\uD654 \uC624\uB958","\uC804\uAD00\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uC815\uBCF4\uB97C \uAC31\uC2E0\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}finally{t.loading.hide()}}async function M(){t.loading.show({message:"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694. \uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uAC31\uC2E0 \uC911\uC785\uB2C8\uB2E4."});try{await f.get("/backup/barix")}catch{return i("\uBC31\uC5C5\uB3D9\uAE30\uD654 \uC624\uB958","\uB124\uD2B8\uC6CC\uD06C \uC624\uB514\uC624 \uC218\uC2E0\uAE30 \uC815\uBCF4\uB97C \uAC31\uC2E0\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}finally{t.loading.hide()}}async function h(){t.loading.show({message:"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694. \uC2A4\uCF00\uC904 \uC815\uBCF4\uB97C \uAC31\uC2E0 \uC911\uC785\uB2C8\uB2E4."});try{await f.get("/backup/schedule")}catch{return i("\uBC31\uC5C5\uB3D9\uAE30\uD654 \uC624\uB958","\uC2A4\uCF00\uC904 \uC815\uBCF4\uB97C \uAC31\uC2E0\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}finally{t.loading.hide()}}const T=async()=>{try{t.loading.show(),await f.put("/setup/backupfile",{newValue:Q.value}),await a()}catch(y){console.error(y)}finally{t.loading.hide()}};return x(()=>{a()}),(y,C)=>(g(),w(X,null,[e("div",Oe,[e("div",Pe,[o(m,{name:"dns",size:"sm",color:"blue-grey-8"}),Me]),e("div",null,[e("span",null,$(p(D)),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:s})])]),e("div",Qe,[e("div",je,[o(m,{name:"perm_identity",size:"sm",color:"blue-grey-8"}),Ae]),e("div",null,[e("span",null,$(p(ee)),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:u})])]),p(D)==="Normal"?(g(),w("div",Re,[e("div",Fe,[o(m,{name:"devices",size:"sm",color:"cyan-8"}),Ue]),e("div",null,[e("span",null,$(p(oe)),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:n})])])):j("",!0),p(D)==="Normal"?(g(),w("div",Ee,[e("div",Ge,[o(m,{name:"backup",size:"sm",color:"green-10"}),e("span",We,[Z("\uBC31\uC5C5 \uD65C\uC131\uD654 "),o(m,{class:"cursor-pointer",name:"refresh",size:"16px",color:"green-10",onClick:k},{default:c(()=>[o(ce,null,{default:c(()=>[Z("\uBC31\uC5C5 \uB3D9\uAE30\uD654 \uC2E4\uD589")]),_:1})]),_:1})])]),e("div",null,[o(L,{dense:"",modelValue:p(I),"onUpdate:modelValue":[C[0]||(C[0]=W=>H(I)?I.value=W:null),l]},null,8,["modelValue"])])])):j("",!0),p(D)==="Normal"?(g(),w("div",Ke,[e("div",Je,[o(m,{name:"backup",size:"sm",color:"green-10"}),Le]),e("div",null,[o(L,{dense:"",modelValue:p(Q),"onUpdate:modelValue":[C[1]||(C[1]=W=>H(Q)?Q.value=W:null),T]},null,8,["modelValue"])])])):j("",!0)],64))}},Ye={class:"row no-wrap items-center q-gutter-x-md"},Ze=e("div",null,[e("div",{class:"font-main"},"\uAE30\uBCF8\uC74C\uC131 \uC120\uD0DD"),e("div",{class:"caption"},"TTS\uC5D0 \uC0AC\uC6A9\uD560 \uAE30\uBCF8\uC74C\uC131\uC744 \uC120\uD0DD\uD558\uC138\uC694")],-1),He={class:"q-px-md"};[...b.emits];const eo={class:"row no-wrap items-center q-gutter-x-md"},oo=e("div",null,[e("div",{class:"font-main"},"TTS(Text to Speech) \uC120\uD0DD"),e("div",{class:"caption"},"\uC0AC\uC6A9\uD560 TTS\uB97C \uC120\uD0DD\uD558\uC138\uC694")],-1),to={class:"q-px-md"},no={__name:"DialogSelectTts",props:["mode"],emits:[...b.emits],setup(_,{emit:r}){const{dialogRef:d,onDialogOK:i,onDialogCancel:a}=b(),t=_,s=q("");return x(()=>{s.value=t.mode}),(u,n)=>(g(),B(E,{ref_key:"dialogRef",ref:d},{default:c(()=>[o(F,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:c(()=>[o(S,null,{default:c(()=>[e("div",eo,[o(m,{name:"dns",color:"primary",size:"sm"}),oo])]),_:1}),o(S,null,{default:c(()=>[e("div",to,[o(G,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),filled:"","emit-value":"","map-options":"",options:[{label:"SAPI",value:"sapi"},{label:"VOICEWARE",value:"voiceware"}]},null,8,["modelValue"])])]),_:1}),o(U,{align:"right"},{default:c(()=>[o(v,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:p(a)},null,8,["onClick"]),o(v,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:n[1]||(n[1]=l=>p(i)(s.value))})]),_:1})]),_:1})]),_:1},512))}};const ne=_=>(se("data-v-c01c27c2"),_=_(),ie(),_),ao={class:"row no-wrap justify-between items-center"},so={class:"q-gutter-x-sm"},io=ne(()=>e("span",{class:"font-name"},"TTS \uC120\uD0DD",-1)),lo={class:"q-gutter-x-xs"},ro={class:"font-uppercase"},co={key:0,class:"row no-wrap justify-between items-center"},uo={class:"q-gutter-x-sm"},po=ne(()=>e("span",{class:"font-name"},"SAPI TTS \uAE30\uBCF8\uC74C\uC131",-1)),mo={class:"q-gutter-x-xs"},_o={__name:"ttsMode",setup(_){const{fnGetDefaultVoice:r,fnSetDefaultVoice:d,fnGetVoices:i,voice:a,voices:t}=te(),{fnNotiInfo:s,fnNotiWarn:u,fnNotiError:n}=N(),l=V(),k=q(null),O=ae(()=>a.value?t.value[t.value.findIndex(h=>h.id===a.value)].name:""),P=()=>{l.dialog({component:no,componentProps:{mode:k.value}}).onOk(async h=>{try{const{data:T}=await f.put("/setup/ttsMode",{newMode:h});k.value=T.value,s("TTS \uBAA8\uB4DC\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",`\uBCC0\uACBD\uB41C \uBAA8\uB4DC\uB294 ${h.toUpperCase()} \uC785\uB2C8\uB2E4.`),z.value.ttsMode=h}catch{n("TTS \uBAA8\uB4DC \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}})},M=()=>{l.dialog({component:DialogSelectVoice}).onOk(async h=>{try{await d(h),await r(),s("SAPI \uAE30\uBCF8\uC74C\uC131\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch{n("SAPI \uAE30\uBCF8\uC74C\uC131 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}})};return x(async()=>{k.value=z.value.ttsMode,await i(),await r()}),(h,T)=>(g(),w(X,null,[e("div",ao,[e("div",so,[o(m,{name:"mic",size:"sm",color:"green-8"}),io]),e("div",lo,[e("span",ro,$(k.value),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:P})])]),k.value==="sapi"?(g(),w("div",co,[e("div",uo,[o(m,{name:"mic",size:"sm",color:"green-8"}),po]),e("div",mo,[e("span",null,$(O.value),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:M})])])):j("",!0)],64))}};var fo=ue(_o,[["__scopeId","data-v-c01c27c2"]]);const vo={class:"row no-wrap items-center q-gutter-x-md"},go=e("div",null,[e("div",{class:"font-main"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791"),e("div",{class:"caption"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791 \uBAA8\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694")],-1),yo={class:"q-px-md"},ho={__name:"DialogScheduleMode",props:["mode"],emits:[...b.emits],setup(_,{emit:r}){const{dialogRef:d,onDialogOK:i,onDialogCancel:a}=b(),t=_,s=q("");return x(()=>{s.value=t.mode}),(u,n)=>(g(),B(E,{ref_key:"dialogRef",ref:d},{default:c(()=>[o(F,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:c(()=>[o(S,null,{default:c(()=>[e("div",vo,[o(m,{name:"dns",color:"primary",size:"sm"}),go])]),_:1}),o(S,null,{default:c(()=>[e("div",yo,[o(G,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),filled:"","emit-value":"","map-options":"",options:[{label:"Main",value:"main"},{label:"Backup",value:"backup"}]},null,8,["modelValue"])])]),_:1}),o(U,{align:"right"},{default:c(()=>[o(v,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:p(a)},null,8,["onClick"]),o(v,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:n[1]||(n[1]=l=>p(i)(s.value))})]),_:1})]),_:1})]),_:1},512))}},wo={class:"row no-wrap justify-between items-center"},ko={class:"q-gutter-x-sm row items-center"},xo=e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791",-1),$o={class:"row no-wrap justify-between items-center"},bo={class:"q-gutter-x-sm row items-center"},So=e("span",{class:"font-name"},"\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9\uC804\uD658",-1),qo={__name:"scheduleMode",setup(_){const{fnNotiInfo:r,fnNotiWarn:d,fnNotiError:i}=N(),a=V(),t=()=>{a.dialog({component:ho,componentProps:{mode:z.value.scheduler.active}}).onOk(async u=>{try{a.loading.show(),await f.put("/setup/scheduleactive",{active:u}),await K(),r("\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791 \uBCC0\uACBD \uC644\uB8CC")}catch{i("\uC2A4\uCF00\uC904\uB7EC \uB3D9\uC791 \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{a.loading.hide()}})},s=async()=>{try{a.loading.show(),await f.put("/setup/scheduleauto",{auto:z.value.scheduler.auto}),await K(),r("\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9 \uB3D9\uC791 \uBCC0\uACBD \uC644\uB8CC")}catch(u){console.error(u),i("\uC2A4\uCF00\uC904\uB7EC \uC790\uB3D9 \uB3D9\uC791 \uBCC0\uACBD \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{a.loading.hide()}};return x(()=>{K()}),(u,n)=>(g(),w(X,null,[e("div",wo,[e("div",ko,[o(m,{name:"access_time",size:"sm",color:"green-9"}),xo]),e("div",null,[e("span",null,$(p(z).scheduler.active.toUpperCase()),1),o(v,{flat:"",round:"",icon:"edit",size:"sm",color:"primary",onClick:t})])]),e("div",$o,[e("div",bo,[o(m,{name:"av_timer",size:"sm",color:"green-10"}),So]),e("div",null,[o(L,{modelValue:p(z).scheduler.auto,"onUpdate:modelValue":[n[0]||(n[0]=l=>p(z).scheduler.auto=l),s],color:"primary"},null,8,["modelValue"])])])],64))}},Co={class:"borderd"},Io={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},zo={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},Vo=e("div",{class:"font-main"},"\uC2DC\uC2A4\uD15C \uAD00\uB9AC",-1),To={class:"q-py-sm q-px-md q-gutter-y-lg"},Go={__name:"ServerSetupPage",setup(_){return(r,d)=>(g(),B(le,{class:"page"},{default:c(()=>[e("div",Co,[e("div",Io,[e("div",zo,[o(m,{name:"storage",color:"primary",size:"md"}),Vo])]),e("div",To,[o(ve),o(Se),o(Ve),o(J,{color:"grey-4"}),o(fo),o(J,{color:"grey-3"}),o(we),o(qo),o(J,{color:"grey-3"}),o(Xe)])])]),_:1}))}};export{Go as default};
