import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isExpired } from "../utilities/auth";
import { toast } from "react-toastify";
import { Fragment } from "react";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    const token = localStorage.getItem("token");
    var isAuthenticated = false;
    if (token && !isExpired(token)) {
      isAuthenticated = true;
    } else {
      localStorage.removeItem("token");
      toast.error("JWT Token is Invalid! Log In Again");
    }
    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect
        to={{ pathname: "/login", state: { from: window.location.pathname } }}
      />
    );
  }
}

export default ProtectedRoute;
