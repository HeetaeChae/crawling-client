import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from 'components/layout/Layout';
import React from 'react';
import Router from 'routes/Router';
import './App.css';
import { useThemeStore } from 'store/useThemeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="App">
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: theme,
          },
        })}
      >
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
