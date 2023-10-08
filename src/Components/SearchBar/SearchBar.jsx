import './SearchBar.scss';
<<<<<<< HEAD
import { Form } from 'react-bootstrap';
=======
import searchIcon from '../../img/pin.png';
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
import { useState } from 'react';
import { useGlobalContext } from '../../Context/Context';

export default function SearchBar() {
<<<<<<< HEAD
  const { setSearchValue } = useGlobalContext();
=======
  const [isFocused, setIsFocused] = useState(false);
  const {setSearchValue } = useGlobalContext();
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
  const [inputValue, setInputValue] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

<<<<<<< HEAD
  return (
    <Form.Control
      className='searchBar__input'
      type='text'
      placeholder='Location...'
      value={inputValue}
      onChange={handleChange}
      onKeyDown={searchLocation}
    />
=======
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setInputValue('');
  };

  return (
    <div className="searchBar">
      <img
        src={searchIcon}
        className={`searchBar__icon ${
          isFocused ? 'showAnim' : ''
        }`}
        alt="search"
      />
      <input
        className="searchBar__input"
        type="search"
        placeholder="Location..."
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={searchLocation}
      />
    </div>
>>>>>>> 1c3927459b3f95008281a469c778f2059d7600b4
  );
}
