import{j as t,a as l}from"./app-95eecb40.js";import{r as a}from"./index-abdbd0b7.js";import{A as m}from"./index-0da4a732.js";import{B as d}from"./index.esm-2f3954ba.js";import n from"./Bill-95e66eeb.js";import{P as c}from"./Pagination-0bd9fdc5.js";import{F as p}from"./Footer-b3a14604.js";import x from"./BillsHeader-d9341b07.js";import"./index-008cf8d3.js";import"./index-037e6528.js";import"./index.esm-4cdec08f.js";import"./iconBase-5a387e2d.js";import"./index.esm-15b0b826.js";import"./transition-7e19bb3f.js";import"./Logo-c31c5985.js";import"./Dropdown-2a8ab986.js";import"./BetterLink-17b6e41c.js";import"./BillOptions-ae80a7f1.js";import"./AlertModal-37c70d25.js";import"./TemplateModal-eda9aa02.js";import"./SecondaryMaterialBtn-865cd6a2.js";import"./PrimaryMaterialBtn-a97e8b32.js";import"./ID-0468a484.js";import"./FromDate-542b151a.js";import"./Num-107dd470.js";import"./SupportEmailLink-e64d73c6.js";import"./A-ea9c0701.js";import"./Input-d94d8ebd.js";import"./ErrorMessage-bbda154c.js";import"./InventoryHeader-87c5c76d.js";import"./SelectInput-d8969825.js";import"./usePrevious-c2e79cee.js";function U({auth:s,bills:r}){const i=r.data;return t.jsxs(m,{user:s.user,header:t.jsx(x,{totalResult:r.total}),children:[t.jsx(l,{title:"Bills"}),t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsx("div",{className:"mx-auto w-full overflow-x-auto overflow-y-hidden pb-36 pt-6 md:w-11/12 ",children:t.jsxs(a.Card,{className:"w-full min-w-fit rounded-md",children:[t.jsxs("table",{className:"table-auto text-left",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(e,{className:"rounded-tl-md",children:"ID"}),t.jsx(e,{children:"Created By"}),t.jsx(e,{title:"Created Before",children:"Date"}),t.jsx(e,{title:"Sub total price (tax is NOT included)",children:"Sub total"}),t.jsx(e,{title:"Total price (tax is included)",children:"Total price"}),t.jsx(e,{children:"Received"}),t.jsx(e,{children:"Remaining"}),t.jsx(e,{children:"Total Quantity"}),t.jsx(e,{title:"Bill options",className:"max-w-fit rounded-tr-md"})]})}),t.jsx("tbody",{children:i.map(o=>t.jsx(n,{bill:o},o.id))})]}),i.length===0&&t.jsxs("div",{className:"my-12 flex justify-center gap-4 opacity-50",children:[t.jsx(d,{className:"mt-1"}),t.jsx("p",{children:"No bills found!"})]})]})}),t.jsx(c,{className:"-mt-20",paginateItems:r}),t.jsx(p,{})]})]})}function e({className:s="",children:r,...i}){return t.jsx("th",{...i,className:"border-b border-blue-gray-100 bg-blue-gray-50 p-4 "+s,children:t.jsx("p",{className:"text-sm font-semibold leading-none tracking-wide text-black opacity-90",children:r})})}export{U as default};
