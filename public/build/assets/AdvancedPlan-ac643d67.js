import{j as e,q as i}from"./app-c4f99fcf.js";import o from"./Plan-a5fa2f3f.js";import{NumberOfAccountsBenefit as c,NumberOfProductsBenefit as m,NumberOfInvoicesBenefit as a,AccessPeriodBenefit as f,NoSetupFeesBenefit as p,ResponsiveBenefit as u,SupportTeamBenefit as d}from"./SharedBenefits-da432b74.js";import"./PrimaryButton-1d722ee2.js";import"./A-fe68ec6d.js";import"./Num-4e0152fd.js";import"./index-f2ce906e.js";import"./index-ab3f0488.js";import"./index.esm-ca4caddf.js";import"./iconBase-adc01455.js";import"./index.esm-08f6393a.js";const x=19,l=179;function I({period:s,planProps:t}){return e.jsx(o,{title:"Advanced",desc:"Designed for large businesses or enterprises who require a robust and advanced POS system",monthlyPrice:x,annualPrice:l,period:s,benefits:e.jsx(b,{}),...t})}function b(){const{advanced:s}=i().props.plansMaxRes;return[e.jsx(c,{numberOfAccounts:s.accounts}),e.jsx(m,{numberOfProducts:s.products}),e.jsx(a,{numberOfInvoices:s.bills}),e.jsx(f,{}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(d,{})].map((n,r)=>e.jsx("li",{className:"flex items-center space-x-3",children:n},r))}export{l as ADVANCED_ANNUAL_PRICE,x as ADVANCED_MONTHLY_PRICE,b as AdvancedPlanBenefits,I as default};