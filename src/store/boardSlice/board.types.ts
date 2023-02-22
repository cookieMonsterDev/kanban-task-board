import { DraggableLocation } from "react-beautiful-dnd";

export interface BoardState {
  columns: ColumnState[];
}

export interface ColumnState {
  columnName: string;
  taskList: TaskState[];
}

export interface TaskState {
  id: string;
  title: string;
  content: string;
}

export interface Locations {
  source: DraggableLocation;
  destination: DraggableLocation;
}