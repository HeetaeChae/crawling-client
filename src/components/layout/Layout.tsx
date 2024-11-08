import React from 'react';
import { Box } from '@mui/system';
import Navbar from './Navbar';
import { useThemeStore } from 'store/useThemeStore';
import Content from './Content';
import { useTheme } from '@mui/material';

function Layout() {
  const { theme: themeMode } = useThemeStore();
  const theme = useTheme();

  const isDarkMode = themeMode === 'dark';
  const barBgColor = !isDarkMode
    ? theme.palette.background.default
    : theme.palette.background.paper;

  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Navbar barBgColor={barBgColor} hasBarBorder={!isDarkMode} />
      <Content />
    </Box>
  );
}

export default Layout;
