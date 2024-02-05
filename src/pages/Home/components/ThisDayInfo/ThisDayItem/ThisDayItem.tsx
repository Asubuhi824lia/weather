import IndicatorSvgSelector from '../../../../../assets/icons/svg_tags/indicators/IndicatorSvgSelector';
import { Item } from '../ThisDayInfo';
import s from './ThisDayItem.module.scss'


interface Props {
  item: Item,
}


function ThisDayItem({ item }: Props) {
  const { icon_id, name, value } = item;
  return ( 
    <div className={s.item}>
      <span className={s.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </span>
      <span className={s.indicator_name}>  {name}  </span>
      <span className={s.indicator_value}> {value} </span>
    </div>
  );
}

export default ThisDayItem;