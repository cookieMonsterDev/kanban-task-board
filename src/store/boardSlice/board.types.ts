import { DraggableLocation } from "react-beautiful-dnd";

export interface BoardState {
  columns: ColumnState[];
  currentTask: CurrentTask;
  dialogWindow: boolean;
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

export interface UpdateLocations {
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface CurrentTask extends TaskState {
  columnName: string
}

////

export interface UpdateLocations {
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface TaskLocation {
  columnName: string;
  taskId: string;
}

export interface UpdateTask {
  task: TaskState;
  location: TaskLocation;
}