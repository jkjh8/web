import{v as Q,aR as z,y as l,z as w,A as i,B as t,j as e,R as v,C as x,aY as se,D as d,G as h,J as k,aZ as oe,I as p,bY as r,bZ as ae,c as ne,bm as ie,o as j,F as S,aX as Z,aV as T,aW as B,K as P,aD as J,b_ as W,r as M,b$ as D,N as O,O as $,aU as re,bG as le,c0 as V,aE as U,P as X,c1 as N,c2 as E,h as I,$ as ce,c3 as de,c4 as ue,c5 as G,c6 as me,c7 as K,aL as pe}from"./index.5a2a2326.js";import{a as _e,Q as ve}from"./useFiles.e9dc5cf0.js";import{Q as fe}from"./QPage.ce0928da.js";import{Q as ge}from"./QSpace.b62ff432.js";import{Q as A}from"./QTooltip.5efb14ce.js";import{Q as F}from"./QBadge.90d699ac.js";import{_ as ye}from"./DialogConfirm.816fd820.js";import{_ as he}from"./editSingleName.740ca640.js";import{Q as R}from"./QSelect.474116e1.js";import{f as Y,_ as we,a as xe,u as $e,D as ke}from"./DialogTts.04567bf6.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import{u as H}from"./usePlayer.40e950f8.js";import"./QSlideTransition.c6b18ecd.js";import"./QMenu.36e89d6a.js";import"./QTd.663252ba.js";import"./QLinearProgress.8affb55a.js";import"./QExpansionItem.ccc61c0a.js";import"./QTr.3d310026.js";import"./useNotify.7cfcaad5.js";const be=()=>{const s=Q();return{fnBroadcastCancel:n=>{s.dialog({component:ye,componentProps:{title:"\uBC29\uC1A1 \uCDE8\uC18C",icon:"cancel",iconColor:"red-10",caption:`${n.name} \uC9C0\uC5ED \uBC29\uC1A1\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{s.loading.show(),await z.get("/devices/qsys/cancel",{params:{device:{name:n.name,deviceId:n.deviceId,ipaddress:n.ipaddress,pageId:n.pageId}}}),s.loading.hide()}catch(a){console.error(a)}})},fnEditZoneName:(n,a)=>{s.dialog({component:he,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${n.name} \uC9C0\uC5ED\uC758 ${a.name} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:a.name}}).onOk(async o=>{try{s.loading.show(),await z.put("/devices/qsys/modifiedzonename",{deviceId:n.deviceId,zone:a.Zone,name:o})}catch(m){console.error(m),s.notify({type:"negative",icon:"warning",message:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",capion:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.",position:"top"})}finally{s.loading.hide()}})}}};const qe={class:"row fit items-center q-gutter-x-sm"},Ce={style:{"font-size":"1rem","font-weight":"500"}},ze={class:"text-grey-8"},Se={class:"row items-center q-gutter-x-sm text-grey-7"},Ie={__name:"statusTree",setup(s){const{fnBroadcastCancel:u}=be(),c=n=>{let a=0;for(let o=0;o<n.length;o++)n[o].Active&&(a+=1);return a};return(n,a)=>(l(),w(_e,{class:"custom-q-tree",nodes:d(oe),"node-key":"_id","children-key":"ZoneStatus","no-node-label":"\uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},{"header-root":i(o=>[t("div",qe,[e(v,{color:o.node.connected?"primary":"red-10",name:"location_on",size:"sm"},null,8,["color"]),t("div",Ce,x(o.node.name),1),e(ge),t("div",ze,x(c(o.node.ZoneStatus))+"\uAC1C \uC9C0\uC5ED \uBC29\uC1A1\uC911 ",1),c(o.node.ZoneStatus)?(l(),w(v,{key:0,class:"cursor-pointer",name:"cancel",color:"red-10",onClick:se(m=>d(u)(o.node),["prevent","stop"])},{default:i(()=>[e(A,null,{default:i(()=>[h("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):k("",!0)])]),"default-header":i(o=>[t("div",Se,[t("div",null,[h(x(o.node.name?o.node.name:"no name")+" ",1),o.node.Active?(l(),w(F,{key:0,color:"green"},{default:i(()=>[h(" ONAIR ")]),_:1})):k("",!0)])])]),_:1},8,["nodes"]))}},Pe={class:"q-gutter-y-xs"},Qe={class:"row no-wrap items-center q-gutter-x-xs"},Me=t("div",null,"\uBC29\uC1A1\uBAA8\uB4DC",-1),je={__name:"pageMode",setup(s){return(u,c)=>(l(),p("div",Pe,[t("div",Qe,[e(v,{name:"list",color:"primary",size:"sm"}),Me]),e(R,{class:"q-mt-xs",modelValue:d(r).Mode,"onUpdate:modelValue":c[0]||(c[0]=n=>d(r).Mode=n),options:d(ae),dense:"",filled:"","map-options":"","emit-value":""},null,8,["modelValue","options"])]))}},Ze={class:"row no-wrap justify-between items-center"},Ve={class:"row no-wrap justify-start items-center q-gutter-x-sm"},De=t("div",null,"\uCC60\uC784",-1),Ne={__name:"pagePreamble",props:["preamble"],emits:["update:value"],setup(s,{emit:u}){const c=s,n=u,a=ne({get(){return c.preamble==="Chime ascending triple.wav"},set(){return c.preamble?n("update:value",""):n("update:value","Chime ascending triple.wav")}});return(o,m)=>(l(),p("div",Ze,[t("div",Ve,[e(v,{name:"notifications_none",color:"green-10",size:"sm"}),De]),e(ie,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=_=>a.value=_)},null,8,["modelValue"])]))}},Te={class:"q-gutter-y-xs"},Be={class:"row no-wrap items-center q-gutter-x-sm"},Oe=t("div",null,"\uC6B0\uC120\uC21C\uC704",-1),Ue={__name:"pagePriority",setup(s){return(u,c)=>(l(),p("div",Te,[t("div",Be,[e(v,{name:"priority_high",color:"lime-10",size:"sm"}),Oe]),e(R,{class:"q-mt-xs",modelValue:d(r).Priority,"onUpdate:modelValue":c[0]||(c[0]=n=>d(r).Priority=n),dense:"",filled:"",options:[{value:1,label:"EM"},{value:3,label:"Nomal"}],"emit-value":"","map-options":""},null,8,["modelValue"])]))}};const ee=s=>(T("data-v-092b3868"),s=s(),B(),s),Ae={class:"row no-wrap justify-between items-center"},Fe={class:"row no-wrap items-center q-gutter-x-xs"},Re=ee(()=>t("div",null,"\uBC29\uC1A1\uAD6C\uAC04",-1)),Le={key:0,class:"panel q-py-sm q-px-sm q-mt-sm q-gutter-x-sm row justify-start items-center"},Ee={key:1,class:"panel q-pa-sm q-mt-sm row justify-start items-center"},Ge=ee(()=>t("span",null," \uC120\uD0DD\uB41C \uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1)),Ke=[Ge],Ye={__name:"pageZones",props:["devices","zones"],emits:["update:zones","update:devices"],setup(s,{emit:u}){const c=Q(),n=s,a=u,o=()=>{c.dialog({component:we,componentProps:{selected:n.devices}}).onOk(m=>{a("update:devices",m),a("update:zones",Y(m))})};return j(()=>{n.devices&&n.devices.length&&a("update:zones",Y(n.devices))}),(m,_)=>(l(),p(S,null,[t("div",Ae,[t("div",Fe,[e(v,{name:"location_on",color:"primary",size:"sm"}),Re]),e(v,{class:"cursor-pointer q-mr-xs",name:"add_circle",color:"primary",size:"sm",onClick:o})]),s.zones&&s.zones.length?(l(),p("div",Le,[(l(!0),p(S,null,Z(s.zones,(g,y)=>(l(),w(F,{key:y},{default:i(()=>[h(x(g),1)]),_:2},1024))),128))])):(l(),p("div",Ee,Ke))],64))}};var Je=L(Ye,[["__scopeId","data-v-092b3868"]]);const We={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Xe=t("div",null,"\uBC29\uC1A1\uC2DC\uAC04(\uCD08)",-1),He=t("div",{class:"text-caption text-red",style:{"text-align":"right"}}," \uCD5C\uB300 \uBC29\uC1A1 \uC2DC\uAC04\uC740 4\uBD84(240\uCD08)\uC73C\uB85C \uC81C\uD55C \uB429\uB2C8\uB2E4. ",-1),et={__name:"pageLive",setup(s){return(u,c)=>(l(),p(S,null,[t("div",We,[e(v,{name:"timer",color:"pink-8",size:"sm"}),Xe]),e(R,{modelValue:d(r).MaxPageTime,"onUpdate:modelValue":c[0]||(c[0]=n=>d(r).MaxPageTime=n),dense:"",filled:"",options:[30,60,90,120,150,180,210,240]},null,8,["modelValue"]),He],64))}},tt={class:"row no-wrap justify-between items-center"},st={class:"row no-wrap justify-start items-center q-gutter-x-sm"},ot=t("div",null,"\uD30C\uC77C",-1),at={key:0,class:"bg-grey-2 q-pa-sm q-mt-sm q-gutter-x-sm row no-wrap justify-between items-center",style:{"border-radius":"2px","min-height":"40px"}},nt={key:1,class:"bg-grey-2 q-pa-sm q-mt-sm row justify-start items-center",style:{"border-radius":"2px",height:"40px"}},it=t("span",null," \uC120\uD0DD\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1),rt=[it],lt={__name:"pageFile",props:["file"],emits:["update:value"],setup(s,{emit:u}){const c=s,n=u,a=Q(),{fnPlayStart:o}=H(),m=()=>{a.dialog({component:xe,componentProps:{file:c.file}}).onOk(_=>{n("update:value",_[0])})};return(_,g)=>(l(),p(S,null,[t("div",tt,[t("div",st,[e(v,{name:"save",color:"primary",size:"sm"}),ot]),e(v,{class:"cursor-pointer",name:"add_circle",color:"primary",size:"sm",onClick:m})]),s.file?(l(),p("div",at,[t("div",null,[e(v,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"xs",onClick:g[0]||(g[0]=y=>d(o)(s.file))}),h(" "+x(s.file.base),1)]),e(v,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:g[1]||(g[1]=y=>n("update:value",null))})])):(l(),p("div",nt,rt))],64))}},ct={class:"col q-gutter-y-sm"},dt={class:"row no-wrap justify-between items-center"},ut={class:"row no-wrap justify-between items-center q-gutter-x-sm"},mt=t("div",null,"TTS (Text to Speech)",-1),pt={class:"row no-wrap justify-between items-center"},_t={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},vt={key:1,class:"text-red-10 row items-center"},ft={__name:"pageTts",props:["file"],emits:["update:value"],setup(s,{emit:u}){const{fnDeleteFile:c}=$e(),n=s,a=u,{fnPlayStart:o}=H(),m=Q(),_=async()=>{await c(),a("update:value",null)},g=()=>{m.dialog({component:ke,componentProps:{file:n.file}}).onOk(y=>{console.log(y),a("update:value",y)})};return j(async()=>{a("update:value",null)}),(y,f)=>(l(),p("div",ct,[t("div",dt,[t("div",ut,[e(v,{name:"volume_up",color:"primary",size:"sm"}),mt]),e(P,{round:"",unelevated:"",color:"primary",icon:"mic",size:"sm",onClick:g},{default:i(()=>[e(A,null,{default:i(()=>[h("\uC74C\uC131\uD569\uC131")]),_:1})]),_:1})]),t("div",pt,[s.file?(l(),p("div",_t,[t("div",null,[e(v,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:f[0]||(f[0]=b=>d(o)(s.file))}),h(" "+x(s.file.base),1)]),e(v,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:_})])):(l(),p("div",vt,[e(v,{name:"warning"}),h(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")]))])]))}};const te=s=>(T("data-v-206d3806"),s=s(),B(),s),gt={class:"q-dialog-plugin bg-trans broadcast-popup"},yt={key:0},ht={class:"row justify-center q-pt-md text-grey"},wt={class:"fit column q-gutter-y-sm",style:{width:"50%"}},xt={style:{"text-align":"right"}},$t=te(()=>t("div",{class:"name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1)),kt={style:{"text-align":"right"}},bt=te(()=>t("div",{class:"name"},"\uBC29\uC1A1\uAD6C\uAC04",-1)),qt={class:"fit row justify-end"},Ct={class:"fit row no-wrap justify-center items-center q-mb-md q-gutter-x-sm"},zt={__name:"pageLive",setup(s){const{dialogRef:u,onDialogCancel:c,onDialogOK:n}=J(),{fnZoneActive:a}=W(),o=M(!1),m=M(0);let _=null;const g=async()=>{o.value=!0;try{D();const f=await N(r.devices),b=await z.put("/broadcast/active",{devices:f.map(C=>({deviceId:C.deviceId,Zones:C.params.Zones}))});if(console.log(b),b&&b.active)return a();const{data:q}=await z.put("/broadcast/live",{...r,devices:f,zones:r.zones});E.value=q.idx}catch(f){console.error(f)}_=setInterval(()=>{m.value++},1e3)},y=async()=>{try{const f=await z.get("/broadcast/stop",{params:{idx:E.value}});console.log(f)}catch(f){console.error(f)}o.value=!1,clearInterval(_),_=null,m.value=0};return j(()=>{D()}),(f,b)=>(l(),w(X,{ref_key:"dialogRef",ref:u,persistent:""},{default:i(()=>[t("div",gt,[e(v,{class:"floatingIcon cursor-pointer",name:"cancel",color:"red",size:"md",onClick:d(c)},{default:i(()=>[e(A,null,{default:i(()=>[h("Close")]),_:1})]),_:1},8,["onClick"]),e(O,{class:"transBG"},{default:i(()=>[e($,null,{default:i(()=>[t("div",{class:re(["q-pa-md row no-wrap text-grey-2",o.value?"justify-between":"justify-end"]),style:{height:"90%","min-height":"400px","font-family":"'NanumSquare'"}},[o.value?(l(),p("div",yt,[e(le,{color:"primary",size:"14rem",thickness:8}),t("div",ht," \uBC29\uC1A1\uC911 "+x(m.value)+"\uCD08 \uACBD\uACFC ",1)])):k("",!0),t("div",wt,[t("div",xt,[$t,t("div",null,x(d(r).Mode),1)]),t("div",kt,[bt,t("div",qt,[(l(!0),p(S,null,Z(d(r).zones,(q,C)=>(l(),w(F,{key:C,class:"q-ml-xs"},{default:i(()=>[h(x(q),1)]),_:2},1024))),128))])]),t("div",null,[(l(!0),p(S,null,Z(d(V),(q,C)=>(l(),p("div",{key:C,style:{"text-align":"right"}},x(d(V)[C]),1))),128))])])],2)]),_:1}),e(U,null,{default:i(()=>[t("div",Ct,[e(P,{style:{width:"10rem"},unelevated:"",color:"primary",onClick:g},{default:i(()=>[h("\uC2DC\uC791")]),_:1}),e(P,{style:{width:"10rem"},unelevated:"",color:"red-10",onClick:y},{default:i(()=>[h("\uC911\uC9C0")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var St=L(zt,[["__scopeId","data-v-206d3806"]]);const It=[I("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),I("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[I("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),I("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[I("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var Pt=ce({name:"QSpinnerClock",props:de,setup(s){const{cSize:u,classes:c}=ue(s);return()=>I("svg",{class:c.value,width:u.value,height:u.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},It)}});const Qt=s=>(T("data-v-b1c8a5fc"),s=s(),B(),s),Mt={class:"q-dialog-plugin bg-trans broadcast-popup"},jt={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Zt=Qt(()=>t("div",{class:"font-main text-grey-2"},"\uBA54\uC2DC\uC9C0 \uBC29\uC1A1",-1)),Vt={key:0,class:"text-grey-5 row no-wrap items-center q-gutter-x-sm q-px-md"},Dt={style:{"font-size":"2rem"}},Nt={class:"text-white description q-pa-md"},Tt={class:"fit row no-wrap justify-center q-gutter-x-sm"},Bt={__name:"pageMessage",setup(s){const u=new AbortController,{dialogRef:c,onDialogCancel:n,onDialogOK:a}=J(),o=M(3),m=M(!1);let _=null;const g=()=>{_&&clearInterval(_),u.abort(),n()};return j(async()=>{try{D(),G({deviceId:"all",message:`\uD30C\uC77C \uC774\uB984: ${r.file.base}`}),await me(u)}catch(y){console.error(y)}m.value=!0,G({deviceId:"all",message:"\uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."}),_=setInterval(()=>{o.value>0?o.value-=1:(clearInterval(_),a(r))},1e3)}),(y,f)=>(l(),w(X,{ref_key:"dialogRef",ref:c,persistent:""},{default:i(()=>[t("div",Mt,[e(O,{class:"transBG"},{default:i(()=>[e($,null,{default:i(()=>[t("div",jt,[e(v,{name:"mic",color:"primary",size:"md"}),Zt])]),_:1}),e($,{style:{"min-height":"200px"}},{default:i(()=>[m.value?(l(),p("div",Vt,[e(Pt,{size:"md"}),t("span",Dt,x(o.value),1)])):k("",!0),t("div",Nt,[(l(!0),p(S,null,Z(d(V),(b,q)=>(l(),p("div",{key:q},x(d(V)[q]),1))),128))])]),_:1}),e(U,null,{default:i(()=>[t("div",Tt,[m.value?(l(),w(P,{key:0,style:{width:"8rem"},color:"primary",onClick:f[0]||(f[0]=b=>d(a)(d(r)))},{default:i(()=>[h("\uC2DC\uC791")]),_:1})):k("",!0),e(P,{style:{width:"8rem"},color:"red-10",onClick:g},{default:i(()=>[h("\uCDE8\uC18C")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var Ot=L(Bt,[["__scopeId","data-v-b1c8a5fc"]]);const Ut={class:"full-width q-px-sm q-mb-md"},At={__name:"pageStart",props:["zones"],setup(s){const u=s,{fnNoZones:c,fnNoFile:n,fnZoneActive:a}=W(),o=Q(),m=()=>{if(r.devices===null||r.devices.length===0)return c();if(r.Mode!=="live"&&(r.file===null||Object.keys(r.file).length===0))return n();switch(r.Mode){case"live":o.dialog({component:St,componentProps:{zones:u.zones}});break;case"message":case"tts":o.dialog({component:Ot}).onOk(async _=>{const g=await N(_.devices),y=await z.put("/broadcast/active",{devices:g.map(f=>({deviceId:f.deviceId,Zones:f.params.Zones}))});y&&y.active&&(a(),await K()),await z.put("/broadcast/live/message",{..._,devices:await N(_.devices),zones:r.zones})}).onCancel(async()=>{await K()});break}};return(_,g)=>(l(),p("div",Ut,[e(P,{class:"full-width",color:"primary",label:"\uBC29\uC1A1\uC2DC\uC791",onClick:m})]))}},Ft={class:"borderd"},Rt={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},Lt={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},Et=t("div",{class:"font-main"},"\uC2E4\uC2DC\uAC04 \uBC29\uC1A1",-1),Gt={class:"q-pa-xs"},Kt={class:"q-pa-sm row justify-center"},_s={__name:"LivePage",setup(s){const u=Q(),c=M(40);return j(async()=>{u.loading.show(),await pe(),u.loading.hide()}),(n,a)=>(l(),w(fe,{class:"page"},{default:i(()=>[t("div",Ft,[t("div",Rt,[t("div",Lt,[e(v,{name:"mic",color:"primary",size:"md"}),Et])]),t("div",null,[e(ve,{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=o=>c.value=o)},{before:i(()=>[t("div",Gt,[e(Ie)])]),after:i(()=>[t("div",Kt,[e(O,{flat:"",style:{width:"450px"}},{default:i(()=>[e($,null,{default:i(()=>[e(je)]),_:1}),e($,null,{default:i(()=>[e(Ue)]),_:1}),e($,null,{default:i(()=>[e(Ne,{preamble:d(r).Preamble,"onUpdate:value":a[0]||(a[0]=o=>d(r).Preamble=o)},null,8,["preamble"])]),_:1}),e($,null,{default:i(()=>[e(Je,{devices:d(r).devices,zones:d(r).zones,"onUpdate:devices":a[1]||(a[1]=o=>d(r).devices=o),"onUpdate:zones":a[2]||(a[2]=o=>d(r).zones=o)},null,8,["devices","zones"])]),_:1}),d(r).Mode==="live"?(l(),w($,{key:0},{default:i(()=>[e(et)]),_:1})):k("",!0),d(r).Mode==="message"?(l(),w($,{key:1},{default:i(()=>[e(lt,{file:d(r).file,"onUpdate:value":a[3]||(a[3]=o=>d(r).file=o)},null,8,["file"])]),_:1})):k("",!0),d(r).Mode==="tts"?(l(),w($,{key:2},{default:i(()=>[e(ft,{file:d(r).file,"onUpdate:value":a[4]||(a[4]=o=>d(r).file=o)},null,8,["file"])]),_:1})):k("",!0),e(U,null,{default:i(()=>[e(At)]),_:1})]),_:1})])]),_:1},8,["modelValue"])])])]),_:1}))}};export{_s as default};
