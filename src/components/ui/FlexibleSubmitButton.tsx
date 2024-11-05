import React from 'react';
import { Button } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function FlexibleSubmitButton({ label }: { label: string }) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  return (
    <Button
      variant="contained"
      size="large"
      sx={!isMobile ? { flex: 0.5, ml: 'auto' } : {}}
      type="submit"
    >
      {label}
    </Button>
  );
}

export default FlexibleSubmitButton;
