import{i as ie,ax as re,K as j,v as M,u as F,r as $,o as H,Z as _,x as d,y as S,z as o,k as e,L as le,M as U,A as n,N as v,D as g,B as m,J as x,G as Q,aP as de,U as ce,aQ as ue,aR as me,V as I,W as D,aS as ve,aT as fe,az as pe,H as T,O as _e,aU as q,aV as ye,aW as N,E as y,aX as P,F as R,aY as E,I as K,aZ as ge,a_ as xe,a$ as W}from"./index.0736cdf9.js";import{Q as G}from"./QTooltip.ddc34b6b.js";import{Q as he}from"./QExpansionItem.2b470ddb.js";import{u as A}from"./barix.a82f2337.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";const ze={class:"row no-wrap justify-between items-center"},ke={class:"row no-wrap items-center q-gutter-x-md"},we=n("div",{class:"dialog-name"},"\uBC29\uC1A1\uC9C0\uC5ED\uC124\uC815",-1),$e={class:"dialog-caption row no-wrap items-center cursor-pointer"},Se={class:"row justify-end q-px-sm q-gutter-x-xs items-center"},Ce=n("div",{class:"text-caption"},"\uB3D9\uC77C\uC9C0\uC5ED\uB9CC \uD45C\uC2DC",-1),be={__name:"DialogZone",props:["device","zone"],setup(t){const u=ie("api"),{dialogRef:f,onDialogCancel:p,onDialogOK:h}=re(),{user:c}=j(M()),{barix:s}=j(A()),a=t,z=F(),w=$([]),Z=$(null),O=$(!1),C=$(0),k=$(!1),b=$(""),X=(i,r,l)=>{r(()=>{w.value=s.value.filter(B=>B.name.indexOf(i)>-1)})},Y=async()=>{const i=O.value?a.device.ipaddress.split(".").slice(0,3).join("."):null;w.value=await A().fnGetBarixByIp(i)},ee=async()=>{if(!c.value.isAdmin)return q().warn("\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","\uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694.");z.dialog({component:ye,componentProps:{title:"\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD",caption:`${a.device.name} \uC9C0\uC5ED\uC758 ${b.value} \uC9C0\uC5ED \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4.`,name:b}}).onOk(async i=>{try{z.loading.show(),await u.put("/devices/qsys/modifiedzonename",{deviceId:a.device.deviceId,zone:a.zone.Zone,name:i}),b.value=i,await _().fnGetQsys()}catch(r){console.error(r),q().error("\uC9C0\uC5ED \uC774\uB984 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{z.loading.hide()}})},te=async i=>{try{let r="",l=3030;if(i!==null){const B=s.value.findIndex(L=>L._id===i),{data:V}=await u.get("/devices/qsys/existszone",{params:{id:i}});if(V&&V.value&&V.value.length)return V.value[0].ZoneStatus.findIndex(se=>se.destination===i)===a.zone.Zone-1?void 0:(Z.value=null,q().warn("\uB2E4\uB978 \uBC29\uC1A1 \uAD6C\uAC04\uC5D0\uC11C \uC774\uBBF8 \uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4"));r=s.value[B].ipaddress,l=s.value[B].port}await u.put("/devices/qsys/zoneupdate",{deviceId:a.device.deviceId,zone:a.zone.Zone,destination:i,ipaddress:r,port:l}),await _().fnSendAllQsysData()}catch(r){console.error("fnSelecBarix",r)}},ne=()=>{N("zone:set:channel",{deviceId:a.device.deviceId,...a.zone,gain:C.value,mute:k.value,name:a.device.name})},oe=async i=>{try{C.value=i,await _().fnSetVolume({deviceId:a.device.deviceId,zone:a.zone.Zone,volume:i,name:a.device.name}),N("qsys:devices",{})}catch(r){console.error(r),q().error("\uBCFC\uB968 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}},ae=async()=>{try{k.value=!k.value,await _().fnSetMute({deviceId:a.device.deviceId,zone:a.zone.Zone,mute:k.value,name:a.device.name}),N("qsys:devices",{})}catch(i){console.error(i),q().error("\uBCFC\uB968 \uBCC0\uACBD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}};return H(async()=>{var i;await _().fnGetQsys(),c.value.isAdmin&&await A().fnGetBarix(),w.value=await A().fnGetBarixByIp(),C.value=a.zone.gain,k.value=a.zone.mute,b.value=a.zone.name,Z.value=((i=a.zone.destination)==null?void 0:i._id)||null}),(i,r)=>(d(),S(_e,{ref_key:"dialogRef",ref:f},{default:o(()=>[e(le,{class:"q-dialog-plugin bg-trans",style:{"border-radius":"8px"}},{default:o(()=>[e(U,null,{default:o(()=>{var l;return[n("div",ze,[n("div",ke,[e(v,{name:"location_on",color:"primary",size:"1.5rem"}),n("div",null,[we,n("div",$e,[g(m(`${t.device.name} ${t.zone.Zone}. ${(l=b.value)!=null?l:"\uC774\uB984\uC5C6\uC74C"} \uCC44\uB110 `)+" ",1),x(c).isAdmin?(d(),S(v,{key:0,class:"cursor-pointer",name:"edit",color:"primary",onClick:ee})):Q("",!0)])])]),e(v,{class:"cursor-pointer",name:"refresh",size:"sm",color:"primary",onClick:ne},{default:o(()=>[e(G,null,{default:o(()=>[g("\uC0C8\uB85C\uACE0\uCE68")]),_:1})]),_:1})])]}),_:1}),x(c).isAdmin?(d(),S(U,{key:0},{default:o(()=>[e(de,{filled:"",dense:"",clearable:"",modelValue:Z.value,"onUpdate:modelValue":[r[0]||(r[0]=l=>Z.value=l),te],options:w.value,label:"\uB124\uD2B8\uC6CC\uD06C \uC218\uC2E0\uAE30 \uC120\uD0DD","option-value":"_id","option-label":"name","hide-selected":"","use-input":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":"",onFilter:X},{option:o(l=>[e(ce,ue(me(l.itemProps)),{default:o(()=>[e(I,{avatar:""},{default:o(()=>[e(v,{name:"storage"})]),_:1}),e(I,null,{default:o(()=>[e(D,null,{default:o(()=>[g(m(l.opt.name),1)]),_:2},1024),e(D,{caption:""},{default:o(()=>[g(m(l.opt.ipaddress),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),n("div",Se,[Ce,e(ve,{modelValue:O.value,"onUpdate:modelValue":[r[1]||(r[1]=l=>O.value=l),Y],size:"xs","left-label":"",dense:""},null,8,["modelValue"])])]),_:1})):Q("",!0),e(U,null,{default:o(()=>[n("div",null,[e(fe,{modelValue:C.value,"onUpdate:modelValue":[r[2]||(r[2]=l=>C.value=l),r[3]||(r[3]=l=>oe(l))],filled:"",dense:"",label:"\uBCFC\uB968",type:"number",hint:"\uAC00\uC6A9\uBC94\uC704: -50dB ~ 10dB"},{append:o(()=>[e(v,{class:"cursor-pointer",name:k.value?"volume_off":"volume_up",color:k.value?"red-10":"primary",onClick:ae},null,8,["name","color"])]),_:1},8,["modelValue"])])]),_:1}),e(pe,{align:"right"},{default:o(()=>[e(T,{round:"",flat:"",color:"red-10",icon:"cancel",onClick:x(p)},null,8,["onClick"]),e(T,{round:"",flat:"","no-caps":"",color:"primary",icon:"check_circle",onClick:x(h)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512))}},qe={class:"text-caption text-red-10"},Ie={key:0,class:"row no-wrap justify-start items-center q-gutter-x-sm header-font text-red-10"},Qe=n("span",null,"\uC9C0\uC5ED \uBC29\uC1A1\uC911",-1),Ze={__name:"OnAir",props:{device:Object},setup(t){const u=f=>f.filter(p=>p.Active).length;return(f,p)=>(d(),y(R,null,[n("div",qe,m(x(_)().fnCheckStorage(t.device)),1),u(t.device.ZoneStatus)?(d(),y("div",Ie,[g(m(u(t.device.ZoneStatus))+" ",1),Qe,e(v,{class:"cursor-pointer",name:"cancel",size:"xs",color:"red-10",onClick:p[0]||(p[0]=P(h=>x(_)().fnBroadcastCancel(t.device),["prevent","stop"]))},{default:o(()=>[e(G,null,{default:o(()=>[g("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:1})])):Q("",!0)],64))}};const Be=t=>(ge("data-v-3e19ff1e"),t=t(),xe(),t),Ve={class:"floating-position q-gutter-x-xs row no-wrap items-center"},Ae={class:"floating-font"},je={class:""},De={key:0},Pe={class:"column items-end text-caption"},Ge={class:"row q-gutter-x-xs cursor-pointer"},Oe=["href"],Ue={key:1},Ne={class:"column items-end text-caption"},Re=Be(()=>n("div",null,"Local",-1)),Me={class:"row q-gutter-x-xs"},Fe={__name:"Zone",props:{device:Object,zone:Object},setup(t){const u=F(),f=c=>({1:"bg-red text-white",2:"bg-red text-white",3:"bg-green-2",4:"bg-green-2"})[c]||"",p=c=>!c||!c.status?"red":c.streamurl?"green":"yellow",h=(c,s)=>{u.dialog({component:be,componentProps:{device:c,zone:s}})};return(c,s)=>{var a;return d(),y("div",{class:E(["borderd q-pt-md q-px-sm q-pb-sm q-gutter-sx",t.zone.Active?f(t.zone.Priority):""]),style:{position:"relative","min-width":"100px"}},[n("div",Ve,[n("span",Ae,m(t.zone.gain),1),t.zone.mute?(d(),S(v,{key:0,name:"volume_off",color:"red-10"})):Q("",!0),e(v,{class:"cursor-pointer",name:"settings",color:"primary",onClick:s[0]||(s[0]=z=>h(t.device,t.zone))})]),n("div",je,[n("span",null,m(t.zone.Zone)+". ",1),n("span",{class:E(t.zone.name?"text-black text-bold":"text-grey-5")},m((a=t.zone.name)!=null?a:"\uC774\uB984\uC5C6\uC74C"),3)]),t.zone.destination?(d(),y("div",De,[n("div",null,[e(K,{class:"q-my-sm"})]),n("div",Pe,[n("div",Ge,[g(m(t.zone.destination.name)+" ",1),e(v,{name:"circle",color:p(t.zone.destination)},null,8,["color"])]),n("a",{href:`http://${t.zone.destination.ipaddress}`,target:"_blank"},m(t.zone.destination.ipaddress),9,Oe)])])):(d(),y("div",Ue,[n("div",null,[e(K,{class:"q-my-sm"})]),n("div",Ne,[Re,n("div",Me,"Channel "+m(t.zone.Zone),1)])]))],2)}}};var Le=J(Fe,[["__scopeId","data-v-3e19ff1e"]]);const Te=["href"],Ee={key:1},Ke={class:"row q-pa-md q-gutter-sm"},We={__name:"BroadcastStatus",setup(t){F();const{user:u}=j(M()),{qsys:f}=j(_()),p=h=>!!(u.value.isAdmin||u.value.zones&&u.value.zones.includes(h));return(h,c)=>(d(!0),y(R,null,W(x(f),(s,a)=>(d(),S(he,{key:a,"header-class":"bg-grey-1","default-opened":""},{header:o(()=>[e(I,{avatar:""},{default:o(()=>[e(v,{color:s.connected?"primary":"red-10",name:"location_on",size:"md"},null,8,["color"])]),_:2},1024),e(I,null,{default:o(()=>[e(D,null,{default:o(()=>[n("div",null,[g(m(s.name)+" ",1),p(s.deviceId)?(d(),S(v,{key:0,class:"q-ml-sm cursor-pointer",color:"grey",name:"refresh",onClick:P(z=>x(_)().fnRefreshAll(s),["prevent","stop"])},{default:o(()=>[e(G,null,{default:o(()=>[g("\uC804\uCCB4 \uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"])):Q("",!0)])]),_:2},1024),e(D,{caption:""},{default:o(()=>[x(u).isAdmin?(d(),y("div",{key:0,onClick:c[0]||(c[0]=P(()=>{},["stop"]))},[n("a",{href:`https://${s.ipaddress}`,target:"_blank"},m(s.ipaddress),9,Te)])):(d(),y("div",Ee,m(s.ipaddress),1))]),_:2},1024)]),_:2},1024),e(I,{side:""},{default:o(()=>[e(Ze,{device:s},null,8,["device"])]),_:2},1024)]),default:o(()=>[n("div",Ke,[(d(!0),y(R,null,W(s.ZoneStatus,(z,w)=>(d(),y("div",{key:w},[e(Le,{device:s,zone:z},null,8,["device","zone"])]))),128))])]),_:2},1024))),128))}};var He=J(We,[["__scopeId","data-v-f0e401c0"]]);const Je={class:"borderd"},Xe={class:"q-px-lg q-py-sm row no-wrap justify-between items-center bg-grey-3"},Ye={class:"row no-wrap items-center q-gutter-x-sm q-py-xs"},et=n("div",{class:"font-main"},"\uBC29\uC1A1 \uC0C1\uD0DC",-1),rt={__name:"Status",setup(t){return H(async()=>{M().user&&await _().fnGetQsys()}),(u,f)=>(d(),y("div",Je,[n("div",Xe,[n("div",Ye,[e(v,{name:"map",color:"primary",size:"md"}),et]),e(v,{class:"cursor-pointer",name:"refresh",color:"primary",size:"sm",onClick:f[0]||(f[0]=P(p=>x(_)().fnGetQsys(),["prevent","stop"]))},{default:o(()=>[e(G,null,{default:o(()=>[g("\uC0C8\uB85C \uACE0\uCE68")]),_:1})]),_:1})]),e(He)]))}};export{rt as _};
