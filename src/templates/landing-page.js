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
                Our skilled team of product developers can support you from
                initial planning all the way through to launch and delivery with
                a robust Agile development methodology.{" "}
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
                <p className="col-md-8 col-md-offset-2">
                  {" "}
                  We are an Agile team so the development process is based on
                  regular and quick iterations to deliver product quickly and in
                  the best possible quality.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fas fa-laptop-code fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Web Development</h3>
              </div>
              <div className="paragraph-dev">
                <p className="text-center">
                  We use Gatsby to build dynamic and responsive static websites.
                  Our custom CMS solution which is embedded in our websites will
                  give you unlimited customizability without sacrificing design
                  freedom. Our aim was to remove the barriers for you to
                  interact with your content, so we have come up with a solution
                  that does just that.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fa fa-server fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Web Hosting</h3>
              </div>
              <div className="paragraph-web">
                <p className="text-center ">
                  We can host your website using netlify and help you obtain the
                  domain name that you want. No more hidden fees or unexpected
                  extras. We offer a simple monthly service to help you get
                  online within hours.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fas fa-palette fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Web Design</h3>
              </div>
              <div>
                <p className="text-center">
                  Utilizing Adobe XD and UX Desgin best practices, we offer a
                  full design journey to ensure your website works best for your
                  customers. Our process allows you to be involved from the get
                  go, so that we produce the website of your dreams with the
                  experience of your clients dreams. This service shall be
                  available in November 2020 but if you'd like to know more,
                  please get in contact.
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
                  We are Notre Studio. A team of dedicated web designers based
                  in London. We strive for perfection.
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
              <ul className="features landing-bullets">
                <li>
                  <h3 className="fadeIn2">Beautiful Websites</h3>
                  {/* <p className="fadeIn2">
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p> */}
                </li>
                <li>
                  <h3 className="fadeIn2">Great User Experience</h3>
                  {/* <p className="fadeIn2">
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p> */}
                </li>
                <li>
                  <h3 className="fadeIn2">Professional Service</h3>
                  {/* <p className="fadeIn2">
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p> */}
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
        }
      }
    }
  }
`;
