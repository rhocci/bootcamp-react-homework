import Button from './Button';
import prevPage from '../../assets/icons/arrow-l.svg';
import nextPage from '../../assets/icons/arrow-r.svg';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'button',
    children: '버튼',
    variant: 'text',
    label: '',
  },
};

export const textButton = {
  args: {
    variant: 'text',
    children: '검색',
  },
};

export const prevButton = {
  args: {
    variant: 'icon',
    label: '이전 페이지로',
    children: <img src={prevPage} alt="" />,
  },
};

export const nextButton = {
  args: {
    variant: 'icon',
    label: '다음 페이지로',
    children: <img src={nextPage} alt="" />,
  },
};
