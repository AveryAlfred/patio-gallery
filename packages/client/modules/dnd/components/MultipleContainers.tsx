import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DndContext, DragOverlay, MeasuringStrategy } from '@dnd-kit/core';
import {
  rectSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { RenderContainerDragOverlay } from './Container/RenderContainerDragOverlay';
import { RenderSortableItemDragOverlay } from './Item/RenderSortableItemDragOverlay';

import { DroppableContainer } from './Container/DroppableContainer';
import { SortableItem } from './Item/SortableItem';
import { MultipleContainerProps } from 'modules/dnd/components/Container/Container.types';
import { useDnd } from 'modules/dnd/utils/useDnd';
import { Plant } from 'modules/plants/utils/plants.types';

export const MultipleContainers = ({
  renderItem,
  cancelDrop,
  containerStyle,
  modifiers,
  columns,
  strategy = rectSortingStrategy,
  getItemStyles = () => ({}),
  adjustScale,
}: MultipleContainerProps) => {
  const {
    items,
    containers,
    activeId,
    sensors,
    onDragStart,
    onDragCancel,
    onDragOver,
    onDragEnd,
    collisionDetectionStrategy,
    getIndex,
    recentlyMovedToNewContainer,
    isSortingContainer,
    dropAnimation,
  } = useDnd();

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetectionStrategy}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          },
        }}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        cancelDrop={cancelDrop}
        onDragCancel={onDragCancel}
        modifiers={modifiers}
      >
        <SortableContext
          items={[...containers]}
          strategy={verticalListSortingStrategy}
        >
          {containers.map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              items={items[containerId]}
              label={`${containerId}`}
              columns={columns}
              style={containerStyle}
            >
              <SortableContext items={items[containerId]} strategy={strategy}>
                {items[containerId].map((value: Plant, index: number) => (
                  <SortableItem
                    key={value.id}
                    id={value.id}
                    containerId={containerId}
                    index={index}
                    value={value}
                    getIndex={getIndex}
                    style={getItemStyles}
                    disabled={isSortingContainer}
                    renderItem={renderItem}
                  ></SortableItem>
                ))}
              </SortableContext>
            </DroppableContainer>
          ))}
        </SortableContext>
        {createPortal(
          <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
            {activeId ? (
              containers.includes(activeId) ? (
                <RenderContainerDragOverlay
                  containerId={activeId}
                  getItemStyles={getItemStyles}
                  renderItem={renderItem}
                  columns={columns}
                />
              ) : (
                <RenderSortableItemDragOverlay
                  id={activeId}
                  getItemStyles={getItemStyles}
                  renderItem={renderItem}
                />
              )
            ) : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </>
  );
};
