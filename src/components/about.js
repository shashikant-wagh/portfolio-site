import SITE_DATA from "../site-data.json";

const About = () => (
  <section id="about">
    <div className="container">
      <div className="section-title h2 text-center mb-8">
        <h2 className="mb-0">About Me</h2>
        <span className="title-letter">A</span>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 d-none d-lg-block">
          <img
            className="img-fluid w-100 rounded"
            src="assets/demo/images/avatar.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-8">
          <h3>{SITE_DATA.user}</h3>
          <p className="lead">{SITE_DATA.title}</p>
          <p className="mb-5">{SITE_DATA.sections.about.title}</p>
          <div className="row mb-8">
            <div className="col-md-6 mb-5 mb-md-0">
              <h4 className="mb-4">Education</h4>
              {SITE_DATA.sections.about.education.map((education, index) => (
                <div key={index}>
                  <p className="h5">{education.university}</p>
                  <p>
                    {education.major}, {education.year}
                  </p>
                </div>
              ))}
            </div>

            {SITE_DATA.sections.about.awards.length ? (
              <div className="col-md-6">
                <h4 className="mb-4">Awards</h4>
                {SITE_DATA.sections.awards.map((award, index) => (
                  <div key={index}>
                    <p className="h5">{award.fromOrganization}</p>
                    <p>
                      {award.title}, {award.year}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <a href="/" className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn btn-light scrollto">
            Send Message
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
