import styled from 'styled-components';

export const StyledWrap = styled.div`
  /* background: url('./assets/Back.svg'); */
  background-color: ${(props) => props.theme.palette.backdrop.page};

  display: grid;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;
  width: 100vw;

  user-select: none !important;
  overflow-y: scroll;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0rem;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  place-self: end;
  padding-bottom: 2rem;
  font-size: clamp(0.7rem, 1vw + 1rem, 0.9rem);
`;

export const StyledTextLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1rem;
`;
export const StyledAbout = styled.p`
  cursor: pointer;
  color: #4b4a4a8b;
  padding: 0.15rem;

  /* &::before {
  content: '';
  background: #e4e4e4;
  width: 0;
  height: 1.5px;
  display: flex;
  transition: all 1000ms ease-out;
}
:hover::before {
  width: 7rem;
} */
`;

export const StyledLogin = styled.p`
  cursor: pointer;

  color: #4b4a4a8b;
  padding: 0.15rem;

  /* &::before {
  content: '';
  background: #e4e4e4;
  width: 0;
  height: 1.5px;

  display: flex;

  transition: all 500ms ease;
}
:hover::before {
  width: 2.5rem;
} */
`;

export const StyledMain = styled.div`
  background-color: ${(props) => props.theme.palette.backdrop.page};

  /* height: 80vh; */

  place-self: start;

  @media (min-width: 10px) {
    width: clamp(250px, 280px, 440px);
  }
  @media (min-width: 425px) {
    width: 600px;
  }

  /* outline: 1px solid #acacac; */

  cursor: cursor;
  padding: 0.5rem;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0rem;
  }
`;
