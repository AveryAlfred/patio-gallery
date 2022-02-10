import { motion } from 'framer-motion';
import { ContainerProps } from 'modules/dnd/components/Container/Container.types';
import styled, { css } from 'styled-components';

export const StyledWrap = styled.div<ContainerProps>`
  background: ${(props) => props.theme.palette.backdrop.container};
  display: grid;
  overflow: hidden;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0rem;
  }

  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 5px;
  padding: 0.25rem;

  ${({ hover }) =>
    hover &&
    css`
      outline: 1px solid rgba(186, 182, 182, 0.975);
    `};
`;

export const StyledHeader = styled.div`
  display: flex;
`;

export const StyledLabel = styled.div`
  cursor: pointer;

  ${({ toggle }) =>
    toggle &&
    css`
      color: #cecbcb;
    `}
`;
export const StyledHandle = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: flex-start;
  width: 100%;
  color: #acacacac;
  border: none;
  background-color: transparent;
`;
export const StyledButton = styled.button`
  color: #747070ac;
  border: none;
  background-color: transparent;
  padding: 0rem 0.35rem;

  white-space: nowrap;
  font-size: 0.5rem;
  font-family: inherit;
  text-decoration: 0.51px underline;

  cursor: pointer;

  :hover {
    outline-color: #ddd8d8ac;
  }
`;

export const StyledShortBlock = styled(motion.div)`
  height: 0rem;
`;

export const StyledMinItems = styled.div`
  display: grid;
  padding-top: 0.3rem;
  place-items: start;
  pointer-events: none;
`;

export const StyledLongBlock = styled(motion.div)`
  min-height: 0.1rem;
  display: flex;
`;

export const StyledMaxItems = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, 110px);
  gap: 0.35rem;
  padding: 0.3rem 0.1rem;
  overflow: hidden;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0rem;
  }
`;
