import{j as t}from"./app-838cb2bb.js";import{r as o}from"./index-82366f85.js";import{E as p}from"./ErrorMessage-0b2ad8a4.js";function v({children:f,ref:x,color:l="teal",size:n="lg",variant:r="outlined",errorMsg:i,errorMsgProps:m,error:e,hideError:u,required:d,onFocus:a,...c}){return e===void 0&&(u==!0?e=!1:i?e=!0:e=!1),t.jsxs(t.Fragment,{children:[t.jsx(o.Select,{...c,onFocus:s=>{s.nativeEvent.relatedTarget&&s.target.click(),a&&a(s)},variant:r,color:l,size:n,error:e,children:f}),t.jsx(p,{message:i,...m})]})}export{v as S};