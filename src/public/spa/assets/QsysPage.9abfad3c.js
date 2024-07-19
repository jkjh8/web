import{ay as Z,C as b,D as q,E as a,j as e,S as M,U as A,V as w,G as l,H as d,X as K,Y as p,Z as m,_ as s,K as t,I as v,bt as O,b6 as B,az as U,O as k,W as F,r as E,o as R,M as Y,F as L,a$ as W,aS as T,aQ as X,aR as J,aU as D,aZ as ee,a_ as ae,A as te,aP as S,bw as le}from"./index.14c31bf1.js";import{Q as C}from"./QTooltip.64dc46fc.js";import{Q as ne}from"./QBadge.7e0ccf8f.js";import{Q as oe,a as z}from"./QTable.2f83027a.js";import{Q as se}from"./QPage.d8a8e80e.js";import{_ as ie}from"./DialogConfirm.9f7f99ed.js";import{_ as de,a as re}from"./editDevice.fdfef3b9.js";import{Q as ce}from"./QSelect.7a64608d.js";import{Q as ue}from"./useRules.09f34940.js";import{f as fe,b as H}from"./useBarix.eb54a821.js";import{u as j}from"./useNotify.599b3be0.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";import"./position-engine.841fa4ba.js";import"./QMenu.60765e3e.js";const _e=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"amx",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",align:"center",field:"amx",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],pe=l("div",{class:"dialog-name"},"Q-SYS INFO",-1),ve={class:"caption font-sans"},ge={class:"q-px-md"},he=["href"],ye=["href"],be={class:"q-pl-sm text-black"},we={__name:"infoQsys",props:["device"],emits:[...Z.emits],setup(n,{emit:r}){const{dialogRef:g,onDialogHide:x,onDialogOK:$,onDialogCancel:P}=Z();return(V,Q)=>(b(),q(F,{ref_key:"dialogRef",ref:g,onHide:v(x)},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(A,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>[e(w,{style:{"margin-top":"10px"},name:"img:qsys.svg",size:"1.5rem"}),l("div",null,[pe,l("div",ve,d(n.device.deviceId),1)])]),_:1}),e(A,null,{default:a(()=>[l("div",ge,[e(K,{dense:""},{default:a(()=>[e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(n.device.name),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("IP Address")]),_:1}),e(s,{caption:""},{default:a(()=>[l("a",{href:`http://${n.device.ipaddress}`,target:"_blank"},[t(d(n.device.ipaddress)+" ",1),e(w,{class:"cursor-pointer",name:"launch",color:"primary"})],8,he)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58")]),_:1}),n.device.amx?(b(),q(s,{key:1,caption:""},{default:a(()=>[l("a",{href:`http://${n.device.amx}`,target:"_blank"},[t(d(n.device.amx)+" ",1),e(w,{class:"cursor-pointer",name:"launch",color:"primary"})],8,ye)]),_:1})):(b(),q(s,{key:0,caption:""},{default:a(()=>[t("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C")]),_:1}))]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uC5F0\uACB0 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(n.device.connected),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uCF54\uC5B4 \uD50C\uB7AB\uD3FC")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(n.device.EngineStatus.Platform),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uCF54\uC5B4 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(n.device.EngineStatus.State),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("PA \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(n.device.ZoneStatusConfigure),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uC800\uC7A5\uC18C \uC815\uBCF4(\uB0A8\uC740\uB7C9/\uC804\uCCB4)")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(v(O).humanStorageSize(n.device.storage.free))+" / "+d(v(O).humanStorageSize(n.device.storage.total))+" ",1),l("span",be,d(Math.round(n.device.storage.free/n.device.storage.total*100))+"% \uC5EC\uC720 ",1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(v(B).formatDate(n.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(p,{dense:""},{default:a(()=>[e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(s,{caption:""},{default:a(()=>[t(d(v(B).formatDate(n.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(U,{align:"right"},{default:a(()=>[e(k,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:v($)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};const G=n=>(ee("data-v-2734bc0e"),n=n(),ae(),n),xe={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},ke=G(()=>l("div",null,"\uBC29\uC1A1\uAD6C\uAC04\uC774\uB984 \uC218\uC815",-1)),$e={class:"text-caption"},Qe={class:"table-header-line"},Ie=G(()=>l("thead",null,[l("tr",null,[l("th",{style:{width:"50px"}},"\uC9C0\uC5ED"),l("th",{style:{width:"260px"}},"\uC774\uB984"),l("th",{style:{width:"260px"}},"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD")])],-1)),Se={style:{"text-align":"center",width:"50px"}},Ce={style:{width:"260px"}},De={style:{width:"260px"}},qe={__name:"editZoneSettings",props:["device"],emits:[...Z.emits],setup(n,{emit:r}){const g=n,{dialogRef:x,onDialogCancel:$,onDialogHide:P,onDialogOK:V}=Z(),{fnNotiWarn:Q,fnNotiError:N}=j(),i=E([]),f=E([]),o=(c,h,_)=>{h(()=>{f.value=H.value.filter(y=>y.name.indexOf(c)>-1)})},I=async(c,h)=>{if(c===null)return i.value[h].destination="";const _=i.value.findIndex(u=>u.destination===c);if(h!==-1&&h!==_)return i.value[h].destination="",Q("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.");const y=await D.get("/devices/qsys/existszones",{params:{id:c,deviceId:g.device.deviceId}});if(y.data&&y.data.value&&y.data.value.length)return y.data.value.findIndex(u=>u.deviceId===g.device.deviceId),i.value[h].destination="",Q("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.")};return R(async()=>{await fe(),i.value=[...g.device.ZoneStatus.map(c=>({name:c.name?c.name:"",Zone:c.Zone,destination:c.destination&&c.destination._id?c.destination._id:""}))],f.value=H.value}),(c,h)=>(b(),q(F,{ref_key:"dialogRef",ref:x,onHide:v(P),persistent:""},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px","max-width":"1000px",width:"650px"}},{default:a(()=>[e(A,null,{default:a(()=>[l("div",xe,[e(w,{name:"add_circle",color:"primary",size:"sm"}),l("div",null,[ke,l("div",$e,d(n.device.name)+" "+d(n.device.ipaddress),1)])])]),_:1}),e(ue,{onSubmit:h[0]||(h[0]=_=>v(V)(i.value))},{default:a(()=>[e(A,{class:"row justify-center"},{default:a(()=>[l("table",Qe,[Ie,l("tbody",null,[(b(!0),Y(L,null,W(i.value,(_,y)=>(b(),Y("tr",{key:y},[l("td",Se,d(_.Zone),1),l("td",Ce,[e(T,{filled:"",dense:"",modelValue:_.name,"onUpdate:modelValue":u=>_.name=u,label:`\uCC44\uB110 ${_.Zone}`},null,8,["modelValue","onUpdate:modelValue","label"])]),l("td",De,[e(ce,{filled:"",dense:"",clearable:"",modelValue:_.destination,"onUpdate:modelValue":[u=>_.destination=u,u=>I(u,y)],options:f.value,label:`\uCC44\uB110 ${_.Zone} \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD`,"option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:o},{prepend:a(()=>[e(w,{name:"place"})]),option:a(u=>[e(p,X(J(u.itemProps)),{default:a(()=>[e(m,{avatar:""},{default:a(()=>[e(w,{name:"storage"})]),_:1}),e(m,null,{default:a(()=>[e(s,null,{default:a(()=>[t(d(u.opt.name),1)]),_:2},1024),e(s,{caption:""},{default:a(()=>[t(d(u.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},1032,["modelValue","onUpdate:modelValue","options","label"])])]))),128))])])]),_:1}),e(U,{align:"right"},{default:a(()=>[e(k,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:v($)},null,8,["onClick"]),e(k,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}};var Pe=me(qe,[["__scopeId","data-v-2734bc0e"]]);const Ve={class:"borderd"},ze={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},Ze={class:"row no-wrap items-center q-gutter-x-sm"},Ae=l("div",{class:"font-main"},"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58",-1),Ye=["href"],Ee=["href"],Ne={key:1,class:"text-caption text-grey"},Je={__name:"QsysPage",setup(n){const r=te(),{fnNotiError:g}=j(),x=E(""),$=()=>{r.dialog({component:de,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uCD94\uAC00",type:"qsys"}}).onOk(async i=>{try{r.loading.show(),await D.post("/devices/qsys",{...i})}catch{g({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uCD94\uAC00 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await S(),r.loading.hide()}})},P=i=>{r.dialog({component:we,componentProps:{device:i}})},V=i=>{r.dialog({component:re,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uC218\uC815",type:"qsys",device:i}}).onOk(async f=>{try{r.loading.show(),await D.put("/devices/qsys/edit",{...f})}catch{g({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{S(),r.loading.hide()}})},Q=i=>{r.dialog({component:Pe,componentProps:{device:i}}).onOk(async f=>{try{r.loading.show(),await D.put("/devices/qsys/updatenames",{deviceId:i.deviceId,arr:f})}catch{g({message:"\uBC29\uC1A1\uAD6C\uAC04 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{S(),r.loading.hide()}})},N=i=>{r.dialog({component:ie,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${i.name} ${i.ipaddress}`}}).onOk(async()=>{try{r.loading.show(),await D.delete("/devices/qsys",{data:{...i}}),r.loading.hide()}catch{g({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await S(),r.loading.hide()}})};return R(async()=>{try{r.loading.show(),await S()}catch{}finally{r.loading.hide()}}),(i,f)=>(b(),q(se,{class:"page"},{default:a(()=>[l("div",Ve,[l("div",ze,[l("div",Ze,[e(w,{name:"img:qsys.svg",color:"primary",size:"sm"}),Ae,l("div",null,[e(w,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:$},{default:a(()=>[e(C,null,{default:a(()=>[t("\uC7A5\uCE58 \uCD94\uAC00")]),_:1})]),_:1})])]),e(T,{modelValue:x.value,"onUpdate:modelValue":f[0]||(f[0]=o=>x.value=o),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(w,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(oe,{columns:v(_e),rows:v(le),filter:x.value},{"body-cell-name":a(o=>[e(z,{props:o},{default:a(()=>[l("div",null,[e(ne,{rounded:"",color:o.row.connected?"primary":"red-10"},null,8,["color"]),t(" "+d(o.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":a(o=>[e(z,{props:o},{default:a(()=>[l("a",{href:`http://${o.value}`,target:"_blank"},d(o.value),9,Ye)]),_:2},1032,["props"])]),"body-cell-amx":a(o=>[e(z,{props:o},{default:a(()=>[o.row.amx?(b(),Y("a",{key:0,href:`http://${o.value}`,target:"_blank"},d(o.value),9,Ee)):(b(),Y("div",Ne," \uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C "))]),_:2},1032,["props"])]),"body-cell-actions":a(o=>[e(z,{props:o},{default:a(()=>[l("div",null,[e(k,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:I=>P(o.row)},{default:a(()=>[e(C,null,{default:a(()=>[t("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:I=>V(o.row)},{default:a(()=>[e(C,null,{default:a(()=>[t("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"blue",icon:"edit_note",size:"sm",onClick:I=>Q(o.row)},{default:a(()=>[e(C,null,{default:a(()=>[t("\uBC29\uC1A1\uAD6C\uAC04\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(k,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:I=>N(o.row)},{default:a(()=>[e(C,null,{default:a(()=>[t("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{Je as default};
