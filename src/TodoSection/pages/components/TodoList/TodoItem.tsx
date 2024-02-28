import { deleteTodoDB } from "../../../API/deleteTodoDB";
import { toggleCompletedDB } from "../../../API/toggleCompletedDB";
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
          onChange={() => dispatch(toggleCompletedDB({ id }))}
        />
        <span>{`${title}`}</span>
      </label>
      <span className={s.delete} onClick={() => dispatch(deleteTodoDB({ id }))}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
