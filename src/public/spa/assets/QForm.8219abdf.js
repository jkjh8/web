import{a7 as E,r as P,aC as q,bj as A,bk as B,o as I,h as R,at as V,g as j,bl as Q,au as p,n as k,bm as D,bn as O}from"./index.6e21b7c1.js";var T=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:C,emit:f}){const F=j(),i=P(null);let s=0;const u=[];function d(e){const a=typeof e=="boolean"?e:r.noErrorFocus!==!0,l=++s,x=(t,o)=>{f("validation"+(t===!0?"Success":"Error"),o)},h=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(r.greedy===!0?Promise.all(u.map(h)).then(t=>t.filter(o=>o.valid!==!0)):u.reduce((t,o)=>t.then(()=>h(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return l===s&&x(!0),!0;if(l===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),x(!1,o),a===!0){const g=t.find(({comp:S})=>typeof S.focus=="function"&&Q(S.$)===!1);g!==void 0&&g.comp.focus()}}return!1})}function v(){s++,u.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function m(e){e!==void 0&&p(e);const a=s+1;d().then(l=>{a===s&&l===!0&&(r.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&p(e),f("reset"),k(()=>{v(),r.autofocus===!0&&r.noResetFocus!==!0&&c()})}function c(){D(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),a=>a.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}q(O,{bindComponent(e){u.push(e)},unbindComponent(e){const a=u.indexOf(e);a!==-1&&u.splice(a,1)}});let y=!1;return A(()=>{y=!0}),B(()=>{y===!0&&r.autofocus===!0&&c()}),I(()=>{r.autofocus===!0&&c()}),Object.assign(F.proxy,{validate:d,resetValidation:v,submit:m,reset:b,focus:c,getValidationComponents:()=>u}),()=>R("form",{class:"q-form",ref:i,onSubmit:m,onReset:b},V(C.default))}});export{T as Q};
