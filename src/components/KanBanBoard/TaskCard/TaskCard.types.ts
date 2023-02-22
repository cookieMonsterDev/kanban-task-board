import { TaskState } from "../../../store/boardSlice/board.types";

export interface TaskProps {
  index: number;
  columnName: string;
  task: TaskState;
}