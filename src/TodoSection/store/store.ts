import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type TodoDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
