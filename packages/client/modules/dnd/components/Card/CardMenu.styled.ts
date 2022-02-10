import styled from 'styled-components';

export const StyledTitle = styled.div`
  position: absolute;
  display: grid;
  place-self: center;

  background-color: #d6d4d4;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 2rem;
`;

export const StyledWrap = styled.div`
  display: grid;
  padding: 0.5rem;
`;

export const StyledButton = styled.button`
  font-size: 0.65rem;
  font-family: inherit;
  border: none;
  background-color: transparent;

  :hover {
    background-color: ${({ theme }) => theme.palette.outline.accent};
  }
`;
