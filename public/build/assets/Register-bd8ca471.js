import{j as t,a as l,y as p}from"./app-838cb2bb.js";import{G as u}from"./GuestFormLayout-d2c1d99d.js";import c from"./BusinessForm-af702e07.js";import d from"./UserForm-c1fd7063.js";import{u as i}from"./useBetterForm-d6b57cfa.js";import"./index-2760677e.js";import"./index-8cce2395.js";import"./Dropdown-3724d36d.js";import"./transition-59daec51.js";import"./Footer-35a7cf2d.js";import"./index.esm-d6b3890a.js";import"./iconBase-98933817.js";import"./FullLogo-676765b8.js";import"./FormLayout-3b9a9e47.js";import"./Input-9f56e393.js";import"./index-82366f85.js";import"./index-1dd53fcd.js";import"./ErrorMessage-0b2ad8a4.js";import"./PhoneInput-e542fdcb.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-c3c5f16d.js";import"./SelectInput-82c5f701.js";import"./CurrencyInput-75cd62d4.js";import"./TaxRateInput-357bebf2.js";import"./Num-43ff67d1.js";import"./PrimaryButton-a97409fe.js";import"./Checkbox-c2e739d4.js";function _({auth:n}){const r=i({name:"",email:"",password:"",password_confirmation:"",role:"Admin",termsAndConditions:!1}),o=i({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{if(a.preventDefault(),r.data.termsAndConditions!==!0){r.setError("termsAndConditions","You should agree to our Terms & Conditions.");return}p.post(route("register"),{...r.data,business:o.data},{onStart:()=>{o.clearErrors(),r.clearErrors(),r.setProcessing(!0),o.setProcessing(!0)},onFinish:()=>{r.setProcessing(!1),o.setProcessing(!1)},onError:s=>{for(let e in s)e.startsWith("business.")?o.setError(e.substring(9),s[e]):r.setError(e,s[e])}})};return t.jsxs(u,{auth:n,children:[t.jsx(l,{title:"Register"}),t.jsx("h1",{className:"mx-3 mb-4 text-center text-3xl font-extrabold",children:"Register"}),t.jsxs("form",{onSubmit:m,children:[t.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Information"}),t.jsx(c,{form:o}),t.jsx("p",{className:"mt-4 text-center text-lg text-blue-gray-500",children:"Account Information"}),t.jsx(d,{form:r})]})]})}export{_ as default};