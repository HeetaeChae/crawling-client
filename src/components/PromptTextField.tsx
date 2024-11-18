import React from 'react';
import {
  DeleteOutlined,
  RemoveCircleOutline,
  RemoveOutlined,
} from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

interface PromptTextField {
  label: string;
  value: string;
  onChange: (e: any) => void;
  lastAddPrompt?: boolean | undefined;
  onDelete?: () => void | undefined;
}

function PromptTextField({
  label,
  value,
  onChange,
  lastAddPrompt,
  onDelete,
}: PromptTextField) {
  if (lastAddPrompt) {
    return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={onDelete}>
                <DeleteOutlined color="warning" />
              </IconButton>
            </InputAdornment>
          }
          rows={5}
          multiline
          placeholder=""
          label={label}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    );
  }

  return (
    <TextField
      variant="outlined"
      rows={5}
      multiline
      placeholder=""
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}

export default PromptTextField;
