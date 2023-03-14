import './WeatherItem.css';
import tempIcon from '../../img/thermometer.svg';
import tempMin from '../../img/wi_thermometer-colder.svg';
import tempMax from '../../img/wi_thermometer-warmer.svg';
import barom from '../../img/barometer.svg';
import humidity from '../../img/humidity.svg';
import wind from '../../img/wind.svg';
import Moment from 'react-moment';

export default function WeatherItem({ location }) {
  let today = new Date();
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };

  return (
    <>
      <div className="weather">
        {location?.length !== 0 ? (
          <>
            <div className="weather__item">
              <p className="weather__city">
                {location?.name}, {location?.sys.country}
              </p>
              <div className="weather__time">
                <Moment
                  filter={toUpperCaseFilter}
                  format="MMMM DD"
                >
                  {today}
                </Moment>
                <Moment format="dddd HH:mm">{today}</Moment>
              </div>
            </div>
            <div className="weather__info">
              <span className="weather__temp">
                <img
                  className="weather__icon"
                  src={tempIcon}
                  alt="temp-icon"
                />
                {location?.main?.temp.toFixed()}
                &deg;C
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${location?.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </div>
            <div className="weather__descriptions">
              <div className="weather__descriptions-item">
                <span className="weather__feels-item">
                  Feels like:
                  {location?.main?.feels_like.toFixed()}
                  &deg;C
                </span>
                <div className="weather__feels-item">
                  <span>
                    Temp min:
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
                    Temp max:
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
                    Pressure:
                    {Math.round(
                      location?.main?.pressure * 0.750062,
                    )}
                  </span>
                  <img
                    className="weather__icon-feels"
                    src={barom}
                    alt="temp-icon"
                  />
                </div>
                <div className="weather__feels-item">
                  <span>
                    Humidity: {location?.main?.humidity}%
                  </span>
                  <img
                    className="weather__icon-feels"
                    src={humidity}
                    alt="temp-icon"
                  />
                </div>
                <div className="weather__feels-item">
                  <span>
                    Wind: {location?.wind?.speed.toFixed()}
                    m/s
                  </span>
                  <img
                    className="weather__icon-feels"
                    src={wind}
                    alt="temp-icon"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Not found...</div>
        )}
      </div>
    </>
  );
}
