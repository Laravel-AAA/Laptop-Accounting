import{j as s}from"./app-0e43bd6c.js";import m from"./ItemOptions-532e4d5a.js";import"./index.esm-920b1718.js";import"./iconBase-0c03ea60.js";function c({product:e,requestChanged:i,requestIncrease:l,requestDecrease:a,transaction:t}){return s.jsxs("div",{className:"group relative m-1 my-4 flex w-3/4 cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 ease-in-out hover:shadow-lg sm:my-1 sm:w-52",children:[s.jsx(m,{product:e,requestChanged:i,requestDecrease:a,requestIncrease:l,transaction:t}),s.jsx("div",{children:e.img&&s.jsx("img",{src:e.img.startsWith("http")?e.img:"products-images/"+e.img,alt:"Image of product: "+e.name})}),s.jsxs("div",{className:` bottom-0 flex w-full  flex-grow flex-col bg-black px-2 pb-1 ${e.img?"absolute bg-opacity-50":"h-full bg-opacity-80"}`,children:[s.jsx("h3",{className:`flex-grow text-center text-lg font-semibold text-white ${e.img?"":"mt-10"}`,children:e.name}),s.jsxs("div",{className:"flex justify-between font-thin",children:[s.jsxs("p",{className:"text-lg text-gray-100",children:["$"," ",e.price??"N/A"]}),s.jsx("div",{className:"flex flex-col justify-center",children:e.stock==0?s.jsx("p",{className:"text-danger-400",children:"Out of Stock"}):t.quantity>(e.stock||1/0)?s.jsxs("p",{className:"text-danger-400",children:["Qty ",e.stock??"N/A"]}):s.jsxs("p",{className:"text-gray-200",children:["Qty ",e.stock??"N/A"]})})]})]})]})}export{c as default};
