import{r as e,j as t}from"./app-fbc3e038.js";import s from"./TotalInfo-55d732be.js";import l from"./index-70163418.js";import n from"./CheckoutBtn-c87357d6.js";import"./Num-3f81996f.js";import"./RowItem-78dfc2b2.js";import"./index.esm-a89cc028.js";import"./iconBase-2fa1a119.js";import"./index.esm-68e12ea8.js";import"./EmptyCart-86fa05c3.js";import"./index.esm-b59ba3d8.js";import"./SecondaryButton-61993317.js";import"./TemplateModal-99081e80.js";import"./DangerButton-6098d41d.js";import"./transition-c7f20eaa.js";import"./PrimaryButton-7f15fb5a.js";import"./Checkbox-0cb98e40.js";import"./InputError-4010a6df.js";import"./InputHint-eabfe40b.js";import"./InputLabel-06014b49.js";import"./TextInput-86ac020b.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};