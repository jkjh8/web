import{aT as A,r as Q,o as E,a0 as T,y as V,z as q,A as a,j as e,P as R,R as P,B as o,aU as Z,bw as G,W as L,aV as H,aW as X,X as B,S as w,Y as N,H as g,C as v,aR as J,aZ as Y,L as f,D as u,U as I,aY as M,bf as ee,bg as ae,O as $,bx as le,aS as oe,x as te,v as ne,c as se,by as U,a1 as ie,bz as z,bA as re,bB as S,K as de,M as ue,_ as K}from"./index.d16b558b.js";import{Q as h}from"./QTooltip.9f8a0e29.js";import{Q as ce,a as y}from"./QTable.63998859.js";import{Q as me}from"./QTr.3b604370.js";import{Q as pe}from"./QPagination.c48a53e3.js";import{Q as fe}from"./QPage.2517a65d.js";import{Q as j}from"./QForm.1c12fa0e.js";const _e=o("div",{class:"q-px-sm dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),ge={class:"q-px-md"},ve={class:"q-px-sm"},ye={__name:"DialogSelectZones",props:["zones"],emits:[...A.emits],setup(x,{emit:D}){const{dialogRef:p,onDialogOK:b,onDialogCancel:k}=A(),m=x,i=Q(null),t=Q([]),r=(d,c,_)=>{c(()=>{t.value=T.value.filter(O=>O.name.indexOf(d)>-1)})};return E(()=>{t.value=T.value,m.zones&&m.zones.length>0&&(i.value=m.zones)}),(d,c)=>(V(),q(I,{ref_key:"dialogRef",ref:p,persistent:""},{default:a(()=>[e(R,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"0.6rem"}},{default:a(()=>[e(P,null,{default:a(()=>[_e]),_:1}),e(P,null,{default:a(()=>[o("div",ge,[e(Z,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=_=>i.value=_),options:t.value,filled:"",dense:"",multiple:"",label:"\uBC29\uC1A1\uC9C0\uC5ED\uC120\uD0DD","option-value":"deviceId","option-label":"name","use-chips":"","stack-label":"","use-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:r},G({option:a(_=>[e(L,H(X(_.itemProps)),{default:a(()=>[e(B,{avatar:""},{default:a(()=>[e(w,{name:"storage"})]),_:1}),e(B,null,{default:a(()=>[e(N,null,{default:a(()=>[g(v(_.opt.name),1)]),_:2},1024),e(N,{caption:""},{default:a(()=>[g(v(_.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[i.value?{name:"append",fn:a(()=>[e(w,{name:"cancel",size:"18px",onClick:c[0]||(c[0]=J(_=>i.value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])])]),_:1}),e(Y,{align:"right"},{default:a(()=>[o("div",ve,[e(f,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:u(k)},null,8,["onClick"]),e(f,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:c[2]||(c[2]=_=>u(b)(i.value))})])]),_:1})]),_:1})]),_:1},512))}},we={class:"row no-wrap items-center q-gutter-x-md"},be=o("div",null,[o("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uC774\uBA54\uC77C \uBCC0\uACBD"),o("div",{class:"caption"},"\uBCC0\uACBD\uD560 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694")],-1),ke={class:"q-px-md"},he={__name:"DialogChangeEmail",props:["user"],emits:[...A.emits],setup(x,{emit:D}){const{dialogRef:p,onDialogOK:b,onDialogCancel:k}=A(),m=x,i=async r=>{const{data:d}=await $.get("/auth/exists_email",{params:{email:r}});return d&&d.user&&d.user._id!==m.user._id?"\uC774\uBBF8 \uC0AC\uC6A9\uC911\uC778 \uC774\uBA54\uC77C \uC785\uB2C8\uB2E4.":!0},t=Q("");return E(()=>{m.user&&(t.value=m.user.email)}),(r,d)=>(V(),q(I,{ref_key:"dialogRef",ref:p},{default:a(()=>[e(R,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(P,null,{default:a(()=>[o("div",we,[e(w,{name:"timer",color:"primary",size:"sm"}),be])]),_:1}),e(j,{onSubmit:d[1]||(d[1]=c=>u(b)(t.value))},{default:a(()=>[e(P,null,{default:a(()=>[o("div",ke,[e(M,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=c=>t.value=c),filled:"",dense:"",label:"\uC0AC\uC6A9\uC790 E-mail \uBCC0\uACBD",rules:[u(ee),u(ae),i]},null,8,["modelValue","rules"])])]),_:1}),e(Y,{align:"right"},{default:a(()=>[e(f,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:u(k)},null,8,["onClick"]),e(f,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},512))}},xe={class:"row no-wrap items-center q-gutter-x-md"},Ce=o("div",null,[o("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uC811\uC18D\uC8FC\uC18C \uBCC0\uACBD"),o("div",{class:"caption"},"\uBCC0\uACBD\uD560 \uC811\uC18D\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694")],-1),ze={class:"q-px-md"},$e={__name:"DialogEditPermitAddress",props:["user"],emits:[...A.emits],setup(x,{emit:D}){const{dialogRef:p,onDialogOK:b,onDialogCancel:k}=A(),m=x,i=Q("");return E(()=>{m.user&&(i.value=m.user.permitAddress)}),(t,r)=>(V(),q(I,{ref_key:"dialogRef",ref:p},{default:a(()=>[e(R,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[e(P,null,{default:a(()=>[o("div",xe,[e(w,{name:"timer",color:"primary",size:"sm"}),Ce])]),_:1}),e(j,{onSubmit:r[1]||(r[1]=d=>u(b)(i.value))},{default:a(()=>[e(P,null,{default:a(()=>[o("div",ze,[e(M,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=d=>i.value=d),filled:"",dense:"",label:"\uC0AC\uC6A9\uC790 \uC811\uC18D \uC8FC\uC18C \uBCC0\uACBD",rules:[u(le)]},null,8,["modelValue","rules"])])]),_:1}),e(Y,{align:"right"},{default:a(()=>[e(f,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:u(k)},null,8,["onClick"]),e(f,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",type:"submit"})]),_:1})]),_:1})]),_:1})]),_:1},512))}},Ae={class:"borderd"},Qe={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},Pe={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},Ve=o("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),qe={class:"row items-center q-gutter-x-xs"},De={style:{"font-size":"0.7rem"}},Ue={style:{"font-size":"0.7rem"}},Se={class:"row justify-center q-py-md",style:{position:"relative"}},Ee={class:"row items-center q-px-md",style:{position:"absolute",right:"0",top:"1px","font-size":"0.8rem"}},Oe=o("span",null,"\uD398\uC774\uC9C0\uB2F9 \uD45C\uC2DC",-1),Ke={__name:"UsersPage",setup(x){const{fnNotiWarn:D,fnNotiError:p}=oe(),{fnUserInfo:b,fnDeleteUser:k}=te(),m=[{name:"email",label:"\uC774\uBA54\uC77C",align:"center",field:"email",sortable:!0},{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"\uAD00\uB9AC\uC790",align:"center",field:"isAdmin",sortable:!0},{name:"em",label:"\uAE34\uAE09\uBC29\uC1A1",align:"center",field:"em",sortable:!0},{name:"zones",label:"\uC9C0\uC5ED",align:"center",field:"zones",sortable:!0},{name:"permitAddress",label:"\uC811\uC18D\uC8FC\uC18C",align:"center",field:"permitAddress",sortable:!0},{name:"loginAt",label:"\uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"\uAC00\uC785\uC77C",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"\uC124\uC815",align:"center"}],i=Q(""),t=ne(),r=Q({sortBy:"",descending:!1,page:1,rowsPerPage:10}),d=se(()=>U.value&&U.value.length>0?Math.ceil(U.value.length/r.value.rowsPerPage):1),c=n=>{if(n.email==="superuser@superuser.com")return D("\uCD5C\uACE0 \uAD00\uB9AC\uC790\uB294 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");t.dialog({component:K,componentProps:{title:"\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAD00\uB9AC\uC790 \uAD8C\uD55C ${n.isAdmin?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{t.loading.show(),await $.put("/users/admin",{...n}),await z()}catch{p("\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{t.loading.hide()}})},_=n=>{t.dialog({component:K,componentProps:{title:"\uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${n.email} \uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C ${n.em?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{t.loading.show(),await $.put("/users",{user:n,update:{em:!n.em}}),await z()}catch{p("\uAE34\uAE09\uBC29\uC1A1 \uAD8C\uD55C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{t.loading.hide()}})},O=n=>{t.dialog({component:ye,componentProps:{zones:n.zones}}).onOk(async s=>{try{t.loading.show(),await $.put("/users",{user:n,update:{zones:s}}),await z()}catch{p("\uC9C0\uC5ED \uC124\uC815\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{t.loading.hide()}})},F=n=>{t.dialog({component:he,componentProps:{user:n}}).onOk(async s=>{try{if(n.email===s)return;t.loading.show(),await $.put("/users/email",{id:n._id,oldEmail:n.email,newEmail:s}),await z()}catch{p("\uC774\uBA54\uC77C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{t.loading.hide()}})},W=n=>{t.dialog({component:$e,componentProps:{user:n}}).onOk(async s=>{try{if(n.permitAddress===s)return;t.loading.show(),await $.put("/users",{user:n,update:{permitAddress:s}}),await z()}catch{p("\uC811\uC18D\uC8FC\uC18C \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4")}finally{t.loading.hide()}})};return E(async()=>{t.loading.show(),await ie(),await z(),t.loading.hide()}),(n,s)=>(V(),q(fe,{class:"page"},{default:a(()=>[o("div",Ae,[o("div",Qe,[o("div",Pe,[e(w,{name:"group",color:"primary",size:"md"}),Ve]),e(M,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=l=>i.value=l),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[e(w,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),e(ce,{columns:m,rows:u(U),filter:i.value,pagination:r.value,"onUpdate:pagination":s[1]||(s[1]=l=>r.value=l),"hide-pagination":"",flat:""},{body:a(l=>[e(me,{props:l},{default:a(()=>[e(y,{key:"email",props:l,class:"q-gutter-x-xs"},{default:a(()=>[o("span",null,v(l.row.email),1),o("span",null,[e(w,{name:"edit",color:"primary",class:"cursor-pointer",onClick:C=>F(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g("\uC774\uBA54\uC77C \uBCC0\uACBD")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(y,{key:"name",props:l},{default:a(()=>[g(v(l.row.name),1)]),_:2},1032,["props"]),e(y,{key:"isAdmin",props:l},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:l.row.isAdmin?"check_circle":"block",color:l.row.isAdmin?"primary":"red-10",onClick:C=>c(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g(v(l.row.isAdmin?"\uC0AC\uC6A9\uC790":"\uAD00\uB9AC\uC790")+"\uB85C \uBCC0\uACBD",1)]),_:2},1024)]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(y,{key:"em",props:l},{default:a(()=>[e(f,{round:"",flat:"",size:"sm",icon:l.row.em?"check_circle":"block",color:l.row.em?"primary":"red-10",onClick:C=>_(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g(" '\uAE34\uAE09\uBC29\uC1A1' ")]),_:1})]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),e(y,{key:"zones",props:l},{default:a(()=>[o("div",qe,[e(re,{zones:l.row.zones},null,8,["zones"]),e(f,{round:"",flat:"",size:"sm",icon:"edit",color:"primary",onClick:C=>O(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g("Zone \uC124\uC815")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(y,{key:"permitAddress",props:l,class:"q-gutter-x-xs"},{default:a(()=>[o("span",null,v(l.row.permitAddress),1),o("span",null,[e(w,{name:"edit",color:"primary",class:"cursor-pointer",onClick:C=>W(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g("\uC811\uC18D\uC8FC\uC18C \uBCC0\uACBD")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),e(y,{key:"loginAt",props:l},{default:a(()=>[o("div",De,[o("div",null,v(u(S).formatDate(l.row.loginAt,"YYYY-MM-DD")),1),o("div",null,v(u(S).formatDate(l.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(y,{key:"createdAt",props:l},{default:a(()=>[o("div",Ue,[o("div",null,v(u(S).formatDate(l.row.createdAt,"YYYY-MM-DD")),1),o("div",null,v(u(S).formatDate(l.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),e(y,{key:"actions",props:l},{default:a(()=>[o("div",null,[e(f,{flat:"",round:"",color:"primary",icon:"info",size:"sm",onClick:C=>u(b)(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),l.row.email!=="superuser@superuser.com"?(V(),q(f,{key:0,flat:"",round:"",icon:"delete",color:"red-10",size:"sm",onClick:C=>u(k)(l.row)},{default:a(()=>[e(h,null,{default:a(()=>[g("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])):de("",!0)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter","pagination"]),e(ue),o("div",Se,[e(pe,{modelValue:r.value.page,"onUpdate:modelValue":s[2]||(s[2]=l=>r.value.page=l),max:d.value,"max-pages":8,size:"12px",flat:"","active-design":"outline","direction-links":"","boundary-links":""},null,8,["modelValue","max"]),o("div",Ee,[Oe,e(Z,{style:{"font-size":"0.8rem"},borderless:"","item-aligned":"",dense:"","hide-bottom-space":"","map-options":"",modelValue:r.value.rowsPerPage,"onUpdate:modelValue":s[3]||(s[3]=l=>r.value.rowsPerPage=l),options:[5,10,15,20,25,30,40,50]},null,8,["modelValue"])])])])]),_:1}))}};export{Ke as default};