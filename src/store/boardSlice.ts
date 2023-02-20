import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DraggableLocation } from "react-beautiful-dnd";

export interface Board {
  columns: ColumnProps[];
}

export interface ColumnProps {
  columnName: string;
  taskList: TaskProps[];
}

export interface TaskProps {
  id: number;
  name: string;
  des: string;
}

export interface Locations {
  source: DraggableLocation;
  destination: DraggableLocation;
}

const arr = [
  {
    columnName: "Todo",
    taskList: [
      {
        id: 1,
        name: "Something-1",
        des: "test-1",
      },
      {
        id: 2,
        name: "Something-2",
        des: "test-2",
      },
      {
        id: 3,
        name: "Something-3",
        des: "test-3",
      },
      {
        id: 4,
        name: "Something-4",
        des: "test-4",
      },
    ],
  },
  {
    columnName: "Progress",
    taskList: [
      {
        id: 5,
        name: "Something-5",
        des: "test-5",
      },
      {
        id: 6,
        name: "Something-6",
        des: "test-6",
      },
    ],
  },
  {
    columnName: "Done",
    taskList: [],
  },
];

const initialState: Board = {
  columns: arr,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    update(state, { payload }: PayloadAction<Locations>) {
      const { source, destination } = payload;

      let task = state.columns.filter(
        (e) => e.columnName === source.droppableId
      )[0].taskList[source.index];

      const newColumns = state.columns
        .map((e) => {
          if (e.columnName === source.droppableId) {
            e.taskList.splice(source.index, 1);
          }
          return e;
        })
        .map((e) => {
          if (e.columnName === destination.droppableId) {
            e.taskList.splice(destination.index, 0, task);
          }
          return e;
        });

      state.columns = newColumns;
    },
  },
});

export const { update } = boardSlice.actions;

export default boardSlice.reducer;
