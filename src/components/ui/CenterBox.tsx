import { Box, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

interface CenterBoxProps {
  children: ReactNode;
  bgColor: 'default' | 'paper';
}

function CenterBox({ children, bgColor }: CenterBoxProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background[bgColor],
      }}
    >
      {children}
    </Box>
  );
}

export default CenterBox;
