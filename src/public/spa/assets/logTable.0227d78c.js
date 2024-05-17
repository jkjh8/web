import{Q as n,a as w}from"./QTable.34f978b0.js";import{Q as b}from"./QTr.dbd5b529.js";import{r as f,v as y,U as _,o as h,z,A as L,B as o,j as l,aP as k,D as i,C as x,J as c,M as u,f as A}from"./index.e0d07856.js";import{d as C}from"./date.a501d43a.js";const v=f([]),d=f(0),a=f({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),B=()=>{a.value.sortBy="createdAt",a.value.descending=!0,a.value.page=1,a.value.rowsPerPage=10,a.value.rowsNumber=0},N=()=>{const s=y();return{fnGetLogs:async t=>{try{s.loading.show();const r=await _.get(`/logs?options=${JSON.stringify({pagination:t.pagination,filter:t.filter,level:d.value})}`);v.value=r.data.current,a.value=r.data.pagination,s.loading.hide()}catch(r){s.loading.hide(),console.error(r)}},fnSetColorLog:t=>{switch(t){case"error":return"bg-red text-white";case"warn":return"bg-yellow";case"debug":return"";case"info":return"text-green"}}}},P={style:{"font-size":"10px"}},R={__name:"logTable",props:["mode","filter","level"],setup(s){const m=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],g=s,{fnGetLogs:t,fnSetColorLog:r}=N();return h(async()=>{B(),d.value=g.level,await t({pagination:a.value,filter:g.filter,level:d.value})}),(Q,p)=>(z(),L(w,{flat:"",columns:m,rows:i(v),filter:s.filter,"row-key":"_id","wrap-cells":"",pagination:i(a),"onUpdate:pagination":p[0]||(p[0]=e=>A(a)?a.value=e:null),onRequest:i(t)},{body:o(e=>[l(b,{props:e,class:k(i(r)(e.row.level))},{default:o(()=>[l(n,{key:"createdAt",props:e},{default:o(()=>[x("div",P,c(i(C).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),l(n,{key:"level",props:e},{default:o(()=>[u(c(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),l(n,{key:"source",props:e},{default:o(()=>[u(c(e.row.source),1)]),_:2},1032,["props"]),l(n,{key:"zones",props:e},{default:o(()=>[u(c(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),l(n,{class:"message",key:"message",props:e},{default:o(()=>[u(c(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination","onRequest"]))}};export{R as _};