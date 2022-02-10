import styled from "styled-components";

export const StyledNewImages = styled.div`
margin-top: 5px;
padding: 0.15rem 0;
border-radius: 0.25rem;
background-color: ${({ theme }) => theme.palette.outline.accent};
height: 25px;
display: flex;

img {
  max-width: 100%;
  height: 19px;
  padding: 0 1px;
}
`;

export const StyledImageInput = styled.input`
padding: 0.5rem 0;
display: none;
`;

export const StyledActionBtns = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;

position: relative;
top: 0.25rem;

svg:hover {
  cursor: pointer;
}
`;

export const StyledDivisor = styled.div`
font-size: 0.6rem;
padding: 0 0.05rem;
`;

export const StyledPlusButton = styled.button`
  height: 14px;
  width: 16px;

  border: 1px solid #9797978f;
  border-radius: 2px;
  font-size: 0.55rem;

  color: #616161dc;
  color: rgba(105, 104, 104, 0.748);

  left: 0.75rem;
  margin-left: .25rem;
  place-self: center;

  :hover {
    color: rgb(106, 104, 104);
    border-color: rgb(106, 104, 104);
    cursor: pointer;
  }
`