import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

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
      temp_max: 0,
      temp_min: 0,
      pressure: 0,
      humidity: 0,
    },
    weather: [
      {
        main: "",
      },
    ],
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
  },
});
export default CurrentWeatherSlice.reducer;
