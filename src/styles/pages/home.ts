import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface ItemProps {
  backgroundColor: string;
}

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px;
  margin: 3.755rem 0 0 3rem;

  ${media.lessThan('large')`
    margin: 2.755rem 1rem 0 0;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px #2f3459 solid;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px rgba(49, 52, 89, 0.5);
  height: auto;
`;

export const PostItemMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostItemDate = styled.time`
  font-size: 0.8rem;
`;

export const PostItemExcerpt = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin-top: 10px;
`;

export const PostItemLink = styled.a`
  color: #2f3459;
  text-decoration: none;
  transition: color 0.5s;
  font-size: 1.6rem;
  font-weight: 700;

  &:hover {
    color: #1fa1f2;
  }
`;

export const PostItemCategory = styled.span<ItemProps>`
  padding: 2px 4px;
  background-color: ${props => props.backgroundColor};
  color: #2f3459;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.6rem;
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
  }
`;

export const PostItemKeywords = styled.div`
  display: flex;

  span {
    border: 1px #2f3459 solid;
    border-radius: 4px;
    font-size: 0.6rem;
    color: #2f3459;
    margin: 10px 10px 0 0;
    padding: 2px 4px;

    a {
      text-decoration: none;
      color: #2f3459;

      &:hover {
        color: #1fa1f2;
      }
    }
  }
`;
