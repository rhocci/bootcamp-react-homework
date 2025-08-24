import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';
import Form from './components/Form/Form.jsx';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f8fa;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text.body};

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledApp>
        <Header>
          <h1>Stateful Components</h1>
          <p>React 2주차 과제 - 문서영</p>
        </Header>
        <Form />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
