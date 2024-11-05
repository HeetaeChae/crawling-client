import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import { useMenuContext } from './Menu';

interface MenuTogglerProps {
  label?: string;
  icon?: ReactNode;
}

function MenuToggler({ label, icon }: MenuTogglerProps) {
  const { handleClickToggler } = useMenuContext();

  return (
    <Button
      variant="text"
      color="inherit"
      onClick={handleClickToggler}
      size="large"
      startIcon={icon}
    >
      {label}
    </Button>
  );
}

export default MenuToggler;
