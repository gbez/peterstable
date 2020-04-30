import React, { Component } from "react";
import ToggleSidebar from "./NavBarItems/ToggleSidebar";
import AppLogo from "./NavBarItems/AppLogo";
import SearchBar from "./NavBarItems/SearchBar";
import SettingsButton from "./NavBarItems/SettingsButton";
import AppMenu from "./NavBarItems/AppMenu";
import UserProfile from "./NavBarItems/UserProfile";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ToggleSidebar />
        <AppLogo />
        <SearchBar />
        <SettingsButton />
        <AppMenu />
        <UserProfile />
      </div>
    );
  }
}

export default NavBar;
