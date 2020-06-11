import React from "react";
import { connect } from "react-redux";
import { setSelectedObject } from "~/actions";

const FeedItem = (props) => {
  return (
    <div className="feed-item">
      <h1>Title</h1>
      <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80"></img>
      <h5>Description</h5>
      <button onClick={this.props.setPostId(this.props._id)}>Read More</button>
    </div>
  );
};

export default connect(null, { setSelectedObject })(FeedItem);
