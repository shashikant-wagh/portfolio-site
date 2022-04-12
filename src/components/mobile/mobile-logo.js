import SITE_DATA from "../../site-data.json";

const MobileLogo = () => (
  <a href="/" className="mobile-logo mobile-logo-dark bg-white">
    <span>{SITE_DATA.user}</span>
  </a>
);

export default MobileLogo;
