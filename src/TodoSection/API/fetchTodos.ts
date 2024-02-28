import { createAsyncThunk } from "@reduxjs/toolkit";

export enum AsyncStatus {
  PENDING = "loading",
  FULLFILLED = "idle",
  REJECTED = "failed",
}

const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchTodos;
