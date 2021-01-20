import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  color: #e5e5e5;
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction:row;

  `}
`;

export const ProfileAuthor = styled.div`
  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 15px;

    a {
      text-decoration: none;
      color: #e5e5e5;
      transition: color 0.5s;
      &:hover {
        color: #1fa1f2;
      }
    }

    ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
  }

  small {
    font-size: 1.1rem;
    font-weight: 400;
    color: #e5e5e5;

    ${media.lessThan('large')`
    font-size: 0.8rem;
  `}
  }

  ${media.lessThan('large')`
    align-items: flex-start;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-top: 15px;
  ${media.lessThan('large')`
    display: none;
  `}
`;
