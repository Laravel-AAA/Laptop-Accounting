import{j as t,a}from"./app-bd4b3f0c.js";import{A as p}from"./index-fefdca5b.js";import{StatisticsCard as c}from"./StatisticsCard-e7dac9e8.js";import{useStatisticsCardsData as e}from"./useStatisticsCardsData-326f46d4.js";import d from"./useStatisticsChartsData-00e79086.js";import{StatisticsChart as l}from"./StatisticsChart-127c3538.js";import{F as x}from"./Footer-e6c55bd2.js";import n from"./OutOfStock-1220f74b.js";import"./index-96c65ca1.js";import"./index-8a1cef50.js";import"./index-e2e55a02.js";import"./index-387d7a00.js";import"./index.esm-dacceae4.js";import"./iconBase-05a0b489.js";import"./index.esm-ba4fcd42.js";import"./transition-2d045a48.js";import"./Logo-0814a9d6.js";import"./Dropdown-23ea2fd1.js";import"./BetterLink-a9fac080.js";import"./Num-747cbf88.js";import"./SupportEmailLink-988eaefa.js";import"./A-6a3b73bd.js";import"./UpdateProductStockModal-1fcd6a76.js";import"./Input-e9465e7f.js";import"./ErrorMessage-ea4c0743.js";import"./SecondaryMaterialBtn-b4b7bcf1.js";import"./SecondaryButton-14cd1ff2.js";import"./DefaultProductImg-841abc67.js";import"./Checkbox-c61a0cd1.js";import"./ProductOptions-a279c95e.js";import"./index.esm-923d53a9.js";import"./AlertModal-6e1182c3.js";import"./TemplateModal-c847b606.js";import"./PrimaryMaterialBtn-0d5dbd83.js";import"./useBetterForm-86d418b6.js";import"./FromDate-b7b60f67.js";import"./KeyValue-9e84cfea.js";import"./Product-fb6be329.js";function _({auth:o,dashboard:i}){const m=e(i.cards),s=d(i.charts);return t.jsxs(p,{user:o.user,header:"Dashboard",children:[t.jsx(a,{title:"Dashboard"}),t.jsx("div",{className:"pt-12",children:t.jsxs("div",{className:"mx-auto max-w-7xl space-y-11 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-4",children:m.map(r=>t.jsx(c,{...r},r.title))}),t.jsx("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",children:s.map(r=>t.jsx(l,{...r},r.title))}),t.jsx(n,{paginate:i.productsOutOfStock})]})}),t.jsx(x,{})]})}export{_ as default};
