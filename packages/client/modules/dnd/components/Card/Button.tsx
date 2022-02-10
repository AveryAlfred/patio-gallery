import styled from 'styled-components';

export const Button = ({ onClick, children }) => (
  <StyledWrap onClick={onClick}>{children}</StyledWrap>
);

const StyledWrap = styled.button`
  font-size: 0.4rem;
  letter-spacing: 0.5px;
  place-self: center;
  border: none;
  text-decoration: 0.5px underline;
  background: none;
  color: rgba(105, 104, 104, 0.748);
  z-index: 10;

  :hover {
    text-decoration-color: rgb(106, 104, 104);
    color: rgb(106, 104, 104);
    cursor: pointer;
  }
`;
