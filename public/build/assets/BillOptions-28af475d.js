import{r as o,j as e,y as d}from"./app-eb2c1e88.js";import{D as r}from"./Dropdown-6e797d4d.js";import{a as c}from"./index.esm-fedb5cf0.js";import{F as x,a as m,b as p}from"./index.esm-7b563c93.js";import{A as u}from"./AlertModal-a54df707.js";import{I as h}from"./ID-b5a48409.js";import"./BetterLink-2992a523.js";import"./transition-eccadcd9.js";import"./iconBase-675fe561.js";import"./TemplateModal-15a8b84f.js";import"./SecondaryMaterialBtn-6f38dcf9.js";import"./PrimaryMaterialBtn-5ac84364.js";function f({bill:t,isOpen:s,requestClose:i}){const[a,l]=o.useState(!1);return e.jsx(u,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{className:"space-y-1",children:["You are about to delete the bill ",e.jsx(h,{id:t.id})]}),buttons:{danger:{text:"Delete",props:{onClick:()=>{l(!0),d.delete(route("bill.destroy",t.id),{preserveScroll:!0,preserveState:!0})},disabled:a}},secondary:{text:"Cancel"}},isOpen:s,requestClose:n=>i(n)})}function O({bill:t,user:s}){const[i,a]=o.useState(!1);return e.jsxs("div",{className:"text-center  ",children:[e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx("div",{className:"inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(c,{className:"text-lg"})})}),e.jsxs(r.Content,{children:[e.jsx(r.Link,{href:route("bill.show",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{className:"text-base text-gray-800"})," View"]})}),e.jsx(r.Link,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),href:route("bill.edit",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{className:"text-base text-gray-800"})," Edit"]})}),e.jsx(r.Button,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),onClick:()=>a(!0),children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(p,{className:"text-base"})," Delete"]})})]})]}),e.jsx(f,{bill:t,isOpen:i,requestClose:()=>a(!1)})]})}export{O as default};