import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StateManager from "./StateManager";
import PageNotFound from "./pages/errors/PageNotFound";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/relationships">
              <StateManager appName="relationships" />
            </Route>
            <Route path="/journal">
              <StateManager appName="journal" />
            </Route>
            <Route path="/blog">
              <StateManager appName="blog" />
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
            <Route exact path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
