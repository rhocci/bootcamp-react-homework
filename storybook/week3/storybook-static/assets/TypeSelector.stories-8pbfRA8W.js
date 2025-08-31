var T=Object.defineProperty,g=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var n=(e,r,s)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,o=(e,r)=>{for(var s in r||(r={}))_.call(r,s)&&n(e,s,r[s]);if(l)for(var s of l(r))j.call(r,s)&&n(e,s,r[s]);return e},t=(e,r)=>g(e,O(r));import{j as c}from"./iframe-9L0_nkuo.js";import{T as u}from"./TypeSelector-Bhwk48zU.js";import{P as E}from"./pokemon-types-C6n6Q8Kd.js";import"./preload-helper-4fGslNWJ.js";import"./pokedex-context-CItiPbWm.js";const b={title:"Components/TypeSelector",component:u,tags:["autodocs"]},p={args:{type:"normal"}},a=()=>c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:Object.keys(E).map(e=>c.jsx(u,{type:e},e))});a.__docgenInfo={description:"",methods:[],displayName:"AllTypes"};var m,i,y;p.parameters=t(o({},p.parameters),{docs:t(o({},(m=p.parameters)==null?void 0:m.docs),{source:o({originalSource:`{
  args: {
    type: 'normal'
  }
}`},(y=(i=p.parameters)==null?void 0:i.docs)==null?void 0:y.source)})});var d,x,f;a.parameters=t(o({},a.parameters),{docs:t(o({},(d=a.parameters)==null?void 0:d.docs),{source:o({originalSource:`() => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px'
}}>\r
    {Object.keys(POKEMON_TYPE).map(key => <TypeSelector key={key} type={key} />)}\r
  </div>`},(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source)})});const h=["Default","AllTypes"];export{a as AllTypes,p as Default,h as __namedExportsOrder,b as default};
