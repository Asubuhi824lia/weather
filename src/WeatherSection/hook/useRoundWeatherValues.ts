import { CurrentWeather } from "../store/types/types";
import useWeatherWindDirection from "./useWeatherWindDirection";

export default function roundCurrentWeatherValues(weather: CurrentWeather) {
  weather.main.temp = Math.round(weather.main.temp);
  weather.main.feels_like = Math.round(weather.main.feels_like);
  weather.main.temp_max = Math.round(weather.main.temp_max);
  weather.main.temp_min = Math.round(weather.main.temp_min);
  weather.main.humidity = Math.round(weather.main.humidity);
  weather.main.pressure = Math.round(0.75 * weather.main.pressure);
  weather.wind.speed = Math.round(weather.wind.speed);
  weather.wind.deg = useWeatherWindDirection(weather.wind.deg);
  weather.wind.gust = Math.round(weather.wind.gust);
}
