import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../img/arrow.inline.svg";

const Landing = ({ data }) => {
  const {
    img5,
    img6,
    img7,
    logo01,
    logo02,
    logo03,
  } = data.markdownRemark.frontmatter.landingPage;
  console.log(data);
  return (
    <Layout current="landing">
      <div className="white-text-container background-image-container bg">
        <div className="opacity"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Get Your Business Online</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum
                dolor sit amet consectetur adipiscing elit.{" "}
              </p>
              <Link to="/download" title="" className="btn btn-lg btn-primary">
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="white-text-container section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>What We Offer</h2>
                <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="fa-container">
                <i className="fa fa-server fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Consectetur</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fas fa-laptop-code fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Malesuada</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fas fa-palette fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Phasellus</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container background-color-container white-text-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h2>Why Hire Us?</h2>
                <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac. Id
                  cursus metus aliquam eleifend mi.{" "}
                </p>
                <Link
                  href="/projects"
                  title=""
                  className="btn btn-primary btn-lg"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Img
                className="img-responsive"
                alt=""
                fluid={img6.childImageSharp.fluid}
              />
            </div>

            <div className="col-md-5">
              <ul className="features">
                <li>
                  <h3>Beautiful Websites</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3>Great User Experience</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3>Professional Service</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container background-color-container white-text-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Lets Work Together</h2>
              <div className="arrrow">
                <Arrow />
                <span className="arrow-text">Start a Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          img5 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img6 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img7 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo03 {
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
