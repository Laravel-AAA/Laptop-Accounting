import{j as r,a as c,y as l}from"./app-bd4b3f0c.js";import{G as p}from"./GuestFormLayout-d4e259d3.js";import u from"./BusinessForm-e413e44e.js";import x from"./UserForm-d9a01277.js";import{u as n}from"./useBetterForm-86d418b6.js";import g from"./RegisterAction-3f0cbe11.js";import"./index-79e5677d.js";import"./index-96c65ca1.js";import"./index-8a1cef50.js";import"./index-e2e55a02.js";import"./index-387d7a00.js";import"./index.esm-dacceae4.js";import"./iconBase-05a0b489.js";import"./index.esm-ba4fcd42.js";import"./transition-2d045a48.js";import"./Footer-e6c55bd2.js";import"./SupportEmailLink-988eaefa.js";import"./A-6a3b73bd.js";import"./PrimaryLink-06172c13.js";import"./BetterLink-a9fac080.js";import"./FullLogo-169ca72f.js";import"./Logo-0814a9d6.js";import"./FormLayout-5cf7a9ab.js";import"./Input-e9465e7f.js";import"./ErrorMessage-ea4c0743.js";import"./PhoneInput-9c6c2b0a.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-40ec6c81.js";import"./SelectInput-4c8a1d93.js";import"./CurrencyInput-964a897d.js";import"./TaxRateInput-e1fab48e.js";import"./Num-747cbf88.js";import"./PrimaryButton-fa04d2c7.js";function Q(){const s=new URLSearchParams(window.location.search),e=n({name:s.get("name")??"",email:s.get("email")??"",password:"",password_confirmation:"",role:"Owner"}),t=n({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{a.preventDefault(),l.post(route("register",{email:s.get("email")??"",expires:s.get("expires")??"",signature:s.get("signature")??""}),{...e.data,business:t.data},{onStart:()=>{t.clearErrors(),e.clearErrors(),e.setProcessing(!0),t.setProcessing(!0)},onFinish:()=>{e.setProcessing(!1),t.setProcessing(!1)},onError:i=>{for(let o in i)o.startsWith("business.")?t.setError(o.substring(9),i[o]):e.setError(o,i[o])}})};return r.jsxs(p,{children:[r.jsx(c,{title:"Register"}),r.jsxs("main",{className:"space-y-4",children:[r.jsx("header",{children:r.jsx("h1",{className:"mx-3 text-center text-3xl font-extrabold",children:"Register"})}),r.jsx("section",{children:r.jsxs("form",{className:"space-y-4",onSubmit:m,children:[r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Account Details"}),r.jsx(x,{form:e})]}),r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Details"}),r.jsx(u,{form:t})]}),r.jsx("footer",{children:r.jsx(g,{processing:e.processing})})]})})]})]})}export{Q as default};
