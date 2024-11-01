import React from 'react';
import { Box } from '@mui/system';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          maxWidth: 1000,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
