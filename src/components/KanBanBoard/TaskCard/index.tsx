import { Draggable } from "react-beautiful-dnd";
import { useAppDispatch } from "../../../hooks/storeHooks";
import {
  deleteTask,
  openWindowUpdate,
} from "../../../store/boardSlice/boardSlice";
import { Conrtainer, Title, ToolBar } from "./TaskCard.styled";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskProps } from "./TaskCard.types";

const TaskCard = ({ index, columnName, task }: TaskProps) => {
  const dispatch = useAppDispatch();

  const handleOpen = () =>
    dispatch(openWindowUpdate({ columnName, taskId: task.id }));

  const handleDelete = () =>
    dispatch(deleteTask({ columnName, taskId: task.id }));

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Conrtainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Title>{task.title}</Title>
            <ToolBar>
              <BorderColorIcon onClick={handleOpen} />
              <DeleteIcon onClick={handleDelete} />
            </ToolBar>
          </Conrtainer>
        )}
      </Draggable>
    </>
  );
};

export default TaskCard;
