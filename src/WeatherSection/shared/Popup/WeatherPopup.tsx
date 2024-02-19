import Popup from "./Popup";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";
import WeatherSvgSelector from "../../assets/icons/svg_tags/weather/WeatherSvgSelector";

function WeatherPopup() {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <Popup>
      <section className={s.day_content}>
        <div className={s.temp}>
          <span>20</span>
          <span>°</span>
        </div>
        <div className={s.day_name}>Сегодня</div>
        <div className={s.precipitation_icon}>
          <WeatherSvgSelector id="sun" />
        </div>
        <footer className={s.bottom_block}>
          <div className={s.time}>
            Время: <span>9:55</span>
          </div>
          <div className={s.city}>
            Город: <span>Екатеринбург</span>
          </div>
        </footer>
      </section>
      <section className={s.items_content}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </section>
    </Popup>
  );
}

export default WeatherPopup;
