import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import NavBarSearchBar from "./NavBarItem/NavBarSearchBar";
import SearchResults from "./SearchResults";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* Comment 
            1. NavBarItem(s)
            2. NavBarSearchBar
            3. Handle Search Bar Results
          */}
        <NavBarItem />
        <NavBarSearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default NavBar;
