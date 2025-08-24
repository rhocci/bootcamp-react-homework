import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';
import Form from './components/Form/Form.jsx';

function App() {
  const [isDark, setisDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Form />
    </ThemeProvider>
  );
}

export default App;
