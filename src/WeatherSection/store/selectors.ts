import { rootStore } from "./store";

export const selectCurrentWeatherData = (state: rootStore) =>
  state.CurrentWeatherSliceReducer;

export const selectDaily16WeatherData = (state: rootStore) =>
  state.Hourly5DaysWeatherSliceReducer;
