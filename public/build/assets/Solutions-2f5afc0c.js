import{r as a,j as e}from"./app-0e43bd6c.js";import{t as i}from"./transition-13de8c5f.js";function u(){const t=["grocery store","bookstore","clothing boutique","electronics store","gift shop","café","ice cream truck","hair salon","Restaurant","food truck","street vendor","florist","pharmacy","pet store","souvenir shop"],[o,n]=a.useState("grocery store");return a.useEffect(()=>{const s=setInterval(()=>{n(r=>t[(t.indexOf(r)+1)%t.length])},1800);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"mb-6 justify-center text-xl text-gray-600 md:-ml-20",children:[e.jsx("span",{children:"Whatever your use case, "}),e.jsx("div",{className:"block md:inline ",children:e.jsxs("div",{className:"-ml-28 inline md:ml-0",children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Laptop"})," ",e.jsx("span",{className:"font-semibold text-primary-700",children:"POS"})," is built for ",t.map((s,r)=>e.jsx(i,{appear:!0,show:s==o,enter:"transition ease-in-out duration-700 transform order-first",enterFrom:"opacity-0 translate-y-12",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-12",unmount:!1,className:"absolute inline text-left text-secondary-600 ",children:s},r))]})})]})}export{u as default};
