import{j as t,a as l,y as p}from"./app-343c4aa9.js";import{G as u}from"./GuestFormLayout-d5b1d7c1.js";import c from"./BusinessForm-96b0fb41.js";import d from"./UserForm-300b98eb.js";import{u as i}from"./useBetterForm-720d06a2.js";import"./index-1a21b2ec.js";import"./Logo-97abc5bc.js";import"./Footer-e4cfb6e6.js";import"./SupportEmailLink-1620de5f.js";import"./index.esm-6e0d9836.js";import"./iconBase-1a220b0c.js";import"./transition-11d8b5d4.js";import"./FullLogo-644c5f89.js";import"./FormLayout-2965cfcf.js";import"./Input-57a95dc5.js";import"./index-bcd7de63.js";import"./index-493a9c48.js";import"./ErrorMessage-90e1bf04.js";import"./PhoneInput-f6db14f8.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-d3ac8907.js";import"./SelectInput-e1fbf7e7.js";import"./CurrencyInput-adda0b2f.js";import"./TaxRateInput-87c7fc4a.js";import"./Num-96abf7a7.js";import"./PrimaryButton-6d7c063b.js";import"./Checkbox-ed64582a.js";function Y({auth:n}){const r=i({name:"",email:"",password:"",password_confirmation:"",role:"Owner",termsAndConditions:!1}),o=i({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{if(a.preventDefault(),r.data.termsAndConditions!==!0){r.setError("termsAndConditions","You should agree to our Terms & Conditions.");return}p.post(route("register"),{...r.data,business:o.data},{onStart:()=>{o.clearErrors(),r.clearErrors(),r.setProcessing(!0),o.setProcessing(!0)},onFinish:()=>{r.setProcessing(!1),o.setProcessing(!1)},onError:s=>{for(let e in s)e.startsWith("business.")?o.setError(e.substring(9),s[e]):r.setError(e,s[e])}})};return t.jsxs(u,{auth:n,children:[t.jsx(l,{title:"Register"}),t.jsx("h1",{className:"mx-3 mb-4 text-center text-3xl font-extrabold",children:"Register"}),t.jsxs("form",{onSubmit:m,children:[t.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Information"}),t.jsx(c,{form:o}),t.jsx("p",{className:"mt-4 text-center text-lg text-blue-gray-500",children:"Account Information"}),t.jsx(d,{form:r})]})]})}export{Y as default};
