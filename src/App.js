import './App.css';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useEffect, useState } from 'react';
import Weather from './Components/Weather/Weather';
import Alert from './Components/Alert/Alert';
import { ColorRing } from 'react-loader-spinner';

function App() {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value.trim());
    }
  };

  const how_to_search = value
    ? `q=${value}`
    : `lat=${lat}&lon=${lon}`;

  const getForecast = async () => {
    fetch(
      `${apiURL}/forecast?${how_to_search}&lang=ua&units=metric&appid=${apiKEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setForecast([]);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        } else {
          const dailyDate = data.list.filter((item) =>
            item.dt_txt.includes('18:00:00'),
          );
          setForecast(dailyDate);
          setLoading(false);
        }
      });
  };

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
        (err) => {
          Alert(err);
        },
      );
    }
  };

  const getWeatherIp = async () => {
    setLoading(true);

    fetch(
      `${apiURL}/weather?${how_to_search}&lang=ua&units=metric&appid=${apiKEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setLocation([]);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        } else {
          setLocation(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getForecast();
  };

  return (
    <>
      <div className="header">
        <div className=" container header__container">
          <Header />
          <input
            type="text"
            placeholder="Пошук..."
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
        <Weather
          location={location}
          loading={loading}
          forecast={forecast}
        />
      )}
    </>
  );
}

export default App;
