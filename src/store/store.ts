import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSliceReducer from "./slice/fetchWeatherSlice";

const rootReducer = combineReducers({ CurrentWeatherSliceReducer });
// export type rootStore = ReturnType<typeof rootReducer>;

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
