import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Private from "./private";
import Login from "./auth/login";
import { setPage, setQuery } from "../actions";
/*
  What the State Manager Does
    1. Checks if a user is loggin in for Protected Pages
    2. Sets the page in the redux store with the appropriate props
  */

class RouteHandler extends Component {
  render() {
    let toReturn;
    let page;
    let query;
    var renderProps = {
      //Default Render Props;
      nav: true,
      footer: true,
    };
    //1. Authorization
    //1a) If this.props.public and the user isn't logged in:
    //1b) Redirect to Login

    //2. Page switch
    //2a) Switch (this.props.page)
    //2b) Set return to public or private
    //2c) Specify render options in props
    //2d) Set query params in Store
    //2e) Set page in Store

    //3. Return return obj.

    //1 - Page Options
    switch (window.location.pathname) {
      case "/journal":
        page = "blog";
        query = "/blogposts";
        break;
      case "/login":
        page = "login";
      default:
        break;
    }

    //2 - Redux
    this.props.setPage(page);
    this.props.setQuery(query);

    //3 - Auth
    if (this.props.public == "false" && this.props.user != null) {
      toReturn = <Private {...renderProps} />;
    } else if (this.props.public == "false" && !this.props.user) {
      toReturn = <Login />;
    } else {
      toReturn = <Private {...renderProps} />;
    }

    return <Fragment>{toReturn}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { setPage, setQuery })(RouteHandler);
