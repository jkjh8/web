import{v as y,u as b,o as q,a6 as Q,y as o,z as h,A as e,j as t,P as j,R as p,B as s,S as g,L as x,D as _,H as a,W as d,X as u,Y as n,C as l,J as f,F as S,b4 as B,a5 as C,_ as I,O as N}from"./index.054964be.js";import{Q as D}from"./QTooltip.b7b2529d.js";import{Q as V}from"./QPage.b4689d7b.js";const F="kfe",L="1.0.1",P="bs fe",$="\uC5C5\uBB34\uBC29\uC1A1",z="jkjh8 <jkjh82@naver.com>",A={lint:"eslint --ext .js,.vue ./",format:'prettier --write "**/*.{js,vue,scss,html,md,json}" --ignore-path .gitignore',test:'echo "No test specified" && exit 0',dev:"quasar dev",build:"quasar build"},O={"@quasar/cli":"^2.4.1","@quasar/extras":"^1.16.4",axios:"^1.2.1",moment:"^2.30.1",quasar:"^2.8.0","socket.io-client":"^4.7.5",uuidv4:"^6.2.13",vue:"^3.4.18","vue-i18n":"^9.9.0","vue-router":"^4.0.12"},R={"@quasar/app-vite":"^1.8.0","@quasar/quasar-app-extension-qcalendar":"^4.0.0-beta.15",autoprefixer:"^10.4.2",eslint:"^8.11.0","eslint-config-prettier":"^8.1.0","eslint-plugin-vue":"^9.0.0",postcss:"^8.4.14",prettier:"^2.5.1","vite-plugin-checker":"^0.6.4"},T={node:"^20 || ^18 || ^16",npm:">= 6.13.4",yarn:">= 1.21.1"};var E={name:F,version:L,description:P,productName:$,author:z,private:!0,scripts:A,dependencies:O,devDependencies:R,engines:T};const G={class:"row no-wrap items-center q-gutter-x-xs"},H=s("div",{class:"text-h6"},"\uAE30\uB2A5",-1),J={class:"row justify-between items-center"},M=s("div",{class:"text-bold"},"\uB85C\uADF8 \uC0AD\uC81C",-1),U=s("div",null,"\uB85C\uADF8 \uC0AD\uC81C",-1),W={class:"row no-wrap items-center q-gutter-x-xs"},X=s("div",{class:"text-h6"},"\uC2DC\uC2A4\uD15C \uC815\uBCF4",-1),Y=s("div",{class:"text-bold"},"Frontend Information",-1),K=s("div",{class:"text-bold"},"Backend Information",-1),Z={key:0},ne={__name:"SuperUserPage",setup(ee){const i=y(),k=b(),w=()=>{i.dialog({component:I,componentProps:{title:"\uB85C\uADF8 \uC0AD\uC81C",icon:"warning",iconColor:"yellow",message:"\uBAA8\uB4E0 \uB85C\uADF8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}}).onOk(async()=>{try{i.loading.show(),await N.delete("/logs/all"),i.loading.hide()}catch(m){i.loading.hide(),console.error(m)}})};return q(async()=>{await Q()}),(m,v)=>(o(),h(V,{padding:"",class:"flex flex-center"},{default:e(()=>[t(j,{flat:""},{default:e(()=>[t(p,{class:"row justify-between"},{default:e(()=>[s("div",G,[t(g,{name:"settings",size:"sm",color:"primary"}),H]),s("div",null,[t(x,{flat:"",rounded:"",onClick:v[0]||(v[0]=r=>_(k).push("/super/log"))},{default:e(()=>[a("\uB85C\uADF8\uD3F4\uB354")]),_:1})])]),_:1}),t(p,null,{default:e(()=>[s("div",J,[M,t(x,{icon:"delete",flat:"",round:"",color:"red-10",onClick:w},{default:e(()=>[t(D,null,{default:e(()=>[U]),_:1})]),_:1})])]),_:1}),t(p,null,{default:e(()=>[s("div",W,[t(g,{name:"settings",size:"sm",color:"primary"}),X]),Y,s("div",null,[t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Frontend Version")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(_(E).version),1)]),_:1})]),_:1})]),_:1})]),K,(o(!0),f(S,null,B(_(C),(r,c)=>(o(),f("div",{key:c},[c==="scheduler"?(o(),f("div",Z,[t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Scheduler main")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(r.main),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(d,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a("Scheduler Backup")]),_:1}),t(n,{caption:""},{default:e(()=>[a(l(r.backup),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)])):(o(),h(d,{key:1},{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[a(l(c),1)]),_:2},1024),t(n,{caption:""},{default:e(()=>[a(l(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]))),128))]),_:1})]),_:1})]),_:1}))}};export{ne as default};
