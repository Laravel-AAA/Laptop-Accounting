import{W as f,r as e}from"./app-343c4aa9.js";function E(r,o){const t=f(o===void 0?"":o,r),[n,a]=e.useState(t.processing),[c,i]=e.useState(JSON.parse(JSON.stringify(r)));return e.useEffect(()=>{i(t.data)},[t.hasErrors]),e.useEffect(()=>{a(t.processing)},[t.processing]),{...t,setData:(s,u)=>{t.setData(s,u)},setAllData:s=>{t.setData(s)},isDirty:s=>s?t.data[s]!==c[s]:t.isDirty,get processing(){return n},setProcessing:s=>a(s)}}export{E as u};