import{a as n,Q as v}from"./QTable.369673be.js";import{Q as b}from"./QTr.84b6fb99.js";import{r as f,A as y,aU as _,o as h,C as L,D as k,E as s,j as l,aX as z,I as i,G as A,H as c,b6 as C,K as u,f as N}from"./index.7d6e6e9a.js";const p=f([]),d=f(0),a=f({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}),Q=()=>{a.value.sortBy="createdAt",a.value.descending=!0,a.value.page=1,a.value.rowsPerPage=10,a.value.rowsNumber=0},S=()=>{const o=y();return{fnGetLogs:async t=>{try{o.loading.show();const r=await _.get(`/logs?options=${JSON.stringify({pagination:t.pagination,filter:t.filter,level:d.value})}`);p.value=r.data.current,a.value=r.data.pagination,o.loading.hide()}catch(r){o.loading.hide(),console.error(r)}},fnSetColorLog:t=>{switch(t){case"error":return"bg-red text-white";case"warn":return"bg-yellow-1";case"debug":return"bg-blue-1";case"info":return""}}}},T={style:{"font-size":"0.8rem"}},G={__name:"logTable",props:["mode","filter","level"],setup(o){const m=[{name:"createdAt",label:"Time",align:"center",field:"createdAt",sortable:!0},{name:"level",label:"Level",align:"center",field:"level",sortable:!0},{name:"source",label:"Source",align:"center",field:"source",sortable:!0},{name:"zones",label:"Zones",align:"center",field:"zones",sortable:!0},{name:"message",label:"Message",align:"left",field:"message",sortable:!0}],g=o,{fnGetLogs:t,fnSetColorLog:r}=S();return h(async()=>{Q(),d.value=g.level,await t({pagination:a.value,filter:g.filter,level:d.value})}),(x,w)=>(L(),k(v,{flat:"",columns:m,rows:i(p),filter:o.filter,"row-key":"_id","wrap-cells":"",pagination:i(a),"onUpdate:pagination":w[0]||(w[0]=e=>N(a)?a.value=e:null),onRequest:i(t)},{body:s(e=>[l(b,{props:e,class:z(i(r)(e.row.level))},{default:s(()=>[l(n,{key:"createdAt",props:e},{default:s(()=>[A("div",T,c(i(C).formatDate(e.row.createdAt,"YYYY-MM-DD hh:mm:ss a")),1)]),_:2},1032,["props"]),l(n,{key:"level",props:e},{default:s(()=>[u(c(e.row.level.toUpperCase()),1)]),_:2},1032,["props"]),l(n,{key:"source",props:e},{default:s(()=>[u(c(e.row.source),1)]),_:2},1032,["props"]),l(n,{key:"zones",props:e},{default:s(()=>[u(c(e.row.zones&&e.row.zones.length?e.row.zones.join(","):""),1)]),_:2},1032,["props"]),l(n,{class:"message",key:"message",props:e},{default:s(()=>[u(c(e.row.message),1)]),_:2},1032,["props"])]),_:2},1032,["props","class"])]),_:1},8,["rows","filter","pagination","onRequest"]))}};export{G as _,a as p,S as u};