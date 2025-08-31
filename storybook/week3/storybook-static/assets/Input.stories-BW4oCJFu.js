var g=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(r,e,a)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,s=(r,e)=>{for(var a in e||(e={}))b.call(e,a)&&p(r,a,e[a]);if(c)for(var a of c(e))x.call(e,a)&&p(r,a,e[a]);return r},n=(r,e)=>f(r,v(e));import{I as y}from"./Input-CALNmRQ8.js";import"./iframe-9L0_nkuo.js";import"./preload-helper-4fGslNWJ.js";const C={title:"Components/Input",component:y,tags:["autodocs"]},t={args:{type:"text",id:"",name:"",value:void 0,placeholder:"입력하기"}},o={args:{type:"search",id:"search-bar",name:"search-bar",value:void 0,placeholder:"검색"}};var d,m,u;t.parameters=n(s({},t.parameters),{docs:n(s({},(d=t.parameters)==null?void 0:d.docs),{source:s({originalSource:`{
  args: {
    type: 'text',
    id: '',
    name: '',
    value: undefined,
    placeholder: '입력하기'
  }
}`},(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source)})});var l,i,h;o.parameters=n(s({},o.parameters),{docs:n(s({},(l=o.parameters)==null?void 0:l.docs),{source:s({originalSource:`{
  args: {
    type: 'search',
    id: 'search-bar',
    name: 'search-bar',
    value: undefined,
    placeholder: '검색'
  }
}`},(h=(i=o.parameters)==null?void 0:i.docs)==null?void 0:h.source)})});const E=["Default","Search"];export{t as Default,o as Search,E as __namedExportsOrder,C as default};
