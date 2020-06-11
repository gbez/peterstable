import React, { Component } from "react";
import Post from "./Post";
import Feed from "./Feed";

class BlogBody extends Component {
  render() {
    //Render either a feed or an individual post
    let body;
    body = <Post />;
    //Switch case for body or feed from URL or props?
    return <div className="blog-body">{body}</div>;
  }
}

export default BlogBody;
