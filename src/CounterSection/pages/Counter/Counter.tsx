import * as React from "react";
import s from "./Counter.module.scss";
import { useState } from "react";
import {
  decrement,
  increment,
  multiplyByNumber,
  multiplyAsync,
} from "../../store/counterSlice";
import { selectCount } from "../../store/selectors";
import { useCounterDispatch, useCounterSelector } from "../../hook/hooks";

function Counter() {
  const count = useCounterSelector(selectCount);
  const dispatch = useCounterDispatch();
  const [multipleValue, setMultipleValue] = useState("2");

  return (
    <div>
      <div className={s.row}>
        <button
          className={s.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={s.value}>{count}</span>
        <button
          className={s.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={s.row}>
        <input
          className={s.textbox}
          aria-label="Set increment amount"
          value={multipleValue}
          onChange={(e) => setMultipleValue(e.target.value)}
        />
        <button
          className={s.button}
          onClick={() => dispatch(multiplyByNumber(Number(multipleValue) || 0))}
        >
          Multiply by Amount
        </button>
        <button
          className={s.asyncButton}
          onClick={() => dispatch(multiplyAsync(Number(multipleValue) || 0))}
        >
          Multiply Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
