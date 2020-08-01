import React from "react";
import Logo from "../img/logo.inline.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Modal from "react-responsive-modal";

const url =
  "https://notre-studio.us17.list-manage.com/subscribe/post?u=950b2550aa583dda30d47ad41&amp;id=dc8bd5abf1";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const [open, setOpen] = React.useState(false);
  const [hasSuccess, setHasSuccess] = React.useState(false);

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  if (status === "success") {
    if (open !== true && hasSuccess !== true) {
      setOpen(true);
      setHasSuccess(true);
    }
  }

  return (
    <div className="col-md-4">
      <h4>Subscribe to newsletter</h4>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="form-group">
        <div className="input-group">
          <input
            type="email"
            className="form-control footer-input-text"
            ref={(node) => (email = node)}
          />
          <div className="input-group-btn">
            <button
              className="btn btn-primary btn-newsletter "
              onClick={submit}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          classNames={{
            modal: "customModal",
          }}
          styles={{
            modal: {
              animation: `${
                open ? "customEnterAnimation" : "customLeaveAnimation"
              } 500ms`,
            },
          }}
        >
          <div className="emoji fas fa-check-circle"></div>
          <h1 className="text-center">Awesome!</h1>
          <h4 style={{ color: "black" }}>
            {message} Thank you for subscribing!
          </h4>
          <button
            className="btn btn-default btn-lrg text-center"
            onClick={() => setOpen(false)}
          >
            Ok
          </button>
        </Modal>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="section-container footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>About us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sit amet consectetur dolor
                </p>
              </div>
              <div className="col-md-4 text-center">
                <div className="logo">
                  <Logo />{" "}
                </div>
                <p>
                  <a
                    href="https://www.facebook.com/The-Notre-Studio-103423314807167/"
                    target="_blank"
                    className="social-round-icon white-round-icon fa-icon"
                    title=""
                  >
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com/thenotrestudio"
                    target="_blank"
                    className="social-round-icon white-round-icon fa-icon"
                    title=""
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/thenotrestudio/"
                    target="_blank"
                    className="social-round-icon white-round-icon fa-icon"
                    title=""
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </p>
              </div>

              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
