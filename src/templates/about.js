import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollDown from "../components/ScrollDown";

const about = ({ data }) => {
  const {
    title,
    paragraph1,
    paragraph2,
    hero,
    team,
    signature,
  } = data.markdownRemark.frontmatter.aboutPage;
  console.log(data);
  return (
    <Layout current="about">
      {/* <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center page-heading">
              <h1>ABOUT</h1>
            </div>
          </div>
          <ScrollDown />
        </div>
      </div> */}
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2 ">
              <div className="text-center" id="team">
                <h1>{title}</h1>
              </div>
              <p className="section-container-spacer ">{paragraph1}</p>
              <div className="text-center padding-top">
                <h1>{team.title}</h1>
              </div>
              <div className="row section-container-spacer text-center ">
                <p className="col-md-8 col-md-offset-2">{team.paragraph}</p>
                {team.members.map((member) => {
                  return (
                    <>
                      <div className="col-md-6 padding-top">
                        <Img
                          className="img-responsive member"
                          alt=""
                          fluid={member.img.childImageSharp.fluid}
                        />
                        <h4>{member.name}</h4>
                        <h3>{member.job}</h3>
                        <p>{member.message}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="col-xs-12 col-md-8 col-md-offset-2 text-center padding-top">
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
          team {
            title
            paragraph
            members {
              name
              job
              message
              img {
                childImageSharp {
                  fluid(maxWidth: 10000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
