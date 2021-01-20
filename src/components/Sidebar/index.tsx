import React from 'react';

import { SidebarWrapper } from '../../styles/components/sidebar';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import Menulinks from '../Menulinks';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinks />
      <Menulinks />
    </SidebarWrapper>
  );
};

export default Sidebar;
