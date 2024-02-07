import ThisDayItem from './ThisDayItem';
import s from './ThisDayInfo.module.scss';


export interface Item {
  icon_id: string,
  name: string,
  value: string,
}


function ThisDayInfo() {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  return (
    <section className={`${s.wrapper} card_shadow`}>
      <div className={s.content}>
        {items.map((item: Item) => (<ThisDayItem key={item.icon_id} item={item} />))}
      </div>
    </section>
  );
}

export default ThisDayInfo;