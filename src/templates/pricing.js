import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import PricingCard from "../components/pricingCard";
const pricing = ({ data }) => {
  const {
    title,
    description,
    cards,
  } = data.markdownRemark.frontmatter.pricingPage;
  return (
    <Layout current="pricing">
      <div>
        <div className="section-container">
          <div className="container">
            <div className="row section-container-spacer">
              <div className="col-xs-12">
                <div className="text-center">
                  <h1>{title}</h1>
                </div>
                <div className="col-md-8 col-md-offset-2">
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {cards.map((obj) => {
                return (
                  <PricingCard
                    title={obj.title}
                    amount={obj.amount}
                    currency={obj.currency}
                    period={obj.period}
                    features={obj.features}
                    to={obj.to}
                  />
                );
              })}
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
          cards {
            title
            amount
            currency
            period
            features {
              feature
            }
          }
        }
      }
    }
  }
`;
