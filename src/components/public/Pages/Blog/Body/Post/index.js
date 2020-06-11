import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../../../../../actions";
import Header from "./Header";
import Content from "./Content";
import ProgressBar from "./ProgressBar";

class Post extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    //Render an individual post
    ///Header, ProgressBar, Content
    return (
      <div className="post">
        <Header />
        <ProgressBar />
        <Content />
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadPosts })(Post);
