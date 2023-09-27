import './App.scss';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import { ColorRing } from 'react-loader-spinner';
import { useGlobalContext } from './Context/Context';
import imagees from '../src/img/computer.png';
import { useEffect } from 'react';

function App() {
  const { loading } = useGlobalContext();

  return (
    <div className="App">
      <div className="container">
        <Header />
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
          <Weather />
        )}
      </div>
    </div>
  );
}

export default App;
