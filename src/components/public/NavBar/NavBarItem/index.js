import React, { Component } from "react";
import NavBarDropdownItem from "./NavBarDropdownItem";

class NavBarItem extends Component {
  render() {
    return (
      <div className="navbar-item">
        {/* Comment 
            1. Dispaly Link of whatever is in navBar
            2. Display DropDown Items 
          */}
        <button>NavBarItem</button>
        <NavBarDropdownItem />
      </div>
    );
  }
}

export default NavBarItem;
