import React from 'react';
import { Button, Menu, MenuItem, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useNavMenu } from 'hooks/useNavMenu';

interface MenuItem {
  label: string;
  path: string;
}

interface NavMenuProps {
  menuItems: MenuItem[];
  openButtonLabel: string;
}

function NavMenu({ menuItems, openButtonLabel }: NavMenuProps) {
  const {
    anchorEl,
    isOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleClickMenuItem,
  } = useNavMenu();

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={isOpen ? 'fade-menu' : undefined}
        aria-expanded={isOpen ? 'true' : undefined}
        aria-haspopup="true"
        onClick={(e) => handleOpenMenu(e)}
        variant="text"
        color="inherit"
        size="large"
      >
        {openButtonLabel}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleCloseMenu}
        TransitionComponent={Fade}
      >
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <MenuItem
            key={index}
            onClick={() => handleClickMenuItem(menuItem.path)}
          >
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NavMenu;
