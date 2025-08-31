var x=Object.defineProperty;var s=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var p=(o,t,e)=>t in o?x(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,i=(o,t)=>{for(var e in t||(t={}))a.call(t,e)&&p(o,e,t[e]);if(s)for(var e of s(t))n.call(t,e)&&p(o,e,t[e]);return o};var l=(o,t)=>{var e={};for(var d in o)a.call(o,d)&&t.indexOf(d)<0&&(e[d]=o[d]);if(o!=null&&s)for(var d of s(o))t.indexOf(d)<0&&n.call(o,d)&&(e[d]=o[d]);return e};import{j as m,d as f}from"./iframe-9L0_nkuo.js";const b=f.input`
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  box-shadow: -1px 1px 0 ${({theme:o})=>o.colors.shadow};
  background: ${({theme:o})=>o.colors.bg.card};
  border: 1px solid ${({theme:o})=>o.colors.shadow};
`;function g(I){var r=I,{type:o="text",id:t,name:e,value:d,placeholder:u}=r,c=l(r,["type","id","name","value","placeholder"]);return m.jsx(b,i({type:o,id:t,name:e,value:d,placeholder:u},c))}g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};export{g as I};
