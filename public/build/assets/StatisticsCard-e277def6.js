import{j as e}from"./app-1ab1ca84.js";import{N as t}from"./Num-9b021e8b.js";import{r}from"./index-dae4422a.js";import{u as p}from"./useTranslation-2fada337.js";import"./index-ef38a0f2.js";function C({icon:i,showCurrency:d,title:s,value:l,footer:a,tooltip:o,suffix:c}){const{t:n}=p();return e.jsxs(r.Card,{className:"rounded-none shadow sm:rounded-lg",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsx(r.CardHeader,{variant:"gradient",color:"teal",floated:!1,shadow:!1,className:"absolute grid h-12 w-12 place-items-center",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:i}),e.jsx(r.Tooltip,{content:o&&n(o),className:o?"":"hidden",children:e.jsxs(r.CardBody,{className:"p-4 pb-2 text-right",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsx(r.Typography,{variant:"small",className:"font-normal text-blue-gray-600",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:n(s)}),e.jsx(r.Typography,{variant:"h4",color:"blue-gray",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:e.jsx(t,{amount:l,showCurrency:d,suffix:c})})]})}),a&&a.increase!==null&&e.jsx(r.CardFooter,{className:"border-t border-blue-gray-50 px-4 py-2",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:e.jsxs(r.Typography,{className:"font-normal text-blue-gray-600",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsxs("strong",{className:a.increase>0?"text-green-500":a.increase<0?"text-danger-500":"",children:[a.increase>0&&"+",e.jsx(t,{amount:a.increase,suffix:"%"})]})," ",n(a.label)]})})]})}export{C as StatisticsCard};