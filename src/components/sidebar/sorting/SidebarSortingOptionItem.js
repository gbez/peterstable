import React, { Component } from "react";

class SidebarSortingOptionItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="sortingOptionItem">{this.props.name}</div>;
  }
}

export default SidebarSortingOptionItem;
