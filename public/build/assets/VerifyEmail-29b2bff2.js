import{j as e,a as m,d as a}from"./app-dea2e70f.js";import{P as d}from"./PrimaryButton-1de563e1.js";import{A as l}from"./index-ab3e49af.js";import{F as u}from"./FormLayout-9d4932a0.js";import{F as p}from"./Footer-5264db56.js";import{u as c}from"./useBetterForm-3bd480dc.js";import"./index-60f1db41.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./index.esm-3f090a22.js";import"./iconBase-76a8b7e9.js";import"./index.esm-750c7c23.js";import"./transition-6a94586b.js";import"./Logo-8714f3cc.js";import"./Dropdown-df466c76.js";import"./BetterLink-f7b3db09.js";import"./FullLogo-57c1731d.js";import"./SupportEmailLink-a455ef45.js";import"./A-c9d39cad.js";function D({status:t,auth:i}){const{post:r,processing:o}=c({}),s=n=>{n.preventDefault(),r(route("verification.send"))};return e.jsxs(l,{header:null,user:i.user,children:[e.jsxs(u,{children:[e.jsx(m,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, you have to verify your email address by clicking on the link we just emailed to you. If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(d,{type:"submit",disabled:o,children:"Resend Verification Email"}),e.jsx(a,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Log Out"})]})})]}),e.jsx(p,{})]})}export{D as default};