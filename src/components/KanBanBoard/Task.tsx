import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { TaskProps } from "../../store/boardSlice";

interface TaskNewProps {
  task: TaskProps;
  index: number;
}

const Conrtainer = styled.li`
  width: 100%;
  height: 50px;
  background-color: #63e6e6;
`;

const Task = ({ task, index }: TaskNewProps) => {
  return (
    <Draggable draggableId={task.name} index={index}>
      {(provided) => (
        <Conrtainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.name}
        </Conrtainer>
      )}
    </Draggable>
  );
};

export default Task;
