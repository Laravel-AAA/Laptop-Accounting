import{j as e,d as l,r as c,q as m}from"./app-95eecb40.js";import{A as x}from"./index-037e6528.js";import{L as h}from"./Logo-c31c5985.js";import{D as t}from"./Dropdown-2a8ab986.js";function u({active:r=!1,className:i="",children:n,...a}){return e.jsx(l,{...a,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-primary-600 text-gray-900 focus:border-primary-800 ":"border-transparent text-gray-500 hover:border-primary-100 hover:text-gray-700 focus:border-primary-500 focus:text-gray-700 ")+i,children:n})}function o({active:r=!1,className:i="",children:n,...a}){return e.jsx(l,{...a,className:`flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${r?"border-primary-600 bg-primary-50 text-primary-800 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-600":"border-transparent text-gray-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-900"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${i}`,children:n})}function p({user:r}){const[i,n]=c.useState(!1),a=m().props.auth.business.logo;return e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-12 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(l,{href:"/",children:e.jsx(h,{className:"h-9",businessLogo:a})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:d.filter(s=>s.link!=="dashboard"||r.role==="Owner").map(s=>e.jsx(u,{href:route(s.link),active:route().current(s.link),children:s.name},s.link))})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ml-3",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("div",{className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[r.name,e.jsx("svg",{className:"-mr-0.5 ml-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(t.Content,{children:[e.jsx(t.Link,{href:route("profile.edit"),children:"Profile"}),r.role==="Owner"&&e.jsx(t.Link,{href:route("business.edit"),children:"Business"}),e.jsx(t.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>n(s=>!s),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:d.map(s=>e.jsx(o,{href:route(s.link),active:route().current(s.link),children:s.name},s.link))}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:r.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(o,{href:route("profile.edit"),children:"Profile"}),e.jsx(o,{href:route("business.edit"),children:"Business"}),e.jsx(o,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]})}function f({header:r}){return e.jsx("header",{className:"my-0 bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:typeof r=="string"?e.jsx("h2",{className:"py-5 text-xl font-semibold leading-tight text-gray-800",children:r}):r??""})})}const d=[{name:"Checkout",link:"bill.create"},{name:"Inventory",link:"product.index"},{name:"Bills",link:"bill.index"},{name:"Dashboard",link:"dashboard"}];function v({user:r,header:i,children:n}){return e.jsx(x,{children:e.jsxs("div",{className:"min-h-screen",children:[e.jsx(p,{user:r}),e.jsx(f,{header:i}),e.jsx("main",{children:n})]})})}export{v as A};
