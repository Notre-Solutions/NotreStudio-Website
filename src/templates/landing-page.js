import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

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
              <h1>Posuere lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum
                dolor sit amet consectetur adipiscing elit.{" "}
              </p>
              <Link
                href="/download"
                title=""
                className="btn btn-lg btn-primary"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container border-section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Vivamus laoreet</h2>
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
                <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
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
                <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
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
                <i className="fa fa-bell-o fa-3x" aria-hidden="true"></i>
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

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img5.childImageSharp.fluid}
                    />
                  </div>
                  <div className="item">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img7.childImageSharp.fluid}
                    />
                  </div>
                  <div className="item">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img5.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
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
                <h2>Vivamus laoreet</h2>
                <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac. Id
                  cursus metus aliquam eleifend mi.{" "}
                </p>
                <a
                  href="./download.html"
                  title=""
                  className="btn btn-primary btn-lg"
                >
                  Download
                </a>
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
                  <h3>Dui augue</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3>Malesuada</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3>Bibendum</h3>
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-4">
                <Img
                  className="img-responsive page-base-image"
                  alt=""
                  fluid={logo01.childImageSharp.fluid}
                />
              </div>
              <div className="col-md-4">
                <Img
                  className="img-responsive page-base-image"
                  alt=""
                  fluid={logo02.childImageSharp.fluid}
                />
              </div>
              <div className="col-md-4">
                <Img
                  className="img-responsive page-base-image"
                  alt=""
                  fluid={logo03.childImageSharp.fluid}
                />
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
