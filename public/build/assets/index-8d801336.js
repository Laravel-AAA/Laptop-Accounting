import{r as e,j as t}from"./app-daabe024.js";import s from"./TotalInfo-928dcb5f.js";import l from"./index-7c891cda.js";import n from"./CheckoutBtn-86eb1c33.js";import"./Num-0f5c0104.js";import"./RowItem-5d7a19a2.js";import"./index.esm-d1fc7e93.js";import"./iconBase-65e92b51.js";import"./index.esm-6f5899dd.js";import"./EmptyCart-16de83c7.js";import"./index.esm-3895a62a.js";import"./SecondaryButton-c5accbe1.js";import"./TemplateModal-ba5d6419.js";import"./SecondaryMaterialBtn-c75f9970.js";import"./transition-a548b57a.js";import"./PrimaryMaterialBtn-00490872.js";import"./Checkbox-6cfb119b.js";import"./index-3868f505.js";import"./index-124b767b.js";import"./ErrorMessage-8032e155.js";import"./Input-b4ccb21e.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
