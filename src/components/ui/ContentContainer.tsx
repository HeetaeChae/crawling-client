import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function ContentContainer({ children }: { children: ReactNode }) {
  const { isMobile } = useDeviceWidthStore();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 3 }}
    >
      {children}
    </Box>
  );
}
export default ContentContainer;
