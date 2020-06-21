import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateManager from "./StateManager";
import PageNotFound from "./pages/errors/PageNotFound";
import "../css/App.css";
import "../css/Public.css";
import "../css/Private.css";
import "../css/fontawesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Blog
              1. Public is true
              2. Page is Blog
              3. No specification in blog filter
          */}
          <Route path="/blog">
            <StateManager public="false" />
          </Route>
          {/* Login Page
              1. Open to public
              2. It's the login page
              3. Nav and Footer are automatically on, but we can override
                 and turn them off from the router...so whenever we specify a new page,
                 we have options from the router that configure the page automatically.
          */}
          <Route path="/login">
            <StateManager public="true" />
          </Route>
          {/* If we miss all routes, page that specifies page not found*/}
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
