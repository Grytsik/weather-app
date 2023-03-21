import './Weather.css';
import tempIcon from '../../img/thermometer.svg';
import errImg from '../../img/computer.png';
import Moment from 'react-moment';
import Forecast from '../Forecast/Forecast';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import { apiImg } from '../../api';

export default function Weather({ location, forecast }) {
  const today = new Date();

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
                {location?.name}, {location?.sys?.country}
              </p>
              <div className="weather__time">
                <Moment
                  filter={toUpperCaseFilter}
                  format="MMMM DD"
                >
                  {today}
                </Moment>
                <Moment
                  filter={toUpperCaseFilter}
                  format="dddd HH:mm"
                >
                  {today}
                </Moment>
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
                src={`${apiImg}/img/wn/${location?.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </div>
            <WeatherDescription
              location={location}
              tempIcon={tempIcon}
            />
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
    </>
  );
}
