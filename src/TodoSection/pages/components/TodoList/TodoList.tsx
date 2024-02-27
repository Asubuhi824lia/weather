import { useEffect } from "react";
import { todoAppDispatch, todoAppSelector } from "../../../hook/store";
import TodoItem, { Todo } from "./TodoItem";
import { delTodo, toggleTodoComplited } from "../../../store/todoSlice";
import { fetchTodos } from "../../../API/fetchTodos";

export default function TodoList(props: any) {
  const todos = todoAppSelector((state) => state.todos.todos);
  const dispatch = todoAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul {...props}>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          delTodo={() => dispatch(delTodo({ id: todo.id }))}
          toggleCheck={() => dispatch(toggleTodoComplited({ id: todo.id }))}
        />
      ))}
    </ul>
  );
}
