import{r as c,j as e,a as x,d as f}from"./app-bd4b3f0c.js";import{C as h}from"./Checkbox-c61a0cd1.js";import{P as b}from"./PrimaryButton-fa04d2c7.js";import{I as l}from"./Input-e9465e7f.js";import{G as g}from"./GuestFormLayout-d4e259d3.js";import{u as j}from"./useBetterForm-86d418b6.js";import"./index-8a1cef50.js";import"./index-e2e55a02.js";import"./index-387d7a00.js";import"./ErrorMessage-ea4c0743.js";import"./index-79e5677d.js";import"./index-96c65ca1.js";import"./index.esm-dacceae4.js";import"./iconBase-05a0b489.js";import"./index.esm-ba4fcd42.js";import"./transition-2d045a48.js";import"./Footer-e6c55bd2.js";import"./SupportEmailLink-988eaefa.js";import"./A-6a3b73bd.js";import"./PrimaryLink-06172c13.js";import"./BetterLink-a9fac080.js";import"./FullLogo-169ca72f.js";import"./Logo-0814a9d6.js";import"./FormLayout-5cf7a9ab.js";function T({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{T as default};
