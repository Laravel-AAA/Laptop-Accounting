import{r as c,q as b,j as t}from"./app-1ab1ca84.js";import{S as f}from"./SecondaryButton-e934d2a5.js";import{T as g}from"./TemplateModal-c523cd55.js";import{C as v}from"./Checkbox-ffd11b6b.js";import{I as j}from"./Input-8c223dec.js";import R from"./TotalInfo-7179cf3f.js";import{N as y}from"./Num-9b021e8b.js";import{u as m}from"./useTranslation-2fada337.js";import{P as k}from"./PrimaryMaterialBtn-64232e11.js";import{S as N}from"./SecondaryMaterialBtn-41567cb8.js";import"./transition-7855a772.js";import"./index-dae4422a.js";import"./index-ef38a0f2.js";import"./ErrorMessage-e593865f.js";function S({form:e}){const[a,n]=c.useState(!1),[i,o]=c.useState(0),p=b().props.auth.business.taxPercent;function u(){return e.data.bill_details.reduce((d,r)=>(r.product.price??0)*r.quantity+d,0)}function l(){return u()*(1+p)}const s=C();c.useEffect(()=>{e.data.cashReceived!==null&&typeof e.data.id=="string"?o((e.data.cashReceived??0)-l()):e.setData("cashReceived",Number(l().toFixed(2)))},[]);const{t:h}=m();return t.jsxs(t.Fragment,{children:[t.jsx(R,{bill:e.data}),t.jsxs("div",{className:"mt-3 w-full",children:[t.jsx(j,{ref:s,label:h("Cash Received"),name:"cashReceived",type:"number",value:e.data.cashReceived===null?"":Number(e.data.cashReceived.toFixed(2)),className:"mt-1 block w-full text-xl",inputMode:"numeric",autoFocus:!0,onClick:d=>d.currentTarget.select(),disabled:e.processing||a,onChange:d=>{const r=Number(d.target.value);e.setData("cashReceived",r),o(Number(Number((r??0)-l()).toFixed(2)))},required:!1,errorMsg:e.errors.cashReceived,hideError:e.isDirty("cashReceived"),hint:t.jsxs("span",{style:{visibility:a?"hidden":"visible"},className:"ml-1 text-lg text-gray-700",children:[h("Remaining"),": ",t.jsx(y,{className:"font-semibold text-gray-900",amount:i})]})}),t.jsx("div",{className:"mt-1 flex items-center",children:t.jsx(v,{label:t.jsx("span",{className:"text-lg text-gray-600",children:h("Digital payment")}),name:"isDigitalPayment",className:"h-5 w-5",checked:a,disabled:e.processing,onChange:d=>{a&&setTimeout(()=>{var r,x;(r=s.current)==null||r.focus(),(x=s.current)==null||x.select()},100),n(r=>(a?(e.data.id===void 0&&e.setData("cashReceived",l()),o(0)):(e.data.id===void 0&&e.setData("cashReceived",null),o((e.data.cashReceived??0)-l())),!r))},errorMsg:""})})]})]})}function C(){const e=c.useRef(null);return c.useEffect(()=>{var a;(a=e.current)==null||a.select()},[e.current]),e}function w({form:e,isShow:a,requestClose:n}){const i=c.useRef(null);function o(l){if(JSON.parse(localStorage.getItem("printOnSubmit")??"true"))if(i.current)i.current.href=route("bill.show",{bill:l??"errorID",print:"true"}),i.current.click();else throw new Error("Unexpected linkRef.current value. Got="+i.current)}function p(l){l.preventDefault(),e.post(route("bill.store"),{preserveState:!1,preserveScroll:!1,onSuccess:s=>{n(),e.clearErrors(),e.reset(),new Audio("/assets/Audio/checkout-21.mp3").play(),o(s.props.createdUpdatedBillId)},onError:s=>{console.error(s),s!=null&&s.serverError&&alert(s.serverError)}})}const{t:u}=m();return t.jsxs(t.Fragment,{children:[t.jsx("a",{hidden:!0,target:"_blank",ref:i,href:""}),t.jsx(g,{title:u("Checkout"),open:a,closeModal:()=>n(),children:t.jsxs("form",{className:"mt-3",onSubmit:p,children:[t.jsx(S,{form:e}),t.jsxs("div",{className:"mt-4 flex flex-col gap-4 sm:flex-row-reverse",children:[t.jsx(k,{type:"submit",disabled:e.processing,children:u(e.data.id===void 0?"Proceed":"Update")}),t.jsx(N,{type:"button",onClick:()=>{e.cancel(),n(),e.clearErrors()},children:u("Cancel")})]})]})},"checkoutTemplateModal")]})}function G({form:e}){const[a,n]=c.useState(!1),{t:i}=m();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pointer-events-none absolute bottom-[50px] h-5 w-full bg-gradient-to-t from-white to-transparent opacity-90"}),t.jsx("div",{className:"absolute bottom-0 w-full",children:t.jsx(f,{style:{fontSize:"1.2rem",fontWeight:800},className:"bottom-0  h-[50px] w-full min-w-full rounded-none",disabled:e.processing||e.data.bill_details.length==0,title:e.processing||e.data.bill_details.length==0?i("You can't Checkout with an empty cart!"):"",onClick:()=>n(!0),children:i(e.data.id===void 0?"Submit":"Update")})}),t.jsx(w,{isShow:a,requestClose:()=>n(!1),form:e},"CheckoutRightSideCheckoutBtnCheckout")]})}export{G as default};