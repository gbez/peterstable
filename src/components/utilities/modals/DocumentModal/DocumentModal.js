import React, { Component } from "react";
import DocumentModalHead from "./DocumentModalHead";
import DocumentModalBody from "./DocumentModalBody";
import DocumentModalFooter from "./DocumentModalFooter";

class DocumentModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="documentModal">
        <DocumentModalHead />
        <DocumentModalBody />
        <DocumentModalFooter toggleModal={this.props.toggleModal} />
      </div>
    );
  }
}

export default DocumentModal;
