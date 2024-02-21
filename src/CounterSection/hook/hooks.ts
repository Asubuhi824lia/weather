import { useDispatch, useSelector } from "react-redux";
import { CounterDispatch, RootState } from "../store/store";
// type hooks to counter state
export const useCounterDispatch = useDispatch.withTypes<CounterDispatch>();
export const useCounterSelector = useSelector.withTypes<RootState>();
