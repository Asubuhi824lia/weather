import { todoAppDispatch, todoAppSelector } from "../../../hook/store";
import TodoItem, { Todo } from "./TodoItem";
import { delTodo, toggleTodoComplited } from "../../../store/todoSlice";

export default function TodoList() {
  const todos = todoAppSelector((state) => state.todos.todos);
  const dispatch = todoAppDispatch();

  return (
    <ul>
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
