import React from 'react';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function Content() {
  const { isMobile } = useDeviceWidthStore();

  return (
    <Box
      sx={{
        maxWidth: 800,
        p: isMobile ? 3 : 5,
        m: 'auto',
      }}
    >
      <Outlet />
    </Box>
  );
}

export default Content;
