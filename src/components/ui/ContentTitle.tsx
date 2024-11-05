import React from 'react';
import { Box } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function ContentTitle({ title }: { title: string }) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  return (
    <Box sx={{ fontWeight: '600', mb: isMobile ? 1.5 : 2.5 }} fontSize="large">
      {title}
    </Box>
  );
}

export default ContentTitle;
