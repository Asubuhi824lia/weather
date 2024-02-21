import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, rootStore } from "../store/store";

// задать тип => сделать типы значений state видимыми для TS
export const useWeatherDispatch = () => useDispatch<AppDispatch>();
export const useWeatherSelector: TypedUseSelectorHook<rootStore> = useSelector;
