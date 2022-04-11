import SITE_DATA from "../site-data.json";
import ContactDetails from "./contact/contact-details";
import ContactForm from "./contact/contact-form";

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-lg-auto">
          <div className="row mb-8">
            <div className="col-lg-8 mx-lg-auto text-center">
              <div className="section-title h2 mb-3">
                <h2 className="mb-0">Contact</h2>
                <span className="title-letter">C</span>
              </div>
              <p> {SITE_DATA.sections.contact.title} </p>
            </div>
          </div>

          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
