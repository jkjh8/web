import{aD as T,r as b,c as de,b as ae,aL as ce,aZ as I,y as g,z as R,A as l,j as e,N as O,O as q,B as v,R as C,C as Q,I as $,F as ue,aX as fe,D as s,V as K,bm as A,W,G as k,bQ as me,aU as ve,aE as L,K as S,P as j,bR as J,J as X,bq as pe,v as te,aR as U,o as _e,f as P,aO as H,aV as ge,aW as ye}from"./index.bbdda96c.js";import{Q as oe,a as E,b as M}from"./QTd.d0f0d16c.js";import{Q as we}from"./QExpansionItem.d4838c74.js";import{f as he,Q as ke,a as be,b as N,c as Y}from"./useFiles.1e709b8b.js";import{Q as ee}from"./QTr.62cfe7d0.js";import{u as se}from"./usePlayer.d0366c50.js";import{Q as Ve}from"./QSelect.313109e8.js";import{Q as xe}from"./QTooltip.55b1dfd9.js";import{u as ne}from"./useNotify.ede93a06.js";import{_ as Se}from"./plugin-vue_export-helper.21dcd24c.js";const Ce={class:"row no-wrap items-center q-gutter-x-md"},Qe=v("div",{class:"dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),$e={class:"dialog-caption"},De={class:"q-pa-sm"},Ie={class:"q-px-sm"},ll={__name:"DialogSelectBrocastZones",props:["selected"],emits:[...T.emits],setup(i,{emit:V}){const{dialogRef:d,onDialogCancel:w,onDialogOK:y}=T(),_=i,c=b({}),m=b([]),o=de(()=>{let t=0;for(let n in c.value)t+=c.value[n].length;return t}),D=(t,n)=>{t?c.value[n.deviceId]=[...n.ZoneStatus]:c.value[n.deviceId]=[]},u=(t,n,r)=>{t&&t.length?t.length===n.ZoneStatus.length?m.value[r]=!0:m.value[r]=null:m.value[r]=!1},a=()=>{let t=[];for(let n in c.value)c.value[n].length&&t.push({deviceId:n,ipaddress:I.value[I.value.findIndex(r=>r.deviceId===n)].ipaddress,value:c.value[n]});y(t)};return ae(async()=>{await ce();for(let t=0;t<I.value.length;t++){let{deviceId:n}=I.value[t],r=_.selected.findIndex(h=>h.deviceId===n);r!==-1?(c.value[n]=[..._.selected[r].value],c.value[n].length===I.value[t].ZoneStatus.length?m.value[t]=!0:m.value[t]=null):(c.value[n]=[],m.value[t]=!1),m.value}}),(t,n)=>(g(),R(j,{ref_key:"dialogRef",ref:d,persistent:""},{default:l(()=>[e(O,{style:{"max-width":"900px",width:"80%","min-width":"500px","border-radius":"6px"}},{default:l(()=>[e(q,null,{default:l(()=>[v("div",Ce,[e(C,{name:"location_on",color:"primary",size:"1.5rem"}),v("div",null,[Qe,v("div",$e,Q(o.value)+"\uAC1C \uBC29\uC1A1\uAD6C\uAC04 \uC120\uD0DD ",1)])])]),_:1}),e(q,null,{default:l(()=>[(g(!0),$(ue,null,fe(s(I),(r,h)=>(g(),$("div",{key:h,class:"q-px-md"},[e(we,{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 bg-grey-1"},{header:l(()=>[e(K,{avatar:""},{default:l(()=>[e(A,{modelValue:m.value[h],"onUpdate:modelValue":[f=>m.value[h]=f,f=>D(f,r,h)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(K,null,{default:l(()=>[e(W,null,{default:l(()=>[k(Q(r.name),1)]),_:2},1024),e(W,{caption:""},{default:l(()=>[k(Q(r.ipaddress),1)]),_:2},1024)]),_:2},1024)]),default:l(()=>[e(oe,{rows:r.ZoneStatus,columns:[],"row-key":"Zone",selection:"multiple",selected:c.value[r.deviceId],"onUpdate:selected":[f=>c.value[r.deviceId]=f,f=>u(f,r,h)],grid:"",pagination:{rowsPerPage:0},"hide-header":"","hide-bottom":""},{item:l(f=>[v("div",{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 grid-style-transition",style:me(f.selected?"transform: scale(0.95);":"")},[v("div",{class:ve(["border",f.selected?t.$q.dark.isActive?"bg-grey-10":"bg-grey-3":""])},[v("div",De,[e(A,{dense:"",modelValue:f.selected,"onUpdate:modelValue":Z=>f.selected=Z,label:f.row.name?`${f.row.Zone}. ${f.row.name}`:`${f.row.Zone}. No Name`},null,8,["modelValue","onUpdate:modelValue","label"])])],2)],4)]),_:2},1032,["rows","selected","onUpdate:selected"])]),_:2},1024)]))),128))]),_:1}),e(L,{align:"right"},{default:l(()=>[v("div",Ie,[e(S,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(w)},null,8,["onClick"]),e(S,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:a})])]),_:1})]),_:1})]),_:1},512))}},al=i=>{let V=[];for(let d of i){let w=J.value.findIndex(y=>y.deviceId===d.deviceId);if(w!==-1){const{ZoneStatus:y,name:_}=J.value[w];if(d.value&&d.value.length)if(d.value.length===y.length)V.push(`${_} - ALL`);else{let c=d.value.map(m=>m.name||m.Zone);V.push(`${_} - ${c.join(", ")}`)}}}return V},Te={class:"row no-wrap items-center q-gutter-x-md"},qe=v("div",null,[v("div",{class:"dialog-name"},"\uD30C\uC77C\uC120\uD0DD")],-1),Ue={key:0},ze=["onClick"],Ze={key:2},tl={__name:"DialogSelectFile",props:["file"],emits:[...T.emits],setup(i,{emit:V}){const{dialogRef:d,onDialogCancel:w,onDialogOK:y}=T(),_=i,{fnPlayStart:c}=se(),m=b(25),o=b([]);return ae(async()=>{await he(),_.file&&(o.value[0]=_.file)}),(D,u)=>(g(),R(j,{ref_key:"dialogRef",ref:d,persistent:""},{default:l(()=>[e(O,{class:"q-dialog-plugin",style:{"border-radius":"8px",width:"90%","max-width":"800px"}},{default:l(()=>[e(q,null,{default:l(()=>[v("div",Te,[e(C,{name:"save",color:"primary",size:"1.5rem"}),qe])]),_:1}),e(q,null,{default:l(()=>[e(ke,{modelValue:m.value,"onUpdate:modelValue":u[2]||(u[2]=a=>m.value=a)},{before:l(()=>[e(be,{nodes:s(N).folders,selected:s(N).selectedFolder,"onUpdate:selected":[u[0]||(u[0]=a=>s(N).selectedFolder=a),s(Y)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])]),after:l(()=>[e(oe,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0}],rows:s(N).files,flat:"","row-key":"name",selection:"single",selected:o.value,"onUpdate:selected":u[1]||(u[1]=a=>o.value=a),pagination:{rowsPerPage:0},"hide-bottom":""},{header:l(a=>[e(ee,{props:a},{default:l(()=>[e(E,{style:{width:"2rem"}}),e(E,{key:"name",props:a},{default:l(()=>[k(" NAME ")]),_:2},1032,["props"]),e(E,{key:"size",props:a,style:{width:"2.5rem"}},{default:l(()=>[k(" SIZE ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:l(a=>[e(ee,{props:a},{default:l(()=>[e(M,null,{default:l(()=>[a.row.type!=="folder"?(g(),R(A,{key:0,modelValue:a.selected,"onUpdate:modelValue":t=>a.selected=t},null,8,["modelValue","onUpdate:modelValue"])):X("",!0)]),_:2},1024),e(M,{key:"name",props:a},{default:l(()=>[a.row.type==="folder"?(g(),$("span",Ue,[e(C,{name:"folder_open",color:"primary",size:"sm"})])):X("",!0),a.row.type==="folder"?(g(),$("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:t=>s(Y)(a.row.fullpath)},Q(a.row.name),9,ze)):(g(),$("span",Ze,[k(Q(a.row.name)+" ",1),e(S,{flat:"",round:"",color:"primary",icon:"play_arrow",onClick:t=>s(c)(a.row)},null,8,["onClick"])]))]),_:2},1032,["props"]),e(M,{key:"size",props:a,style:{width:"2.5rem"}},{default:l(()=>[k(Q(a.row.type!=="folder"?s(pe).humanStorageSize(a.row.size):""),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selected"])]),_:1},8,["modelValue"])]),_:1}),e(L,{align:"right"},{default:l(()=>[e(S,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(w)},null,8,["onClick"]),e(S,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:u[3]||(u[3]=a=>s(y)(o.value))})]),_:1})]),_:1})]),_:1},512))}},z=b(null),le=b([]),F=b(""),B=b(200),G=b(""),Ne=()=>{const i=te(),{fnNotiWarn:V,fnNotiError:d}=ne();return{fnMakeTts:async()=>{if(!F.value)return d("\uC120\uD0DD\uB41C \uC74C\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");if(!G.value)return d("\uBCC0\uD658\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");try{i.loading.show();const{data:o}=await U.put("/broadcast/tts",{voice:F.value,rate:B.value,text:G.value});z.value=o.value.file}catch(o){d("TTS \uBCC0\uD658 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",o.message)}finally{i.loading.hide()}},fnDeleteFile:async()=>{if(!z.value)return V("\uC0AD\uC81C\uD560 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");try{i.loading.show(),await U.delete("/broadcast/tts",{data:{file:z.value}}),z.value=null}catch(o){d("TTS \uD30C\uC77C \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",o.message)}finally{i.loading.hide()}},fnGetDefaultVoice:async()=>{try{const{data:o}=await U.get("/broadcast/tts/voice");o&&(F.value=o.voice)}catch(o){console.log(o),d("\uAE30\uBCF8 \uC74C\uC131\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}},fnSetDefaultVoice:async o=>{try{i.loading.show(),await U.put("/broadcast/tts/voice",{newVoice:o})}catch{d("\uAE30\uBCF8 \uC74C\uC131\uC744 \uC124\uC815\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{i.loading.hide()}},fnGetVoices:async()=>{try{i.loading.show();const{data:o}=await U.get("/broadcast/tts");le.value=o.value.voices,B.value=o.value.rate,console.log(o)}catch(o){console.log(o),d("\uC74C\uC131 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4")}finally{i.loading.hide()}},voices:le,voice:F,ttsRate:B,ttsText:G,currentFile:z}};const Fe=i=>(ge("data-v-5df3393a"),i=i(),ye(),i),Re={class:"row no-wrap items-center q-gutter-x-md"},Pe=Fe(()=>v("div",{class:"card-name"},"\uBA54\uC2DC\uC9C0",-1)),Ee={class:"q-gutter-y-sm"},Me={class:"row justify-between q-px-sm"},Be={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},Ge={key:1,class:"text-red-10 row items-center"},Ae={__name:"DialogTts",props:["file"],emits:[...T.emits],setup(i,{emit:V}){const{dialogRef:d,onDialogCancel:w,onDialogOK:y}=T(),{fnPlayStart:_}=se(),{fnGetVoices:c,fnGetDefaultVoice:m,fnMakeTts:o,fnDeleteFile:D,currentFile:u,voices:a,voice:t,ttsRate:n,ttsText:r}=Ne(),{fnNotiError:h}=ne(),f=i,Z=te(),ie=async()=>{u.value&&await D(u.value),await o()};return _e(async()=>{try{Z.loading.show(),await c(),await m(),f.file&&await D(f.file)}catch{h("TTS \uC870\uD68C \uC624\uB958","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{Z.loading.hide()}}),(re,p)=>(g(),R(j,{ref_key:"dialogRef",ref:d,persistent:""},{default:l(()=>[e(O,{class:"q-dialog-plugin bg-trans"},{default:l(()=>[e(q,null,{default:l(()=>[v("div",Re,[e(C,{name:"volume_up",color:"primary",size:"sm"}),Pe])]),_:1}),e(q,null,{default:l(()=>[v("div",Ee,[e(Ve,{options:s(a),modelValue:s(t),"onUpdate:modelValue":p[0]||(p[0]=x=>P(t)?t.value=x:null),"map-options":"","emit-value":"","option-value":"id","option-label":"name",filled:"",dense:"",label:"\uC74C\uC131"},null,8,["options","modelValue"]),e(H,{modelValue:s(n),"onUpdate:modelValue":p[1]||(p[1]=x=>P(n)?n.value=x:null),type:"number",filled:"",dense:"",label:"\uC74C\uC131\uC18D\uB3C4"},null,8,["modelValue"]),e(H,{modelValue:s(r),"onUpdate:modelValue":p[2]||(p[2]=x=>P(r)?r.value=x:null),filled:"",type:"textarea",placeholder:"\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.",label:"\uBA54\uC2DC\uC9C0"},null,8,["modelValue"]),v("div",Me,[s(u)?(g(),$("div",Be,[v("div",null,[e(C,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:p[3]||(p[3]=x=>s(_)(s(u)))}),k(" "+Q(s(u).base),1)]),e(C,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:p[4]||(p[4]=x=>s(D)(s(u)))})])):(g(),$("div",Ge,[e(C,{name:"warning"}),k(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")])),e(S,{round:"",unelevated:"",color:"primary",icon:"mic",size:"sm",onClick:ie},{default:l(()=>[e(xe,null,{default:l(()=>[k("\uC74C\uC131\uD569\uC131")]),_:1})]),_:1})])])]),_:1}),e(L,{align:"right"},{default:l(()=>[e(S,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(w)},null,8,["onClick"]),e(S,{disable:!s(u),round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:p[5]||(p[5]=x=>s(y)(s(u)))},null,8,["disable"])]),_:1})]),_:1})]),_:1},512))}};var ol=Se(Ae,[["__scopeId","data-v-5df3393a"]]);export{ol as D,ll as _,tl as a,al as f,Ne as u};
