import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import Logo from "../img/fullLogo.inline.svg";
import gsap from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";
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
    console.log(this.props.current);
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
                <ul className="nav navbar-nav navbar-right">
                  <li
                    className={classnames("", {
                      "dropdown active": this.state.active,
                    })}
                  >
                    <AniLink
                      to="/"
                      className={classnames("", {
                        current: this.props.current === "landing",
                      })}
                    >
                      Home
                    </AniLink>
                  </li>
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
                      className={classnames("", {
                        current: this.props.current === "about",
                      })}
                    >
                      About
                    </TransitionLink>
                  </li>
                  <li>
                    <AniLink
                      cover
                      to="/pricing"
                      className={classnames("", {
                        current: this.props.current === "pricing",
                      })}
                    >
                      Pricing
                    </AniLink>
                  </li>
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
                      className={classnames("", {
                        current: this.props.current === "contact",
                      })}
                    >
                      Contact
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink
                      to="/projects"
                      className={classnames("", {
                        current: this.props.current === "projects",
                      })}
                    >
                      Projects
                    </TransitionLink>
                  </li>
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
