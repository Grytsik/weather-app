import SearchBar from '../SearchBar/SearchBar';
import headerLogo from '../../img/cloudy.png';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__title">
          <img
            className="header__logo"
            src={headerLogo}
            alt="logo"
          />
          <h1 className="header__brand">Weather</h1>
        </div>
        {/* <h1 className="header__title">
          <span className="header__span">weather</span> <p>app</p>
          
        </h1> */}
        <SearchBar />
      </div>
    </div>
  );
}
