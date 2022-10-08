import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './utils/theme';
import { GlobalStyle } from './global-styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
