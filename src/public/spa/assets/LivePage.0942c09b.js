import{h as Q,a1 as se,y as r,z as h,A as a,B as t,j as e,P as c,C as y,aO as ie,D as k,G as p,J as P,b4 as le,r as $,bT as ce,aX as R,ay as A,aP as U,o as Z,bU as L,N as F,O as b,b0 as de,I as f,bV as ue,F as V,b3 as D,bW as N,az as E,K as M,R as ae,b1 as G,b2 as K,bX as me,bY as _e,bZ as Y,b_ as pe,v as oe,k as fe,c as ve,U as H,aT as J,aU as ee,V as j,W as te,H as ge,bs as ye,$ as he,aR as we}from"./index.0e464c24.js";import{Q as xe,a as be}from"./useFiles.d4e6b32b.js";import{Q as ke}from"./QPage.4d778b46.js";import{Q as B}from"./QTooltip.2c2c6b70.js";import{Q as W}from"./QBadge.8f7b2cd9.js";import{u as qe}from"./useQsysFunc.50523508.js";import{Q as O}from"./QSelect.daa0a13e.js";import{_ as Ce,f as Pe,a as $e,D as Se,b as ze}from"./useZones.e1a28ea2.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import{u as Qe}from"./usePlayer.bac4239f.js";import{u as Ie}from"./useTts.066e15f5.js";import"./position-engine.64b11373.js";import"./QSlideTransition.170c9af1.js";import"./DialogInput.5704972a.js";import"./DialogConfirm.4999b04c.js";import"./QMenu.3192de59.js";import"./QTable.f97aeb22.js";import"./QExpansionItem.2a99eabc.js";import"./QTr.28d54511.js";import"./QBanner.b61b2cae.js";import"./useRules.fe79ed52.js";const Me=Q("div",{class:"q-space"});var Te=se({name:"QSpace",setup(){return()=>Me}});const je={class:"row fit items-center q-gutter-x-sm"},Ve={style:{"font-size":"1rem","font-weight":"500"}},De={class:"text-grey-8"},Ne={class:"row items-center q-gutter-x-sm text-grey-7"},Be={__name:"statusTree",setup(n){const{fnBroadcastCancel:m}=qe(),d=u=>{let v=0;for(let o=0;o<u.length;o++)u[o].Active&&(v+=1);return v};return(u,v)=>(r(),h(xe,{class:"custom-q-tree",nodes:k(le),"node-key":"_id","children-key":"ZoneStatus","no-node-label":"\uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},{"header-root":a(o=>[t("div",je,[e(c,{color:o.node.connected?"primary":"red-10",name:"location_on",size:"sm"},null,8,["color"]),t("div",Ve,y(o.node.name),1),e(Te),t("div",De,y(d(o.node.ZoneStatus))+"\uAC1C \uC9C0\uC5ED \uBC29\uC1A1\uC911 ",1),d(o.node.ZoneStatus)?(r(),h(c,{key:0,class:"cursor-pointer",name:"cancel",color:"red-10",onClick:ie(s=>k(m)(o.node),["prevent","stop"])},{default:a(()=>[e(B,null,{default:a(()=>[p("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):P("",!0)])]),"default-header":a(o=>[t("div",Ne,[t("div",null,[p(y(o.node.name?o.node.name:"no name")+" ",1),o.node.Active?(r(),h(W,{key:0,color:"green"},{default:a(()=>[p(" ONAIR ")]),_:1})):P("",!0)])])]),_:1},8,["nodes"]))}};$("");const re=n=>new Promise(async(m,d)=>{try{const u=await ce(n);if((await R.put("/broadcast/active",{devices:u.map(s=>({deviceId:s.deviceId,Zones:s.params.Zones}))})).data.active.length)return d("active");let{data:o}=await R.put("/broadcast/live",{...n,devices:u,zones:n.zones});m(o.idx)}catch(u){d(u)}});const ne=n=>(G("data-v-091e53ec"),n=n(),K(),n),Oe={class:"q-dialog-plugin bg-trans broadcast-popup"},Re={key:0},Ae={class:"row justify-center q-pt-md text-grey"},Le={class:"fit column q-gutter-y-sm",style:{width:"50%"}},Ue={style:{"text-align":"right"}},Ze=ne(()=>t("div",{class:"name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1)),Fe={style:{"text-align":"right"}},Ee=ne(()=>t("div",{class:"name"},"\uBC29\uC1A1\uAD6C\uAC04",-1)),Ge={class:"fit row justify-end"},Ke={class:"fit row no-wrap justify-center items-center q-mb-md q-gutter-x-sm"},We={__name:"DialogPageLive",props:["live"],emits:[...A.emits],setup(n,{emit:m}){const d=n,{dialogRef:u,onDialogCancel:v,onDialogOK:o}=A(),{fnNotiError:s}=U(),g=$(!1),x=$(0);let w=null;const C=$(""),S=$(!1),I=async()=>{S.value=!0,L();try{C.value=await re(d.live)}catch(l){if(l==="active")return s("\uBC29\uC1A1 \uAD6C\uAC04\uC774 \uC911\uBCF5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4","\uC120\uD0DD\uB41C \uBC29\uC1A1 \uAD6C\uAC04\uC5D0 \uC774\uBBF8 \uBC29\uC1A1\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4."),v()}w=setInterval(()=>{x.value++,x.value>d.live.MaxPageTime&&_()},1e3),g.value=!0},_=async()=>{if(C.value)try{await R.get("/broadcast/stop",{params:{idx:C.value}})}catch(l){console.error(l)}g.value=!1,clearInterval(w),w=null,x.value=0,setTimeout(()=>{o()},1e3)};return Z(()=>{S.value=!1,g.value=!1,L()}),(l,i)=>(r(),h(ae,{ref_key:"dialogRef",ref:u,persistent:""},{default:a(()=>[t("div",Oe,[e(c,{class:"floatingIcon cursor-pointer",name:"cancel",color:"red-13",size:"md",onClick:k(v)},{default:a(()=>[e(B,null,{default:a(()=>[p("Close")]),_:1})]),_:1},8,["onClick"]),e(F,{class:"transBG"},{default:a(()=>[e(b,null,{default:a(()=>[t("div",{class:de(["q-pa-md row no-wrap text-grey-2",g.value?"justify-between":"justify-end"]),style:{height:"90%","min-height":"400px","font-family":"'NanumSquare'"}},[g.value?(r(),f("div",Re,[e(ue,{color:"primary",size:"14rem",thickness:8}),t("div",Ae," \uBC29\uC1A1\uC911 "+y(x.value)+"\uCD08 \uACBD\uACFC ",1)])):P("",!0),t("div",Le,[t("div",Ue,[Ze,t("div",null,y(n.live.Mode),1)]),t("div",Fe,[Ee,t("div",Ge,[(r(!0),f(V,null,D(n.live.zones,(z,T)=>(r(),h(W,{key:T,class:"q-ml-xs"},{default:a(()=>[p(y(z),1)]),_:2},1024))),128))])]),t("div",null,[(r(!0),f(V,null,D(k(N),(z,T)=>(r(),f("div",{key:T,style:{"text-align":"right"}},y(k(N)[T]),1))),128))])])],2)]),_:1}),e(E,null,{default:a(()=>[t("div",Ke,[e(M,{style:{width:"10rem"},unelevated:"",color:"primary",onClick:I,disabled:S.value},{default:a(()=>[p("\uC2DC\uC791")]),_:1},8,["disabled"]),e(M,{style:{width:"10rem"},unelevated:"",color:"red-10",onClick:_},{default:a(()=>[p("\uC911\uC9C0")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var Xe=X(We,[["__scopeId","data-v-091e53ec"]]);const Ye=[Q("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var He=se({name:"QSpinnerClock",props:me,setup(n){const{cSize:m,classes:d}=_e(n);return()=>Q("svg",{class:d.value,width:m.value,height:m.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Ye)}});const Je=n=>(G("data-v-217e3df0"),n=n(),K(),n),et={class:"q-dialog-plugin bg-trans broadcast-popup"},tt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},st=Je(()=>t("div",{class:"font-main text-grey-2"},"\uBA54\uC2DC\uC9C0 \uBC29\uC1A1",-1)),at={key:0,class:"text-grey-5 row no-wrap items-center q-gutter-x-sm q-px-md"},ot={style:{"font-size":"2rem"}},rt={class:"text-white description q-pa-md"},nt={class:"fit row no-wrap justify-center q-gutter-x-sm"},it={__name:"DialogPageMessage",props:["live"],setup(n){const m=n,d=new AbortController,{fnNotiError:u}=U(),{dialogRef:v,onDialogCancel:o,onDialogOK:s}=A(),g=$(3),x=$(!1);let w=null;const C=$(!1),S=()=>{w&&clearInterval(w),d.abort(),o()},I=async()=>{try{g.value=0,clearInterval(w),C.value=!0,await re(m.live),s()}catch(_){_==="active"&&u("\uBC29\uC1A1 \uAD6C\uAC04\uC774 \uC911\uBCF5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4","\uC120\uD0DD\uB41C \uBC29\uC1A1 \uAD6C\uAC04\uC5D0 \uC774\uBBF8 \uBC29\uC1A1\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4."),o()}};return Z(async()=>{try{C.value=!1,L(),Y({deviceId:"all",message:`\uD30C\uC77C \uC774\uB984: ${m.live.file.base}`}),await pe(m.live,d)}catch(_){console.error(_)}x.value=!0,Y({deviceId:"all",message:"\uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."}),w=setInterval(async()=>{g.value>0?g.value-=1:(clearInterval(w),I())},1e3)}),(_,l)=>(r(),h(ae,{ref_key:"dialogRef",ref:v,persistent:""},{default:a(()=>[t("div",et,[e(F,{class:"transBG"},{default:a(()=>[e(b,null,{default:a(()=>[t("div",tt,[e(c,{name:"mic",color:"primary",size:"md"}),st])]),_:1}),e(b,{style:{"min-height":"200px"}},{default:a(()=>[x.value?(r(),f("div",at,[e(He,{size:"md"}),t("span",ot,y(g.value),1)])):P("",!0),t("div",rt,[(r(!0),f(V,null,D(k(N),(i,z)=>(r(),f("div",{key:z},y(k(N)[z]),1))),128))])]),_:1}),e(E,null,{default:a(()=>[t("div",nt,[x.value?(r(),h(M,{key:0,style:{width:"8rem"},color:"primary",disabled:C.value,onClick:l[0]||(l[0]=i=>I())},{default:a(()=>[p("\uC2DC\uC791")]),_:1},8,["disabled"])):P("",!0),e(M,{style:{width:"8rem"},color:"red-10",onClick:S},{default:a(()=>[p("\uCDE8\uC18C")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var lt=X(it,[["__scopeId","data-v-217e3df0"]]);const q=n=>(G("data-v-236b93f2"),n=n(),K(),n),ct={class:"q-pa-sm row justify-center"},dt={class:"row no-wrap items-center q-gutter-x-xs"},ut=q(()=>t("div",null,"\uBC29\uC1A1\uBAA8\uB4DC",-1)),mt={class:"row no-wrap items-center q-gutter-x-sm"},_t=q(()=>t("div",null,"\uC6B0\uC120\uC21C\uC704",-1)),pt={class:"row no-wrap justify-between items-center"},ft={class:"row no-wrap justify-start items-center q-gutter-x-sm"},vt=q(()=>t("div",null,"\uCC60\uC784",-1)),gt={class:"row no-wrap justify-between items-center"},yt={class:"row no-wrap items-center q-gutter-x-xs"},ht=q(()=>t("div",null,"\uBC29\uC1A1\uAD6C\uAC04",-1)),wt=q(()=>t("span",null," \uC120\uD0DD\uB41C \uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1)),xt=[wt],bt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},kt=q(()=>t("div",null,"\uBC29\uC1A1\uC2DC\uAC04(\uCD08)",-1)),qt=q(()=>t("div",{class:"text-caption text-red",style:{"text-align":"right"}}," \uCD5C\uB300 \uBC29\uC1A1 \uC2DC\uAC04\uC740 4\uBD84(240\uCD08)\uC73C\uB85C \uC81C\uD55C \uB429\uB2C8\uB2E4. ",-1)),Ct={class:"row no-wrap justify-between items-center"},Pt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},$t=q(()=>t("div",null,"\uD30C\uC77C",-1)),St={key:0,class:"bg-grey-2 q-pa-sm q-gutter-x-sm row no-wrap justify-between items-center",style:{"border-radius":"2px","min-height":"40px"}},zt={key:1,class:"bg-grey-2 q-pa-sm row justify-start items-center",style:{"border-radius":"2px",height:"40px"}},Qt=q(()=>t("span",null," \uC120\uD0DD\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1)),It=[Qt],Mt={class:"row no-wrap justify-between items-center"},Tt={class:"row no-wrap justify-between items-center q-gutter-x-xs"},jt=q(()=>t("div",null,"TTS (Text to Speech)",-1)),Vt={class:"row no-wrap justify-between items-center"},Dt={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},Nt={class:"full-width q-px-sm q-mb-md"},Bt={__name:"pageLive",setup(n){const{fnPlayStart:m,fnPlayerStopClose:d}=Qe(),{fnNotiError:u}=U(),{fnDeleteFile:v}=Ie(),o=oe(),s=fe({Mode:"message",Preamble:"",Priority:3,MaxPageTime:30,Station:1,Preamble:"",file:null,devices:[],zones:[]}),g=()=>{o.dialog({component:Ce,componentProps:{selected:s.devices}}).onOk(_=>{s.devices=_,s.zones=Pe(_)})},x=()=>{o.dialog({component:$e,componentProps:{file:s.file}}).onOk(_=>{s.file=_[0]})},w=()=>{he.value.ttsMode==="sapi"?o.dialog({component:Se,componentProps:{file:s.file}}).onOk(_=>{s.file=_}):o.dialog({component:ze,componentProps:{file:s.file}}).onOk(_=>{s.file=_}).onCancel(()=>{})},C=async()=>{await d(),await v(),s.file=null},S=ve({get(){return s.Preamble==="Chime ascending triple.wav"},set(){return s.Preamble?s.Preamble="":s.Preamble="Chime ascending triple.wav"}}),I=()=>{if(s.devices===null||s.devices.length===0)return u("\uBC29\uC1A1\uAD6C\uAC04\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");if(s.Mode!=="live"&&(s.file===null||Object.keys(s.file).length===0))return u("\uD30C\uC77C\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");s.Mode==="live"?o.dialog({component:Xe,componentProps:{live:s}}):o.dialog({component:lt,componentProps:{live:s}})};return(_,l)=>(r(),f("div",ct,[e(F,{flat:"",style:{width:"450px"}},{default:a(()=>[e(b,null,{default:a(()=>[t("div",dt,[e(c,{name:"podcasts",color:"primary",size:"sm"}),ut]),e(O,{modelValue:s.Mode,"onUpdate:modelValue":l[0]||(l[0]=i=>s.Mode=i),options:[{value:"tts",label:"TTS",icon:"record_voice_over"},{value:"live",label:"\uC2E4\uC2DC\uAC04 \uBC29\uC1A1",icon:"live_tv"},{value:"message",label:"\uBA54\uC2DC\uC9C0 \uC1A1\uCD9C",icon:"message"}],dense:"",filled:"","map-options":"","emit-value":""},{option:a(i=>[e(H,J(ee(i.itemProps)),{default:a(()=>[e(j,{avatar:""},{default:a(()=>[e(c,{name:i.opt.icon},null,8,["name"])]),_:2},1024),e(j,null,{default:a(()=>[e(te,null,{default:a(()=>[p(y(i.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1}),k(ge).em?(r(),h(b,{key:0},{default:a(()=>[t("div",mt,[e(c,{name:"info",color:"lime-10",size:"sm"}),_t]),e(O,{modelValue:s.Priority,"onUpdate:modelValue":l[1]||(l[1]=i=>s.Priority=i),dense:"",filled:"",options:[{value:1,label:"\uAE34\uAE09\uBC29\uC1A1",icon:"priority_high"},{value:3,label:"\uC77C\uBC18\uBC29\uC1A1",icon:"low_priority"}],"emit-value":"","map-options":""},{option:a(i=>[e(H,J(ee(i.itemProps)),{default:a(()=>[e(j,{avatar:""},{default:a(()=>[e(c,{name:i.opt.icon},null,8,["name"])]),_:2},1024),e(j,null,{default:a(()=>[e(te,null,{default:a(()=>[p(y(i.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})):P("",!0),e(b,null,{default:a(()=>[t("div",pt,[t("div",ft,[e(c,{name:"notifications_none",color:"green-10",size:"sm"}),vt]),e(ye,{modelValue:S.value,"onUpdate:modelValue":l[2]||(l[2]=i=>S.value=i)},null,8,["modelValue"])])]),_:1}),e(b,{class:"q-gutter-y-sm"},{default:a(()=>[t("div",gt,[t("div",yt,[e(c,{name:"location_on",color:"primary",size:"sm"}),ht]),e(c,{class:"cursor-pointer q-mr-xs",name:"add_circle",color:"primary",size:"sm",onClick:g},{default:a(()=>[e(B,null,{default:a(()=>[p("\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD")]),_:1})]),_:1})]),s.zones&&s.zones.length?(r(),f("div",{key:0,class:"panel cursor-pointer q-py-sm q-px-sm q-gutter-x-sm row justify-start items-center",onClick:g},[(r(!0),f(V,null,D(s.zones,(i,z)=>(r(),h(W,{key:z},{default:a(()=>[p(y(i),1)]),_:2},1024))),128))])):(r(),f("div",{key:1,class:"panel cursor-pointer q-pa-sm row justify-start items-center",onClick:g},xt))]),_:1}),s.Mode==="live"?(r(),h(b,{key:1,class:"q-gutter-y-sm"},{default:a(()=>[t("div",bt,[e(c,{name:"timer",color:"pink-8",size:"sm"}),kt]),e(O,{modelValue:s.MaxPageTime,"onUpdate:modelValue":l[3]||(l[3]=i=>s.MaxPageTime=i),dense:"",filled:"",options:[30,60,90,120,150,180,210,240]},null,8,["modelValue"]),qt]),_:1})):P("",!0),s.Mode==="message"?(r(),h(b,{key:2,class:"q-gutter-y-sm"},{default:a(()=>[t("div",Ct,[t("div",Pt,[e(c,{name:"save",color:"primary",size:"sm"}),$t]),e(c,{class:"cursor-pointer",name:"add_circle",color:"primary",size:"sm",onClick:x})]),s.file?(r(),f("div",St,[t("div",null,[e(c,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"xs",onClick:l[4]||(l[4]=i=>k(m)(s.file))}),p(" "+y(s.file.base),1)]),e(c,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:l[5]||(l[5]=i=>s.file=null)})])):(r(),f("div",zt,It))]),_:1})):P("",!0),s.Mode==="tts"?(r(),h(b,{key:3,class:"q-gutter-y-sm"},{default:a(()=>[t("div",Mt,[t("div",Tt,[e(c,{name:"volume_up",color:"primary",size:"sm"}),jt]),e(c,{class:"cursor-pointer",color:"primary",name:"mic",size:"sm",onClick:w},{default:a(()=>[e(B,null,{default:a(()=>[p("\uC74C\uC131\uD569\uC131")]),_:1})]),_:1})]),t("div",Vt,[s.file?(r(),f("div",Dt,[t("div",null,[e(c,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:l[6]||(l[6]=i=>k(m)(s.file))}),p(" "+y(s.file.base),1)]),e(c,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:C})])):(r(),f("div",{key:1,class:"bg-grey-2 q-pa-sm row justify-between items-center cursor-pointer",style:{"border-radius":"2px",height:"40px",width:"100%"},onClick:w},[t("div",null,[e(c,{name:"warning"}),p(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")])]))])]),_:1})):P("",!0),e(E,null,{default:a(()=>[t("div",Nt,[e(M,{class:"full-width",color:"primary",label:"\uBC29\uC1A1\uC2DC\uC791",onClick:I})])]),_:1})]),_:1})]))}};var Ot=X(Bt,[["__scopeId","data-v-236b93f2"]]);const Rt={class:"borderd"},At={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},Lt={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},Ut=t("div",{class:"font-main"},"\uC2E4\uC2DC\uAC04 \uBC29\uC1A1",-1),Zt={class:"q-pa-xs"},ms={__name:"LivePage",setup(n){const m=oe(),d=$(40);return Z(async()=>{m.loading.show(),await we(),m.loading.hide()}),(u,v)=>(r(),h(ke,{class:"page"},{default:a(()=>[t("div",Rt,[t("div",At,[t("div",Lt,[e(c,{name:"mic",color:"primary",size:"md"}),Ut])]),t("div",null,[e(be,{modelValue:d.value,"onUpdate:modelValue":v[0]||(v[0]=o=>d.value=o)},{before:a(()=>[t("div",Zt,[e(Be)])]),after:a(()=>[e(Ot)]),_:1},8,["modelValue"])])])]),_:1}))}};export{ms as default};