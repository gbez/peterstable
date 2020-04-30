import React, { Component } from "react";

class SidebarActionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="sidebarActionitem">{this.props.link}</div>;
  }
}

export default SidebarActionItem;
