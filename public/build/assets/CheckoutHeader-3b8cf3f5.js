import{q as p,r as l,y as u,j as r}from"./app-2b91eeaa.js";import{I as d}from"./Input-adab095d.js";import{e as h,f as b}from"./index.esm-3cd4632f.js";import{u as v}from"./usePrevious-460853be.js";import"./index-8ee43967.js";import"./index-46f500d3.js";import"./ErrorMessage-fa1c9ce3.js";import"./iconBase-fe8d873a.js";function k({billOperations:{increaseQty:n},products:i}){const{filter:c}=p().props,[a,s]=l.useState({search:c.search??"",barcode:c.barcode??""}),m=v(a);l.useEffect(()=>{if(m){const t=Object.keys(a).filter(o=>a[o]);let e={};for(const o of t)e[o]=a[o];return u.get(route(route().current()??""),e,{replace:!0,preserveState:!0,preserveScroll:!0}),()=>u.cancel()}},[a]);function f(t){t.preventDefault(),i.length===1&&(n(i[0]),s(e=>({...e,barcode:""})))}return r.jsx("header",{className:"sticky top-0 z-10 my-0 bg-white shadow",children:r.jsxs("div",{className:"flex w-full flex-col gap-4 p-2 md:flex-row",children:[r.jsx("div",{children:r.jsx(d,{id:"search",label:"Search...",icon:r.jsx(h,{}),type:"search",name:"search",size:"md",autoComplete:"on",className:"w-full md:w-72",disabled:!1,inputMode:"search",value:a.search,onChange:t=>{s(e=>({...e,search:t.target.value}))},required:!1,errorMsg:void 0,hideError:void 0})}),r.jsx("form",{onSubmit:f,children:r.jsx(d,{id:"barcode",label:"Barcode",icon:r.jsx(b,{}),type:"number",name:"barcode",size:"md",inputMode:"numeric",autoFocus:!0,className:"remove-arrow w-full md:w-52 ",value:a.barcode,onChange:t=>{s(e=>({...e,barcode:t.target.value}))},errorMsg:"",hideError:void 0,disabled:!1,required:!1})})]})})}export{k as default};