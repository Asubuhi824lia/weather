import WeatherSvgSelector from '../../../../assets/icons/svg_tags/weather/WeatherSvgSelector';
import { Day } from './Days';
import s from './Days.module.scss';


interface Props {
  day: Day
}


function Card({ day }: Props) {
  return (
    <section className={s.day_wrapper}>
      {Object.keys(day).map((key) => (
        (key != "icon_id") 
        ? <span key={key} className={s[key]}>{(day as Day)[key]}</span>
        : <span key={key} className={s.icon_id}><WeatherSvgSelector id={day[key]}/></span>
      ))}
    </section>
  );
}

export default Card;