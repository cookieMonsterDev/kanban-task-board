import { Draggable } from "react-beautiful-dnd";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { openWindowUpdate } from "../../../store/boardSlice/boardSlice";
import { Conrtainer, Title } from "./TaskCard.styled";
import { TaskProps } from "./TaskCard.types";

const TaskCard = ({ index, columnName, task }: TaskProps) => {
  const dispatch = useAppDispatch();

  const handleOpen = () =>
    dispatch(openWindowUpdate({ columnName, taskId: task.id }));

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Conrtainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={handleOpen}
          >
            <Title>{task.title}</Title>
          </Conrtainer>
        )}
      </Draggable>
    </>
  );
};

export default TaskCard;
