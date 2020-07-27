import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Map from "../components/map";
const contact = ({ data }) => {
  const {
    contactForm,
    employment,
  } = data.markdownRemark.frontmatter.contactPage;
  return (
    <Layout current="contact">
      <div className="section-container no-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div id="map">
                <Map />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-md-6">
                  <form action="" className="reveal-content contact-form">
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send
                    </button>
                  </form>
                </div>

                <div className="col-md-5 col-md-offset-1">
                  <h3>{contactForm.location}</h3>

                  <div>
                    <p>
                      {contactForm.addressLine1} <br />
                      {contactForm.addressLine2}
                    </p>
                  </div>
                  <div>
                    <p>
                      {contactForm.email}
                      <br></br>
                      {contactForm.telephone}
                    </p>
                  </div>

                  <div>
                    <h3>{employment.title}</h3>
                  </div>
                  <div>
                    <p>{employment.description}</p>
                  </div>
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
export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contactPage {
          contactForm {
            location
            telephone
            email
            addressLine1
            addressLine2
          }
          employment {
            title
            description
          }
        }
      }
    }
  }
`;
