import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import classnames from "classnames";
import Img from "gatsby-image";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
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
                <Link className="navbar-brand" to="/"></Link>
              </div>

              <div
                className={classnames("collapse navbar-collapse", {
                  "collapse in": this.state.active,
                })}
                id="navbar-collapse-uarr"
              >
                <StaticQuery
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
                />
                <ul className="nav navbar-nav navbar-right">
                  <li
                    className={classnames("", {
                      "dropdown active": this.state.active,
                    })}
                  >
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about"> About</Link>
                  </li>
                  <li>
                    <Link to="/pricing"> Pricing </Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/components">Components</Link>
                  </li>
                  <li>
                    <p>
                      <Link
                        to="/download"
                        className="btn btn-primary navbar-btn"
                      >
                        Download
                      </Link>
                    </p>
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
