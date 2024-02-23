import { useSelector, useDispatch } from "react-redux";
import { TodoDispatch, rootState } from "../store/store";

export const todoAppSelector = useSelector.withTypes<rootState>();
export const todoAppDispatch = useDispatch.withTypes<TodoDispatch>();
