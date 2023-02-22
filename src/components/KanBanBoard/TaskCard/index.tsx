import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { TaskState } from "../../../store/boardSlice/board.types";

interface TaskNewProps {
  columnName: string;
  task: TaskState;
  index: number;
}

const Conrtainer = styled.li`
  width: 100%;
  height: 50px;
  background-color: #63e6e6;
  margin-bottom: 5px;
`;

const TaskCard = ({ task, index, columnName }: TaskNewProps) => {
  return (
    <Link to={`/${columnName}/${task.id}`}>
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Conrtainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.title}
        </Conrtainer>
      )}
    </Draggable>
    </Link>
  );
};

export default TaskCard;