import{j as e,d}from"./iframe-9L0_nkuo.js";import{B as a}from"./Button-BqFnRgpp.js";import{P as t}from"./pokemon-types-C6n6Q8Kd.js";const l=d.article`
  border-radius: 0.5rem;
  background: ${({theme:r})=>r.colors.bg.card};
  overflow: hidden;
  box-shadow: 2px 2px 0 ${({theme:r})=>r.colors.shadow};
  border: 1px solid #00000040;
  padding: 0.5rem;
`,c=d.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;

  & span {
    font-size: 0.875rem;
  }

  & h2 {
    font-size: 1.125rem;
    color: #232323;
    filter: drop-shadow(2px 1px 0 #00000020);
  }
`,p=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 96px;
    aspect-ratio: 1;
  }

  & button {
    border: none;
    width: 80%;
    padding: 0.375rem;
    border-radius: 0.75rem;
    color: #444;
    box-shadow: 1px 2px 0 #00000030;
    font-size: 0.9rem;

    &:hover {
      box-shadow: -1px -2px 0 #00000030;
    }
  }
`,m=d.footer`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  & ul {
    padding: 0;
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    & ul {
      flex-direction: column;
      align-items: center;
      row-gap: 0.25rem;
    }
  }
`,x=d.li`
  list-style: none;
  border-radius: 50px;
  padding-inline: 1.3rem;
  padding-block: 0.2rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  background: ${({$type:r})=>{var o;return((o=t[r])==null?void 0:o.color)||"#777"}};
`;function f({id:r,name:o,img:i,types:s=[]}){return e.jsxs(l,{children:[e.jsxs(c,{children:[e.jsxs("span",{children:["No. ",r]}),e.jsx("h2",{children:o})]}),e.jsxs(p,{children:[e.jsx("img",{src:i,alt:`${o} 이미지`}),e.jsx(a,{type:"button",variant:"text",onClick:()=>{},children:"상세정보"})]}),e.jsx(m,{children:e.jsx("ul",{children:s.map(n=>e.jsx(x,{$type:n,children:t[n].ko},n))})})]})}f.__docgenInfo={description:"",methods:[],displayName:"Card",props:{types:{defaultValue:{value:"[]",computed:!1},required:!1}}};export{f as C};
