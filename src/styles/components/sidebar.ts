import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #dedede;
  background: #3d423f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    flex-direction: row;
  `}
`;
