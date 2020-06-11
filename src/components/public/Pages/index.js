import React, { Component } from "react";
import Blog from "./Blog";

class Page extends Component {
  render() {
    let page;
    page = <Blog />;
    //Switch Case based on redux state of page
    return <div className="page">{page}</div>;
  }
}

export default Page;
