import { useSelector } from "react-redux";
import { RootState } from "./store";

export const selectCount = () =>
  useSelector((state: RootState) => state.counter.value);
