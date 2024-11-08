import React from 'react';
import { Box } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function ContentTitle({ title }: { title: string }) {
  const { isMobile } = useDeviceWidthStore();

  return (
    <Box sx={{ fontWeight: '600', mb: isMobile ? 1.5 : 2.5 }} fontSize="large">
      {title}
    </Box>
  );
}

export default ContentTitle;
