import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useThemeStore } from 'store/useThemeStore';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function ThemeSwicher() {
  const { theme, setTheme } = useThemeStore();
  const isDarkMode = theme === 'dark';

  return (
    <FormControlLabel
      control={
        <Switch
          {...label}
          checked={isDarkMode}
          size="medium"
          onChange={() => setTheme()}
        />
      }
      label={
        isDarkMode ? (
          <DarkModeOutlined sx={{ mt: 0.5 }} />
        ) : (
          <LightModeOutlined sx={{ mt: 0.5 }} />
        )
      }
    />
  );
}

export default ThemeSwicher;
