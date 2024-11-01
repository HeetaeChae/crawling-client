import React from 'react';
import NavMenu from './common/NavMenu';

const menuItems = [
  {
    label: '드라마리뷰',
    path: '/drama-review',
  },
];

function YCNavMenu() {
  return <NavMenu openButtonLabel="유튜브채널" menuItems={menuItems} />;
}

export default YCNavMenu;
