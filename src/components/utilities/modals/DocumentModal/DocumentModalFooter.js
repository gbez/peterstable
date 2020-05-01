import React, { Component } from "react";

class DocumentModalFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modalFooter">
        <button onClick={this.props.toggleModal}>Close Modal</button>
      </div>
    );
  }
}

export default DocumentModalFooter;
