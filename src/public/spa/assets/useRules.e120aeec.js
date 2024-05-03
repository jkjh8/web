import{a3 as F,r as C,av as q,aX as I,aY as A,z as R,x as B,ak as V,g as Q,b7 as j,ap as E,X as k,an as D,b8 as M,a as O}from"./index.55b3bbb2.js";var w=F({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:u,emit:f}){const P=Q(),i=C(null);let c=0;const s=[];function v(e){const r=typeof e=="boolean"?e:t.noErrorFocus!==!0,d=++c,h=(o,a)=>{f("validation"+(o===!0?"Success":"Error"),a)},g=o=>{const a=o.validate();return typeof a.then=="function"?a.then(n=>({valid:n,comp:o}),n=>({valid:!1,comp:o,err:n})):Promise.resolve({valid:a,comp:o})};return(t.greedy===!0?Promise.all(s.map(g)).then(o=>o.filter(a=>a.valid!==!0)):s.reduce((o,a)=>o.then(()=>g(a).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(o=>[o])).then(o=>{if(o===void 0||o.length===0)return d===c&&h(!0),!0;if(d===c){const{comp:a,err:n}=o[0];if(n!==void 0&&console.error(n),h(!1,a),r===!0){const p=o.find(({comp:S})=>typeof S.focus=="function"&&j(S.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function m(){c++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&E(e);const r=c+1;v().then(d=>{r===c&&d===!0&&(t.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function y(e){e!==void 0&&E(e),f("reset"),k(()=>{m(),t.autofocus===!0&&t.noResetFocus!==!0&&l()})}function l(){D(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),r=>r.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}q(M,{bindComponent(e){s.push(e)},unbindComponent(e){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}});let x=!1;return I(()=>{x=!0}),A(()=>{x===!0&&t.autofocus===!0&&l()}),R(()=>{t.autofocus===!0&&l()}),Object.assign(P.proxy,{validate:v,resetValidation:m,submit:b,reset:y,focus:l,getValidationComponents:()=>s}),()=>B("form",{class:"q-form",ref:i,onSubmit:b,onReset:y},V(u.default))}});const z=t=>!!t||"\uD544\uC218 \uC785\uB825 \uD56D\uBAA9 \uC785\uB2C8\uB2E4.",K=t=>t.length>=8||"\uCD5C\uC18C 8\uC790 \uC774\uC0C1 \uC785\uB825\uD558\uC138\uC694.",T=t=>/.+@.+\..+/.test(t)||"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.",Y=async t=>{try{const u=await O.get("/auth/exists_email",{params:{email:t}});return u.data&&u.data.user?"\uC774\uBBF8 \uC0AC\uC6A9\uC911\uC778 \uC774\uBA54\uC77C \uC785\uB2C8\uB2E4.":!0}catch(u){return console.error(u),"\uC11C\uBC84\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."}},_=t=>/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm.test(t)||"IPv4 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4";export{w as Q,T as a,K as b,Y as c,_ as d,z as r};