import React from 'react';
import Menu from 'components/Menu';
import MenuList from 'components/MenuList';
import MenuToggler from 'components/MenuToggler';
import ThemeSwicher from 'components/ThemeSwicher';
import { AFFILIATE_MARKETING_MENU, YOUTUBE_CHANNEL_MENU } from 'constants/menu';
import { Box, Divider } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

const CustomMenu = Object.assign(
  {},
  {
    Wrapper: Menu,
    Toggler: MenuToggler,
    List: MenuList,
    Divider: <Divider />,
  },
);

function CollapsibleNavMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <Box>
        <CustomMenu.Wrapper>
          <CustomMenu.Toggler icon={<MenuOutlined />} />
          <CustomMenu.List
            menuItems={[
              ...AFFILIATE_MARKETING_MENU.menuItems,
              ...YOUTUBE_CHANNEL_MENU.menuItems,
            ]}
          />
        </CustomMenu.Wrapper>
      </Box>
      <Box>
        <ThemeSwicher />
      </Box>
    </Box>
  );
}

export default CollapsibleNavMenu;
