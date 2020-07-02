/*

Post just handles making the axios call to retrieve and
subsequently display a specific post


*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe } from "../helpers";
import PostField from "./PostField";

class Post extends Component {
  componentDidMount() {
    this.props.loadFeed();
  }
  render() {
    let post = getSafe(() => this.props.feed.data.data[0], []);
    return (
      <Fragment>
        {this.props.children}
        <div className="post">
          {this.props.extract.map((el) => (
            <PostField key={el} tag={el.tag} field={el.field} post={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Post);
