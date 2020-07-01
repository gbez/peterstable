/*

The Whole point of feed is to just make an axios call
to the backend endpoint and return the data nicely in FeedItems
and handle pagination and such....

It will be wrapped by the PageRouter
and the stylesheet will handle formatting

*/
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
          <h1>Feed</h1>
          {feed.map((obj) => (
            <FeedItem key={obj._id} item={obj} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Feed);
