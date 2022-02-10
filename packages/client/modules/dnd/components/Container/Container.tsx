import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import * as s from './Container.styled';

import { ContainerProps } from 'modules/dnd/components/Container/Container.types';
import { usePlants } from 'modules/plants/utils/usePlants';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      id,
      ...props
    }: ContainerProps,
    ref
  ) => {
    const [containerTogl, setContainerTogl] = useState(false);
    const [menuTogl, setMenuTogl] = useState(false);

    const handleContainerTogl = () =>
      setContainerTogl((togl) => (togl ? false : true));
    const handleMenuTogl = () => setMenuTogl((togl) => (togl ? false : true));

    const { items, addNewPlant } = usePlants();

    return (
      <s.StyledWrap
        {...props}
        ref={ref}
        style={
          {
            ...style,
            '--columns': columns,
          } as React.CSSProperties
        }
      >
        <s.StyledHeader onContextMenu={handleMenuTogl}>
          <s.StyledLabel onClick={handleContainerTogl}>{label}</s.StyledLabel>
          <s.StyledHandle {...handleProps}>
            {menuTogl && (
              <div data-no-dnd="true">
                <s.StyledButton onClick={() => addNewPlant(label)}>
                  Add Plant
                </s.StyledButton>
                <s.StyledButton> Rename </s.StyledButton>
                <s.StyledButton> Delete </s.StyledButton>
              </div>
            )}

            {!menuTogl && <div></div>}
          </s.StyledHandle>
        </s.StyledHeader>

        {containerTogl && (
          <>
            <s.StyledShortBlock>
              <s.StyledMinItems>{children}</s.StyledMinItems>
            </s.StyledShortBlock>
          </>
        )}

        {!containerTogl && (
          <>
            <s.StyledLongBlock>
              <s.StyledMaxItems>{children}</s.StyledMaxItems>
            </s.StyledLongBlock>
          </>
        )}
      </s.StyledWrap>
    );
  }
);
