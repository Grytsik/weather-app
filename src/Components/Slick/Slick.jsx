import '../WeatherCard/WeatherCard.scss';
import { useGlobalContext } from '../../Context/Context';
import Slider from 'react-slick';

export default function Slick({ children, settings }) {
  const { location } = useGlobalContext();

  return <Slider {...settings}>{children}</Slider>;
}
