import { useEffect, useState } from "react";
import SITE_DATA from "../site-data.json";
import GIT_REPO_DATA from "../git-repo.data.js";

const Portfolio = () => {
  const allTags = [
    ...new Set(Object.values(SITE_DATA.sections.portfolio.packages).flat()),
  ];
  const [packages, setPackages] = useState([]);
  const [monthlyDownloads, setMonthDownloads] = useState([]);

  useEffect(() => {
    const normalizePackageData = (packagesData) => {
      return packagesData
        .filter(({ name }) =>
          Object.keys(SITE_DATA.sections.portfolio.packages).includes(name)
        )
        .reduce(
          (result, pkg) => ({
            ...result,
            [pkg.name]: {
              name: pkg.name,
              url: pkg.html_url,
              description: pkg.description,
            },
          }),
          {}
        );
    };

    const fetchPackageData = async () => {
      const response = await fetch(
        "https://api.github.com/users/shashikant-wagh/repos"
      );
      const packageData = await response.json();

      // const packageData = GIT_REPO_DATA;
      // console.log(packageData);

      const pkg = normalizePackageData(packageData);
      setPackages(pkg);
    };

    fetchPackageData();
  }, []);

  useEffect(() => {
    const fetchPackageDownlods = async () => {
      const downloadsInfo = await Promise.all(
        Object.keys(SITE_DATA.sections.portfolio.packages).map(async (pkg) => {
          const response = await fetch(
            "https://api.npmjs.org/downloads/point/last-month/" + pkg
          );
          return await response.json();
        })
      );

      console.log(downloadsInfo);

      const downloads = downloadsInfo.reduce((result, download) => {
        return {
          ...result,
          [download.package]: download.downloads,
        };
      }, {});

      setMonthDownloads(downloads);
    };

    fetchPackageDownlods();
  }, []);

  return (
    <section id="portfolio" className="bg-light">
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
                {allTags.map((tag, index) => (
                  <li key={index}>
                    <a href="/" data-filter={"." + tag.toLowerCase()}>
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="portfolio-container isotope-container row my-n2 mx-sm-n2 h-auto">
          {Object.values(packages).map((pkg) => (
            <div
              key={pkg.name}
              className="col-md-6 col-xl-4 py-2 px-md-2 isotope-item"
            >
              <div className="feature-block feature-boxed feature-decorated">
                <div className="feature-icon text-primary mb-3">
                  <div>
                    <i className="ti-download"></i>
                    <span className="pl-2" style={{ fontSize: 25 }}>
                      {monthlyDownloads[pkg.name]}
                      <small
                        className="pl-1"
                        style={{ fontSize: 13, color: "#212529" }}
                      >
                        Downloads last month
                      </small>
                    </span>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.npmjs.com/package/${pkg.name}`}
                >
                  <h3 className="h4 mb-2">{pkg.name}</h3>
                </a>
                <p>{pkg.description || pkg.name + " package"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
