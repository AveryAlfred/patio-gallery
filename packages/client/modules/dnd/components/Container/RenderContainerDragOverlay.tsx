import { Container } from './Container';
import { Item } from '../Item/Item';
import { Plant } from 'modules/plants/utils/PlantData';
import { useDnd } from 'modules/dnd/utils/useDnd';

export const RenderContainerDragOverlay = ({
  columns,
  containerId,
  getItemStyles,
  renderItem,
}: {
  columns: number;
  containerId: string;
  getItemStyles: Function;
  renderItem(): React.ReactElement;
}) => {
  const { items, getIndex } = useDnd();

  return (
    <Container
      columns={columns}
      style={{
        height: '100%',
      }}
      shadow
      label={containerId}
      id={containerId}
    >
      {items[containerId].map((item: Plant, index: number) => (
        <Item
          key={index}
          value={item}
          style={getItemStyles({
            containerId,
            overIndex: -1,
            index: index,
            value: item,
            isDragging: false,
            isSorting: false,
            isDragOverlay: false,
          })}
          renderItem={renderItem}
        />
      ))}
    </Container>
  );
};
