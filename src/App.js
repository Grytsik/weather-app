import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import { apiKEY, apiURL } from './api';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState([]);
  const url = `${apiURL}/weather?q=${value}&units=metric&appid=${apiKEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(url)
        .then((response) => {
          setLocation(response.data);
        })
        .catch((err) => console.log('Error founded' + ' ' + err));
    }
    setValue('');
  };

  console.log(location);

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
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={searchLocation}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
