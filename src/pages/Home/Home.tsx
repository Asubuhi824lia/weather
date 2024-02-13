import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hook/store";
import s from "./Home.module.scss";
import Days from "./components/Days/Days";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

function Home() {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Divnogorsk"));
  }, []);

  return (
    <main className={s.home}>
      <article className={s.today_info}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </article>
      <Days />
    </main>
  );
}

export default Home;
