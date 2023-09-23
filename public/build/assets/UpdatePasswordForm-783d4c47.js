import{r as w,W as g,j as s}from"./app-146acb23.js";import{T as n,I as d}from"./TextInput-351c50d8.js";import{I as c}from"./InputLabel-ca8f48f7.js";import{P as _}from"./PrimaryButton-00a0a8d6.js";import{t as y}from"./transition-605fc1bb.js";function S({className:x=""}){const p=w.useRef(),i=w.useRef(),{data:e,setData:a,errors:t,put:f,reset:o,processing:j,recentlySuccessful:h}=g({current_password:"",password:"",password_confirmation:""}),v=r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:l=>{var u,m;l.password&&(o("password","password_confirmation"),(u=p.current)==null||u.focus()),l.current_password&&(o("current_password"),(m=i.current)==null||m.focus())}})};return s.jsxs("section",{className:x,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:v,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(c,{htmlFor:"current_password",value:"Current Password"}),s.jsx(n,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(d,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password",value:"New Password"}),s.jsx(n,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(n,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(_,{disabled:j,children:"Save"}),s.jsx(y,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{S as default};
