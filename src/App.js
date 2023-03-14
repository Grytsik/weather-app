import './App.css';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useEffect, useState } from 'react';
import WeatherItem from './Components/WeatherItem/WeatherItem';
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
    getCurrentPosition();
    getWeatherIp();
  }, [lat, value]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (!null) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }
    });
  };

  const getWeatherIp = async () => {
    setLoading(true);
    let how_to_search = value ? `q=${value}` : `lat=${lat}&lon=${lon}`;
    await fetch(
      `${apiURL}/weather?${how_to_search}&units=metric&appid=${apiKEY}`
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
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : (
          <WeatherItem location={location} loading={loading} />
        )}
      </div>
    </>
  );
}

export default App;
