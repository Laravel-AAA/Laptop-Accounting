import{j as t,a}from"./app-838cb2bb.js";import{r as o}from"./index-82366f85.js";import{A as d}from"./index-8cce2395.js";import{B as m}from"./index.esm-15f0180e.js";import n from"./Bill-d5ff6b19.js";import{P as c}from"./Pagination-200f92bd.js";import{F as x}from"./Footer-35a7cf2d.js";import"./index-1dd53fcd.js";import"./Dropdown-3724d36d.js";import"./transition-59daec51.js";import"./iconBase-98933817.js";import"./BillOptions-c8a81305.js";import"./index.esm-d6b3890a.js";import"./AlertModal-0dabe9fc.js";import"./TemplateModal-ff4d5015.js";import"./DangerButton-a7494810.js";import"./PrimaryButton-a97409fe.js";import"./SecondaryButton-8c0ceade.js";import"./Num-43ff67d1.js";function C({auth:r,bills:i}){const s=i.data;return t.jsxs(d,{user:r.user,children:[t.jsx(a,{title:"Bills"}),t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsx("div",{className:"mx-auto w-full overflow-x-auto overflow-y-hidden pb-28 pt-6 md:w-11/12 ",children:t.jsxs(o.Card,{className:"w-full min-w-fit rounded-md",children:[t.jsxs("table",{className:"table-auto text-left",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(e,{className:"w-[11ch] rounded-tl-md",children:"#"}),t.jsx(e,{children:"Date"}),t.jsx(e,{title:"Sub total price (tax is NOT included)",children:"Sub total"}),t.jsx(e,{title:"Total price (tax is included)",children:"Total price"}),t.jsx(e,{children:"Received"}),t.jsx(e,{children:"Remaining"}),t.jsx(e,{children:"Total Quantity"}),t.jsx(e,{title:"Bill options",className:"max-w-fit rounded-tr-md"})]})}),t.jsx("tbody",{children:s.map(l=>t.jsx(n,{bill:l},l.id))})]}),s.length===0&&t.jsxs("div",{className:"my-12 flex justify-center gap-4 opacity-50",children:[t.jsx(m,{className:"mt-1"}),t.jsx("p",{children:"No bills found!"})]})]})}),t.jsx(c,{paginateItems:i}),t.jsx(x,{})]})]})}function e({className:r="",children:i,...s}){return t.jsx("th",{...s,className:"border-b border-blue-gray-100 bg-blue-gray-50 p-4 "+r,children:t.jsx("p",{className:"text-sm font-semibold leading-none tracking-wide text-black opacity-90",children:i})})}export{C as default};