import{v as A,U as z,z as c,A as _,B as o,C as s,j as e,Q as x,J as y,bk as X,D as n,M as h,H as w,bt as ee,G as f,bu as a,bv as te,F as I,bw as T,r as M,o as D,bx as V,P as N,R as g,aP as se,by as ae,aO as B,bz as P,aF as U,I as S,O as L,bA as j,bB as R,V as G,W as E,h as Q,a4 as oe,bC as ne,bD as re,bE as O,bF as ie,bG as F,aL as le}from"./index.186a5e78.js";import{Q as ce,a as de}from"./useFiles.d1d5fca1.js";import{Q as ue}from"./QPage.5ab107d5.js";import{Q as me}from"./QSpace.4bc23044.js";import{Q as K}from"./QTooltip.ee8f3b31.js";import{Q as H}from"./QBadge.b1ae3087.js";import{_ as pe}from"./dialogConfirm.4f381559.js";import{Q as Z}from"./QSelect.eefc60fe.js";import{_ as _e,a as fe,b as ve,c as ge}from"./pageTts.b3a105c4.js";import{u as J}from"./use-dialog-plugin-component.830234ac.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"./QMenu.129770ed.js";import"./QSlideTransition.53f85e14.js";import"./dialogInput.57dc5385.js";import"./format.cbf00d5d.js";import"./QTable.6632cdbf.js";import"./QLinearProgress.2dc8b4cd.js";import"./QExpansionItem.3f0fca0f.js";import"./QTr.aa542b9e.js";import"./usePlayer.732e3406.js";const ye=()=>{const l=A();return{fnBroadcastCancel:r=>{l.dialog({component:pe,componentProps:{title:"\uBC29\uC1A1 \uCDE8\uC18C",icon:"cancel",iconColor:"red-10",caption:`${r.name} \uC9C0\uC5ED \uBC29\uC1A1\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{l.loading.show(),await z.get("/devices/qsys/cancel",{params:{device:{name:r.name,deviceId:r.deviceId,ipaddress:r.ipaddress,pageId:r.pageId}}}),l.loading.hide()}catch(u){console.error(u)}})}}},he={class:"row fit tiems-center q-gutter-x-sm"},we={class:"row items-center q-gutter-x-sm"},xe={__name:"statusTree",setup(l){const{fnBroadcastCancel:d}=ye(),r=u=>{let i=0;for(let t=0;t<u.length;t++)u[t].Active&&(i+=1);return i};return(u,i)=>(c(),_(ce,{nodes:n(ee),"node-key":"_id","children-key":"ZoneStatus","no-node-label":"\uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},{"header-root":o(t=>[s("div",he,[e(x,{color:t.node.connected?"primary":"red-10",name:"location_on",size:"xs"},null,8,["color"]),s("div",null,y(t.node.name),1),e(me),s("div",null,y(r(t.node.ZoneStatus))+"\uAC1C \uC9C0\uC5ED \uBC29\uC1A1\uC911",1),r(t.node.ZoneStatus)?(c(),_(x,{key:0,class:"cursor-pointer",name:"cancel",color:"red-10",onClick:X(v=>n(d)(t.node),["prevent","stop"])},{default:o(()=>[e(K,null,{default:o(()=>[h("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])):w("",!0)])]),"default-header":o(t=>[s("div",we,[s("div",null,[h(y(t.node.name?t.node.name:"no name")+" ",1),t.node.Active?(c(),_(H,{key:0,color:"green"},{default:o(()=>[h(" ONAIR ")]),_:1})):w("",!0)])])]),_:1},8,["nodes"]))}},be={class:"row no-wrap justify-start items-center q-gutter-x-sm"},ke=s("div",{class:"card-name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1),$e={__name:"pageMode",setup(l){return(d,r)=>(c(),f(I,null,[s("div",be,[e(x,{name:"list",color:"primary",size:"sm"}),ke]),e(Z,{modelValue:n(a).Mode,"onUpdate:modelValue":r[0]||(r[0]=u=>n(a).Mode=u),options:n(te),dense:"",filled:"","map-options":"","emit-value":""},null,8,["modelValue","options"])],64))}},Ce={class:"row no-wrap justify-start items-center q-gutter-x-sm"},qe=s("div",{class:"card-name"},"\uC6B0\uC120\uC21C\uC704",-1),Qe={__name:"pagePriority",setup(l){return(d,r)=>(c(),f(I,null,[s("div",Ce,[e(x,{name:"priority_high",color:"primary",size:"sm"}),qe]),e(Z,{modelValue:n(a).Priority,"onUpdate:modelValue":r[0]||(r[0]=u=>n(a).Priority=u),dense:"",filled:"",options:[{value:1,label:"EM"},{value:3,label:"Nomal"}],"emit-value":"","map-options":""},null,8,["modelValue"])],64))}},ze={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Ie=s("div",{class:"card-name"},"\uBC29\uC1A1\uC2DC\uAC04(\uCD08)",-1),Me=s("div",{class:"text-caption text-red",style:{"text-align":"right"}}," \uCD5C\uB300 \uBC29\uC1A1 \uC2DC\uAC04\uC740 4\uBD84(240\uCD08)\uC73C\uB85C \uC81C\uD55C \uB429\uB2C8\uB2E4. ",-1),Se={__name:"pageLive",setup(l){return(d,r)=>(c(),f(I,null,[s("div",ze,[e(x,{name:"timer",color:"primary",size:"sm"}),Ie]),e(Z,{modelValue:n(a).MaxPageTime,"onUpdate:modelValue":r[0]||(r[0]=u=>n(a).MaxPageTime=u),filled:"",options:[30,60,90,120,150,180,210,240]},null,8,["modelValue"]),Me],64))}};const Y=l=>(G("data-v-57c7573a"),l=l(),E(),l),Pe={class:"q-dialog-plugin broadcast-popup"},Ve={key:0},Be={class:"row justify-center q-pt-md text-grey"},je={class:"fit column q-gutter-y-sm",style:{width:"50%"}},Ae={style:{"text-align":"right"}},De=Y(()=>s("div",{class:"name"},"\uBC29\uC1A1\uBAA8\uB4DC",-1)),Ne={style:{"text-align":"right"}},Ue=Y(()=>s("div",{class:"name"},"\uBC29\uC1A1\uAD6C\uAC04",-1)),Ze={class:"fit row justify-end"},Re={class:"fit row no-wrap justify-center items-center q-mb-md q-gutter-x-sm"},Oe={__name:"pageLive",setup(l){const{dialogRef:d,onDialogCancel:r,onDialogOK:u}=J(),{fnZoneActive:i}=T(),t=M(!1),v=M(0);let p=null;const C=async()=>{t.value=!0;try{V();const m=await j(a.devices),q=await z.put("/broadcast/active",{devices:m.map($=>({deviceId:$.deviceId,Zones:$.params.Zones}))});if(console.log(q),q&&q.active)return i();const k=await z.put("/broadcast/live",{...a,devices:m,zones:a.zones});R.value=k.data.idx}catch(m){console.error(m)}p=setInterval(()=>{v.value++},1e3)},b=async()=>{try{const m=await z.get("/broadcast/stop",{params:{idx:R.value}});console.log(m)}catch(m){console.error(m)}t.value=!1,clearInterval(p),p=null,v.value=0};return D(()=>{V()}),(m,q)=>(c(),_(L,{ref_key:"dialogRef",ref:d,persistent:""},{default:o(()=>[s("div",Pe,[e(x,{class:"floatingIcon cursor-pointer",name:"cancel",color:"red",size:"sm",onClick:n(r)},{default:o(()=>[e(K,null,{default:o(()=>[h("Close")]),_:1})]),_:1},8,["onClick"]),e(N,{class:"transBG"},{default:o(()=>[e(g,null,{default:o(()=>[s("div",{class:se(["q-pa-md row no-wrap text-grey-2",t.value?"justify-between":"justify-end"]),style:{height:"90%","min-height":"300px","font-family":"'NotoSansKR'"}},[t.value?(c(),f("div",Ve,[e(ae,{color:"primary",size:"14rem",thickness:8}),s("div",Be," \uBC29\uC1A1\uC911 "+y(v.value)+"\uCD08 \uACBD\uACFC ",1)])):w("",!0),s("div",je,[s("div",Ae,[De,s("div",null,y(n(a).Mode),1)]),s("div",Ne,[Ue,s("div",Ze,[(c(!0),f(I,null,B(n(a).zones,(k,$)=>(c(),_(H,{key:$,class:"q-ml-xs"},{default:o(()=>[h(y(k),1)]),_:2},1024))),128))])]),s("div",null,[(c(!0),f(I,null,B(n(P),(k,$)=>(c(),f("div",{key:$,style:{"text-align":"right"}},y(n(P)[$]),1))),128))])])],2)]),_:1}),e(U,null,{default:o(()=>[s("div",Re,[e(S,{style:{width:"10rem"},unelevated:"",color:"primary",onClick:C},{default:o(()=>[h("\uC2DC\uC791")]),_:1}),e(S,{style:{width:"10rem"},unelevated:"",color:"red-10",onClick:b},{default:o(()=>[h("\uC911\uC9C0")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var Fe=W(Oe,[["__scopeId","data-v-57c7573a"]]);const Te=[Q("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),Q("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[Q("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var Le=oe({name:"QSpinnerClock",props:ne,setup(l){const{cSize:d,classes:r}=re(l);return()=>Q("svg",{class:r.value,width:d.value,height:d.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Te)}});const Ge=l=>(G("data-v-6460a98b"),l=l(),E(),l),Ee={class:"q-dialog-plugin broadcast-popup"},Ke={class:"row no-wrap justify-start items-center q-gutter-x-sm"},He=Ge(()=>s("div",{class:"name text-grey-2"},"\uBA54\uC2DC\uC9C0 \uBC29\uC1A1",-1)),Je={key:0,class:"text-grey-5 row no-wrap items-center q-gutter-x-sm q-px-md"},We={style:{"font-size":"2rem"}},Ye={class:"text-white description q-pa-md"},Xe={class:"fit row no-wrap justify-center q-gutter-x-sm"},et={__name:"pageMessage",setup(l){const d=new AbortController,{dialogRef:r,onDialogCancel:u,onDialogOK:i}=J(),t=M(3),v=M(!1);let p=null;const C=()=>{p&&clearInterval(p),d.abort(),u()};return D(async()=>{try{V(),O({deviceId:"all",message:`\uD30C\uC77C \uC774\uB984: ${a.file.base}`}),await ie(d)}catch(b){console.error(b)}v.value=!0,O({deviceId:"all",message:"\uBC29\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."}),p=setInterval(()=>{t.value>0?t.value-=1:(clearInterval(p),i(a))},1e3)}),(b,m)=>(c(),_(L,{ref_key:"dialogRef",ref:r,persistent:""},{default:o(()=>[s("div",Ee,[e(N,{class:"transBG"},{default:o(()=>[e(g,null,{default:o(()=>[s("div",Ke,[e(x,{name:"mic",color:"primary",size:"sm"}),He])]),_:1}),e(g,{style:{"min-height":"200px"}},{default:o(()=>[v.value?(c(),f("div",Je,[e(Le,{size:"md"}),s("span",We,y(t.value),1)])):w("",!0),s("div",Ye,[(c(!0),f(I,null,B(n(P),(q,k)=>(c(),f("div",{key:k},y(n(P)[k]),1))),128))])]),_:1}),e(U,null,{default:o(()=>[s("div",Xe,[v.value?(c(),_(S,{key:0,style:{width:"8rem"},color:"primary",onClick:m[0]||(m[0]=q=>n(i)(n(a)))},{default:o(()=>[h("\uC2DC\uC791")]),_:1})):w("",!0),e(S,{style:{width:"8rem"},color:"red-10",onClick:C},{default:o(()=>[h("\uCDE8\uC18C")]),_:1})])]),_:1})]),_:1})])]),_:1},512))}};var tt=W(et,[["__scopeId","data-v-6460a98b"]]);const st={class:"full-width q-px-sm q-mb-md"},at={__name:"pageStart",props:["zones"],setup(l){const d=l,{fnNoZones:r,fnNoFile:u,fnZoneActive:i}=T(),t=A(),v=()=>{if(a.devices===null||a.devices.length===0)return r();if(a.Mode!=="live"&&(a.file===null||Object.keys(a.file).length===0))return u();switch(a.Mode){case"live":t.dialog({component:Fe,componentProps:{zones:d.zones}});break;case"message":case"tts":t.dialog({component:tt}).onOk(async p=>{const C=await j(p.devices),b=await z.put("/broadcast/active",{devices:C.map(m=>({deviceId:m.deviceId,Zones:m.params.Zones}))});b&&b.active&&(i(),await F()),await z.put("/broadcast/live/message",{...p,devices:await j(p.devices),zones:a.zones})}).onCancel(async()=>{await F()});break}};return(p,C)=>(c(),f("div",st,[e(S,{class:"full-width",color:"primary",label:"\uBC29\uC1A1\uC2DC\uC791",onClick:v})]))}},ot={class:"borderd"},nt={class:"q-px-lg row no-wrap justify-between items-center bg-grey-2"},rt={class:"row no-wrap items-center q-gutter-x-sm q-py-sm"},it=s("div",{class:"font-main",style:{"font-size":"16px","font-weight":"bold"}}," \uC2E4\uC2DC\uAC04 \uBC29\uC1A1 ",-1),lt={class:"q-pa-xs"},ct={class:"q-pa-sm row justify-center"},Mt={__name:"LivePage",setup(l){const d=A(),r=M(40);return D(async()=>{d.loading.show(),await le(),d.loading.hide()}),(u,i)=>(c(),_(ue,{class:"q-pa-md"},{default:o(()=>[s("div",ot,[s("div",nt,[s("div",rt,[e(x,{name:"mic",color:"primary",size:"24px"}),it])]),s("div",null,[e(de,{modelValue:r.value,"onUpdate:modelValue":i[5]||(i[5]=t=>r.value=t)},{before:o(()=>[s("div",lt,[e(xe)])]),after:o(()=>[s("div",ct,[e(N,{flat:"",style:{width:"450px"}},{default:o(()=>[e(g,null,{default:o(()=>[e($e)]),_:1}),e(g,null,{default:o(()=>[e(Qe)]),_:1}),e(g,null,{default:o(()=>[e(_e,{preamble:n(a).Preamble,"onUpdate:value":i[0]||(i[0]=t=>n(a).Preamble=t)},null,8,["preamble"])]),_:1}),e(g,null,{default:o(()=>[e(fe,{devices:n(a).devices,zones:n(a).zones,"onUpdate:devices":i[1]||(i[1]=t=>n(a).devices=t),"onUpdate:zones":i[2]||(i[2]=t=>n(a).zones=t)},null,8,["devices","zones"])]),_:1}),n(a).Mode==="live"?(c(),_(g,{key:0},{default:o(()=>[e(Se)]),_:1})):w("",!0),n(a).Mode==="message"?(c(),_(g,{key:1},{default:o(()=>[e(ve,{file:n(a).file,"onUpdate:value":i[3]||(i[3]=t=>n(a).file=t)},null,8,["file"])]),_:1})):w("",!0),n(a).Mode==="tts"?(c(),_(g,{key:2},{default:o(()=>[e(ge,{file:n(a).file,"onUpdate:value":i[4]||(i[4]=t=>n(a).file=t)},null,8,["file"])]),_:1})):w("",!0),e(U,null,{default:o(()=>[e(at)]),_:1})]),_:1})])]),_:1},8,["modelValue"])])])]),_:1}))}};export{Mt as default};
