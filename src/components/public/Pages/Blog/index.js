import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuery } from "../../../../actions";
import SubscribePopUp from "./Subscribe/SubscribePopUp";
import UnsubscribePage from "./Subscribe/UnsubscribePage";
import Feed from "./Feed";

class Blog extends Component {
  componentDidMount() {
    this.props.setQuery("/blogposts");
  }
  render() {
    let blog = <Feed />;
    return <div className="blog">{blog}</div>;
  }
}

const mapStateToProps = (state) => ({ selectedObject: state.selectedObject });

export default connect(mapStateToProps, { setQuery })(Blog);
