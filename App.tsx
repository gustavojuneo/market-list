import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Welcome } from './src/screens/Welcome';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}