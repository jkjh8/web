import{ay as d,y as t,z as i,A as a,j as n,N as _,O as g,P as k,J as l,B as c,C as r,I as D,az as S,K as m,D as s,R as h}from"./index.da64bcb9.js";const v={class:"font-main"},x={key:0,class:"caption"},B={class:"row justify-center q-px-md"},N={__name:"DialogConfirm",props:{icon:String,iconColor:String,btnColor:String,title:String,caption:String,message:String},emits:[...d.emits],setup(e,{emit:Q}){const{dialogRef:u,onDialogHide:f,onDialogOK:C,onDialogCancel:y}=d();return(b,p)=>(t(),i(h,{ref_key:"dialogRef",ref:u,onHide:s(f)},{default:a(()=>[n(_,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:a(()=>[n(g,{class:"row no-wrap q-gutter-sm items-center"},{default:a(()=>{var o;return[e.icon?(t(),i(k,{key:0,name:e.icon,color:(o=e.iconColor)!=null?o:"primary",size:"sm"},null,8,["name","color"])):l("",!0),c("div",null,[c("div",v,r(e.title),1),e.caption?(t(),D("div",x,r(e.caption),1)):l("",!0)])]}),_:1}),e.message?(t(),i(g,{key:0},{default:a(()=>[c("div",B,r(e.message),1)]),_:1})):l("",!0),n(S,{align:"right"},{default:a(()=>{var o;return[n(m,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(y)},null,8,["onClick"]),n(m,{round:"",flat:"","no-caps":"",color:(o=e.btnColor)!=null?o:"primary",icon:"check_circle",onClick:s(C)},null,8,["color","onClick"])]}),_:1})]),_:1})]),_:1},8,["onHide"]))}};export{N as _};
