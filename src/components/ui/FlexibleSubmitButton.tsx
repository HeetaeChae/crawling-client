import React from 'react';
import { Button } from '@mui/material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function FlexibleSubmitButton({
  label,
  valid,
  type,
}: {
  label: string;
  valid: boolean;
  type?: 'fulfilled' | 'outlined';
}) {
  const { isMobile } = useDeviceWidthStore();

  const halfButton = !isMobile ? { flex: 0.5, ml: 'auto' } : {};
  const buttonType = type === 'outlined' ? 'text' : 'contained';

  return (
    <Button
      variant={buttonType}
      size="large"
      sx={halfButton}
      type="submit"
      disabled={!valid}
    >
      {label}
    </Button>
  );
}

export default FlexibleSubmitButton;
