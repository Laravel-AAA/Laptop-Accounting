import{j as e}from"./app-1ab1ca84.js";import i from"./BillDetailRow-2ddff21d.js";import{u as c}from"./useTranslation-2fada337.js";import"./Num-9b021e8b.js";function d({bill:a}){const{t:s}=c();return e.jsx("div",{className:"relative h-full overflow-y-auto rounded-md shadow-sm",children:e.jsxs("table",{className:"w-full table-auto text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-blue-gray-50 text-gray-800",children:[e.jsx("th",{children:e.jsx("span",{className:"mx-4",children:s("Item")})}),e.jsx("th",{className:"text-center",title:s("Quantity"),children:e.jsx("span",{className:"mx-1",children:s("Qty")})}),e.jsx("th",{title:s("Single item price (Tax included)"),className:"w-[6ch]",children:e.jsx("span",{className:"mx-1",children:s("Price")})}),e.jsx("th",{title:s("Total items price (Tax not included)"),className:"w-[6ch]",children:e.jsx("span",{className:"mx-1",children:s("Sub-total")})}),e.jsx("th",{title:s("Total items tax price"),className:"w-[6ch]",children:e.jsx("span",{className:"mx-1",children:s("Tax")})}),e.jsx("th",{title:s("Total items price (Tax included)"),className:"w-[6ch]",children:e.jsx("span",{className:"mx-1",children:s("Total")})})]})}),e.jsx("tbody",{children:a.bill_details.map(t=>{var l;return e.jsx(i,{transaction:t,taxPercent:((l=a.business)==null?void 0:l.taxPercent)??0},t.id)})})]})})}export{d as default};