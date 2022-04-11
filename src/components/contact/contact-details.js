import SITE_DATA from "../../site-data.json";

const ContactDetails = () => (
  <div className="row mb-8">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="feature-block">
        <div className="feature-icon text-primary mb-4">
          <div className="mx-auto">
            <i className="ti-mobile"></i>
          </div>
        </div>
        <div className="text-center">
          {SITE_DATA.sections.contact.phones.map((phone, index) => (
            <div key={index}> {phone} </div>
          ))}
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-5 mb-md-0">
      <div className="feature-block">
        <div className="feature-icon text-primary mb-4">
          <div className="mx-auto">
            <i className="ti-location-pin"></i>
          </div>
        </div>
        <p className="text-center">{SITE_DATA.sections.contact.address}</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-block">
        <div className="feature-icon text-primary mb-4">
          <div className="mx-auto">
            <i className="ti-email"></i>
          </div>
        </div>
        <div className="text-center">
          {SITE_DATA.sections.contact.emails.map((email, index) => (
            <div key={index}> {email} </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ContactDetails;
