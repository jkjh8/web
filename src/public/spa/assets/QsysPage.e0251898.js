import{aP as O,y as b,z as A,A as a,j as e,P as M,R as Y,S as w,B as t,C as d,V as W,W as p,X as _,Y as s,H as l,D as y,bt as U,bA as F,aX as T,L as k,U as j,aO as L,r as z,o as G,aU as X,J as B,F as H,b2 as J,aV as K,aR as ee,aS as ae,aT as te,O as C,b5 as le,b6 as ne,v as oe,aQ as P,bv as se,a$ as de,_ as ie}from"./index.80d8777d.js";import{Q as S}from"./QTooltip.42b6753b.js";import{Q as ce}from"./QBadge.7ae12450.js";import{Q as re,a as N}from"./QTable.c6e750e4.js";import{Q as ue}from"./QPage.c141d28c.js";import{_ as fe,a as me}from"./editDevice.80265e1b.js";import{Q as _e}from"./QForm.62ad5efc.js";import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";const ve=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"amx",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",align:"center",field:"amx",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],ge=t("div",{class:"dialog-name"},"Q-SYS INFO",-1),he={class:"caption font-sans"},ye={class:"q-px-md"},be=["href"],we=["href"],xe={class:"q-pl-sm text-black"},ke={__name:"infoQsys",props:["device"],emits:[...O.emits],setup(n,{emit:c}){const{dialogRef:$,onDialogOK:x,onDialogCancel:Q}=O();return(Z,q)=>(b(),A(j,{ref_key:"dialogRef",ref:$},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(Y,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>[e(w,{style:{"margin-top":"10px"},name:"img:qsys.svg",size:"1.5rem"}),t("div",null,[ge,t("div",he,d(n.device.deviceId),1)])]),_:1}),e(Y,null,{default:a(()=>[t("div",ye,[e(W,{dense:""},{default:a(()=>[e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(n.device.name),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("IP Address")]),_:1}),e(s,{caption:""},{default:a(()=>[t("a",{href:`http://${n.device.ipaddress}`,target:"_blank"},[l(d(n.device.ipaddress)+" ",1),e(w,{class:"cursor-pointer",name:"launch",color:"primary"})],8,be)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58")]),_:1}),n.device.amx?(b(),A(s,{key:1,caption:""},{default:a(()=>[t("a",{href:`http://${n.device.amx}`,target:"_blank"},[l(d(n.device.amx)+" ",1),e(w,{class:"cursor-pointer",name:"launch",color:"primary"})],8,we)]),_:1})):(b(),A(s,{key:0,caption:""},{default:a(()=>[l("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C")]),_:1}))]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uC5F0\uACB0 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(n.device.connected),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uCF54\uC5B4 \uD50C\uB7AB\uD3FC")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(n.device.EngineStatus.Platform),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uCF54\uC5B4 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(n.device.EngineStatus.State),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("PA \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(n.device.ZoneStatusConfigure),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uC800\uC7A5\uC18C \uC815\uBCF4(\uB0A8\uC740\uB7C9/\uC804\uCCB4)")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(y(U).humanStorageSize(n.device.storage.free))+" / "+d(y(U).humanStorageSize(n.device.storage.total))+" ",1),t("span",xe,d(Math.round(n.device.storage.free/n.device.storage.total*100))+"% \uC5EC\uC720 ",1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(y(F).formatDate(n.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(s,{caption:""},{default:a(()=>[l(d(y(F).formatDate(n.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(T,{align:"right"},{default:a(()=>[e(k,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:y(x)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}};const E=n=>(le("data-v-fb97bf36"),n=n(),ne(),n),$e={class:"row no-wrap justify-between items-center q-pa-xs"},Qe={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},Ie=E(()=>t("div",null,"\uBC29\uC1A1\uAD6C\uAC04 \uC218\uC815",-1)),Se={class:"text-caption"},Ce=E(()=>t("span",{class:"text-caption"},"\uB3D9\uC77C\uC9C0\uC5ED\uB9CC \uD45C\uC2DC",-1)),qe={class:"table-header-line"},De=E(()=>t("thead",null,[t("tr",null,[t("th",{style:{width:"50px"}},"\uC9C0\uC5ED"),t("th",{style:{width:"260px"}},"\uC774\uB984"),t("th",{style:{width:"260px"}},"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD")])],-1)),Ve={style:{"text-align":"center",width:"50px"}},Pe={style:{width:"260px"}},ze={style:{width:"260px"}},Ae={__name:"editZoneSettings",props:["device"],emits:[...O.emits],setup(n,{emit:c}){const $=n,{dialogRef:x,onDialogCancel:Q,onDialogOK:Z}=O(),{fnNotiWarn:q,fnNotiError:R}=L(),g=z([]),D=z([]),V=z([]),i=z(!1),v=(r,u,f)=>{u(()=>{D.value=V.value.filter(h=>h.name.indexOf(r)>-1)})},o=async r=>{const{data:u}=await C.get(r?`/devices/barix/ip?ip=${r}`:"/devices/barix");return u.devices},I=async(r,u)=>{if(r===null)return g.value[u].destination="";const f=g.value.findIndex(m=>m.destination===r);if(u!==-1&&u!==f)return g.value[u].destination="",q("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.");const h=await C.get("/devices/qsys/existszones",{params:{id:r,deviceId:$.device.deviceId}});if(h.data&&h.data.value&&h.data.value.length)return h.data.value.findIndex(m=>m.deviceId===$.device.deviceId),g.value[u].destination="",q("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.")};return G(async()=>{g.value=[...$.device.ZoneStatus.map(r=>({name:r.name?r.name:"",Zone:r.Zone,destination:r.destination&&r.destination._id?r.destination._id:""}))],V.value=await o(),D.value=V.value}),(r,u)=>(b(),A(j,{ref_key:"dialogRef",ref:x,persistent:""},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px","max-width":"1000px",width:"650px"}},{default:a(()=>[e(Y,null,{default:a(()=>[t("div",$e,[t("div",Qe,[e(w,{name:"add_circle",color:"primary",size:"sm"}),t("div",null,[Ie,t("div",Se,d(n.device.name)+" "+d(n.device.ipaddress),1)])]),t("div",null,[Ce,e(X,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=f=>i.value=f),size:"xs"},null,8,["modelValue"])])])]),_:1}),e(_e,{onSubmit:u[1]||(u[1]=f=>y(Z)(g.value))},{default:a(()=>[e(Y,{class:"row justify-center"},{default:a(()=>[t("table",qe,[De,t("tbody",null,[(b(!0),B(H,null,J(g.value,(f,h)=>(b(),B("tr",{key:h},[t("td",Ve,d(f.Zone),1),t("td",Pe,[e(K,{filled:"",dense:"",modelValue:f.name,"onUpdate:modelValue":m=>f.name=m,label:`\uCC44\uB110 ${f.Zone}`},null,8,["modelValue","onUpdate:modelValue","label"])]),t("td",ze,[e(ee,{filled:"",dense:"",clearable:"",modelValue:f.destination,"onUpdate:modelValue":[m=>f.destination=m,m=>I(m,h)],options:D.value,label:`\uCC44\uB110 ${f.Zone} \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD`,"option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:v},{prepend:a(()=>[e(w,{name:"place"})]),option:a(m=>[e(p,ae(te(m.itemProps)),{default:a(()=>[e(_,{avatar:""},{default:a(()=>[e(w,{name:"storage"})]),_:1}),e(_,null,{default:a(()=>[e(s,null,{default:a(()=>[l(d(m.opt.name),1)]),_:2},1024),e(s,{caption:""},{default:a(()=>[l(d(m.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},1032,["modelValue","onUpdate:modelValue","options","label"])])]))),128))])])]),_:1}),e(T,{align:"right"},{default:a(()=>[e(k,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:y(Q)},null,8,["onClick"]),e(k,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},512))}};var Ze=pe(Ae,[["__scopeId","data-v-fb97bf36"]]);const Ne={class:"borderd"},Oe={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},Ye={class:"row no-wrap items-center q-gutter-x-sm"},Be=t("div",{class:"font-main"},"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58",-1),Ee=["href"],Re=["href"],Ue={key:1,class:"text-caption text-grey"},Xe={__name:"QsysPage",setup(n){const c=oe(),{fnNotiInfo:$,fnNotiError:x}=L(),Q=z(""),Z=()=>{c.dialog({component:fe,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uCD94\uAC00",type:"qsys"}}).onOk(async i=>{try{c.loading.show(),await C.post("/devices/qsys",{...i})}catch{x({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uCD94\uAC00 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await P(),c.loading.hide()}})},q=i=>{c.dialog({component:ke,componentProps:{device:i}})},R=i=>{c.dialog({component:me,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uC218\uC815",type:"qsys",device:i}}).onOk(async v=>{try{c.loading.show(),await C.put("/devices/qsys/edit",{...v})}catch{x({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{P(),c.loading.hide()}})},g=i=>{c.dialog({component:Ze,componentProps:{device:i}}).onOk(async v=>{try{c.loading.show(),await C.put("/devices/qsys/updatenames",{deviceId:i.deviceId,arr:v})}catch{x({message:"\uBC29\uC1A1\uAD6C\uAC04 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{P(),c.loading.hide()}})},D=i=>{$(`${i.name}\uC758 \uC804\uCCB4 \uC124\uC815 \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),de("zone:set:device",{...i})},V=i=>{c.dialog({component:ie,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${i.name} ${i.ipaddress}`}}).onOk(async()=>{try{c.loading.show(),await C.delete("/devices/qsys",{data:{...i}}),c.loading.hide()}catch{x({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await P(),c.loading.hide()}})};return G(async()=>{try{c.loading.show(),await P()}catch{}finally{c.loading.hide()}}),(i,v)=>(b(),A(ue,{class:"page"},{default:a(()=>[t("div",Ne,[t("div",Oe,[t("div",Ye,[e(w,{name:"img:qsys.svg",color:"primary",size:"sm"}),Be,t("div",null,[e(w,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:Z},{default:a(()=>[e(S,null,{default:a(()=>[l("\uC7A5\uCE58 \uCD94\uAC00")]),_:1})]),_:1})])]),e(K,{modelValue:Q.value,"onUpdate:modelValue":v[0]||(v[0]=o=>Q.value=o),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(w,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(re,{columns:y(ve),rows:y(se),filter:Q.value},{"body-cell-name":a(o=>[e(N,{props:o},{default:a(()=>[t("div",null,[e(ce,{rounded:"",color:o.row.connected?"primary":"red-10"},null,8,["color"]),l(" "+d(o.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":a(o=>[e(N,{props:o},{default:a(()=>[t("a",{href:`http://${o.value}`,target:"_blank"},d(o.value),9,Ee)]),_:2},1032,["props"])]),"body-cell-amx":a(o=>[e(N,{props:o},{default:a(()=>[o.row.amx?(b(),B("a",{key:0,href:`http://${o.value}`,target:"_blank"},d(o.value),9,Re)):(b(),B("div",Ue," \uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C "))]),_:2},1032,["props"])]),"body-cell-actions":a(o=>[e(N,{props:o},{default:a(()=>[t("div",null,[e(k,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:I=>q(o.row)},{default:a(()=>[e(S,null,{default:a(()=>[l("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:I=>R(o.row)},{default:a(()=>[e(S,null,{default:a(()=>[l("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"blue",icon:"edit_note",size:"sm",onClick:I=>g(o.row)},{default:a(()=>[e(S,null,{default:a(()=>[l("\uBC29\uC1A1\uAD6C\uAC04\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"primary",icon:"refresh",size:"sm",onClick:I=>D(o.row)},{default:a(()=>[e(S,null,{default:a(()=>[l("\uC7AC\uC124\uC815")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:I=>V(o.row)},{default:a(()=>[e(S,null,{default:a(()=>[l("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{Xe as default};
