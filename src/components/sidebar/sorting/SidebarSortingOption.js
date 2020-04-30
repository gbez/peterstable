import React, { Component } from "react";
import SortingOptionItem from "./SidebarSortingOptionItem";

class SidebarSortingOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  }

  render() {
    const expanded = this.state.expanded;
    let items;
    if (expanded) {
      items = (
        <div>
          {this.props.sortingOptionItems.map((item) => (
            <SortingOptionItem key={item._id} name={item.groupName} />
          ))}
        </div>
      );
    } else {
      items = null;
    }
    return (
      <div className="sortingOptionsWrapper">
        <div className="sortionOption">
          <button onClick={this.handleButtonClick}>{this.props.name}</button>
        </div>
        {items}
      </div>
    );
  }
}

export default SidebarSortingOption;
