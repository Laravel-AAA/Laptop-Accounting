import{j as t}from"./app-1ab1ca84.js";import u from"./ProductItem-da29acd2.js";import{P as f}from"./Pagination-a3b4b79b.js";import{a as x}from"./index-6389a1de.js";import{u as j}from"./useTranslation-2fada337.js";import"./ItemOptions-54266eeb.js";import"./Constant-3623d3bd.js";import"./iconBase-33f8de09.js";import"./Num-9b021e8b.js";import"./index-a39eae95.js";import"./index-ef38a0f2.js";import"./BetterLink-6288ef0b.js";function w({className:o="",paginateProducts:r,billOperations:{changeQty:m,increaseQty:d,decreaseQty:p,form:{data:i}},productItemSize:n}){const a=r.data,{t:c}=j();return t.jsxs("section",{className:o,children:[t.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start",children:[a.map((s,l)=>t.jsx(u,{bill_detail:i.bill_details.find(e=>e.product_id===s.id)??{product:s,product_id:s.id,quantity:0},changeStockNumber:!i.id,requestChanged:e=>m(s,e),requestDecrease:()=>p(s),requestIncrease:()=>d(s),size:n},l)),a.length===0&&t.jsxs("div",{className:"my-20 mx-auto flex gap-4 opacity-50",children:[t.jsx(x,{className:"mt-1"}),t.jsx("p",{children:c("No products found!")})]})]}),t.jsx(f,{style:{paddingBottom:"0"},className:"my-4",paginateItems:r})]})}export{w as default};