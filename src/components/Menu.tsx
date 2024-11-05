import React, { useState, createContext, ReactNode, useContext } from 'react';

interface MenuContextType {
  isOpen: boolean;
  togglerEl: HTMLElement | null;
  handleClickToggler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  togglerEl: null,
  handleClickToggler: () => {},
  handleClose: () => {},
});

function Menu({ children }: { children: ReactNode }) {
  const [togglerEl, setTogglerEl] = useState<HTMLElement | null>(null);
  const isOpen = !!togglerEl;

  const handleClickToggler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTogglerEl(e.currentTarget);
  };
  const handleClose = () => {
    setTogglerEl(null);
  };

  return (
    <MenuContext.Provider
      value={{ isOpen, togglerEl, handleClickToggler, handleClose }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default Menu;

export const useMenuContext = () => useContext(MenuContext);
