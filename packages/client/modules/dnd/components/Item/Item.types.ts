import { DraggableSyntheticListeners } from '@dnd-kit/core';
import { SortingStrategy } from '@dnd-kit/sortable';
import type { Transform } from '@dnd-kit/utilities';
import { Plant } from 'modules/plants/utils/PlantData';

export interface SortableItemProps {
  containerId: string;
  id: string;
  index: number;
  value: Plant;
  disabled?: boolean;
  style(args: any): React.CSSProperties;
  getIndex(id: string): number;
  renderItem(): React.ReactElement;
}

export interface ItemProps {
  handle?: boolean;
  dragOverlay?: boolean;
  disabled?: boolean;
  dragging?: boolean;
  height?: number;
  index?: number;
  value: Plant;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  ref: React.Ref<HTMLElement>;

  onRemove?(): void;
  renderItem?(args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform: ItemProps['transform'];
    transition: ItemProps['transition'];
    value: ItemProps['value'];
  }): React.ReactElement;
}

export interface RenderingItem {
  dragging?: boolean;
  dragOverlay?: boolean;
  disabled?: boolean;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  value?: React.ReactNode;
}
