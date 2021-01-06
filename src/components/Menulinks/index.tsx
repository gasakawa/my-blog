import React from 'react';

import Link from 'next/link';

import {
  MenuLinksItem,
  MenuLinksList,
  MenuLinksWrapper,
  MenuLinksLink,
} from '../styles/menu-links';
import links from './content';

const Menulinks = () => {
  return (
    <MenuLinksWrapper>
      <MenuLinksList>
        {links.map(link => (
          <MenuLinksItem key={link.label}>
            <Link href={link.url} passHref>
              <MenuLinksLink>{link.label}</MenuLinksLink>
            </Link>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  );
};

export default Menulinks;
