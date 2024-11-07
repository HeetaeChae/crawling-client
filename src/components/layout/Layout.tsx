import React from 'react';
import { Box } from '@mui/system';
import Navbar from './Navbar';
import { useThemeStore } from 'store/useThemeStore';
import Content from './Content';

function Layout() {
  const { theme } = useThemeStore();
  const isDarkMode = theme === 'dark';

  const primaryBgColor = !isDarkMode ? 'white' : 'black';
  const shadow = !isDarkMode ? 1 : 3;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: primaryBgColor,
      }}
    >
      <Navbar />
      <Content />
    </Box>
  );
}

export default Layout;
