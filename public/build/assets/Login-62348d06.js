import{r as c,j as e,a as x,d as f}from"./app-026dd19d.js";import{C as h}from"./Checkbox-edc1bf1e.js";import{P as b}from"./PrimaryButton-943a2737.js";import{I as l}from"./Input-f9170699.js";import{G as g}from"./GuestFormLayout-da2ca4be.js";import{u as j}from"./useBetterForm-33ba8844.js";import"./index-68350093.js";import"./index-ccc1020a.js";import"./ErrorMessage-63ffdc22.js";import"./index-b18a404d.js";import"./index-e2d81c68.js";import"./index.esm-b390d3fb.js";import"./iconBase-09d592e1.js";import"./index.esm-b6b2812c.js";import"./transition-eac92ea4.js";import"./Footer-42698c55.js";import"./SupportEmailLink-fd8200a4.js";import"./A-e1c8f93a.js";import"./PrimaryLink-03465802.js";import"./BetterLink-a6b2600c.js";import"./FullLogo-fdd5d366.js";import"./Logo-50d0a4c2.js";import"./FormLayout-c7e357ba.js";function Q({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{Q as default};