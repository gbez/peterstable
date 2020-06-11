import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedObject } from "../../../../../../actions";

class FeedItem extends Component {
  render() {
    return (
      <div className="feed-item">
        <h1>Title</h1>
        <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80"></img>
        <h5>Description</h5>
        <button onClick={() => this.props.setSelectedObject({ post: "post" })}>
          Read More
        </button>
      </div>
    );
  }
}

export default connect(null, { setSelectedObject })(FeedItem);
