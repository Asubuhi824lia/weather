import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";
import useWeatherWindDirection from "../../hook/useWeatherWindDirection";

type WeatherResponse = {
  status: number;
  message: string;
};

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: WeatherResponse;
};

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      temp_max: 0,
      temp_min: 0,
      pressure: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    weather: [
      {
        description: "",
      },
    ],
    dt: 0,
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const CurrentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    // мутируем state
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      // Требует сервисы для запроса к API
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    roundCurrentWeatherValues(state) {
      state.weather.main.temp = Math.round(state.weather.main.temp);
      state.weather.main.feels_like = Math.round(state.weather.main.feels_like);
      state.weather.main.temp_max = Math.round(state.weather.main.temp_max);
      state.weather.main.temp_min = Math.round(state.weather.main.temp_min);
      state.weather.main.humidity = Math.round(state.weather.main.humidity);
      state.weather.main.pressure = Math.round(
        0.75 * state.weather.main.pressure
      );
      state.weather.wind.speed = Math.round(state.weather.wind.speed);
      state.weather.wind.deg = useWeatherWindDirection(state.weather.wind.deg);
      state.weather.wind.gust = Math.round(state.weather.wind.gust);
    },
  },
});
export default CurrentWeatherSlice.reducer;
