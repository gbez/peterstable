import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import Sidebar from "./sidebar/Sidebar";
import Page from "./pages/Page";

//Will manage overall states for pageName, screen size/orientation.

class StateManager extends Component {
  constructor(props) {
    super(props);
    //instantiate states
  }

  render() {
    return (
      <div className="wrapper">
        <div className="nav">
          <NavBar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="page">
          <Page pageName="relationships" />
        </div>
      </div>
    );
  }
}

export default StateManager;
