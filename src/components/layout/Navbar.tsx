import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';

function Navbar() {
  return (
    <Box sx={{ flexGlow: 1 }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div">
            MUI
          </Typography>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
