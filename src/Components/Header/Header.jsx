import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <h1 className="header__title">
          <span className="header__span">weather</span> app
        </h1>
        <SearchBar/>
      </div>
    </div>
  );
}
