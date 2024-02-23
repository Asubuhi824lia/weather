import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 0,
        text: "Открыть список дел TODO",
        complited: true,
      },
      {
        id: 1,
        text: "Устранить эффект белого листа",
        complited: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.text.trim().length) {
        state.todos.push({
          id: new Date().getTime(),
          text: action.payload.text,
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
});

export default todoSlice.reducer;

export const { addTodo, delTodo, toggleTodoComplited } = todoSlice.actions;
