import{j as s}from"./app-02238819.js";import{I as l}from"./Input-48e0e8c0.js";import{N as i}from"./Num-4afba5b7.js";import"./index-8301804e.js";import"./index-9b1e206d.js";import"./ErrorMessage-c2c4745b.js";function f({value:a,onChange:e,disabled:m,errorMsg:n,hideError:o,currency:t}){return s.jsx(l,{id:"taxPercent",label:"Tax Rate",className:"mt-1 block w-full",max:100,min:0,type:"number",icon:s.jsx("span",{children:"%"}),value:a.toString(),onChange:r=>e==null?void 0:e(r),disabled:m,required:!0,errorMsg:n,hideError:o,hint:s.jsxs("span",{children:[s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[s.jsx(i,{amount:a}),"%"]})," ","tax on"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:100,showCurrency:!t})]})," ","is"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(i,{amount:a/100*100,showCurrency:!t})]})]})})}export{f as default};