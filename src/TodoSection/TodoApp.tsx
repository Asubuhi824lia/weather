import s from "./TodoApp.module.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Todos from "./pages/Todos";

function TodoApp() {
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
        <Todos />
      </div>
    </Provider>
  );
}

export default TodoApp;
