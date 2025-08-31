var x=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var g=(o,s,t)=>s in o?x(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,e=(o,s)=>{for(var t in s||(s={}))O.call(s,t)&&g(o,t,s[t]);if(c)for(var t of c(s))j.call(s,t)&&g(o,t,s[t]);return o},r=(o,s)=>D(o,E(s));import{C as q}from"./Card-JhEJUxyq.js";import"./iframe-9L0_nkuo.js";import"./preload-helper-4fGslNWJ.js";import"./Button-BqFnRgpp.js";import"./pokemon-types-C6n6Q8Kd.js";const J={title:"Components/Card",component:q,tags:["autodocs"]},a={args:{id:0,name:"포켓몬",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",types:["normal","fire","grass","water"]}},n={args:{id:1,name:"이상해씨",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",types:["grass","poison"]}},p={args:{id:4,name:"파이리",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",types:["fire"]}},m={args:{id:7,name:"꼬부기",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",types:["water"]}},i={args:{id:25,name:"피카츄",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",types:["electric"]}};var u,d,h;a.parameters=r(e({},a.parameters),{docs:r(e({},(u=a.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {
    id: 0,
    name: '포켓몬',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['normal', 'fire', 'grass', 'water']
  }
}`},(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source)})});var k,P,w;n.parameters=r(e({},n.parameters),{docs:r(e({},(k=n.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    id: 1,
    name: '이상해씨',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['grass', 'poison']
  }
}`},(w=(P=n.parameters)==null?void 0:P.docs)==null?void 0:w.source)})});var l,b,y;p.parameters=r(e({},p.parameters),{docs:r(e({},(l=p.parameters)==null?void 0:l.docs),{source:e({originalSource:`{
  args: {
    id: 4,
    name: '파이리',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    types: ['fire']
  }
}`},(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source)})});var A,I,f;m.parameters=r(e({},m.parameters),{docs:r(e({},(A=m.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    id: 7,
    name: '꼬부기',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    types: ['water']
  }
}`},(f=(I=m.parameters)==null?void 0:I.docs)==null?void 0:f.source)})});var C,S,_;i.parameters=r(e({},i.parameters),{docs:r(e({},(C=i.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    id: 25,
    name: '피카츄',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    types: ['electric']
  }
}`},(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source)})});const K=["Default","이상해씨","파이리","꼬부기","피카츄"];export{a as Default,K as __namedExportsOrder,J as default,m as 꼬부기,n as 이상해씨,p as 파이리,i as 피카츄};
