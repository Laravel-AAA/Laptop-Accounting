import{r as l,q as p,j as t}from"./app-1c25774f.js";import{S as x}from"./SecondaryButton-8c6ebb39.js";import{T as v}from"./TemplateModal-6d8aef30.js";import{C as b}from"./Checkbox-f6673604.js";import{I as g}from"./Input-39d53c15.js";import f from"./TotalInfo-9580d57b.js";import{N as j}from"./Num-763d349f.js";import{P as y}from"./PrimaryMaterialBtn-702e4d0a.js";import{S as R}from"./SecondaryMaterialBtn-184bd2fc.js";import"./transition-f1e823b0.js";import"./index-87120360.js";import"./index-d77bb9c5.js";import"./index-387d7a00.js";import"./ErrorMessage-4ccff6f2.js";function N({form:e}){const[a,i]=l.useState(!1),[d,n]=l.useState(0),r=p().props.auth.business.taxPercent;function h(){return e.data.transactions.reduce((c,s)=>(s.product.price??0)*s.quantity+c,0)}function o(){return h()*(1+r)}const u=S();return l.useEffect(()=>{e.data.cashReceived!==null&&typeof e.data.id=="string"?n((e.data.cashReceived??0)-o()):e.setData("cashReceived",Number(o().toFixed(2)))},[]),t.jsxs(t.Fragment,{children:[t.jsx(f,{bill:e.data}),t.jsxs("div",{className:"mt-3 w-full",children:[t.jsx(g,{ref:u,label:"Cash Received",name:"cashReceived",type:"number",value:e.data.cashReceived===null?"":Number(e.data.cashReceived.toFixed(2)),className:"mt-1 block w-full text-xl",inputMode:"numeric",autoFocus:!0,onClick:c=>c.currentTarget.select(),disabled:e.processing||a,onChange:c=>{const s=Number(c.target.value);e.setData("cashReceived",s),n(Number(Number((s??0)-o()).toFixed(2)))},required:!1,errorMsg:e.errors.cashReceived,hideError:e.isDirty("cashReceived"),hint:t.jsxs("span",{style:{visibility:a?"hidden":"visible"},className:"ml-1 text-lg text-gray-700",children:["Remaining: ",t.jsx(j,{className:"text-gray-900 font-semibold",amount:d})]})}),t.jsx("div",{className:"mt-1 flex items-center",children:t.jsx(b,{label:t.jsx("span",{className:"text-lg text-gray-600",children:"Digital payment"}),name:"isDigitalPayment",className:"h-5 w-5",checked:a,disabled:e.processing,onChange:c=>{a&&setTimeout(()=>{var s,m;(s=u.current)==null||s.focus(),(m=u.current)==null||m.select()},100),i(s=>(a?(e.data.id===void 0&&e.setData("cashReceived",o()),n(0)):(e.data.id===void 0&&e.setData("cashReceived",null),n((e.data.cashReceived??0)-o())),!s))},errorMsg:""})})]})]})}function S(){const e=l.useRef(null);return l.useEffect(()=>{var a;(a=e.current)==null||a.select()},[e.current]),e}function C({form:e,isShow:a,requestClose:i}){function d(n){n.preventDefault(),e.post(route("bill.store"),{preserveState:!1,preserveScroll:!1,onSuccess:()=>{i(),e.clearErrors(),e.reset()},onError:r=>{console.error(r),r!=null&&r.serverError&&alert(r.serverError)}})}return t.jsx(v,{title:"Checkout",open:a,closeModal:()=>i(),children:t.jsxs("form",{className:"mt-3",onSubmit:d,children:[t.jsx(N,{form:e}),t.jsxs("div",{className:"mt-4 flex flex-col gap-4 sm:flex-row-reverse",children:[t.jsx(y,{type:"submit",disabled:e.processing,children:e.data.id===void 0?"Proceed":"Update"}),t.jsx(R,{type:"button",onClick:()=>{e.cancel(),i(),e.clearErrors()},children:"Cancel"})]})]})})}function W({form:e}){const[a,i]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pointer-events-none absolute bottom-[50px] h-5 w-full bg-gradient-to-t from-white to-transparent opacity-90"}),t.jsx("div",{className:"absolute bottom-0 w-full",children:t.jsx(x,{style:{fontSize:"1.2rem",fontWeight:800},className:"bottom-0  h-[50px] w-full min-w-full rounded-none",disabled:e.processing||e.data.transactions.length==0,title:e.processing||e.data.transactions.length==0?"You can't Checkout with an empty cart!":"",onClick:()=>i(!0),children:e.data.id===void 0?"Submit":"Update"})}),t.jsx(C,{isShow:a,requestClose:()=>i(!1),form:e})]})}export{W as default};
