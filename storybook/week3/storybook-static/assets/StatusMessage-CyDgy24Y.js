import{j as e,d as a}from"./iframe-9L0_nkuo.js";import{r as o}from"./index-DQWiiUCV.js";const m=""+new URL("igglybuff-Bwg-ZPui.webp",import.meta.url).href,g=""+new URL("lickitung-rGj-XYEJ.webp",import.meta.url).href,i=a.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
  text-align: center;
`,n={loading:{img:m,message:"로딩 중 . . ."},empty:{img:g,message:"이런! 검색 결과가 없습니다."}};function u({status:t}){const{img:s,message:r}=n[t];return o.createPortal(e.jsxs(i,{children:[e.jsx("img",{src:s,alt:""}),e.jsx("strong",{children:r})]}),document.getElementById("message"))}function l({status:t}){const{img:s,message:r}=n[t];return e.jsxs(i,{children:[e.jsx("img",{src:s,alt:""}),e.jsx("strong",{children:r})]})}l.__docgenInfo={description:"",methods:[],displayName:"DefaultStatusMessage"};export{l as D,u as S};
