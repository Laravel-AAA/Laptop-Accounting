import{r as c,j as e,a as x,d as f}from"./app-eb2c1e88.js";import{C as h}from"./Checkbox-e51131dc.js";import{P as b}from"./PrimaryButton-5b169dc4.js";import{I as l}from"./Input-0b645fd3.js";import{G as g}from"./GuestFormLayout-5591ff10.js";import{u as j}from"./useBetterForm-47b8566e.js";import"./index-57713f33.js";import"./index-a0fff6b4.js";import"./ErrorMessage-9775cd27.js";import"./index-e1934713.js";import"./index-56316b27.js";import"./index.esm-7b563c93.js";import"./iconBase-675fe561.js";import"./index.esm-d598762e.js";import"./transition-eccadcd9.js";import"./Footer-0d72fcd7.js";import"./SupportEmailLink-a9e79d1a.js";import"./A-690ff2f8.js";import"./PrimaryLink-f4d956dc.js";import"./BetterLink-2992a523.js";import"./FullLogo-48318760.js";import"./Logo-bc709ea8.js";import"./FormLayout-bd564864.js";function Q({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{Q as default};