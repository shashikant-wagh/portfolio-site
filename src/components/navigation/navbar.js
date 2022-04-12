import Menus from "./menus";
import SocialLinks from "./social-links";
import SITE_DATA from "../../site-data.json";

const NavBar = () => (
  <>
    <header className="site-header site-header-dark bg-white">
      <div className="header-inner">
        <div className="header-brand">
          {/* <!-- Logo --> */}
          <a href="/" className="logo">
            <span>{SITE_DATA.user}</span>
            <span className="title-letter">
              {SITE_DATA.user[0].toUpperCase()}
            </span>
          </a>
        </div>
        <div className="nav-divider bg-dark mb-5"></div>
        <Menus />
        <div className="nav-divider bg-dark my-5"></div>
        <SocialLinks theme="dark" />
      </div>
    </header>
  </>
);

export default NavBar;
