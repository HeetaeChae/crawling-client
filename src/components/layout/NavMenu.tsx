import React from 'react';
import DropdownNavMenu from './DropdownNavMenu';
import CollapsibleNavMenu from './CollapsibleNavMenu';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

function NavMenu() {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  if (isMobile) {
    return <CollapsibleNavMenu />;
  }
  return <DropdownNavMenu />;
}
export default NavMenu;
