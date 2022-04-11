import { useEffect, useState } from "react";
import SITE_DATA from "../site-data.json";

// https://api.npmjs.org/downloads/point/last-month/props-to-data
// https://registry.npmjs.org/props-to-data

const Portfolio = () => {
  const [packages, setPackages] = useState([]);
  const [monthlyDownloads, setMonthDownloads] = useState([]);

  useEffect(() => {
    const fetchPackageData = async () => {
      const response = await fetch(
        "https://api.github.com/users/shashikant-wagh/repos"
      );
      const packageData = await response.json();

      const pkg = packageData
        .filter(({ name }) =>
          Object.keys(SITE_DATA.sections.portfolio.packages).includes(name)
        )
        .map((pkg) => ({
          name: pkg.name,
          url: pkg.html_url,
          description: pkg.description,
        }));

      setPackages(pkg);
    };

    fetchPackageData();
  }, []);

  useEffect(() => {
    const fetchPackageDownlods = async () => {
      const response = await fetch(
        "https://api.npmjs.org/downloads/point/last-month/props-to-data"
      );
      const packageData = await response.json();
      console.log(packageData);
    };

    fetchPackageDownlods();
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-10 col-xl-8 mx-lg-auto text-center">
            <div className="section-title h2 mb-3">
              <h2 className="mb-0">Portfolio</h2>
              <span className="title-letter">P</span>
            </div>
            <p> {SITE_DATA.sections.portfolio.title} </p>
            <nav className="portfolio-filter isotope-filter">
              <ul className="justify-content-center">
                <li>
                  <a href="/" className="active" data-filter="*">
                    All
                  </a>
                </li>
                <li>
                  <a href="/" data-filter=".web">
                    Web
                  </a>
                </li>
                <li>
                  <a href="/" data-filter=".brand">
                    Brand
                  </a>
                </li>
                <li>
                  <a href="/" data-filter=".design">
                    Design
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="portfolio-container isotope-container row my-n2 mx-sm-n2">
          {packages.map((pkg) => (
            <a
              href={pkg.url}
              style={{ color: "#212529" }}
              className="col-md-6 col-xl-4 py-2 px-md-2 isotope-item"
            >
              <div className="feature-block feature-boxed feature-decorated">
                <div className="feature-icon text-primary mb-3">
                  <div>
                    <i className="ti-download"></i>
                  </div>
                </div>
                <h3 className="h4 mb-2">{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>
            </a>
          ))}

          <div className="col-md-6 col-xl-4 py-2 px-md-2 isotope-item web">
            <div className="feature-block feature-boxed feature-decorated">
              <div className="feature-icon text-primary mb-3">
                <div>
                  <i className="ti-timer"></i>
                </div>
              </div>
              <h3 className="h4 mb-2">Launch Quickly</h3>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 py-2 px-md-2 isotope-item web">
            <div className="feature-block feature-boxed feature-decorated">
              <div className="feature-icon text-primary mb-3">
                <div>
                  <i className="ti-timer"></i>
                </div>
              </div>
              <h3 className="h4 mb-2">Launch Quickly</h3>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 py-2 px-md-2 isotope-item brand">
            <div className="feature-block feature-boxed feature-decorated">
              <div className="feature-icon text-primary mb-3">
                <div>
                  <i className="ti-timer"></i>
                </div>
              </div>
              <h3 className="h4 mb-2">Launch Quickly</h3>
              <p>
                Quisque ultrices non velit sit amet consectetur. Cras turpis
                dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla
                rutrum arcu sed ligula malesuada, quis condimentum eros
                sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
