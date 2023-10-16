import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Card, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import sunriseImg from '../../img/sunrise.png';
import sunsetImg from '../../img/sunset.png';
import './WindArrow.scss';
import { useGlobalContext } from '../../Context/Context';
import WindChart from './WindChart';

const WindArrow = ({ humidity }) => {
  const { location } = useGlobalContext();
  return (
    <div className='desc'>
      <Card className='humidity'>
        <Card.Title>Humidity</Card.Title>
        <CircularProgressbar
          value={humidity}
          text={`${humidity}%`}
          styles={buildStyles({
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransition: 'none',
            pathColor: `rgba(255, 184, 0, ${humidity / 100})`,
            textColor: '#ffffff',
            trailColor: 'white',
          })}
        />
      </Card>
      <Card className='sunrise'>
        <Card.Title>Sunrise and sunset</Card.Title>
        <Card.Body className='sunrise__body'>
          <div className='sunrise__container'>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunriseImg} alt='sunrise' />
              <Card.Text className='sunrise__text'>Sunrise</Card.Text>
              <Moment unix className='descriptions__temp' format='HH:mm'>
                {location?.sys?.sunrise}
              </Moment>
            </div>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunsetImg} alt='sunset' />
              <Card.Text className='sunrise__text'>Sunset</Card.Text>
              <Moment unix className='descriptions__temp' format='HH:mm'>
                {location?.sys?.sunset}
              </Moment>
            </div>
          </div>
        </Card.Body>
      </Card>
      <WindChart weatherData={location?.wind?.speed.toFixed()}/>
    </div>
  );
};

export default WindArrow;
