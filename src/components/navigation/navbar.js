import Menus from "./menus";
import SocialLinks from "./social-links";

const NavBar = () => (
  <>
    <div className="nav-divider mb-8"></div>
    <Menus />
    <div className="nav-divider my-8"></div>
    <SocialLinks />
  </>
);

export default NavBar;
