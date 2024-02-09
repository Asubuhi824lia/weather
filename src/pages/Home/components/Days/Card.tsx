import WeatherSvgSelector from '../../../../assets/icons/svg_tags/weather/WeatherSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss';


interface Props {
  day: Day
}


function Card({ day }: Props) {
  const {day_name, day_info, icon_id, temp_day, temp_night, info} = day;

  return (
    <section className={s.day_wrapper}>
      <span className={s.day_name}>{day_name}</span>
      <span className={s.day_info}>{day_info}</span>
      <span className={s.icon_id}> <WeatherSvgSelector id={icon_id}/></span>
      <div className={s.temp}>
        <span className={s.temp_day}>   {temp_day}  </span>
        <span className={s.temp_night}> {temp_night}</span>
      </div>
      <span className={s.info}>{info}</span>
    </section>
  );
}

export default Card;