import{h as Q,a3 as te,a_ as ne,y as o,z as h,A as s,B as t,j as e,S as c,C as v,ap as re,D as k,H as u,K as P,b1 as ie,aM as O,aL as A,r as S,o as U,bV as R,P as Z,R as b,b0 as ce,J as p,bW as de,F as V,a$ as D,bX as N,aU as F,L as j,U as se,bY as ae,O as ue,b2 as E,b3 as G,bZ as me,b_ as _e,b$ as W,c0 as pe,bp as fe,v as oe,k as ve,c as ge,aO as L,W as X,aP as H,aQ as J,X as T,Y as ee,I as ye,aR as he,c1 as we,bt as xe,aN as be}from"./index.5fc2b29f.js";import{Q as ke,a as qe}from"./QTree.dde97047.js";import{Q as Ce}from"./QPage.a256d1af.js";import{Q as B}from"./QTooltip.c61ca314.js";import{Q as K}from"./QBadge.380c4266.js";import{_ as Pe,a as $e,D as Se,b as ze}from"./DialogTtsVoiceware.6c1e741a.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import{u as Qe}from"./usePlayer.9239832c.js";import"./QSlideTransition.6f619f65.js";import"./QTable.5e05afdc.js";import"./QExpansionItem.4044a894.js";import"./QTr.412036d3.js";import"./useFiles.ef065664.js";import"./QCircularProgress.5c681fed.js";const Me=Q("div",{class:"q-space"});var je=te({name:"QSpace",setup(){return()=>Me}});const Ie={class:"row fit items-center q-gutter-x-sm"},Te={style:{"font-size":"1rem","font-weight":"500"}},Ve={class:"text-grey-8"},De={class:"row items-center q-gutter-x-sm text-grey-7"},Ne={__name:"statusTree",setup(r){const{fnBroadcastCancel:m}=ne(),_=g=>{let y=0;for(let l=0;l<g.length;l++)g[l].Active&&(y+=1);return y};return(g,y)=>(o(),h(ke,{class:"custom-q-tree",nodes:k(ie),"node-key":"_id","children-key":"ZoneStatus","no-node-label":"\uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},{"header-root":s(l=>[t("div",Ie,[e(c,{color:l.node.connected?"primary":"red-10",name:"location_on",size:"sm"},null,8,["color"]),t("div",Te,v(l.node.name),1),e(je),t("div",Ve,v(_(l.node.ZoneStatus))+"\uAC1C \uC9C0\uC5ED \uBC29\uC1A1\uC911 ",1),_(l.node.ZoneStatus)?(o(),h(c,{key:0,class:"cursor-pointer",name:"cancel",color:"red-10",onClick:re(a=>k(m)(l.node),["prevent","stop"])},{default:s(()=>[e(B,null,{default:s(()=>[u("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):P("",!0)])]),"default-header":s(l=>[t("div",De,[t("div",null,[u(v(l.node.name?l.node.name:"no name")+" ",1),l.node.Active?(o(),h(K,{key:0,color:"green"},{default:s(()=>[u(" ONAIR ")]),_:1})):P("",!0)])])]),_:1},8,["nodes"]))}};const le=r=>(E("data-v-725945a2"),r=r(),G(),r),Be={class:"q-dialog-plugin bg-trans broadcast-popup"},Le={key:0},Oe={class:"row justify-center q-pt-md text-grey"},Re={class:"fit column q-gutter-y-sm",style:{width:"50%"}},Ae={style:{"text-align":"right"}},Ue=le(()=>t("div",{class:"name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1)),Ze={style:{"text-align":"right"}},Fe=le(()=>t("div",{class:"name"},"\uBC29\uC1A1\uAD6C\uAC04",-1)),Ee={class:"fit row justify-end"},Ge={class:"fit row no-wrap justify-center items-center q-mb-md q-gutter-x-sm"},Ke={__name:"DialogPageLive",props:["live"],emits:[...O.emits],setup(r,{emit:m}){const _=r,{dialogRef:g,onDialogCancel:y,onDialogOK:l}=O(),{fnNotiError:a}=A(),f=S(!1),x=S(0);let w=null;const C=S(""),$=S(!1),M=async()=>{$.value=!0,R();try{C.value=await ae(_.live)}catch(i){if(i==="active"&&_.live.Priority!==1)return a("\uBC29\uC1A1 \uAD6C\uAC04\uC774 \uC911\uBCF5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4","\uC120\uD0DD\uB41C \uBC29\uC1A1 \uAD6C\uAC04\uC5D0 \uC774\uBBF8 \uBC29\uC1A1\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4."),y()}w=setInterval(()=>{x.value++,x.value>_.live.MaxPageTime&&d()},1e3),f.value=!0},d=async()=>{if(C.value)try{await ue.get("/broadcast/stop",{params:{idx:C.value}})}catch(i){console.error(i)}f.value=!1,clearInterval(w),w=null,x.value=0,setTimeout(()=>{l()},1e3)};return U(()=>{$.value=!1,f.value=!1,R()}),(i,n)=>(o(),h(se,{ref_key:"dialogRef",ref:g,persistent:""},{default:s(()=>[t("div",Be,[e(c,{class:"floatingIcon cursor-pointer",name:"cancel",color:"red-13",size:"md",onClick:k(y)},{default:s(()=>[e(B,null,{default:s(()=>[u("Close")]),_:1})]),_:1},8,["onClick"]),e(Z,{class:"transBG"},{default:s(()=>[e(b,null,{default:s(()=>[t("div",{class:ce(["q-pa-md row no-wrap text-grey-2",f.value?"justify-between":"justify-end"]),style:{height:"90%","min-height":"400px","font-family":"'NanumSquare'"}},[f.value?(o(),p("div",Le,[e(de,{color:"primary",size:"14rem",thickness:8}),t("div",Oe," \uBC29\uC1A1\uC911 "+v(x.value)+"\uCD08 \uACBD\uACFC ",1)])):P("",!0),t("div",Re,[t("div",Ae,[Ue,t("div",null,v(r.live.Mode),1)]),t("div",Ze,[Fe,t("div",Ee,[(o(!0),p(V,null,D(r.live.zones,(z,I)=>(o(),h(K,{key:I,class:"q-ml-xs"},{default:s(()=>[u(v(z),1)]),_:2},1024))),128))])]),t("div",null,[(o(!0),p(V,null,D(k(N),(z,I)=>(o(),p("div",{key:I,style:{"text-align":"right"}},v(k(N)[I]),1))),128))])])],2)]),_:1}),e(F,null,{default:s(()=>[t("div",Ge,[e(j,{style:{width:"10rem"},unelevated:"",color:"primary",onClick:M,disabled:$.value},{default:s(()=>[u("\uC2DC\uC791")]),_:1},8,["disabled"]),e(j,{style:{width:"10rem"},unelevated:"",color:"red-10",onClick:d},{default:s(()=>[u("\uC911\uC9C0")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var Ye=Y(Ke,[["__scopeId","data-v-725945a2"]]);const We=[Q("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var Xe=te({name:"QSpinnerClock",props:me,setup(r){const{cSize:m,classes:_}=_e(r);return()=>Q("svg",{class:_.value,width:m.value,height:m.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},We)}});const He=r=>(E("data-v-6eb7d2bb"),r=r(),G(),r),Je={class:"q-dialog-plugin bg-trans broadcast-popup"},et={class:"row no-wrap justify-start items-center q-gutter-x-sm"},tt=He(()=>t("div",{class:"font-main text-grey-2"},"\uBA54\uC2DC\uC9C0 \uBC29\uC1A1",-1)),st={key:0,class:"text-grey-5 row no-wrap items-center q-gutter-x-sm q-px-md"},at={style:{"font-size":"2rem"}},ot={class:"text-white description q-pa-md"},lt={class:"fit row no-wrap justify-center q-gutter-x-sm"},nt={__name:"DialogPageMessage",props:["live"],setup(r){const m=r,_=new AbortController,{fnNotiError:g}=A(),{dialogRef:y,onDialogCancel:l,onDialogOK:a}=O(),f=S(3),x=S(!1);let w=null;const C=S(!1),$=()=>{w&&clearInterval(w),_.abort(),l()},M=async()=>{try{f.value=0,clearInterval(w),C.value=!0,await ae(m.live),a()}catch(d){d==="active"&&m.live.Priority!==1&&g("\uBC29\uC1A1 \uAD6C\uAC04\uC774 \uC911\uBCF5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4","\uC120\uD0DD\uB41C \uBC29\uC1A1 \uAD6C\uAC04\uC5D0 \uC774\uBBF8 \uBC29\uC1A1\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4."),l()}};return U(async()=>{try{C.value=!1,R(),W({deviceId:"all",message:`\uD30C\uC77C \uC774\uB984: ${m.live.file.base}`}),await pe(m.live,_)}catch(d){console.error(d)}x.value=!0,W({deviceId:"all",message:"\uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."}),w=setInterval(async()=>{f.value>0?f.value-=1:(clearInterval(w),M())},1e3)}),(d,i)=>(o(),h(se,{ref_key:"dialogRef",ref:y,persistent:""},{default:s(()=>[t("div",Je,[e(Z,{class:"transBG"},{default:s(()=>[e(b,null,{default:s(()=>[t("div",et,[e(c,{name:"mic",color:"primary",size:"md"}),tt])]),_:1}),e(b,{style:{"min-height":"200px"}},{default:s(()=>[x.value?(o(),p("div",st,[e(Xe,{size:"md"}),t("span",at,v(f.value),1)])):P("",!0),t("div",ot,[(o(!0),p(V,null,D(k(N),(n,z)=>(o(),p("div",{key:z},v(k(N)[z]),1))),128))])]),_:1}),e(F,null,{default:s(()=>[t("div",lt,[x.value?(o(),h(j,{key:0,style:{width:"8rem"},color:"primary",disabled:C.value,onClick:i[0]||(i[0]=n=>M())},{default:s(()=>[u("\uC2DC\uC791")]),_:1},8,["disabled"])):P("",!0),e(j,{style:{width:"8rem"},color:"red-10",onClick:$},{default:s(()=>[u("\uCDE8\uC18C")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var rt=Y(nt,[["__scopeId","data-v-6eb7d2bb"]]);const q=r=>(E("data-v-6de7c389"),r=r(),G(),r),it={class:"q-pa-sm row justify-center"},ct={class:"row no-wrap items-center q-gutter-x-xs"},dt=q(()=>t("div",null,"\uBC29\uC1A1\uBAA8\uB4DC",-1)),ut={class:"row no-wrap items-center q-gutter-x-sm"},mt=q(()=>t("div",null,"\uC6B0\uC120\uC21C\uC704",-1)),_t={class:"row no-wrap justify-between items-center"},pt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},ft=q(()=>t("div",null,"\uCC60\uC784",-1)),vt={class:"row no-wrap justify-between items-center"},gt={class:"row no-wrap items-center q-gutter-x-xs"},yt=q(()=>t("div",null,"\uBC29\uC1A1\uAD6C\uAC04",-1)),ht=q(()=>t("span",null," \uC120\uD0DD\uB41C \uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1)),wt=[ht],xt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},bt=q(()=>t("div",null,"\uBC29\uC1A1\uC2DC\uAC04(\uCD08)",-1)),kt=q(()=>t("div",{class:"text-caption text-red",style:{"text-align":"right"}}," \uCD5C\uB300 \uBC29\uC1A1 \uC2DC\uAC04\uC740 4\uBD84(240\uCD08)\uC73C\uB85C \uC81C\uD55C \uB429\uB2C8\uB2E4. ",-1)),qt={class:"row no-wrap justify-between items-center"},Ct={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Pt=q(()=>t("div",null,"\uD30C\uC77C",-1)),$t={key:0,class:"bg-grey-3 q-pa-sm q-gutter-x-sm row no-wrap justify-between items-center",style:{"border-radius":"2px","min-height":"40px"}},St={key:1,class:"bg-grey-3 q-pa-sm row justify-start items-center",style:{"border-radius":"2px",height:"40px"}},zt=q(()=>t("span",null," \uC120\uD0DD\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1)),Qt=[zt],Mt={class:"row no-wrap justify-between items-center"},jt={class:"row no-wrap justify-between items-center q-gutter-x-xs"},It=q(()=>t("div",null,"TTS (Text to Speech)",-1)),Tt={class:"row no-wrap justify-between items-center"},Vt={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},Dt={class:"full-width q-px-sm q-mb-md"},Nt={__name:"pageLive",setup(r){const{fnPlayStart:m,fnPlayerStopClose:_}=Qe(),{fnNotiError:g}=A(),{fnDeleteFile:y}=fe(),l=oe(),a=ve({Mode:"message",Preamble:"",Priority:3,MaxPageTime:30,Station:1,Preamble:"",file:null,devices:[],zones:[],MessageDelete:!0}),f=()=>{l.dialog({component:Pe,componentProps:{selected:a.devices}}).onOk(d=>{a.devices=d,a.zones=we(d)})},x=()=>{l.dialog({component:$e,componentProps:{file:a.file}}).onOk(d=>{a.file=d[0]})},w=()=>{xe.ttsMode==="sapi"?l.dialog({component:Se,componentProps:{file:a.file}}).onOk(d=>{a.file=d}):l.dialog({component:ze,componentProps:{file:a.file}}).onOk(d=>{a.file=d}).onCancel(()=>{})},C=async()=>{await _(),await y(),a.file=null},$=ge({get(){return a.Preamble==="Chime ascending triple.wav"},set(){return a.Preamble?a.Preamble="":a.Preamble="Chime ascending triple.wav"}}),M=()=>{if(a.devices===null||a.devices.length===0)return g("\uBC29\uC1A1\uAD6C\uAC04\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");if(a.Mode!=="live"&&(a.file===null||Object.keys(a.file).length===0))return g("\uD30C\uC77C\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");a.Mode==="live"?l.dialog({component:Ye,componentProps:{live:a}}):l.dialog({component:rt,componentProps:{live:a}})};return(d,i)=>(o(),p("div",it,[e(Z,{flat:"",style:{width:"450px"}},{default:s(()=>[e(b,null,{default:s(()=>[t("div",ct,[e(c,{name:"podcasts",color:"primary",size:"sm"}),dt]),e(L,{modelValue:a.Mode,"onUpdate:modelValue":i[0]||(i[0]=n=>a.Mode=n),options:[{value:"tts",label:"TTS",icon:"record_voice_over"},{value:"live",label:"\uC2E4\uC2DC\uAC04 \uBC29\uC1A1",icon:"live_tv"},{value:"message",label:"\uBA54\uC2DC\uC9C0 \uC1A1\uCD9C",icon:"message"}],dense:"",filled:"","map-options":"","emit-value":""},{option:s(n=>[e(X,H(J(n.itemProps)),{default:s(()=>[e(T,{avatar:""},{default:s(()=>[e(c,{name:n.opt.icon},null,8,["name"])]),_:2},1024),e(T,null,{default:s(()=>[e(ee,null,{default:s(()=>[u(v(n.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1}),k(ye).em?(o(),h(b,{key:0},{default:s(()=>[t("div",ut,[e(c,{name:"info",color:"lime-10",size:"sm"}),mt]),e(L,{modelValue:a.Priority,"onUpdate:modelValue":i[1]||(i[1]=n=>a.Priority=n),dense:"",filled:"",options:[{value:1,label:"\uAE34\uAE09\uBC29\uC1A1",icon:"priority_high"},{value:3,label:"\uC77C\uBC18\uBC29\uC1A1",icon:"low_priority"}],"emit-value":"","map-options":""},{option:s(n=>[e(X,H(J(n.itemProps)),{default:s(()=>[e(T,{avatar:""},{default:s(()=>[e(c,{name:n.opt.icon},null,8,["name"])]),_:2},1024),e(T,null,{default:s(()=>[e(ee,null,{default:s(()=>[u(v(n.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})):P("",!0),e(b,null,{default:s(()=>[t("div",_t,[t("div",pt,[e(c,{name:"notifications_none",color:"green-10",size:"sm"}),ft]),e(he,{modelValue:$.value,"onUpdate:modelValue":i[2]||(i[2]=n=>$.value=n)},null,8,["modelValue"])])]),_:1}),e(b,{class:"q-gutter-y-sm"},{default:s(()=>[t("div",vt,[t("div",gt,[e(c,{name:"location_on",color:"primary",size:"sm"}),yt]),e(c,{class:"cursor-pointer q-mr-xs",name:"add_circle",color:"primary",size:"sm",onClick:f},{default:s(()=>[e(B,null,{default:s(()=>[u("\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD")]),_:1})]),_:1})]),a.zones&&a.zones.length?(o(),p("div",{key:0,class:"panel cursor-pointer q-py-sm q-px-sm q-gutter-x-sm row justify-start items-center",onClick:f},[(o(!0),p(V,null,D(a.zones,(n,z)=>(o(),h(K,{key:z},{default:s(()=>[u(v(n),1)]),_:2},1024))),128))])):(o(),p("div",{key:1,class:"panel cursor-pointer q-pa-sm row justify-start items-center",onClick:f},wt))]),_:1}),a.Mode==="live"?(o(),h(b,{key:1,class:"q-gutter-y-sm"},{default:s(()=>[t("div",xt,[e(c,{name:"timer",color:"pink-8",size:"sm"}),bt]),e(L,{modelValue:a.MaxPageTime,"onUpdate:modelValue":i[3]||(i[3]=n=>a.MaxPageTime=n),dense:"",filled:"",options:[30,60,90,120,150,180,210,240]},null,8,["modelValue"]),kt]),_:1})):P("",!0),a.Mode==="message"?(o(),h(b,{key:2,class:"q-gutter-y-sm"},{default:s(()=>[t("div",qt,[t("div",Ct,[e(c,{name:"save",color:"primary",size:"sm"}),Pt]),e(c,{class:"cursor-pointer",name:"add_circle",color:"primary",size:"sm",onClick:x})]),a.file?(o(),p("div",$t,[t("div",null,[e(c,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"xs",onClick:i[4]||(i[4]=n=>k(m)(a.file))}),u(" "+v(a.file.base),1)]),e(c,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:i[5]||(i[5]=n=>a.file=null)})])):(o(),p("div",St,Qt))]),_:1})):P("",!0),a.Mode==="tts"?(o(),h(b,{key:3,class:"q-gutter-y-sm"},{default:s(()=>[t("div",Mt,[t("div",jt,[e(c,{name:"volume_up",color:"primary",size:"sm"}),It]),e(c,{class:"cursor-pointer",color:"primary",name:"mic",size:"sm",onClick:w},{default:s(()=>[e(B,null,{default:s(()=>[u("\uC74C\uC131\uD569\uC131")]),_:1})]),_:1})]),t("div",Tt,[a.file?(o(),p("div",Vt,[t("div",null,[e(c,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:i[6]||(i[6]=n=>k(m)(a.file))}),u(" "+v(a.file.base),1)]),e(c,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:C})])):(o(),p("div",{key:1,class:"bg-grey-3 q-pa-sm row justify-between items-center cursor-pointer",style:{"border-radius":"2px",height:"40px",width:"100%"},onClick:w},[t("div",null,[e(c,{name:"warning"}),u(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")])]))])]),_:1})):P("",!0),e(F,null,{default:s(()=>[t("div",Dt,[e(j,{class:"full-width",color:"primary",label:"\uBC29\uC1A1\uC2DC\uC791",onClick:M})])]),_:1})]),_:1})]))}};var Bt=Y(Nt,[["__scopeId","data-v-6de7c389"]]);const Lt={class:"borderd"},Ot={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},Rt={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},At=t("div",{class:"font-main"},"\uC2E4\uC2DC\uAC04 \uBC29\uC1A1",-1),Ut={class:"q-pa-xs"},os={__name:"LivePage",setup(r){const m=oe(),_=S(40);return U(async()=>{m.loading.show(),await be(),m.loading.hide()}),(g,y)=>(o(),h(Ce,{class:"page"},{default:s(()=>[t("div",Lt,[t("div",Ot,[t("div",Rt,[e(c,{name:"mic",color:"primary",size:"md"}),At])]),t("div",null,[e(qe,{modelValue:_.value,"onUpdate:modelValue":y[0]||(y[0]=l=>_.value=l)},{before:s(()=>[t("div",Ut,[e(Ne)])]),after:s(()=>[e(Bt)]),_:1},8,["modelValue"])])])]),_:1}))}};export{os as default};
