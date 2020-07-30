import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

function projectsArray(array) {
  var newArray = [];

  for (let j = 0; j < array.length; j++) {
    if (j % 2 === 1) {
      continue;
    } else {
      if (array[j + 1]) {
        newArray.push(
          <>
            <div className="row section-container-spacer">
              <div className="col-md-6">
                <a href={array[j].link} target="_blank">
                  <Img
                    className="img-responsive hover-website-link website-picture-links"
                    alt=""
                    fluid={array[j].img.childImageSharp.fluid}
                  />
                </a>
              </div>

              <div className="col-md-6">
                <a
                  href={array[j + 1].link}
                  target="_blank"
                  className="img-wrapper"
                >
                  <Img
                    className="img-responsive inner-img hover-website-link website-picture-links responsive-margin-top"
                    alt=""
                    fluid={array[j + 1].img.childImageSharp.fluid}
                  />
                </a>
              </div>
            </div>
          </>
        );
      } else if (array[j]) {
        newArray.push(
          <>
            <div className="row section-container-spacer">
              <div className="col-md-12">
                <a
                  href={array[j].link}
                  target="_blank"
                  className="website-container"
                >
                  <Img
                    className="img-responsive hover-website-link website-picture-links"
                    alt=""
                    fluid={array[j].img.childImageSharp.fluid}
                  />
                </a>
              </div>
            </div>
          </>
        );
      }
    }
  }

  return newArray;
}

const projects = ({ data }) => {
  const {
    title,
    hero,
    projects,
  } = data.markdownRemark.frontmatter.projectsPage;

  return (
    <Layout current="projects">
      <div className="page-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-lg-offset-2 ">
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
            <div className="col-md-12">
              <div className="text-center">
                <h2>{title}</h2>
              </div>
              <div className="padding-top">{projectsArray(projects)}</div>
            </div>

            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum
                dolor sit amet consectetur adipiscing elit.
              </p>
              <small className="signature pull-right">Nyasha & Stephen</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
export const pageQuery = graphql`
  query ProjectsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectsPage {
          title
          hero {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          projects {
            img {
              childImageSharp {
                fluid(maxWidth: 10000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            link
          }
        }
      }
    }
  }
`;
