import WeatherSvgSelector from '../../../../assets/icons/svg_tags/weather/WeatherSvgSelector';
import s from './ThisDay.module.scss'


function ThisDay() {
  return (
    <article className={`${s.wrapper} card_shadow`}>
      <div className={s.content}>
        <header className={s.top_block}>
          <div className={s.top_block__left_wrapper}>
            <div className={s.temp}>
              <span>20</span>°
            </div>
            <div className={s.day_name}>
              Сегодня
            </div>
          </div>
          <div className={s.precipitation_icon}>
            <WeatherSvgSelector id="sun"/>
          </div>
        </header>
        <footer className={s.bottom_block}>
          <div className={s.time}>
            Время: <span>9:55</span>
          </div>
          <div className={s.city}>
            Город: <span>Екатеринбург</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default ThisDay;