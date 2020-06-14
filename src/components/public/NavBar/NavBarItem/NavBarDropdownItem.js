import React, { Component } from "react";

const NavBarDropdownItem = (props) => {
  return (
    <div className="navbar-dropdown-item">
      <a href={props.url}>{props.text}</a>
    </div>
  );
  {
    /* Return Dropdown Item */
  }
};

export default NavBarDropdownItem;
