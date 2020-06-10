import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import ProgressBar from "./ProgressBar";

class BlogBody extends Component {
  render() {
    //Render Header of Blog
    //Render Progress Bar
    //Render Content
    return (
      <div className="body">
        <Header />
        <ProgressBar />
        <Content />
      </div>
    );
  }
}

export default BlogBody;
