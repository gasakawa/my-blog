import styled from 'styled-components';
import media from 'styled-media-query';

export const CategoryPageWrapper = styled.header`
  color: #2f3459;
  max-width: 70rem;
  padding: 1rem 3rem 0;

  ${media.lessThan('large')`
  padding: 3rem 0 0;
  max-width: 100%;
`}
`;
