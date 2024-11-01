import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNavMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = !!anchorEl;

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (path: string) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
  };

  return {
    anchorEl,
    isOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleClickMenuItem,
  };
}
