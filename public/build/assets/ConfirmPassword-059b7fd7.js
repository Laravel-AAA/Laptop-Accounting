import{W as d,r as l,j as s,b as u}from"./app-0c956e5b.js";import{G as c}from"./GuestFormLayout-dfddaca5.js";import{I as f}from"./InputError-c8943358.js";import{I as x}from"./InputLabel-b8e06434.js";import{P as w}from"./PrimaryButton-8395e11a.js";import{T as j}from"./TextInput-ab9c7698.js";import"./index-ecdfd0e3.js";import"./Dropdown-2145e8e8.js";import"./transition-a3141dd7.js";import"./index-f94c52e5.js";import"./index.esm-75e40392.js";function T({auth:t}){const{data:e,setData:a,post:o,processing:m,errors:i,reset:p}=d({password:""});l.useEffect(()=>()=>{p("password")},[]);const n=r=>{r.preventDefault(),o(route("password.confirm"))};return s.jsxs(c,{auth:t,children:[s.jsx(u,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(j,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{type:"submit",className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{T as default};
