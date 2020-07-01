import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setQuery } from "../../actions";
import NavBar from "../public/NavBar";
import Footer from "../public/Footer";

/* PROPS
1. component
  a. REQUIRED: true
  b. DEFAULT: none
  c. DESCRIPTION: Component to render based on path.
2. queryOverride
  a. REQUIRED: false
  b. DEFAULT: window pathname
  c. DESCRIPTION: to override query for API call
3. navbarDisable
  a. REQUIRED: false
  b. DEFAULT: false
  c. DESCRIPTION: Option to disable render navbar
4. footerDisable
  a. REQUIRED: false
  b. DEFAULT: false
  c. DESCRIPTION: Option to disable render footer
*/

class PublicRoute extends Component {
  render() {
    let query = this.props.queryOverride
      ? this.props.queryOverride
      : window.location.pathname;
    this.props.setQuery(query);
    const Component = this.props.component;
    return (
      <Fragment>
        {(this.props.navbarDisable ? false : true) && <NavBar />}
        <Component />
        {(this.props.footerDisable ? false : true) && <Footer />}
      </Fragment>
    );
  }
}

export default connect(null, { setQuery })(PublicRoute);
