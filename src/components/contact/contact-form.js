import { useState } from "react";
import SITE_DATA from "../../site-data.json";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    message: "",
    subject: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    window.Email.send({
      Host: SITE_DATA.SMTP_SERVER.host,
      Username: SITE_DATA.SMTP_SERVER.username,
      Password: SITE_DATA.SMTP_SERVER.password,
      To: SITE_DATA.SMTP_SERVER.to,
      From: formData.from,
      Subject: formData.body,
      Body: formData.subject,
    });

    setFormData({
      from: "",
      message: "",
      subject: "",
    });
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className="contact-form">
      <form className="mb-0" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-process"></div>

          <div className="col-12">
            <div className="form-group error-text-white">
              <input
                type="email"
                id="from"
                className="form-control required"
                placeholder="Enter your email address"
                value={formData.from}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group error-text-white">
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 mb-4">
            <div className="form-group error-text-white">
              <textarea
                rows="7"
                id="message"
                className="form-control required"
                placeholder="Here goes your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </form>
      <div className="contact-form-result text-center"></div>
    </div>
  );
};

export default ContactForm;
