import './App.css';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useEffect, useState } from 'react';
import WeatherItem from './Components/WeatherItem/WeatherItem';
import { ProgressBar } from 'react-loader-spinner';

function App() {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState(null);
  const [lat, setLat ] = useState(null);
  const url = `${apiURL}/weather?q=${value}&units=metric&appid=${apiKEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value.trim());
    }
  };

  // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Odessa&units=metric&appid=${apiKEY}`)
  // .then(response => response.json())
  // .then(data => console.log(data));

  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });

  console.log(lat);
  console.log(lon);
  console.log(navigator.geolocation);

  fetch(`${apiURL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKEY}`)
  .then(response => response.json())
  .then(data => console.log(data));

  const getWeather = async () => {
    if (value) {
      setLoading(true);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod >= 400) {
            setLocation(null);
          } else {
            setLocation(data);
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getWeather();
  }, [value]);

  return (
    <>
      <div className="">
        <div className="header">
          <div className=" container header__container">
            <Header />
            <input
              type="text"
              placeholder="type city..."
              className="search__input"
              onKeyDown={searchLocation}
            />
          </div>
        </div>
        <WeatherItem location={location} loading={loading} />
      </div>
    </>
  );
}

export default App;
