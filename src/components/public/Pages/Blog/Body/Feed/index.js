import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "./FeedItem";
import { setSelectedObject, loadFeed } from "../../../../../../actions";

class Feed extends Component {
  componentDidMount() {
    {
      /*    
  When Component is mounted, we want to call our Redux Store
  to fetch all the posts from the backend.

  We should pass in options for category, tag, sort by, and otherwise.
*/
    }
    this.props.loadFeed();
  }

  render() {
    //Render Feed
    //Map List of posts to post items
    //Maybe display some type of thing at the top of the page.
    //Like what category we are currently in or something like that.
    return (
      <div className="feed">
        {/* We want to to call this.props.feed and map it onto Feed Items */}
        <FeedItem />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { setSelectedObject, loadFeed })(Feed);
