import{r as c,j as e,a as x,d as f}from"./app-02238819.js";import{C as h}from"./Checkbox-ec9bc6bf.js";import{P as b}from"./PrimaryButton-99b15eb8.js";import{I as l}from"./Input-48e0e8c0.js";import{G as g}from"./GuestFormLayout-5fdad51a.js";import{u as j}from"./useBetterForm-371649f1.js";import"./index-8301804e.js";import"./index-9b1e206d.js";import"./ErrorMessage-c2c4745b.js";import"./index-5f78e2dd.js";import"./index-3a8e8dca.js";import"./index.esm-1f875cda.js";import"./iconBase-a22b7b87.js";import"./index.esm-e23caa02.js";import"./transition-c2dff889.js";import"./Footer-00b372bd.js";import"./SupportEmailLink-8edc76e2.js";import"./A-b07f1baa.js";import"./PrimaryLink-abf3da25.js";import"./BetterLink-489afceb.js";import"./FullLogo-68de4e81.js";import"./Logo-decfb8b0.js";import"./FormLayout-a88cce51.js";function Q({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{Q as default};