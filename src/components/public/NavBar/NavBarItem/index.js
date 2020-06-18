import React, { Component } from "react";
import NavBarDropdownItem from "./NavBarDropdownItem";

class NavBarItem extends Component {
  render() {
    return (
      <div className="navbar-item">
        {this.props.url && <a href={this.props.url}>{this.props.text}</a>}
        <div className={this.props.childClass}>{this.props.children}</div>
      </div>
    );
  }
}

export default NavBarItem;
