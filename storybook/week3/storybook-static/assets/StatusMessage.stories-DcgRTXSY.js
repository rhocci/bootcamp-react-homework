var v=Object.defineProperty,y=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))f.call(e,t)&&g(s,t,e[t]);if(d)for(var t of d(e))j.call(e,t)&&g(s,t,e[t]);return s},a=(s,e)=>y(s,S(e));import{j as i}from"./iframe-9L0_nkuo.js";import{D as p}from"./StatusMessage-CyDgy24Y.js";import"./preload-helper-4fGslNWJ.js";import"./index-DQWiiUCV.js";import"./index-CpzJVyzv.js";const O={title:"Components/StatusMessage",component:p,tags:["autodocs"]},o={render:s=>i.jsx("div",{style:{height:"300px",position:"relative"},children:i.jsx(p,r({},s))}),args:{status:"loading"}},n={render:s=>i.jsx("div",{style:{height:"300px",position:"relative"},children:i.jsx(p,r({},s))}),args:{status:"empty"}};var m,u,c;o.parameters=a(r({},o.parameters),{docs:a(r({},(m=o.parameters)==null?void 0:m.docs),{source:r({originalSource:`{
  render: args => <div style={{
    height: '300px',
    position: 'relative'
  }}>\r
      <DefaultStatusMessage {...args} />\r
    </div>,
  args: {
    status: 'loading'
  }
}`},(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source)})});var l,x,h;n.parameters=a(r({},n.parameters),{docs:a(r({},(l=n.parameters)==null?void 0:l.docs),{source:r({originalSource:`{
  render: args => <div style={{
    height: '300px',
    position: 'relative'
  }}>\r
      <DefaultStatusMessage {...args} />\r
    </div>,
  args: {
    status: 'empty'
  }
}`},(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source)})});const R=["Loading","Empty"];export{n as Empty,o as Loading,R as __namedExportsOrder,O as default};
