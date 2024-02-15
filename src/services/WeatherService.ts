import { AxiosResponse } from "axios";
import { CurrentWeather, Hourly5DaysWeather } from "../store/types/types";
import api from "../axiosConfig";

export class WeatherService {
  static getCurrentWeather(
    city: string
  ): Promise<AxiosResponse<CurrentWeather>> {
    return api.get<CurrentWeather>(`/weather?q=${city}`);
  }

  static getWeekWeather(
    city: string
  ): Promise<AxiosResponse<Hourly5DaysWeather>> {
    return api.get<Hourly5DaysWeather>(`/forecast?q=${city}`);
  }
}
