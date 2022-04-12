import SITE_DATA from "../site-data.json";
import SocialLinks from "./navigation/social-links";
import Avatar from "../assets/images/user-avatar.png";

const Banner = () => (
  <div id="page-cover" className="page-cover">
    <div className="page-cover-wrapper-fixed">
      <div className="page-cover-bg">
        <div className="overlay-inner bg-image-holder bg-cover">
          <img src="demo/images/image-12.jpg" alt="background" />
        </div>
        <div className="overlay-inner bg-primary opacity-85"></div>
      </div>
      <div className="page-cover-wrap">
        <section id="home" className="d-flex min-vh-100">
          <div className="container align-self-center text-white text-center">
            <div className="avatar avatar-xxl mb-6">
              <div className="avatar-shape avatar-shape-rounded bg-white mt-n2 mb-n2 mr-n2"></div>
              <img
                alt="alt"
                src={Avatar}
                className="avatar-img rounded-circle shadow-light"
              />
            </div>

            <h3 className="mb-5">Hi There !</h3>
            <div id="typed-strings">
              <p>{SITE_DATA.user}</p>
              <p>{SITE_DATA.title}</p>
            </div>

            <h1 className="mb-5">
              <span className="font-weight-normal">I Am </span>
              <span id="typed"></span>
            </h1>

            <span className="cover-letter letter-xl text-white opacity-10">
              {SITE_DATA.user[0].toUpperCase()}
            </span>

            <SocialLinks theme="white" />
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Banner;
