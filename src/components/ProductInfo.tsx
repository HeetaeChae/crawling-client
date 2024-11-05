import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function ProductInfo() {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  return (
    <Box>
      <Box sx={{ fontWeight: '600', mb: 2 }} fontSize="large">
        상품 정보
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 3 }}
      >
        <Skeleton height={150} animation="wave" variant="rounded" />
        <Skeleton height={150} animation="wave" variant="rounded" />
        <Skeleton height={150} animation="wave" variant="rounded" />
        <Skeleton height={150} animation="wave" variant="rounded" />
        <Skeleton height={150} animation="wave" variant="rounded" />
      </Box>
    </Box>
  );
}

export default ProductInfo;
