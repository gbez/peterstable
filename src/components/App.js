import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StateManager from "./StateManager";
import Public from "./public";
import PageNotFound from "./pages/errors/PageNotFound";
import "../css/App.css";
import "../css/Public.css";
import "../css/Private.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/relationships">
            <StateManager appName="relationships" />
          </Route>
          <Route path="/journal">
            <StateManager appName="journal" />
          </Route>
          <Route path="/blog">
            <Public />
          </Route>
          <Route path="/kitchen">
            <StateManager appName="kitchen" />
          </Route>
          <Route path="/users">
            <StateManager appName="users" />
          </Route>
          <Route path="/calendar">
            <StateManager appName="calendar" />
          </Route>
          <Route path="/public">
            <Public />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
