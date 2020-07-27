import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import AppStoreCard from "../components/AppStoreCard";

const download = ({ data }) => {
  const {
    title,
    description,
    quote,
    cards,
  } = data.markdownRemark.frontmatter.downloadPage;

  return (
    <Layout current="download">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <div className="section-container-spacer">
                <div className="text-center">
                  <h1>{title}</h1>
                </div>
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {cards.map((card) => {
              return (
                <AppStoreCard
                  store={card.store}
                  line1={card.line1}
                  line2={card.line2}
                  link={card.link}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <blockquote>
                  <p>
                    “{quote.text}”<small className="">{quote.author}</small>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default download;

export const pageQuery = graphql`
  query downloadQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        downloadPage {
          title
          description
          quote {
            text
            author
          }
          cards {
            line1
            line2
            store
            link
          }
        }
      }
    }
  }
`;
