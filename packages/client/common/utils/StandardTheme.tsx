import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    backdrop: {
      page: 'hsl(0, 0%, 99%)',
      container: 'hsl(0, 0%, 99%)',
      item: 'hsl(0, 0%, 100%)',
    },
    outline: {
      light: '#f3f3f5',
      contrast: '#ffffff',
      dark: 'hsl(0, 0%, 52.54901960784314%)',
      accent: "hsla(0, 0%, 84%, 0.49)",
    },
  },
};

export const StandardTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
