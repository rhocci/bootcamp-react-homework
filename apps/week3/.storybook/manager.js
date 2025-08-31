import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Pokédex Storybook',
    brandUrl: 'https://bootcamp-react-homework-week3.vercel.app/',
    brandImage: '/logo.png',
    brandTarget: '_self',

    appBg: '#e3edf0',
    appContentBg: '#ffffff',
    appBorderColor: '#4F4F4F',
    appBorderRadius: 4,

    fontBase: '"Galmuri11", sans-serif',
    fontCode: 'monospace',

    textColor: '#004247',
    barTextColor: '#004247',
    barSelectedColor: '#00B8D4',
    barBg: '#eeeeee',
  },
});
