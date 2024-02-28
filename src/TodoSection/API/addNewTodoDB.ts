import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo } from "../store/todoSlice";

interface Props {
  title: string;
}

const addNewTodoDB = createAsyncThunk(
  "todos/addNewTodoDB",
  async function ({ title }: Props, { rejectWithValue, dispatch }) {
    try {
      const newTodo = {
        userId: 101,
        title: title,
        completed: false,
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(newTodo),
        }
      );

      if (!response.ok) {
        throw new Error("Can`t add a new task. Server Error!");
      }

      const data = await response.json();
      dispatch(addTodo(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export default addNewTodoDB;
