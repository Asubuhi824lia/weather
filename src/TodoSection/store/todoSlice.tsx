import { createSlice } from "@reduxjs/toolkit";
import { AsyncStatus, fetchTodos } from "../API/fetchTodos";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 0,
        title: "Открыть список дел TODO",
        complited: true,
      },
      {
        id: 1,
        title: "Устранить эффект белого листа",
        complited: true,
      },
    ],
    status: AsyncStatus.FULLFILLED,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.title.trim().length) {
        state.todos.push({
          id: new Date().getTime(),
          title: action.payload.title,
          complited: false,
        });
      }
    },
    delTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplited: (state, action) => {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggleTodo) toggleTodo.complited = !toggleTodo.complited;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = AsyncStatus.PENDING;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = AsyncStatus.FULLFILLED;
        state.error = null;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = AsyncStatus.REJECTED;
        state.error = action.payload;
      });
  },
});
export default todoSlice.reducer;
export const { addTodo, delTodo, toggleTodoComplited } = todoSlice.actions;
