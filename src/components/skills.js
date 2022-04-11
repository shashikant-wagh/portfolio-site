import SITE_DATA from "../site-data.json";

const Skills = () => {
  const skillsList = SITE_DATA.sections.skill.list;
  return (
    <section id="skills" className="bg-light">
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
            <div className="section-title h2 mb-3">
              <h2 className="mb-0">Skills</h2>
              <span className="title-letter">S</span>
            </div>
            <p> {SITE_DATA.sections.skill.title} </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            {skillsList
              .slice(0, Math.ceil(skillsList.length / 2))
              .map((skill, index) => (
                <div key={index}>
                  <p className="h6 mb-1">{skill.label}</p>
                  <div
                    className="progress mb-6 rounded-0"
                    style={{ height: 5 }}
                  >
                    <div
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuenow="85"
                      aria-valuemax="100"
                      style={{ width: skill.grading }}
                      className="progress-bar"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="col-md-6">
            {skillsList
              .slice(Math.ceil(skillsList.length / 2))
              .map((skill, index) => (
                <div key={index}>
                  <p className="h6 mb-1">{skill.label}</p>
                  <div
                    className="progress mb-6 rounded-0"
                    style={{ height: 5 }}
                  >
                    <div
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuenow="85"
                      aria-valuemax="100"
                      style={{ width: skill.grading }}
                      className="progress-bar"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
