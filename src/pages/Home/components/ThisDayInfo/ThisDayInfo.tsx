import ThisDayItem from "./ThisDayItem";
import s from "./ThisDayInfo.module.scss";
import { CurrentWeather } from "../../../../store/types/types";
import useWeatherWindForce from "../../../../hook/useWeatherWindGust";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export interface Props {
  weather: CurrentWeather;
}

function ThisDayInfo({ weather }: Props) {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${weather.main.temp}° - ощущается как ${weather.main.feels_like}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: weather.weather[0].description,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `
      ${weather.wind.speed} м/с 
      ${weather.wind.deg} - 
      ${useWeatherWindForce(weather.wind.speed)}
      - с порывами до ${weather.wind.gust} м/с`,
    },
  ];

  return (
    <section className={`${s.wrapper} card_shadow`}>
      <div className={s.content}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ThisDayInfo;
