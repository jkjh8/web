import{z as q,A as x,r as f,k,o as I,bm as m,C as V,D as P,E as c,G as e,j as l,W as v,aP as b,I as r,bn as S,O as Q,aS as C,bo as E,R as z,aW as N,aX as $}from"./index.f84341ff.js";import{Q as j,r as g,a as B,b as U}from"./useRules.7cc93492.js";import{Q as R}from"./QPage.0f0def7e.js";import{u as A}from"./useNotify.575adf27.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";const d=i=>(N("data-v-6c5ebb27"),i=i(),$(),i),W={class:"bg-grey-1 q-pa-lg",style:{"border-radius":"10px"}},D={class:"row no-wrap justify-start items-center q-gutter-x-sm"},F=d(()=>e("div",{class:"font-nanum text-h6 text-bold q-pt-sm"},"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC778",-1)),G=d(()=>e("div",{class:"text-caption font-main"},"\uC774\uBA54\uC77C",-1)),O={class:"q-pt-none q-mt-none"},T=d(()=>e("div",{class:"text-caption font-main"},"\uBE44\uBC00\uBC88\uD638",-1)),X={class:"row justify-end items-center remember q-mt-none"},H=d(()=>e("span",{class:"font-main"},"\uAE30\uC5B5\uD558\uAE30",-1)),J={class:"q-mt-lg row no-wrap justify-center"},K={__name:"SignInPage",setup(i){const{fnNotiInfo:y,fnNotiError:h}=A(),p=q(),_=x(),n=f(!1),u=f(!1),t=k({email:"",userPassword:""}),w=async()=>{_.loading.show();try{u.value?m.set("rememberEmail",t.email):m.remove("rememberEmail");const{data:a}=await C.post("/auth",{...t});m.set("token",a.token),E(a.token),z.connect(),y("\uB85C\uADF8\uC778 \uC131\uACF5",`${a.user.name}\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4.`),p.push("/")}catch{h("\uB85C\uADF8\uC778 \uC2E4\uD328","\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.")}finally{_.loading.hide()}};return I(()=>{const a=m.getItem("rememberEmail");a&&(t.email=a,u.value=!0)}),(a,s)=>(V(),P(R,{class:"form",padding:""},{default:c(()=>[e("div",W,[l(j,{class:"q-gutter-y-md",onSubmit:w},{default:c(()=>[e("div",D,[l(v,{class:"q-mt-sm",name:"account_circle",color:"primary",size:"lg"}),F]),e("div",null,[G,l(b,{modelValue:t.email,"onUpdate:modelValue":s[0]||(s[0]=o=>t.email=o),outlined:"",rules:[r(g),r(B)],"lazy-rules":""},null,8,["modelValue","rules"])]),e("div",O,[T,l(b,{modelValue:t.userPassword,"onUpdate:modelValue":s[2]||(s[2]=o=>t.userPassword=o),outlined:"",type:n.value?"text":"password",rules:[r(g),r(U)],"lazy-rules":""},{append:c(()=>[l(v,{class:"cursor-pointer",name:n.value?"visibility":"visibility_off",color:n.value?"blue-grey":"grey",onClick:s[1]||(s[1]=o=>n.value=!n.value)},null,8,["name","color"])]),_:1},8,["modelValue","type","rules"])]),e("div",X,[l(S,{modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=o=>u.value=o),class:"q-pa-none q-ma-none",size:"26px"},null,8,["modelValue"]),H]),e("div",null,[l(Q,{class:"full-width q-py-sm",unelevated:"",color:"primary",label:"\uB85C\uADF8\uC778",type:"submit"})])]),_:1}),e("div",J,[e("div",{class:"cursor-pointer a-tag",onClick:s[4]||(s[4]=o=>r(p).push("/auth/signup"))}," \uD68C\uC6D0\uAC00\uC785 ")])])]),_:1}))}};var ae=M(K,[["__scopeId","data-v-6c5ebb27"]]);export{ae as default};
