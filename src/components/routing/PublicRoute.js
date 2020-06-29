import React, { Component, Fragment } from "react";
import NavBar from "../public/NavBar";
import Footer from "../public/Footer";

class PublicRoute extends Component {
  render() {
    const Component = this.props.component;

    return (
      <Fragment>
        <NavBar />
        <Component />
        <Footer />
      </Fragment>
    );
  }
}

export default PublicRoute;
