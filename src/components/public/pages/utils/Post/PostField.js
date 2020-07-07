import React, { Component } from "react";

class PostField extends Component {
  render() {
    const Tag = this.props.tag;
    const post = this.props.post;
    const field = this.props.field;
    console.log(post[field]);
    return <Tag>{post[field]}</Tag>;
  }
}

export default PostField;
