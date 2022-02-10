import styled from 'styled-components';

export const StyledLabelBlock = styled.div`
  display: grid;
`;

export const StyledNameButton = styled.button`
  height: 14px;
  width: 16px;

  border: 1px solid #9797978f;
  border-radius: 2px;

  font-size: 0.55rem;

  color: #616161dc;
  color: rgba(105, 104, 104, 0.748);

  position: absolute;
  top: 0.7rem;
  right: 0.75rem;
  place-self: center;

  :hover {
    color: rgb(106, 104, 104);
    border-color: rgb(106, 104, 104);
    cursor: pointer;
  }
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
