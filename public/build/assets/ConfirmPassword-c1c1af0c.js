import{r as n,j as r,a as u}from"./app-bd4b3f0c.js";import{G as l}from"./GuestFormLayout-d4e259d3.js";import{P as c}from"./PrimaryButton-fa04d2c7.js";import{I as f}from"./Input-e9465e7f.js";import{u as w}from"./useBetterForm-86d418b6.js";import"./index-79e5677d.js";import"./index-96c65ca1.js";import"./index-8a1cef50.js";import"./index-e2e55a02.js";import"./index-387d7a00.js";import"./index.esm-dacceae4.js";import"./iconBase-05a0b489.js";import"./index.esm-ba4fcd42.js";import"./transition-2d045a48.js";import"./Footer-e6c55bd2.js";import"./SupportEmailLink-988eaefa.js";import"./A-6a3b73bd.js";import"./PrimaryLink-06172c13.js";import"./BetterLink-a9fac080.js";import"./FullLogo-169ca72f.js";import"./Logo-0814a9d6.js";import"./FormLayout-5cf7a9ab.js";import"./ErrorMessage-ea4c0743.js";function A({auth:x}){const{data:o,setData:e,post:a,processing:t,errors:i,reset:m,isDirty:p}=w({password:""});n.useEffect(()=>()=>{m("password")},[]);const d=s=>{s.preventDefault(),a(route("password.confirm"))};return r.jsxs(l,{children:[r.jsx(u,{title:"Confirm Password"}),r.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r.jsxs("form",{onSubmit:d,children:[r.jsx("div",{className:"mt-4",children:r.jsx(f,{label:"Password",id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoFocus:!0,onChange:s=>e("password",s.target.value),required:!0,errorMsg:i.password,hideError:p("password"),disabled:t})}),r.jsx("div",{className:"mt-4 flex items-center justify-end",children:r.jsx(c,{type:"submit",className:"ml-4",disabled:t,children:"Confirm"})})]})]})}export{A as default};
