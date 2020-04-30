import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Page from "./pages/Page";

//Will manage overall states for pageName, screen size/orientation.

class StateManager extends Component {
  constructor(props) {
    super(props);
    //instantiate states
    //PageName should be a state
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Sidebar />
        <Page pageName="relationships" />
      </div>
    );
  }
}

export default StateManager;
