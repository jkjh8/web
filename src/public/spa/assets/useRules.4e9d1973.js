import{u as C,r as F,aa as q,aU as I,aV as A,o as R,h as V,y as B,g as D,br as Q,aE as S,n as $,aC as j,bs as M,b9 as O}from"./index.817f2c12.js";var K=C({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:u,emit:f}){const P=D(),i=F(null);let c=0;const s=[];function m(e){const r=typeof e=="boolean"?e:t.noErrorFocus!==!0,d=++c,h=(o,a)=>{f("validation"+(o===!0?"Success":"Error"),a)},x=o=>{const a=o.validate();return typeof a.then=="function"?a.then(n=>({valid:n,comp:o}),n=>({valid:!1,comp:o,err:n})):Promise.resolve({valid:a,comp:o})};return(t.greedy===!0?Promise.all(s.map(x)).then(o=>o.filter(a=>a.valid!==!0)):s.reduce((o,a)=>o.then(()=>x(a).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(o=>[o])).then(o=>{if(o===void 0||o.length===0)return d===c&&h(!0),!0;if(d===c){const{comp:a,err:n}=o[0];if(n!==void 0&&console.error(n),h(!1,a),r===!0){const p=o.find(({comp:E})=>typeof E.focus=="function"&&Q(E.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function v(){c++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&S(e);const r=c+1;m().then(d=>{r===c&&d===!0&&(t.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function y(e){e!==void 0&&S(e),f("reset"),$(()=>{v(),t.autofocus===!0&&t.noResetFocus!==!0&&l()})}function l(){j(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),r=>r.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}q(M,{bindComponent(e){s.push(e)},unbindComponent(e){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}});let g=!1;return I(()=>{g=!0}),A(()=>{g===!0&&t.autofocus===!0&&l()}),R(()=>{t.autofocus===!0&&l()}),Object.assign(P.proxy,{validate:m,resetValidation:v,submit:b,reset:y,focus:l,getValidationComponents:()=>s}),()=>V("form",{class:"q-form",ref:i,onSubmit:b,onReset:y},B(u.default))}});const T=t=>!!t||"\uD544\uC218 \uC785\uB825 \uD56D\uBAA9 \uC785\uB2C8\uB2E4.",U=t=>t.length>=8||"\uCD5C\uC18C 8\uC790 \uC774\uC0C1 \uC785\uB825\uD558\uC138\uC694.",_=t=>/.+@.+\..+/.test(t)||"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.",z=async t=>{try{const u=await O.get("/auth/exists_email",{params:{email:t}});return u.data&&u.data.user?"\uC774\uBBF8 \uC0AC\uC6A9\uC911\uC778 \uC774\uBA54\uC77C \uC785\uB2C8\uB2E4.":!0}catch(u){return console.error(u),"\uC11C\uBC84\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC\uD6C4\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."}},G=t=>/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm.test(t)||"IPv4 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4",H=t=>/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/gm.test(t)||"\uB0A0\uC9DC \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4";export{K as Q,_ as a,U as b,z as c,H as d,G as e,T as r};
