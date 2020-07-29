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
    var page = document.querySelector(".page");
    if (this.state.navbarClass == "navbar") {
      this.setState({ navbarClass: "navbar responsive" });
      const navItems = document.querySelectorAll(".navbar-item");
      document.body.style.overflow = "hidden";
      page.classList.add("overlay");
      navItems.forEach((element, index) => {
        element.style.animation = `navTransition 0.7s ease forwards ${
          index / 7 + 0.3
        }s`;
      });
    } else {
      this.setState({ navbarClass: "navbar" });
      document.body.style.overflow = "scroll";
      page.classList.remove("overlay");
    }
  }

  render() {
    return (
      <div className={this.state.navbarClass}>
        <nav>
          <a href="/">
            <img
              alt="home"
              src="http://www.grantbesner.com/uploads/3/7/3/5/37354527/published/photo.png?1496050118"
            />
          </a>
          <div className="navbar-links">
            <NavBarItem
              text="Journal"
              url="/journal"
              childClass="navbar-dropdown-wrapper"
            >
              <a href="/journal/articles">Articles</a>
              <a href="/journal/bulletin">Bulletin</a>
              <a href="/journal/musings">Musings</a>
              <a href="/journal/poetry">Poetry</a>
            </NavBarItem>

            <NavBarItem
              text="Library"
              url="/library"
              childClass="navbar-dropdown-wrapper"
            >
              <a href="/library/books">Books</a>
              <a href="/library/queue">Queue</a>
            </NavBarItem>

            <NavBarItem
              text="Repository"
              url="/repository"
              childClass="navbar-dropdown-wrapper"
            >
              <a href="/repository/documentation">Documentation</a>
              <a href="/repository/projects">Projects</a>
              <a href="/repository/snippets">Snippets</a>
            </NavBarItem>

            <NavBarItem
              text="Auditorium "
              url="/auditorium"
              childClass="navbar-dropdown-wrapper"
            >
              <a href="/auditorium/conservatory">Conservatory</a>
              <a href="/auditorium/playlists">Playlists</a>
            </NavBarItem>

            <NavBarItem text="About" url="/about" />
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
