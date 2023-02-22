import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  BoardState,
  TaskLocation,
  TaskState,
  UpdateLocations,
} from "./board.types";

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
  ],
  currentTask: {
    id: "",
    title: "",
    content: "",
    columnName: "",
  },
  dialogWindow: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    update(state, { payload }: PayloadAction<UpdateLocations>) {
      const { source, destination } = payload;

      let task = state.columns.find((e) => e.columnName === source.droppableId)!
        .taskList[source.index];

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
    addTask(state, { payload }: PayloadAction<TaskState>) {
      state.columns.map((e) => {
        if (e.columnName === "Todo") {
          e.taskList.push({
            ...payload,
          });
        }
        return e;
      });

      state.dialogWindow = false;
    },
    deleteTask(state, { payload }: PayloadAction<TaskLocation>) {
      const { columnName, taskId } = payload;
      const newColumns = current(state).columns.map((e) => {
        if (e.columnName === columnName) {
          const newTaskList = e.taskList.filter((e) => e.id !== taskId);
          return { ...e, taskList: newTaskList };
        }
        return e;
      });

      state.columns = newColumns;
      state.dialogWindow = false;
    },
    openWindowCreate(state) {
      state.currentTask = { id: "", title: "", content: "", columnName: "" };
      state.dialogWindow = true;
    },
    openWindowUpdate(state, { payload }: PayloadAction<TaskLocation>) {
      const { columnName, taskId } = payload;
      const task = current(state)
        .columns.find((e) => e.columnName === columnName)!
        .taskList.find((e) => e.id === taskId)!;

      state.currentTask = { ...task, columnName };
      state.dialogWindow = true;
    },
    closeWindow(state) {
      state.dialogWindow = false;
    },
  },
});

export const {
  update,
  addTask,
  deleteTask,
  openWindowCreate,
  openWindowUpdate,
  closeWindow,
} = boardSlice.actions;

export default boardSlice.reducer;
