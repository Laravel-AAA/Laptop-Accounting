import{q as m,j as e}from"./app-dc6d883c.js";import{P as n}from"./ProductOptions-4a50f825.js";import{N as s}from"./Num-7fe4ca16.js";import x from"./DefaultProductImg-fdb1b368.js";import"./Dropdown-716f79b2.js";import"./BetterLink-b76a6648.js";import"./transition-ea3c1e5a.js";import"./index.esm-f40d2b99.js";import"./iconBase-75f80f3d.js";import"./index.esm-145945cb.js";import"./AlertModal-423e40ad.js";import"./TemplateModal-854b39c3.js";import"./SecondaryMaterialBtn-91b9e7af.js";import"./PrimaryMaterialBtn-1d0eae5e.js";import"./index.esm-242d517d.js";function O({product:t,requestEdit:o,requestShow:i,requestChangeStock:r}){const l=m().props.auth.business.taxPercent;return e.jsxs("div",{role:"button",onClick:a=>{a.stopPropagation(),i()},className:"div-style group relative m-4 flex min-w-[200px] min-h-[212px] cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52",children:[e.jsx(n,{product:t,requestEdit:o,requestShow:i,requestChangeStock:r}),e.jsx("div",{className:"w-full",children:t.img?e.jsx("img",{src:t.img.startsWith("http")?t.img:"/products-images/"+t.img,alt:t.name+" image."}):e.jsx(x,{})}),e.jsxs("div",{className:"flex w-full flex-grow flex-col px-4  py-4 ",children:[e.jsx("h3",{className:"flex-grow text-lg font-semibold text-gray-600",children:t.name}),e.jsxs("div",{className:"mt-2 flex justify-between gap-2",children:[e.jsx("p",{title:t.price===null?"":"$"+t.price+" without tax",className:"text-lg font-thin text-primary-700",children:e.jsx(s,{showCurrency:!0,className:"font-semibold",amount:t.price===null?null:t.price*(1+l),defaultNoAmount:!0})}),e.jsx("div",{className:"flex flex-col justify-center",children:t.stock===0?e.jsx("span",{title:"Out of Stock",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1},className:"overflow-hidden text- font-thin text-red-500  ",children:"Out of Stock"}):e.jsx(s,{className:"font-normal  text-secondary-600",amount:t.stock,defaultNoAmount:!0,prefix:"Stock",prefixProps:{className:"text-gray-500 font-thin"}})})]})]})]})}export{O as default};