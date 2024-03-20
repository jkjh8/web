"use strict";(globalThis["webpackChunkbs_fe"]=globalThis["webpackChunkbs_fe"]||[]).push([[351],{7351:(e,a,l)=>{l.r(a),l.d(a,{default:()=>C});l(9665);var s=l(9835),n=l(499),o=l(8339),t=l(9302),u=l(1569),i=l(2645),r=l(9e3),d=l(6647),m=l(8957);const c=e=>((0,s.dD)("data-v-aa8da78c"),e=e(),(0,s.Cn)(),e),p=c((()=>(0,s._)("div",{class:"text-subtitle1 text-bold q-ma-none"},"Sign in to your account",-1))),v=c((()=>(0,s._)("div",{class:"input-caption sans-font"},"Email",-1))),g=c((()=>(0,s._)("div",{class:"input-caption sans-font"},"Password",-1))),b={class:"row no-wrap justify-between"},_={class:"sans-font remember"},h=c((()=>(0,s._)("span",null,"Remember me",-1))),y=c((()=>(0,s._)("div",{class:"alink no-decoration sans-font text-purple cursor-pointer"}," Forgot password? ",-1))),S=c((()=>(0,s._)("div",null,"Sign in",-1))),f={__name:"SignInPage",setup(e){const a=(0,o.tv)(),l=(0,t.Z)(),{notifyError:c}=(0,m.Z)(),{required:f,minLength:w,ckEmail:U}=(0,r.Z)(),{auth:k,rememberCheck:q,getEmailFromStorage:Z,setEmailToStorage:V}=(0,d.Z)(),x=(0,n.iH)(!1),E=async()=>{try{V(),l.loading.show();await u.api.post("/auth",{email:k.userEmail,userPassword:k.userPass});l.loading.hide(),a.push("/")}catch(e){l.loading.hide(),c("로그인 오류",e.response.data.info.message,"top")}};return(0,s.bv)((()=>{Z()})),(e,a)=>{const l=(0,s.up)("q-input"),o=(0,s.up)("q-icon"),t=(0,s.up)("q-checkbox"),u=(0,s.up)("q-btn"),r=(0,s.up)("q-form");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r,{class:"q-gutter-y-md",onSubmit:E},{default:(0,s.w5)((()=>[p,(0,s._)("div",null,[(0,s._)("div",null,[v,(0,s.Wm)(l,{modelValue:(0,n.SU)(k).userEmail,"onUpdate:modelValue":a[0]||(a[0]=e=>(0,n.SU)(k).userEmail=e),outlined:"",dense:"",rules:[(0,n.SU)(f),(0,n.SU)(U)],"lazy-rules":""},null,8,["modelValue","rules"])]),(0,s._)("div",null,[g,(0,s.Wm)(l,{modelValue:(0,n.SU)(k).userPass,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,n.SU)(k).userPass=e),outlined:"",dense:"",type:x.value?"text":"password",rules:[(0,n.SU)(f),(0,n.SU)(w)],"lazy-rules":""},{append:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"curser-pointer",name:x.value?"visibility":"visibility_off",color:x.value?"blue-grey":"grey",size:"20px",onClick:a[1]||(a[1]=e=>x.value=!x.value)},null,8,["name","color"])])),_:1},8,["modelValue","type","rules"])]),(0,s._)("div",b,[(0,s._)("div",_,[(0,s.Wm)(t,{modelValue:(0,n.SU)(q),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.dq)(q)?q.value=e:null),class:"q-pa-none q-ma-none",size:"26px"},null,8,["modelValue"]),h]),y])]),(0,s.Wm)(u,{class:"login-btn","no-caps":"",unelevated:"",color:"primary",type:"submit"},{default:(0,s.w5)((()=>[S])),_:1})])),_:1}),(0,s.Wm)((0,n.SU)(i.Z),{class:"q-mt-lg",message:"Don't have an account yet",linkName:"Sign up",link:"/auth/signup"})])}}};var w=l(1639),U=l(8326),k=l(6611),q=l(2857),Z=l(1221),V=l(4455),x=l(9984),E=l.n(x);const W=(0,w.Z)(f,[["__scopeId","data-v-aa8da78c"]]),C=W;E()(f,"components",{QForm:U.Z,QInput:k.Z,QIcon:q.Z,QCheckbox:Z.Z,QBtn:V.Z})}}]);