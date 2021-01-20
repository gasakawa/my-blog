import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialIconsWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;

  a {
    color: #e5e5e5;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
