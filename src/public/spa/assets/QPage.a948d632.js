import{a2 as g,i as r,a5 as t,a6 as h,ab as p,c as s,h as d,aa as y,g as f}from"./index.ea04af02.js";var C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=f(),e=r(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(p,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:u.value,style:c.value},y(i.default))}});export{C as Q};
