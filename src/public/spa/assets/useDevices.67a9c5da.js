import{aP as M,ay as oe,v as D,r as C,o as se,aQ as T,aR as I,aS as b,y as v,z as Z,A as n,j as e,N as ie,O as V,B as o,P as f,G as _,C as u,U as le,aT as re,aU as ce,V as $,W as B,aV as de,D as S,aW as ue,az as me,K as U,R as ve,aX as F,aY as fe,aZ as W,a_ as pe,a$ as _e,I as k,J as P,b0 as G,L as O,b1 as K,b2 as H,b3 as E,aO as L,F as j,b4 as ge,H as N}from"./index.0e464c24.js";import{Q as A}from"./QTooltip.2c2c6b70.js";import{Q as he}from"./QExpansionItem.2a99eabc.js";import{Q as ye}from"./QSelect.daa0a13e.js";import{_ as ze,u as xe}from"./useQsysFunc.50523508.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";const ke={class:"row no-wrap justify-between items-center"},we={class:"row no-wrap items-center q-gutter-x-md"},Ce=o("div",{class:"dialog-name"},"\uBC29\uC1A1\uC9C0\uC5ED\uC124\uC815",-1),be={class:"dialog-caption row no-wrap items-center cursor-pointer"},Ie={__name:"setSigleChannel",props:["device","zone"],setup(t){const{fnNotiWarn:z,fnNotiError:g}=M(),{dialogRef:x,onDialogCancel:w,onDialogOK:m}=oe(),a=t,i=D(),p=C([]),s=C(null),h=C(0),r=C(!1),y=C(""),X=(c,d,l)=>{d(()=>{p.value=b.value.filter(q=>q.name.indexOf(c)>-1)})},Y=async()=>{i.dialog({component:ze,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${a.device.name} \uC9C0\uC5ED\uC758 ${y.value} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:y}}).onOk(async c=>{try{i.loading.show(),await F.put("/devices/qsys/modifiedzonename",{deviceId:a.device.deviceId,zone:a.zone.Zone,name:c}),y.value=c,await I()}catch(d){console.error(d),g("\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{i.loading.hide()}})},ee=async c=>{let d="",l=3030;if(c!==null){const q=b.value.findIndex(R=>R._id===c),{data:Q}=await F.get("/devices/qsys/existszone",{params:{id:c}});if(Q&&Q.value&&Q.value.length)return Q.value[0].ZoneStatus.findIndex(ae=>ae.destination===c)===a.zone.Zone-1?void 0:(s.value=null,z("\uB2E4\uB978 \uBC29\uC1A1 \uAD6C\uAC04\uC5D0\uC11C \uC774\uBBF8 \uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4"));d=b.value[q].ipaddress,l=b.value[q].port}await fe({deviceId:a.device.deviceId,zone:a.zone.Zone,destination:c,ipaddress:d,port:l}),await I()},te=()=>{W("zone:set:channel",{deviceId:a.device.deviceId,...a.zone,gain:h.value,mute:r.value,name:a.device.name})},ne=async()=>{try{r.value=!r.value,await pe({deviceId:a.device.deviceId,zone:a.zone.Zone,mute:r.value,name:a.device.name}),I()}catch(c){console.error(c),g("\uBCFC\uB968 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}};return se(async()=>{await Promise.all([T(),I()]),p.value=b.value,h.value=a.zone.gain,r.value=a.zone.mute,y.value=a.zone.name,a.zone.destination&&a.zone.destination._id&&(s.value=a.zone.destination._id)}),(c,d)=>(v(),Z(ve,{ref_key:"dialogRef",ref:x},{default:n(()=>[e(ie,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:n(()=>[e(V,null,{default:n(()=>{var l;return[o("div",ke,[o("div",we,[e(f,{name:"location_on",color:"primary",size:"1.5rem"}),o("div",null,[Ce,o("div",be,[_(u(`${t.device.name} ${t.zone.Zone}. ${(l=y.value)!=null?l:"\uC774\uB984\uC5C6\uC74C"} \uCC44\uB110 `)+" ",1),e(f,{name:"edit",color:"primary",onClick:Y})])])]),e(f,{class:"cursor-pointer",name:"refresh",size:"sm",color:"primary",onClick:te},{default:n(()=>[e(A,null,{default:n(()=>[_("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})])]}),_:1}),e(V,null,{default:n(()=>[e(ye,{filled:"",dense:"",clearable:"",modelValue:s.value,"onUpdate:modelValue":[d[0]||(d[0]=l=>s.value=l),ee],options:p.value,label:"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD","option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:X},{option:n(l=>[e(le,re(ce(l.itemProps)),{default:n(()=>[e($,{avatar:""},{default:n(()=>[e(f,{name:"storage"})]),_:1}),e($,null,{default:n(()=>[e(B,null,{default:n(()=>[_(u(l.opt.name),1)]),_:2},1024),e(B,{caption:""},{default:n(()=>[_(u(l.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"])]),_:1}),e(V,null,{default:n(()=>[o("div",null,[e(de,{modelValue:h.value,"onUpdate:modelValue":[d[1]||(d[1]=l=>h.value=l),d[2]||(d[2]=l=>S(ue)({deviceId:t.device.deviceId,zone:t.zone.Zone,volume:l,name:t.device.name}))],filled:"",dense:"",label:"\uBCFC\uB968",type:"number",hint:"\uAC00\uC6A9\uBC94\uC704: -50dB ~ 10dB"},{append:n(()=>[e(f,{class:"cursor-pointer",name:r.value?"volume_off":"volume_up",color:r.value?"red-10":"primary",onClick:ne},null,8,["name","color"])]),_:1},8,["modelValue"])])]),_:1}),e(me,{align:"right"},{default:n(()=>[e(U,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:S(w)},null,8,["onClick"]),e(U,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:S(m)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}};const $e=t=>(K("data-v-64061b9c"),t=t(),H(),t),Se={class:"floating-position q-gutter-x-xs row no-wrap items-center"},qe={class:"floating-font"},Qe={class:""},Ze={key:0},Be={class:"column items-end text-caption"},De={class:"row q-gutter-x-xs cursor-pointer"},Ve=["href"],Ne={key:1},Pe={class:"column items-end text-caption"},Ae=$e(()=>o("div",null,"Local",-1)),Me={class:"row q-gutter-x-xs"},Re={__name:"statusDevice",props:["zone","device"],setup(t){_e();const z=D(),g=m=>m&&m.status?m.streamurl?"green":"yellow":"red",x=m=>{switch(m){case 1:case 2:return"bg-red text-white";case 3:case 4:return"bg-green-2"}},w=(m,a)=>{z.dialog({component:Ie,componentProps:{device:m,zone:a}})};return(m,a)=>{var i;return v(),k("div",{class:G(["borderd q-pt-md q-px-sm q-pb-sm q-gutter-sx",t.zone.Active?x(t.zone.Priority):""]),style:{position:"relative","min-width":"100px"}},[o("div",Se,[o("span",qe,u(t.zone.gain),1),t.zone.mute?(v(),Z(f,{key:0,name:"volume_off",color:"red-10"})):P("",!0),e(f,{class:"cursor-pointer",name:"settings",color:"primary",onClick:a[0]||(a[0]=p=>w(t.device,t.zone))})]),o("div",Qe,[o("span",null,u(t.zone.Zone)+". ",1),o("span",{class:G(t.zone.name?"text-black text-bold":"text-grey-5")},u((i=t.zone.name)!=null?i:"\uC774\uB984\uC5C6\uC74C"),3)]),t.zone.destination?(v(),k("div",Ze,[o("div",null,[e(O,{class:"q-my-sm"})]),o("div",Be,[o("div",De,[_(u(t.zone.destination.name)+" ",1),e(f,{name:"circle",color:g(t.zone.destination)},null,8,["color"])]),o("a",{href:`http://${t.zone.destination.ipaddress}`,target:"_blank"},u(t.zone.destination.ipaddress),9,Ve)])])):(v(),k("div",Ne,[o("div",null,[e(O,{class:"q-my-sm"})]),o("div",Pe,[Ae,o("div",Me,"Channel "+u(t.zone.Zone),1)])]))],2)}}};var Ue=J(Re,[["__scopeId","data-v-64061b9c"]]);const Fe=t=>(K("data-v-ac16c3b0"),t=t(),H(),t),Ge={class:"text-caption text-red-10"},Oe={key:0,class:"row no-wrap justify-start items-center q-gutter-x-sm header-font text-red-10"},Ee=Fe(()=>o("span",null,"\uC9C0\uC5ED \uBC29\uC1A1\uC911",-1)),Le={class:"row q-pa-md q-gutter-sm"},je={__name:"broadcastStatus",setup(t){const{fnNotiInfo:z}=M(),{fnBroadcastCancel:g}=xe();D();const x=i=>i.filter(p=>p.Active).length,w=i=>!!(N.value.isAdmin||N.value.zones&&N.value.zones.includes(i)),m=i=>{z(`${i.name}\uC758 \uC804\uCCB4 \uC124\uC815 \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),W("zone:set:device",{...i})},a=i=>{const{storage:p}=i;let s="";if(p){const{total:h,free:r}=p;Math.round(r/h*100)<=10&&(s=`\uC800\uC7A5\uC18C\uAC00 ${Math.round(r/h*100)}% \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`)}return s};return(i,p)=>(v(!0),k(j,null,E(S(ge),(s,h)=>(v(),Z(he,{key:h,"header-class":"bg-grey-1"},{header:n(()=>[e($,{avatar:""},{default:n(()=>[e(f,{color:s.connected?"primary":"red-10",name:"location_on",size:"md"},null,8,["color"])]),_:2},1024),e($,null,{default:n(()=>[e(B,null,{default:n(()=>[o("div",null,[_(u(s.name)+" ",1),w(s.deviceId)?(v(),Z(f,{key:0,class:"q-ml-sm cursor-pointer",color:"grey",name:"refresh",onClick:L(r=>m(s),["prevent","stop"])},{default:n(()=>[e(A,null,{default:n(()=>[_("\uC804\uCCB4 \uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"])):P("",!0)])]),_:2},1024),e(B,{caption:""},{default:n(()=>[_(u(s.ipaddress),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:n(()=>[o("div",Ge,u(a(s)),1),x(s.ZoneStatus)?(v(),k("div",Oe,[_(u(x(s.ZoneStatus))+" ",1),Ee,e(f,{class:"cursor-pointer",name:"cancel",size:"xs",color:"red-10",onClick:L(r=>S(g)(s),["prevent","stop"])},{default:n(()=>[e(A,null,{default:n(()=>[_("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])])):P("",!0)]),_:2},1024)]),default:n(()=>[o("div",Le,[(v(!0),k(j,null,E(s.ZoneStatus,(r,y)=>(v(),k("div",{key:y},[e(Ue,{zone:r,device:s},null,8,["zone","device"])]))),128))])]),_:2},1024))),128))}};var et=J(je,[["__scopeId","data-v-ac16c3b0"]]);const tt=()=>{const{fnNotiInfo:t,fnNotiError:z}=M(),g=D();return{fnGetAllDevices:async()=>{try{g.loading.show({message:"\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911\uC785\uB2C8\uB2E4."}),await I(),await T()}catch{z("\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{g.loading.hide()}}}};export{et as B,tt as u};
