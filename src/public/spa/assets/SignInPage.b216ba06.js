import{u as h,r as v,ay as w,o as x,t as q,v as P,x as c,y as e,j as o,Q as f,aH as g,z as n,bc as V,E as I,P as Q,O as S,R as k,S as z}from"./index.854d2d6b.js";import{r as y,a as C,b as E,Q as j}from"./useRules.8c3fd98c.js";import{Q as B}from"./QPage.013074bc.js";import{u as $}from"./use-quasar.fba98d94.js";import{P as p}from"./LocalStorage.4c82e284.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";const d=i=>(k("data-v-3411f1fc"),i=i(),z(),i),U={class:"bg-grey-1 q-pa-lg",style:{"border-radius":"10px"}},M={class:"row no-wrap justify-start items-center q-gutter-x-sm"},N=d(()=>e("div",{class:"font-main text-h6 text-bold q-pt-sm"},"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC778",-1)),F=d(()=>e("div",{class:"text-caption font-main"},"\uC774\uBA54\uC77C",-1)),H={class:"q-pt-none q-mt-none"},O=d(()=>e("div",{class:"text-caption font-main"},"\uBE44\uBC00\uBC88\uD638",-1)),A={class:"row justify-end items-center remember q-mt-none"},D=d(()=>e("span",{class:"font-main"},"\uAE30\uC5B5\uD558\uAE30",-1)),G={class:"q-mt-lg row no-wrap justify-center"},J={__name:"SignInPage",setup(i){const _=h(),m=$(),l=v(!1),u=v(!1),a=w({email:"",userPassword:""}),b=async()=>{m.loading.show();try{u.value?p.set("rememberEmail",a.email):p.remove("rememberEmail"),await Q.post("/auth",{...a}),S.connect(),m.loading.hide(),_.push("/")}catch(r){console.error(r),m.loading.hide()}};return x(()=>{const r=p.getItem("rememberEmail");r&&(a.email=r,u.value=!0)}),(r,s)=>(q(),P(B,{class:"form",padding:""},{default:c(()=>[e("div",U,[o(j,{class:"q-gutter-y-md",onSubmit:b},{default:c(()=>[e("div",M,[o(f,{class:"q-mt-sm",name:"account_circle",color:"primary",size:"md"}),N]),e("div",null,[F,o(g,{modelValue:a.email,"onUpdate:modelValue":s[0]||(s[0]=t=>a.email=t),outlined:"",dense:"",rules:[n(y),n(C)],"lazy-rules":""},null,8,["modelValue","rules"])]),e("div",H,[O,o(g,{modelValue:a.userPassword,"onUpdate:modelValue":s[2]||(s[2]=t=>a.userPassword=t),outlined:"",dense:"",type:l.value?"text":"password",rules:[n(y),n(E)],"lazy-rules":""},{append:c(()=>[o(f,{class:"cursor-pointer",name:l.value?"visibility":"visibility_off",color:l.value?"blue-grey":"grey",onClick:s[1]||(s[1]=t=>l.value=!l.value)},null,8,["name","color"])]),_:1},8,["modelValue","type","rules"])]),e("div",A,[o(V,{modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=t=>u.value=t),class:"q-pa-none q-ma-none",size:"26px"},null,8,["modelValue"]),D]),e("div",null,[o(I,{class:"full-width font-main",unelevated:"",color:"primary",label:"\uB85C\uADF8\uC778",type:"submit"})])]),_:1}),e("div",G,[e("div",{class:"cursor-pointer a-tag",onClick:s[4]||(s[4]=t=>n(_).push("/auth/signup"))},"\uD68C\uC6D0\uAC00\uC785")])])]),_:1}))}};var Z=R(J,[["__scopeId","data-v-3411f1fc"]]);export{Z as default};
