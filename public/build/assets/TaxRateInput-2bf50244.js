import{j as s}from"./app-27478fcf.js";import{I as l}from"./Input-3904af4d.js";import{N as i}from"./Num-2f6d70b9.js";import"./index-9c022c0b.js";import"./index-ac6f46fc.js";import"./ErrorMessage-402bbdcd.js";function f({value:a,onChange:e,disabled:m,errorMsg:n,hideError:o,currency:t}){return s.jsx(l,{id:"taxPercent",label:"Tax Rate",className:"mt-1 block w-full",max:100,min:0,type:"number",icon:s.jsx("span",{children:"%"}),value:a.toString(),onChange:r=>e==null?void 0:e(r),disabled:m,required:!0,errorMsg:n,hideError:o,hint:s.jsxs("span",{children:[s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[s.jsx(i,{amount:a}),"%"]})," ","tax on"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:100,showCurrency:!t})]})," ","is"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:a/100*100,showCurrency:!t})]})]})})}export{f as default};