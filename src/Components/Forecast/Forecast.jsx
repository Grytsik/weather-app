import Moment from 'react-moment';
import Icon from '../Icon/Icon';
import 'moment/locale/uk';
import './Forecast.css';

export default function Forecast({ day, icon }) {
  return (
    <div className="forecast__item">
      <Moment locale="uk" format="dddd D">
        {day.dt_txt}
      </Moment>
      <div className="forecast__info">
        <span className="forecast__temp">
          {day?.main?.temp.toFixed()}&deg;C
        </span>
        <div>
          <img
            className="forecast__icon"
            src={Icon(icon)}
            alt="icon"
          />
        </div>
      </div>
      <p className="forecast__description">
        {day?.weather[0].description}
      </p>
      <div className="forecast__feels">
        <p>&#8593;{day?.main?.temp_max.toFixed()}&deg;C</p>
        <p>&#8595;{day?.main?.temp_min.toFixed()}&deg;C</p>
      </div>
    </div>
  );
}
