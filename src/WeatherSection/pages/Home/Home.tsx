import { useEffect, useLayoutEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hook/store";
import s from "./Home.module.scss";
import Days from "./components/Days/Days";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import fetchCurrentWeather from "../../store/thunks/fetchCurrentWeather";
import fetchHourly5DaysWeather from "../../store/thunks/fetchDaily5Weather";
import { selectCurrentWeatherData } from "../../store/selectors";

import { Provider } from "react-redux";
import { store } from "../../store/store.ts";
import { ThemeProvider } from "../../context/provider/ThemeProvider.tsx";

function Home() {
  const city = "Krasnoyarsk";
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  // useEffect(() => {
  //   dispatch(fetchHourly5DaysWeather(city));
  // }, []);

  useLayoutEffect(() => {
    dispatch(fetchCurrentWeather(city));
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <main className={s.home}>
          <article className={s.today_info}>
            <ThisDay weather={weather} />
            <ThisDayInfo weather={weather} />
          </article>
          <Days />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default Home;
