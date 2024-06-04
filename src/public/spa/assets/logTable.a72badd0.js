import{a as n,Q as p}from"./QTable.16097e4d.js";import{Q as b}from"./QTr.09d3396b.js";import{r as f,aG as y,J as _,o as h,u as z,v as L,x as o,j as l,aS as k,A as i,y as x,z as c,b0 as A,C as u,f as C}from"./index.01937250.js";const w=f([]),d=f(0),a=f({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),S=()=>{a.value.sortBy="createdAt",a.value.descending=!0,a.value.page=1,a.value.rowsPerPage=10,a.value.rowsNumber=0},N=()=>{const s=y();return{fnGetLogs:async t=>{try{s.loading.show();const r=await _.get(`/logs?options=${JSON.stringify({pagination:t.pagination,filter:t.filter,level:d.value})}`);w.value=r.data.current,a.value=r.data.pagination,s.loading.hide()}catch(r){s.loading.hide(),console.error(r)}},fnSetColorLog:t=>{switch(t){case"error":return"bg-red text-white";case"warn":return"bg-yellow";case"debug":return"";case"info":return"text-green"}}}},Q={style:{"font-size":"10px"}},G={__name:"logTable",props:["mode","filter","level"],setup(s){const m=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],g=s,{fnGetLogs:t,fnSetColorLog:r}=N();return h(async()=>{S(),d.value=g.level,await t({pagination:a.value,filter:g.filter,level:d.value})}),(T,v)=>(z(),L(p,{flat:"",columns:m,rows:i(w),filter:s.filter,"row-key":"_id","wrap-cells":"",pagination:i(a),"onUpdate:pagination":v[0]||(v[0]=e=>C(a)?a.value=e:null),onRequest:i(t)},{body:o(e=>[l(b,{props:e,class:k(i(r)(e.row.level))},{default:o(()=>[l(n,{key:"createdAt",props:e},{default:o(()=>[x("div",Q,c(i(A).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),l(n,{key:"level",props:e},{default:o(()=>[u(c(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),l(n,{key:"source",props:e},{default:o(()=>[u(c(e.row.source),1)]),_:2},1032,["props"]),l(n,{key:"zones",props:e},{default:o(()=>[u(c(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),l(n,{class:"message",key:"message",props:e},{default:o(()=>[u(c(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination","onRequest"]))}};export{G as _};