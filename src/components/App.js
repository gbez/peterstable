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
import Journal from "./public/pages/Journal";
import Library from "./public/pages/Library";
import Repository from "./public/pages/Repository";
import Auditorium from "./public/pages/Auditorium";
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
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <Router>
          <Switch>
            {/*---------------------Blog Routes---------------------*/}
            <PublicRoute
              exact
              path="/journal/:year/:month/:slug"
              component={Journal}
              queryOverride="/blogposts/alias/journal"
            />

            <PublicRoute
              path="/journal"
              component={Journal}
              queryOverride="/blogposts/journal"
            />
            <PublicRoute exact path="/musings" component={Journal} />
            <PublicRoute exact path="/poetry" component={Journal} />
            <PublicRoute exact path="/bulletin" component={Journal} />
            <PublicRoute exact path="/published" component={Journal} />

            {/*---------------------Library Routes---------------------*/}

            <PublicRoute
              exact
              path="/library"
              component={Library}
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/queue"
              component={Library}
              footerDisable="yep"
            />

            <PublicRoute
              exact
              path="/library/:year/:month/:slug"
              component={Library}
              footerDisable="yep"
            />

            {/*---------------------Repository Routes---------------------*/}

            <PublicRoute exact path="/repository" component={Repository} />

            <PublicRoute
              exact
              path="/repository/snippets"
              component={Repository}
            />

            <PublicRoute
              exact
              path="/repository/snippets/:year/:month/:slug"
              component={Repository}
            />

            <PublicRoute exact path="/repository/docs" component={Repository} />

            <PublicRoute
              exact
              path="/repository/docs/:year/:month/:slug"
              component={Repository}
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
