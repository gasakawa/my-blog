import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutMain = styled.main`
  background: #f0f0f3;
  min-height: 100vh;
  padding: 1rem 3.75rem 0 21rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 4.125rem 0 3rem 1rem;
    flex: 1;
  `}
`;
