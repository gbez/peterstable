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
    //If there is more than three / in the path, it is a post
    if (numSlash(4)) {
      //Items to pull out of Post
      toExtract = [
        { field: "title", tag: "h1" },
        { field: "subtitle", tag: "h2" },
        { field: "description", tag: "h3" },
      ];
      toRender = <Post extract={toExtract} />;
    } else {
      toRender = <Feed />;
    }
    return <div className="journal">{toRender}</div>;
  }
}

export default Journal;
