import{j as t}from"./app-95eecb40.js";import n from"./ProductItem-f0de4d3e.js";import{P as l}from"./Pagination-0bd9fdc5.js";import{B as u}from"./index.esm-2f3954ba.js";import"./ItemOptions-b42a94ee.js";import"./iconBase-5a387e2d.js";import"./Num-107dd470.js";import"./index.esm-4cdec08f.js";import"./index-008cf8d3.js";import"./BetterLink-17b6e41c.js";function b({className:o="",paginateProducts:r,billOperations:{changeQty:m,increaseQty:d,decreaseQty:p,form:{data:i}}}){const a=r.data;return t.jsxs("section",{className:o,children:[t.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start",children:[a.map((e,c)=>t.jsx(n,{bill_detail:i.bill_details.find(s=>s.product_id===e.id)??{product:e,product_id:e.id,quantity:0},changeStockNumber:!i.id,requestChanged:s=>m(e,s),requestDecrease:()=>p(e),requestIncrease:()=>d(e)},c)),a.length===0&&t.jsxs("div",{className:"my-20 mx-auto flex gap-4 opacity-50",children:[t.jsx(u,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]})]}),t.jsx(l,{style:{paddingBottom:"0"},className:"my-4",paginateItems:r})]})}export{b as default};