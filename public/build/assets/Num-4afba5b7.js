import{j as r,q as h}from"./app-02238819.js";function a({className:i="",amount:s,noAmount:p,showCurrency:t=!1,currency:n,prefix:c="",suffix:l="",prefixProps:j={},suffixProps:u={},fixed:x=2}){let e;const d=t&&s!==null?r.jsxs("span",{children:[n||h().props.auth.business.currency," "]}):"";return s===null?e=p??"N/A":(s=Number(Number(s).toFixed(x)),Object.is(s,-0)?e="0":e=s.toLocaleString()),r.jsxs("span",{className:i,children:[c&&r.jsxs("span",{...j,children:[c," "]}),d,e,l&&r.jsxs("span",{...u,children:[" ",l]})]})}export{a as N};