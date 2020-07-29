import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../../actions";

class DocumentTableDataRow extends Component {
  render() {
    const data = this.props.data;
    const fields = this.props.fields;

    return (
      <tr>
        {fields.map((field) => (
          <td>{data[field]}</td>
        ))}
        <td>
          <button onClick={() => this.props.toggleModal(data)}>Edit</button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { toggleModal })(DocumentTableDataRow);
