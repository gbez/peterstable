import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "./FeedItem";
import { setSelectedObject, loadFeed } from "../../../../../actions";

class Feed extends Component {
  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    function getSafe(fn, defaultVal) {
      try {
        return fn();
      } catch (e) {
        return defaultVal;
      }
    }
    let data = getSafe(() => this.props.feed.data.data, []);
    return (
      <div className="feed">
        {data.map((obj) => (
          <FeedItem key={obj._id} item={obj} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { setSelectedObject, loadFeed })(Feed);
