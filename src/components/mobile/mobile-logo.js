import SITE_DATA from "../../site-data.json";

const MobileLogo = () => (
  <button className="mobile-logo mobile-logo-dark bg-white">
    <span>{SITE_DATA.user}</span>
  </button>
);

export default MobileLogo;
