import{r as s,j as e}from"./app-27478fcf.js";import o from"./EnhancedPlan-28e7061f.js";import i from"./BasicPlan-8cf5310c.js";import n from"./AdvancedPlan-cfa2bf61.js";import l from"./ToggleMonthlyYearly-a445b6a1.js";import"./Plan-46748477.js";import"./PrimaryButton-9f6b7bb8.js";import"./PrimaryLink-2a3319a9.js";import"./BetterLink-289e567d.js";import"./A-4f2dcc40.js";function P(){const[t,r]=s.useState("Monthly");return e.jsx("section",{className:"bg-white bg-opacity-50 dark:bg-gray-900",children:e.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16",children:[e.jsxs("div",{className:"mx-auto mb-10 max-w-screen-md text-center",children:[e.jsx("h2",{className:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white",children:"Designed for businesses like yours"}),e.jsx("p",{className:"mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."})]}),e.jsx(l,{period:t,setPeriod:a=>r(a)}),e.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[e.jsx(i,{period:t,planProps:{actionProps:{}}}),e.jsx(o,{period:t,planProps:{actionProps:{}}}),e.jsx(n,{period:t,planProps:{actionProps:{}}})]})]})})}export{P as default};