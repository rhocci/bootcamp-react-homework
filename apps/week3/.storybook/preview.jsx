import '../../../common/styles/index.css';
import 'galmuri/dist/galmuri.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../src/styles/theme.js';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Galmuri11', sans-serif;
    -webkit-font-smoothing: none;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg.body};
  }
`;

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      //test: 'error',
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
