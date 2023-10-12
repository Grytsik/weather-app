import './Weather.scss';
import errImg from '../../img/sadWeather.png';
import WeatherDescription from '../WeatherDescription/WeatherDescription.jsx';
import Icon from '../Icon/Icon';
import { useGlobalContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';
import WindArrow from '../WindArrow/WindArrow';

export default function Weather() {
  const { location } = useGlobalContext();

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
                <img
                  className='weather__animate'
                  src={Icon(location?.weather[0]?.main, false)}
                  alt='icon'
                />
              </div>
            </div>
            {/* <WeatherDescription tempIcon={tempIcon} /> */}
            <WindArrow humidity={location?.main?.humidity} />
          </>
        ) : (
          <Card className='weather__error'>
            <Card.Title className='weather__error-text'>Упс, ми не знайшли цє місто...</Card.Title>
            {/* <img className='weather__error-img' src={errImg} alt='err' /> */}
            <span className='weather__error_span' >¯\_(ツ)_/¯</span>
          </Card>
        )}
      </div>
    </div>
  );
}
