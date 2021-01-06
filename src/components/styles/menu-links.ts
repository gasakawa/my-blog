import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: #e5e5e5;
  }
`;

export const MenuLinksLink = styled.a`
  color: #e5e5e5;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;
