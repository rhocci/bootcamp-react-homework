import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';
import Form from './components/Form/Form.jsx';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f8fa;
`;

function App() {
  const [isDark, setisDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledApp>
        <Form />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
