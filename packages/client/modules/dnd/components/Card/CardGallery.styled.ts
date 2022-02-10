import styled from 'styled-components';

export const StyledWrap = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90%;
`;
export const StyledNote = styled.div`
  padding-right: 0.25rem;
`;
export const StyledPhoto = styled.div``;
export const StyledDate = styled.div`
  padding-right: 0.5rem;
`;
export const StyledEntryZone = styled.div`
  overflow-y: scroll;
  margin-top: 0.5rem;
  height: 80px;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0rem;
  }
`;
export const StyledEntry = styled.div`
  display: flex;
`;
export const StyledNoteRecord = styled.div``;

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
