import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useEffect, useState } from 'react';
import WeatherItem from './Components/WeatherItem/WeatherItem';

function App() {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState([]);
  const [icon, setIcon] = useState('')
  const url = `${apiURL}/weather?q=${value}&units=metric&appid=${apiKEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value);
    }
  };
  console.log(location);
  console.log(icon);

  const getWeather = async () => {
    if (value) {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod >= 400) {
            setLocation(false);
          } else {
            setLocation(data);
            setIcon(data.weather[0].main);
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
        <WeatherItem location={location} icon={icon} />
      </div>
    </>
  );
}

export default App;
