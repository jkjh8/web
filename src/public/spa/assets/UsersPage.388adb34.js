import{c as U,aQ as x,D as w,K as A,F as M,aO as F,j as o,G as a,R as h,N as d,r as Q,o as P,E as Y,U as N,W as D,H as l,bj as O,Q as _,bk as S,aH as B,aI as L,aF as R,M as C,I as g,V as T,A as Z,aL as j,Y as k,aJ as E}from"./index.0b79a79b.js";import{Q as u}from"./QTd.6a55c5b0.js";import{Q as G}from"./QTr.78b5909c.js";import{Q as H}from"./QTable.05786466.js";import{Q as K}from"./QPage.deeb2a65.js";import{d as z}from"./date.1ec85c53.js";import{d as J,Q as W,a as X,b as $,c as q}from"./QSelect.a4a4b107.js";import{u as I}from"./use-dialog-plugin-component.8a73145c.js";import{_ as V}from"./dialogConfirm.6f422389.js";import"./QLinearProgress.3d79d0c0.js";import"./format.cbf00d5d.js";import"./QMenu.6c53ffba.js";const ee={__name:"userZone",props:["zones"],setup(y){const p=y,m=U(()=>{if(p.zones&&p.zones.length){const c=[];for(let n of p.zones){const r=x.value.findIndex(i=>i.deviceId===n);r!==-1&&c.push(x.value[r])}return c}else return[]});return(c,n)=>(w(),A("div",null,[(w(!0),A(M,null,F(m.value,(r,i)=>(w(),A("span",{key:i},[o(J,{class:"font-main text-bold",icon:"location_on",size:"sm",color:"primary","text-color":"white"},{default:a(()=>[h(d(r.name),1)]),_:2},1024)]))),128))]))}},oe=l("div",{class:"q-px-sm dialog-name"},"\uBC29\uC1A1\uAD6C\uAC04\uC120\uD0DD",-1),ae={class:"q-px-md"},ne={class:"q-px-sm"},te={__name:"selectZones",props:["zones"],emits:[...I.emits],setup(y,{emit:p}){const{dialogRef:m,onDialogOK:c,onDialogCancel:n}=I(),r=y,i=Q(null),v=Q([]),f=(s,t,e)=>{t(()=>{v.value=x.value.filter(b=>b.name.indexOf(s)>-1)})};return P(()=>{v.value=x.value,r.zones&&r.zones.length>0&&(i.value=r.zones)}),(s,t)=>(w(),Y(N,{ref_key:"dialogRef",ref:m,persistent:""},{default:a(()=>[o(T,{class:"q-dialog-plugin",style:{"border-radius":"0.6rem"}},{default:a(()=>[o(D,null,{default:a(()=>[oe]),_:1}),o(D,null,{default:a(()=>[l("div",ae,[o(W,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),options:v.value,filled:"",dense:"",multiple:"",label:"\uBC29\uC1A1\uC9C0\uC5ED\uC120\uD0DD","option-value":"deviceId","option-label":"name","use-chips":"","stack-label":"","use-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:f},O({option:a(e=>[o(X,B(L(e.itemProps)),{default:a(()=>[o($,{avatar:""},{default:a(()=>[o(_,{name:"storage"})]),_:1}),o($,null,{default:a(()=>[o(q,null,{default:a(()=>[h(d(e.opt.name),1)]),_:2},1024),o(q,{caption:""},{default:a(()=>[h(d(e.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[i.value?{name:"append",fn:a(()=>[o(_,{name:"cancel",size:"18px",onClick:t[0]||(t[0]=S(e=>i.value=null,["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options"])])]),_:1}),o(R,{align:"right"},{default:a(()=>[l("div",ne,[o(C,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:g(n)},null,8,["onClick"]),o(C,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:t[2]||(t[2]=e=>g(c)(i.value))})])]),_:1})]),_:1})]),_:1},512))}},se={class:"borderd"},le={class:"q-px-lg row no-wrap justify-between items-center bg-grey-2"},ie={class:"row no-wrap items-center q-gutter-x-sm"},re=l("div",{class:"font-main",style:{"font-size":"16px","font-weight":"bold"}},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),de={class:"row items-center q-gutter-x-xs"},ce={style:{"font-size":"10px"}},me={style:{"font-size":"10px"}},xe={__name:"UsersPage",setup(y){const p=[{name:"email",label:"E-mail",align:"center",field:"email",sortable:!0},{name:"name",label:"Name",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"isAdmin",align:"center",field:"isAdmin",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"loginAt",label:"Last login",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"Created at",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"FN",align:"center"}],m=Q(""),c=Q([]),n=Z(),r=s=>{n.dialog({component:V,componentProps:{title:"\uAD00\uB9AC\uC790 \uAD8C\uD55C \uBCC0\uACBD",icon:"warning",iconColor:"yellow",message:`${s.email} \uAD00\uB9AC\uC790 \uAD8C\uD55C ${s.isAdmin?"\uD68C\uC218":"\uBD80\uC5EC"} \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{n.loading.show(),await k.put("/users/admin",{...s}),await f(),n.loading.hide()}catch(t){n.loading.hide(),console.error(t)}})},i=async s=>{n.dialog({component:V,componentProps:{title:"\uC0AC\uC6A9\uC790 \uC0AD\uC81C",icon:"error",iconColor:"red-10",message:`${s.email} \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`}}).onOk(async()=>{try{n.loading.show(),await k.delete("/users",{data:{...s}}),await f(),n.loading.hide()}catch(t){n.loading.hide(),console.error(t)}})},v=s=>{n.dialog({component:te,componentProps:{zones:s.zones}}).onOk(async t=>{try{n.loading.show(),await k.put("/users",{user:s,update:{zones:t}}),await f(),n.loading.hide()}catch(e){n.loading.hide(),console.error(e)}console.log(t)})},f=async()=>{const s=await k.get("/users");c.value=s.data.users};return P(async()=>{n.loading.show(),await j(),await f(),n.loading.hide()}),(s,t)=>(w(),Y(K,{class:"q-pa-md"},{default:a(()=>[l("div",se,[l("div",le,[l("div",ie,[o(_,{name:"group",color:"primary",size:"24px"}),re]),o(E,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:a(()=>[o(_,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),o(H,{columns:p,rows:c.value,filter:m.value},{body:a(e=>[o(G,{props:e},{default:a(()=>[o(u,{key:"email",props:e},{default:a(()=>[h(d(e.row.email),1)]),_:2},1032,["props"]),o(u,{key:"name",props:e},{default:a(()=>[h(d(e.row.name),1)]),_:2},1032,["props"]),o(u,{key:"isAdmin",props:e},{default:a(()=>[o(_,{class:"cursor-pointer",size:"xs",name:e.row.isAdmin?"check_circle":"block",color:e.row.isAdmin?"primary":"red-10",onClick:b=>r(e.row)},null,8,["name","color","onClick"])]),_:2},1032,["props"]),o(u,{key:"zones",props:e},{default:a(()=>[l("div",de,[o(ee,{zones:e.row.zones},null,8,["zones"]),o(_,{class:"cursor-pointer",size:"14px",name:"edit",color:"primary",onClick:b=>v(e.row)},null,8,["onClick"])])]),_:2},1032,["props"]),o(u,{key:"loginAt",props:e},{default:a(()=>[l("div",ce,[l("div",null,d(g(z).formatDate(e.row.loginAt,"YYYY-MM-DD")),1),l("div",null,d(g(z).formatDate(e.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),o(u,{key:"createdAt",props:e},{default:a(()=>[l("div",me,[l("div",null,d(g(z).formatDate(e.row.createdAt,"YYYY-MM-DD")),1),l("div",null,d(g(z).formatDate(e.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),o(u,{key:"actions",props:e},{default:a(()=>[l("div",null,[o(C,{round:"",flat:"",icon:"delete",color:"red-10",size:"sm",onClick:b=>i(e.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1}))}};export{xe as default};
