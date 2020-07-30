import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import classnames from "classnames";
import Logo from "../img/fullLogo.inline.svg";
import Img from "gatsby-image";
import gsap from "gsap";
import TransitionLink, {
  TransitionPortal,
} from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.verticalAnimation = this.verticalAnimation.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === "up" ? "-100%" : "100%";
    const directionFrom = direction === "up" ? "100%" : "-100%";

    // convert ms to s for gsap
    const seconds = length;

    return gsap
      .timeline()
      .set(this.transitionCover, { y: directionFrom })
      .to(this.transitionCover, {
        y: "0%",
        ease: "power1.easeInOut",
        duration: seconds / 2,
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, {
        y: directionTo,
        ease: "power1.easeIn",
        duration: seconds / 2,
      });
  };

  test(entry, node) {
    return gsap.from(node.querySelectorAll("h2, p, a, pre"), {
      opacity: 0,
      y: "+=50",
      duration: 1,
      stagger: 0.1,
    });
  }

  render() {
    return (
      <>
        <header>
          <nav className="navbar  navbar-fixed-top navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle uarr collapsed"
                  onClick={this.toggleClass}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand">
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
              </div>

              <div
                className={classnames("collapse navbar-collapse", {
                  "collapse in": this.state.active,
                })}
                id="navbar-collapse-uarr"
              >
                {/* <StaticQuery
                  query={graphql`
                    query HeaderPic {
                      file(relativePath: { eq: "Notre Studio2-02.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 10000, quality: 100) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={(data) => (
                    <Link to="/" className="active home-img">
                      <Img
                        className="img-responsive page-base-image"
                        alt=""
                        fluid={data.file.childImageSharp.fluid}
                      />
                    </Link>
                  )}
                /> */}
                <ul className="nav navbar-nav navbar-right">
                  <li
                    className={classnames("", {
                      "dropdown active": this.state.active,
                    })}
                  >
                    <AniLink to="/" className="active">
                      Home
                    </AniLink>
                  </li>
                  {/* <li>
                    <Link to="/about"> About</Link>
                  </li> */}
                  <li>
                    <TransitionLink
                      to="/about"
                      exit={{
                        length: 1,
                        trigger: ({ exit }) =>
                          this.verticalAnimation(exit, "down"),
                        state: { test: "exit state" },
                      }}
                      entry={{
                        delay: 0.5,
                        trigger: ({ entry, node }) => this.test(entry, node),
                      }}
                    >
                      About
                    </TransitionLink>
                  </li>
                  <li>
                    <AniLink cover to="/pricing">
                      Pricing
                    </AniLink>
                  </li>
                  {/* <li>
                    <Link to="/pricing"> Pricing </Link>
                  </li> */}
                  <li>
                    <TransitionLink
                      to="/contact"
                      exit={{
                        length: 1,
                        trigger: ({ exit }) =>
                          this.verticalAnimation(exit, "down"),
                        state: { test: "exit state" },
                      }}
                      entry={{
                        delay: 0.5,
                        trigger: ({ entry, node }) => this.test(entry, node),
                      }}
                    >
                      Contact
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink to="/projects">Projects</TransitionLink>
                  </li>
                  {/* <li>
                    <Link to="/components">Components</Link>
                  </li> */}
                  {/* <li>
                    <p>
                      <Link
                        to="/download"
                        className="btn btn-primary navbar-btn"
                      >
                        Download
                      </Link>
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default navbar;
