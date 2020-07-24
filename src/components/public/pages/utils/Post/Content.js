import React, { Fragment, Component } from "react";

class Content extends Component {
  componentDidMount() {
    document.getElementById("content").innerHTML = `${this.props.content}`;
  }

  render() {
    return <div id="content" className="content"></div>;
  }
}

export default Content;
