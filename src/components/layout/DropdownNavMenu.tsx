import React from 'react';
import Menu from 'components/common/Menu';
import MenuList from 'components/common/MenuList';
import MenuToggler from 'components/common/MenuToggler';
import ThemeSwicher from 'components/ThemeSwicher';
import { AFFILIATE_MARKETING_MENU, YOUTUBE_CHANNEL_MENU } from 'constants/menu';
import { Box } from '@mui/material';

const CustomMenu = Object.assign(
  {},
  {
    Wrapper: Menu,
    Toggler: MenuToggler,
    List: MenuList,
  },
);

function DropdownNavMenu() {
  return (
    <Box
      sx={{
        ml: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <Box>
        <CustomMenu.Wrapper>
          <CustomMenu.Toggler label={AFFILIATE_MARKETING_MENU.label} />
          <CustomMenu.List menuItems={AFFILIATE_MARKETING_MENU.menuItems} />
        </CustomMenu.Wrapper>
        <CustomMenu.Wrapper>
          <CustomMenu.Toggler label={YOUTUBE_CHANNEL_MENU.label} />
          <CustomMenu.List menuItems={YOUTUBE_CHANNEL_MENU.menuItems} />
        </CustomMenu.Wrapper>
      </Box>
      <Box>
        <ThemeSwicher />
      </Box>
    </Box>
  );
}

export default DropdownNavMenu;
