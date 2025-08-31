import Input from './Input.jsx';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'text',
    id: '',
    name: '',
    value: undefined,
    placeholder: '입력하기',
  },
};

export const Search = {
  args: {
    type: 'search',
    id: 'search-bar',
    name: 'search-bar',
    value: undefined,
    placeholder: '검색',
  },
};
