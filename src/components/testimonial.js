import SITE_DATA from "../site-data.json";
import UsmanAliLogo from "../assets/images/usman-ali.png";
import YogeshSuryawanshiLogo from "../assets/images/yogesh-suryawanshi.png";

const Testimonial = () => (
  <section id="testimonial">
    <div className="overlay">
      <div className="overlay-inner bg-image-holder bg-cover bg-center">
        <img src="assets/demo/images/image-5.jpg" alt="background" />
      </div>
      <div className="overlay-inner bg-dark opacity-70"></div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-11 col-xl-10 mx-lg-auto text-center text-white">
          <div
            className="slider dots-light dots-outside"
            data-slick='{"dots":true,"arrows":false}'
          >
            {SITE_DATA.sections.testimonial.users.map((user, index) => (
              <div key={index}>
                <div className="icon icon-5x mb-8">
                  <i className="fa fa-quote-right"></i>
                </div>
                <blockquote>
                  <p className="mb-5"> {user.recommendation} </p>
                  <footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
                    <div className="avatar">
                      <img
                        src={
                          user.name === "Usman Ali"
                            ? UsmanAliLogo
                            : YogeshSuryawanshiLogo
                        }
                        alt=""
                        className="avatar-img rounded-circle shadow-dark"
                      />
                    </div>
                    <div className="ml-5">
                      <a href={user.organization} className="text-light">
                        <h4 className="h6 mb-0">{user.name}</h4>
                        <small className="d-block">{user.role}</small>
                      </a>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
