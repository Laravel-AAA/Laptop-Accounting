import{j as t,a}from"./app-27478fcf.js";import{A as p}from"./index-af0ef560.js";import{StatisticsCard as c}from"./StatisticsCard-f141a47b.js";import{useStatisticsCardsData as e}from"./useStatisticsCardsData-d7d3f215.js";import d from"./useStatisticsChartsData-3841ca8d.js";import{StatisticsChart as l}from"./StatisticsChart-af6f0e0c.js";import{F as x}from"./Footer-c75ce65d.js";import n from"./OutOfStock-8002af73.js";import"./index-9f2c756d.js";import"./index-9c022c0b.js";import"./index-ac6f46fc.js";import"./index.esm-8fe0909b.js";import"./iconBase-9e5297fc.js";import"./index.esm-861aebed.js";import"./transition-de26412b.js";import"./Logo-59a419e1.js";import"./Dropdown-8f6b29a9.js";import"./BetterLink-289e567d.js";import"./Num-2f6d70b9.js";import"./SupportEmailLink-056a3cac.js";import"./A-4f2dcc40.js";import"./UpdateProductStockModal-8a0a52ec.js";import"./Input-3904af4d.js";import"./ErrorMessage-402bbdcd.js";import"./SecondaryMaterialBtn-972020e5.js";import"./SecondaryButton-d3f26aff.js";import"./DefaultProductImg-65492e28.js";import"./Checkbox-e9a7a6eb.js";import"./ProductOptions-cd90e868.js";import"./index.esm-55c97ac7.js";import"./AlertModal-da23e9e0.js";import"./TemplateModal-c238608b.js";import"./PrimaryMaterialBtn-da7b59c9.js";import"./useBetterForm-10eb9205.js";import"./FromDate-cb57307a.js";import"./KeyValue-ea33ead8.js";import"./Product-2f226dab.js";function Z({auth:o,dashboard:i}){const m=e(i.cards),s=d(i.charts);return t.jsxs(p,{user:o.user,header:"Dashboard",children:[t.jsx(a,{title:"Dashboard"}),t.jsx("div",{className:"pt-12",children:t.jsxs("div",{className:"mx-auto max-w-7xl space-y-11 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-4",children:m.map(r=>t.jsx(c,{...r},r.title))}),t.jsx("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",children:s.map(r=>t.jsx(l,{...r},r.title))}),t.jsx(n,{paginate:i.productsOutOfStock})]})}),t.jsx(x,{})]})}export{Z as default};
