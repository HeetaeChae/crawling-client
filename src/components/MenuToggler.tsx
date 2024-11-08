import React, { ReactNode } from 'react';
import { Button, useTheme } from '@mui/material';
import { useMenuContext } from './Menu';
import { useThemeStore } from 'store/useThemeStore';
import { ExpandMore } from '@mui/icons-material';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

interface MenuTogglerProps {
  label?: string;
  icon?: ReactNode;
}

function MenuToggler({ label, icon }: MenuTogglerProps) {
  const { isMobile } = useDeviceWidthStore();
  const { handleClickToggler } = useMenuContext();
  const theme = useTheme();
  const { theme: themeMode } = useThemeStore();

  const menuColor =
    themeMode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

  return (
    <Button
      variant="text"
      onClick={handleClickToggler}
      size="large"
      startIcon={icon}
      sx={{ color: menuColor, fontWeight: '600' }}
    >
      {label}
      {!isMobile && <ExpandMore fontSize="small" />}
    </Button>
  );
}

export default MenuToggler;
