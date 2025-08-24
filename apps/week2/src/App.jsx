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
  background: ${({ theme }) => theme.colors.stroke.light};
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

const ToggleDarkMode = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 999px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bg.light};
  background: ${({ theme }) => theme.colors.text.title};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.body};
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
          <ToggleDarkMode onClick={() => setIsDark((prev) => !prev)}>
            {isDark ? 'Light Mode 💡' : 'Dark Mode 🌙'}
          </ToggleDarkMode>
        </Header>
        <Form />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
