import{aB as m,r as x,o as Q,u as c,v as p,x as o,j as a,K as b,L as f,y as i,R as B,G as g,z as y,E as D,aM as q,bq as w,A as s,aC as I,I as v,M as K}from"./index.01937250.js";const T={class:"row no-wrap items-center q-gutter-x-md"},h={class:"dialog-name"},H={key:0,class:"dialog-caption"},M={class:"q-px-md"},A={__name:"dialogInput",props:["icon","iconColor","title","caption","label","persistent","inputValue","inputType"],emits:[...m.emits],setup(e,{emit:N}){const{dialogRef:C,onDialogOK:r,onDialogCancel:k,onDialogHide:V}=m(),u=e,n=x("");return Q(()=>{console.log(u.inputType),u.inputValue&&(n.value=u.inputValue)}),(R,t)=>{var d;return c(),p(K,{ref_key:"dialogRef",ref:C,onHide:s(V),persistent:(d=e.persistent)!=null?d:!1},{default:o(()=>[a(b,{class:"q-dialog-plugin",style:{"border-radius":"8px"}},{default:o(()=>[a(f,null,{default:o(()=>{var l;return[i("div",T,[e.icon?(c(),p(B,{key:0,name:e.icon,color:(l=e.iconColor)!=null?l:"primary",size:"1.5rem"},null,8,["name","color"])):g("",!0),i("div",null,[i("div",h,y(e.title),1),e.caption?(c(),D("div",H,y(e.caption),1)):g("",!0)])])]}),_:1}),a(f,null,{default:o(()=>[i("div",M,[a(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),filled:"",dense:"",type:e.inputType,label:e.label,onKeyup:t[1]||(t[1]=w(l=>s(r)(n.value),["enter"]))},null,8,["modelValue","type","label"])])]),_:1}),a(I,{align:"right"},{default:o(()=>[a(v,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:s(k)},null,8,["onClick"]),a(v,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:t[2]||(t[2]=l=>s(r)(n.value))})]),_:1})]),_:1})]),_:1},8,["onHide","persistent"])}}};export{A as _};
