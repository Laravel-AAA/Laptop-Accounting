import{j as t,a as u}from"./app-dea2e70f.js";import{G as n}from"./GuestFormLayout-3532e25a.js";import{P as d}from"./PrimaryButton-1de563e1.js";import{I as c}from"./Input-29bf2f46.js";import{u as x}from"./useBetterForm-3bd480dc.js";import"./index-6ebc6550.js";import"./index-60f1db41.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./index.esm-3f090a22.js";import"./iconBase-76a8b7e9.js";import"./index.esm-750c7c23.js";import"./transition-6a94586b.js";import"./Footer-5264db56.js";import"./SupportEmailLink-a455ef45.js";import"./A-c9d39cad.js";import"./PrimaryLink-13ee8bb3.js";import"./BetterLink-f7b3db09.js";import"./FullLogo-57c1731d.js";import"./Logo-8714f3cc.js";import"./FormLayout-9d4932a0.js";import"./ErrorMessage-118253c3.js";function S({status:r,auth:f}){const{data:i,setData:s,post:m,processing:o,errors:a,isDirty:l}=x({email:""}),p=e=>{e.preventDefault(),m(route("password.email"))};return t.jsxs(n,{children:[t.jsx(u,{title:"Forgot Password"}),t.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),r&&t.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),t.jsxs("form",{onSubmit:p,children:[t.jsx(c,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 block w-full",autoFocus:!0,onChange:e=>s("email",e.target.value),label:"Email",required:!0,errorMsg:a.email,hideError:l("email"),disabled:o}),t.jsx("div",{className:"mt-4 flex items-center justify-end",children:t.jsx(d,{type:"submit",className:"ml-4",disabled:o,children:"Email Password Reset Link"})})]})]})}export{S as default};