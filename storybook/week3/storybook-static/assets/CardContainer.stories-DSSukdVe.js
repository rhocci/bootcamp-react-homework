import{r as o,j as r,d as n}from"./iframe-9L0_nkuo.js";import{P as s}from"./pokedex-context-CItiPbWm.js";import{S as m}from"./StatusMessage-CyDgy24Y.js";import{C as d}from"./Card-JhEJUxyq.js";import"./preload-helper-4fGslNWJ.js";import"./index-DQWiiUCV.js";import"./index-CpzJVyzv.js";import"./Button-BqFnRgpp.js";import"./pokemon-types-C6n6Q8Kd.js";const p=n.main`
  max-width: 1080px;
  margin: 0 auto;
  padding-inline: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-block: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;function a(){const{pokemonList:i,status:e}=o.useContext(s);return r.jsx(p,{children:e==="loaded"?i.map(t=>r.jsx(d,{id:t.id,name:t.name.ko,img:t.sprite,types:t.types},t.id)):r.jsx(m,{status:e})})}a.__docgenInfo={description:"",methods:[],displayName:"CardContainer"};const _={title:"Components/CardContainer",component:a},h=[];export{h as __namedExportsOrder,_ as default};
