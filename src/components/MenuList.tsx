import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMenuContext } from './Menu';

interface MenuItem {
  path: string;
  label: string;
}

interface MenuListProps {
  menuItems: readonly MenuItem[];
}

function MenuList({ menuItems }: MenuListProps) {
  const navigate = useNavigate();
  const { isOpen, togglerEl, handleClose } = useMenuContext();

  return (
    <Menu open={isOpen} onClose={handleClose} anchorEl={togglerEl}>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            navigate(menuItem.path);
            handleClose();
          }}
        >
          {menuItem.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuList;
