import{W as f,r as x,j as s,b as j}from"./app-0c956e5b.js";import{G as v}from"./GuestFormLayout-dfddaca5.js";import{I as t}from"./InputError-c8943358.js";import{I as m}from"./InputLabel-b8e06434.js";import{P as h}from"./PrimaryButton-8395e11a.js";import{T as i}from"./TextInput-ab9c7698.js";import"./index-ecdfd0e3.js";import"./Dropdown-2145e8e8.js";import"./transition-a3141dd7.js";import"./index-f94c52e5.js";import"./index.esm-75e40392.js";function k({token:l,email:n,auth:p}){const{data:e,setData:o,post:d,processing:u,errors:r,reset:c}=f({token:l,email:n,password:"",password_confirmation:""});x.useEffect(()=>()=>{c("password","password_confirmation")},[]);const w=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs(v,{auth:p,children:[s.jsx(j,{title:"Reset Password"}),s.jsxs("form",{onSubmit:w,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(t,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(h,{type:"submit",className:"ml-4",disabled:u,children:"Reset Password"})})]})]})}export{k as default};
