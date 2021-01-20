import React from 'react';

import {
  SocialIconsWrapper,
  SocialLinksList,
  IconWrapper,
} from '../../styles/components/social-links';
import Icons from './icons';
import links from './content';

const SocialLinks = () => {
  return (
    <SocialIconsWrapper>
      <SocialLinksList>
        {links.map(link => {
          const Icon = Icons[link.label];
          return (
            <li key={link.label}>
              <a
                href={link.url}
                title={link.label}
                target='_blank'
                rel='noopener noreferer'
              >
                <IconWrapper>
                  <Icon size={24} />
                </IconWrapper>
              </a>
            </li>
          );
        })}
      </SocialLinksList>
    </SocialIconsWrapper>
  );
};

export default SocialLinks;
