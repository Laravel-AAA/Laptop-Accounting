import{r as c,j as r,a as w}from"./app-a977b1de.js";import{G as f}from"./GuestFormLayout-9906b218.js";import{P as x}from"./PrimaryButton-cf6d1cbc.js";import{I as m}from"./Input-564f4ac9.js";import{u as h}from"./useBetterForm-04e2e335.js";import"./index-f3a218a0.js";import"./index-20f5c2b6.js";import"./index-b35a75c7.js";import"./index-33312385.js";import"./index.esm-6439725c.js";import"./iconBase-3caa22eb.js";import"./index.esm-47bca7da.js";import"./transition-5136cd51.js";import"./Footer-25cd3601.js";import"./SupportEmailLink-c845e77a.js";import"./A-1f93d57a.js";import"./PrimaryLink-2823a9ba.js";import"./BetterLink-35810839.js";import"./FullLogo-0562fa35.js";import"./Logo-b0478015.js";import"./FormLayout-84478b4b.js";import"./ErrorMessage-bdf203da.js";function H({token:l,email:p,auth:j}){const{data:o,setData:a,post:d,processing:e,errors:t,reset:n,isDirty:i}=h({token:l,email:p,password:"",password_confirmation:""});c.useEffect(()=>()=>{n("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),d(route("password.store"))};return r.jsxs(f,{children:[r.jsx(w,{title:"Reset Password"}),r.jsxs("form",{onSubmit:u,children:[r.jsx("div",{children:r.jsx(m,{id:"email",label:"Email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>a("email",s.target.value),errorMsg:t.email,hideError:i("email"),disabled:e,required:!0})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{id:"password",label:"Password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",autoFocus:!0,required:!0,onChange:s=>a("password",s.target.value),errorMsg:t.password,hideError:i("password"),disabled:e})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{label:"Confirm Password",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",required:!0,onChange:s=>a("password_confirmation",s.target.value),errorMsg:t.password_confirmation,hideError:i("password_confirmation"),disabled:e})}),r.jsx("div",{className:"mt-4 flex items-center justify-end",children:r.jsx(x,{type:"submit",className:"ml-4",disabled:e,children:"Reset Password"})})]})]})}export{H as default};