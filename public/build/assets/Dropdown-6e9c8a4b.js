import{r as a,j as e,d as u}from"./app-2b91eeaa.js";import{t as x}from"./transition-f9faa2d8.js";const c=a.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),i=({children:t})=>{const[n,o]=a.useState(!1),r=()=>{o(s=>!s)};return e.jsx(c.Provider,{value:{open:n,setOpen:o,toggleOpen:r},children:e.jsx("div",{className:"relative",children:t})})},m=({children:t})=>{const{open:n,setOpen:o,toggleOpen:r}=a.useContext(c);return e.jsxs(e.Fragment,{children:[e.jsx("button",{role:"button",className:"div-style",onClick:s=>{s.stopPropagation(),r()},children:t}),n&&e.jsx("div",{role:"button",className:"div-style fixed inset-0 z-40 h-[100vh] w-full cursor-default",onClick:s=>{s.stopPropagation(),o(!1)}})]})},f=({align:t="right",width:n="48",contentClasses:o="py-1 bg-white",children:r})=>{const{open:s,setOpen:g}=a.useContext(c);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let p="";return n==="48"&&(p="w-48"),e.jsx(e.Fragment,{children:e.jsx(x,{as:a.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{role:"button",className:`div-style absolute z-50 mt-2 cursor-default rounded-md shadow-lg ${l} ${p}`,onClick:d=>{d.stopPropagation(),g(!1)},children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:r})})})})},h=({className:t="",children:n,...o})=>e.jsx(u,{...o,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+t,children:n});i.Trigger=m;i.Content=f;i.Link=h;const j=i;export{j as D};
