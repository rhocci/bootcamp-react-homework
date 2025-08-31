import{r as t,j as s,d as a}from"./iframe-9L0_nkuo.js";import{P as d}from"./pokedex-context-CItiPbWm.js";import{P as e}from"./pokemon-types-C6n6Q8Kd.js";const n=a.button`
  padding: 0.25rem;
  width: 100%;
  color: #fff;
  background: ${({$type:o})=>e[o].color};
  text-align: center;
  border-radius: 8px;
  box-shadow: 1px 1px 0 ${({theme:o})=>o.colors.shadow};
  cursor: pointer;

  &:hover {
    font-weight: 700;
    box-shadow: -1px -1px 0 ${({theme:o})=>o.colors.shadow};
  }
`;function p({type:o="normal"}){const{handleTypeSelect:r}=t.useContext(d);return s.jsx(n,{$type:o,onClick:()=>r(o),children:e[o].ko})}p.__docgenInfo={description:"",methods:[],displayName:"TypeSelector",props:{type:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};export{p as T};
