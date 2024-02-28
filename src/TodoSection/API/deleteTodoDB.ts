import { createAsyncThunk } from "@reduxjs/toolkit";
import { delTodo } from "../store/todoSlice";
import { apiProps } from "./apiProps";

const deleteTodoDB = createAsyncThunk(
  "todos/deleteTodo",
  async function ({ id }: apiProps, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Can`t delete task. Server Error!");
      }

      dispatch(delTodo({ id }));

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export default deleteTodoDB;
