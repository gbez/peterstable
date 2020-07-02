/*
Basically, we want to just customize Feed and Post for each object.
pass in certain props to Feed and post so that it is Object specific.
*/

import React, { Component, Fragment } from "react";
import Feed from "./utils/Feed";
import Post from "./utils/Post";

class Journal extends Component {
  render() {
    let toRender;
    let toExtract;
    //If there is more than three / in the path, it is a post
    if (window.location.pathname.split("/").length - 1 > 4) {
      //Items to pull out of Post
      toExtract = [
        { field: "slug", tag: "h1" },
        { field: "subtitle", tag: "i" },
      ];
      toRender = (
        <Post extract={toExtract}>
          {/*Content rendered before dynamic post content */}
          <h1>Post Child</h1>
          <p>Blah Blah Blah</p>
        </Post>
      );
    } else {
      toRender = (
        <Feed>
          <h1>Feed</h1>
          <p>Blah Blah Blah</p>
        </Feed>
      );
    }
    return <div className="journal">{toRender}</div>;
  }
}

export default Journal;
