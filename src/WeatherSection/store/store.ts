import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore } from "redux";
import {
  CurrentWeatherSliceReducer,
  Hourly5DaysWeatherSliceReducer,
} from "./slice/fetchWeatherSlice";

/**
 *поток Redux-данных - однонаправленный.
 *все данные         - следуют 1 сценарию жизненного цикла (4 шага):
 *store.dispatch(action) --> reducer --> combineReducers(/все разом/) --> сохр.tree состояния - store.subscribe(listener)
 * Презентационные Компоненты & компоненты-Представления (KRChW)
 *
 *   createSlice
 *  = counterSlice.actions
 *  = counterSlice.reducers
 *
 *  = useSelector
 *  useDispatch()
 */

const rootReducer = combineReducers({
  CurrentWeatherSliceReducer,
  Hourly5DaysWeatherSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type rootStore = ReturnType<typeof rootReducer>;

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
