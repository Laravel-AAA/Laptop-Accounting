import{j as t,a}from"./app-a977b1de.js";import{A as p}from"./index-8923bff8.js";import{StatisticsCard as c}from"./StatisticsCard-ba9fad3a.js";import{useStatisticsCardsData as e}from"./useStatisticsCardsData-4045fccc.js";import d from"./useStatisticsChartsData-ec1b824f.js";import{StatisticsChart as l}from"./StatisticsChart-b96eb540.js";import{F as x}from"./Footer-25cd3601.js";import n from"./OutOfStock-e6bc1bbb.js";import"./index-20f5c2b6.js";import"./index-b35a75c7.js";import"./index-33312385.js";import"./index.esm-6439725c.js";import"./iconBase-3caa22eb.js";import"./index.esm-47bca7da.js";import"./transition-5136cd51.js";import"./Logo-b0478015.js";import"./Dropdown-6fcbadaf.js";import"./BetterLink-35810839.js";import"./Num-23b1c9a8.js";import"./SupportEmailLink-c845e77a.js";import"./A-1f93d57a.js";import"./UpdateProductStockModal-da2bd516.js";import"./Input-564f4ac9.js";import"./ErrorMessage-bdf203da.js";import"./SecondaryMaterialBtn-46e06de1.js";import"./SecondaryButton-d702c0e6.js";import"./DefaultProductImg-6bcf3f41.js";import"./Checkbox-ef0302ab.js";import"./ProductOptions-546dc79c.js";import"./index.esm-4b475075.js";import"./AlertModal-cfb2cb12.js";import"./TemplateModal-af0745fe.js";import"./PrimaryMaterialBtn-8d4f4903.js";import"./useBetterForm-04e2e335.js";import"./FromDate-5c4c5d23.js";import"./KeyValue-bead633f.js";import"./Product-6514bf79.js";function Z({auth:o,dashboard:i}){const m=e(i.cards),s=d(i.charts);return t.jsxs(p,{user:o.user,header:"Dashboard",children:[t.jsx(a,{title:"Dashboard"}),t.jsx("div",{className:"pt-12",children:t.jsxs("div",{className:"mx-auto max-w-7xl space-y-11 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-4",children:m.map(r=>t.jsx(c,{...r},r.title))}),t.jsx("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",children:s.map(r=>t.jsx(l,{...r},r.title))}),t.jsx(n,{paginate:i.productsOutOfStock})]})}),t.jsx(x,{})]})}export{Z as default};