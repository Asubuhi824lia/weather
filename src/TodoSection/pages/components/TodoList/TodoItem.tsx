import { deleteTodo } from "../../../API/deleteTodo";
import { todoAppDispatch } from "../../../hook/store";
import s from "./TodoList.module.scss";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  const { id, title, completed } = todo;

  const dispatch = todoAppDispatch();

  return (
    <li className={s.todo}>
      <label>
        <input
          type="checkbox"
          className={s.completed}
          checked={completed}
          onChange={() => {}}
        />
        <span>{`${title}`}</span>
      </label>
      <span className={s.delete} onClick={() => dispatch(deleteTodo({ id }))}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
