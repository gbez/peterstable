import React, { Component } from "react";
import { extend } from "jquery";

class IconScroll extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var el = document.getElementById(this.props.name);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="icon-scroll">
        <i onClick={this.handleClick} className={this.props.class}></i>
      </div>
    );
  }
}

export default IconScroll;
