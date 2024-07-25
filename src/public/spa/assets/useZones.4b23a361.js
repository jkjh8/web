import{ay as q,k as X,c as J,b as W,aP as we,b0 as V,y,z as N,A as l,j as e,N as Z,O as $,B as s,P as g,C as U,I as F,F as he,a$ as ke,D as i,V as ee,bp as K,W as le,G as f,c1 as be,aY as xe,az as R,K as x,R as O,r as P,H as Ce,J as G,bt as $e,v as ne,o as ie,aS as L,aU as ae,f as M,aZ as Se,a_ as Ve,bw as oe}from"./index.da64bcb9.js";import{Q as re,b as E,a as j}from"./QTable.0bcb9d50.js";import{Q as Qe}from"./QExpansionItem.7e9cad36.js";import{Q as D}from"./QTooltip.840f976d.js";import{u as de,f as Q,b as H,a as qe,Q as ce,c as te}from"./useFiles.d7ca70cf.js";import{Q as se}from"./QTr.942838d3.js";import{u as ue}from"./usePlayer.579256c3.js";import{Q as Ie}from"./QBanner.8f7e72b5.js";import{Q as ze}from"./QSelect.2c4c1534.js";import{r as De}from"./useRules.f98861de.js";import{u as me}from"./useNotify.b361fca5.js";import{_ as Ue}from"./DialogConfirm.33ac1f16.js";import{u as Fe}from"./useTts.e221c769.js";import{_ as Te}from"./plugin-vue_export-helper.21dcd24c.js";const Ne={class:"row no-wrap items-center q-gutter-x-md"},Pe=s("div",{class:"dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),Ze={class:"dialog-caption"},Re={class:"q-pa-sm"},Oe={class:"q-px-sm"},Cl={__name:"DialogSelectBrocastZones",props:["selected"],emits:[...q.emits],setup(p,{emit:I}){const{dialogRef:_,onDialogCancel:C,onDialogOK:w}=q(),v=p,c=X({}),u=X([]),z=J(()=>{let a=0;for(let d in c)a+=c[d].length;return a}),k=(a,d)=>{a?c[d.deviceId]=[...d.ZoneStatus]:c[d.deviceId]=[]},b=(a,d,r)=>{a&&a.length?a.length===d.ZoneStatus.length?u[r]=!0:u[r]=null:u[r]=!1},m=()=>{let a=[];for(let d in c)if(c[d].length){const r=V.value.findIndex(n=>n.deviceId===d);a.push({deviceId:d,name:V.value[r].name,ipaddress:V.value[r].ipaddress,amx:V.value[r].amx,value:c[d]})}w(a)};return W(async()=>{await we();for(let a=0;a<V.value.length;a++){let{deviceId:d}=V.value[a],r=v.selected.findIndex(n=>n.deviceId===d);r!==-1?(c[d]=[...v.selected[r].value],c[d].length===V.value[a].ZoneStatus.length?u[a]=!0:u[a]=null):(c[d]=[],u[a]=!1)}}),(a,d)=>(y(),N(O,{ref_key:"dialogRef",ref:_,persistent:""},{default:l(()=>[e(Z,{style:{"max-width":"900px",width:"80%","min-width":"500px","border-radius":"6px"}},{default:l(()=>[e($,null,{default:l(()=>[s("div",Ne,[e(g,{name:"location_on",color:"primary",size:"1.5rem"}),s("div",null,[Pe,s("div",Ze,U(z.value)+"\uAC1C \uBC29\uC1A1\uAD6C\uAC04 \uC120\uD0DD ",1)])])]),_:1}),e($,null,{default:l(()=>[(y(!0),F(he,null,ke(i(V),(r,n)=>(y(),F("div",{key:n,class:"q-px-md"},[e(Qe,{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 bg-grey-1"},{header:l(()=>[e(ee,{avatar:""},{default:l(()=>[e(K,{modelValue:u[n],"onUpdate:modelValue":[o=>u[n]=o,o=>k(o,r,n)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(ee,null,{default:l(()=>[e(le,null,{default:l(()=>[f(U(r.name),1)]),_:2},1024),e(le,{caption:""},{default:l(()=>[f(U(r.ipaddress),1)]),_:2},1024)]),_:2},1024)]),default:l(()=>[e(re,{rows:r.ZoneStatus,columns:[],"row-key":"Zone",selection:"multiple",selected:c[r.deviceId],"onUpdate:selected":[o=>c[r.deviceId]=o,o=>b(o,r,n)],grid:"",pagination:{rowsPerPage:0},"hide-header":"","hide-bottom":""},{item:l(o=>[s("div",{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 grid-style-transition",style:be(o.selected?"transform: scale(0.95);":"")},[s("div",{class:xe(["border",o.selected?a.$q.dark.isActive?"bg-grey-10":"bg-grey-3":""])},[s("div",Re,[e(K,{dense:"",modelValue:o.selected,"onUpdate:modelValue":t=>o.selected=t,label:o.row.name?`${o.row.Zone}. ${o.row.name}`:`${o.row.Zone}. No Name`},null,8,["modelValue","onUpdate:modelValue","label"])])],2)],4)]),_:2},1032,["rows","selected","onUpdate:selected"])]),_:2},1024)]))),128))]),_:1}),e(R,{align:"right"},{default:l(()=>[s("div",Oe,[e(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:i(C)},null,8,["onClick"]),e(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:m})])]),_:1})]),_:1})]),_:1},512))}},Ae={class:"row no-wrap justify-between items-center"},Be={class:"row no-wrap items-center q-gutter-x-md"},Me=s("div",null,[s("div",{class:"dialog-name"},"\uD30C\uC77C\uC120\uD0DD")],-1),Ee={key:0},je=["onClick"],Ke={key:2},$l={__name:"DialogSelectFile",props:["file"],emits:[...q.emits],setup(p,{emit:I}){const{dialogRef:_,onDialogCancel:C,onDialogOK:w}=q(),v=p,{fnMakeFolder:c,fnUploadFile:u}=de(),{fnPlayStart:z,fnPlayerStopClose:k}=ue(),b=P(25),m=P([]),a=J(()=>{var n;return((n=Q.selectedFolder)==null?void 0:n.includes("/global"))&&!Ce.value.isAdmin}),d=()=>{k(),w(m.value)},r=()=>{k(),C()};return W(async()=>{await H(),v.file&&(m.value[0]=v.file)}),(n,o)=>(y(),N(O,{ref_key:"dialogRef",ref:_,persistent:""},{default:l(()=>[e(Z,{class:"q-dialog-plugin",style:{"border-radius":"8px",width:"90%","max-width":"800px"}},{default:l(()=>[e($,null,{default:l(()=>[s("div",Ae,[s("div",Be,[e(g,{name:"save",color:"primary",size:"1.5rem"}),Me]),s("div",null,[e(x,{disable:a.value,round:"",flat:"",icon:"create_new_folder",color:"primary",size:"12px",onClick:o[0]||(o[0]=t=>i(c)(i(Q).selectedFolder))},{default:l(()=>[e(D,null,{default:l(()=>[f("\uC0C8\uD3F4\uB354")]),_:1})]),_:1},8,["disable"]),e(x,{disable:a.value,round:"",flat:"",icon:"upload",color:"primary",size:"12px",onClick:i(u)},{default:l(()=>[e(D,null,{default:l(()=>[f("\uD30C\uC77C \uC5C5\uB85C\uB4DC")]),_:1})]),_:1},8,["disable","onClick"])])])]),_:1}),e($,null,{default:l(()=>[e(qe,{modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=t=>b.value=t)},{before:l(()=>[e(ce,{nodes:i(Q).folders,selected:i(Q).selectedFolder,"onUpdate:selected":[o[1]||(o[1]=t=>i(Q).selectedFolder=t),i(te)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])]),after:l(()=>[e(re,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0}],rows:i(Q).files,flat:"","row-key":"name",selection:"single",selected:m.value,"onUpdate:selected":o[2]||(o[2]=t=>m.value=t),pagination:{rowsPerPage:0},"hide-bottom":""},{header:l(t=>[e(se,{props:t},{default:l(()=>[e(E,{style:{width:"2rem"}}),e(E,{key:"name",props:t},{default:l(()=>[f(" NAME ")]),_:2},1032,["props"]),e(E,{key:"size",props:t,style:{width:"2.5rem"}},{default:l(()=>[f(" SIZE ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:l(t=>[e(se,{props:t},{default:l(()=>[e(j,null,{default:l(()=>[t.row.type!=="folder"?(y(),N(K,{key:0,modelValue:t.selected,"onUpdate:modelValue":T=>t.selected=T},null,8,["modelValue","onUpdate:modelValue"])):G("",!0)]),_:2},1024),e(j,{key:"name",props:t},{default:l(()=>[t.row.type==="folder"?(y(),F("span",Ee,[e(g,{name:"folder_open",color:"primary",size:"sm"})])):G("",!0),t.row.type==="folder"?(y(),F("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:T=>i(te)(t.row.fullpath)},U(t.row.name),9,je)):(y(),F("span",Ke,[f(U(t.row.name)+" ",1),e(x,{flat:"",round:"",color:"primary",icon:"play_arrow",onClick:T=>i(z)(t.row)},null,8,["onClick"])]))]),_:2},1032,["props"]),e(j,{key:"size",props:t,style:{width:"2.5rem"}},{default:l(()=>[f(U(t.row.type!=="folder"?i($e).humanStorageSize(t.row.size):""),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selected"])]),_:1},8,["modelValue"])]),_:1}),e(R,{align:"right"},{default:l(()=>[e(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:r}),e(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:d})]),_:1})]),_:1})]),_:1},512))}},Ge={class:"row no-wrap justify-between items-center"},Le={class:"row no-wrap items-center q-gutter-x-md"},Je=s("div",null,[s("div",{class:"dialog-name"},"\uD30C\uC77C\uC120\uD0DD")],-1),We={class:"q-px-md"},He={class:"row no-wrap justify-between"},Ye={class:"row no-wrap"},Xe=s("div",{class:"q-ml-sm"},"\uD3F4\uB354 \uC120\uD0DD",-1),el={class:"q-px-md"},ll={__name:"DialogTtsFileSave",props:["file"],emits:[...q.emits],setup(p,{emit:I}){const{dialogRef:_,onDialogCancel:C,onDialogOK:w}=q(),{fnNotiWarn:v,fnNotiError:c}=me(),u=p,{fnMakeFolder:z}=de(),k=ne(),b=J(()=>Q.folders.length>1?[Q.folders[1]]:[]),m=P([]),a=P(""),d=async()=>{try{await ae.put("/files/copy",{original:u.file.fullpath,folder:m.value,name:a.value})}catch(n){console.error(n)}},r=async()=>{if(!a.value)return v("\uD30C\uC77C\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.");if(!m.value)return v("\uD3F4\uB354\uB97C \uC120\uD0DD\uD558\uC138\uC694.");k.loading.show();try{const{data:n}=await ae.get("/files/exist",{params:{data:JSON.stringify({folder:m.value,name:a.value})}});n.result&&n.exist&&(k.loading.hide(),k.dialog({component:Ue,componentProps:{title:"\uD30C\uC77C\uC774\uB984 \uC911\uBCF5",message:"\uB3D9\uC77C\uD55C \uC774\uB984\uC758 \uD30C\uC77C\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4. \uB36E\uC5B4\uC4F0\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{await d(),w()})),n.result&&!n.exist&&(await d(),w()),n.result||c("\uD30C\uC77C \uBCF5\uC0AC \uC624\uB958","\uD30C\uC77C \uBCF5\uC0AC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}catch(n){console.error(n)}finally{k.loading.hide()}};return W(async()=>{await H()}),ie(()=>{console.log(b.value),b.value[0]&&(m.value=b.value[0].path),a.value=u.file.base}),(n,o)=>(y(),N(O,{ref_key:"dialogRef",ref:_},{default:l(()=>[e(Z,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:l(()=>[e($,null,{default:l(()=>[s("div",Ge,[s("div",Le,[e(g,{name:"save",color:"primary",size:"1.5rem"}),Je])])]),_:1}),e($,null,{default:l(()=>[s("div",We,[s("div",He,[s("div",Ye,[e(g,{name:"folder",color:"primary",size:"1.4rem"}),Xe]),s("div",null,[e(g,{class:"cursor-pointer",name:"create_new_folder",color:"primary",size:"1.4rem",onClick:o[0]||(o[0]=t=>i(z)(m.value))},{default:l(()=>[e(D,null,{default:l(()=>[f("\uC0C8\uD3F4\uB354")]),_:1})]),_:1})])]),e(ce,{class:"bg-grey-3",nodes:b.value,selected:m.value,"onUpdate:selected":o[1]||(o[1]=t=>m.value=t),"node-key":"path","no-selection-unset":"","default-expand-all":"","selected-color":"primary"},null,8,["nodes","selected"])])]),_:1}),e($,null,{default:l(()=>[s("div",el,[e(L,{filled:"",dense:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value=t),label:"\uD30C\uC77C\uC774\uB984",rules:[i(De)]},null,8,["modelValue","rules"])])]),_:1}),e(R,{align:"right"},{default:l(()=>[e(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:i(C)},null,8,["onClick"]),e(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:r})]),_:1})]),_:1})]),_:1},512))}};const fe=p=>(Se("data-v-756c893a"),p=p(),Ve(),p),al={class:"row no-wrap items-center q-gutter-x-md"},ol=fe(()=>s("div",{class:"card-name"},"\uC74C\uC131\uD569\uC131",-1)),tl=fe(()=>s("span",{class:"self-end"}," \uBA54\uC2DC\uC9C0\uAC00 \uBCC0\uACBD \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC74C\uC131\uD569\uC131\uC744 \uC2E4\uD589\uD574 \uC8FC\uC138\uC694. ",-1)),sl={class:"q-gutter-y-sm"},nl={class:"row justify-between q-px-sm"},il={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},rl={key:1,class:"text-red-10 row items-center"},dl={__name:"DialogTts",props:["file"],emits:[...q.emits],setup(p,{emit:I}){const{dialogRef:_,onDialogCancel:C,onDialogOK:w}=q(),{fnPlayStart:v,fnPlayerStopClose:c,modal:u}=ue(),{fnGetVoices:z,fnGetDefaultVoice:k,fnMakeTts:b,fnDeleteFile:m,currentFile:a,voices:d,voice:r,ttsRate:n,ttsText:o}=Fe(),{fnNotiError:t}=me(),T=p,A=ne(),B=P(!1),Y=P(!1),pe=async()=>{u.value=!1,a.value&&await m(a.value),await b(),B.value=!1,Y.value=!0},_e=()=>{A.dialog({component:ll,componentProps:{file:a.value}})},ve=()=>{c(),w(a.value)},ge=()=>{c(),C()};return ie(async()=>{try{A.loading.show(),await z(),await k(),await H(),T.file&&await m(T.file),a.value=null}catch{t("TTS \uC870\uD68C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{A.loading.hide()}}),(ye,h)=>(y(),N(O,{ref_key:"dialogRef",ref:_,persistent:""},{default:l(()=>[e(Z,{class:"q-dialog-plugin bg-trans wide"},{default:l(()=>[e($,null,{default:l(()=>[s("div",al,[e(g,{name:"volume_up",color:"primary",size:"sm"}),ol])]),_:1}),Y.value===!0&&B.value===!0?(y(),N(Ie,{key:0,"inline-actions":"",class:"text-white bg-orange row items-center q-gutter-x-sm"},{default:l(()=>[e(g,{name:"warning",size:"xs"}),tl]),_:1})):G("",!0),e($,null,{default:l(()=>[s("div",sl,[e(ze,{options:i(d),modelValue:i(r),"onUpdate:modelValue":h[0]||(h[0]=S=>M(r)?r.value=S:null),"map-options":"","emit-value":"","option-value":"id","option-label":"name",filled:"",dense:"",label:"\uC74C\uC131"},null,8,["options","modelValue"]),e(L,{modelValue:i(n),"onUpdate:modelValue":h[1]||(h[1]=S=>M(n)?n.value=S:null),type:"number",filled:"",dense:"",label:"\uC74C\uC131\uC18D\uB3C4"},null,8,["modelValue"]),e(L,{modelValue:i(o),"onUpdate:modelValue":[h[2]||(h[2]=S=>M(o)?o.value=S:null),h[3]||(h[3]=S=>B.value=!0)],filled:"",type:"textarea",placeholder:"\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.",label:"\uBA54\uC2DC\uC9C0"},null,8,["modelValue"]),s("div",nl,[i(a)?(y(),F("div",il,[s("div",null,[e(g,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:h[4]||(h[4]=S=>i(v)(i(a)))},{default:l(()=>[e(D,null,{default:l(()=>[f("\uBBF8\uB9AC\uB4E3\uAE30")]),_:1})]),_:1}),f(" "+U(i(a).base),1)]),e(g,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:h[5]||(h[5]=S=>i(m)(i(a)))},{default:l(()=>[e(D,null,{default:l(()=>[f("\uC0AD\uC81C")]),_:1})]),_:1}),e(g,{class:"cursor-pointer",name:"save",color:"primary",size:"sm",onClick:_e},{default:l(()=>[e(D,null,{default:l(()=>[f("\uC800\uC7A5")]),_:1})]),_:1})])):(y(),F("div",rl,[e(g,{name:"warning"}),f(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")])),e(g,{class:"cursor-pointer",color:"primary",name:"mic",size:"sm",onClick:pe},{default:l(()=>[e(D,null,{default:l(()=>[f("\uC74C\uC131\uD569\uC131")]),_:1})]),_:1})])])]),_:1}),e(R,{align:"right"},{default:l(()=>[e(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:ge}),e(x,{disable:!i(a),round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:ve},null,8,["disable"])]),_:1})]),_:1})]),_:1},512))}};var Sl=Te(dl,[["__scopeId","data-v-756c893a"]]);const Vl=p=>{let I=[];for(let _ of p){let C=oe.value.findIndex(w=>w.deviceId===_.deviceId);if(C!==-1){const{ZoneStatus:w,name:v}=oe.value[C];if(_.value&&_.value.length)if(_.value.length===w.length)I.push(`${v} - ALL`);else{let c=_.value.map(u=>u.name||u.Zone);I.push(`${v} - ${c.join(", ")}`)}}}return I};export{Sl as D,Cl as _,$l as a,Vl as f};