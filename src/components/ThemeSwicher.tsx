import React from 'react';
import { FormControlLabel, IconButton, Switch, useTheme } from '@mui/material';
import { useThemeStore } from 'store/useThemeStore';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function ThemeSwicher() {
  const { isMobile } = useDeviceWidthStore();
  const { theme: themeMode, setTheme } = useThemeStore();

  const isDarkMode = themeMode === 'dark';
  const marginTop = !isMobile ? 0.5 : 0;

  const themeIcon = isDarkMode ? (
    <DarkModeOutlined sx={{ mt: marginTop }} color="action" />
  ) : (
    <LightModeOutlined sx={{ mt: marginTop }} color="action" />
  );

  if (isMobile) {
    return (
      <IconButton size="medium" onClick={() => setTheme()} color="default">
        {themeIcon}
      </IconButton>
    );
  }

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
      label={themeIcon}
    />
  );
}

export default ThemeSwicher;
