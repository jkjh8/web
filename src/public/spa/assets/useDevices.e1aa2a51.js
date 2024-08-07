import{aR as Z,aS as T,v as $,y as l,J as i,aT as w,z as v,A as n,j as o,W as g,R as d,X as q,B as e,H as u,C as r,av as I,K as y,D as Q,F as b,aU as A,M as B,aV as j,I as x,aW as F,aX as R,aY as W,aZ as X}from"./index.ea04af02.js";import{Q as N}from"./QTooltip.273758f3.js";import{Q as H}from"./QExpansionItem.d2cbf802.js";import{a as J}from"./useSocket.0b1072d2.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";const D=_=>(F("data-v-17e7344d"),_=_(),R(),_),U={class:"text-caption text-red-10"},Y={key:0,class:"row no-wrap justify-start items-center q-gutter-x-sm header-font text-red-10"},O=D(()=>e("span",null,"\uC9C0\uC5ED \uBC29\uC1A1\uC911",-1)),z={class:"row q-pa-md q-gutter-sm"},tt={class:"floating-position q-gutter-x-xs row no-wrap items-center"},et={class:"floating-font"},st={class:""},at={key:0},ot={class:"column items-end text-caption"},nt={class:"row q-gutter-x-xs cursor-pointer"},rt=["href"],lt={key:1},ct={class:"column items-end text-caption"},it=D(()=>e("div",null,"Local",-1)),dt={class:"row q-gutter-x-xs"},ut={__name:"broadcastStatus",setup(_){const{fnNotiInfo:f}=Z(),{fnBroadcastCancel:m}=T(),k=$(),h=s=>s.filter(c=>c.Active).length,V=s=>!!(x.value.isAdmin||x.value.zones&&x.value.zones.includes(s)),G=s=>{f(`${s.name}\uC758 \uC0C1\uD0DC \uAC12 \uAC31\uC2E0\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`,"\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."),J("zone:get:active",{...s})},M=s=>{const{storage:c}=s;let a="";if(c){const{total:p,free:t}=c;Math.round(t/p*100)<=10&&(a=`\uC800\uC7A5\uC18C\uAC00 ${Math.round(t/p*100)}% \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`)}return a},P=s=>s&&s.status?s.streamurl?"green":"yellow":"red",E=s=>{switch(s){case 1:case 2:return"bg-red text-white";case 3:case 4:return"bg-green-2"}},L=(s,c)=>{k.dialog({component:SetSigleChannel,componentProps:{device:s,zone:c}})};return(s,c)=>(l(!0),i(b,null,w(Q(j),(a,p)=>(l(),v(H,{key:p,"header-class":"bg-grey-1","default-opened":""},{header:n(()=>[o(g,{avatar:""},{default:n(()=>[o(d,{color:a.connected?"primary":"red-10",name:"location_on",size:"md"},null,8,["color"])]),_:2},1024),o(g,null,{default:n(()=>[o(q,null,{default:n(()=>[e("div",null,[u(r(a.name)+" ",1),V(a.deviceId)?(l(),v(d,{key:0,class:"q-ml-sm cursor-pointer",color:"grey",name:"refresh",onClick:I(t=>G(a),["prevent","stop"])},{default:n(()=>[o(N,null,{default:n(()=>[u("\uC804\uCCB4 \uAC31\uC2E0")]),_:1})]),_:2},1032,["onClick"])):y("",!0)])]),_:2},1024),o(q,{caption:""},{default:n(()=>[u(r(a.ipaddress),1)]),_:2},1024)]),_:2},1024),o(g,{side:""},{default:n(()=>[e("div",U,r(M(a)),1),h(a.ZoneStatus)?(l(),i("div",Y,[u(r(h(a.ZoneStatus))+" ",1),O,o(d,{class:"cursor-pointer",name:"cancel",size:"xs",color:"red-10",onClick:I(t=>Q(m)(a),["prevent","stop"])},{default:n(()=>[o(N,null,{default:n(()=>[u("\uBC29\uC1A1\uCDE8\uC18C")]),_:1})]),_:2},1032,["onClick"])])):y("",!0)]),_:2},1024)]),default:n(()=>[e("div",z,[(l(!0),i(b,null,w(a.ZoneStatus,(t,S)=>{var C;return l(),i("div",{key:S},[e("div",{class:A(["borderd q-pt-md q-px-sm q-pb-sm q-gutter-sx",t.Active?E(t.Priority):""]),style:{position:"relative","min-width":"100px"}},[e("div",tt,[e("span",et,r(t.gain),1),t.mute?(l(),v(d,{key:0,name:"volume_off",color:"red-10"})):y("",!0),o(d,{class:"cursor-pointer",name:"settings",color:"primary",onClick:_t=>L(a,t)},null,8,["onClick"])]),e("div",st,[e("span",null,r(t.Zone)+". ",1),e("span",{class:A(t.name?"text-black text-bold":"text-grey-5")},r((C=t.name)!=null?C:"\uC774\uB984\uC5C6\uC74C"),3)]),t.destination?(l(),i("div",at,[e("div",null,[o(B,{class:"q-my-sm"})]),e("div",ot,[e("div",nt,[u(r(t.destination.name)+" ",1),o(d,{name:"circle",color:P(t.destination)},null,8,["color"])]),e("a",{href:`http://${t.destination.ipaddress}`,target:"_blank"},r(t.destination.ipaddress),9,rt)])])):(l(),i("div",lt,[e("div",null,[o(B,{class:"q-my-sm"})]),e("div",ct,[it,e("div",dt,"Channel "+r(t.Zone),1)])]))],2)])}),128))])]),_:2},1024))),128))}};var gt=K(ut,[["__scopeId","data-v-17e7344d"]]);const yt=()=>{const{fnNotiInfo:_,fnNotiError:f}=Z(),m=$();return{fnGetAllDevices:async()=>{try{m.loading.show({message:"\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911\uC785\uB2C8\uB2E4."}),await W(),await X()}catch{f("\uAE30\uAE30 \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","\uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{m.loading.hide()}}}};export{gt as B,yt as u};
