import{r as c,j as e}from"./app-1ab1ca84.js";import{a as p}from"./index-a39eae95.js";import{u}from"./useTranslation-2fada337.js";import"./iconBase-33f8de09.js";function j({form:t}){var r;const l=c.useRef(null),[g,d]=c.useState((r=t.data.logo)!=null&&r.startsWith("http")?t.data.logo:t.data.logo?"/businesses-logo/"+t.data.logo:"/assets/logo/laptop-pos-logo.svg"),{t:a}=u();return e.jsxs("div",{children:[e.jsxs("button",{type:"button",onClick:()=>{var s,o;return(o=(s=l.current)==null?void 0:s.click)==null?void 0:o.call(s)},className:"div-style group relative "+(t.processing&&"opacity-25"),disabled:t.processing,children:[e.jsx("p",{className:"absolute -top-2 left-3 bg-white px-1 text-xs text-blue-gray-400",children:a("Logo")}),e.jsx("div",{className:`pointer-events-none absolute bottom-0 left-0 right-0  top-0 rounded-md
        bg-[radial-gradient(#000,#00000030,#00000010,transparent)] opacity-0 transition duration-200 group-hover:opacity-100`,children:e.jsxs("p",{className:"flex drop-shadow-lg h-full w-full items-center justify-center gap-2 text-center text-lg text-gray-100",children:[e.jsx(p,{}),a("Edit Business Logo")]})}),e.jsxs("div",{className:"rounded-md border border-blue-gray-200 shadow-sm ",children:[e.jsx("input",{ref:l,type:"file",hidden:!0,accept:"image/*",onChange:s=>{var i,n;let o=(n=(i=s==null?void 0:s.target)==null?void 0:i.files)==null?void 0:n[0];o&&(t.setData("logoFile",o),d(URL.createObjectURL(o)))}}),e.jsx("img",{className:"mx-auto h-40",src:g,alt:a("Business logo")})]})]}),(t.errors.logo||t.errors.logoFile)&&e.jsx("p",{className:"ml-2 mt-2 text-xs text-danger-600 ",children:t.errors.logo||t.errors.logoFile})]})}export{j as default};