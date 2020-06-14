import React, { Component } from "react";
import NavBarDropdownItem from "./NavBarDropdownItem";

class NavBarItem extends Component {
  render() {
    return (
      <div className="navbar-item">
        <a href={this.props.url}>{this.props.text}</a>
        <div className="navbar-dropdown-item-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default NavBarItem;
