import { RenderingItem } from 'modules/dnd/components/Item/Item.types';
import styled, { css } from 'styled-components';

export const StyledItemWrap = styled.div<RenderingItem>`
  transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)
    scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));
  transform-origin: 0 0;
  touch-action: manipulation;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${({ fadeIn }) =>
    fadeIn &&
    css`
      animation: fadeIn 500ms ease;
    `};

  ${({ dragOverlay }) =>
    dragOverlay &&
    css`
      --scale: 1.05;
      --box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),
        0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);
      --box-shadow-picked-up: 0 0 0 calc(1px / var(--scale-x, 1))
          rgba(63, 63, 68, 0.05),
        -1px 0 15px 0 rgba(34, 33, 81, 0.01),
        0px 15px 15px 0 rgba(34, 33, 81, 0.25);
      z-index: 999;
    `};
`;

export const StyledListItem = styled.div<RenderingItem>`
  --box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05);
  --box-shadow-picked-up: 0 0 0 calc(1px / var(--scale-x, 1))
      rgba(63, 63, 68, 0.05),
    -1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25);
  -webkit-tap-highlight-color: transparent;

  transform-origin: 50% 50%;
  transform: scale(var(--scale, 1));
  box-shadow: --box-shadow;
  border-radius: 0.25rem;

  @keyframes pop {
    0% {
      transform: scale(1);
      box-shadow: var(--box-shadow);
    }
    100% {
      transform: scale(var(--scale));
      box-shadow: var(--box-shadow-picked-up);
    }
  }

  ${({ dragging, dragOverlay }) =>
    dragging &&
    !dragOverlay &&
    css`
      opacity: var(--dragging-opacity, 0);
      z-index: 0;

      &:focus {
        box-shadow: var(--box-shadow);
      }
    `};

  ${({ dragOverlay }) =>
    dragOverlay &&
    css`
      cursor: inherit;
      animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
      transform: scale(var(--scale));
      box-shadow: var(--box-shadow-picked-up);
      opacity: 1;
    `}
`;
