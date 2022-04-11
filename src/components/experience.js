import SITE_DATA from "../site-data.json";

const Experience = () => (
  <section id="experience" className="pb-0">
    <div className="container">
      <div className="section-title h2 text-center mb-8">
        <h2 className="mb-0">Experience</h2>
        <span className="title-letter">E</span>
      </div>

      {SITE_DATA.sections.experience.list.map((experience, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-lg-4 mb-1 mb-lg-0">
              <p className="h5 mb-0">{experience.organization}</p>
              <p className="opacity-75">
                {experience.title}, {experience.workFrom} -
                {experience.workTill || "Present"}
              </p>
            </div>
            <div className="col-lg-8">
              <ul>
                {experience.jobDetails
                  .split(".")
                  .map((content, index) =>
                    content ? <li key={index}>{content}.</li> : null
                  )}
              </ul>
            </div>
            <hr />
          </div>
          <hr />
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
