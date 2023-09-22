import './SearchBar.scss';
import searchIcon from '../../img/pin.png';
import { useState } from 'react';
import { useGlobalContext } from '../../Context/Context';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const {setSearchValue } = useGlobalContext();
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
  );
}
