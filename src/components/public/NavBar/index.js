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
      const navItems = document.querySelectorAll(".navbar-item");
      document.body.style.overflow = "hidden";
      navItems.forEach((element, index) => {
        element.style.animation = `navTransition 0.7s ease forwards ${
          index / 7 + 0.3
        }s`;
      });
    } else {
      this.setState({ navbarClass: "navbar" });
      document.body.style.overflow = "scroll";
    }
  }

  render() {
    return (
      <div className={this.state.navbarClass}>
        <nav>
          <h2>Title</h2>
          <div className="navbar-links">
            <NavBarItem text="Library" url="/library" />
            <NavBarItem text="Jots" url="/jots" />
            <NavBarItem
              text="Writing"
              url="/writing"
              childClass="navbar-dropdown-wrapper"
            >
              <NavBarDropdownItem text="Blog" url="/blog" />
              <NavBarDropdownItem text="Musings" url="/musings" />
              <NavBarDropdownItem text="Poetry" url="/poetry" />
              <NavBarDropdownItem text="journal" url="/journal" />
            </NavBarItem>
            <NavBarItem text="Repository" url="/repository" />
          </div>

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
