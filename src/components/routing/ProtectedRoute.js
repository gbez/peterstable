import React, { Component } from "react";
import { connect } from "react-redux";
import { restoreUser } from "../../actions";
import { Redirect } from "react-router-dom";
import { isExpired } from "../utilities/helpers";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    const token = localStorage.getItem("token");
    var isAuthenticated = false;
    if (token) {
      if (!isExpired(token)) {
        isAuthenticated = true;
        this.props.restoreUser();
      }
    }
    return isAuthenticated ? (
      <div className="page">
        <Component />
      </div>
    ) : (
      <Redirect
        to={{ pathname: "/login", state: { from: window.location.pathname } }}
      />
    );
  }
}

export default connect(null, { restoreUser })(ProtectedRoute);
