import{r as o,j as e,y as d}from"./app-026dd19d.js";import{D as r}from"./Dropdown-2f0b8c06.js";import{a as c}from"./index.esm-c4d68ee0.js";import{F as x,a as m,b as p}from"./index.esm-b390d3fb.js";import{A as u}from"./AlertModal-50d03b05.js";import{I as h}from"./ID-469f84be.js";import"./BetterLink-a6b2600c.js";import"./transition-eac92ea4.js";import"./iconBase-09d592e1.js";import"./TemplateModal-9f2f8ecd.js";import"./SecondaryMaterialBtn-a2c29094.js";import"./PrimaryMaterialBtn-1e53e825.js";function f({bill:t,isOpen:s,requestClose:i}){const[a,l]=o.useState(!1);return e.jsx(u,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{className:"space-y-1",children:["You are about to delete the bill ",e.jsx(h,{id:t.id})]}),buttons:[{type:"danger",text:"Delete",props:{onClick:()=>{l(!0),d.delete(route("bill.destroy",t.id),{preserveScroll:!0,preserveState:!0})},disabled:a}},{type:"secondary",text:"Cancel"}],isOpen:s,requestClose:n=>i(n)})}function O({bill:t,user:s}){const[i,a]=o.useState(!1);return e.jsxs("div",{className:"text-center  ",children:[e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx("div",{className:"inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(c,{className:"text-lg"})})}),e.jsxs(r.Content,{children:[e.jsx(r.Link,{href:route("bill.show",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{className:"text-base text-gray-800"})," View"]})}),e.jsx(r.Link,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),href:route("bill.edit",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{className:"text-base text-gray-800"})," Edit"]})}),e.jsx(r.Button,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),onClick:()=>a(!0),children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(p,{className:"text-base"})," Delete"]})})]})]}),e.jsx(f,{bill:t,isOpen:i,requestClose:()=>a(!1)})]})}export{O as default};