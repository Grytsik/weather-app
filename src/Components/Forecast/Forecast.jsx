import Moment from 'react-moment';
import Icon from '../Icon/Icon';
import 'moment/locale/uk';
import './Forecast.scss';
import { useGlobalContext } from '../../Context/Context';
<<<<<<< HEAD
import { Card } from 'react-bootstrap';

export default function Forecast() {
  const { forecast } = useGlobalContext();

  return (
    <Card className='forecast'>
      <Card.Body>
        <Card.Title className='forecast__title'>Forecast 5-days</Card.Title>
        {forecast.map((item) => (
          <div className='forecast__item'>
            <Moment locale='uk' format='ddd'>
              {item?.dt_txt}
            </Moment>
            <img className='forecast__icon' src={Icon(item?.weather[0]?.main)} alt='icon' />
            <div className='forecast__feels'>
              <Card.Text className='forecast__temp'>
                <span className='forecast__span'>{item?.main?.temp_max.toFixed()}&deg;</span>/
              </Card.Text>
              <Card.Text className='forecast__temp'>
                {item?.main?.temp_min.toFixed()}&deg;
              </Card.Text>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
=======

export default function Forecast({ day }) {
  const { icon } = useGlobalContext();

  return (
    <div className="forecast__item">
      <Moment locale="uk" format="dddd D">
        {day?.dt_txt}
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
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
  );
}
