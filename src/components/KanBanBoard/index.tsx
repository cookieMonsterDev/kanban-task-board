import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { update } from "../../store/boardSlice/boardSlice";
import TextEditor from "../TextEditor";
import BoardColumn from "./BoardColumn";
import { BlurOverlay, BoardContainer } from "./KanBanBoard.styled";

const KanBanBoard = () => {
  const { columns, dialogWindow } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }

    dispatch(update({ source, destination }));
  };

  return (
    <>
      <BlurOverlay visible={dialogWindow}>
        <TextEditor />
      </BlurOverlay>
      <BoardContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((e) => {
            return <BoardColumn key={e.columnName} {...e} />;
          })}
        </DragDropContext>
      </BoardContainer>
    </>
  );
};

export default KanBanBoard;
