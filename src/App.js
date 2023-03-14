import './App.css';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useEffect, useState } from 'react';
import WeatherItem from './Components/WeatherItem/WeatherItem';
import Alert from './Components/Alert/Alert';
import { ColorRing } from 'react-loader-spinner';

function App() {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value.trim());
    }
  };

  // fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Odessa&units=metric&appid=${apiKEY}`)
  // .then(response => response.json())
  // .then(data => console.log(data));

  useEffect(() => {
    if (!value) {
      getCurrentPosition();
    }
    getWeatherIp();
  }, [lat, value]);

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        function (e) {
          Alert(e);
        },
      );
    }
  };

  const getWeatherIp = async () => {
    setLoading(true);
    let how_to_search = value
      ? `q=${value}`
      : `lat=${lat}&lon=${lon}`;

    await fetch(
      `${apiURL}/weather?${how_to_search}&units=metric&appid=${apiKEY}`,
    )
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
  };

  return (
    <>
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
      {loading ? (
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={[
            '#e15b64',
            '#f47e60',
            '#f8b26a',
            '#abbd81',
            '#849b87',
          ]}
        />
      ) : (
        <WeatherItem
          location={location}
          loading={loading}
        />
      )}
    </>
  );
}

export default App;
