import { rootStore } from "./store";

export const selectCurrentWeatherData = (state: rootStore) =>
  state.CurrentWeatherSliceReducer;
