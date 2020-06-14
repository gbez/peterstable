import React, { Component } from "react";

class NavBarSearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div className="navbar-searchbar">
        <input placeholder="Search"></input>
        <span>
          <button onClick={this.onSubmit}>Submit</button>
        </span>
      </div>
    );
  }
}

export default NavBarSearchBar;
