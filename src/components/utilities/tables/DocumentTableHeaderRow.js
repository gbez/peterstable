import React, { Component } from "react";

class DocumentTableHeaderRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        {this.props.docFields.map((field) => (
          <th>{field}</th>
        ))}
      </tr>
    );
  }
}

export default DocumentTableHeaderRow;
