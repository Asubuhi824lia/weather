import s from "./Todo.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "../store/todoSlice";

function Todo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <article className={s.TodoApp}>
      <InputField text={text} setText={setText} handleSubmit={handleSubmit} />
      <TodoList />
    </article>
  );
}

export default Todo;
