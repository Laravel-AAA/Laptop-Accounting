import{W as p,r as l,j as s,a as c}from"./app-1216230a.js";import{G as u}from"./GuestLayout-a47de73d.js";import{T as f,I as x}from"./TextInput-5146d6eb.js";import{I as w}from"./InputLabel-07241785.js";import{P as j}from"./PrimaryButton-36e94d27.js";import"./ApplicationLogo-db6bd30c.js";import"./index-dfb92fc5.js";function I({auth:a}){const{data:e,setData:t,post:o,processing:i,errors:m,reset:n}=p({password:""});l.useEffect(()=>()=>{n("password")},[]);const d=r=>{r.preventDefault(),o(route("password.confirm"))};return s.jsxs(u,{auth:a,children:[s.jsx(c,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:d,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(w,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(x,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(j,{className:"ml-4",disabled:i,children:"Confirm"})})]})]})}export{I as default};