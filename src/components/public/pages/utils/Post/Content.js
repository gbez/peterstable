import React, { Fragment, Component } from "react";
import ReactTooltip from "react-tooltip";

class Content extends Component {
  componentDidMount() {
    document.getElementById("content").innerHTML = `${this.props.content}`;
  }

  render() {
    return (
      <Fragment>
        <div id="content" className="content"></div>
        <p data-tip="hello world">Hover Me</p>
        <ReactTooltip id="main" place="top" type="dark" />
      </Fragment>
    );
  }
}

export default Content;
