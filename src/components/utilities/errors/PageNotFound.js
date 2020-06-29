import React, { Component, useReducer } from "react";

class PageNotFound extends Component {
  render() {
    //If there is not User in the store...meaning nobody is signed in,
    //Redirect back to Public site with an alert or toast.
    return <div className="pageNotFound">Page Not Found</div>;
  }
}

export default PageNotFound;
