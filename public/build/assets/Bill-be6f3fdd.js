import{q as h,r as d,j as e}from"./app-dc6d883c.js";import j from"./BillOptions-07ff8edb.js";import{F as y}from"./FromDate-9bedaf4e.js";import{N as s}from"./Num-7fe4ca16.js";import{I as N}from"./ID-df7bbae8.js";import{r as f}from"./index-6c22716d.js";import"./Dropdown-716f79b2.js";import"./BetterLink-b76a6648.js";import"./transition-ea3c1e5a.js";import"./index.esm-f40d2b99.js";import"./iconBase-75f80f3d.js";import"./index.esm-145945cb.js";import"./AlertModal-423e40ad.js";import"./TemplateModal-854b39c3.js";import"./SecondaryMaterialBtn-91b9e7af.js";import"./PrimaryMaterialBtn-1d0eae5e.js";import"./index-e16479b8.js";function O({bill:t}){var m;const o=h().props.auth,u=o.business.taxPercent,x=o.user.id,c=d.useMemo(()=>t.bill_details.reduce((n,a)=>n+(a.product.price??0)*a.quantity,0),[t.bill_details]),i=c*(1+u),[p,l]=d.useState(!1);return e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx(r,{children:e.jsx(f.Tooltip,{content:p?"Copied":"Copy",children:e.jsx("button",{className:"dev-style",onClick:()=>{navigator.clipboard.writeText(t.id).then(()=>l(!0))},children:e.jsx(N,{id:t.id})})})}),e.jsx(r,{children:t.createdBy_id===x?e.jsx("span",{className:"select-none text-gray-600",children:"You"}):((m=t.created_by)==null?void 0:m.name)??"N/A"}),e.jsx(r,{children:e.jsx(y,{date:t.created_at})}),e.jsx(r,{children:e.jsx(s,{className:"text-secondary-700",showCurrency:!0,amount:c})}),e.jsx(r,{children:e.jsx(s,{className:"text-primary-700",showCurrency:!0,amount:i})}),e.jsx(r,{children:e.jsx(s,{className:t.cashReceived===null?"text-primary-700":"",showCurrency:!0,amount:t.cashReceived,noAmount:"Digital Payment"})}),e.jsx(r,{children:e.jsx(s,{className:"text-indigo-700",showCurrency:!0,amount:t.cashReceived?t.cashReceived-i:null,noAmount:""})}),e.jsx(r,{children:e.jsx(s,{amount:t.bill_details.reduce((n,a)=>n+a.quantity,0)})}),e.jsx("td",{children:e.jsx(j,{bill:t,user:o.user})})]})}function r({children:t,className:o=""}){return e.jsx("td",{className:"p-3",children:e.jsx("p",{className:"text-sm font-normal text-blue-gray-800",children:t})})}export{O as default};