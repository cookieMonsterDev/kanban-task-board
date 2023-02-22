import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardState, Locations } from "./board.types";

const initialState: BoardState = {
  columns: [
    {
      columnName: "Todo",
      taskList: [
        {
          id: crypto.randomUUID(),
          title: "Something-1",
          content: "test-1",
        },
        {
          id: crypto.randomUUID(),
          title: "Something-2",
          content: "test-2",
        },
        {
          id: crypto.randomUUID(),
          title: "Something-3",
          content: "test-3",
        },
        {
          id: crypto.randomUUID(),
          title: "Something-4",
          content: "test-4",
        },
      ],
    },
    {
      columnName: "Progress",
      taskList: [
        {
          id: crypto.randomUUID(),
          title: "Something-5",
          content: "test-5",
        },
        {
          id: crypto.randomUUID(),
          title: "Something-6",
          content: "test-6",
        },
      ],
    },
    {
      columnName: "Done",
      taskList: [],
    },
  ]
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
    addTask(state) {
      state.columns.map((e) => {
        if (e.columnName === "Todo") {
          e.taskList.push({
            id: crypto.randomUUID(),
            title: "Something-test",
            content: "test-test",
          });
        }
        return e;
      });
    }
  },
});

export const { update, addTask } = boardSlice.actions;

export default boardSlice.reducer;
