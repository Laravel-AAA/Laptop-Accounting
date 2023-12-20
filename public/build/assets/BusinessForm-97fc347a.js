import{r,j as a}from"./app-dea2e70f.js";import{I as n}from"./Input-29bf2f46.js";import{PhoneInput as o}from"./PhoneInput-6fae5803.js";import x from"./CountryInput-2b8bc8d8.js";import{C as d}from"./COUNTRIES-4fa12db1.js";import p from"./CurrencyInput-f395bda1.js";import m from"./TaxRateInput-70728735.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./ErrorMessage-118253c3.js";import"./SelectInput-acf9ccaf.js";import"./Num-c7cf838b.js";function F({form:e}){const[l,c]=r.useState(e.data.country?d.find(t=>t.name===e.data.country)??null:null),[s,i]=r.useState(0);return r.useEffect(()=>{e.setData("taxPercent",Number((Number(s)/100).toFixed(6)))},[s]),r.useEffect(()=>{const t=d.find(u=>u.name===e.data.country);t&&(c(t),typeof t.tax=="number"&&i(t.tax*100),t.countryCallingCode&&e.setData("countryCallingCode",t.countryCallingCode))},[e.data.country]),a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx(n,{label:"Business Name",type:"text",value:e.data.name,errorMsg:e.errors.name,hideError:e.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:t=>e.setData("name",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(x,{form:e})}),a.jsx("div",{className:"mt-4",children:a.jsx(n,{label:"City",type:"text",errorMsg:e.errors.city,hideError:e.isDirty("city"),value:e.data.city,className:"mt-1 block w-full",autoComplete:"city",onChange:t=>e.setData("city",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(n,{label:"Address",type:"text",value:e.data.address,errorMsg:e.errors.address,hideError:e.isDirty("address"),className:"mt-1 block w-full",autoComplete:"address",onChange:t=>e.setData("address",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(p,{form:e,chosenCountry:l})}),a.jsx("div",{className:"mt-4",children:a.jsx(m,{disabled:e.processing,errorMsg:e.errors.taxPercent,hideError:e.isDirty("taxPercent"),onChange:t=>i(Number(Number(t.target.value).toFixed(6))),value:s,currency:e.data.currency??"$"})}),a.jsx("div",{className:"mt-4",children:a.jsx(o,{form:e})})]})}export{F as default};