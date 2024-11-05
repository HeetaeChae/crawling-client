import React from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

function FormCard() {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel htmlFor="my-input">keyword</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  );
}

export default FormCard;
