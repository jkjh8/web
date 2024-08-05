import{az as q,r as $,o as I,bz as V,y,z as h,A as a,j as e,O as M,P as U,B as t,bA as O,V as T,aS as R,aT as G,W as S,R as g,X as B,G as d,C as u,aP as Z,aA as j,K as f,D as s,S as E,aQ as F,x as K,v as W,aR as J,bB as v,J as N,aV as L,bC as X,bD as H,bE as b,N as x}from"./index.ef6cc54e.js";import{Q as p}from"./QTooltip.2b01887b.js";import{Q as ee,a as m}from"./QTable.18858d55.js";import{Q as ae}from"./QTr.fe5a3b85.js";import{Q as oe}from"./QPage.8a30b0ac.js";import{u as ne,b as le,d as te}from"./useBackup.1c91c58d.js";import{Q as se}from"./QSelect.ab11255d.js";import{_ as Y}from"./DialogConfirm.31a7aded.js";import"./position-engine.f054ac5e.js";import"./QMenu.31f50568.js";var ie=[{name:"email",label:"\uC774\uBA54\uC77C",align:"center",field:"email",sortable:!0},{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"\uAD00\uB9AC\uC790",align:"center",field:"isAdmin",sortable:!0},{name:"em",label:"\uAE34\uAE09\uBC29\uC1A1",align:"center",field:"em",sortable:!0},{name:"zones",label:"\uC9C0\uC5ED",align:"center",field:"zones",sortable:!0},{name:"loginAt",label:"\uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"\uAC00\uC785\uC77C",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"\uC124\uC815",align:"center"}];const re=t("div",{class:"q-px-sm dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),ce={class:"q-px-md"},de={class:"q-px-sm"},ue={__name:"DialogSelectZones",props:["zones"],emits:[...q.emits],setup(D,{emit:P}){const{dialogRef:z,onDialogOK:C,onDialogCancel:Q}=q(),_=D,i=$(null),l=$([]),A=(w,r,n)=>{r(()=>{l.value=V.value.filter(c=>c.name.indexOf(w)>-1)})};return I(()=>{l.value=V.value,_.zones&&_.zones.length>0&&(i.value=_.zones)}),(w,r)=>(y(),h(E,{ref_key:"dialogRef",ref:z,persistent:""},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"0.6rem"}},{default:a(()=>[e(U,null,{default:a(()=>[re]),_:1}),e(U,null,{default:a(()=>[t("div",ce,[e(se,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=n=>i.value=n),options:l.value,filled:"",dense:"",multiple:"",label:"\uBC29\uC1A1\uC9C0\uC5ED\uC120\uD0DD","option-value":"deviceId","option-label":"name","use-chips":"","stack-label":"","use-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:A},O({option:a(n=>[e(T,R(G(n.itemProps)),{default:a(()=>[e(S,{avatar:""},{default:a(()=>[e(g,{name:"storage"})]),_:1}),e(S,null,{default:a(()=>[e(B,null,{default:a(()=>[d(u(n.opt.name),1)]),_:2},1024),e(B,{caption:""},{default:a(()=>[d(u(n.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[i.value?{name:"append",fn:a(()=>[e(g,{name:"cancel",size:"18px",onClick:r[0]||(r[0]=Z(n=>i.value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])])]),_:1}),e(j,{align:"right"},{default:a(()=>[t("div",de,[e(f,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(Q)},null,8,["onClick"]),e(f,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:r[2]||(r[2]=n=>s(C)(i.value))})])]),_:1})]),_:1})]),_:1},512))}},me={class:"borderd"},fe={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},pe={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},_e=t("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),ge={class:"row items-center q-gutter-x-xs"},we={style:{"font-size":"0.7rem"}},ke={style:{"font-size":"0.7rem"}},De={__name:"UsersPage",setup(D){const{fnNotiWarn:P}=F(),{fnUserInfo:z,fnDeleteUser:C}=K(),{fnGetBackupSettings:Q,fnUserBackup:_}=ne(),i=$(""),l=W(),A=n=>{if(n.email==="superuser@superuser.com")return P("\uCD5C\uACE0 \uAD00\uB9AC\uC790\uB294 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");l.dialog({component:Y,componentProps:{title:"\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAD00\uB9AC\uC790 \uAD8C\uD55C ${n.isAdmin?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{l.loading.show(),await x.put("/users/admin",{...n}),await v(),l.loading.hide()}catch(c){l.loading.hide(),console.error(c)}})},w=n=>{l.dialog({component:Y,componentProps:{title:"\uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C ${n.em?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{l.loading.show(),await x.put("/users",{user:n,update:{em:!n.em}}),await v(),l.loading.hide()}catch(c){l.loading.hide(),console.error(c)}})},r=n=>{l.dialog({component:ue,componentProps:{zones:n.zones}}).onOk(async c=>{try{l.loading.show(),await x.put("/users",{user:n,update:{zones:c}}),await v(),l.loading.hide()}catch(o){l.loading.hide(),console.error(o)}})};return I(async()=>{l.loading.show(),await J(),await v(),await Q(),l.loading.hide()}),(n,c)=>(y(),h(oe,{class:"page"},{default:a(()=>[t("div",me,[t("div",fe,[t("div",pe,[e(g,{name:"group",color:"primary",size:"md"}),_e,s(le)==="Normal"&&s(te)?(y(),h(g,{key:0,class:"cursor-pointer q-mx-md",name:"backup",color:"blue-grey",size:"xs",onClick:s(_)},{default:a(()=>[e(p,null,{default:a(()=>[d("\uC0AC\uC6A9\uC790 \uBC31\uC5C5")]),_:1})]),_:1},8,["onClick"])):N("",!0)]),e(L,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=o=>i.value=o),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(g,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(ee,{columns:s(ie),rows:s(X),filter:i.value,pagination:{rowsPerPage:10}},{body:a(o=>[e(ae,{props:o},{default:a(()=>[e(m,{key:"email",props:o},{default:a(()=>[d(u(o.row.email),1)]),_:2},1032,["props"]),e(m,{key:"name",props:o},{default:a(()=>[d(u(o.row.name),1)]),_:2},1032,["props"]),e(m,{key:"isAdmin",props:o},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:o.row.isAdmin?"check_circle":"block",color:o.row.isAdmin?"primary":"red-10",onClick:k=>A(o.row)},{default:a(()=>[e(p,null,{default:a(()=>[d(u(o.row.isAdmin?"\uC0AC\uC6A9\uC790":"\uAD00\uB9AC\uC790")+"\uB85C \uBCC0\uACBD",1)]),_:2},1024)]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(m,{key:"em",props:o},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:o.row.em?"check_circle":"block",color:o.row.em?"primary":"red-10",onClick:k=>w(o.row)},{default:a(()=>[e(p,null,{default:a(()=>[d(" '\uAE34\uAE09\uBC29\uC1A1' ")]),_:1})]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(m,{key:"zones",props:o},{default:a(()=>[t("div",ge,[e(H,{zones:o.row.zones},null,8,["zones"]),e(f,{round:"",flat:"",size:"sm",icon:"edit",color:"primary",onClick:k=>r(o.row)},{default:a(()=>[e(p,null,{default:a(()=>[d("Zone \uC124\uC815")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(m,{key:"loginAt",props:o},{default:a(()=>[t("div",we,[t("div",null,u(s(b).formatDate(o.row.loginAt,"YYYY-MM-DD")),1),t("div",null,u(s(b).formatDate(o.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(m,{key:"createdAt",props:o},{default:a(()=>[t("div",ke,[t("div",null,u(s(b).formatDate(o.row.createdAt,"YYYY-MM-DD")),1),t("div",null,u(s(b).formatDate(o.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(m,{key:"actions",props:o},{default:a(()=>[t("div",null,[e(f,{flat:"",round:"",color:"primary",icon:"info",size:"sm",onClick:k=>s(z)(o.row)},{default:a(()=>[e(p,null,{default:a(()=>[d("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),o.row.email!=="superuser@superuser.com"?(y(),h(f,{key:0,flat:"",round:"",icon:"delete",color:"red-10",size:"sm",onClick:k=>s(C)(o.row)},{default:a(()=>[e(p,null,{default:a(()=>[d("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])):N("",!0)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{De as default};
