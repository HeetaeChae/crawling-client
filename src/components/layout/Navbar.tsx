import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import NavMenu from './NavMenu';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import ThemeSwicher from 'components/ThemeSwicher';

interface NavbarProps {
  barBgColor: string;
  hasBarBorder: boolean;
}

function Navbar({ barBgColor, hasBarBorder }: NavbarProps) {
  const { isMobile } = useDeviceWidthStore();

  const borderBottom = hasBarBorder ? '1px solid #efefef' : 'none';

  const desktopBarPosition = (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="textPrimary">
          MUI
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <NavMenu />
        <ThemeSwicher />
      </Box>
    </Box>
  );

  const mobileBarPosition = (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <NavMenu />
        <Typography variant="h6" component="div" color="textPrimary">
          MUI
        </Typography>
      </Box>
      <Box>
        <ThemeSwicher />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGlow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: barBgColor,
          borderBottom,
        }}
      >
        <Toolbar>{isMobile ? mobileBarPosition : desktopBarPosition}</Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
