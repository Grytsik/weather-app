import { useState } from 'react';
import './Search.css';

export default function Search({searchInputValue}) {

  const handleSearchInput = (event) => {
    if (event.key === 'Enter') {
      searchInputValue(event.target.value);
    };
  };

  return (
    <div>
      <input
          type="text"
          placeholder="type city..."
          className="search__input"
					onKeyPress={handleSearchInput}
        />
    </div>
  );
}
