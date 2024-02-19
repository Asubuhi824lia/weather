import Card from "./Card";
import s from "./Days.module.scss";
import Tabs from "./Tabs";
import json from "./days.json";

export interface Day {
  readonly day_name: string;
  readonly day_info: string;
  readonly icon_id: string;
  readonly temp_day: string;
  readonly temp_night: string;
  readonly info: string;
  // + возм-ть обращения по [], - возм-ть добавить поля
  readonly [key: string | number]: string;
}

function Days() {
  const days = json.days;

  return (
    <section className={s.days_wrapper}>
      <div className={s.tabs_wrapper}>
        <Tabs />
        <div className={s.cancel}>Отменить</div>
      </div>
      <div className={`${s.days_content} card_shadow`}>
        {days.map((day: Day) => (
          <Card key={day.day_name} day={day} />
        ))}
      </div>
    </section>
  );
}

export default Days;
