import{r as o,j as s,y as r}from"./app-a977b1de.js";import{S as a}from"./SupportEmailLink-c845e77a.js";import n from"./ToggleMonthlyYearly-8015d3c7.js";import c from"./BasicPlan-538ed02a.js";import p from"./EnhancedPlan-7085663a.js";import l from"./AdvancedPlan-99474d52.js";import{F as m}from"./FullLogo-0562fa35.js";import"./Plan-b8fdbcf9.js";import"./PrimaryButton-cf6d1cbc.js";import"./A-1f93d57a.js";import"./Num-23b1c9a8.js";import"./index-b35a75c7.js";import"./index-33312385.js";import"./SharedBenefits-e4aa3697.js";import"./index.esm-6439725c.js";import"./iconBase-3caa22eb.js";import"./index.esm-47bca7da.js";import"./Logo-b0478015.js";function A(){const[t,e]=o.useState("Monthly");return s.jsxs("section",{className:"bg-gray-100",children:[s.jsx("div",{className:"flex justify-center pt-5",children:s.jsx(m,{})}),s.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16",children:[s.jsxs("header",{className:"mx-auto mb-10 max-w-screen-md text-center",children:[s.jsx("p",{className:"mb-3 font-semibold uppercase text-primary-600",children:"Pricing"}),s.jsx("h2",{className:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white",children:"Designed for businesses like yours"}),s.jsxs("p",{className:"mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan."," ",s.jsx(a,{})," "]})]}),s.jsx(n,{period:t,setPeriod:i=>e(i)}),s.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[s.jsx(c,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Basic",period:t}))}}}),s.jsx(p,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Enhanced",period:t}))}}}),s.jsx(l,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Advanced",period:t}))}}})]})]})]})}export{A as default};