import { useDnd } from 'modules/dnd/utils/useDnd';
import { Item } from './Item';

export const RenderSortableItemDragOverlay = ({
  id,
  getItemStyles,
  renderItem,
}: {
  id: string;
  getItemStyles: Function;
  renderItem(): React.ReactElement;
}) => {
  const { items, getIndex, findContainer } = useDnd();

  const container = findContainer(id)!;

  const value = items[container].filter((item) => item.id === id)[0];

  return (
    <Item
      value={value}
      // handle={handle}
      style={getItemStyles({
        containerId: findContainer(id) as string,
        overIndex: -1,
        index: getIndex(id),
        value: id,
        isSorting: true,
        isDragging: true,
        isDragOverlay: true,
      })}
      // color={getColor(id)}
      renderItem={renderItem}
      dragOverlay
    />
  );
};
