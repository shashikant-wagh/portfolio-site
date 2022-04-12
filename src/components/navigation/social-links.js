import SITE_DATA from "../../site-data.json";

const SocialLinks = ({ theme }) => (
  <nav>
    <ul className="list-inline text-center">
      {SITE_DATA.sections.contact.social.map((social, index) => (
        <li key={index} className="list-inline-item">
          <a
            target="_blank"
            rel="noreferrer"
            href={social.link}
            title={social.source}
            className={`btn btn-sm btn-icon btn-outline-${theme} border-0 rounded-circle`}
          >
            <span className={`btn-icon-inner fab ${social.icon}`}></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SocialLinks;
