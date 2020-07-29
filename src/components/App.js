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
//Public Components
import Home from "./public/pages/Home";
import Journal from "./public/pages/Journal";
import Library from "./public/pages/Library";
import Repository from "./public/pages/Repository";
import Auditorium from "./public/pages/Auditorium";
import About from "./public/pages/About";
//Private Components
import Dashboard from "./private/pages/Dashboard";
import Blogposts from "./private/pages/Blogposts";
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
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <Router>
          <Switch>
            <PublicRoute
              exact
              path="/"
              component={Home}
              queryOverride="/blogposts"
            />

            <PublicRoute
              exact
              path="/home"
              component={Home}
              queryOverride="/blogposts/alias/journal"
            />
            {/*---------------------Journal Routes---------------------*/}
            <PublicRoute
              exact
              path="/journal/:subpage/:year/:month/:slug"
              component={Journal}
              queryPrepend="/blogposts/alias"
              navbarDisable="yep"
            />

            <PublicRoute
              exact
              path="/journal/articles"
              component={Journal}
              queryPrepend="/blogposts/alias"
            />
            <PublicRoute
              exact
              path="/journal/bulletin"
              component={Journal}
              queryPrepend="/blogposts/alias"
            />
            <PublicRoute
              exact
              path="/journal/musings"
              component={Journal}
              queryPrepend="/blogposts/alias"
            />
            <PublicRoute
              exact
              path="/journal/poetry"
              component={Journal}
              queryPrepend="/blogposts/alias"
            />

            <PublicRoute
              exact
              path="/journal"
              component={Journal}
              queryPrepend="/blogposts/alias"
            />

            {/*---------------------Library Routes---------------------*/}

            <PublicRoute
              exact
              path="/library"
              component={Library}
              queryPrepend="/blogposts/alias"
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/:category"
              component={Library}
              queryPrepend="/blogposts/alias"
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/queue"
              component={Library}
              queryPrepend="/blogposts/alias"
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/book/:slug"
              component={Library}
              queryPrepend="/blogposts/alias"
              footerDisable="yep"
            />

            {/*---------------------Repository Routes---------------------*/}

            <PublicRoute exact path="/repository" component={Repository} />

            <PublicRoute
              exact
              path="/repository/documentation"
              component={Repository}
            />

            <PublicRoute
              exact
              path="/repository/documentation/:year/:month/:slug"
              component={Repository}
              queryPrepend="/blogposts/alias"
            />

            <PublicRoute
              exact
              path="/repository/projects"
              component={Repository}
            />

            <PublicRoute
              exact
              path="/repository/projects/:year/:month/:slug"
              component={Repository}
              queryPrepend="/blogposts/alias"
            />

            <PublicRoute
              exact
              path="/repository/snippets"
              component={Repository}
              queryPrepend="/blogposts/alias"
            />

            <PublicRoute
              exact
              path="/repository/snippets/:year/:month/:slug"
              component={Repository}
              queryPrepend="/blogposts/alias"
            />

            {/*---------------------Auditorium Routes---------------------*/}

            <PublicRoute exact path="/auditorium" component={Auditorium} />

            <PublicRoute
              exact
              path="/auditorium/theory"
              component={Auditorium}
            />

            <PublicRoute
              exact
              path="/auditorium/theory/:year/:month/:slug"
              component={Auditorium}
            />

            <PublicRoute
              exact
              path="/auditorium/playlists"
              component={Auditorium}
            />

            <PublicRoute
              exact
              path="/auditorium/playlists/:year/:month/:slug"
              component={Auditorium}
            />

            {/*---------------------Static Routes---------------------*/}
            <PublicRoute exact path="/about" component={About} />

            {/*---------------------Auth Routes---------------------*/}

            <Route path="/login" component={Login} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/resetPassword" component={ForgotPassword} />

            {/*---------------------Private Routes---------------------*/}

            <ProtectedRoute path="/me" component={Dashboard} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/blogposts" component={Blogposts} />

            {/*---------------------Error Routes---------------------*/}

            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
