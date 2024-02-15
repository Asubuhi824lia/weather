import { format } from "date-fns";
import WeatherSvgSelector from "../../../../assets/icons/svg_tags/weather/WeatherSvgSelector";
import { CurrentWeather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: CurrentWeather;
}

function ThisDay({ weather }: Props) {
  let date = new Date(Date(weather.dt));

  return (
    <article className={`${s.wrapper} card_shadow`}>
      <div className={s.content}>
        <header className={s.top_block}>
          <div className={s.top_block__left_wrapper}>
            <div className={s.temp}>
              <span>{weather.main.temp}</span>°
            </div>
            <div className={s.day_name}>Сегодня</div>
          </div>
          <div className={s.precipitation_icon}>
            <WeatherSvgSelector id="sun" />
          </div>
        </header>
        <footer className={s.bottom_block}>
          <div className={s.time}>
            <span className={s.caption}>Время: </span>
            <span> {format(date, "HH:mm")}</span>
          </div>
          <div className={s.city}>
            <span className={s.caption}>Город: </span>
            <span>Дивногорск</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default ThisDay;
