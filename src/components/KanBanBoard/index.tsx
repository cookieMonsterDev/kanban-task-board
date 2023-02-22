import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { update } from "../../store/boardSlice/boardSlice";
import TaskEditor from "../TaskEditor";
import BoardColumn from "./BoardColumn";
import { BlurOverlay, BoardContainer } from "./KanBanBoard.styled";

import { Routes, Route } from "react-router";

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
    <>
      <BoardContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((e) => {
            return <BoardColumn key={e.columnName} {...e} />;
          })}
        </DragDropContext>
      </BoardContainer>
      <Routes>
        <Route
          path="/:columnName/:id"
          element={
            <BlurOverlay>
              <TaskEditor />
            </BlurOverlay>
          }
        />
      </Routes>
    </>
  );
};

export default KanBanBoard;
