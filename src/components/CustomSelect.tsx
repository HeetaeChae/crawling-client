import React, { ChangeEvent, ReactNode } from 'react';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';

interface SelectItem {
  label: string | number;
  value: string | number;
}

interface CustomSelectProps {
  label: string;
  value: string | number;
  selectItems: SelectItem[];
  onChange: (e: any) => void;
}

function CustomSelect({
  label,
  value,
  onChange,
  selectItems,
}: CustomSelectProps) {
  return (
    <Box>
      <InputLabel sx={{ fontSize: '12px', ml: '5px' }}>{label}</InputLabel>
      <Select
        inputProps={{ 'aria-label': 'Without label' }}
        size="small"
        sx={{ width: '100px', mt: 0.5, borderRadius: 5 }}
        onChange={onChange}
        value={value}
      >
        {selectItems.map((selectItem, index) => (
          <MenuItem key={index} value={selectItem.value}>
            {selectItem.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default CustomSelect;
