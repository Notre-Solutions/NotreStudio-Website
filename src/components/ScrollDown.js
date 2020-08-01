import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class ScrollDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos:
        typeof window !== `undefined` ? window.pageYOffset : undefined,
      visible: false,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos =
      typeof window !== `undefined` ? window.pageYOffset : undefined;
    const visible =
      prevScrollpos !== currentScrollPos && currentScrollPos !== 0;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    if (!this.state.visible) {
      return (
        <AnchorLink className="ctn-icon" href="#team" offset={() => 50}>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </AnchorLink>
      );
    } else {
      return <div></div>;
    }
  }
}
