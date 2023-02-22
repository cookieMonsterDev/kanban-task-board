import { Droppable } from "react-beautiful-dnd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskCard from "../TaskCard";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { ColumnProps } from "./BoardColumn.types";
import {
  AddButtonContainer,
  ColumnContainer,
  Label,
  TaskList,
} from "./BoardColumn.styled";
import { openWindowCreate } from "../../../store/boardSlice/boardSlice";

const BoardColumn = ({ columnName, taskList }: ColumnProps) => {
  const dispatch = useAppDispatch();
  return (
    <Droppable droppableId={columnName}>
      {(provided) => (
        <ColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
          <Label title={columnName}>{columnName}</Label>
          <TaskList>
            {taskList.map((e, i) => (
              <TaskCard key={e.id} task={e} index={i} columnName={columnName} />
            ))}
            {provided.placeholder}
          </TaskList>
          {columnName === "Todo" && (
            <AddButtonContainer>
              <AddCircleOutlineIcon
                onClick={() => dispatch(openWindowCreate())}
              />
            </AddButtonContainer>
          )}
        </ColumnContainer>
      )}
    </Droppable>
  );
};

export default BoardColumn;
