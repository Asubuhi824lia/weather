import { AxiosResponse } from "axios";
import { CurrentWeather } from "../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import useRoundWeatherValues from "../../hook/useRoundWeatherValues";
import { WeatherResponse } from "./fetchWeatherSlice";

type DataWeather = {
  weather: CurrentWeather;
  isLoading: boolean;
  response: WeatherResponse;
};

export const initialState: DataWeather = {
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
      action: PayloadAction<AxiosResponse<CurrentWeather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
      useRoundWeatherValues(state.weather);
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<CurrentWeather>>
    ) {
      // Требует сервисы для запроса к API
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const CurrentWeatherSliceReducer = CurrentWeatherSlice.reducer;
