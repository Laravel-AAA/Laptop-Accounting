import{j as e,q as i}from"./app-1ab1ca84.js";import o from"./Plan-9df70c6e.js";import{NumberOfAccountsBenefit as c,NumberOfProductsBenefit as m,NumberOfInvoicesBenefit as a,AccessPeriodBenefit as f,NoSetupFeesBenefit as p,ResponsiveBenefit as u,SupportTeamBenefit as d}from"./SharedBenefits-cfa91c5f.js";import"./PrimaryButton-92de8085.js";import"./useTranslation-2fada337.js";import"./A-1dd72ed4.js";import"./Num-9b021e8b.js";import"./index-dae4422a.js";import"./index-ef38a0f2.js";import"./index-a39eae95.js";import"./iconBase-33f8de09.js";import"./index-e821efab.js";const x=19,l=179;function _({period:s,planProps:t}){return e.jsx(o,{title:"Advanced",desc:"Designed for large businesses or enterprises who require a robust and advanced POS system",monthlyPrice:x,annualPrice:l,period:s,benefits:e.jsx(b,{}),...t})}function b(){const{advanced:s}=i().props.plansMaxRes;return[e.jsx(c,{numberOfAccounts:s.accounts}),e.jsx(m,{numberOfProducts:s.products}),e.jsx(a,{numberOfInvoices:s.bills}),e.jsx(f,{}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(d,{})].map((n,r)=>e.jsx("li",{className:"flex items-center space-x-3",children:n},r))}export{l as ADVANCED_ANNUAL_PRICE,x as ADVANCED_MONTHLY_PRICE,b as AdvancedPlanBenefits,_ as default};