import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

interface ContentTitleProps {
  title: string;
  subTitle?: string;
}

function TitleTypography({ title, subTitle }: ContentTitleProps) {
  const { isMobile } = useDeviceWidthStore();

  return (
    <Box sx={{ my: isMobile ? 3 : 5 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        component="div"
        sx={{ fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Box sx={{ mt: isMobile ? 0.5 : 1 }}>{subTitle}</Box>
    </Box>
  );
}

export default TitleTypography;
