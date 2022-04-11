const ContactForm = () => (
  <div className="contact-form">
    <form
      className="mb-0"
      id="cf"
      name="cf"
      action="include/sendemail.php"
      method="post"
    >
      <div className="form-row">
        <div className="form-process"></div>

        <div className="col-12 col-md-6">
          <div className="form-group error-text-white">
            <input
              type="text"
              id="cf-name"
              name="cf-name"
              placeholder="Enter your name"
              className="form-control required"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group error-text-white">
            <input
              type="email"
              id="cf-email"
              name="cf-email"
              placeholder="Enter your email address"
              className="form-control required"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group error-text-white">
            <input
              type="text"
              id="cf-subject"
              name="cf-subject"
              placeholder="Subject (Optional)"
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="form-group error-text-white">
            <textarea
              name="cf-message"
              id="cf-message"
              placeholder="Here goes your message"
              className="form-control required"
              rows="7"
            ></textarea>
          </div>
        </div>

        <div className="col-12 d-none">
          <input
            type="text"
            id="cf-botcheck"
            name="cf-botcheck"
            className="form-control"
          />
        </div>

        <div className="col-12 text-center">
          <button
            className="btn btn-primary"
            type="submit"
            id="cf-submit"
            name="cf-submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
    <div className="contact-form-result text-center"></div>
  </div>
);

export default ContactForm;
