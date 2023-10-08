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
    <div className='weather'>
      <div className='container'>
        {location?.length !== 0 ? (
          <>
            <p className='weather__city'>
              {location?.name}, {location?.sys?.country}
            </p>
            <div className='weather__container'>
              <div className='weather__item'>
                <span className='weather__temp'>
                  {location?.main?.temp.toFixed()}
                  &deg;
                </span>
                <img className='weather__animate' src={Icon(icon)} alt='icon' />
              </div>
            </div>
            <WeatherDescription tempIcon={tempIcon} />
          </>
        ) : (
          <div className='weather__error'>
            <p className='weather__error-text'>Упс, ми не знайшли цє місто...</p>
            <img className='weather__error-img' src={errImg} alt='err' />
          </div>
        )}
      </div>
    </div>
  );
}
