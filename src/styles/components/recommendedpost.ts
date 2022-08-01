import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type Props = {
  type: 'next' | 'previous';
};

export const RecommendedPostWrapper = styled.section`
  display: flex;
  align-items: center;

  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  min-height: 150px;
`;

export const RecommendedPostLink = styled.a<Props>`
  color: #2f3459;
  text-decoration: none;
  transition: color 0.5s;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 3rem;
  width: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #1fa1f2;
  }

  ${media.lessThan('large')`
    font-size: 1rem;
  `}

  ${props =>
    props.type === 'next'
      ? css`
          ${media.lessThan('large')`
            justify-content: center
          `}
          justify-content: flex-end;
          span {
            margin-left: 0.5rem;
          }
        `
      : css`
          ${media.lessThan('large')`
            justify-content: center
          `}
          justify-content: flex-start;
          span {
            margin-right: 0.5rem;
          }
        `}
`;
