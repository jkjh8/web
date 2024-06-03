import{c as G,u,E as y,y as n,j as e,R as w,bm as C,aB as F,r as I,b as H,aP as ae,aV as q,v as U,x as a,K as J,L as T,z as $,F as B,aT as W,A as g,aK as E,aL as M,C as h,bU as le,aS as oe,aC as X,I as z,M as Y,aG as D,o as ee,bV as A,G as R,bp as ne,k as ie,aM as O,J as S}from"./index.01937250.js";import{Q as re}from"./QBadge.1a6bbf24.js";import{Q as te,b as P,a as Z}from"./QTable.16097e4d.js";import{Q as de}from"./QExpansionItem.080cbdf0.js";import{f as ce,a as ue,Q as me,b as Q,c as K}from"./useFiles.4e06506b.js";import{Q as L}from"./QTr.09d3396b.js";import{u as N}from"./usePlayer.21b62e30.js";import{Q as pe}from"./QSelect.313a862b.js";const fe={class:"row no-wrap justify-between items-center"},ve={class:"row no-wrap justify-start items-center q-gutter-x-sm"},ye=n("div",{class:"card-name"},"\uCC60\uC784",-1),lt={__name:"pagePreamble",props:["preamble"],emits:["update:value"],setup(c,{emit:b}){const _=c,m=b,r=G({get(){return _.preamble==="Chime ascending triple.wav"},set(){return _.preamble?m("update:value",""):m("update:value","Chime ascending triple.wav")}});return(x,l)=>(u(),y("div",fe,[n("div",ve,[e(w,{name:"notifications",color:"primary",size:"sm"}),ye]),e(C,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=i=>r.value=i)},null,8,["modelValue"])]))}},_e={class:"row no-wrap items-center q-gutter-x-md"},ge=n("div",{class:"dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),we={class:"dialog-caption"},he={class:"q-pa-sm"},be={class:"q-px-sm"},xe={__name:"selectBrocastZones",props:["sel"],emits:[...F.emits],setup(c,{emit:b}){const{dialogRef:_,onDialogCancel:m,onDialogHide:r,onDialogOK:x}=F(),l=c,i=I({}),p=I([]),f=G(()=>{let t=0;for(let o in i.value)t+=i.value[o].length;return t}),s=(t,o,d)=>{t?i.value[o.deviceId]=[...o.ZoneStatus]:i.value[o.deviceId]=[]},k=(t,o,d)=>{t&&t.length?t.length===o.ZoneStatus.length?p.value[d]=!0:p.value[d]=null:p.value[d]=!1},j=()=>{let t=[];for(let o in i.value)i.value[o].length&&t.push({deviceId:o,ipaddress:q.value[q.value.findIndex(d=>d.deviceId===o)].ipaddress,value:i.value[o]});x(t)};return H(async()=>{await ae();for(let t=0;t<q.value.length;t++){let o=q.value[t].deviceId,d=l.sel.findIndex(V=>V.deviceId===o);d!==-1?(i.value[o]=[...l.sel[d].value],i.value[o].length===q.value[t].ZoneStatus.length?p.value[t]=!0:p.value[t]=null):(i.value[o]=[],p.value[t]=!1)}}),(t,o)=>(u(),U(Y,{ref_key:"dialogRef",ref:_,persistent:""},{default:a(()=>[e(J,{style:{"max-width":"900px",width:"80%","min-width":"500px","border-radius":"6px"}},{default:a(()=>[e(T,null,{default:a(()=>[n("div",_e,[e(w,{name:"location_on",color:"primary",size:"1.5rem"}),n("div",null,[ge,n("div",we,$(f.value)+"\uAC1C \uBC29\uC1A1\uAD6C\uAC04 \uC120\uD0DD ",1)])])]),_:1}),e(T,null,{default:a(()=>[(u(!0),y(B,null,W(g(q),(d,V)=>(u(),y("div",{key:V,class:"q-px-md"},[e(de,{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 bg-grey-1"},{header:a(()=>[e(E,{avatar:""},{default:a(()=>[e(C,{modelValue:p.value[V],"onUpdate:modelValue":[v=>p.value[V]=v,v=>s(v,d,V)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(E,null,{default:a(()=>[e(M,null,{default:a(()=>[h($(d.name),1)]),_:2},1024),e(M,{caption:""},{default:a(()=>[h($(d.ipaddress),1)]),_:2},1024)]),_:2},1024)]),default:a(()=>[e(te,{rows:d.ZoneStatus,columns:[],"row-key":"Zone",selection:"multiple",selected:i.value[d.deviceId],"onUpdate:selected":[v=>i.value[d.deviceId]=v,v=>k(v,d,V)],grid:"",pagination:{rowsPerPage:0},"hide-header":"","hide-bottom":""},{item:a(v=>[n("div",{class:"q-pa-xs col-xs-6 col-sm-3 col-md-2 grid-style-transition",style:le(v.selected?"transform: scale(0.95);":"")},[n("div",{class:oe(["border",v.selected?t.$q.dark.isActive?"bg-grey-10":"bg-grey-3":""])},[n("div",he,[e(C,{dense:"",modelValue:v.selected,"onUpdate:modelValue":se=>v.selected=se,label:v.row.name?`${v.row.Zone}. ${v.row.name}`:`${v.row.Zone}. No Name`},null,8,["modelValue","onUpdate:modelValue","label"])])],2)],4)]),_:2},1032,["rows","selected","onUpdate:selected"])]),_:2},1024)]))),128))]),_:1}),e(X,{align:"right"},{default:a(()=>[n("div",be,[e(z,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:g(m)},null,8,["onClick"]),e(z,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:j})])]),_:1})]),_:1})]),_:1},512))}},ke={class:"row no-wrap justify-between items-center"},$e={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Ve=n("div",{class:"card-name"},"\uBC29\uC1A1\uAD6C\uAC04",-1),qe={key:0,class:"bg-grey-2 q-py-sm q-px-sm q-mt-sm q-gutter-x-sm row justify-start items-center",style:{"border-radius":"2px","min-height":"40px"}},ze={key:1,class:"bg-grey-2 q-pa-sm q-mt-sm row justify-start items-center",style:{"border-radius":"2px",height:"40px"}},Ce=n("span",null," \uC120\uD0DD\uB41C \uBC29\uC1A1\uAD6C\uAC04\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1),Se=[Ce],ot={__name:"pageZones",props:["devices","zones"],emits:["update:zones","update:devices"],setup(c,{emit:b}){const _=D(),m=c,r=b,x=()=>{_.dialog({component:xe,componentProps:{sel:m.devices}}).onOk(l=>{r("update:devices",l),r("update:zones",A(l))})};return ee(()=>{m.devices&&m.devices.length&&r("update:zones",A(m.devices))}),(l,i)=>(u(),y("div",null,[n("div",ke,[n("div",$e,[e(w,{name:"location_on",color:"primary",size:"sm"}),Ve]),e(w,{class:"cursor-pointer",name:"add_circle",color:"primary",size:"sm",onClick:x})]),c.zones&&c.zones.length?(u(),y("div",qe,[(u(!0),y(B,null,W(c.zones,(p,f)=>(u(),U(re,{key:f},{default:a(()=>[h($(p),1)]),_:2},1024))),128))])):(u(),y("div",ze,Se))]))}},Qe={class:"row no-wrap items-center q-gutter-x-md"},Ie=n("div",null,[n("div",{class:"dialog-name"},"\uD30C\uC77C\uC120\uD0DD")],-1),Ue={key:0},Te=["onClick"],je={key:2},Pe={__name:"selectFile",props:["file"],setup(c){const{dialogRef:b,onDialogCancel:_,onDialogOK:m}=F(),r=c,{fnPlayStart:x}=N(),l=I(25),i=I([]);return H(async()=>{await ce(),r.file&&(i.value[0]=r.file)}),(p,f)=>(u(),U(Y,{ref_key:"dialogRef",ref:b,persistent:""},{default:a(()=>[e(J,{class:"q-dialog-plugin",style:{"border-radius":"8px",width:"90%","max-width":"800px"}},{default:a(()=>[e(T,null,{default:a(()=>[n("div",Qe,[e(w,{name:"save",color:"primary",size:"1.5rem"}),Ie])]),_:1}),e(T,null,{default:a(()=>[e(ue,{modelValue:l.value,"onUpdate:modelValue":f[2]||(f[2]=s=>l.value=s)},{before:a(()=>[e(me,{nodes:g(Q).folders,selected:g(Q).selectedFolder,"onUpdate:selected":[f[0]||(f[0]=s=>g(Q).selectedFolder=s),g(K)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])]),after:a(()=>[e(te,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0}],rows:g(Q).files,flat:"",dense:"","row-key":"name",selection:"single",selected:i.value,"onUpdate:selected":f[1]||(f[1]=s=>i.value=s),pagination:{rowsPerPage:0},"hide-bottom":""},{header:a(s=>[e(L,{props:s},{default:a(()=>[e(P,{style:{width:"2rem"}},{default:a(()=>[e(C,{size:"22px",modelValue:s.selected,"onUpdate:modelValue":k=>s.selected=k},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(P,{key:"name",props:s},{default:a(()=>[h(" NAME ")]),_:2},1032,["props"]),e(P,{key:"size",props:s,style:{width:"2.5rem"}},{default:a(()=>[h(" SIZE ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:a(s=>[e(L,{props:s},{default:a(()=>[e(Z,{style:{width:"2rem"}},{default:a(()=>[s.row.type!=="folder"?(u(),U(C,{key:0,size:"22px",modelValue:s.selected,"onUpdate:modelValue":k=>s.selected=k},null,8,["modelValue","onUpdate:modelValue"])):R("",!0)]),_:2},1024),e(Z,{key:"name",props:s},{default:a(()=>[s.row.type==="folder"?(u(),y("span",Ue,[e(w,{name:"folder_open",color:"primary",size:"16px"})])):R("",!0),s.row.type==="folder"?(u(),y("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:k=>g(K)(s.row.fullpath)},$(s.row.name),9,Te)):(u(),y("span",je,[h($(s.row.name)+" ",1),e(z,{flat:"",round:"",size:"xs",color:"primary",icon:"play_arrow",onClick:k=>g(x)(s.row)},null,8,["onClick"])]))]),_:2},1032,["props"]),e(Z,{key:"size",props:s,style:{width:"2.5rem"}},{default:a(()=>[h($(s.row.type!=="folder"?g(ne).humanStorageSize(s.row.size):""),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selected"])]),_:1},8,["modelValue"])]),_:1}),e(X,{align:"right"},{default:a(()=>[e(z,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:g(_)},null,8,["onClick"]),e(z,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:f[3]||(f[3]=s=>g(m)(i.value))})]),_:1})]),_:1})]),_:1},512))}},Ze={class:"row no-wrap justify-between items-center"},Fe={class:"row no-wrap justify-start items-center q-gutter-x-sm"},Be=n("div",{class:"card-name"},"\uD30C\uC77C",-1),De={key:0,class:"bg-grey-2 q-pa-sm q-mt-sm q-gutter-x-sm row no-wrap justify-between items-center",style:{"border-radius":"2px","min-height":"40px"}},Ne={key:1,class:"bg-grey-2 q-pa-sm q-mt-sm row justify-start items-center",style:{"border-radius":"2px",height:"40px"}},Ee=n("span",null," \uC120\uD0DD\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ",-1),Me=[Ee],nt={__name:"pageFile",props:["file"],emits:["update:value"],setup(c,{emit:b}){const _=c,m=b,r=D(),{fnPlayStart:x}=N(),l=()=>{r.dialog({component:Pe,componentProps:{file:_.file}}).onOk(i=>{m("update:value",i[0])})};return(i,p)=>(u(),y(B,null,[n("div",Ze,[n("div",Fe,[e(w,{name:"save",color:"primary",size:"sm"}),Be]),e(w,{class:"cursor-pointer",name:"add_circle",color:"primary",size:"sm",onClick:l})]),c.file?(u(),y("div",De,[n("div",null,[e(w,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"xs",onClick:p[0]||(p[0]=f=>g(x)(c.file))}),h(" "+$(c.file.base),1)]),e(w,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:p[1]||(p[1]=f=>m("update:value",null))})])):(u(),y("div",Ne,Me))],64))}},Ae={class:"col q-gutter-y-sm"},Re={class:"row no-wrap justify-between items-center"},Oe={class:"row no-wrap justify-between items-center q-gutter-x-sm"},Ke=n("div",{class:"card-name"},"\uBA54\uC2DC\uC9C0",-1),Le={class:"row no-wrap justify-between items-center"},Ge={key:0,class:"row no-wrap justify-between items-center q-gutter-x-sm"},He={key:1,class:"text-red-10 row items-center"},it={__name:"pageTts",props:["file"],emits:["update:value"],setup(c,{emit:b}){const _=c,m=b,r=D(),{fnPlayStart:x}=N(),l=ie({voices:[],voice:"",rate:200,text:""}),i=async()=>{if(!l.voice)return s();if(!l.text)return k();try{r.loading.show(),_.file&&await S.delete("/broadcast/tts",{data:{file:_.file}});const t=await S.put("/broadcast/tts",{...l});m("update:value",t.data.value.file)}catch(t){console.error(t)}finally{r.loading.hide()}},p=async()=>{r.loading.show();try{_.file&&(await S.delete("/broadcast/tts",{data:{file:_.file}}),m("update:value",null))}catch(t){console.error(t)}finally{r.loading.hide()}},f=()=>{r.notify({type:"negative",icon:"error",message:"TTS \uC5D4\uC9C4 \uC624\uB958",caption:"\uC624\uB958\uAC00 \uACC4\uC18D\uB418\uBA74 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758 \uD574\uC8FC\uC138\uC694.",position:"top",timeout:3e3})},s=()=>{r.notify({type:"warning",icon:"warning",message:"TTS \uC74C\uC131\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.",caption:"\uC74C\uC131 \uD569\uC131\uC744 \uC704\uD574\uC11C \uC74C\uC131\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694",position:"top",timeout:3e3})},k=()=>{r.notify({type:"warning",icon:"warning",message:"TTS \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",caption:"\uC74C\uC131 \uD569\uC131\uC744 \uC704\uD574\uC11C TTS \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",position:"top",timeout:3e3})},j=async()=>{try{r.loading.show();const t=await S.get("/broadcast/tts");l.voices=t.data.value.voices,l.rate=t.data.value.rate}catch(t){console.error(t),f()}finally{r.loading.hide()}};return ee(async()=>{r.loading.show();try{m("update:value",null),await j()}catch(t){console.error(t)}finally{r.loading.hide()}}),(t,o)=>(u(),y("div",Ae,[n("div",Re,[n("div",Oe,[e(w,{name:"volume_up",color:"primary",size:"sm"}),Ke])]),e(pe,{options:l.voices,modelValue:l.voice,"onUpdate:modelValue":o[0]||(o[0]=d=>l.voice=d),"option-value":"id","option-label":"name",filled:"",dense:"",label:"\uC74C\uC131"},null,8,["options","modelValue"]),e(O,{modelValue:l.rate,"onUpdate:modelValue":o[1]||(o[1]=d=>l.rate=d),type:"number",filled:"",dense:"",label:"\uC74C\uC131\uC18D\uB3C4"},null,8,["modelValue"]),e(O,{modelValue:l.text,"onUpdate:modelValue":o[2]||(o[2]=d=>l.text=d),filled:"",type:"textarea",placeholder:"\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.",label:"\uBA54\uC2DC\uC9C0"},null,8,["modelValue"]),n("div",Le,[c.file?(u(),y("div",Ge,[n("div",null,[e(w,{class:"cursor-pointer",name:"play_arrow",color:"primary",size:"sm",onClick:o[3]||(o[3]=d=>g(x)(c.file))}),h(" "+$(c.file.base),1)]),e(w,{class:"cursor-pointer q-mr-sm",name:"cancel",color:"red-10",size:"sm",onClick:p})])):(u(),y("div",He,[e(w,{name:"warning"}),h(" \uD569\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ")])),e(z,{rounded:"",unelevated:"",color:"primary",onClick:i},{default:a(()=>[h("\uC74C\uC131 \uD569\uC131")]),_:1})])]))}};export{lt as _,ot as a,nt as b,it as c};
