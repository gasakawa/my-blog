import styled from 'styled-components';
import media from 'styled-media-query';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    border-radius: 50%;
    height: 10rem;
    margin: auto;
    width: 10rem;

    ${media.lessThan('large')`
    height: 2.875rem;
    width: 2.875rem;
  `}
  }
`;
