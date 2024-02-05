import sun	from './sun';
import rain from './rain'
import smallRain 		from './small_rain'
import smallRainSun from './small_rain_sun'
import mainlyCloudy from './mainly_cloudy'


interface Props {
  id: string
}


function WeatherSvgSelector({ id }: Props ) {
  switch (id) {
    case "sun":	return sun;
		case "rain":return rain;
		case "small_rain": 		return smallRain;
		case "small_rain_sun":return smallRainSun;
		case "mainly-cloudy": return mainlyCloudy;
    default:
      return null;
  }
}

export default WeatherSvgSelector;