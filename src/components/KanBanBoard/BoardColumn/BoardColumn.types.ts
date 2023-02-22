import { TaskState } from "../../../store/boardSlice/board.types";

export interface ColumnProps {
  columnName: string;
  taskList: TaskState[];
}