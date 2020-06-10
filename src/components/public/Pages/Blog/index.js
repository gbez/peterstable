import React, { Component } from "react";
import SubscribePopUp from "./Subscribe/SubscribePopUp";
import UnsubscribePage from "./Subscribe/UnsubscribePage";
import BlogBody from "./Body";

class Blog extends Component {
  render() {
    //Return Blog Body
    //Manage Unsubscribe page display
    //Manage Subscribe popup
    return (
      <div className="blog">
        <h1>Blog</h1>
        <SubscribePopUp />
        <UnsubscribePage />
        <BlogBody />
      </div>
    );
  }
}

export default Blog;
