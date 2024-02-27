import s from "./Todo.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "../store/todoSlice";
import { todoAppSelector } from "../hook/store";
import { AsyncStatus } from "../API/fetchTodos";

function Todo() {
  const [text, setText] = useState("");
  const { status, error } = todoAppSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <article className={s.TodoApp}>
      <InputField text={text} setText={setText} handleSubmit={handleSubmit} />
      {status === AsyncStatus.PENDING && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList className={status !== AsyncStatus.FULLFILLED && s.hidden} />
    </article>
  );
}

export default Todo;
