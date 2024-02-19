import wind from './wind'
import temp from './temp'
import pressure from './pressure'
import precipitation from './precipitation'


interface Props {
  id: string
}


function IndicatorSvgSelector({ id }: Props ) {
  switch (id) {
    case "wind": return wind;
    case "temp": return temp;
    case "pressure": return pressure;
    case "precipitation": return precipitation;
    default:
      return null;
  }
}

export default IndicatorSvgSelector;