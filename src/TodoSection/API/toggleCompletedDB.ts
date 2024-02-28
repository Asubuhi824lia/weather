import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleTodoCompleted } from "../store/todoSlice";
import { apiProps } from "./apiProps";
import { Todo } from "../pages/components/TodoList/TodoItem";

const toggleCompletedDB = createAsyncThunk(
  "todos/togglecompleted",
  async function ({ id }: apiProps, { rejectWithValue, dispatch, getState }) {
    try {
      const todo = getState().todos.todos.find((todo: Todo) => todo.id === id);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Can`t toggle status. Server Error!");
      }

      dispatch(toggleTodoCompleted({ id }));

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export default toggleCompletedDB;
