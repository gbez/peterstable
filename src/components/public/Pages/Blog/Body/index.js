import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Feed from "./Feed";

class BlogBody extends Component {
  render() {
    //Render either a feed or an individual post
    //based on if it has a selected object or not
    let body;
    body = <Post />;
    //Switch case for body or feed from URL or props?
    return <div className="blog-body">{body}</div>;
  }
}

const mapStateToProps = (state) => ({ selectedObject: state.selectedObject });

export default BlogBody;
