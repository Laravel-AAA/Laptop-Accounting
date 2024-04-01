import{j as e}from"./app-1ab1ca84.js";import{N as i}from"./Num-9b021e8b.js";import{u as d}from"./useTranslation-2fada337.js";function u({transaction:l,taxPercent:s}){const{t}=d();return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"h-10 max-h-10 border-x border-t",children:[e.jsx("td",{className:"flex h-10 w-14 items-center justify-center",children:l.product.img&&e.jsx("img",{className:"max-w-14 max-h-10 print:hidden",src:l.product.img.startsWith("http")?l.product.img:"/products-images/"+l.product.img,alt:"Image of Product "+l.product.name})}),e.jsx("td",{title:t("Quantity"),className:"h-10",children:e.jsx("div",{className:"mx-1 flex h-10 w-10 justify-between",children:e.jsx(i,{className:"grow self-center text-center",amount:l.quantity})})}),e.jsx("td",{title:t("Single item price (Tax included)"),children:e.jsx("span",{className:"mx-1 inline-block w-[5ch]",children:e.jsx(i,{className:"font-semibold text-indigo-700",defaultNoAmount:!0,amount:l.product.price})})}),e.jsx("td",{title:t("Total items price (Tax not included)"),children:e.jsx("span",{className:"mx-1 inline-block w-[6ch]",children:e.jsx(i,{className:"font-semibold text-secondary-700",defaultNoAmount:!0,amount:l.product.price===null?null:l.product.price*l.quantity})})}),e.jsx("td",{title:t("Total items tax price"),children:e.jsx("span",{className:"mx-1 inline-block w-[5ch]",children:e.jsx(i,{className:"font-semibold text-danger-700",defaultNoAmount:!0,amount:l.product.price==null?null:l.product.price*l.quantity*s})})}),e.jsx("td",{title:t("Total items price (Tax included)"),children:e.jsx("span",{className:"mx-1 inline-block w-[6ch]",children:e.jsx(i,{className:"font-semibold text-primary-700",defaultNoAmount:!0,amount:l.product.price==null?null:l.product.price*l.quantity*(1+s)})})})]}),e.jsx("tr",{className:"border-x border-b",children:e.jsx("td",{colSpan:4,title:l.product.name,children:e.jsx("span",{style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1},className:"mx-1 inline-block overflow-hidden text-blue-gray-800",children:l.product.name})})})]})}export{u as default};