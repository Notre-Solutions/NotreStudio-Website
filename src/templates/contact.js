import React from "react";
import Layout from "../components/layout";

const contact = () => {
  return (
    <Layout current="contact">
      <div className="section-container">
        <div className="container">
          <div className="row text-center">
            <p className="contact-heading">GOT A QUESTION?</p>
            <h1>Contact Notre Studio</h1>
            <p className="col-xs-4 col-xs-offset-4">
              We are here to help and answer any questions you might have. We
              look forward to hearing from you &#128513;
            </p>
          </div>
        </div>
      </div>
      <div className="section-container no-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h3>Contact Us</h3>
                  <form
                    name="contact-form-netlify"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    className="reveal-content contact-form"
                  >
                    <div className="form-group">
                      <p className="hidden">
                        <input
                          type="hidden"
                          name="form-name"
                          value="contact-form-netlify"
                        />
                      </p>
                      <input
                        type="name"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        name="message"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
