import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';

interface CustomSegmentedButton {
  label: string;
  buttonItems: any[];
  selectedButton: string;
  onSelectButton: (selectedValue: string) => void;
}

function CustomSegmentedButton({
  label,
  buttonItems,
  selectedButton,
  onSelectButton,
}: CustomSegmentedButton) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography sx={{ fontWeight: 'semi-bold' }}>{label}</Typography>
      <ButtonGroup>
        {buttonItems.map((buttonItem, index) => (
          <Button
            key={index}
            variant={
              selectedButton === buttonItem.value ? 'contained' : 'outlined'
            }
            onClick={() => onSelectButton(buttonItem.value)}
          >
            {buttonItem.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default CustomSegmentedButton;
