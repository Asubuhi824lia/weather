import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./pages/Counter/Counter";

function CounterApp() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default CounterApp;
