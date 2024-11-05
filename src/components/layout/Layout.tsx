import React from 'react';
import { Box } from '@mui/system';
import Navbar from './Navbar';
import { useThemeStore } from 'store/useThemeStore';
import Content from './Content';

function Layout() {
  const { theme } = useThemeStore();
  const isDarkMode = theme === 'dark';

  const primaryBgColor = !isDarkMode ? 'white' : 'black';
  const secondaryBgColor = !isDarkMode ? '#EEEEEE' : '#222222';
  const shadow = !isDarkMode ? 1 : 3;

  return (
    <Box
      sx={{
        backgroundColor: secondaryBgColor,
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Content bgColor={primaryBgColor} shadow={shadow} />
    </Box>
  );
}

export default Layout;
