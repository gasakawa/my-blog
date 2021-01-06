import React from 'react';
import Image from 'next/image';

import { AvatarWrapper } from '../styles/avatar';

const Avatar = () => {
  return (
    <AvatarWrapper>
      <Image
        src='/gabrielasakawa.jpg'
        alt='Gabriel Asakawa'
        width={500}
        height={500}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
