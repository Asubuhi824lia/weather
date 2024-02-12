import WeatherSvgSelector from "../../../../assets/icons/svg_tags/weather/WeatherSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

function ThisDay({ weather }: Props) {
  return (
    <article className={`${s.wrapper} card_shadow`}>
      <div className={s.content}>
        <header className={s.top_block}>
          <div className={s.top_block__left_wrapper}>
            <div className={s.temp}>
              <span>{Math.round(Math.round(weather.main.temp))}</span>°
            </div>
            <div className={s.day_name}>Сегодня</div>
          </div>
          <div className={s.precipitation_icon}>
            <WeatherSvgSelector id="sun" />
          </div>
        </header>
        <footer className={s.bottom_block}>
          <div className={s.time}>
            Время: <span>18:40</span>
          </div>
          <div className={s.city}>
            Город: <span>Дивногорск</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default ThisDay;
