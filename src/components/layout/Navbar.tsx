import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwicher from 'components/ThemeSwicher';
import AMNavMenu from 'components/AMNavMenu';
import YCNavMenu from 'components/YCNavMenu';

function Navbar() {
  return (
    <Box sx={{ flexGlow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'start' }}
          >
            MUI
          </Typography>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Box sx={{ display: 'flex' }}>
              <AMNavMenu />
              <YCNavMenu />
            </Box>
            <ThemeSwicher />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
