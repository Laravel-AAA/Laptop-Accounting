import{j as e}from"./app-dea2e70f.js";import{I as o}from"./Input-29bf2f46.js";import i from"./BusinessLogoInput-37578e7c.js";import{u as m}from"./useBetterForm-3bd480dc.js";import{P as n}from"./PrimaryMaterialBtn-f60a7817.js";import{t as l}from"./transition-6a94586b.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./ErrorMessage-118253c3.js";import"./index.esm-3f090a22.js";import"./iconBase-76a8b7e9.js";function N({business:s}){const t=m({name:s.name,logo:s.logo,logoFile:s.logoFile,_method:"patch"}),r=a=>{a.preventDefault(),console.log("data",t.data),t.post(route("business.update",s.id),{preserveScroll:!0})};return e.jsx("form",{onSubmit:r,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Business Identity"}),e.jsx("p",{className:"text-normal mt-1 text-gray-600",children:"Name and Logo"})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsx(o,{label:"Business Name",type:"text",value:t.data.name,errorMsg:t.errors.name,hideError:t.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:a=>t.setData("name",a.target.value),required:!0,disabled:t.processing}),e.jsx(i,{form:t}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(n,{type:"submit",disabled:t.processing,children:"Save"}),e.jsx(l,{show:t.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})]})]})})}export{N as default};