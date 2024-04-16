import{a3 as pe,i as Oe,as as Se,bp as $e,aB as Ie,aC as Me,c as S,x as _,aU as Ve,g as me,r as D,b4 as Be,ap as Pe,a1 as We,a5 as Ge,a8 as He,b7 as Xe,av as Ze,D as Je,Z as Ke,E as Ye,bj as ea,bi as aa,bo as ce,j as ve,p as B,bh as ta,o as R,d as N,w as s,f as u,e as q,bq as la,l as I,P as U,k as L,t as oe,R as Qe,Q as oa,az as ra,a as J,b6 as xe,m as ne,z as na}from"./index.55b3bbb2.js";import{Q as T}from"./QTooltip.299970c8.js";import{Q as sa}from"./QPage.014eb5d5.js";import{u as _e}from"./use-quasar.b13b0874.js";import{Q as ia,a as da}from"./QTree.d2f70a83.js";import{Q as ua,b as se,a as ie}from"./QTable.67afda2b.js";import{Q as ze}from"./QTr.a6e68a89.js";import{_ as Ce}from"./dialogInput.289f5a57.js";import{b as ca,h as qe,f as fa}from"./format.cbf00d5d.js";import{g as pa,u as ma,_ as va}from"./dialogConfirm.93f2a88e.js";import{g as _a}from"./usePlayer.2f6e5bf2.js";import"./QMenu.8a5978a6.js";import"./QSlideTransition.a18f5665.js";import"./QSelect.f25c5934.js";import"./QLinearProgress.fc14e763.js";var ga=pe({name:"QUploaderAddTrigger",setup(){const e=Oe($e,Se);return e===Se&&console.error("QUploaderAddTrigger needs to be child of QUploader"),e}});const ha={...Ie,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},fe=50,De=2*fe,Ee=De*Math.PI,ya=Math.round(Ee*1e3)/1e3;var Fa=pe({name:"QCircularProgress",props:{...ha,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:p}){const{proxy:{$q:n}}=me(),r=Me(e),i=S(()=>{const w=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-w}deg)`:`rotate3d(0, 0, 1, ${w-90}deg)`}}),c=S(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),l=S(()=>De/(1-e.thickness/2)),d=S(()=>`${l.value/2} ${l.value/2} ${l.value} ${l.value}`),f=S(()=>ca(e.value,e.min,e.max)),z=S(()=>e.max-e.min),C=S(()=>e.thickness/2*l.value),M=S(()=>{const w=(e.max-f.value)/z.value,a=e.rounded===!0&&f.value<e.max&&w<.25?C.value/2*(1-w/.25):0;return Ee*w+a});function j({thickness:w,offset:a,color:b,cls:E,rounded:h}){return _("circle",{class:"q-circular-progress__"+E+(b!==void 0?` text-${b}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":w,"stroke-dasharray":ya,"stroke-dashoffset":a,"stroke-linecap":h,cx:l.value,cy:l.value,r:fe})}return()=>{const w=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&w.push(_("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:fe-C.value/2,cx:l.value,cy:l.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&w.push(j({cls:"track",thickness:C.value,offset:0,color:e.trackColor})),w.push(j({cls:"circle",thickness:C.value,offset:M.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const a=[_("svg",{class:"q-circular-progress__svg",style:i.value,viewBox:d.value,"aria-hidden":"true"},w)];return e.showValue===!0&&a.push(_("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},p.default!==void 0?p.default():[_("div",f.value)])),_("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:f.value},Ve(p.internal,a))}}});function ae(e,p,n,r){const i=[];return e.forEach(c=>{r(c)===!0?i.push(c):p.push({failedPropValidation:n,file:c})}),i}function de(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Pe(e)}const ba={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},wa=["rejected"];function ka({editable:e,dnd:p,getFileInput:n,addFilesToQueue:r}){const{props:i,emit:c,proxy:l}=me(),d=D(null),f=S(()=>i.accept!==void 0?i.accept.split(",").map(o=>(o=o.trim(),o==="*"?"*/":(o.endsWith("/*")&&(o=o.slice(0,o.length-1)),o.toUpperCase()))):null),z=S(()=>parseInt(i.maxFiles,10)),C=S(()=>parseInt(i.maxTotalSize,10));function M(o){if(e.value)if(o!==Object(o)&&(o={target:null}),o.target!==null&&o.target.matches('input[type="file"]')===!0)o.clientX===0&&o.clientY===0&&Be(o);else{const P=n();P&&P!==o.target&&P.click(o)}}function j(o){e.value&&o&&r(null,o)}function w(o,P,H,X){let v=Array.from(P||o.target.files);const k=[],A=()=>{k.length!==0&&c("rejected",k)};if(i.accept!==void 0&&f.value.indexOf("*/")===-1&&(v=ae(v,k,"accept",y=>f.value.some(x=>y.type.toUpperCase().startsWith(x)||y.name.toUpperCase().endsWith(x))),v.length===0))return A();if(i.maxFileSize!==void 0){const y=parseInt(i.maxFileSize,10);if(v=ae(v,k,"max-file-size",x=>x.size<=y),v.length===0)return A()}if(i.multiple!==!0&&v.length!==0&&(v=[v[0]]),v.forEach(y=>{y.__key=y.webkitRelativePath+y.lastModified+y.name+y.size}),X===!0){const y=H.map(x=>x.__key);v=ae(v,k,"duplicate",x=>y.includes(x.__key)===!1)}if(v.length===0)return A();if(i.maxTotalSize!==void 0){let y=X===!0?H.reduce((x,V)=>x+V.size,0):0;if(v=ae(v,k,"max-total-size",x=>(y+=x.size,y<=C.value)),v.length===0)return A()}if(typeof i.filter=="function"){const y=i.filter(v);v=ae(v,k,"filter",x=>y.includes(x))}if(i.maxFiles!==void 0){let y=X===!0?H.length:0;if(v=ae(v,k,"max-files",()=>(y++,y<=z.value)),v.length===0)return A()}if(A(),v.length!==0)return v}function a(o){de(o),p.value!==!0&&(p.value=!0)}function b(o){Pe(o),(o.relatedTarget!==null||We.is.safari!==!0?o.relatedTarget!==d.value:document.elementsFromPoint(o.clientX,o.clientY).includes(d.value)===!1)===!0&&(p.value=!1)}function E(o){de(o);const P=o.dataTransfer.files;P.length!==0&&r(null,P),p.value=!1}function h(o){if(p.value===!0)return _("div",{ref:d,class:`q-${o}__dnd absolute-full`,onDragenter:de,onDragover:de,onDragleave:b,onDrop:E})}return Object.assign(l,{pickFiles:M,addFiles:j}),{pickFiles:M,addFiles:j,onDragover:a,onDragleave:b,processFiles:w,getDndNode:h,maxFilesNumber:z,maxTotalSizeNumber:C}}function Ue(e){return(e*100).toFixed(2)+"%"}const Sa={...Ge,...ba,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},Ne=[...wa,"start","finish","added","removed"];function xa(e,p){const n=me(),{props:r,slots:i,emit:c,proxy:l}=n,{$q:d}=l,f=He(r,d);function z(t,F,$){if(t.__status=F,F==="idle"){t.__uploaded=0,t.__progress=0,t.__sizeLabel=qe(t.size),t.__progressLabel="0.00%";return}if(F==="failed"){l.$forceUpdate();return}t.__uploaded=F==="uploaded"?t.size:$,t.__progress=F==="uploaded"?1:Math.min(.9999,t.__uploaded/t.size),t.__progressLabel=Ue(t.__progress),l.$forceUpdate()}const C=S(()=>r.disable!==!0&&r.readonly!==!0),M=D(!1),j=D(null),w=D(null),a={files:D([]),queuedFiles:D([]),uploadedFiles:D([]),uploadedSize:D(0),updateFileStatus:z,isAlive:()=>Xe(n)===!1},{pickFiles:b,addFiles:E,onDragover:h,onDragleave:o,processFiles:P,getDndNode:H,maxFilesNumber:X,maxTotalSizeNumber:v}=ka({editable:C,dnd:M,getFileInput:ye,addFilesToQueue:Fe});Object.assign(a,e({props:r,slots:i,emit:c,helpers:a,exposeApi:t=>{Object.assign(a,t)}})),a.isBusy===void 0&&(a.isBusy=D(!1));const k=D(0),A=S(()=>k.value===0?0:a.uploadedSize.value/k.value),y=S(()=>Ue(A.value)),x=S(()=>qe(k.value)),V=S(()=>C.value===!0&&a.isUploading.value!==!0&&(r.multiple===!0||a.queuedFiles.value.length===0)&&(r.maxFiles===void 0||a.files.value.length<X.value)&&(r.maxTotalSize===void 0||k.value<v.value)),m=S(()=>C.value===!0&&a.isBusy.value!==!0&&a.isUploading.value!==!0&&a.queuedFiles.value.length!==0);Ze($e,we);const Z=S(()=>"q-uploader column no-wrap"+(f.value===!0?" q-uploader--dark q-dark":"")+(r.bordered===!0?" q-uploader--bordered":"")+(r.square===!0?" q-uploader--square no-border-radius":"")+(r.flat===!0?" q-uploader--flat no-shadow":"")+(r.disable===!0?" disabled q-uploader--disable":"")+(M.value===!0?" q-uploader--dnd":"")),K=S(()=>"q-uploader__header"+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:""));Je(a.isUploading,(t,F)=>{F===!1&&t===!0?c("start"):F===!0&&t===!1&&c("finish")});function Y(){r.disable===!1&&(a.abort(),a.uploadedSize.value=0,k.value=0,he(),a.files.value=[],a.queuedFiles.value=[],a.uploadedFiles.value=[])}function O(){r.disable===!1&&ge(["uploaded"],()=>{a.uploadedFiles.value=[]})}function re(){ge(["idle","failed"],({size:t})=>{k.value-=t,a.queuedFiles.value=[]})}function ge(t,F){if(r.disable===!0)return;const $={files:[],size:0},W=a.files.value.filter(Q=>t.indexOf(Q.__status)===-1?!0:($.size+=Q.size,$.files.push(Q),Q.__img!==void 0&&window.URL.revokeObjectURL(Q.__img.src),!1));$.files.length!==0&&(a.files.value=W,F($),c("removed",$.files))}function ue(t){r.disable||(t.__status==="uploaded"?a.uploadedFiles.value=a.uploadedFiles.value.filter(F=>F.__key!==t.__key):t.__status==="uploading"?t.__abort():k.value-=t.size,a.files.value=a.files.value.filter(F=>F.__key!==t.__key?!0:(F.__img!==void 0&&window.URL.revokeObjectURL(F.__img.src),!1)),a.queuedFiles.value=a.queuedFiles.value.filter(F=>F.__key!==t.__key),c("removed",[t]))}function he(){a.files.value.forEach(t=>{t.__img!==void 0&&window.URL.revokeObjectURL(t.__img.src)})}function ye(){return w.value||j.value.getElementsByClassName("q-uploader__input")[0]}function Fe(t,F){const $=P(t,F,a.files.value,!0),W=ye();W!=null&&(W.value=""),$!==void 0&&($.forEach(Q=>{if(a.updateFileStatus(Q,"idle"),k.value+=Q.size,r.noThumbnails!==!0&&Q.type.toUpperCase().startsWith("IMAGE")){const ke=new Image;ke.src=window.URL.createObjectURL(Q),Q.__img=ke}}),a.files.value=a.files.value.concat($),a.queuedFiles.value=a.queuedFiles.value.concat($),c("added",$),r.autoUpload===!0&&a.upload())}function be(){m.value===!0&&a.upload()}function te(t,F,$){if(t===!0){const W={type:"a",key:F,icon:d.iconSet.uploader[F],flat:!0,dense:!0};let Q;return F==="add"?(W.onClick=b,Q=we):W.onClick=$,_(B,W,Q)}}function we(){return _("input",{ref:w,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:r.accept,multiple:r.multiple===!0?"multiple":void 0,capture:r.capture,onMousedown:Be,onClick:b,onChange:Fe})}function Ae(){return i.header!==void 0?i.header(ee):[_("div",{class:"q-uploader__header-content column"},[_("div",{class:"flex flex-center no-wrap q-gutter-xs"},[te(a.queuedFiles.value.length!==0,"removeQueue",re),te(a.uploadedFiles.value.length!==0,"removeUploaded",O),a.isUploading.value===!0?_(ce,{class:"q-uploader__spinner"}):null,_("div",{class:"col column justify-center"},[r.label!==void 0?_("div",{class:"q-uploader__title"},[r.label]):null,_("div",{class:"q-uploader__subtitle"},[x.value+" / "+y.value])]),te(V.value,"add"),te(r.hideUploadBtn===!1&&m.value===!0,"upload",a.upload),te(a.isUploading.value,"clear",a.abort)])])]}function Le(){return i.list!==void 0?i.list(ee):a.files.value.map(t=>_("div",{key:t.__key,class:"q-uploader__file relative-position"+(r.noThumbnails!==!0&&t.__img!==void 0?" q-uploader__file--img":"")+(t.__status==="failed"?" q-uploader__file--failed":t.__status==="uploaded"?" q-uploader__file--uploaded":""),style:r.noThumbnails!==!0&&t.__img!==void 0?{backgroundImage:'url("'+t.__img.src+'")'}:null},[_("div",{class:"q-uploader__file-header row flex-center no-wrap"},[t.__status==="failed"?_(ve,{class:"q-uploader__file-status",name:d.iconSet.type.negative,color:"negative"}):null,_("div",{class:"q-uploader__file-header-content col"},[_("div",{class:"q-uploader__title"},[t.name]),_("div",{class:"q-uploader__subtitle row items-center no-wrap"},[t.__sizeLabel+" / "+t.__progressLabel])]),t.__status==="uploading"?_(Fa,{value:t.__progress,min:0,max:1,indeterminate:t.__progress===0}):_(B,{round:!0,dense:!0,flat:!0,icon:d.iconSet.uploader[t.__status==="uploaded"?"done":"clear"],onClick:()=>{ue(t)}})])]))}Ke(()=>{a.isUploading.value===!0&&a.abort(),a.files.value.length!==0&&he()});const ee={};for(const t in a)Ye(a[t])===!0?ea(ee,t,()=>a[t].value):ee[t]=a[t];return Object.assign(ee,{upload:be,reset:Y,removeUploadedFiles:O,removeQueuedFiles:re,removeFile:ue,pickFiles:b,addFiles:E}),aa(ee,{canAddFiles:()=>V.value,canUpload:()=>m.value,uploadSizeLabel:()=>x.value,uploadProgressLabel:()=>y.value}),p({...a,upload:be,reset:Y,removeUploadedFiles:O,removeQueuedFiles:re,removeFile:ue,pickFiles:b,addFiles:E,canAddFiles:V,canUpload:m,uploadSizeLabel:x,uploadProgressLabel:y}),()=>{const t=[_("div",{class:K.value},Ae()),_("div",{class:"q-uploader__list scroll"},Le()),H("uploader")];a.isBusy.value===!0&&t.push(_("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[_(ce)]));const F={ref:j,class:Z.value};return V.value===!0&&Object.assign(F,{onDragover:h,onDragleave:o}),_("div",F,t)}}const za=pa(Ne);var Ca=({name:e,props:p,emits:n,injectPlugin:r})=>pe({name:e,props:{...Sa,...p},emits:ta(n)===!0?{...za,...n}:[...Ne,...n],setup(i,{expose:c}){return xa(r,c)}});function G(e){return typeof e=="function"?e:()=>e}const qa={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Ua=["factoryFailed","uploaded","failed","uploading"];function Ra({props:e,emit:p,helpers:n}){const r=D([]),i=D([]),c=D(0),l=S(()=>({url:G(e.url),method:G(e.method),headers:G(e.headers),formFields:G(e.formFields),fieldName:G(e.fieldName),withCredentials:G(e.withCredentials),sendRaw:G(e.sendRaw),batch:G(e.batch)})),d=S(()=>c.value>0),f=S(()=>i.value.length!==0);let z;function C(){r.value.forEach(a=>{a.abort()}),i.value.length!==0&&(z=!0)}function M(){const a=n.queuedFiles.value.slice(0);n.queuedFiles.value=[],l.value.batch(a)?j(a):a.forEach(b=>{j([b])})}function j(a){if(c.value++,typeof e.factory!="function"){w(a,{});return}const b=e.factory(a);if(!b)p("factoryFailed",new Error("QUploader: factory() does not return properly"),a),c.value--;else if(typeof b.catch=="function"&&typeof b.then=="function"){i.value.push(b);const E=h=>{n.isAlive()===!0&&(i.value=i.value.filter(o=>o!==b),i.value.length===0&&(z=!1),n.queuedFiles.value=n.queuedFiles.value.concat(a),a.forEach(o=>{n.updateFileStatus(o,"failed")}),p("factoryFailed",h,a),c.value--)};b.then(h=>{z===!0?E(new Error("Aborted")):n.isAlive()===!0&&(i.value=i.value.filter(o=>o!==b),w(a,h))}).catch(E)}else w(a,b||{})}function w(a,b){const E=new FormData,h=new XMLHttpRequest,o=(m,Z)=>b[m]!==void 0?G(b[m])(Z):l.value[m](Z),P=o("url",a);if(!P){console.error("q-uploader: invalid or no URL specified"),c.value--;return}const H=o("formFields",a);H!==void 0&&H.forEach(m=>{E.append(m.name,m.value)});let X=0,v=0,k=0,A=0,y;h.upload.addEventListener("progress",m=>{if(y===!0)return;const Z=Math.min(A,m.loaded);n.uploadedSize.value+=Z-k,k=Z;let K=k-v;for(let Y=X;K>0&&Y<a.length;Y++){const O=a[Y];if(K>O.size)K-=O.size,X++,v+=O.size,n.updateFileStatus(O,"uploading",O.size);else{n.updateFileStatus(O,"uploading",K);return}}},!1),h.onreadystatechange=()=>{h.readyState<4||(h.status&&h.status<400?(n.uploadedFiles.value=n.uploadedFiles.value.concat(a),a.forEach(m=>{n.updateFileStatus(m,"uploaded")}),p("uploaded",{files:a,xhr:h})):(y=!0,n.uploadedSize.value-=k,n.queuedFiles.value=n.queuedFiles.value.concat(a),a.forEach(m=>{n.updateFileStatus(m,"failed")}),p("failed",{files:a,xhr:h})),c.value--,r.value=r.value.filter(m=>m!==h))},h.open(o("method",a),P),o("withCredentials",a)===!0&&(h.withCredentials=!0);const x=o("headers",a);x!==void 0&&x.forEach(m=>{h.setRequestHeader(m.name,m.value)});const V=o("sendRaw",a);a.forEach(m=>{n.updateFileStatus(m,"uploading",0),V!==!0&&E.append(o("fieldName",m),m,m.name),m.xhr=h,m.__abort=()=>{h.abort()},A+=m.size}),p("uploading",{files:a,xhr:h}),r.value.push(h),V===!0?h.send(new Blob(a)):h.send(E)}return{isUploading:d,isBusy:f,abort:C,upload:M}}var $a={name:"QUploader",props:qa,emits:Ua,injectPlugin:Ra},Ba=Ca($a);const Pa={class:"row no-wrap items-center q-pa-sm q-gutter-x-xs bg-white text-black"},Qa={class:"col q-px-sm"},Da=I("div",{class:"q-uploader__title"},"Upload Files",-1),Ea={class:"q-uploader__subtitle"},Na={__name:"dialogUpload",props:{folder:String},setup(e){const{dialogRef:p,onDialogCancel:n,onDialogOK:r}=ma(),i=_e();function c(l){i.notify({type:"negative",message:`${l.length} file(s) did not pass validation constraints`})}return(l,d)=>(R(),N(oa,{ref_key:"dialogRef",ref:p,persistent:""},{default:s(()=>[u(Ba,{class:"uploader",style:{"border-radius":"0.6rem"},multiple:"",bordered:"","with-credentials":"",url:`${q(la)}/files`,accept:"audio/*",headers:[{name:"folder",value:encodeURIComponent(e.folder)}],onRejected:c,onFinish:q(r)},{header:s(f=>[I("div",Pa,[f.queuedFiles.length>0?(R(),N(B,{key:0,round:"",flat:"",icon:"clear_all",size:"sm",onClick:f.removeQueuedFiles},{default:s(()=>[u(T,null,{default:s(()=>[U("Clear All")]),_:1})]),_:2},1032,["onClick"])):L("",!0),f.uploadedFiles.length>0?(R(),N(B,{key:1,round:"",flat:"",icon:"done_all",size:"sm"},{default:s(()=>[u(T,null,{default:s(()=>[U("Remove Uploaded Files")]),_:1})]),_:1})):L("",!0),f.isUploading?(R(),N(ce,{key:2,class:"q-uploader__spinner"})):L("",!0),I("div",Qa,[Da,I("div",Ea,oe(f.uploadSizeLabel)+" / "+oe(f.uploadProgressLabel),1)]),f.canAddFiles?(R(),N(B,{key:3,round:"",flat:"",type:"a",icon:"add_box",size:"sm",onClick:f.pickFiles},{default:s(()=>[u(ga),u(T,null,{default:s(()=>[U("Pick Files")]),_:1})]),_:2},1032,["onClick"])):L("",!0),f.canUpload?(R(),N(B,{key:4,round:"",dense:"",flat:"",icon:"cloud_upload",onClick:f.upload},{default:s(()=>[u(T,null,{default:s(()=>[U("Upload Files")]),_:1})]),_:2},1032,["onClick"])):L("",!0),f.isUploading?(R(),N(B,{key:5,round:"",flat:"",icon:"clear",size:"sm",onClick:f.abort},{default:s(()=>[u(T,null,{default:s(()=>[U("Abort Upload")]),_:1})]),_:2},1032,["onClick"])):L("",!0),u(B,{round:"",flat:"",color:"blue-grey-2",icon:"close",size:"sm",onClick:q(r)},{default:s(()=>[u(T,null,{default:s(()=>[U("Close")]),_:1})]),_:1},8,["onClick"])]),I("div",null,[u(Qe,{color:"grey-5"})])]),_:1},8,["url","headers","onFinish"])]),_:1},512))}},g=ra({files:[],folders:[],selectedFile:"",selectedFiles:[],selectedFolder:"",globalFolder:"",userFolder:""}),Ta=async()=>{try{const e=await J.get("/files/dir");g.folders=e.data.folders,g.globalFolder=e.data.globalFolder,g.userFolder=e.data.userFolder,g.selectedFolder||(g.selectedFolder=e.data.globalFolder)}catch(e){console.error(e)}},Te=async e=>{try{g.selectedFiles=[];const p=await J.get("/files",{params:{folder:e}});if(e===g.globalFolder||e===g.userFolder)g.files=p.data.files;else{const n=e.split("\\");n.pop(),g.files=[{name:"..",fullpath:n.join("\\"),type:"folder"},...p.data.files]}}catch(p){console.error(p)}},Re=async e=>{g.selectedFolder=e,await Te(e),g.selectedFiles=[]},le=async()=>{await Ta(),await Te(g.selectedFolder),g.selectedFiles=[]},je=()=>{const e=_e();return{fnMakeFolder:()=>{e.dialog({component:Ce,componentProps:{icon:"create_new_folder",title:"\uD3F4\uB354 \uC0DD\uC131",caption:"\uC0DD\uC131\uD560 \uD3F4\uB354 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.",label:"\uD3F4\uB354"}}).onOk(async d=>{try{e.loading.show(),await J.post("/files/newfolder",{folder:g.selectedFolder,name:d}),await le(),e.loading.hide()}catch(f){e.loading.hide(),console.error(f)}})},fnUploadFile:()=>{e.dialog({component:Na,componentProps:{folder:g.selectedFolder}}).onOk(async()=>{try{e.loading.show(),await le(),e.loading.hide()}catch(d){e.loading.hide(),console.error(d)}})},fnDeleteFiles:()=>{!g.selectedFiles||e.dialog({component:va,componentProps:{icon:"delete",iconColor:"red-10",title:"\uC120\uD0DD\uD55C \uD30C\uC77C \uD639\uC740 \uD3F4\uB354\uB97C \uC0AD\uC81C \uD569\uB2C8\uB2E4.",caption:`\uCD1D ${g.selectedFiles.length}\uAC1C\uC758 \uD30C\uC77C\uC744 \uC0AD\uC81C \uD569\uB2C8\uB2E4.`}}).onOk(async()=>{try{e.loading.show(),await J.delete("/files",{data:{files:g.selectedFiles}}),await le(),e.loading.hide()}catch(d){console.error(d),e.loading.hide()}})},fnRenameFile:d=>{e.dialog({component:Ce,componentProps:{icon:"edit",iconColor:"primary",title:"\uD30C\uC77C(\uD3F4\uB354)\uC774\uB984 \uBCC0\uACBD",inputValue:d.name}}).onOk(async f=>{try{e.loading.show(),await J.put("/files/rename",{oldFile:d,newName:f}),await le(),e.loading.hide()}catch(z){console.error(z),e.loading.hide()}})},fnDownloadFiles:async()=>{try{if(g.selectedFiles&&g.selectedFiles.length){e.loading.show();const d=await J.get("/files/downloads",{params:{files:JSON.stringify(g.selectedFiles)},responseType:"blob"});e.loading.hide();const f=window.URL.createObjectURL(new Blob([d.data])),z=document.createElement("a");z.href=f,z.setAttribute("download","download.zip"),document.body.appendChild(z),z.click(),z.remove()}}catch(d){e.loading.hide(),console.error(d)}},fnDownloadFile:async d=>{try{e.loading.show();const f=await J.get("/files/download",{params:{file:JSON.stringify(d)},responseType:"blob"});e.loading.hide();const z=window.URL.createObjectURL(new Blob([f.data])),C=document.createElement("a");C.href=z,C.setAttribute("download",d.base),document.body.appendChild(C),C.click(),C.remove()}catch(f){e.loading.hide(),console.error(f)}}}},ja={key:0},Aa=["onClick"],La={key:2},Oa={key:0},Ia={__name:"fileViewer",props:["selection","mode"],setup(e){const{fnRenameFile:p,fnDownloadFile:n}=je(),r=D(25);return(i,c)=>(R(),N(da,{modelValue:r.value,"onUpdate:modelValue":c[2]||(c[2]=l=>r.value=l)},{before:s(()=>[u(ia,{nodes:q(g).folders,selected:q(g).selectedFolder,"onUpdate:selected":[c[0]||(c[0]=l=>q(g).selectedFolder=l),q(Re)],"node-key":"path","no-selection-unset":"","selected-color":"primary"},null,8,["nodes","selected","onUpdate:selected"])]),after:s(()=>[u(ua,{columns:[{name:"name",label:"NAME",field:"name",align:"left",sortable:!0},{name:"size",label:"SIZE",field:"size",sortable:!0},{name:"actions",label:"ACTIONS"}],rows:q(g).files,flat:"",dense:"","row-key":"name",selection:e.selection,selected:q(g).selectedFiles,"onUpdate:selected":c[1]||(c[1]=l=>q(g).selectedFiles=l),pagination:{rowsPerPage:0},"hide-bottom":""},{header:s(l=>[u(ze,{props:l},{default:s(()=>[u(se,{style:{width:"2rem"}},{default:s(()=>[u(xe,{size:"22px",modelValue:l.selected,"onUpdate:modelValue":d=>l.selected=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),u(se,{key:"name",props:l},{default:s(()=>[U(" NAME ")]),_:2},1032,["props"]),u(se,{key:"size",props:l,style:{width:"2.5rem"}},{default:s(()=>[U(" SIZE ")]),_:2},1032,["props"]),u(se,{key:"actions",props:l,style:{width:"3.5rem"}},{default:s(()=>[U(" Actions ")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:s(l=>[u(ze,{props:l},{default:s(()=>[u(ie,{style:{width:"2rem"}},{default:s(()=>[l.row.name!==".."?(R(),N(xe,{key:0,size:"22px",modelValue:l.selected,"onUpdate:modelValue":d=>l.selected=d},null,8,["modelValue","onUpdate:modelValue"])):L("",!0)]),_:2},1024),u(ie,{key:"name",props:l},{default:s(()=>[l.row.type==="folder"?(R(),ne("span",ja,[u(ve,{name:"folder_open",color:"primary",size:"16px"})])):L("",!0),l.row.type==="folder"?(R(),ne("span",{key:1,class:"q-ml-xs cursor-pointer",onClick:d=>q(Re)(l.row.fullpath)},oe(l.row.name),9,Aa)):(R(),ne("span",La,[U(oe(l.row.name)+" ",1),e.mode!=="dialog"?(R(),N(B,{key:0,flat:"",round:"",size:"xs",color:"primary",icon:"play_arrow",onClick:d=>q(_a)(l.row)},null,8,["onClick"])):L("",!0)]))]),_:2},1032,["props"]),u(ie,{key:"size",props:l,style:{width:"2.5rem"}},{default:s(()=>[U(oe(l.row.type!=="folder"?q(fa).humanStorageSize(l.row.size):""),1)]),_:2},1032,["props"]),u(ie,{key:"actions",props:l,style:{width:"3.5rem"}},{default:s(()=>[l.row.name!==".."?(R(),ne("div",Oa,[l.row.type!=="folder"?(R(),N(B,{key:0,round:"",flat:"",icon:"download",color:"primary",size:"xs",onClick:d=>q(n)(l.row)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:2},1032,["onClick"])):L("",!0),u(B,{round:"",flat:"",icon:"edit",color:"primary",size:"xs",onClick:d=>q(p)(l.row)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uC774\uB984\uBC14\uAFB8\uAE30")]),_:1})]),_:2},1032,["onClick"])])):L("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selection","selected"])]),_:1},8,["modelValue"]))}},Ma={class:"borderd"},Va={class:"q-px-lg row no-wrap justify-between items-center bg-grey-2"},Wa={class:"row no-wrap items-center q-gutter-x-sm"},Ga=I("div",{class:"font-main",style:{"font-size":"16px","font-weight":"bold"}},"\uD30C\uC77C \uAD00\uB9AC",-1),Ha={class:"row no-wrap"},ut={__name:"FilesPage",setup(e){const{fnMakeFolder:p,fnUploadFile:n,fnDeleteFiles:r,fnDownloadFiles:i}=je(),c=_e();return na(async()=>{try{c.loading.show(),await le(),c.loading.hide()}catch(l){c.loading.hide(),console.error(l)}}),(l,d)=>(R(),N(sa,{class:"q-pa-md"},{default:s(()=>[I("div",Ma,[I("div",Va,[I("div",Wa,[u(ve,{name:"folder_open",color:"primary",size:"24px"}),Ga]),I("div",Ha,[u(B,{round:"",flat:"",icon:"create_new_folder",color:"primary",size:"sm",onClick:q(p)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uC0C8\uD3F4\uB354")]),_:1})]),_:1},8,["onClick"]),u(B,{round:"",flat:"",icon:"upload",color:"primary",size:"sm",onClick:q(n)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uD30C\uC77C\uC5C5\uB85C\uB4DC")]),_:1})]),_:1},8,["onClick"]),u(B,{round:"",flat:"",icon:"download",color:"primary",size:"sm",onClick:q(i)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uB2E4\uC6B4\uB85C\uB4DC")]),_:1})]),_:1},8,["onClick"]),u(Qe,{vertical:"",spaced:"",inset:""}),u(B,{round:"",flat:"",icon:"delete",color:"red",size:"sm",onClick:q(r)},{default:s(()=>[u(T,null,{default:s(()=>[U("\uC0AD\uC81C")]),_:1})]),_:1},8,["onClick"])])]),u(Ia,{selection:"multiple",mode:"page"})])]),_:1}))}};export{ut as default};
