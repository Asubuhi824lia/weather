import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, rootStore } from "../store/store";

// задать тип => сделать типы значений state видимыми для TS
export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<rootStore> = useSelector;
