import{j as e,a,d as m}from"./app-2b91eeaa.js";import{P as d}from"./PrimaryButton-81d6c8aa.js";import{A as u}from"./index-a043f164.js";import{F as l}from"./FormLayout-5d87cbb2.js";import{F as c}from"./Footer-fd773941.js";import{u as f}from"./useBetterForm-286c790c.js";import"./Dropdown-6e9c8a4b.js";import"./transition-f9faa2d8.js";import"./FullLogo-bbdf19e7.js";function w({status:t,auth:i}){const{post:r,processing:s}=f({}),o=n=>{n.preventDefault(),r(route("verification.send"))};return e.jsxs(u,{header:" ",user:i.user,children:[e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, you have to verify your email address by clicking on the link we just emailed to you. If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(d,{type:"submit",disabled:s,children:"Resend Verification Email"}),e.jsx(m,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Log Out"})]})})]}),e.jsx(c,{})]})}export{w as default};