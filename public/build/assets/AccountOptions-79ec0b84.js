import{q as l,j as e}from"./app-343c4aa9.js";import{D as t}from"./Dropdown-e28379dd.js";import{a as n}from"./index.esm-aea19c13.js";import{b as a,c as o}from"./index.esm-6e0d9836.js";import{a as x,b as m}from"./index.esm-3f8a9686.js";import"./transition-11d8b5d4.js";import"./iconBase-1a220b0c.js";function u({account:s,requestEdit:i,requestOpenDeleteModal:d}){const r=l().props.auth.user.id;return e.jsx("div",{className:"text-center ",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx("div",{className:"inline-block rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(n,{className:"text-lg"})})}),e.jsxs(t.Content,{children:[s.id!==r&&!s.deleted_at&&e.jsx(t.Button,{onClick:()=>i(),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{className:"text-base text-gray-900"})," Edit"]})}),s.id===r&&e.jsx(t.Link,{href:route("profile.edit"),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{className:"text-base text-gray-900"})," Edit"]})}),!s.deleted_at&&e.jsx(t.Link,{disabled:s.id===r,href:route("account.destroy",s.id),method:"delete",as:"button",preserveScroll:!0,preserveState:!1,children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(x,{className:"text-base"})," Delete"]})}),s.deleted_at&&e.jsx(t.Link,{disabled:s.id===r,href:route("account.restore",s.id),method:"post",as:"button",preserveScroll:!0,preserveState:!1,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{className:"text-base text-gray-900"})," Restore"]})}),s.deleted_at&&e.jsx(t.Button,{disabled:s.id===r,onClick:()=>d(),children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(o,{className:"text-base"})," Delete Permanently"]})})]})]})})}export{u as default};
