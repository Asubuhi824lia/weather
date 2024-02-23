import s from "./TodoApp.module.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Todo from "./pages/Todo";

function TodoApp() {
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
        <Todo />
      </div>
    </Provider>
  );
}

export default TodoApp;
