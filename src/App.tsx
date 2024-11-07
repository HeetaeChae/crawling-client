import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Router from 'routes/Router';
import { useThemeStore } from 'store/useThemeStore';
import { useDeviceWidth } from 'hooks/useDeviceWidth';

function App() {
  useDeviceWidth();
  const { theme } = useThemeStore();

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: theme,
          ...(theme === 'light'
            ? { background: { default: 'white', paper: '#f5f5f5' } }
            : { background: { default: 'black', paper: '#1a1a1a' } }),
        },
      })}
    >
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
