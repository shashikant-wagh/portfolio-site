import SITE_DATA from "../../site-data.json";

const MobileLogo = () => (
  <a href="/" className="mobile-logo mobile-logo-light">
    <div className="overlay">
      <div className="overlay-inner bg-dark opacity-50"></div>
    </div>
    <span>{SITE_DATA.user}</span>
  </a>
);

export default MobileLogo;
