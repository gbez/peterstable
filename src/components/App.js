//React
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Route Middleware
import PublicRoute from "./routing/PublicRoute";
import ProtectedRoute from "./routing/ProtectedRoute";
import RouteHandler from "./RouteHandler";
import PageNotFound from "./utilities/errors/PageNotFound";
//Components
import Private from "./private";
import Login from "./auth/login";
import Blog from "./public/pages/Blog";
//CSS
import "../css/App.css";
import "../css/Public.css";
import "../css/Private.css";
import "../css/fontawesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*---------------------Blog Routes---------------------*/}

          <PublicRoute path="/blog" component={Blog} />

          <Route path="/musings">
            <RouteHandler />
          </Route>

          <Route path="/poetry">
            <RouteHandler />
          </Route>

          <Route path="/journal">
            <RouteHandler />
          </Route>

          {/*---------------------Library Routes---------------------*/}

          <Route path="/library">
            <RouteHandler />
          </Route>

          {/*---------------------Repository Routes---------------------*/}

          <Route path="/repository">
            <RouteHandler />
          </Route>

          {/*---------------------Jots Routes---------------------*/}

          <Route path="/jot">
            <RouteHandler />
          </Route>

          {/*---Auth Routes---*/}

          <Route path="/login" component={Login} />

          <Route path="/me">
            <RouteHandler />
          </Route>

          <Route path="/forgotPassword">
            <RouteHandler />
          </Route>

          <Route path="/resetPassword">
            <RouteHandler />
          </Route>

          {/*---Error Routes---*/}

          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
