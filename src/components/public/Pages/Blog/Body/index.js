import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Feed from "./Feed";

class BlogBody extends Component {
  render() {
    let body = <Feed />;
    if (this.props.selectedObject) {
      body = <Post />;
    }
    return <div className="blog-body">{body}</div>;
  }
}

const mapStateToProps = (state) => ({ selectedObject: state.selectedObject });

export default connect(mapStateToProps)(BlogBody);
