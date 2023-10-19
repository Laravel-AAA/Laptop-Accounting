import{j as s}from"./app-e42115ca.js";import{e as m}from"./index.esm-c447881f.js";import{P as r}from"./ProductOptions-302bcc83.js";import{N as l}from"./Num-4164abfe.js";import"./iconBase-d30e4aba.js";import"./Dropdown-85b12c8f.js";import"./transition-654a5f2e.js";import"./index.esm-ddc3f1aa.js";import"./index-926caa01.js";import"./DangerButton-e1d32154.js";import"./PrimaryButton-3f49508d.js";import"./SecondaryButton-09e97ef0.js";function v({product:e,requestEdit:i,requestShow:t,taxPercent:a}){return s.jsxs("div",{onClick:()=>t(),className:"group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52",children:[s.jsx(r,{product:e,requestEdit:i,requestShow:t}),s.jsx("div",{children:e.img?s.jsx("img",{src:e.img.startsWith("http")?e.img:"products-images/"+e.img,alt:"Image "+(e.img??"")+" of product "+e.name}):s.jsx(m,{className:"mx-auto mt-4 h-24 w-24 text-primary-700"})}),s.jsxs("div",{className:"flex flex-grow flex-col px-4  py-4 ",children:[s.jsx("h3",{className:"flex-grow text-lg font-semibold text-gray-600",children:e.name}),s.jsxs("div",{className:"mt-2 flex justify-between",children:[s.jsx("p",{title:e.price===null?"":"$"+e.price+" without tax",className:"text-lg font-thin text-primary-700",children:e.price===null?"N/A":s.jsx(l,{currency:"$",className:"font-semibold",amount:e.price*(1+a)})}),s.jsx("div",{className:"flex flex-col justify-center",children:e.stock===0?s.jsx("p",{className:"font-thin text-red-500",children:"Out of Stock"}):s.jsxs("p",{className:"font-thin text-gray-500",children:["Stock"," ",s.jsx("span",{className:"font-normal text-secondary-600",children:e.stock??"N/A"})]})})]})]})]})}export{v as default};