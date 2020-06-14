import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import NavBarDropdownItem from "./NavBarItem/NavBarDropdownItem";
import NavBarSearchBar from "./NavBarItem/NavBarSearchBar";
import SearchResults from "./SearchResults";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <NavBarItem text="Writing" url="/writing">
            <NavBarDropdownItem text="Blog" url="/blog" />
            <NavBarDropdownItem text="Musings" url="/musings" />
            <NavBarDropdownItem text="Poetry" url="/poetry" />
            <NavBarDropdownItem text="journal" url="/journal" />
          </NavBarItem>
          <NavBarItem text="Library" url="/library" />
          <NavBarItem text="Jots" url="/jots" />
          <NavBarItem text="Repository" url="/repository" />
          <NavBarSearchBar />
          <SearchResults />
        </nav>
      </div>
    );
  }
}

export default NavBar;
