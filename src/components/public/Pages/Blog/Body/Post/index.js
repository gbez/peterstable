import React, { Component } from "react";
import { connect } from "react-redux";
import { resetSelectedObject } from "../../../../../../actions";
import Header from "./Header";
import Content from "./Content";
import ProgressBar from "./ProgressBar";

class Post extends Component {
  componentWillUnmount() {
    this.props.resetObject();
  }

  render() {
    //Render an individual post
    ///Header, ProgressBar, Content
    return (
      <div className="post">
        <Header />
        <ProgressBar />
        <Content />
        {/* Do Something with this.props.object */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedObject: state.selectedObject,
});

export default connect(mapStateToProps, { resetSelectedObject })(Post);
