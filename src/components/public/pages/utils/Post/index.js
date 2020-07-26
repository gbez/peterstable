/*

Post just handles making the axios call to retrieve and
subsequently display a specific post


*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../../../../actions";
import { getSafe } from "../helpers";
import PostField from "./PostField";
import Content from "./Content";
import ProgressBar from "./ProgressBar";
import IconScroll from "./IconScroll";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    let post = getSafe(() => this.props.feed.data.data[0], []);
    let i = 0;
    return (
      <Fragment>
        {this.props.children}
        <div className="subscribe-button"></div>
        {post.length != 0 && (
          <div className="post">
            <div
              style={{ backgroundImage: `url(${post.thumbnail})` }}
              className="header"
              id="header"
            >
              <div className="overlay"></div>
              <div className="header-text">
                {this.props.extract.map((el) => (
                  <PostField
                    key={i++}
                    tag={el.tag}
                    field={el.field}
                    post={post}
                  />
                ))}
                <br />
                {post.content ? (
                  <p>
                    {post.readableDate} | {post.readingTime.text}
                  </p>
                ) : (
                  <p></p>
                )}
                <p>
                  <b>By:</b> {post.author.firstName} {post.author.lastName}
                </p>
              </div>
              <IconScroll class="fa fa-arrow-circle-down" name="content" />
            </div>
            <ProgressBar />
            <Content content={post.content} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, { loadFeed })(Post);
