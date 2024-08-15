import{aM as U,r as A,o as I,bv as q,y as $,z as x,A as a,j as e,P as M,R as V,B as t,aO as O,bw as B,W as T,aP as R,aQ as L,X as S,S as k,Y,H as r,C as d,ap as Z,aU as j,L as f,D as c,U as E,aL as F,x as G,v as K,aN as W,bx as y,aS as H,by as X,bz as J,bA as b,K as ee,_ as N,O as Q}from"./index.25c773d0.js";import{Q as ae,a as m}from"./QTable.58847fe0.js";import{Q as g}from"./QTooltip.802c6188.js";import{Q as oe}from"./QTr.e7948da3.js";import{Q as ne}from"./QPage.e4ec764d.js";const le=t("div",{class:"q-px-sm dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),te={class:"q-px-md"},se={class:"q-px-sm"},ie={__name:"DialogSelectZones",props:["zones"],emits:[...U.emits],setup(D,{emit:P}){const{dialogRef:p,onDialogOK:h,onDialogCancel:z}=U(),_=D,s=A(null),l=A([]),C=(w,i,n)=>{i(()=>{l.value=q.value.filter(u=>u.name.indexOf(w)>-1)})};return I(()=>{l.value=q.value,_.zones&&_.zones.length>0&&(s.value=_.zones)}),(w,i)=>($(),x(E,{ref_key:"dialogRef",ref:p,persistent:""},{default:a(()=>[e(M,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"0.6rem"}},{default:a(()=>[e(V,null,{default:a(()=>[le]),_:1}),e(V,null,{default:a(()=>[t("div",te,[e(O,{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=n=>s.value=n),options:l.value,filled:"",dense:"",multiple:"",label:"\uBC29\uC1A1\uC9C0\uC5ED\uC120\uD0DD","option-value":"deviceId","option-label":"name","use-chips":"","stack-label":"","use-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:C},B({option:a(n=>[e(T,R(L(n.itemProps)),{default:a(()=>[e(S,{avatar:""},{default:a(()=>[e(k,{name:"storage"})]),_:1}),e(S,null,{default:a(()=>[e(Y,null,{default:a(()=>[r(d(n.opt.name),1)]),_:2},1024),e(Y,{caption:""},{default:a(()=>[r(d(n.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[s.value?{name:"append",fn:a(()=>[e(k,{name:"cancel",size:"18px",onClick:i[0]||(i[0]=Z(n=>s.value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])])]),_:1}),e(j,{align:"right"},{default:a(()=>[t("div",se,[e(f,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:c(z)},null,8,["onClick"]),e(f,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:i[2]||(i[2]=n=>c(h)(s.value))})])]),_:1})]),_:1})]),_:1},512))}},re={class:"borderd"},de={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},ce={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},ue=t("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),me={class:"row items-center q-gutter-x-xs"},fe={style:{"font-size":"0.7rem"}},pe={style:{"font-size":"0.7rem"}},be={__name:"UsersPage",setup(D){const{fnNotiWarn:P,fnNotiError:p}=F(),{fnUserInfo:h,fnDeleteUser:z}=G(),_=[{name:"email",label:"\uC774\uBA54\uC77C",align:"center",field:"email",sortable:!0},{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"\uAD00\uB9AC\uC790",align:"center",field:"isAdmin",sortable:!0},{name:"em",label:"\uAE34\uAE09\uBC29\uC1A1",align:"center",field:"em",sortable:!0},{name:"zones",label:"\uC9C0\uC5ED",align:"center",field:"zones",sortable:!0},{name:"loginAt",label:"\uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"\uAC00\uC785\uC77C",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"\uC124\uC815",align:"center"}],s=A(""),l=K(),C=n=>{if(n.email==="superuser@superuser.com")return P("\uCD5C\uACE0 \uAD00\uB9AC\uC790\uB294 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");l.dialog({component:N,componentProps:{title:"\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAD00\uB9AC\uC790 \uAD8C\uD55C ${n.isAdmin?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{l.loading.show(),await Q.put("/users/admin",{...n}),await y()}catch{p("\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{l.loading.hide()}})},w=n=>{l.dialog({component:N,componentProps:{title:"\uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C ${n.em?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{l.loading.show(),await Q.put("/users",{user:n,update:{em:!n.em}}),await y()}catch{p("\uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{l.loading.hide()}})},i=n=>{l.dialog({component:ie,componentProps:{zones:n.zones}}).onOk(async u=>{try{l.loading.show(),await Q.put("/users",{user:n,update:{zones:u}}),await y()}catch{p("\uC9C0\uC5ED \uC124\uC815\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{l.loading.hide()}})};return I(async()=>{l.loading.show(),await W(),await y(),l.loading.hide()}),(n,u)=>($(),x(ne,{class:"page"},{default:a(()=>[t("div",re,[t("div",de,[t("div",ce,[e(k,{name:"group",color:"primary",size:"md"}),ue]),e(H,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=o=>s.value=o),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(k,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(ae,{columns:_,rows:c(X),filter:s.value,pagination:{rowsPerPage:10}},{body:a(o=>[e(oe,{props:o},{default:a(()=>[e(m,{key:"email",props:o},{default:a(()=>[r(d(o.row.email),1)]),_:2},1032,["props"]),e(m,{key:"name",props:o},{default:a(()=>[r(d(o.row.name),1)]),_:2},1032,["props"]),e(m,{key:"isAdmin",props:o},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:o.row.isAdmin?"check_circle":"block",color:o.row.isAdmin?"primary":"red-10",onClick:v=>C(o.row)},{default:a(()=>[e(g,null,{default:a(()=>[r(d(o.row.isAdmin?"\uC0AC\uC6A9\uC790":"\uAD00\uB9AC\uC790")+"\uB85C \uBCC0\uACBD",1)]),_:2},1024)]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(m,{key:"em",props:o},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:o.row.em?"check_circle":"block",color:o.row.em?"primary":"red-10",onClick:v=>w(o.row)},{default:a(()=>[e(g,null,{default:a(()=>[r(" '\uAE34\uAE09\uBC29\uC1A1' ")]),_:1})]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(m,{key:"zones",props:o},{default:a(()=>[t("div",me,[e(J,{zones:o.row.zones},null,8,["zones"]),e(f,{round:"",flat:"",size:"sm",icon:"edit",color:"primary",onClick:v=>i(o.row)},{default:a(()=>[e(g,null,{default:a(()=>[r("Zone \uC124\uC815")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(m,{key:"loginAt",props:o},{default:a(()=>[t("div",fe,[t("div",null,d(c(b).formatDate(o.row.loginAt,"YYYY-MM-DD")),1),t("div",null,d(c(b).formatDate(o.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(m,{key:"createdAt",props:o},{default:a(()=>[t("div",pe,[t("div",null,d(c(b).formatDate(o.row.createdAt,"YYYY-MM-DD")),1),t("div",null,d(c(b).formatDate(o.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(m,{key:"actions",props:o},{default:a(()=>[t("div",null,[e(f,{flat:"",round:"",color:"primary",icon:"info",size:"sm",onClick:v=>c(h)(o.row)},{default:a(()=>[e(g,null,{default:a(()=>[r("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),o.row.email!=="superuser@superuser.com"?($(),x(f,{key:0,flat:"",round:"",icon:"delete",color:"red-10",size:"sm",onClick:v=>c(z)(o.row)},{default:a(()=>[e(g,null,{default:a(()=>[r("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])):ee("",!0)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1}))}};export{be as default};