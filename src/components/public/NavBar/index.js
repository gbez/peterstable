import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import NavBarDropdownItem from "./NavBarItem/NavBarDropdownItem";
import NavBarSearchBar from "./NavBarItem/NavBarSearchBar";
import SearchResults from "./SearchResults";
import { FaBars } from "react-icons/fa";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "navbar",
    };
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  handleIconClick() {
    if (this.state.navbarClass == "navbar") {
      this.setState({ navbarClass: "navbar responsive" });
    } else {
      this.setState({ navbarClass: "navbar" });
    }
  }

  render() {
    return (
      <div className={this.state.navbarClass}>
        <nav>
          <NavBarItem
            text="Writing"
            url="/writing"
            childClass="navbar-dropdown-item-wrapper"
          >
            <NavBarDropdownItem text="Blog" url="/blog" />
            <NavBarDropdownItem text="Musings" url="/musings" />
            <NavBarDropdownItem text="Poetry" url="/poetry" />
            <NavBarDropdownItem text="journal" url="/journal" />
          </NavBarItem>
          <NavBarItem text="Library" url="/library" />
          <NavBarItem text="Jots" url="/jots" />
          <NavBarItem text="Repository" url="/repository" />
          <div className="icon">
            <FaBars onClick={this.handleIconClick} />
          </div>
          {/*
          <NavBarSearchBar />
          <SearchResults />*/}
        </nav>
      </div>
    );
  }
}

export default NavBar;
