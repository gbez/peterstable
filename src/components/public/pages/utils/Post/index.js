/*

Post just handles making the axios call to retrieve and
subsequently display a specific post


*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe } from "../helpers";

class Post extends Component {
  componentDidMount() {
    this.props.loadFeed();
  }
  render() {
    let post = getSafe(() => this.props.feed.data.data, []);
    return (
      <Fragment>
        {this.props.children}
        <div className="post">
          <h1>{post.subtitle}</h1>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Post);
