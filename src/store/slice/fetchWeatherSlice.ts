import {
  CurrentWeatherSlice,
  CurrentWeatherSliceReducer,
} from "./fetchCurrentWeatherSlice";
import {
  Hourly5DaysWeatherSlice,
  Hourly5DaysWeatherSliceReducer,
} from "./fetchHourly5DaysWeatherSlice";

export type WeatherResponse = {
  status: number;
  message: string;
};

export {
  CurrentWeatherSlice,
  CurrentWeatherSliceReducer,
  Hourly5DaysWeatherSlice,
  Hourly5DaysWeatherSliceReducer,
};
