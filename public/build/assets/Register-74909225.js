import{j as r,a as c,y as l}from"./app-95eecb40.js";import{G as p}from"./GuestFormLayout-2856a1c6.js";import u from"./BusinessForm-d792a599.js";import x from"./UserForm-21949789.js";import{u as n}from"./useBetterForm-f827b01d.js";import g from"./RegisterAction-e10316dd.js";import"./index-355f4b47.js";import"./index-037e6528.js";import"./index-abdbd0b7.js";import"./index-008cf8d3.js";import"./index.esm-4cdec08f.js";import"./iconBase-5a387e2d.js";import"./index.esm-15b0b826.js";import"./transition-7e19bb3f.js";import"./Footer-b3a14604.js";import"./SupportEmailLink-e64d73c6.js";import"./A-ea9c0701.js";import"./PrimaryLink-3e74626e.js";import"./BetterLink-17b6e41c.js";import"./FullLogo-63a8531d.js";import"./Logo-c31c5985.js";import"./FormLayout-512da9ff.js";import"./Input-d94d8ebd.js";import"./ErrorMessage-bbda154c.js";import"./PhoneInput-eec3f929.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-1ed65bac.js";import"./SelectInput-d8969825.js";import"./CurrencyInput-db6d0454.js";import"./TaxRateInput-2f03aa2f.js";import"./Num-107dd470.js";import"./PrimaryButton-e599fb8a.js";function M(){const s=new URLSearchParams(window.location.search),e=n({name:s.get("name")??"",email:s.get("email")??"",password:"",password_confirmation:"",role:"Owner"}),t=n({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{a.preventDefault(),l.post(route("register",{email:s.get("email")??"",expires:s.get("expires")??"",signature:s.get("signature")??""}),{...e.data,business:t.data},{onStart:()=>{t.clearErrors(),e.clearErrors(),e.setProcessing(!0),t.setProcessing(!0)},onFinish:()=>{e.setProcessing(!1),t.setProcessing(!1)},onError:i=>{for(let o in i)o.startsWith("business.")?t.setError(o.substring(9),i[o]):e.setError(o,i[o])}})};return r.jsxs(p,{children:[r.jsx(c,{title:"Register"}),r.jsxs("main",{className:"space-y-4",children:[r.jsx("header",{children:r.jsx("h1",{className:"mx-3 text-center text-3xl font-extrabold",children:"Register"})}),r.jsx("section",{children:r.jsxs("form",{className:"space-y-4",onSubmit:m,children:[r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Account Details"}),r.jsx(x,{form:e})]}),r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Details"}),r.jsx(u,{form:t})]}),r.jsx("footer",{children:r.jsx(g,{processing:e.processing})})]})})]})]})}export{M as default};
