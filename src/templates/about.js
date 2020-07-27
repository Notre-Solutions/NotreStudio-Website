import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const about = ({ data }) => {
  const {
    title,
    paragraph1,
    paragraph2,
    hero,
    bodyImageLeft,
    bodyImageRight,
    signature,
  } = data.markdownRemark.frontmatter.aboutPage;
  console.log(data);
  return (
    <Layout current="about">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Img
                className="img-responsive"
                alt=""
                fluid={hero.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <div className="text-center">
                <h1>{title}</h1>
              </div>
              <p className="section-container-spacer">{paragraph1}</p>

              <div className="row section-container-spacer">
                <div className="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={bodyImageLeft.childImageSharp.fluid}
                  />
                </div>
                <div className="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={bodyImageRight.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <p>{paragraph2}</p>
              <small className="signature pull-right">{signature}</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;

export const pageQuery = graphql`
  query aboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutPage {
          title
          paragraph1
          paragraph2
          signature
          hero {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bodyImageLeft {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bodyImageRight {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
