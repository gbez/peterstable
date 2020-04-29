import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StateManager from "./StateManager";
import "../css/App.css";

class App extends Component {
  render() {
    return <StateManager />;
  }
}

export default App;
