import{ay as m,r as V,o as b,y as s,z as p,A as o,j as t,N as x,O as f,B as i,P as D,J as y,C as g,I as Q,aV as B,by as w,D as u,az as I,K as C,R as K}from"./index.0e464c24.js";const N={class:"row no-wrap items-center q-gutter-x-md"},h={class:"font-main"},q={key:0,class:"caption"},z={class:"q-px-md"},O={__name:"DialogInput",props:["icon","iconColor","title","caption","label","persistent","inputValue","inputType"],emits:[...m.emits],setup(e,{emit:R}){const{dialogRef:v,onDialogOK:r,onDialogCancel:k}=m(),c=e,n=V("");return b(()=>{c.inputValue&&(n.value=c.inputValue)}),(T,a)=>{var d;return s(),p(K,{ref_key:"dialogRef",ref:v,persistent:(d=e.persistent)!=null?d:!1},{default:o(()=>[t(x,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:o(()=>[t(f,null,{default:o(()=>{var l;return[i("div",N,[e.icon?(s(),p(D,{key:0,name:e.icon,color:(l=e.iconColor)!=null?l:"primary",size:"sm"},null,8,["name","color"])):y("",!0),i("div",null,[i("div",h,g(e.title),1),e.caption?(s(),Q("div",q,g(e.caption),1)):y("",!0)])])]}),_:1}),t(f,null,{default:o(()=>[i("div",z,[t(B,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),filled:"",dense:"",type:e.inputType,label:e.label,onKeyup:a[1]||(a[1]=w(l=>u(r)(n.value),["enter"]))},null,8,["modelValue","type","label"])])]),_:1}),t(I,{align:"right"},{default:o(()=>[t(C,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:u(k)},null,8,["onClick"]),t(C,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:a[2]||(a[2]=l=>u(r)(n.value))})]),_:1})]),_:1})]),_:1},8,["persistent"])}}};export{O as _};
