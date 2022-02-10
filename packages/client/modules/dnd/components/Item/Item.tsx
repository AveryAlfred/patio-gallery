import React, { useEffect } from 'react';
import type { Transform } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { ItemProps } from 'modules/dnd/components/Item/Item.types';
import { Card } from 'modules/dnd/components/Card/Card';
import * as s from './Item.styled';

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, ItemProps>(
    (
      {
        children,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        height,
        index,
        listeners,
        onRemove,
        renderItem,
        sorting,
        style,
        transition,
        transform,
        value,
        handle = true,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }
        document.body.style.cursor = 'grabbing';
        return () => {
          document.body.style.cursor = '';
        };
      }, [dragOverlay]);

      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          fadeIn: Boolean(fadeIn),
          index,
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        })
      ) : (
        <s.StyledItemWrap
          style={
            {
              transition,
              '--translate-x': transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              '--translate-y': transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              '--scale-x': transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              '--scale-y': transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              '--index': index,
            } as React.CSSProperties
          }
          fadeIn={fadeIn}
          sorting={sorting}
          dragOverlay={dragOverlay}
          ref={ref}
        >
          <s.StyledListItem
            dragging={dragging}
            dragOverlay={dragOverlay}
            disabled
            fadeIn
            value
            style={style}
            {...listeners}
            {...props}
          >
            <Card value={value} />
          </s.StyledListItem>
        </s.StyledItemWrap>
      );
    }
  )
);
