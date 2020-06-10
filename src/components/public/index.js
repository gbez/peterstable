import React, { Component } from "react";
import NavBar from "./NavBar";
import Page from "./Pages";
import Footer from "./Footer";

class Public extends Component {
  render() {
    return (
      <div className="public">
        {/* Comment 
            1. NavBar
            2. Page
            3. Footer
          */}
        <NavBar />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default Public;
