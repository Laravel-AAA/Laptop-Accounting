import{r as t,j as n}from"./app-95eecb40.js";import{r as a}from"./index-abdbd0b7.js";import{C as i}from"./COUNTRIES-4fa12db1.js";import"./index-008cf8d3.js";function m({form:r}){const s=t.useMemo(()=>i.filter(e=>e.countryCallingCode).sort((e,o)=>e.name>o.name?1:e.name<o.name?-1:0),[]),l=t.useMemo(()=>r.data.countryCallingCode?s.find(e=>e.countryCallingCode===r.data.countryCallingCode)??s[0]:s[0],[r.data.countryCallingCode]);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"relative flex w-full",children:[n.jsxs(a.Menu,{placement:"bottom-start",children:[n.jsx(a.MenuHandler,{children:n.jsxs(a.Button,{size:"lg",ripple:!1,disabled:r.processing,variant:"text",color:"blue-gray",className:"flex h-11 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3",children:[n.jsx("img",{src:l.flags.svg,alt:l.name,className:"h-4 w-5 rounded object-cover"}),l.countryCallingCode]})}),n.jsx(a.MenuList,{className:"max-h-[20rem] max-w-[18rem]",children:s.map((e,o)=>n.jsxs(a.MenuItem,{value:e.name,className:"flex items-center gap-2",onClick:()=>r.setData("countryCallingCode",e.countryCallingCode),children:[n.jsx("img",{src:e.flags.svg,alt:e.name,className:"h-5 w-7 rounded object-cover"}),e.name," ",n.jsx("span",{className:"ml-auto",children:e.countryCallingCode})]},e.name))})]}),n.jsx(a.Input,{label:"Phone Number",color:"teal",size:"lg",type:"number",className:"remove-arrow w-full rounded-l-none focus:rounded-l-none focus:ring-0",value:r.data.phone,error:!!r.errors.phone&&!r.isDirty("phone"),onChange:e=>r.setData("phone",e.target.value),disabled:r.processing,required:!r.processing,crossOrigin:void 0})]}),(r.errors.phone||r.errors.countryCallingCode)&&n.jsx("p",{className:"ml-2 mt-2 text-xs text-danger-600 ",children:r.errors.phone||r.errors.countryCallingCode})]})}export{m as PhoneInput};