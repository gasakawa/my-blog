import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.section`
  display: flex;
  color: #2f3459;
  padding: 1.5rem 0;
  margin-left: 3rem;
  justify-content: space-between;

  ${media.lessThan('large')`
    font-size: .8rem;
    margin: 0 1rem 0 0;
  `}

  a {
    color: #2f3459;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }
  }
`;
