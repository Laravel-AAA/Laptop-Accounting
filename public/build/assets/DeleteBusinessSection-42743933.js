import{j as e,r as a}from"./app-1ab1ca84.js";import{q as x}from"./transition-7855a772.js";import{_ as f,D as w,S as v}from"./SecondaryMaterialBtn-41567cb8.js";import{I as N}from"./Input-8c223dec.js";import{u as D}from"./useBetterForm-40e24ff1.js";import{S as C}from"./SupportEmailLink-57894eb0.js";import{u as F}from"./useTranslation-2fada337.js";import"./index-dae4422a.js";import"./index-ef38a0f2.js";import"./ErrorMessage-e593865f.js";function S({children:t,show:n=!1,maxWidth:r="2xl",closeable:o=!0,onClose:l=()=>{}}){const i=()=>{o&&l()},c={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return e.jsx(x,{show:n,as:a.Fragment,leave:"duration-200",children:e.jsxs(f,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:i,children:[e.jsx(x.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),e.jsx(x.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(f.Panel,{className:`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${c}`,children:t})})]})})}function _({business:t}){const[n,r]=a.useState(!1),o=a.useRef(null),{data:l,setData:i,delete:c,processing:p,reset:y,errors:m,isDirty:g}=D({password:""}),j=()=>{r(!0)},b=u=>{u.preventDefault(),c(route("business.destroy",t.id),{preserveScroll:!0,onSuccess:()=>d(),onError:T=>{var h;(h=o.current)==null||h.focus()},onFinish:()=>y()})},d=()=>{r(!1),y()},{t:s}=F();return e.jsx("section",{className:" bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsxs("div",{className:"max-w-3xl space-y-6",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:s("Delete Business")}),e.jsx("p",{className:"text-normal mt-3 text-gray-600",children:s("When you delete your business, you will lose access to all the resources associated with it, such as accounts, products, bills, and business data. They will be permanently erased from our system and cannot be recovered.")}),e.jsx("p",{className:"text-normal mt-3 text-gray-600",children:s("To prevent accidental deletion of large businesses, you must first delete all other accounts under your business. This is a safety measure to ensure that you are fully aware of the consequences of deleting your business.")}),e.jsxs("p",{className:"text-normal mt-3 text-gray-600",children:[s("If you have any questions or concerns about deleting your business, please contact us at"),e.jsx(C,{}),"."," ",s("We are happy to assist you with any issues you may have.")]})]}),e.jsx(w,{onClick:j,children:s("Delete Business")}),e.jsx(S,{show:n,onClose:d,children:e.jsxs("form",{onSubmit:b,className:"p-6",children:[e.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:[s("Are you sure you want to delete")," ",e.jsx("span",{className:"text-primary-800",children:t.name})," ",s("business?")]}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:s("You will lose access to all the resources associated with it, such as accounts, products, bills, and business data. They will be permanently erased from our system and cannot be recovered.")}),e.jsx("div",{className:"mt-6",children:e.jsx(N,{id:"password",label:"Password",type:"password",name:"password",ref:o,value:l.password,onChange:u=>i("password",u.target.value),className:"mt-1 block w-3/4",autoFocus:!0,required:!0,placeholder:s("Password"),errorMsg:m.password||m.serverError,hideError:!!m.serverError||g("password"),disabled:p})}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(v,{onClick:d,children:"Cancel"}),e.jsx(w,{type:"submit",className:"ml-3",disabled:p,children:s("Delete Business")})]})]})})]})})}export{_ as default};