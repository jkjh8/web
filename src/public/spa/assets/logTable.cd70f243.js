import{a as n,Q as v}from"./QTable.67afda2b.js";import{Q as b}from"./QTr.a6e68a89.js";import{r as f,a as y,z as _,o as h,d as z,w as o,f as l,aN as L,e as i,l as k,t as c,P as u,E as x}from"./index.55b3bbb2.js";import{d as A}from"./date.d41674e9.js";import{u as C}from"./use-quasar.b13b0874.js";const w=f([]),d=f(0),a=f({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),N=()=>{a.value.sortBy="createdAt",a.value.descending=!0,a.value.page=1,a.value.rowsPerPage=10,a.value.rowsNumber=0},P=()=>{const r=C();return{fnGetLogs:async t=>{try{r.loading.show();const s=await y.get(`/logs?options=${JSON.stringify({pagination:t.pagination,filter:t.filter,level:d.value})}`);w.value=s.data.current,a.value=s.data.pagination,r.loading.hide()}catch(s){r.loading.hide(),console.error(s)}},fnSetColorLog:t=>{switch(t){case"error":return"bg-red text-white";case"warn":return"bg-yellow";case"debug":return"";case"info":return"text-green"}}}},Q={style:{"font-size":"10px"}},Y={__name:"logTable",props:["mode","filter","level"],setup(r){const m=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],g=r,{fnGetLogs:t,fnSetColorLog:s}=P();return _(async()=>{N(),d.value=g.level,await t({pagination:a.value,filter:g.filter,level:d.value})}),(S,p)=>(h(),z(v,{flat:"",columns:m,rows:i(w),filter:r.filter,"row-key":"_id","wrap-cells":"",pagination:i(a),"onUpdate:pagination":p[0]||(p[0]=e=>x(a)?a.value=e:null),onRequest:i(t)},{body:o(e=>[l(b,{props:e,class:L(i(s)(e.row.level))},{default:o(()=>[l(n,{key:"createdAt",props:e},{default:o(()=>[k("div",Q,c(i(A).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),l(n,{key:"level",props:e},{default:o(()=>[u(c(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),l(n,{key:"source",props:e},{default:o(()=>[u(c(e.row.source),1)]),_:2},1032,["props"]),l(n,{key:"zones",props:e},{default:o(()=>[u(c(e.row.zones?e.row.zones.charAt(0).toUpperCase()+e.row.zones.slice(1):""),1)]),_:2},1032,["props"]),l(n,{class:"message",key:"message",props:e},{default:o(()=>[u(c(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination","onRequest"]))}};export{Y as _};
