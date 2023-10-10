import{W as a,j as e,b as m,d}from"./app-7db9876e.js";import{G as l}from"./GuestFormLayout-d4f1b321.js";import{P as u}from"./PrimaryButton-0398df75.js";import"./ApplicationLogo-614c54c3.js";import"./index-32a57d66.js";import"./index-1a46aa07.js";function p({status:t,auth:i}){const{post:s,processing:r}=a({}),o=n=>{n.preventDefault(),s(route("verification.send"))};return e.jsxs(l,{auth:i,children:[e.jsx(m,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:o,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(u,{type:"submit",disabled:r,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{p as default};
