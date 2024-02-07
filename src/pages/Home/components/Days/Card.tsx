import WeatherSvgSelector from '../../../../assets/icons/svg_tags/weather/WeatherSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss';


interface Props {
  day: Day
}


function Card({ day }: Props) {
  return (
    <section className={`${s.day_wrapper} card_shadow`}>
      <span className={s.day_name}>{day.day_name}</span>
      <span className={s.day_info}>{day.day_info}</span>
      <span className={s.icon_id}><WeatherSvgSelector id={day.icon_id}/></span>
      <div className={s.temp}>
        <span className={s.temp_day}>{day.temp_day}</span>
        <span className={s.temp_night}>{day.temp_night}</span>
      </div>
      <span className={s.info}>{day.info}</span>
    </section>
  );
}

export default Card;