import{aE as $,r as b,o as I,br as D,x as C,y as Q,z as a,j as e,N as M,O as q,A as l,bs as S,V as Y,aM as O,aN as B,W as V,S as d,X as N,E as c,B as r,aX as T,aF as F,J as P,C as u,P as R,v as Z,u as E,aR as j,aO as G,bt as L,b2 as v,I as W,M as w}from"./index.568a708f.js";import{Q as X,a as f}from"./QTable.d70111e5.js";import{Q as y}from"./QTooltip.68db7ee9.js";import{Q as J}from"./QTr.8e799559.js";import{Q as K}from"./QPage.f67a53cb.js";import{u as H}from"./useNotify.2c7e2d4a.js";import{Q as ee}from"./QSelect.7a7901d8.js";import{_ as U}from"./DialogConfirm.923d0832.js";import"./QLinearProgress.3dc43b88.js";import"./QMenu.9f8c2a36.js";var ae=[{name:"email",label:"E-mail",align:"center",field:"email",sortable:!0},{name:"name",label:"Name",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"isAdmin",align:"center",field:"isAdmin",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"loginAt",label:"Last login",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"Created at",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"FN",align:"center"}];const oe=l("div",{class:"q-px-sm dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),se={class:"q-px-md"},te={class:"q-px-sm"},ne={__name:"DialogSelectZones",props:["zones"],emits:[...$.emits],setup(x,{emit:A}){const{dialogRef:h,onDialogOK:p,onDialogCancel:g}=$(),t=x,i=b(null),_=b([]),k=(m,s,n)=>{s(()=>{_.value=D.value.filter(o=>o.name.indexOf(m)>-1)})};return I(()=>{_.value=D.value,t.zones&&t.zones.length>0&&(i.value=t.zones)}),(m,s)=>(C(),Q(R,{ref_key:"dialogRef",ref:h,persistent:""},{default:a(()=>[e(M,{class:"q-dialog-plugin",style:{"border-radius":"0.6rem"}},{default:a(()=>[e(q,null,{default:a(()=>[oe]),_:1}),e(q,null,{default:a(()=>[l("div",se,[e(ee,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=n=>i.value=n),options:_.value,filled:"",dense:"",multiple:"",label:"\uBC29\uC1A1\uC9C0\uC5ED\uC120\uD0DD","option-value":"deviceId","option-label":"name","use-chips":"","stack-label":"","use-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:k},S({option:a(n=>[e(Y,O(B(n.itemProps)),{default:a(()=>[e(V,{avatar:""},{default:a(()=>[e(d,{name:"storage"})]),_:1}),e(V,null,{default:a(()=>[e(N,null,{default:a(()=>[c(r(n.opt.name),1)]),_:2},1024),e(N,{caption:""},{default:a(()=>[c(r(n.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[i.value?{name:"append",fn:a(()=>[e(d,{name:"cancel",size:"18px",onClick:s[0]||(s[0]=T(n=>i.value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])])]),_:1}),e(F,{align:"right"},{default:a(()=>[l("div",te,[e(P,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:u(g)},null,8,["onClick"]),e(P,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:s[2]||(s[2]=n=>u(p)(i.value))})])]),_:1})]),_:1})]),_:1},512))}},le={class:"borderd"},re={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-2"},ie={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},de=l("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),ce={class:"row items-center q-gutter-x-xs"},ue={style:{"font-size":"0.7rem"}},me={style:{"font-size":"0.7rem"}},fe={class:"q-gutter-x-sm"},Ce={__name:"UsersPage",setup(x){const{fnNotiWarn:A}=H(),{fnUserInfo:h}=Z(),p=b(""),g=b([]),t=E(),i=s=>{if(s.email==="superuser@superuser.com")return A("\uCD5C\uACE0 \uAD00\uB9AC\uC790\uB294 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");t.dialog({component:U,componentProps:{title:"\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${s.email} \uAD00\uB9AC\uC790 \uAD8C\uD55C ${s.isAdmin?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{t.loading.show(),await w.put("/users/admin",{...s}),await m(),t.loading.hide()}catch(n){t.loading.hide(),console.error(n)}})},_=async s=>{t.dialog({component:U,componentProps:{title:"\uC0AC\uC6A9\uC790 \uC0AD\uC81C",icon:"error",iconColor:"red-10",message:`${s.email} \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{t.loading.show(),await w.delete("/users",{data:{...s}}),await m(),t.loading.hide()}catch(n){t.loading.hide(),console.error(n)}})},k=s=>{t.dialog({component:ne,componentProps:{zones:s.zones}}).onOk(async n=>{try{t.loading.show(),await w.put("/users",{user:s,update:{zones:n}}),await m(),t.loading.hide()}catch(o){t.loading.hide(),console.error(o)}console.log(n)})},m=async()=>{const s=await w.get("/users");g.value=s.data.users};return I(async()=>{t.loading.show(),await j(),await m(),t.loading.hide()}),(s,n)=>(C(),Q(K,{class:"page"},{default:a(()=>[l("div",le,[l("div",re,[l("div",ie,[e(d,{name:"group",color:"primary",size:"md"}),de]),e(G,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=o=>p.value=o),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(d,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(X,{columns:u(ae),rows:g.value,filter:p.value},{body:a(o=>[e(J,{props:o},{default:a(()=>[e(f,{key:"email",props:o},{default:a(()=>[c(r(o.row.email),1)]),_:2},1032,["props"]),e(f,{key:"name",props:o},{default:a(()=>[c(r(o.row.name),1)]),_:2},1032,["props"]),e(f,{key:"isAdmin",props:o},{default:a(()=>[e(d,{class:"cursor-pointer",size:"xs",name:o.row.isAdmin?"check_circle":"block",color:o.row.isAdmin?"primary":"red-10",onClick:z=>i(o.row)},{default:a(()=>[e(y,null,{default:a(()=>[c(r(o.row.isAdmin?"\uC0AC\uC6A9\uC790":"\uAD00\uB9AC\uC790")+"\uB85C \uBCC0\uACBD",1)]),_:2},1024)]),_:2},1032,["name","color","onClick"])]),_:2},1032,["props"]),e(f,{key:"zones",props:o},{default:a(()=>[l("div",ce,[e(L,{zones:o.row.zones},null,8,["zones"]),e(d,{class:"cursor-pointer",size:"xs",name:"edit",color:"primary",onClick:z=>k(o.row)},{default:a(()=>[e(y,null,{default:a(()=>[c("Zone \uC124\uC815")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(f,{key:"loginAt",props:o},{default:a(()=>[l("div",ue,[l("div",null,r(u(v).formatDate(o.row.loginAt,"YYYY-MM-DD")),1),l("div",null,r(u(v).formatDate(o.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(f,{key:"createdAt",props:o},{default:a(()=>[l("div",me,[l("div",null,r(u(v).formatDate(o.row.createdAt,"YYYY-MM-DD")),1),l("div",null,r(u(v).formatDate(o.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(f,{key:"actions",props:o},{default:a(()=>[l("div",fe,[e(d,{class:"cursor-pointer",color:"primary",name:"info",size:"xs",onClick:z=>u(h)(o.row)},{default:a(()=>[e(y,null,{default:a(()=>[c("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),o.row.email!=="superuser@superuser.com"?(C(),Q(d,{key:0,class:"cursor-pointer",name:"delete",color:"red-10",size:"xs",onClick:z=>_(o.row)},{default:a(()=>[e(y,null,{default:a(()=>[c("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])):W("",!0)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter"])])]),_:1}))}};export{Ce as default};
