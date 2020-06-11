import React, { Component } from "react";
import FeedItem from "./FeedItem";

class Feed extends Component {
  render() {
    //Render Feed
    //Map List of posts to post items
    //Maybe display some type of thing at the top of the page.
    //Like what category we are currently in or something like that.
    return (
      <div className="feed">
        <FeedItem />
      </div>
    );
  }
}

export default Feed;
