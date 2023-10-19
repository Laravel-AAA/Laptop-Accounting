import{W as c,r as f,j as e,b as x,d as w}from"./app-e42115ca.js";import{G as j}from"./GuestFormLayout-6bb69c1a.js";import{I as o}from"./InputError-a34436fb.js";import{I as m}from"./InputLabel-67bf238e.js";import{P as g}from"./PrimaryButton-3f49508d.js";import{T as i}from"./TextInput-1af62139.js";import"./index-0d2118e9.js";import"./index-e29b5e46.js";import"./Dropdown-85b12c8f.js";import"./transition-654a5f2e.js";import"./index.esm-ddc3f1aa.js";import"./iconBase-d30e4aba.js";function P({auth:l}){const{data:a,setData:r,post:n,processing:d,errors:t,reset:u}=c({name:"",email:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{u("password","password_confirmation")},[]);const p=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(j,{auth:l,children:[e.jsx(x,{title:"Register"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(i,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(w,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Already registered?"}),e.jsx(g,{type:"submit",className:"ml-4",disabled:d,children:"Register"})]})]})]})}export{P as default};