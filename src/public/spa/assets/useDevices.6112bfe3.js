import{ay as ae,v as B,r as I,o as oe,aP as b,y as f,z as Q,A as n,j as e,N as se,O as D,B as o,P as v,G as _,C as u,U as ie,aQ as le,aR as re,V as $,W as Z,aS as ce,D as S,aT as de,az as ue,K as R,R as me,aU as U,aV as fe,aW as j,aX as ve,I as k,J as N,aY as F,L as G,aZ as T,a_ as W,a$ as O,aO as E,F as L,b0 as pe,H as V}from"./index.97053f43.js";import{Q as P}from"./QTooltip.03395df0.js";import{Q as _e}from"./QExpansionItem.ab481757.js";import{Q as ge}from"./QSelect.2330ee49.js";import{_ as he,u as ye}from"./useQsysFunc.7d059b86.js";import{f as K,b as q,u as ze}from"./useBarix.7a02a859.js";import{u as A}from"./useNotify.145f9922.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";const xe={class:"row no-wrap justify-between items-center"},ke={class:"row no-wrap items-center q-gutter-x-md"},we=o("div",{class:"dialog-name"},"\uBC29\uC1A1\uC9C0\uC5ED\uC124\uC815",-1),Ce={class:"dialog-caption row no-wrap items-center cursor-pointer"},Ie={__name:"setSigleChannel",props:["device","zone"],setup(t){const{fnNotiWarn:z,fnNotiError:g}=A(),{dialogRef:x,onDialogCancel:w,onDialogOK:m}=ae(),a=t,i=B(),p=I([]),s=I(null),h=I(0),r=I(!1),y=I(""),J=(c,d,l)=>{d(()=>{p.value=q.value.filter(C=>C.name.indexOf(c)>-1)})},X=async()=>{i.dialog({component:he,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${a.device.name} \uC9C0\uC5ED\uC758 ${y.value} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:y}}).onOk(async c=>{try{i.loading.show(),await U.put("/devices/qsys/modifiedzonename",{deviceId:a.device.deviceId,zone:a.zone.Zone,name:c}),y.value=c,await b()}catch(d){console.error(d),g("\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{i.loading.hide()}})},Y=async c=>{let d="";if(c!==null){const l=q.value.findIndex(M=>M._id===c),{data:C}=await U.get("/devices/qsys/existszone",{params:{id:c}});if(C&&C.value&&C.value.length)return C.value[0].ZoneStatus.findIndex(ne=>ne.destination===c)===a.zone.Zone-1?void 0:(s.value=null,z("\uB2E4\uB978 \uBC29\uC1A1 \uAD6C\uAC04\uC5D0\uC11C \uC774\uBBF8 \uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4"));d=q.value[l].ipaddress}await fe({deviceId:a.device.deviceId,zone:a.zone.Zone,destination:c,ipaddress:d}),await b()},ee=()=>{j("zone:set:channel",{deviceId:a.device.deviceId,...a.zone,gain:h.value,mute:r.value,name:a.device.name})},te=async()=>{try{r.value=!r.value,await ve({deviceId:a.device.deviceId,zone:a.zone.Zone,mute:r.value,name:a.device.name}),b()}catch(c){console.error(c),g("\uBCFC\uB968 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}};return oe(async()=>{await Promise.all([K(),b()]),p.value=q.value,h.value=a.zone.gain,r.value=a.zone.mute,y.value=a.zone.name,a.zone.destination&&a.zone.destination._id&&(s.value=a.zone.destination._id)}),(c,d)=>(f(),Q(me,{ref_key:"dialogRef",ref:x},{default:n(()=>[e(se,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:n(()=>[e(D,null,{default:n(()=>{var l;return[o("div",xe,[o("div",ke,[e(v,{name:"location_on",color:"primary",size:"1.5rem"}),o("div",null,[we,o("div",Ce,[_(u(`${t.device.name} ${t.zone.Zone}. ${(l=y.value)!=null?l:"\uC774\uB984\uC5C6\uC74C"} \uCC44\uB110 `)+" ",1),e(v,{name:"edit",color:"primary",onClick:X})])])]),e(v,{class:"cursor-pointer",name:"refresh",size:"sm",color:"primary",onClick:ee},{default:n(()=>[e(P,null,{default:n(()=>[_("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})])]}),_:1}),e(D,null,{default:n(()=>[e(ge,{filled:"",dense:"",clearable:"",modelValue:s.value,"onUpdate:modelValue":[d[0]||(d[0]=l=>s.value=l),Y],options:p.value,label:"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD","option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:J},{option:n(l=>[e(ie,le(re(l.itemProps)),{default:n(()=>[e($,{avatar:""},{default:n(()=>[e(v,{name:"storage"})]),_:1}),e($,null,{default:n(()=>[e(Z,null,{default:n(()=>[_(u(l.opt.name),1)]),_:2},1024),e(Z,{caption:""},{default:n(()=>[_(u(l.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"])]),_:1}),e(D,null,{default:n(()=>[o("div",null,[e(ce,{modelValue:h.value,"onUpdate:modelValue":[d[1]||(d[1]=l=>h.value=l),d[2]||(d[2]=l=>S(de)({deviceId:t.device.deviceId,zone:t.zone.Zone,volume:l,name:t.device.name}))],filled:"",dense:"",label:"\uBCFC\uB968",type:"number",hint:"\uAC00\uC6A9\uBC94\uC704: -50dB ~ 10dB"},{append:n(()=>[e(v,{class:"cursor-pointer",name:r.value?"volume_off":"volume_up",color:r.value?"red-10":"primary",onClick:te},null,8,["name","color"])]),_:1},8,["modelValue"])])]),_:1}),e(ue,{align:"right"},{default:n(()=>[e(R,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:S(w)},null,8,["onClick"]),e(R,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:S(m)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}};const be=t=>(T("data-v-64061b9c"),t=t(),W(),t),$e={class:"floating-position q-gutter-x-xs row no-wrap items-center"},Se={class:"floating-font"},qe={class:""},Qe={key:0},Ze={class:"column items-end text-caption"},Be={class:"row q-gutter-x-xs cursor-pointer"},De=["href"],Ve={key:1},Ne={class:"column items-end text-caption"},Pe=be(()=>o("div",null,"Local",-1)),Ae={class:"row q-gutter-x-xs"},Me={__name:"statusDevice",props:["zone","device"],setup(t){ze();const z=B(),g=m=>m&&m.status?m.streamurl?"green":"yellow":"red",x=m=>{switch(m){case 1:case 2:return"bg-red text-white";case 3:case 4:return"bg-green-2"}},w=(m,a)=>{z.dialog({component:Ie,componentProps:{device:m,zone:a}})};return(m,a)=>{var i;return f(),k("div",{class:F(["borderd q-pt-md q-px-sm q-pb-sm q-gutter-sx",t.zone.Active?x(t.zone.Priority):""]),style:{position:"relative","min-width":"100px"}},[o("div",$e,[o("span",Se,u(t.zone.gain),1),t.zone.mute?(f(),Q(v,{key:0,name:"volume_off",color:"red-10"})):N("",!0),e(v,{class:"cursor-pointer",name:"settings",color:"primary",onClick:a[0]||(a[0]=p=>w(t.device,t.zone))})]),o("div",qe,[o("span",null,u(t.zone.Zone)+". ",1),o("span",{class:F(t.zone.name?"text-black text-bold":"text-grey-5")},u((i=t.zone.name)!=null?i:"\uC774\uB984\uC5C6\uC74C"),3)]),t.zone.destination?(f(),k("div",Qe,[o("div",null,[e(G,{class:"q-my-sm"})]),o("div",Ze,[o("div",Be,[_(u(t.zone.destination.name)+" ",1),e(v,{name:"circle",color:g(t.zone.destination)},null,8,["color"])]),o("a",{href:`http://${t.zone.destination.ipaddress}`,target:"_blank"},u(t.zone.destination.ipaddress),9,De)])])):(f(),k("div",Ve,[o("div",null,[e(G,{class:"q-my-sm"})]),o("div",Ne,[Pe,o("div",Ae,"Channel "+u(t.zone.Zone),1)])]))],2)}}};var Re=H(Me,[["__scopeId","data-v-64061b9c"]]);const Ue=t=>(T("data-v-ac16c3b0"),t=t(),W(),t),Fe={class:"text-caption text-red-10"},Ge={key:0,class:"row no-wrap justify-start items-center q-gutter-x-sm header-font text-red-10"},Oe=Ue(()=>o("span",null,"\uC9C0\uC5ED \uBC29\uC1A1\uC911",-1)),Ee={class:"row q-pa-md q-gutter-sm"},Le={__name:"broadcastStatus",setup(t){const{fnNotiInfo:z}=A(),{fnBroadcastCancel:g}=ye();B();const x=i=>i.filter(p=>p.Active).length,w=i=>!!(V.value.isAdmin||V.value.zones&&V.value.zones.includes(i)),m=i=>{z(`${i.name}\uC758 \uC804\uCCB4 \uC124\uC815 \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),j("zone:set:device",{...i})},a=i=>{const{storage:p}=i;let s="";if(p){const{total:h,free:r}=p;Math.round(r/h*100)<=10&&(s=`\uC800\uC7A5\uC18C\uAC00 ${Math.round(r/h*100)}% \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`)}return s};return(i,p)=>(f(!0),k(L,null,O(S(pe),(s,h)=>(f(),Q(_e,{key:h,"header-class":"bg-grey-1"},{header:n(()=>[e($,{avatar:""},{default:n(()=>[e(v,{color:s.connected?"primary":"red-10",name:"location_on",size:"md"},null,8,["color"])]),_:2},1024),e($,null,{default:n(()=>[e(Z,null,{default:n(()=>[o("div",null,[_(u(s.name)+" ",1),w(s.deviceId)?(f(),Q(v,{key:0,class:"q-ml-sm cursor-pointer",color:"grey",name:"refresh",onClick:E(r=>m(s),["prevent","stop"])},{default:n(()=>[e(P,null,{default:n(()=>[_("\uC804\uCCB4 \uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"])):N("",!0)])]),_:2},1024),e(Z,{caption:""},{default:n(()=>[_(u(s.ipaddress),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:n(()=>[o("div",Fe,u(a(s)),1),x(s.ZoneStatus)?(f(),k("div",Ge,[_(u(x(s.ZoneStatus))+" ",1),Oe,e(v,{class:"cursor-pointer",name:"cancel",size:"xs",color:"red-10",onClick:E(r=>S(g)(s),["prevent","stop"])},{default:n(()=>[e(P,null,{default:n(()=>[_("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])])):N("",!0)]),_:2},1024)]),default:n(()=>[o("div",Ee,[(f(!0),k(L,null,O(s.ZoneStatus,(r,y)=>(f(),k("div",{key:y},[e(Re,{zone:r,device:s},null,8,["zone","device"])]))),128))])]),_:2},1024))),128))}};var tt=H(Le,[["__scopeId","data-v-ac16c3b0"]]);const nt=()=>{const{fnNotiInfo:t,fnNotiError:z}=A(),g=B();return{fnGetAllDevices:async()=>{try{g.loading.show({message:"\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911\uC785\uB2C8\uB2E4."}),await b(),await K()}catch{z("\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{g.loading.hide()}}}};export{tt as B,nt as u};
