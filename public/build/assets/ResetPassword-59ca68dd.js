import{W as f,r as x,j as s,b as j}from"./app-dd313135.js";import{G as v}from"./GuestFormLayout-d1e025c9.js";import{I as t}from"./InputError-31469ee7.js";import{I as m}from"./InputLabel-87739410.js";import{P as h}from"./PrimaryButton-83bf4880.js";import{T as i}from"./TextInput-d72e27c0.js";import"./index-6f532fab.js";import"./index-d8735d7c.js";import"./Dropdown-dafb2859.js";import"./transition-9da6ec54.js";import"./index.esm-92086401.js";import"./iconBase-2f17a443.js";function D({token:l,email:n,auth:p}){const{data:e,setData:o,post:d,processing:c,errors:r,reset:u}=f({token:l,email:n,password:"",password_confirmation:""});x.useEffect(()=>()=>{u("password","password_confirmation")},[]);const w=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs(v,{auth:p,children:[s.jsx(j,{title:"Reset Password"}),s.jsxs("form",{onSubmit:w,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"email",onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(t,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(h,{type:"submit",className:"ml-4",disabled:c,children:"Reset Password"})})]})]})}export{D as default};