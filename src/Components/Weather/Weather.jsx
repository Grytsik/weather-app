import './Weather.scss';
import tempIcon from '../../img/thermometer.svg';
import errImg from '../../img/sadWeather.png';
import Moment from 'react-moment';
import Forecast from '../Forecast/Forecast';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Icon from '../Icon/Icon';
import { useGlobalContext } from '../../Context/Context';

export default function Weather() {
  const { location, forecast, icon } = useGlobalContext();
  const today = new Date();

  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };

  return (
    <div className="weather">
      <div className="weather__container container">
        {location?.length !== 0 ? (
          <>
            <div className="weather__item">
              <div className="weather__city">
                <p>
                  {location?.name}, {location?.sys?.country}
                </p>
              </div>
              <div className="weather__timeTemp">
                <span className="weather__temp">
                  <img
                    className="weather__icon"
                    src={tempIcon}
                    alt="temp-icon"
                  />
                  {location?.main?.temp.toFixed()}
                  &deg;
                </span>
                <img
                  className="weather__animate"
                  src={Icon(icon)}
                  alt="icon"
                />
                <div className="weather__time">
                  <Moment
                    className="weather__time_main"
                    filter={toUpperCaseFilter}
                    format="HH:mm"
                  >
                    {today}
                  </Moment>
                  <Moment
                    filter={toUpperCaseFilter}
                    format="dddd"
                  >
                    {today}
                  </Moment>
                  <Moment
                    filter={toUpperCaseFilter}
                    format="MMMM DD"
                  >
                    {today}
                  </Moment>
                </div>
              </div>
            </div>
            <div className="weather__item"></div>
            <WeatherDescription tempIcon={tempIcon} />
            <div className="forecast">
              {forecast.map((item, index) => (
                <Forecast key={index} day={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="weather__error">
            <p className="weather__error-text">
              Упс, ми не знайшли цє місто...
            </p>
            <img
              className="weather__error-img"
              src={errImg}
              alt="err"
            />
          </div>
        )}
      </div>
    </div>
  );
}
