import{W as d,j as e,b as u}from"./app-0c956e5b.js";import{G as p}from"./GuestFormLayout-dfddaca5.js";import{I as c}from"./InputError-c8943358.js";import{P as x}from"./PrimaryButton-8395e11a.js";import{T as f}from"./TextInput-ab9c7698.js";import"./index-ecdfd0e3.js";import"./Dropdown-2145e8e8.js";import"./transition-a3141dd7.js";import"./index-f94c52e5.js";import"./index.esm-75e40392.js";function k({status:t,auth:a}){const{data:o,setData:r,post:m,processing:i,errors:l}=d({email:""}),n=s=>{s.preventDefault(),m(route("password.email"))};return e.jsxs(p,{auth:a,children:[e.jsx(u,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:n,children:[e.jsx(f,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(c,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(x,{type:"submit",className:"ml-4",disabled:i,children:"Email Password Reset Link"})})]})]})}export{k as default};
