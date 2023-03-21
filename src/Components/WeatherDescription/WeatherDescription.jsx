import tempMin from '../../img/wi_thermometer-colder.svg';
import tempMax from '../../img/wi_thermometer-warmer.svg';
import barom from '../../img/barometer.svg';
import humidity from '../../img/humidity.svg';
import wind from '../../img/wind.svg';
import './WeatherDescription.css';

export default function WeatherDescription({ location,tempIcon }) {
  return (
    <div className="weather__descriptions">
      <div className="weather__descriptions-item">
        <div className="weather__feels-item">
          <span>
            Відчуваеться:
            {location?.main?.feels_like.toFixed()}
            &deg;C
          </span>
          <img
            className="weather__icon-feels"
            src={tempIcon}
            alt="temp-icon"
          />
        </div>
        <div className="weather__feels-item">
          <span>
            Мінімум:
            {location?.main?.temp_min.toFixed()}
            &deg;C
          </span>
          <img
            className="weather__icon-feels"
            src={tempMin}
            alt="temp-icon"
          />
        </div>
        <div className="weather__feels-item">
          <span>
            Максимум:
            {location?.main?.temp_max.toFixed()}
            &deg;C
          </span>
          <img
            className="weather__icon-feels"
            src={tempMax}
            alt="temp-icon"
          />
        </div>
      </div>
      <div className="weather__descriptions-item">
        <div className="weather__feels-item">
          <span>
            Тиск:
            {Math.round(
              location?.main?.pressure * 0.750062,
            )}
            мм
          </span>
          <img
            className="weather__icon-feels"
            src={barom}
            alt="temp-icon"
          />
        </div>
        <div className="weather__feels-item">
          <span>
            Вологість: {location?.main?.humidity}%
          </span>
          <img
            className="weather__icon-feels"
            src={humidity}
            alt="temp-icon"
          />
        </div>
        <div className="weather__feels-item">
          <span>
            Вітер: {location?.wind?.speed.toFixed()}
            м/с
          </span>
          <img
            className="weather__icon-feels"
            src={wind}
            alt="temp-icon"
          />
        </div>
      </div>
    </div>
  );
}
