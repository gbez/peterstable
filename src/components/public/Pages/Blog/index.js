import React, { Component } from "react";
import SubscribePopUp from "./Subscribe/SubscribePopUp";
import UnsubscribePage from "./Subscribe/UnsubscribePage";
import BlogBody from "./Body";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <SubscribePopUp />
        <UnsubscribePage />
        <BlogBody />
      </div>
    );
  }
}

export default Blog;
