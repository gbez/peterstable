import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe } from "../../utils/helpers";
import FeedItem from "./FeedItem";

class Feed extends Component {
  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    let feed = getSafe(() => this.props.feed.data.data, []);
    return (
      <Fragment>
        {this.props.children}
        <div className="feed">
          {feed.map((obj) => {
            return obj.title ? <FeedItem key={obj._id} item={obj} /> : null;
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Feed);
