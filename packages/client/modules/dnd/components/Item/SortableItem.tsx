import { useSortable } from '@dnd-kit/sortable';
import { SortableItemProps } from 'modules/dnd/components/Item/Item.types';
import { useMountStatus } from 'modules/dnd/utils/useMountStatus';
import { Item } from './Item';

export const SortableItem = ({
  disabled,
  id,
  index,
  value,
  renderItem,
  style,
  containerId,
  getIndex,
}: SortableItemProps) => {
  const {
    setNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={value}
      dragging={isDragging}
      sorting={isSorting}
      index={index}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  );
};
