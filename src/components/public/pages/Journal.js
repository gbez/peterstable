/*
Basically, we want to just customize Feed and Post for each object.
pass in certain props to Feed and post so that it is Object specific.
*/

import React, { Component, Fragment } from "react";
import Feed from "./utils/Feed";
import Post from "./utils/Post";
import { numSlash } from "./utils/helpers";

class Journal extends Component {
  render() {
    let toRender;
    let toExtract;
    const sections = [
      {
        name: "Featured",
        filter: { key: "page", value: "journal" },
        numItems: 3,
      },
    ];
    if (numSlash(4)) {
      toExtract = [
        { field: "title", tag: "h1" },
        { field: "subtitle", tag: "h2" },
      ];
      toRender = <Post extract={toExtract} />;
    } else {
      toRender = <Feed sections={sections} />;
    }
    return <div className="journal">{toRender}</div>;
  }
}

export default Journal;
