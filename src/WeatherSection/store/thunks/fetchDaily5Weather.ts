import { WeatherService } from "../../services/WeatherService";
import { Hourly5DaysWeatherSlice } from "../slice/fetchWeatherSlice";
import { AppDispatch } from "../store";

const fetchHourly5DaysWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(Hourly5DaysWeatherSlice.actions.fetchHourly5DaysWeather());
      const res = await WeatherService.getWeekWeather(payload);

      if (res.status === 200) {
        dispatch(
          Hourly5DaysWeatherSlice.actions.fetchHourly5DaysWeatherSuccess(res)
        );
      } else {
        dispatch(
          Hourly5DaysWeatherSlice.actions.fetchHourly5DaysWeatherError(res)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

export default fetchHourly5DaysWeather;
