import NavBar from "./navigation/navbar";
import SITE_DATA from "../site-data.json";

const Header = () => (
  <header className="site-header bg-transparent">
    <div className="header-inner">
      <div className="overlay">
        <div className="overlay-inner bg-dark opacity-85"></div>
      </div>
      <div className="header-brand">
        {/* <!-- Logo --> */}
        <a href="/" className="logo">
          <span>{SITE_DATA.user}</span>
          <span className="title-letter text-white opacity-15">
            {SITE_DATA.user[0].toUpperCase()}
          </span>
        </a>
      </div>

      <NavBar />
    </div>
  </header>
);

export default Header;
