import styled from 'styled-components';
import media from 'styled-media-query';

export const AboutWrapper = styled.div`
  display: flex;
  color: #2f3459;
  flex-direction: column;
  padding: 20px 20px 20px 50px;

  ${media.lessThan('large')`
  padding: 20px 20px 20px 10px;
  `}

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 0 0 15px 0;

    ${media.lessThan('large')`
      font-size: 2rem;
    `}
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.2rem;

  ${media.lessThan('large')`
      font-size: 1rem;
      font-weight: 400;
    `}

  a {
    color: #2f3459;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.5s, text-decoration 1s;

    &:hover {
      color: #1fa1f2;
      text-decoration: underline;
    }
  }
`;

export const AboutSkills = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const AboutIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  margin-top: 10px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      display: none;
    }

    &:hover {
      svg,
      img {
        color: #1fa1f2;
        animation: pulse 2s ease-in-out 0s;
      }

      p {
        background: #3d423f;
        padding: 3px 3px;
        border-radius: 5px;
        color: #fff;
        font-size: 0.6rem;
        margin-top: 60px;
        display: block;
        position: absolute;
      }
    }

    svg,
    img {
      color: #2f3459;
      width: 32px;
      height: 32px;
      margin-right: 10px 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;
