var _=Object.defineProperty,y=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(a,t,e)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,r=(a,t)=>{for(var e in t||(t={}))E.call(t,e)&&p(a,e,t[e]);if(l)for(var e of l(t))C.call(t,e)&&p(a,e,t[e]);return a},s=(a,t)=>y(a,D(t));import{j as S}from"./iframe-9L0_nkuo.js";import{B as O}from"./Button-BqFnRgpp.js";import{p as R,n as k}from"./arrow-r-ODDCAkqk.js";import"./preload-helper-4fGslNWJ.js";const G={title:"Components/Button",component:O,tags:["autodocs"]},o={args:{type:"button",children:"버튼",variant:"text",label:""}},n={args:{variant:"text",children:"검색"}},c={args:{variant:"icon",label:"이전 페이지로",children:S.jsx("img",{src:R,alt:""})}},i={args:{variant:"icon",label:"다음 페이지로",children:S.jsx("img",{src:k,alt:""})}};var m,u,d;o.parameters=s(r({},o.parameters),{docs:s(r({},(m=o.parameters)==null?void 0:m.docs),{source:r({originalSource:`{
  args: {
    type: 'button',
    children: '버튼',
    variant: 'text',
    label: ''
  }
}`},(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source)})});var g,x,v;n.parameters=s(r({},n.parameters),{docs:s(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    variant: 'text',
    children: '검색'
  }
}`},(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source)})});var B,b,h;c.parameters=s(r({},c.parameters),{docs:s(r({},(B=c.parameters)==null?void 0:B.docs),{source:r({originalSource:`{
  args: {
    variant: 'icon',
    label: '이전 페이지로',
    children: <img src={prevPage} alt="" />
  }
}`},(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source)})});var f,j,P;i.parameters=s(r({},i.parameters),{docs:s(r({},(f=i.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    variant: 'icon',
    label: '다음 페이지로',
    children: <img src={nextPage} alt="" />
  }
}`},(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source)})});const H=["Default","textButton","prevButton","nextButton"];export{o as Default,H as __namedExportsOrder,G as default,i as nextButton,c as prevButton,n as textButton};
