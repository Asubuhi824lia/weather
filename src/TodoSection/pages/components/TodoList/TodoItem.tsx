import s from "./TodoList.module.scss";

export interface Todo {
  id: number;
  text: string;
  complited: boolean;
}

type Props = {
  todo: Todo;
  delTodo: React.MouseEventHandler<HTMLButtonElement>;
  toggleCheck: React.ChangeEventHandler<HTMLInputElement>;
};

function TodoItem({ todo, delTodo, toggleCheck }: Props) {
  return (
    <li className={s.todo}>
      <label>
        <input
          type="checkbox"
          className={s.complited}
          checked={todo.complited}
          onChange={toggleCheck}
        />
        <span>{`${todo.title}`}</span>
      </label>
      <span className={s.delete} onClick={delTodo}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
