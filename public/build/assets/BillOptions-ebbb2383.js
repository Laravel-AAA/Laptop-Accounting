import{r as l,j as e,y as m}from"./app-1ab1ca84.js";import{D as r}from"./Dropdown-73119366.js";import{b as x}from"./index-6389a1de.js";import{F as p,a as u,b as f}from"./index-a39eae95.js";import{A as h}from"./AlertModal-52ef09ff.js";import{I as j}from"./ID-7d7de302.js";import{u as n}from"./useTranslation-2fada337.js";import{F as g}from"./index-e821efab.js";import"./BetterLink-6288ef0b.js";import"./transition-7855a772.js";import"./iconBase-33f8de09.js";import"./TemplateModal-c523cd55.js";import"./SecondaryMaterialBtn-41567cb8.js";import"./PrimaryMaterialBtn-64232e11.js";import"./Constant-3623d3bd.js";function y({bill:t,isOpen:s,requestClose:o}){const[i,a]=l.useState(!1),{t:d}=n();return e.jsx(h,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{className:"space-y-1",children:[d("You are about to delete the bill")," ",e.jsx(j,{id:t.id})]}),buttons:[{type:"danger",text:"Delete",props:{onClick:()=>{a(!0),m.delete(route("bill.destroy",t.id),{preserveScroll:!0,preserveState:!0})},disabled:i}},{type:"secondary",text:"Cancel"}],isOpen:s,requestClose:c=>o(c)})}function S({bill:t,user:s}){const[o,i]=l.useState(!1),{t:a}=n();return e.jsxs("div",{className:"text-center  ",children:[e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx("div",{className:"inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(x,{className:"text-lg"})})}),e.jsxs(r.Content,{children:[e.jsx(r.Link,{href:route("bill.show",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(p,{className:"text-base text-gray-800"}),a("View")]})}),e.jsx(r.Link,{href:route("bill.show",[t.id,{print:"true"}]),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{className:"text-base text-gray-800"}),a("Print")]})}),e.jsx(r.Link,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),href:route("bill.edit",t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{className:"text-base text-gray-800"}),a("Edit")]})}),e.jsx(r.Button,{disabled:!(t.createdBy_id==s.id||s.role=="Owner"||s.role=="Maintainer"),onClick:()=>i(!0),children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(f,{className:"text-base"}),a("Delete")]})})]})]}),e.jsx(y,{bill:t,isOpen:o,requestClose:()=>i(!1)},"billsBillOptionsDeleteConfirmBill")]})}export{S as default};