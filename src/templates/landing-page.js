import React, { useRef } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../img/arrow.inline.svg";
import gsap from "gsap";
import { useIntersection } from "react-use";

const Landing = ({ data }) => {
  const { img6, img5, img7 } = data.markdownRemark.frontmatter.landingPage;

  // this is to target the element you want to animate
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const sectionRef2 = useRef(null);
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeInX = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOutX = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: 60,
      ease: "power4.out",
    });
  };

  const fadeInY = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -10,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOutY = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 0,
      ease: "power4.out",
    });
  };

  if (intersection2 !== null) {
    intersection2 && intersection2.intersectionRatio < 0.5
      ? // Not reached
        fadeOutX(".fadeIn2")
      : fadeInX(".fadeIn2"); // reached soi animate
  }

  if (intersection !== null) {
    intersection && intersection.intersectionRatio < 1
      ? // Not reached
        fadeOutY(".fadeIn")
      : fadeInY(".fadeIn"); // reached soi animate
  }

  if (sectionRef === null || sectionRef2 === null) {
    return <></>;
  }

  return (
    <Layout current="landing">
      <div className="white-text-container background-image-container bg">
        <div className="opacity"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="move-from-left">Get Your Business Online</h1>
              <p className="move-from-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum
                dolor sit amet consectetur adipiscing elit.{" "}
              </p>
              <Link
                to="/projects"
                title=""
                className="btn btn-lg btn-primary move-from-bottom"
              >
                Our Work
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

      <div
        ref={sectionRef}
        className="section-container background-color-container white-text-container"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h2 className="fadeIn">Why Hire Us?</h2>
                <p className="fadeIn">
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac. Id
                  cursus metus aliquam eleifend mi.{" "}
                </p>
                <Link
                  to="/projects"
                  title=""
                  className="btn btn-primary btn-lg fadeIn"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" ref={sectionRef2}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="composition">
                <Img
                  className="composition__photo composition__photo--p1"
                  alt=""
                  fluid={img6.childImageSharp.fluid}
                />
                <Img
                  className="composition__photo composition__photo--p2"
                  alt=""
                  fluid={img5.childImageSharp.fluid}
                />
                <Img
                  className="composition__photo composition__photo--p3"
                  alt=""
                  fluid={img7.childImageSharp.fluid}
                />
              </div>
            </div>

            <div className="col-md-5">
              <ul className="features">
                <li>
                  <h3 className="fadeIn2">Beautiful Websites</h3>
                  <p className="fadeIn2">
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3 className="fadeIn2">Great User Experience</h3>
                  <p className="fadeIn2">
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </li>
                <li>
                  <h3 className="fadeIn2">Professional Service</h3>
                  <p className="fadeIn2">
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

              <div className="arrow">
                <Arrow />
                <a
                  href="https://www.fiverr.com/notrestudio/design-and-implement-professional-websites-903e"
                  target="_blank"
                  className="arrow-text"
                >
                  Create a Website
                </a>
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
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          img6 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          img7 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo03 {
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
