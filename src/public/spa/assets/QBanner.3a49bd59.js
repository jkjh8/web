import{a2 as u,aC as v,aD as b,c as s,h as n,ao as r,g as q}from"./index.866b82ac.js";var _=u({name:"QBanner",props:{...v,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:a}){const{proxy:{$q:c}}=q(),i=b(e,c),d=s(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),l=s(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const o=[n("div",{class:"q-banner__avatar col-auto row items-center self-start"},r(a.avatar)),n("div",{class:"q-banner__content col text-body2"},r(a.default))],t=r(a.action);return t!==void 0&&o.push(n("div",{class:l.value},t)),n("div",{class:d.value+(e.inlineActions===!1&&t!==void 0?" q-banner--top-padding":""),role:"alert"},o)}}});export{_ as Q};
