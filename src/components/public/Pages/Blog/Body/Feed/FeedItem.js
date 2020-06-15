import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedObject } from "../../../../../../actions";

class FeedItem extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="feed-item">
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <img
          width="100px"
          src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80"
        ></img>
        <span>
          <p>{item.publish_date}</p>
        </span>
        <button onClick={() => this.props.setSelectedObject(item)}>
          Select Post
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedObject: state.selectedObject };
};

export default connect(mapStateToProps, { setSelectedObject })(FeedItem);
