var h=Object.defineProperty,u=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var i=(t,o,e)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,s=(t,o)=>{for(var e in o||(o={}))g.call(o,e)&&i(t,e,o[e]);if(p)for(var e of p(o))$.call(o,e)&&i(t,e,o[e]);return t},n=(t,o)=>u(t,f(o));import{r as b,j as r,l as j,d as m}from"./iframe-9L0_nkuo.js";import{P as k}from"./pokedex-context-CItiPbWm.js";import{I as y}from"./Input-CALNmRQ8.js";import{B as w}from"./Button-BqFnRgpp.js";import"./preload-helper-4fGslNWJ.js";const S=m.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({theme:t})=>t.colors.primary};
  padding-block: 0.75rem;
  padding-inline: 1.4rem;
  box-shadow: 0 3px 0px #00000020;
  z-index: 999;

  ${({theme:t})=>{const o=t.colors.bg.card,e=t.colors.text;return j`
      & h1 {
        line-height: 1.1;
        font-size: 1.9rem;
        color: ${o};
        text-shadow: -3px 0px ${e}, 0px 3px ${e}, 0px 0px ${e},
          0px -1px ${e};
        &:hover {
          text-shadow: -2px 0px ${e}, 0px 2px ${e}, 0px -1px ${e};
        }
      }
    `}}

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 1.25rem;
  }
`,C=m.form`
  display: flex;
  column-gap: 0.5rem;
`;function l({title:t}){const{handleSearchSubmit:o}=b.useContext(k);return r.jsxs(S,{children:[r.jsx("h1",{children:r.jsx("a",{href:"/",children:t})}),r.jsxs(C,{onSubmit:o,children:[r.jsx(y,{type:"search",id:"search-pokemon",name:"search-pokemon",autoComplete:"off",spellCheck:"false"}),r.jsx(w,{type:"submit",variant:"text",children:"검색"})]})]})}l.__docgenInfo={description:"",methods:[],displayName:"Header"};const z={title:"Components/Header",component:l,tags:["autodocs"]},a={args:{title:"Pokédex"}};var c,d,x;a.parameters=n(s({},a.parameters),{docs:n(s({},(c=a.parameters)==null?void 0:c.docs),{source:s({originalSource:`{
  args: {
    title: 'Pokédex'
  }
}`},(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source)})});const B=["Default"];export{a as Default,B as __namedExportsOrder,z as default};
