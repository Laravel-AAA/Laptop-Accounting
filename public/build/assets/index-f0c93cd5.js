import{r as m,j as t}from"./app-1c25774f.js";import s from"./TotalInfo-9580d57b.js";import l from"./index-94b3c565.js";import n from"./CheckoutBtn-3a5471bb.js";import"./Num-763d349f.js";import"./RowItem-d283df24.js";import"./index.esm-cd9bbf79.js";import"./iconBase-338e10db.js";import"./index.esm-1f74e87a.js";import"./EmptyCart-1319f5d9.js";import"./index.esm-2fe96f96.js";import"./SecondaryButton-8c6ebb39.js";import"./TemplateModal-6d8aef30.js";import"./SecondaryMaterialBtn-184bd2fc.js";import"./transition-f1e823b0.js";import"./PrimaryMaterialBtn-702e4d0a.js";import"./Checkbox-f6673604.js";import"./index-87120360.js";import"./index-d77bb9c5.js";import"./index-387d7a00.js";import"./ErrorMessage-4ccff6f2.js";import"./Input-39d53c15.js";function T({className:e="",billOperations:o}){const[r,p]=m.useState(0);return m.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${e}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{T as default};
