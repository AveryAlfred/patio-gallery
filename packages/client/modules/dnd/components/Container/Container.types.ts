import { CancelDrop, Modifiers, UniqueIdentifier } from '@dnd-kit/core';
import { SortingStrategy } from '@dnd-kit/sortable';

export interface MultipleContainerProps {
  adjustScale?: boolean;
  cancelDrop?: CancelDrop;
  columns?: number;
  items?: any;
  modifiers?: Modifiers;
  strategy?: SortingStrategy;
  renderItem?: any;
  vertical?: boolean;
  itemCount?: number;
  containerStyle?: React.CSSProperties;
  getItemStyles?(args: {
    value: UniqueIdentifier;
    index: number;
    overIndex: number;
    isDragging: boolean;
    containerId: UniqueIdentifier;
    isSorting: boolean;
    isDragOverlay: boolean;
  }): React.CSSProperties;
}

export interface ContainerProps {
  children: React.ReactNode;
  columns?: number;
  id: string;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  onClick?(): void;
  onRemove?(): void;
}
