import{K as x,v as n,r as k,u as z,c as C,o as Q,Z as V,x as b,y as h,z as l,A as t,k as a,N as f,J as o,D as s,aT as P,B as d,H as p,b5 as D,ay as g,G as S,I as U,aP as q}from"./index.e93617ea.js";import{Q as u}from"./QTooltip.5eee741a.js";import{Q as $,a as r}from"./QTable.38ce89a0.js";import{Q as Y}from"./QTr.391a535e.js";import{Q as M}from"./QPagination.925a46e3.js";import{Q as T}from"./QPage.413ef6ad.js";var B=[{name:"email",label:"\uC774\uBA54\uC77C",align:"center",field:"email",sortable:!0},{name:"name",label:"\uC774\uB984",align:"center",field:"name",sortable:!0},{name:"isAdmin",label:"\uAD00\uB9AC\uC790",align:"center",field:"isAdmin",sortable:!0},{name:"em",label:"\uAE34\uAE09\uBC29\uC1A1",align:"center",field:"em",sortable:!0},{name:"zones",label:"\uC9C0\uC5ED",align:"center",field:"zones",sortable:!0},{name:"permitAddress",label:"\uC811\uC18D\uC8FC\uC18C",align:"center",field:"permitAddress",sortable:!0},{name:"loginAt",label:"\uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778",align:"center",field:"loginAt",sortable:!0},{name:"createdAt",label:"\uAC00\uC785\uC77C",align:"center",field:"createdAt",sortable:!0},{name:"actions",label:"\uC124\uC815",align:"center"}];const N={class:"borderd"},I={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},G={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},Z=t("div",{class:"font-main"},"\uC0AC\uC6A9\uC790 \uAD00\uB9AC",-1),j={class:"row items-center q-gutter-x-xs"},E={style:{"font-size":"0.7rem"}},H={style:{"font-size":"0.7rem"}},J={class:"row justify-center q-py-md",style:{position:"relative"}},K={class:"row items-center q-px-md",style:{position:"absolute",right:"0",top:"1px","font-size":"0.8rem"}},R=t("span",null,"\uD398\uC774\uC9C0\uB2F9 \uD45C\uC2DC",-1),le={__name:"Users",setup(F){const{users:_}=x(n()),y=k(""),v=z(),c=k({sortBy:"",descending:!1,page:1,rowsPerPage:10}),A=C(()=>_.value&&_.value.length>0?Math.ceil(_.value.length/c.value.rowsPerPage):1);return Q(async()=>{try{v.loading.show(),await V().fnGetQsys(),await n().fnGetUsers()}catch(w){console.error(w)}finally{v.loading.hide()}}),(w,i)=>(b(),h(T,{class:"page"},{default:l(()=>[t("div",N,[t("div",I,[t("div",G,[a(f,{name:"group",color:"primary",size:"md"}),Z,a(f,{name:"add_circle",color:"primary",class:"cursor-pointer",size:"sm",onClick:o(n)().fnAddUser},{default:l(()=>[a(u,null,{default:l(()=>[s("\uC0AC\uC6A9\uC790 \uCD94\uAC00")]),_:1})]),_:1},8,["onClick"])]),a(P,{modelValue:y.value,"onUpdate:modelValue":i[0]||(i[0]=e=>y.value=e),label:"Search",borderless:"",dense:"",debounce:"300",placeholder:"Search",clearable:""},{append:l(()=>[a(f,{class:"cursor-pointer",name:"search"})]),_:1},8,["modelValue"])]),a($,{columns:o(B),rows:o(_),filter:y.value,pagination:c.value,"onUpdate:pagination":i[1]||(i[1]=e=>c.value=e),"hide-pagination":"",flat:""},{body:l(e=>[a(Y,{props:e},{default:l(()=>[a(r,{key:"email",props:e,class:"q-gutter-x-xs"},{default:l(()=>[t("span",null,d(e.row.email),1),t("span",null,[a(f,{name:"edit",color:"primary",class:"cursor-pointer",onClick:m=>o(n)().fnChangeEmail(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s("\uC774\uBA54\uC77C \uBCC0\uACBD")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),a(r,{key:"name",props:e},{default:l(()=>[s(d(e.row.name),1)]),_:2},1032,["props"]),a(r,{key:"isAdmin",props:e},{default:l(()=>[a(p,{round:"",flat:"",size:"sm",icon:e.row.isAdmin?"check_circle":"block",color:e.row.isAdmin?"primary":"red-10",onClick:m=>o(n)().fnSetAdmin(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s(d(e.row.isAdmin?"\uC0AC\uC6A9\uC790":"\uAD00\uB9AC\uC790")+"\uB85C \uBCC0\uACBD",1)]),_:2},1024)]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),a(r,{key:"em",props:e},{default:l(()=>[a(p,{round:"",flat:"",size:"sm",icon:e.row.em?"check_circle":"block",color:e.row.em?"primary":"red-10",onClick:m=>o(n)().fnSetEM(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s(" '\uAE34\uAE09\uBC29\uC1A1' ")]),_:1})]),_:2},1032,["icon","color","onClick"])]),_:2},1032,["props"]),a(r,{key:"zones",props:e},{default:l(()=>[t("div",j,[a(D,{zones:e.row.zones},null,8,["zones"]),a(p,{round:"",flat:"",size:"sm",icon:"edit",color:"primary",onClick:m=>o(n)().fnSetUserZones(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s("Zone \uC124\uC815")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),a(r,{key:"permitAddress",props:e,class:"q-gutter-x-xs"},{default:l(()=>[t("span",null,d(e.row.permitAddress),1),t("span",null,[a(f,{name:"edit",color:"primary",class:"cursor-pointer",onClick:m=>o(n)().fnSetPermitAddress(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s("\uC811\uC18D\uC8FC\uC18C \uBCC0\uACBD")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"]),a(r,{key:"loginAt",props:e},{default:l(()=>[t("div",E,[t("div",null,d(o(g).formatDate(e.row.loginAt,"YYYY-MM-DD")),1),t("div",null,d(o(g).formatDate(e.row.loginAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),a(r,{key:"createdAt",props:e},{default:l(()=>[t("div",H,[t("div",null,d(o(g).formatDate(e.row.createdAt,"YYYY-MM-DD")),1),t("div",null,d(o(g).formatDate(e.row.createdAt,"hh:mm:ss a")),1)])]),_:2},1032,["props"]),a(r,{key:"actions",props:e},{default:l(()=>[t("div",null,[a(p,{flat:"",round:"",color:"primary",icon:"info",size:"sm",onClick:m=>o(n)().fnUserInfo(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s("\uC0C1\uC138\uC815\uBCF4")]),_:1})]),_:2},1032,["onClick"]),e.row.email!=="superuser@superuser.com"?(b(),h(p,{key:0,flat:"",round:"",icon:"delete",color:"red-10",size:"sm",onClick:m=>o(n)().fnDeleteUser(e.row)},{default:l(()=>[a(u,null,{default:l(()=>[s("\uC0AD\uC81C")]),_:1})]),_:2},1032,["onClick"])):S("",!0)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","pagination"]),a(U),t("div",J,[a(M,{modelValue:c.value.page,"onUpdate:modelValue":i[2]||(i[2]=e=>c.value.page=e),max:A.value,"max-pages":8,size:"12px",flat:"","active-design":"outline","direction-links":"","boundary-links":""},null,8,["modelValue","max"]),t("div",K,[R,a(q,{style:{"font-size":"0.8rem"},borderless:"","item-aligned":"",dense:"","hide-bottom-space":"","map-options":"",modelValue:c.value.rowsPerPage,"onUpdate:modelValue":i[3]||(i[3]=e=>c.value.rowsPerPage=e),options:[5,10,15,20,25,30,40,50]},null,8,["modelValue"])])])])]),_:1}))}};export{le as default};
