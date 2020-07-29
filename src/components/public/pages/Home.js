import React, { Component, Fragment } from "react";
import Feed from "./utils/Feed";

class Home extends Component {
  render() {
    const sections = [
      {
        name: "TEST",
        filter: { key: "page", value: "journal" },
        numItems: 1,
      },
      {
        name: "Latest",
        filter: { key: "page", value: "journal" },
        numItems: 2,
      },
      {
        name: "Musings",
        filter: { key: "subpage", value: "musings" },
        numItems: 3,
      },
    ];
    return (
      <div className="home">
        <Feed sections={sections}></Feed>
      </div>
    );
  }
}

export default Home;
