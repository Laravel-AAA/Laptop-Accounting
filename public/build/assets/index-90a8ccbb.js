import{j as t,a as l}from"./app-1ab1ca84.js";import{r as m}from"./index-dae4422a.js";import{A as d}from"./index-d44f842e.js";import{a as n}from"./index-6389a1de.js";import c from"./Bill-75ae7c38.js";import{P as p}from"./Pagination-a3b4b79b.js";import{F as x}from"./Footer-910b1714.js";import u from"./BillsHeader-e7b6ce6b.js";import{u as j}from"./useTranslation-2fada337.js";import"./index-ef38a0f2.js";import"./index-4d5ef458.js";import"./index-a39eae95.js";import"./iconBase-33f8de09.js";import"./index-e821efab.js";import"./transition-7855a772.js";import"./Logo-c17e06fb.js";import"./Dropdown-73119366.js";import"./BetterLink-6288ef0b.js";import"./BillOptions-ebbb2383.js";import"./AlertModal-52ef09ff.js";import"./TemplateModal-c523cd55.js";import"./SecondaryMaterialBtn-41567cb8.js";import"./PrimaryMaterialBtn-64232e11.js";import"./ID-7d7de302.js";import"./Constant-3623d3bd.js";import"./FromDate-7d608d36.js";import"./Num-9b021e8b.js";import"./SupportEmailLink-57894eb0.js";import"./A-1dd72ed4.js";import"./Input-8c223dec.js";import"./ErrorMessage-e593865f.js";import"./InventoryHeader-2553e7a0.js";import"./SelectInput-71a1966e.js";import"./usePrevious-107c1ee1.js";function Y({auth:s,bills:i}){const o=i.data,{t:e}=j();return t.jsxs(d,{user:s.user,header:t.jsx(u,{totalResult:i.total}),children:[t.jsx(l,{title:e("Bills")}),t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsx("div",{className:"mx-auto w-full overflow-x-auto overflow-y-hidden pb-36 pt-6 md:w-11/12 ",children:t.jsxs(m.Card,{className:"w-full min-w-fit rounded-md",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[t.jsxs("table",{className:"table-auto text-left",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(r,{className:"rounded-tl-md",children:e("ID")}),t.jsx(r,{children:e("Created By")}),t.jsx(r,{title:e("Created Before"),children:e("Date")}),t.jsx(r,{title:e("Sub total price (tax is NOT included)"),children:e("Sub total")}),t.jsx(r,{title:e("Total price (tax is included)"),children:e("Total price")}),t.jsx(r,{children:e("Received")}),t.jsx(r,{children:e("Remaining")}),t.jsx(r,{children:e("Total Quantity")}),t.jsx(r,{title:e("Bill options"),className:"max-w-fit rounded-tr-md"})]})}),t.jsx("tbody",{children:o.map(a=>t.jsx(c,{bill:a},a.id))})]}),o.length===0&&t.jsxs("div",{className:"my-12 flex justify-center gap-4 opacity-50",children:[t.jsx(n,{className:"mt-1"}),t.jsx("p",{children:e("No bills found!")})]})]})}),t.jsx(p,{className:"-mt-20",paginateItems:i}),t.jsx(x,{})]})]})}function r({className:s="",children:i,...o}){return t.jsx("th",{...o,className:"border-b border-blue-gray-100 bg-blue-gray-50 p-4 "+s,children:t.jsx("p",{className:"text-sm font-semibold leading-none tracking-wide text-black opacity-90",children:i})})}export{Y as default};