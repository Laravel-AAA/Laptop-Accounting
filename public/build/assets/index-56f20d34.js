import{j as t}from"./app-343c4aa9.js";import p from"./ProductItem-fc589229.js";import{P as u}from"./Pagination-184ea0c7.js";import{B as f}from"./index.esm-aea19c13.js";import"./ItemOptions-56be4d16.js";import"./Num-96abf7a7.js";import"./index.esm-6e0d9836.js";import"./iconBase-1a220b0c.js";import"./index-493a9c48.js";function B({className:i="",paginateProducts:e,billOperations:{changeQty:m,increaseQty:n,decreaseQty:c,form:{data:a}}}){const o=e.data;return t.jsxs("section",{className:i,children:[t.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start",children:[o.map((s,d)=>t.jsx(p,{transaction:a.transactions.find(r=>r.product_id===s.id)??{product:s,product_id:s.id,quantity:0},changeStockNumber:!a.id,requestChanged:r=>m(s,r),requestDecrease:()=>c(s),requestIncrease:()=>n(s)},d)),o.length===0&&t.jsxs("div",{className:"my-20 mx-auto flex gap-4 opacity-50",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]})]}),t.jsx(u,{style:{paddingBottom:"0"},className:"my-4",paginateItems:e})]})}export{B as default};