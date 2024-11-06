import React from 'react';
import { Button } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function FlexibleSubmitButton({
  label,
  valid,
}: {
  label: string;
  valid: boolean;
}) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  return (
    <Button
      variant="contained"
      size="large"
      sx={!isMobile ? { flex: 0.5, ml: 'auto' } : {}}
      type="submit"
      disabled={!valid}
    >
      {label}
    </Button>
  );
}

export default FlexibleSubmitButton;
