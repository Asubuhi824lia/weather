import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncStatus, fetchTodos } from "../API/fetchTodos";
import { deleteTodoDB } from "../API/deleteTodoDB";
import { Todo } from "../pages/components/TodoList/TodoItem";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 0,
        title: "Открыть список дел TODO",
        completed: true,
      },
      {
        id: 1,
        title: "Устранить эффект белого листа",
        completed: true,
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
          completed: false,
        });
      }
    },
    delTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted: (state, action) => {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggleTodo) toggleTodo.completed = !toggleTodo.completed;
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
      .addCase(fetchTodos.rejected, setError);
    builder.addCase(deleteTodoDB.rejected, setError);
  },
});

type TodoState = {
  todos: Array<Todo>;
  status: string;
  error: any;
};

const setError = (state: TodoState, action: PayloadAction<any>) => {
  state.status = AsyncStatus.REJECTED;
  state.error = action.payload;
};

export default todoSlice.reducer;
export const { addTodo, delTodo, toggleTodoCompleted } = todoSlice.actions;
