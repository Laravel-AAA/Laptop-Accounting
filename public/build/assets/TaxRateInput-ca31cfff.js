import{j as s}from"./app-1ab1ca84.js";import{I as l}from"./Input-8c223dec.js";import{N as i}from"./Num-9b021e8b.js";import"./index-dae4422a.js";import"./index-ef38a0f2.js";import"./ErrorMessage-e593865f.js";import"./useTranslation-2fada337.js";function c({value:a,onChange:e,disabled:m,errorMsg:o,hideError:n,currency:t}){return s.jsx(l,{id:"taxPercent",label:"Tax Rate",className:"mt-1 block w-full",max:100,min:0,type:"number",icon:s.jsx("span",{children:"%"}),value:a.toString(),onChange:r=>e==null?void 0:e(r),disabled:m,required:!0,errorMsg:o,hideError:n,hint:s.jsxs("span",{children:[s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[s.jsx(i,{amount:a}),"%"]})," ","tax on"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:100,showCurrency:!t})]})," ","is"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:a/100*100,showCurrency:!t})]})]})})}export{c as default};