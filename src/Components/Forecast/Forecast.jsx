import Moment from 'react-moment';
import Icon from '../Icon/Icon';
import 'moment/locale/uk';
import './Forecast.scss';
import { useGlobalContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';

export default function Forecast() {
  const { forecast } = useGlobalContext();

  return (
    <Card className='forecast'>
      <Card.Body>
        <Card.Title className='forecast__title'>Forecast 5-days</Card.Title>
        {forecast.map((item, index) => (
          <div key={index} className='forecast__item'>
            <Moment locale='uk' format='ddd'>
              {item?.dt_txt}
            </Moment>
            <img className='forecast__icon' src={Icon(item?.weather[0]?.main, true)} alt='icon' />
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
  );
}
