import{W as d,r as l,j as s,b as u}from"./app-550d434d.js";import{G as c}from"./GuestFormLayout-d0b9fe3b.js";import{I as f}from"./InputError-2b9f5d85.js";import{I as x}from"./InputLabel-70803a93.js";import{P as w}from"./PrimaryButton-b9c3c764.js";import{T as j}from"./TextInput-584083dd.js";import"./index-497dbfe2.js";import"./index-37ce521a.js";import"./Dropdown-9dafa9e8.js";import"./transition-c9d25913.js";import"./Footer-ba20f9fc.js";import"./index.esm-480a25f7.js";import"./iconBase-22d03553.js";import"./FullLogo-2606c11c.js";import"./FormLayout-7578b984.js";function k({auth:t}){const{data:o,setData:e,post:a,processing:m,errors:i,reset:p}=d({password:""});l.useEffect(()=>()=>{p("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{auth:t,children:[s.jsx(u,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(j,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(w,{type:"submit",className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{k as default};