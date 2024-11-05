import React from 'react';
import { FormControlLabel, IconButton, Switch } from '@mui/material';
import { useThemeStore } from 'store/useThemeStore';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function ThemeSwicher() {
  const { deviceWidth } = useDeviceWidthStore();
  const { theme, setTheme } = useThemeStore();

  const isMobile = deviceWidth <= 600;
  const isDarkMode = theme === 'dark';

  const themeIcon = isDarkMode ? (
    <DarkModeOutlined sx={{ mt: !isMobile ? 0.5 : 0 }} />
  ) : (
    <LightModeOutlined sx={{ mt: !isMobile ? 0.5 : 0 }} />
  );

  if (isMobile) {
    return (
      <IconButton size="medium" onClick={() => setTheme()} color="inherit">
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
