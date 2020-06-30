//React
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Route Middleware
import PublicRoute from "./routing/PublicRoute";
import ProtectedRoute from "./routing/ProtectedRoute";
//Error Handling
import PageNotFound from "./utilities/errors/PageNotFound";
import { ToastContainer } from "react-toastify";
//Auth
import Login from "./auth/login";
import ForgotPassword from "./auth/forgotPassword";
//Components
import Feed from "./public/Feed";
import Post from "./public/Post";
import Dashboard from "./private";
//CSS
import "../css/App.css";
import "../css/Public.css";
import "../css/Private.css";
import "../css/fontawesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <Router>
          <Switch>
            {/*---------------------Blog Routes---------------------*/}

            <PublicRoute
              exact
              path="/journal"
              component={Feed}
              wrapper="journal"
            />
            <PublicRoute
              exact
              path="/musings"
              component={Feed}
              wrapper="jouranl"
            />
            <PublicRoute
              exact
              path="/poetry"
              component={Feed}
              wrapper="journal"
            />
            <PublicRoute
              exact
              path="/bulletin"
              component={Feed}
              wrapper="journal"
            />
            <PublicRoute
              exact
              path="/published"
              component={Feed}
              wrapper="journal"
            />
            <PublicRoute exact path="/:year/:month/:slug" component={Post} />

            {/*---------------------Library Routes---------------------*/}

            <PublicRoute
              exact
              path="/library"
              component={Feed}
              wrapper="library"
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/queue"
              component={Feed}
              wrapper="library"
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/:year/:month/:slug"
              component={Post}
              wrapper="book"
              footerDisable="yep"
            />

            {/*---------------------Repository Routes---------------------*/}

            <PublicRoute
              exact
              path="/repository"
              component={Feed}
              wrapper="repository"
            />

            <PublicRoute
              exact
              path="/repository/snippets"
              component={Feed}
              wrapper="repository"
            />

            <PublicRoute
              exact
              path="/repository/snippets/:year/:month/:slug"
              component={Post}
              wrapper="repository"
            />

            <PublicRoute
              exact
              path="/repository/docs"
              component={Feed}
              wrapper="repository"
            />

            <PublicRoute
              exact
              path="/repository/docs/:year/:month/:slug"
              component={Post}
              wrapper="repository"
            />

            {/*---------------------Auditorium Routes---------------------*/}

            <PublicRoute
              exact
              path="/auditorium"
              component={Feed}
              wrapper="auditorium"
            />

            <PublicRoute
              exact
              path="/auditorium/theory"
              component={Feed}
              wrapper="auditorium"
            />

            <PublicRoute
              exact
              path="/auditorium/theory/:year/:month/:slug"
              component={Post}
              wrapper="auditorium"
            />

            <PublicRoute
              exact
              path="/auditorium/playlists"
              component={Feed}
              wrapper="auditorium"
            />

            <PublicRoute
              exact
              path="/auditorium/playlists/:year/:month/:slug"
              component={Post}
              wrapper="auditorium"
            />

            {/*---------------------Auth Routes---------------------*/}

            <Route path="/login" component={Login} />
            <Route path="/forgotPassword" component={ForgotPassword} />

            {/*---------------------Private Routes---------------------*/}

            <ProtectedRoute path="/me" component={Dashboard} />

            {/*---------------------Error Routes---------------------*/}

            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
