import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GlobalStyles from './globalStyles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#db2777',
    },
    secondary: {
      main: '#de396399',
    },
  },
});

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
