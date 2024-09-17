import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todo";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
