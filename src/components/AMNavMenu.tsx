import React from 'react';
import NavMenu from './common/NavMenu';

const menuItems = [
  {
    label: '제휴마케팅',
    path: '/affiliate-marketing',
  },
];

function AMNavMenu() {
  return <NavMenu openButtonLabel="제휴마케팅" menuItems={menuItems} />;
}

export default AMNavMenu;
