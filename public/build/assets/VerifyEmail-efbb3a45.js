import{W as a,j as e,a as d,d as m}from"./app-0b94a0e0.js";import{G as l}from"./GuestLayout-9b22f5f9.js";import{P as u}from"./PrimaryButton-254b803a.js";import"./ApplicationLogo-bf919688.js";import"./index-4581cd6a.js";function h({status:t,auth:i}){const{post:s,processing:r}=a({}),n=o=>{o.preventDefault(),s(route("verification.send"))};return e.jsxs(l,{auth:i,children:[e.jsx(d,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:n,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(u,{type:"submit",disabled:r,children:"Resend Verification Email"}),e.jsx(m,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{h as default};