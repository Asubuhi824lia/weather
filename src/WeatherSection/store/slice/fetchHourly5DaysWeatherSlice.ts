import { AxiosResponse } from "axios";
import { Hourly5DaysWeather } from "../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherResponse } from "./fetchWeatherSlice";

type DataWeather = {
  weather: Hourly5DaysWeather;
  isLoading: boolean;
  response: WeatherResponse;
};

export const initialState: DataWeather = {
  weather: {
    list: [
      {
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
        name: "",
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const Hourly5DaysWeatherSlice = createSlice({
  name: "hourly5days_weather",
  initialState,
  reducers: {
    // мутируем state
    fetchHourly5DaysWeather(state) {
      state.isLoading = true;
    },
    fetchHourly5DaysWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Hourly5DaysWeather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchHourly5DaysWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Hourly5DaysWeather>>
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
export const Hourly5DaysWeatherSliceReducer = Hourly5DaysWeatherSlice.reducer;
