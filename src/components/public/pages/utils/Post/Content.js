import React, { Component } from "react";
{
  /* Do some custom parsing  */
}
class Content extends Component {
  componentDidMount() {
    document.getElementById("content").innerHTML = `${this.props.content}`;
  }
  render() {
    return <div id="content" className="content"></div>;
  }
}

export default Content;
