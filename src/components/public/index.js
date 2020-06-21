import React, { Component, useReducer } from "react";
import NavBar from "./NavBar";
import Page from "./Pages";
import Footer from "./Footer";

class Public extends Component {
  render() {
    return (
      <div className="public">
        {this.props.nav && <NavBar />}
        <Page />
        {this.props.footer && <Footer />}
      </div>
    );
  }
}

export default Public;
