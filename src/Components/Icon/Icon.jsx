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
<<<<<<< HEAD
=======
  let docBody = document.body;
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4

  switch (icon) {
    case 'Thunderstorm':
      result = thunderStorm;
<<<<<<< HEAD
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
=======
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
      break;
    case 'Drizzle':
      result = drizzle;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
      break;
    case 'Rain':
      result = rain;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
      break;
    case 'Snow':
      result = snow;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
      break;
    case 'Clear':
      result = clearDay;
      // docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
      break;
    case 'Clouds':
      result = clouds;
      // docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      break;
    case 'Fog':
      result = fog;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
      break;
    case 'Haze':
      result = haze;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      break;
    case 'Smoke':
      result = smoke;
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      break;
    default:
      docBody.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
      break;
  }
	return result;
}
