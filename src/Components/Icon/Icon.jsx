import thunderStorm from '../../animate-icon/thunderstorms-rain.svg';
import drizzle from '../../animate-icon/drizzle.svg';
import rain from '../../animate-icon/rain.svg';
import snow from '../../animate-icon/snow.svg';
import clouds from '../../animate-icon/fog.svg';
import fog from '../../animate-icon/fog.svg';
import haze from '../../animate-icon/haze.svg';
import smoke from '../../animate-icon/smoke.svg';
import clearDay from '../../animate-icon/clear-day.svg';

export default function Icon(icon) {

  let result = clearDay;

  switch (icon) {
    case 'Thunderstorm':
      result = thunderStorm;
      break;
    case 'Drizzle':
      result = drizzle;
      break;
    case 'Rain':
      result = rain;
      break;
    case 'Snow':
      result = snow;
      break;
    case 'Clear':
      result = clearDay;
      break;
    case 'Clouds':
      result = clouds;
      break;
    case 'Fog':
      result = fog;
      break;
    case 'Haze':
      result = haze;
      break;
    case 'Smoke':
      result = smoke;
      break;
    default:
      break;
  }
	return result;
}
