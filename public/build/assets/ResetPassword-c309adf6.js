import{r as c,j as r,a as w}from"./app-95eecb40.js";import{G as f}from"./GuestFormLayout-2856a1c6.js";import{P as x}from"./PrimaryButton-e599fb8a.js";import{I as m}from"./Input-d94d8ebd.js";import{u as h}from"./useBetterForm-f827b01d.js";import"./index-355f4b47.js";import"./index-037e6528.js";import"./index-abdbd0b7.js";import"./index-008cf8d3.js";import"./index.esm-4cdec08f.js";import"./iconBase-5a387e2d.js";import"./index.esm-15b0b826.js";import"./transition-7e19bb3f.js";import"./Footer-b3a14604.js";import"./SupportEmailLink-e64d73c6.js";import"./A-ea9c0701.js";import"./PrimaryLink-3e74626e.js";import"./BetterLink-17b6e41c.js";import"./FullLogo-63a8531d.js";import"./Logo-c31c5985.js";import"./FormLayout-512da9ff.js";import"./ErrorMessage-bbda154c.js";function H({token:l,email:p,auth:j}){const{data:o,setData:a,post:d,processing:e,errors:t,reset:n,isDirty:i}=h({token:l,email:p,password:"",password_confirmation:""});c.useEffect(()=>()=>{n("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),d(route("password.store"))};return r.jsxs(f,{children:[r.jsx(w,{title:"Reset Password"}),r.jsxs("form",{onSubmit:u,children:[r.jsx("div",{children:r.jsx(m,{id:"email",label:"Email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>a("email",s.target.value),errorMsg:t.email,hideError:i("email"),disabled:e,required:!0})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{id:"password",label:"Password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",autoFocus:!0,required:!0,onChange:s=>a("password",s.target.value),errorMsg:t.password,hideError:i("password"),disabled:e})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{label:"Confirm Password",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",required:!0,onChange:s=>a("password_confirmation",s.target.value),errorMsg:t.password_confirmation,hideError:i("password_confirmation"),disabled:e})}),r.jsx("div",{className:"mt-4 flex items-center justify-end",children:r.jsx(x,{type:"submit",className:"ml-4",disabled:e,children:"Reset Password"})})]})]})}export{H as default};
