import{ay as Z,y,z as q,A as a,j as e,N as U,O as A,P as b,B as l,C as i,S as K,U as _,V as f,W as s,G as n,D as p,bw as Y,bC as E,az as F,K as x,R as H,aP as M,r as B,o as T,aQ as L,aS as R,I as N,F as W,b3 as X,aV as j,aT as J,aU as ee,aX as D,b1 as ae,b2 as te,v as ne,aR as C,bz as le,aZ as oe}from"./index.ba7deedd.js";import{Q}from"./QTooltip.56cf20f4.js";import{Q as se}from"./QBadge.ce656aac.js";import{Q as ie,a as V}from"./QTable.975a363f.js";import{Q as de}from"./QPage.3b454e39.js";import{_ as ce}from"./DialogConfirm.65e7926b.js";import{_ as re,a as ue}from"./editDevice.881afd46.js";import{Q as fe}from"./QSelect.95b6493d.js";import{Q as me}from"./QForm.7ebc73ed.js";import{_ as _e}from"./plugin-vue_export-helper.21dcd24c.js";import"./position-engine.f18252ad.js";import"./useRules.e9a23c19.js";import"./QMenu.467704b2.js";const pe=[{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"deviceId",label:"Device ID",align:"center",field:"deviceId",sortable:!0},{name:"ipaddress",label:"IP Address",align:"center",field:"ipaddress",sortable:!0},{name:"amx",label:"\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58",align:"center",field:"amx",sortable:!0},{name:"actions",label:"\uAE30\uB2A5",align:"center"}],ve=l("div",{class:"dialog-name"},"Q-SYS INFO",-1),ge={class:"caption font-sans"},he={class:"q-px-md"},ye=["href"],be=["href"],we={class:"q-pl-sm text-black"},xe={__name:"infoQsys",props:["device"],emits:[...Z.emits],setup(o,{emit:c}){const{dialogRef:k,onDialogHide:w,onDialogOK:$,onDialogCancel:z}=Z();return(P,I)=>(y(),q(H,{ref_key:"dialogRef",ref:k,onHide:p(w)},{default:a(()=>[e(U,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(A,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>[e(b,{style:{"margin-top":"10px"},name:"img:qsys.svg",size:"1.5rem"}),l("div",null,[ve,l("div",ge,i(o.device.deviceId),1)])]),_:1}),e(A,null,{default:a(()=>[l("div",he,[e(K,{dense:""},{default:a(()=>[e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uC7A5\uCE58 \uC774\uB984")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(o.device.name),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("IP Address")]),_:1}),e(s,{caption:""},{default:a(()=>[l("a",{href:`http://${o.device.ipaddress}`,target:"_blank"},[n(i(o.device.ipaddress)+" ",1),e(b,{class:"cursor-pointer",name:"launch",color:"primary"})],8,ye)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58")]),_:1}),o.device.amx?(y(),q(s,{key:1,caption:""},{default:a(()=>[l("a",{href:`http://${o.device.amx}`,target:"_blank"},[n(i(o.device.amx)+" ",1),e(b,{class:"cursor-pointer",name:"launch",color:"primary"})],8,be)]),_:1})):(y(),q(s,{key:0,caption:""},{default:a(()=>[n("\uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C")]),_:1}))]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uC5F0\uACB0 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(o.device.connected),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uCF54\uC5B4 \uD50C\uB7AB\uD3FC")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(o.device.EngineStatus.Platform),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uCF54\uC5B4 \uC0C1\uD0DC")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(o.device.EngineStatus.State),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("PA \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(o.device.ZoneStatusConfigure),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uC800\uC7A5\uC18C \uC815\uBCF4(\uB0A8\uC740\uB7C9/\uC804\uCCB4)")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(p(Y).humanStorageSize(o.device.storage.free))+" / "+i(p(Y).humanStorageSize(o.device.storage.total))+" ",1),l("span",we,i(Math.round(o.device.storage.free/o.device.storage.total*100))+"% \uC5EC\uC720 ",1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(p(E).formatDate(o.device.updatedAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1}),e(_,{dense:""},{default:a(()=>[e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n("\uC7A5\uCE58 \uB4F1\uB85D \uC2DC\uAC04")]),_:1}),e(s,{caption:""},{default:a(()=>[n(i(p(E).formatDate(o.device.createdAt,"YYYY-MM-DD hh:mm:ss A")),1)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(F,{align:"right"},{default:a(()=>[e(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:p($)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};const G=o=>(ae("data-v-2734bc0e"),o=o(),te(),o),ke={class:"dialog-name row no-wrap items-center q-gutter-x-sm"},$e=G(()=>l("div",null,"\uBC29\uC1A1\uAD6C\uAC04\uC774\uB984 \uC218\uC815",-1)),Qe={class:"text-caption"},Ie={class:"table-header-line"},Se=G(()=>l("thead",null,[l("tr",null,[l("th",{style:{width:"50px"}},"\uC9C0\uC5ED"),l("th",{style:{width:"260px"}},"\uC774\uB984"),l("th",{style:{width:"260px"}},"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD")])],-1)),Ce={style:{"text-align":"center",width:"50px"}},De={style:{width:"260px"}},qe={style:{width:"260px"}},ze={__name:"editZoneSettings",props:["device"],emits:[...Z.emits],setup(o,{emit:c}){const k=o,{dialogRef:w,onDialogCancel:$,onDialogHide:z,onDialogOK:P}=Z(),{fnNotiWarn:I,fnNotiError:O}=M(),g=B([]),S=B([]),d=(t,r,m)=>{r(()=>{S.value=R.value.filter(h=>h.name.indexOf(t)>-1)})},v=async(t,r)=>{if(t===null)return g.value[r].destination="";const m=g.value.findIndex(u=>u.destination===t);if(r!==-1&&r!==m)return g.value[r].destination="",I("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.");const h=await D.get("/devices/qsys/existszones",{params:{id:t,deviceId:k.device.deviceId}});if(h.data&&h.data.value&&h.data.value.length)return h.data.value.findIndex(u=>u.deviceId===k.device.deviceId),g.value[r].destination="",I("\uC774\uBBF8 \uC120\uD0DD\uB41C \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30\uC785\uB2C8\uB2E4.")};return T(async()=>{await L(),g.value=[...k.device.ZoneStatus.map(t=>({name:t.name?t.name:"",Zone:t.Zone,destination:t.destination&&t.destination._id?t.destination._id:""}))],S.value=R.value}),(t,r)=>(y(),q(H,{ref_key:"dialogRef",ref:w,onHide:p(z),persistent:""},{default:a(()=>[e(U,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px","max-width":"1000px",width:"650px"}},{default:a(()=>[e(A,null,{default:a(()=>[l("div",ke,[e(b,{name:"add_circle",color:"primary",size:"sm"}),l("div",null,[$e,l("div",Qe,i(o.device.name)+" "+i(o.device.ipaddress),1)])])]),_:1}),e(me,{onSubmit:r[0]||(r[0]=m=>p(P)(g.value))},{default:a(()=>[e(A,{class:"row justify-center"},{default:a(()=>[l("table",Ie,[Se,l("tbody",null,[(y(!0),N(W,null,X(g.value,(m,h)=>(y(),N("tr",{key:h},[l("td",Ce,i(m.Zone),1),l("td",De,[e(j,{filled:"",dense:"",modelValue:m.name,"onUpdate:modelValue":u=>m.name=u,label:`\uCC44\uB110 ${m.Zone}`},null,8,["modelValue","onUpdate:modelValue","label"])]),l("td",qe,[e(fe,{filled:"",dense:"",clearable:"",modelValue:m.destination,"onUpdate:modelValue":[u=>m.destination=u,u=>v(u,h)],options:S.value,label:`\uCC44\uB110 ${m.Zone} \uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD`,"option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:d},{prepend:a(()=>[e(b,{name:"place"})]),option:a(u=>[e(_,J(ee(u.itemProps)),{default:a(()=>[e(f,{avatar:""},{default:a(()=>[e(b,{name:"storage"})]),_:1}),e(f,null,{default:a(()=>[e(s,null,{default:a(()=>[n(i(u.opt.name),1)]),_:2},1024),e(s,{caption:""},{default:a(()=>[n(i(u.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},1032,["modelValue","onUpdate:modelValue","options","label"])])]))),128))])])]),_:1}),e(F,{align:"right"},{default:a(()=>[e(x,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:p($)},null,8,["onClick"]),e(x,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}};var Pe=_e(ze,[["__scopeId","data-v-2734bc0e"]]);const Ve={class:"borderd"},Ze={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},Ae={class:"row no-wrap items-center q-gutter-x-sm"},Ne=l("div",{class:"font-main"},"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58",-1),Be=["href"],Oe=["href"],Ye={key:1,class:"text-caption text-grey"},Je={__name:"QsysPage",setup(o){const c=ne(),{fnNotiInfo:k,fnNotiError:w}=M(),$=B(""),z=()=>{c.dialog({component:re,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uCD94\uAC00",type:"qsys"}}).onOk(async d=>{try{c.loading.show(),await D.post("/devices/qsys",{...d})}catch{w({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uCD94\uAC00 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await C(),c.loading.hide()}})},P=d=>{c.dialog({component:xe,componentProps:{device:d}})},I=d=>{c.dialog({component:ue,componentProps:{title:"\uC5C5\uBB34\uBC29\uC1A1\uC8FC\uC7A5\uCE58 \uC218\uC815",type:"qsys",device:d}}).onOk(async v=>{try{c.loading.show(),await D.put("/devices/qsys/edit",{...v})}catch{w({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{C(),c.loading.hide()}})},O=d=>{c.dialog({component:Pe,componentProps:{device:d}}).onOk(async v=>{try{c.loading.show(),await D.put("/devices/qsys/updatenames",{deviceId:d.deviceId,arr:v})}catch{w({message:"\uBC29\uC1A1\uAD6C\uAC04 \uC218\uC815 \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{C(),c.loading.hide()}})},g=d=>{k(`${d.name}\uC758 \uC804\uCCB4 \uC124\uC815 \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),oe("zone:set:device",{...d})},S=d=>{c.dialog({component:ce,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C",message:`${d.name} ${d.ipaddress}`}}).onOk(async()=>{try{c.loading.show(),await D.delete("/devices/qsys",{data:{...d}}),c.loading.hide()}catch{w({message:"\uC5C5\uBB34\uBC29\uC1A1 \uC8FC\uC7A5\uCE58 \uC0AD\uC81C \uC624\uB958",caption:"\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."})}finally{await C(),c.loading.hide()}})};return T(async()=>{try{c.loading.show(),await C()}catch{}finally{c.loading.hide()}}),(d,v)=>(y(),q(de,{class:"page"},{default:a(()=>[l("div",Ve,[l("div",Ze,[l("div",Ae,[e(b,{name:"img:qsys.svg",color:"primary",size:"sm"}),Ne,l("div",null,[e(b,{class:"cursor-pointer",name:"add_circle",size:"sm",color:"primary",onClick:z},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uC7A5\uCE58 \uCD94\uAC00")]),_:1})]),_:1})])]),e(j,{modelValue:$.value,"onUpdate:modelValue":v[0]||(v[0]=t=>$.value=t),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(b,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(ie,{columns:p(pe),rows:p(le),filter:$.value},{"body-cell-name":a(t=>[e(V,{props:t},{default:a(()=>[l("div",null,[e(se,{rounded:"",color:t.row.connected?"primary":"red-10"},null,8,["color"]),n(" "+i(t.value),1)])]),_:2},1032,["props"])]),"body-cell-ipaddress":a(t=>[e(V,{props:t},{default:a(()=>[l("a",{href:`http://${t.value}`,target:"_blank"},i(t.value),9,Be)]),_:2},1032,["props"])]),"body-cell-amx":a(t=>[e(V,{props:t},{default:a(()=>[t.row.amx?(y(),N("a",{key:0,href:`http://${t.value}`,target:"_blank"},i(t.value),9,Oe)):(y(),N("div",Ye," \uD1B5\uD569\uC81C\uC5B4 \uC8FC\uC7A5\uCE58 \uC5C6\uC74C "))]),_:2},1032,["props"])]),"body-cell-actions":a(t=>[e(V,{props:t},{default:a(()=>[l("div",null,[e(x,{round:"",flat:"",color:"primary",icon:"info",size:"sm",onClick:r=>P(t.row)},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e(x,{round:"",flat:"",color:"primary",icon:"edit",size:"sm",onClick:r=>I(t.row)},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(x,{round:"",flat:"",color:"blue",icon:"edit_note",size:"sm",onClick:r=>O(t.row)},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uBC29\uC1A1\uAD6C\uAC04\uC218\uC815")]),_:1})]),_:2},1032,["onClick"]),e(x,{round:"",flat:"",color:"primary",icon:"refresh",size:"sm",onClick:r=>g(t.row)},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uC7AC\uC124\uC815")]),_:1})]),_:2},1032,["onClick"]),e(x,{round:"",flat:"",color:"red-10",icon:"delete",size:"sm",onClick:r=>S(t.row)},{default:a(()=>[e(Q,null,{default:a(()=>[n("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{Je as default};
