import{j as e,a as n,d as a}from"./app-3ae78c27.js";import{P as d}from"./PrimaryButton-8fb2241e.js";import{A as l}from"./index-92655cd3.js";import{F as u}from"./FormLayout-c3e2fe0e.js";import{F as p}from"./Footer-074b46ab.js";import{u as c}from"./useBetterForm-ec6acde4.js";import"./index-1bb03f08.js";import"./index-91a2b981.js";import"./index-f816ca65.js";import"./index-387d7a00.js";import"./index.esm-acc8c32e.js";import"./iconBase-a9fbe859.js";import"./index.esm-57ca9fd5.js";import"./transition-82cd760d.js";import"./Logo-68e2bbc7.js";import"./Dropdown-52130e3a.js";import"./BetterLink-878400b5.js";import"./FullLogo-dddfe68f.js";import"./SupportEmailLink-07021547.js";import"./A-3389763f.js";function I({status:t,auth:i}){const{post:r,processing:o}=c({}),s=m=>{m.preventDefault(),r(route("verification.send"))};return e.jsxs(l,{header:null,user:i.user,children:[e.jsxs(u,{children:[e.jsx(n,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, you have to verify your email address by clicking on the link we just emailed to you. If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(d,{type:"submit",disabled:o,children:"Resend Verification Email"}),e.jsx(a,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Log Out"})]})})]}),e.jsx(p,{})]})}export{I as default};