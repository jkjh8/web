import{aG as N,J as C,u as d,v as f,x as o,y as s,j as e,R as x,z as y,aU as X,A as n,C as h,G as w,aV as ee,E as v,bA as a,bB as te,F as z,aB as O,bC as F,r as M,o as j,bD as V,K as A,L as g,aS as se,bE as ae,aT as B,bF as P,aC as U,I as S,M as E,bG as Z,bH as R,S as G,U as K,h as Q,a2 as oe,bI as ne,bJ as re,bK as T,bL as ie,bM as L,aP as le}from"./index.01937250.js";import{Q as ce,a as de}from"./useFiles.4e06506b.js";import{Q as ue}from"./QPage.36d72cf3.js";import{Q as me}from"./QSpace.14477a0b.js";import{Q as J}from"./QTooltip.ded1ba0a.js";import{Q as H}from"./QBadge.1a6bbf24.js";import{_ as pe}from"./dialogConfirm.73a5d41e.js";import{_ as _e}from"./editSingleName.57fbb34b.js";import{Q as D}from"./QSelect.313a862b.js";import{_ as fe,a as ve,b as ge,c as ye}from"./pageTts.f8b358da.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./QMenu.850075a6.js";import"./QSlideTransition.5b9e2670.js";import"./dialogInput.917c8603.js";import"./QTable.16097e4d.js";import"./QLinearProgress.702526ef.js";import"./QExpansionItem.080cbdf0.js";import"./QTr.09d3396b.js";import"./usePlayer.21b62e30.js";const he=()=>{const i=N();return{fnBroadcastCancel:l=>{i.dialog({component:pe,componentProps:{title:"\uBC29\uC1A1 \uCDE8\uC18C",icon:"cancel",iconColor:"red-10",caption:`${l.name} \uC9C0\uC5ED \uBC29\uC1A1\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{i.loading.show(),await C.get("/devices/qsys/cancel",{params:{device:{name:l.name,deviceId:l.deviceId,ipaddress:l.ipaddress,pageId:l.pageId}}}),i.loading.hide()}catch(r){console.error(r)}})},fnEditZoneName:(l,r)=>{i.dialog({component:_e,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${l.name} \uC9C0\uC5ED\uC758 ${r.name} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:r.name}}).onOk(async t=>{try{i.loading.show(),await C.put("/devices/qsys/modifiedzonename",{deviceId:l.deviceId,zone:r.Zone,name:t})}catch(_){console.error(_),i.notify({type:"negative",icon:"warning",message:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",capion:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.",position:"top"})}finally{i.loading.hide()}})}}},we={class:"row fit tiems-center q-gutter-x-sm"},xe={class:"row items-center q-gutter-x-sm"},ke={__name:"statusTree",setup(i){const{fnBroadcastCancel:u}=he(),c=l=>{let r=0;for(let t=0;t<l.length;t++)l[t].Active&&(r+=1);return r};return(l,r)=>(d(),f(ce,{nodes:n(ee),"node-key":"_id","children-key":"ZoneStatus","no-node-label":"\uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},{"header-root":o(t=>[s("div",we,[e(x,{color:t.node.connected?"primary":"red-10",name:"location_on",size:"xs"},null,8,["color"]),s("div",null,y(t.node.name),1),e(me),s("div",null,y(c(t.node.ZoneStatus))+"\uAC1C \uC9C0\uC5ED \uBC29\uC1A1\uC911",1),c(t.node.ZoneStatus)?(d(),f(x,{key:0,class:"cursor-pointer",name:"cancel",color:"red-10",onClick:X(_=>n(u)(t.node),["prevent","stop"])},{default:o(()=>[e(J,null,{default:o(()=>[h("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):w("",!0)])]),"default-header":o(t=>[s("div",xe,[s("div",null,[h(y(t.node.name?t.node.name:"no name")+" ",1),t.node.Active?(d(),f(H,{key:0,color:"green"},{default:o(()=>[h(" ONAIR ")]),_:1})):w("",!0)])])]),_:1},8,["nodes"]))}},be={class:"row no-wrap justify-start items-center q-gutter-x-sm"},$e=s("div",{class:"card-name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1),Ce={__name:"pageMode",setup(i){return(u,c)=>(d(),v(z,null,[s("div",be,[e(x,{name:"list",color:"primary",size:"sm"}),$e]),e(D,{modelValue:n(a).Mode,"onUpdate:modelValue":c[0]||(c[0]=l=>n(a).Mode=l),options:n(te),dense:"",filled:"","map-options":"","emit-value":""},null,8,["modelValue","options"])],64))}},qe={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Ie=s("div",{class:"card-name"},"\uC6B0\uC120\uC21C\uC704",-1),Qe={__name:"pagePriority",setup(i){return(u,c)=>(d(),v(z,null,[s("div",qe,[e(x,{name:"priority_high",color:"primary",size:"sm"}),Ie]),e(D,{modelValue:n(a).Priority,"onUpdate:modelValue":c[0]||(c[0]=l=>n(a).Priority=l),dense:"",filled:"",options:[{value:1,label:"EM"},{value:3,label:"Nomal"}],"emit-value":"","map-options":""},null,8,["modelValue"])],64))}},ze={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Me=s("div",{class:"card-name"},"\uBC29\uC1A1\uC2DC\uAC04(\uCD08)",-1),Se=s("div",{class:"text-caption text-red",style:{"text-align":"right"}}," \uCD5C\uB300 \uBC29\uC1A1 \uC2DC\uAC04\uC740 4\uBD84(240\uCD08)\uC73C\uB85C \uC81C\uD55C \uB429\uB2C8\uB2E4. ",-1),Pe={__name:"pageLive",setup(i){return(u,c)=>(d(),v(z,null,[s("div",ze,[e(x,{name:"timer",color:"primary",size:"sm"}),Me]),e(D,{modelValue:n(a).MaxPageTime,"onUpdate:modelValue":c[0]||(c[0]=l=>n(a).MaxPageTime=l),filled:"",options:[30,60,90,120,150,180,210,240]},null,8,["modelValue"]),Se],64))}};const W=i=>(G("data-v-57c7573a"),i=i(),K(),i),Ve={class:"q-dialog-plugin broadcast-popup"},Be={key:0},Ze={class:"row justify-center q-pt-md text-grey"},Ne={class:"fit column q-gutter-y-sm",style:{width:"50%"}},je={style:{"text-align":"right"}},Ae=W(()=>s("div",{class:"name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1)),Ue={style:{"text-align":"right"}},De=W(()=>s("div",{class:"name"},"\uBC29\uC1A1\uAD6C\uAC04",-1)),Re={class:"fit row justify-end"},Te={class:"fit row no-wrap justify-center items-center q-mb-md q-gutter-x-sm"},Le={__name:"pageLive",setup(i){const{dialogRef:u,onDialogCancel:c,onDialogOK:l}=O(),{fnZoneActive:r}=F(),t=M(!1),_=M(0);let p=null;const q=async()=>{t.value=!0;try{V();const m=await Z(a.devices),I=await C.put("/broadcast/active",{devices:m.map($=>({deviceId:$.deviceId,Zones:$.params.Zones}))});if(console.log(I),I&&I.active)return r();const b=await C.put("/broadcast/live",{...a,devices:m,zones:a.zones});R.value=b.data.idx}catch(m){console.error(m)}p=setInterval(()=>{_.value++},1e3)},k=async()=>{try{const m=await C.get("/broadcast/stop",{params:{idx:R.value}});console.log(m)}catch(m){console.error(m)}t.value=!1,clearInterval(p),p=null,_.value=0};return j(()=>{V()}),(m,I)=>(d(),f(E,{ref_key:"dialogRef",ref:u,persistent:""},{default:o(()=>[s("div",Ve,[e(x,{class:"floatingIcon cursor-pointer",name:"cancel",color:"red",size:"sm",onClick:n(c)},{default:o(()=>[e(J,null,{default:o(()=>[h("Close")]),_:1})]),_:1},8,["onClick"]),e(A,{class:"transBG"},{default:o(()=>[e(g,null,{default:o(()=>[s("div",{class:se(["q-pa-md row no-wrap text-grey-2",t.value?"justify-between":"justify-end"]),style:{height:"90%","min-height":"300px","font-family":"'NotoSansKR'"}},[t.value?(d(),v("div",Be,[e(ae,{color:"primary",size:"14rem",thickness:8}),s("div",Ze," \uBC29\uC1A1\uC911 "+y(_.value)+"\uCD08 \uACBD\uACFC ",1)])):w("",!0),s("div",Ne,[s("div",je,[Ae,s("div",null,y(n(a).Mode),1)]),s("div",Ue,[De,s("div",Re,[(d(!0),v(z,null,B(n(a).zones,(b,$)=>(d(),f(H,{key:$,class:"q-ml-xs"},{default:o(()=>[h(y(b),1)]),_:2},1024))),128))])]),s("div",null,[(d(!0),v(z,null,B(n(P),(b,$)=>(d(),v("div",{key:$,style:{"text-align":"right"}},y(n(P)[$]),1))),128))])])],2)]),_:1}),e(U,null,{default:o(()=>[s("div",Te,[e(S,{style:{width:"10rem"},unelevated:"",color:"primary",onClick:q},{default:o(()=>[h("\uC2DC\uC791")]),_:1}),e(S,{style:{width:"10rem"},unelevated:"",color:"red-10",onClick:k},{default:o(()=>[h("\uC911\uC9C0")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var Oe=Y(Le,[["__scopeId","data-v-57c7573a"]]);const Fe=[Q("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var Ee=oe({name:"QSpinnerClock",props:ne,setup(i){const{cSize:u,classes:c}=re(i);return()=>Q("svg",{class:c.value,width:u.value,height:u.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Fe)}});const Ge=i=>(G("data-v-6460a98b"),i=i(),K(),i),Ke={class:"q-dialog-plugin broadcast-popup"},Je={class:"row no-wrap justify-start items-center q-gutter-x-sm"},He=Ge(()=>s("div",{class:"name text-grey-2"},"\uBA54\uC2DC\uC9C0 \uBC29\uC1A1",-1)),Ye={key:0,class:"text-grey-5 row no-wrap items-center q-gutter-x-sm q-px-md"},We={style:{"font-size":"2rem"}},Xe={class:"text-white description q-pa-md"},et={class:"fit row no-wrap justify-center q-gutter-x-sm"},tt={__name:"pageMessage",setup(i){const u=new AbortController,{dialogRef:c,onDialogCancel:l,onDialogOK:r}=O(),t=M(3),_=M(!1);let p=null;const q=()=>{p&&clearInterval(p),u.abort(),l()};return j(async()=>{try{V(),T({deviceId:"all",message:`\uD30C\uC77C \uC774\uB984: ${a.file.base}`}),await ie(u)}catch(k){console.error(k)}_.value=!0,T({deviceId:"all",message:"\uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."}),p=setInterval(()=>{t.value>0?t.value-=1:(clearInterval(p),r(a))},1e3)}),(k,m)=>(d(),f(E,{ref_key:"dialogRef",ref:c,persistent:""},{default:o(()=>[s("div",Ke,[e(A,{class:"transBG"},{default:o(()=>[e(g,null,{default:o(()=>[s("div",Je,[e(x,{name:"mic",color:"primary",size:"sm"}),He])]),_:1}),e(g,{style:{"min-height":"200px"}},{default:o(()=>[_.value?(d(),v("div",Ye,[e(Ee,{size:"md"}),s("span",We,y(t.value),1)])):w("",!0),s("div",Xe,[(d(!0),v(z,null,B(n(P),(I,b)=>(d(),v("div",{key:b},y(n(P)[b]),1))),128))])]),_:1}),e(U,null,{default:o(()=>[s("div",et,[_.value?(d(),f(S,{key:0,style:{width:"8rem"},color:"primary",onClick:m[0]||(m[0]=I=>n(r)(n(a)))},{default:o(()=>[h("\uC2DC\uC791")]),_:1})):w("",!0),e(S,{style:{width:"8rem"},color:"red-10",onClick:q},{default:o(()=>[h("\uCDE8\uC18C")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var st=Y(tt,[["__scopeId","data-v-6460a98b"]]);const at={class:"full-width q-px-sm q-mb-md"},ot={__name:"pageStart",props:["zones"],setup(i){const u=i,{fnNoZones:c,fnNoFile:l,fnZoneActive:r}=F(),t=N(),_=()=>{if(a.devices===null||a.devices.length===0)return c();if(a.Mode!=="live"&&(a.file===null||Object.keys(a.file).length===0))return l();switch(a.Mode){case"live":t.dialog({component:Oe,componentProps:{zones:u.zones}});break;case"message":case"tts":t.dialog({component:st}).onOk(async p=>{const q=await Z(p.devices),k=await C.put("/broadcast/active",{devices:q.map(m=>({deviceId:m.deviceId,Zones:m.params.Zones}))});k&&k.active&&(r(),await L()),await C.put("/broadcast/live/message",{...p,devices:await Z(p.devices),zones:a.zones})}).onCancel(async()=>{await L()});break}};return(p,q)=>(d(),v("div",at,[e(S,{class:"full-width",color:"primary",label:"\uBC29\uC1A1\uC2DC\uC791",onClick:_})]))}},nt={class:"borderd"},rt={class:"q-px-lg row no-wrap justify-between items-center bg-grey-2"},it={class:"row no-wrap items-center q-gutter-x-sm q-py-sm"},lt=s("div",{class:"font-main",style:{"font-size":"16px","font-weight":"bold"}}," \uC2E4\uC2DC\uAC04 \uBC29\uC1A1 ",-1),ct={class:"q-pa-xs"},dt={class:"q-pa-sm row justify-center"},Mt={__name:"LivePage",setup(i){const u=N(),c=M(40);return j(async()=>{u.loading.show(),await le(),u.loading.hide()}),(l,r)=>(d(),f(ue,{class:"q-pa-md"},{default:o(()=>[s("div",nt,[s("div",rt,[s("div",it,[e(x,{name:"mic",color:"primary",size:"24px"}),lt])]),s("div",null,[e(de,{modelValue:c.value,"onUpdate:modelValue":r[5]||(r[5]=t=>c.value=t)},{before:o(()=>[s("div",ct,[e(ke)])]),after:o(()=>[s("div",dt,[e(A,{flat:"",style:{width:"450px"}},{default:o(()=>[e(g,null,{default:o(()=>[e(Ce)]),_:1}),e(g,null,{default:o(()=>[e(Qe)]),_:1}),e(g,null,{default:o(()=>[e(fe,{preamble:n(a).Preamble,"onUpdate:value":r[0]||(r[0]=t=>n(a).Preamble=t)},null,8,["preamble"])]),_:1}),e(g,null,{default:o(()=>[e(ve,{devices:n(a).devices,zones:n(a).zones,"onUpdate:devices":r[1]||(r[1]=t=>n(a).devices=t),"onUpdate:zones":r[2]||(r[2]=t=>n(a).zones=t)},null,8,["devices","zones"])]),_:1}),n(a).Mode==="live"?(d(),f(g,{key:0},{default:o(()=>[e(Pe)]),_:1})):w("",!0),n(a).Mode==="message"?(d(),f(g,{key:1},{default:o(()=>[e(ge,{file:n(a).file,"onUpdate:value":r[3]||(r[3]=t=>n(a).file=t)},null,8,["file"])]),_:1})):w("",!0),n(a).Mode==="tts"?(d(),f(g,{key:2},{default:o(()=>[e(ye,{file:n(a).file,"onUpdate:value":r[4]||(r[4]=t=>n(a).file=t)},null,8,["file"])]),_:1})):w("",!0),e(U,null,{default:o(()=>[e(ot)]),_:1})]),_:1})])]),_:1},8,["modelValue"])])])]),_:1}))}};export{Mt as default};
