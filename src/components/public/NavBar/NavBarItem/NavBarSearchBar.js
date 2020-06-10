import React, { Component } from "react";

class NavBarSearchBar extends Component {
  render() {
    return (
      <div className="navbar-searchbar">
        {/* Comment 
            1. SearchBar
            2. Handle Search Results
            3. Callback to NavBar to display search results
          */}
        <input placeholder="Search"></input>
      </div>
    );
  }
}

export default NavBarSearchBar;
