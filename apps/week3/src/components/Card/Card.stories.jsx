import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 0,
    name: '포켓몬',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['normal', 'fire', 'grass', 'water'],
  },
};

export const 이상해씨 = {
  args: {
    id: 1,
    name: '이상해씨',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['grass', 'poison'],
  },
};

export const 파이리 = {
  args: {
    id: 4,
    name: '파이리',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    types: ['fire'],
  },
};

export const 꼬부기 = {
  args: {
    id: 7,
    name: '꼬부기',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    types: ['water'],
  },
};

export const 피카츄 = {
  args: {
    id: 25,
    name: '피카츄',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    types: ['electric'],
  },
};
