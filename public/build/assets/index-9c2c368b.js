import{r as e,j as t}from"./app-dea2e70f.js";import s from"./TotalInfo-3d5166e7.js";import l from"./index-d17d1d41.js";import n from"./CheckoutBtn-a0d8f890.js";import"./Num-c7cf838b.js";import"./RowItem-eebc75e4.js";import"./index.esm-f32d203d.js";import"./iconBase-76a8b7e9.js";import"./index.esm-3f090a22.js";import"./EmptyCart-29c7e9e3.js";import"./index.esm-750c7c23.js";import"./SecondaryButton-89d71c4b.js";import"./TemplateModal-fa9c7f8a.js";import"./SecondaryMaterialBtn-a0136127.js";import"./transition-6a94586b.js";import"./PrimaryMaterialBtn-f60a7817.js";import"./Checkbox-f8ec31a0.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./ErrorMessage-118253c3.js";import"./Input-29bf2f46.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};