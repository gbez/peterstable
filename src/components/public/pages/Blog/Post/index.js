import React, { Component } from "react";
import { connect } from "react-redux";
import { resetSelectedObject } from "../../../../../../actions";
import Header from "./Header";
import Content from "./Content";
import ProgressBar from "./ProgressBar";

class Post extends Component {
  render() {
    let post = this.props.selectedObject;
    //Render an individual post
    ///Header, ProgressBar, Content
    return (
      <div className="post">
        <Header
          title={post.title}
          subtitle={post.subtitle}
          author={post.author}
        />
        <ProgressBar />
        <Content content={post.content} />
        <button onClick={() => this.props.resetSelectedObject()}>
          Back to Feed
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedObject: state.selectedObject,
});

export default connect(mapStateToProps, { resetSelectedObject })(Post);
