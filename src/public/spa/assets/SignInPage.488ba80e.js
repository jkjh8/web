import{aO as q,u as x,v as k,r as f,k as V,o as I,bd as d,y as S,z as P,A as c,B as e,j as l,S as v,aV as b,D as r,be as g,bf as Q,bg as N,aU as z,L as B,O as C,bh as E,N as U,b5 as $,b6 as j}from"./index.adce3174.js";import{Q as A}from"./QForm.3ddf40f1.js";import{Q as M}from"./QPage.87e14d5f.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";const m=i=>($("data-v-589b77df"),i=i(),j(),i),R={class:"bg-grey-1 q-pa-lg",style:{"border-radius":"10px"}},D={class:"row no-wrap justify-start items-center q-gutter-x-sm"},F=m(()=>e("div",{class:"font-nanum text-h6 text-bold q-pt-sm"},"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC778",-1)),L=m(()=>e("div",{class:"text-caption font-main"},"\uC774\uBA54\uC77C",-1)),T={class:"q-pt-none q-mt-none"},G=m(()=>e("div",{class:"text-caption font-main"},"\uBE44\uBC00\uBC88\uD638",-1)),H={class:"row justify-end items-center remember q-mt-none"},J=m(()=>e("span",{class:"font-main"},"\uAE30\uC5B5\uD558\uAE30",-1)),K={class:"q-mt-lg row no-wrap justify-center"},W={__name:"SignInPage",setup(i){const{fnNotiInfo:y,fnNotiError:h}=q(),p=x(),_=k(),n=f(!1),u=f(!1),t=V({email:"",userPassword:""}),w=async()=>{_.loading.show();try{u.value?d.set("rememberEmail",t.email):d.remove("rememberEmail");const{data:a}=await C.post("/auth",{...t});d.set("token",a.token),E(a.token),U.connect(),y("\uB85C\uADF8\uC778 \uC131\uACF5",`${a.user.name}\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4.`),p.push("/")}catch{h("\uB85C\uADF8\uC778 \uC2E4\uD328","\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.")}finally{_.loading.hide()}};return I(()=>{const a=d.getItem("rememberEmail");a&&(t.email=a,u.value=!0)}),(a,s)=>(S(),P(M,{class:"form",padding:""},{default:c(()=>[e("div",R,[l(A,{class:"q-gutter-y-md",onSubmit:w},{default:c(()=>[e("div",D,[l(v,{class:"q-mt-sm",name:"account_circle",color:"primary",size:"lg"}),F]),e("div",null,[L,l(b,{modelValue:t.email,"onUpdate:modelValue":s[0]||(s[0]=o=>t.email=o),outlined:"",rules:[r(g),r(Q)],"lazy-rules":""},null,8,["modelValue","rules"])]),e("div",T,[G,l(b,{modelValue:t.userPassword,"onUpdate:modelValue":s[2]||(s[2]=o=>t.userPassword=o),outlined:"",type:n.value?"text":"password",rules:[r(g),r(N)],"lazy-rules":""},{append:c(()=>[l(v,{class:"cursor-pointer",name:n.value?"visibility":"visibility_off",color:n.value?"blue-grey":"grey",onClick:s[1]||(s[1]=o=>n.value=!n.value)},null,8,["name","color"])]),_:1},8,["modelValue","type","rules"])]),e("div",H,[l(z,{modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=o=>u.value=o),class:"q-pa-none q-ma-none",size:"26px"},null,8,["modelValue"]),J]),e("div",null,[l(B,{class:"full-width q-py-sm",unelevated:"",color:"primary",label:"\uB85C\uADF8\uC778",type:"submit"})])]),_:1}),e("div",K,[e("div",{class:"cursor-pointer a-tag",onClick:s[4]||(s[4]=o=>r(p).push("/auth/signup"))}," \uD68C\uC6D0\uAC00\uC785 ")])])]),_:1}))}};var se=O(W,[["__scopeId","data-v-589b77df"]]);export{se as default};
