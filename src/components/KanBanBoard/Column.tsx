import styled from "@emotion/styled";
import { ColumnProps } from "../../store/boardSlice";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.ul`
  width: 200px;
  min-height: 500px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
`;

const Column = ({ columnName, taskList }: ColumnProps) => {
  return (
    <Droppable droppableId={columnName}>
      {(provided) => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          {columnName}
          {taskList.map((e, i) => (
            <Task key={e.id} task={e} index={i} />
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default Column;
