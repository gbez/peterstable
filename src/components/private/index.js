import React, { Component, useReducer } from "react";

class Private extends Component {
  render() {
    //If there is not User in the store...meaning nobody is signed in,
    //Redirect back to Public site with an alert or toast.
    return <div className="private">Fake Private Page</div>;
  }
}

export default Private;
