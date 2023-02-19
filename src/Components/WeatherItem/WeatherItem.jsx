import './WeatherItem.css';
import Icons from '../Icons/Icons';

export default function WeatherItem({ location, icon }) {
	console.log(icon);

  return (
    <>
      <div className="weather">
        {location.length !== 0 ? (
          <div className="weather__item">
            <p>City: {location.name}</p>
            <p>Temp: {Math.round(location?.main?.temp)}&deg;C</p>
						<img src={Icons(icon)} alt="icon-weather" />
          </div>
        ) : (
          <div>Not found...</div>
        )}
      </div>
    </>
  );
}
