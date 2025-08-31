import 'galmuri/dist/galmuri.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Galmuri11', sans-serif;
    -webkit-font-smoothing: none;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg.body};
  }
`;

const StyledApp = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <MainContent></MainContent>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
