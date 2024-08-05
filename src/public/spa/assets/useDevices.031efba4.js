import{aP as M,ay as le,v as D,r as b,o as ie,aQ as I,y as v,z as B,A as n,j as e,N as re,O as N,B as a,P as p,G as g,C as d,U as ce,aR as de,aS as ue,V as $,W as V,aT as me,aU as fe,D as S,aV as ve,az as pe,K as F,R as _e,aW as Z,aX as P,aY as ge,aZ as K,a_ as he,a$ as ye,I as w,J as U,b0 as O,L as E,b1 as H,b2 as J,b3 as L,aO as T,F as W,b4 as xe,H as A,b5 as ze}from"./index.90cb454b.js";import{Q as G}from"./QTooltip.c87a9d41.js";import{Q as we}from"./QExpansionItem.8433c878.js";import{Q as ke}from"./QSelect.79c53454.js";import{_ as be,u as Ce}from"./useQsysFunc.2d269ed7.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";const Ie={class:"row no-wrap justify-between items-center"},$e={class:"row no-wrap items-center q-gutter-x-md"},Se=a("div",{class:"dialog-name"},"\uBC29\uC1A1\uC9C0\uC5ED\uC124\uC815",-1),qe={class:"dialog-caption row no-wrap items-center cursor-pointer"},Qe={class:"row justify-end q-px-sm q-gutter-x-xs items-center"},Ze=a("div",{class:"text-caption"},"\uB3D9\uC77C\uC9C0\uC5ED\uB9CC \uD45C\uC2DC",-1),Be={__name:"setSigleChannel",props:["device","zone"],setup(t){const{fnNotiWarn:x,fnNotiError:h}=M(),{dialogRef:z,onDialogCancel:k,onDialogOK:u}=le(),o=t,c=D(),m=b([]),l=b(null),y=b(!1),f=b(0),_=b(!1),C=b(""),Y=(s,r,i)=>{r(()=>{m.value=Z.value.filter(q=>q.name.indexOf(s)>-1)})},R=async s=>{const{data:r}=await P.get(s?`/devices/barix/ip?ip=${s}`:"/devices/barix");return r.devices},ee=async()=>{const s=y.value?o.device.ipaddress.split(".").slice(0,3).join("."):null;m.value=await R(s)},te=async()=>{c.dialog({component:be,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${o.device.name} \uC9C0\uC5ED\uC758 ${C.value} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:C}}).onOk(async s=>{try{c.loading.show(),await P.put("/devices/qsys/modifiedzonename",{deviceId:o.device.deviceId,zone:o.zone.Zone,name:s}),C.value=s,await I()}catch(r){console.error(r),h("\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{c.loading.hide()}})},ne=async s=>{let r="",i=3030;if(s!==null){const q=Z.value.findIndex(j=>j._id===s),{data:Q}=await P.get("/devices/qsys/existszone",{params:{id:s}});if(Q&&Q.value&&Q.value.length)return Q.value[0].ZoneStatus.findIndex(se=>se.destination===s)===o.zone.Zone-1?void 0:(l.value=null,x("\uB2E4\uB978 \uBC29\uC1A1 \uAD6C\uAC04\uC5D0\uC11C \uC774\uBBF8 \uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4"));r=Z.value[q].ipaddress,i=Z.value[q].port}await ge({deviceId:o.device.deviceId,zone:o.zone.Zone,destination:s,ipaddress:r,port:i}),await I()},ae=()=>{K("zone:set:channel",{deviceId:o.device.deviceId,...o.zone,gain:f.value,mute:_.value,name:o.device.name})},oe=async()=>{try{_.value=!_.value,await he({deviceId:o.device.deviceId,zone:o.zone.Zone,mute:_.value,name:o.device.name}),I()}catch(s){console.error(s),h("\uBCFC\uB968 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}};return ie(async()=>{var s;await Promise.all([I()]),m.value=await R(),f.value=o.zone.gain,_.value=o.zone.mute,C.value=o.zone.name,l.value=((s=o.zone.destination)==null?void 0:s._id)||null}),(s,r)=>(v(),B(_e,{ref_key:"dialogRef",ref:z},{default:n(()=>[e(re,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:n(()=>[e(N,null,{default:n(()=>{var i;return[a("div",Ie,[a("div",$e,[e(p,{name:"location_on",color:"primary",size:"1.5rem"}),a("div",null,[Se,a("div",qe,[g(d(`${t.device.name} ${t.zone.Zone}. ${(i=C.value)!=null?i:"\uC774\uB984\uC5C6\uC74C"} \uCC44\uB110 `)+" ",1),e(p,{name:"edit",color:"primary",onClick:te})])])]),e(p,{class:"cursor-pointer",name:"refresh",size:"sm",color:"primary",onClick:ae},{default:n(()=>[e(G,null,{default:n(()=>[g("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})])]}),_:1}),e(N,null,{default:n(()=>[e(ke,{filled:"",dense:"",clearable:"",modelValue:l.value,"onUpdate:modelValue":[r[0]||(r[0]=i=>l.value=i),ne],options:m.value,label:"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD","option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:Y},{option:n(i=>[e(ce,de(ue(i.itemProps)),{default:n(()=>[e($,{avatar:""},{default:n(()=>[e(p,{name:"storage"})]),_:1}),e($,null,{default:n(()=>[e(V,null,{default:n(()=>[g(d(i.opt.name),1)]),_:2},1024),e(V,{caption:""},{default:n(()=>[g(d(i.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),a("div",Qe,[Ze,e(me,{modelValue:y.value,"onUpdate:modelValue":[r[1]||(r[1]=i=>y.value=i),ee],size:"xs","left-label":"",dense:""},null,8,["modelValue"])])]),_:1}),e(N,null,{default:n(()=>[a("div",null,[e(fe,{modelValue:f.value,"onUpdate:modelValue":[r[2]||(r[2]=i=>f.value=i),r[3]||(r[3]=i=>S(ve)({deviceId:t.device.deviceId,zone:t.zone.Zone,volume:i,name:t.device.name}))],filled:"",dense:"",label:"\uBCFC\uB968",type:"number",hint:"\uAC00\uC6A9\uBC94\uC704: -50dB ~ 10dB"},{append:n(()=>[e(p,{class:"cursor-pointer",name:_.value?"volume_off":"volume_up",color:_.value?"red-10":"primary",onClick:oe},null,8,["name","color"])]),_:1},8,["modelValue"])])]),_:1}),e(pe,{align:"right"},{default:n(()=>[e(F,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:S(k)},null,8,["onClick"]),e(F,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:S(u)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}};const Ve=t=>(H("data-v-64f9ff3d"),t=t(),J(),t),De={class:"floating-position q-gutter-x-xs row no-wrap items-center"},Ne={class:"floating-font"},Pe={class:""},Ae={key:0},Ue={class:"column items-end text-caption"},Ge={class:"row q-gutter-x-xs cursor-pointer"},Me=["href"],Re={key:1},je={class:"column items-end text-caption"},Fe=Ve(()=>a("div",null,"Local",-1)),Oe={class:"row q-gutter-x-xs"},Ee={__name:"statusDevice",props:["zone","device"],setup(t){ye();const x=D(),h=u=>u&&u.status?u.streamurl?"green":"yellow":"red",z=u=>{switch(u){case 1:case 2:return"bg-red text-white";case 3:case 4:return"bg-green-2"}},k=(u,o)=>{x.dialog({component:Be,componentProps:{device:u,zone:o}})};return(u,o)=>{var c;return v(),w("div",{class:O(["borderd q-pt-md q-px-sm q-pb-sm q-gutter-sx",t.zone.Active?z(t.zone.Priority):""]),style:{position:"relative","min-width":"100px"}},[a("div",De,[a("span",Ne,d(t.zone.gain),1),t.zone.mute?(v(),B(p,{key:0,name:"volume_off",color:"red-10"})):U("",!0),e(p,{class:"cursor-pointer",name:"settings",color:"primary",onClick:o[0]||(o[0]=m=>k(t.device,t.zone))})]),a("div",Pe,[a("span",null,d(t.zone.Zone)+". ",1),a("span",{class:O(t.zone.name?"text-black text-bold":"text-grey-5")},d((c=t.zone.name)!=null?c:"\uC774\uB984\uC5C6\uC74C"),3)]),t.zone.destination?(v(),w("div",Ae,[a("div",null,[e(E,{class:"q-my-sm"})]),a("div",Ue,[a("div",Ge,[g(d(t.zone.destination.name)+" ",1),e(p,{name:"circle",color:h(t.zone.destination)},null,8,["color"])]),a("a",{href:`http://${t.zone.destination.ipaddress}`,target:"_blank"},d(t.zone.destination.ipaddress),9,Me)])])):(v(),w("div",Re,[a("div",null,[e(E,{class:"q-my-sm"})]),a("div",je,[Fe,a("div",Oe,"Channel "+d(t.zone.Zone),1)])]))],2)}}};var Le=X(Ee,[["__scopeId","data-v-64f9ff3d"]]);const Te=t=>(H("data-v-6b50ef25"),t=t(),J(),t),We={class:"text-caption text-red-10"},Ke={key:0,class:"row no-wrap justify-start items-center q-gutter-x-sm header-font text-red-10"},He=Te(()=>a("span",null,"\uC9C0\uC5ED \uBC29\uC1A1\uC911",-1)),Je={class:"row q-pa-md q-gutter-sm"},Xe={__name:"broadcastStatus",setup(t){const{fnNotiInfo:x}=M(),{fnBroadcastCancel:h}=Ce();D();const z=c=>c.filter(m=>m.Active).length,k=c=>!!(A.value.isAdmin||A.value.zones&&A.value.zones.includes(c)),u=c=>{x(`${c.name}\uC758 \uC0C1\uD0DC \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),K("zone:get:active",{...c})},o=c=>{const{storage:m}=c;let l="";if(m){const{total:y,free:f}=m;Math.round(f/y*100)<=10&&(l=`\uC800\uC7A5\uC18C\uAC00 ${Math.round(f/y*100)}% \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`)}return l};return(c,m)=>(v(!0),w(W,null,L(S(xe),(l,y)=>(v(),B(we,{key:y,"header-class":"bg-grey-1","default-opened":""},{header:n(()=>[e($,{avatar:""},{default:n(()=>[e(p,{color:l.connected?"primary":"red-10",name:"location_on",size:"md"},null,8,["color"])]),_:2},1024),e($,null,{default:n(()=>[e(V,null,{default:n(()=>[a("div",null,[g(d(l.name)+" ",1),k(l.deviceId)?(v(),B(p,{key:0,class:"q-ml-sm cursor-pointer",color:"grey",name:"refresh",onClick:T(f=>u(l),["prevent","stop"])},{default:n(()=>[e(G,null,{default:n(()=>[g("\uC804\uCCB4 \uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"])):U("",!0)])]),_:2},1024),e(V,{caption:""},{default:n(()=>[g(d(l.ipaddress),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:n(()=>[a("div",We,d(o(l)),1),z(l.ZoneStatus)?(v(),w("div",Ke,[g(d(z(l.ZoneStatus))+" ",1),He,e(p,{class:"cursor-pointer",name:"cancel",size:"xs",color:"red-10",onClick:T(f=>S(h)(l),["prevent","stop"])},{default:n(()=>[e(G,null,{default:n(()=>[g("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])])):U("",!0)]),_:2},1024)]),default:n(()=>[a("div",Je,[(v(!0),w(W,null,L(l.ZoneStatus,(f,_)=>(v(),w("div",{key:_},[e(Le,{zone:f,device:l},null,8,["zone","device"])]))),128))])]),_:2},1024))),128))}};var lt=X(Xe,[["__scopeId","data-v-6b50ef25"]]);const it=()=>{const{fnNotiInfo:t,fnNotiError:x}=M(),h=D();return{fnGetAllDevices:async()=>{try{h.loading.show({message:"\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911\uC785\uB2C8\uB2E4."}),await I(),await ze()}catch{x("\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{h.loading.hide()}}}};export{lt as B,it as u};
