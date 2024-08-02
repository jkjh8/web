import{c,bM as E,bN as ut,a1 as Pe,bi as it,af as st,ag as ct,bO as vt,r as q,bJ as dt,bP as Ie,bQ as ft,bR as mt,bS as _e,w as J,bT as ht,n as Be,h as u,q as Z,a8 as yt,g as Re,bU as gt,K as j,bL as bt,R as _t}from"./index.15dfea7e.js";import{Q as wt}from"./QMenu.e2c685de.js";import{u as Dt,c as xt}from"./position-engine.b1da28a3.js";function Ct(){let n=Object.create(null);return{getCache:(g,y)=>n[g]===void 0?n[g]=typeof y=="function"?y():y:n[g],setCache(g,y){n[g]=y},hasCache(g){return n.hasOwnProperty(g)},clearCache(g){g!==void 0?delete n[g]:n={}}}}const Mt=["gregorian","persian"],qt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:n=>Mt.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},kt=["update:modelValue"];function F(n){return n.year+"/"+E(n.month)+"/"+E(n.day)}function Ht(n,g){const y=c(()=>n.disable!==!0&&n.readonly!==!0),B=c(()=>y.value===!0?0:-1),D=c(()=>{const f=[];return n.color!==void 0&&f.push(`bg-${n.color}`),n.textColor!==void 0&&f.push(`text-${n.textColor}`),f.join(" ")});function A(){return n.locale!==void 0?{...g.lang.date,...n.locale}:g.lang.date}function b(f){const V=new Date,Y=f===!0?null:0;if(n.calendar==="persian"){const H=ut(V);return{year:H.jy,month:H.jm,day:H.jd}}return{year:V.getFullYear(),month:V.getMonth()+1,day:V.getDate(),hour:Y,minute:Y,second:Y,millisecond:Y}}return{editable:y,tabindex:B,headerClass:D,getLocale:A,getCurrentDate:b}}const R=20,St=["Calendar","Years","Months"],$e=n=>St.includes(n),we=n=>/^-?[\d]+\/[0-1]\d$/.test(n),W=" \u2014 ";function I(n){return n.year+"/"+E(n.month)}var jt=Pe({name:"QDate",props:{...qt,...it,...st,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:we},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:we},navigationMaxYearMonth:{type:String,validator:we},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:$e}},emits:[...kt,"rangeStart","rangeEnd","navigation"],setup(n,{slots:g,emit:y}){const{proxy:B}=Re(),{$q:D}=B,A=ct(n,D),{getCache:b}=Ct(),{tabindex:f,headerClass:V,getLocale:Y,getCurrentDate:H}=Ht(n,D);let S;const re=vt(n),ue=gt(re),U=q(null),m=q(Se()),h=q(Y()),Ee=c(()=>Se()),Ae=c(()=>Y()),O=c(()=>H()),i=q(Ve(m.value,h.value)),C=q(n.defaultView),De=D.lang.rtl===!0?"right":"left",p=q(De.value),ie=q(De.value),se=i.value.year,ee=q(se-se%R-(se<0?R:0)),x=q(null),Ne=c(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(A.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),$=c(()=>n.color||"primary"),N=c(()=>n.textColor||"white"),te=c(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ce=c(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),k=c(()=>ce.value.filter(e=>typeof e=="string").map(e=>me(e,m.value,h.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),Q=c(()=>{const e=t=>me(t,m.value,h.value);return ce.value.filter(t=>dt(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),ae=c(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Ie(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),ve=c(()=>n.calendar==="persian"?F:(e,t,a)=>ft(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?m.value:t,a===void 0?h.value:a,e.year,e.timezoneOffset)),K=c(()=>k.value.length+Q.value.reduce((e,t)=>e+1+mt(ae.value(t.to),ae.value(t.from)),0)),xe=c(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(x.value!==null){const a=x.value.init,l=ae.value(a);return h.value.daysShort[l.getDay()]+", "+h.value.monthsShort[a.month-1]+" "+a.day+W+"?"}if(K.value===0)return W;if(K.value>1)return`${K.value} ${h.value.pluralDay}`;const e=k.value[0],t=ae.value(e);return isNaN(t.valueOf())===!0?W:h.value.headerTitle!==void 0?h.value.headerTitle(t,e):h.value.daysShort[t.getDay()]+", "+h.value.monthsShort[e.month-1]+" "+e.day}),Qe=c(()=>k.value.concat(Q.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),ze=c(()=>k.value.concat(Q.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),Ce=c(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(K.value===0)return W;if(K.value>1){const e=Qe.value,t=ze.value,a=h.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+W+a[t.month-1]+" ":e.month!==t.month?W+a[t.month-1]:"")+" "+t.year}return k.value[0].year}),ne=c(()=>{const e=[D.iconSet.datetime.arrowLeft,D.iconSet.datetime.arrowRight];return D.lang.rtl===!0?e.reverse():e}),Me=c(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):h.value.firstDayOfWeek),Le=c(()=>{const e=h.value.daysShort,t=Me.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),T=c(()=>{const e=i.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():_e(e.year,e.month)}),We=c(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),_=c(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),w=c(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),de=c(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return _.value!==null&&_.value.year>=i.value.year&&(e.year.prev=!1,_.value.year===i.value.year&&_.value.month>=i.value.month&&(e.month.prev=!1)),w.value!==null&&w.value.year<=i.value.year&&(e.year.next=!1,w.value.year===i.value.year&&w.value.month<=i.value.month&&(e.month.next=!1)),e}),le=c(()=>{const e={};return k.value.forEach(t=>{const a=I(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),qe=c(()=>{const e={};return Q.value.forEach(t=>{const a=I(t.from),l=I(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===l?t.to.day:void 0,range:t}),a<l){let o;const{year:v,month:r}=t.from,s=r<12?{year:v,month:r+1}:{year:v+1,month:1};for(;(o=I(s))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?t.to.day:void 0,range:t}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),G=c(()=>{if(x.value===null)return;const{init:e,initHash:t,final:a,finalHash:l}=x.value,[o,v]=t<=l?[e,a]:[a,e],r=I(o),s=I(v);if(r!==M.value&&s!==M.value)return;const d={};return r===M.value?(d.from=o.day,d.includeFrom=!0):d.from=1,s===M.value?(d.to=v.day,d.includeTo=!0):d.to=T.value,d}),M=c(()=>I(i.value)),Je=c(()=>{const e={};if(n.options===void 0){for(let a=1;a<=T.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=T.value;a++){const l=M.value+"/"+E(a);e[a]=t(l)}return e}),Ue=c(()=>{const e={};if(n.events===void 0)for(let t=1;t<=T.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=T.value;a++){const l=M.value+"/"+E(a);e[a]=t(l)===!0&&We.value(l)}}return e}),Ke=c(()=>{let e,t;const{year:a,month:l}=i.value;if(n.calendar!=="persian")e=new Date(a,l-1,1),t=new Date(a,l-1,0).getDate();else{const o=Ie(a,l,1);e=new Date(o.gy,o.gm-1,o.gd);let v=l-1,r=a;v===0&&(v=12,r--),t=_e(r,v)}return{days:e.getDay()-Me.value-1,endDay:t}}),ke=c(()=>{const e=[],{days:t,endDay:a}=Ke.value,l=t<0?t+7:t;if(l<6)for(let r=a-l;r<=a;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=T.value;r++){const s={i:r,event:Ue.value[r],classes:[]};Je.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(le.value[M.value]!==void 0&&le.value[M.value].forEach(r=>{const s=o+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:$.value,textColor:N.value})}),qe.value[M.value]!==void 0&&qe.value[M.value].forEach(r=>{if(r.from!==void 0){const s=o+r.from-1,d=o+(r.to||T.value)-1;for(let X=s;X<=d;X++)Object.assign(e[X],{range:r.range,unelevated:!0,color:$.value,textColor:N.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[d],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=o+r.to-1;for(let d=o;d<=s;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:$.value,textColor:N.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=o+T.value-1;for(let d=o;d<=s;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:$.value,textColor:N.value})}}),G.value!==void 0){const r=o+G.value.from-1,s=o+G.value.to-1;for(let d=r;d<=s;d++)e[d].color=$.value,e[d].editRange=!0;G.value.includeFrom===!0&&(e[r].editRangeFrom=!0),G.value.includeTo===!0&&(e[s].editRangeTo=!0)}i.value.year===O.value.year&&i.value.month===O.value.month&&(e[o+O.value.day-1].today=!0);const v=e.length%7;if(v>0){const r=7-v;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Ge=c(()=>n.disable===!0?{"aria-disabled":"true"}:{});J(()=>n.modelValue,e=>{if(S===e)S=0;else{const t=Ve(m.value,h.value);z(t.year,t.month,t)}}),J(C,()=>{U.value!==null&&B.$el.contains(document.activeElement)===!0&&U.value.focus()}),J(()=>i.value.year+"|"+i.value.month,()=>{y("navigation",{year:i.value.year,month:i.value.month})}),J(Ee,e=>{Fe(e,h.value,"mask"),m.value=e}),J(Ae,e=>{Fe(m.value,e,"locale"),h.value=e});function He(){const{year:e,month:t,day:a}=O.value,l={...i.value,year:e,month:t,day:a},o=le.value[I(l)];(o===void 0||o.includes(l.day)===!1)&&ye(l),fe(l.year,l.month)}function Xe(e){$e(e)===!0&&(C.value=e)}function Ze(e,t){["month","year"].includes(e)&&(e==="month"?Oe:he)(t===!0?-1:1)}function fe(e,t){C.value="Calendar",z(e,t)}function pe(e,t){if(n.range===!1||!e){x.value=null;return}const a=Object.assign({...i.value},e),l=t!==void 0?Object.assign({...i.value},t):a;x.value={init:a,initHash:F(a),final:l,finalHash:F(l)},fe(a.year,a.month)}function Se(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function me(e,t,a){return ht(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ve(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Ye();const l=a[a.length-1],o=me(l.from!==void 0?l.from:l,e,t);return o.dateHash===null?Ye():o}function Ye(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=O.value!==void 0?O.value:H();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+E(t)+"/01"}}function Oe(e){let t=i.value.year,a=Number(i.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),z(t,a),te.value===!0&&oe("month")}function he(e){const t=Number(i.value.year)+e;z(t,i.value.month),te.value===!0&&oe("year")}function et(e){z(e,i.value.month),C.value=n.defaultView==="Years"?"Months":"Calendar",te.value===!0&&oe("year")}function tt(e){z(i.value.year,e),C.value="Calendar",te.value===!0&&oe("month")}function at(e,t){const a=le.value[t];(a!==void 0&&a.includes(e.day)===!0?ge:ye)(e)}function P(e){return{year:e.year,month:e.month,day:e.day}}function z(e,t,a){if(_.value!==null&&e<=_.value.year&&((t<_.value.month||e<_.value.year)&&(t=_.value.month),e=_.value.year),w.value!==null&&e>=w.value.year&&((t>w.value.month||e>w.value.year)&&(t=w.value.month),e=w.value.year),a!==void 0){const{hour:o,minute:v,second:r,millisecond:s,timezoneOffset:d,timeHash:X}=a;Object.assign(i.value,{hour:o,minute:v,second:r,millisecond:s,timezoneOffset:d,timeHash:X})}const l=e+"/"+E(t)+"/01";l!==i.value.dateHash&&(p.value=i.value.dateHash<l==(D.lang.rtl!==!0)?"left":"right",e!==i.value.year&&(ie.value=p.value),Be(()=>{ee.value=e-e%R-(e<0?R:0),Object.assign(i.value,{year:e,month:t,day:1,dateHash:l})}))}function je(e,t,a){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;S=l;const{reason:o,details:v}=Te(t,a);y("update:modelValue",l,o,v)}function oe(e){const t=k.value[0]!==void 0&&k.value[0].dateHash!==null?{...k.value[0]}:{...i.value};Be(()=>{t.year=i.value.year,t.month=i.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():_e(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const l=L(t);S=l;const{details:o}=Te("",t);y("update:modelValue",l,e,o)})}function Te(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...P(t.target),from:P(t.from),to:P(t.to)}}:{reason:`${e}-day`,details:P(t)}}function L(e,t,a){return e.from!==void 0?{from:ve.value(e.from,t,a),to:ve.value(e.to,t,a)}:ve.value(e,t,a)}function ye(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=F(e.from),l=F(e.to),o=k.value.filter(r=>r.dateHash<a||r.dateHash>l),v=Q.value.filter(({from:r,to:s})=>s.dateHash<a||r.dateHash>l);t=o.concat(v).concat(e).map(r=>L(r))}else{const a=ce.value.slice();a.push(L(e)),t=a}else t=L(e);je(t,"add",e)}function ge(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=L(e);e.from!==void 0?t=n.modelValue.filter(l=>l.from!==void 0?l.from!==a.from&&l.to!==a.to:!0):t=n.modelValue.filter(l=>l!==a),t.length===0&&(t=null)}je(t,"remove",e)}function Fe(e,t,a){const l=k.value.concat(Q.value).map(o=>L(o,e,t)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);y("update:modelValue",(n.multiple===!0?l:l[0])||null,a)}function nt(){if(n.minimal!==!0)return u("div",{class:"q-date__header "+V.value},[u("div",{class:"relative-position"},[u(Z,{name:"q-transition--fade"},()=>u("div",{key:"h-yr-"+Ce.value,class:"q-date__header-subtitle q-date__header-link "+(C.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...b("vY",{onClick(){C.value="Years"},onKeyup(e){e.keyCode===13&&(C.value="Years")}})},[Ce.value]))]),u("div",{class:"q-date__header-title relative-position flex no-wrap"},[u("div",{class:"relative-position col"},[u(Z,{name:"q-transition--fade"},()=>u("div",{key:"h-sub"+xe.value,class:"q-date__header-title-label q-date__header-link "+(C.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...b("vC",{onClick(){C.value="Calendar"},onKeyup(e){e.keyCode===13&&(C.value="Calendar")}})},[xe.value]))]),n.todayBtn===!0?u(j,{class:"q-date__header-today self-start",icon:D.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:f.value,onClick:He}):null])])}function be({label:e,type:t,key:a,dir:l,goTo:o,boundaries:v,cls:r}){return[u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ne.value[0],tabindex:f.value,disable:v.prev===!1,...b("go-#"+t,{onClick(){o(-1)}})})]),u("div",{class:"relative-position overflow-hidden flex flex-center"+r},[u(Z,{name:"q-transition--jump-"+l},()=>u("div",{key:a},[u(j,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:f.value,...b("view#"+t,{onClick:()=>{C.value=t}})})]))]),u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ne.value[1],tabindex:f.value,disable:v.next===!1,...b("go+#"+t,{onClick(){o(1)}})})])]}const lt={Calendar:()=>[u("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[u("div",{class:"q-date__navigation row items-center no-wrap"},be({label:h.value.months[i.value.month-1],type:"Months",key:i.value.month,dir:p.value,goTo:Oe,boundaries:de.value.month,cls:" col"}).concat(be({label:i.value.year,type:"Years",key:i.value.year,dir:ie.value,goTo:he,boundaries:de.value.year,cls:""}))),u("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Le.value.map(e=>u("div",{class:"q-date__calendar-item"},[u("div",e)]))),u("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[u(Z,{name:"q-transition--slide-"+p.value},()=>u("div",{key:M.value,class:"q-date__calendar-days fit"},ke.value.map(e=>u("div",{class:e.classes},[e.in===!0?u(j,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:f.value,...b("day#"+e.i,{onClick:()=>{ot(e.i)},onMouseover:()=>{rt(e.i)}})},e.event!==!1?()=>u("div",{class:"q-date__event bg-"+e.event}):null):u("div",""+e.i)]))))])])],Months(){const e=i.value.year===O.value.year,t=l=>_.value!==null&&i.value.year===_.value.year&&_.value.month>l||w.value!==null&&i.value.year===w.value.year&&w.value.month<l,a=h.value.monthsShort.map((l,o)=>{const v=i.value.month===o+1;return u("div",{class:"q-date__months-item flex flex-center"},[u(j,{class:e===!0&&O.value.month===o+1?"q-date__today":null,flat:v!==!0,label:l,unelevated:v,color:v===!0?$.value:null,textColor:v===!0?N.value:null,tabindex:f.value,disable:t(o+1),...b("month#"+o,{onClick:()=>{tt(o+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(u("div",{class:"row no-wrap full-width"},[be({label:i.value.year,type:"Years",key:i.value.year,dir:ie.value,goTo:he,boundaries:de.value.year,cls:" col"})])),u("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=ee.value,t=e+R,a=[],l=o=>_.value!==null&&_.value.year>o||w.value!==null&&w.value.year<o;for(let o=e;o<=t;o++){const v=i.value.year===o;a.push(u("div",{class:"q-date__years-item flex flex-center"},[u(j,{key:"yr"+o,class:O.value.year===o?"q-date__today":null,flat:!v,label:o,dense:!0,unelevated:v,color:v===!0?$.value:null,textColor:v===!0?N.value:null,tabindex:f.value,disable:l(o),...b("yr#"+o,{onClick:()=>{et(o)}})})]))}return u("div",{class:"q-date__view q-date__years flex flex-center"},[u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ne.value[0],tabindex:f.value,disable:l(e),...b("y-",{onClick:()=>{ee.value-=R}})})]),u("div",{class:"q-date__years-content col self-stretch row items-center"},a),u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ne.value[1],tabindex:f.value,disable:l(t),...b("y+",{onClick:()=>{ee.value+=R}})})])])}};function ot(e){const t={...i.value,day:e};if(n.range===!1){at(t,M.value);return}if(x.value===null){const a=ke.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&a.range!==void 0){ge({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){ge(t);return}const l=F(t);x.value={init:t,initHash:l,final:t,finalHash:l},y("rangeStart",P(t))}else{const a=x.value.initHash,l=F(t),o=a<=l?{from:x.value.init,to:t}:{from:t,to:x.value.init};x.value=null,ye(a===l?t:{target:t,...o}),y("rangeEnd",{from:P(o.from),to:P(o.to)})}}function rt(e){if(x.value!==null){const t={...i.value,day:e};Object.assign(x.value,{final:t,finalHash:F(t)})}}return Object.assign(B,{setToday:He,setView:Xe,offsetCalendar:Ze,setCalendarTo:fe,setEditingRange:pe}),()=>{const e=[u("div",{class:"q-date__content col relative-position"},[u(Z,{name:"q-transition--fade"},lt[C.value])])],t=yt(g.default);return t!==void 0&&e.push(u("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&ue(e,"push"),u("div",{class:Ne.value,...Ge.value},[nt(),u("div",{ref:U,class:"q-date__main col column",tabindex:-1},e)])}}}),Tt=Pe({name:"QPopupProxy",props:{...Dt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(n,{slots:g,emit:y,attrs:B}){const{proxy:D}=Re(),{$q:A}=D,b=q(!1),f=q(null),V=c(()=>parseInt(n.breakpoint,10)),{canShow:Y}=xt({showing:b});function H(){return A.screen.width<V.value||A.screen.height<V.value?"dialog":"menu"}const S=q(H()),re=c(()=>S.value==="menu"?{maxHeight:"99vh"}:{});J(()=>H(),m=>{b.value!==!0&&(S.value=m)});function ue(m){b.value=!0,y("show",m)}function U(m){b.value=!1,S.value=H(),y("hide",m)}return Object.assign(D,{show(m){Y(m)===!0&&f.value.show(m)},hide(m){f.value.hide(m)},toggle(m){f.value.toggle(m)}}),bt(D,"currentComponent",()=>({type:S.value,ref:f.value})),()=>{const m={ref:f,...re.value,...B,onShow:ue,onHide:U};let h;return S.value==="dialog"?h=_t:(h=wt,Object.assign(m,{target:n.target,contextMenu:n.contextMenu,noParentEvent:!0,separateClosePopup:!0})),u(h,m,g.default)}}});export{Tt as Q,jt as a,kt as b,Ht as c,F as g,qt as u};
