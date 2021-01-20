import React from 'react';
import Avatar from '../Avatar';
import {
  ProfileAuthor,
  ProfileDescription,
  ProfileWrapper,
} from '../../styles/components/profile';

const Profile = () => {
  return (
    <ProfileWrapper>
      <Avatar />
      <ProfileAuthor>
        <h1>
          <a href='/'>Gabriel Asakawa</a>
        </h1>
        <small>Programação e Design</small>
      </ProfileAuthor>
      <ProfileDescription>
        Espaço para compartilhar idéias sobre tecnologia, programação, design,
        basquete, series, filmes e muito mais, espero ajudar a outros com as
        minhas experiências.
      </ProfileDescription>
    </ProfileWrapper>
  );
};

export default Profile;
