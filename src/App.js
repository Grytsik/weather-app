import './App.scss';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import { ColorRing } from 'react-loader-spinner';
import { useGlobalContext } from './Context/Context';
import imagees from '../src/img/computer.png';
import { useEffect } from 'react';
<<<<<<< HEAD
import Forecast from './Components/Forecast/Forecast';
=======
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4

function App() {
  const { loading } = useGlobalContext();

  return (
<<<<<<< HEAD
    <div className='App'>
      <div className='container'>
=======
    <div className="App">
      <div className="container">
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
        <Header />
        {loading ? (
          <ColorRing
            visible={true}
<<<<<<< HEAD
            height='100'
            width='100'
            ariaLabel='blocks-loading'
            wrapperClass='blocks-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : (
          <div className='app__main'>
            <Weather />
            <Forecast />
          </div>
=======
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
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
        )}
      </div>
    </div>
  );
}

export default App;
