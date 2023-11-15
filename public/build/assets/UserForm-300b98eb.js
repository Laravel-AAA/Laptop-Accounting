import{r as i,j as s,d as t}from"./app-343c4aa9.js";import{P as l}from"./PrimaryButton-6d7c063b.js";import{C as n}from"./Checkbox-ed64582a.js";import{I as r}from"./Input-57a95dc5.js";import"./index-bcd7de63.js";import"./index-493a9c48.js";import"./ErrorMessage-90e1bf04.js";function h({form:e}){return i.useEffect(()=>()=>{e.reset("password","password_confirmation")},[]),s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx(r,{label:"Your Name",name:"name",type:"text",value:e.data.name,errorMsg:e.errors.name,hideError:e.isDirty("name"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"name",onChange:a=>e.setData("name",a.target.value),required:!0})}),s.jsx("div",{className:"mt-4",children:s.jsx(r,{label:"Email",type:"email",name:"email",value:e.data.email,errorMsg:e.errors.email,hideError:e.isDirty("email"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"email",onChange:a=>e.setData("email",a.target.value),required:!0})}),s.jsx("div",{className:"mt-4",children:s.jsx(r,{label:"Password",type:"password",name:"password",value:e.data.password,errorMsg:e.errors.password,hideError:e.isDirty("password"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>e.setData("password",a.target.value),required:!0})}),s.jsx("div",{className:"mt-4",children:s.jsx(r,{label:"Confirm Password",type:"password",name:"password_confirmation",value:e.data.password_confirmation,errorMsg:e.errors.password_confirmation,hideError:e.isDirty("password_confirmation"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>e.setData("password_confirmation",a.target.value),required:!0})}),s.jsx("div",{className:"mt-2",children:s.jsx(n,{checked:e.data.termsAndConditions,onChange:a=>{e.setData("termsAndConditions",a.target.checked)},label:s.jsxs("p",{children:["I agree to the"," ",s.jsx(t,{className:"font-semibold text-blue-600 hover:text-blue-400",href:"/terms",children:"Terms & Conditions"}),"."]}),disabled:e.processing,errorMsg:e.errors.termsAndConditions})}),s.jsx("div",{className:"mt-3 flex items-center justify-end",children:s.jsxs("div",{className:"flex items-center justify-end",children:[s.jsx(t,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Already registered?"}),s.jsx(l,{type:"submit",className:"ml-4",disabled:e.processing,children:"Register"})]})})]})}export{h as default};