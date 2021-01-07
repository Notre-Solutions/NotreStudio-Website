import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PricingSection from "../components/pricingSection";
const pricing = ({ data }) => {
  const {
    title,
    description,
    webDev,
    hosting,
    webDesign,
  } = data.markdownRemark.frontmatter.pricingPage;
  return (
    <Layout current="pricing">
      <div>
        <div className="section-container">
          <div className="container">
            <div className="row section-container-spacer">
              {/* <div className="col-xs-12"> */}
              {/* <div className="text-center white-text-container">
                  <h1>{title}</h1>
                </div> */}
              {/* <div className="col-md-8 col-md-offset-2 text-center white-text-container">
                  <p>{description}</p>
                </div> */}
              {/* </div> */}
            </div>
            <div className="row section-container-spacer">
              <PricingSection
                title={webDev.title}
                cards={webDev.cards}
                description={webDev.description}
                color={webDev.color}
                button={webDev.button}
              />
              <br />
              <PricingSection
                title={hosting.title}
                cards={hosting.cards}
                description={hosting.description}
                color={hosting.color}
                button={hosting.button}
              />
              <br />
              {/* <PricingSection
                title={webDesign.title}
                cards={webDesign.cards}
                description={webDesign.description}
                color={webDesign.color}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default pricing;
export const pageQuery = graphql`
  query PricingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        pricingPage {
          title
          description
          webDev {
            title
            description
            color
            button
            cards {
              title
              amount
              currency
              period
              to
              features {
                feature
              }
            }
          }
          hosting {
            title
            description
            color
            button
            cards {
              title
              amount
              currency
              period
              to
              features {
                feature
              }
            }
          }
          webDesign {
            title
            description
            color
            button
            cards {
              title
              amount
              currency
              to
              period
              features {
                feature
              }
            }
          }
        }
      }
    }
  }
`;
