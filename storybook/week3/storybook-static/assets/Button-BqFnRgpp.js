import{j as s,l as r,d as u}from"./iframe-9L0_nkuo.js";const l=u.button`
  border: 1px solid ${({theme:o})=>o.colors.text};
  border-radius: 0.125rem;
  background: ${({theme:o})=>o.colors.bg.card};
  box-shadow: 1px 1px 0 ${({theme:o})=>o.colors.shadow};

  ${({$variant:o,theme:e})=>{if(o==="icon")return r`
        aspect-ratio: 1;

        & img {
          width: 10px;
        }

        &:hover {
          box-shadow: -1px -1px 0 ${e.colors.shadow};
        }
      `;if(o==="text")return r`
        background: ${({theme:t})=>t.colors.bg.body};

        &:hover {
          box-shadow: -1px -1px 0 ${e.colors.shadow};
        }
      `}}
`;function i({type:o="button",variant:e="text",children:t,label:a=void 0,onClick:d}){return s.jsx(l,{type:o,$variant:e,"aria-label":e==="icon"?a:void 0,onClick:d,children:t})}i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},label:{defaultValue:{value:"undefined",computed:!0},required:!1}}};export{i as B};
