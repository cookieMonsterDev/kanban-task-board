import styled from "@emotion/styled";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { update } from "../../store/boardSlice";
import Column from "./Column";

const Container = styled.div`
  padding: 30px;
  display: flex;
  gap: 10px;
`;

const KanBanBoard = () => {
  const { columns } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }

    dispatch(update({ source, destination }));
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((e) => (
          <Column key={e.columnName} {...e} />
        ))}
      </DragDropContext>
    </Container>
  );
};

export default KanBanBoard;
