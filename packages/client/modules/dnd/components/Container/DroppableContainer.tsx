import { useSortable } from '@dnd-kit/sortable';
import { Container } from './Container';
import {
  AnimateLayoutChanges,
  defaultAnimateLayoutChanges,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { ContainerProps } from 'modules/dnd/components/Container/Container.types';
import { usePlants } from 'modules/plants/utils/usePlants';
import { useEffect } from 'react';

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

export const DroppableContainer = ({
  children,
  columns,
  id,
  items,
  style,
  ...props
}: ContainerProps & {
  id: string;
  items: Object[];
}) => {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: {
      type: 'container',
    },
    animateLayoutChanges,
  });

  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== 'container') ||
      items.includes(over.id)
    : false;


  return (
    <Container
      ref={setNodeRef}
      style={{
        ...style,
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0 : undefined,
      }}
      hover={isOverContainer}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      columns={columns}
      id={id}
      {...props}
    >
      {children}
    </Container>
  );
};
