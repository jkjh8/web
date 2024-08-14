import{v as y,u as b,y as o,z as h,A as e,j as t,P as q,R as p,B as s,S as g,L as x,D as _,H as a,W as d,X as u,Y as n,C as l,J as f,F as Q,a$ as j,bt as B,_ as S,O as C}from"./index.5fc2b29f.js";import{Q as I}from"./QTooltip.c61ca314.js";import{Q as N}from"./QPage.a256d1af.js";const D="kfe",V="1.0.0",$="bs fe",F="\uC5C5\uBB34\uBC29\uC1A1",L="jkjh8 <jkjh82@naver.com>",P={lint:"eslint --ext .js,.vue ./",format:'prettier --write "**/*.{js,vue,scss,html,md,json}" --ignore-path .gitignore',test:'echo "No test specified" && exit 0',dev:"quasar dev",build:"quasar build"},z={"@quasar/cli":"^2.4.1","@quasar/extras":"^1.16.4",axios:"^1.2.1",moment:"^2.30.1",quasar:"^2.8.0","socket.io-client":"^4.7.5",uuidv4:"^6.2.13",vue:"^3.4.18","vue-i18n":"^9.9.0","vue-router":"^4.0.12"},A={"@quasar/app-vite":"^1.8.0","@quasar/quasar-app-extension-qcalendar":"^4.0.0-beta.15",autoprefixer:"^10.4.2",eslint:"^8.11.0","eslint-config-prettier":"^8.1.0","eslint-plugin-vue":"^9.0.0",postcss:"^8.4.14",prettier:"^2.5.1","vite-plugin-checker":"^0.6.4"},O={node:"^20 || ^18 || ^16",npm:">= 6.13.4",yarn:">= 1.21.1"};var R={name:D,version:V,description:$,productName:F,author:L,private:!0,scripts:P,dependencies:z,devDependencies:A,engines:O};const T={class:"row no-wrap items-center q-gutter-x-xs"},E=s("div",{class:"text-h6"},"\uAE30\uB2A5",-1),H={class:"row justify-between items-center"},J=s("div",{class:"text-bold"},"\uB85C\uADF8 \uC0AD\uC81C",-1),U=s("div",null,"\uB85C\uADF8 \uC0AD\uC81C",-1),W={class:"row no-wrap items-center q-gutter-x-xs"},X=s("div",{class:"text-h6"},"\uC2DC\uC2A4\uD15C \uC815\uBCF4",-1),Y=s("div",{class:"text-bold"},"Frontend Information",-1),G=s("div",{class:"text-bold"},"Backend Information",-1),K={key:0},se={__name:"SuperUserPage",setup(M){const i=y(),k=b(),w=()=>{i.dialog({component:S,componentProps:{title:"\uB85C\uADF8 \uC0AD\uC81C",icon:"warning",iconColor:"yellow",message:"\uBAA8\uB4E0 \uB85C\uADF8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{i.loading.show(),await C.delete("/logs/all"),i.loading.hide()}catch(m){i.loading.hide(),console.error(m)}})};return(m,v)=>(o(),h(N,{padding:"",class:"flex flex-center"},{default:e(()=>[t(q,{flat:""},{default:e(()=>[t(p,{class:"row justify-between"},{default:e(()=>[s("div",T,[t(g,{name:"settings",size:"sm",color:"primary"}),E]),s("div",null,[t(x,{flat:"",rounded:"",onClick:v[0]||(v[0]=r=>_(k).push("/super/log"))},{default:e(()=>[a("\uB85C\uADF8\uD3F4\uB354")]),_:1})])]),_:1}),t(p,null,{default:e(()=>[s("div",H,[J,t(x,{icon:"delete",flat:"",round:"",color:"red-10",onClick:w},{default:e(()=>[t(I,null,{default:e(()=>[U]),_:1})]),_:1})])]),_:1}),t(p,null,{default:e(()=>[s("div",W,[t(g,{name:"settings",size:"sm",color:"primary"}),X]),Y,s("div",null,[t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Frontend Version")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(_(R).version),1)]),_:1})]),_:1})]),_:1})]),G,(o(!0),f(Q,null,j(_(B),(r,c)=>(o(),f("div",{key:c},[c==="scheduler"?(o(),f("div",K,[t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Scheduler main")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(r.main),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Scheduler Backup")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(r.backup),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)])):(o(),h(d,{key:1},{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a(l(c),1)]),_:2},1024),t(n,{caption:""},{default:e(()=>[a(l(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]))),128))]),_:1})]),_:1})]),_:1}))}};export{se as default};
