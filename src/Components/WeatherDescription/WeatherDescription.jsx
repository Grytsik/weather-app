import tempMin from '../../img/wi_thermometer-colder.svg';
import tempMax from '../../img/wi_thermometer-warmer.svg';
import barom from '../../img/barometer.svg';
import humidity from '../../img/humidity.svg';
import wind from '../../img/wind.svg';
import Moment from 'react-moment';
import './WeatherDescription.scss';
import { useGlobalContext } from '../../Context/Context';

export default function WeatherDescription({ tempIcon }) {
  const { location } = useGlobalContext();

  console.log(location);

  return (
    <div className="descriptions">
      <div className="descriptions__container">
        <div className="descriptions__item">
          <div className="descriptions__info">
            <span className="descriptions__temp">
              {location?.main?.temp_max.toFixed()}&deg;
            </span>
            <p className="descriptions__text">High</p>
            <span className="descriptions__temp">
              {location?.main?.temp_min.toFixed()}&deg;
            </span>
            <p className="descriptions__text">Min</p>
          </div>
        </div>
        <div className="descriptions__item">
          {/* <div className="descriptions__info">
            <span className="descriptions__temp">
              {location?.wind?.speed.toFixed()}km/h;
            </span>
            <p className="descriptions__text">Wind</p>
            <span className="descriptions__temp">
              {Math.round(
                location?.main?.pressure * 0.750062,
              )}
            </span>
            <p className="descriptions__text">Pressure</p>
          </div> */}
        </div>
        <div className="descriptions__item">
          <div className="descriptions__info">
            <Moment unix
              className="descriptions__temp"
              format="HH:mm"
            >
              {location?.sys?.sunrise}
            </Moment>
            <p className="descriptions__text">Sunrise</p>
            <Moment unix
              className="descriptions__temp"
              format="HH:mm"
            >
              {location?.sys?.sunset}
            </Moment>
            <p className="descriptions__text">Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}
