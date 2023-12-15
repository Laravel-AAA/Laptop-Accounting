import{j as e}from"./app-6d40baad.js";import{F as a}from"./FromDate-09e012df.js";import{K as i}from"./KeyValue-965dd922.js";import{r as s}from"./index-cf2469dc.js";import"./index-9cbe0c66.js";function u({subscriptionData:{state:r,onTrial:n,lastPayment:t,gracePeriodExpiresAt:c}}){return e.jsxs(e.Fragment,{children:[e.jsx(i,{k:"State",v:r==="Canceled"?e.jsx("span",{className:"text-danger-500",children:e.jsx(s.Tooltip,{content:"Unsubscribed",children:"Canceled"})}):r==="Grace Period"?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Subscription is canceled, but still active until the subscription fully expires",children:"Grace Period"})}):r==="Past Due"?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Payment failed, you should update your payment method",children:"Past Due"})}):r==="Recurring"?e.jsx("span",{className:"text-green-700",children:e.jsx(s.Tooltip,{content:"Subscribed",children:"Active"})}):n?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Unsubscribed",children:"On trial"})}):e.jsx("span",{className:"text-danger-500",children:e.jsx(s.Tooltip,{content:"Trial ended, you have to subscribe",children:"Inactive"})})}),n&&e.jsxs("p",{className:"text-normal text-gray-600",children:["Trial ends: ",e.jsx(a,{className:"text-orange-700",date:n})]}),(t==null?void 0:t.date)&&e.jsx(i,{k:"Last Payment",v:e.jsxs("span",{className:"text-primary-600",children:[t.amount,","," ",e.jsx(a,{className:"text-gray-900",date:t.date})]})}),c&&e.jsx(i,{k:"Subscription Expire",v:e.jsx(a,{date:c})})]})}export{u as default};