import React, { Component } from "react";

class DocumentTableDataRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        {this.props.docFields.map((field) => (
          <td>{this.props.docItem[field]}</td>
        ))}
      </tr>
    );
  }
}

export default DocumentTableDataRow;
